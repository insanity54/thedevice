var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var _ = require('lodash');
var del = require('del');
var browserSync = require('browser-sync');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
//var api = require('./api/api');


var reload = browserSync.reload;

// cache a reference to watchify
var bundler = _.memoize(function(watch) {
  var options = {debug: true};
  if (watch) {
    _.extend(options, watchify.args);
  }
  var b = browserify('./src/main.js', options);
  if (watch) {
    b = watchify(b);
  }
  return b;
});

function bundle(cb, watch) {
  return bundler(watch).bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
    .on('end', cb)
    .pipe(reload({ stream: true }));
}

var handleErrors = function() {
  var args = Array.prototype.slice.call(arguments);
  delete args[0].stream;
  $.util.log.apply(null, ['fARTSING ERROS']);
  $.util.log.apply(null, args);
  this.emit('end');
};




// put html into dist
gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist'));
});


// bundle css into one file & put in dist
gulp.task('styles', function() {
  return gulp.src('./src/main.less')
    .pipe($.less())
    .pipe($.autoprefixer())
    .pipe($.rename('bundle.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('jshint', function() {
  return gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

gulp.task('scripts', function(cb) {
  process.env.BROWSERIFYSWAP_ENV = 'dist';
  bundle(cb, true);
});

gulp.task('test', [
  'jshint',
  //'mocha'
]);

gulp.task('clean', function(cb) {
  del([
    'app/tmp'
  ], cb);
});

gulp.task('build', [
  'clean',
  'html',
  'styles',
  'scripts'
]);

gulp.task('watch', ['build'], function(cb) {
  browserSync({
    server: {
      baseDir: 'dist'
    //   middleware: function(req, res, next) {
    //     api(req, res, next);
    //   }
    },
    port: process.env.PORT || 3000
  });

  reporter = 'dot';
  bundler(true).on('update', function() {
    gulp.start('scripts');
    //gulp.start('test');
  });
  //gulp.watch('./test/**/*.js', ['test']);
  gulp.watch(['./src/main.less', './src/**/*.css'], ['styles']);
  gulp.watch(['./src/*.html'], ['html']);
});


gulp.task('default', ['watch']);