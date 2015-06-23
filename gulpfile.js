var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');


// put html into dist
gulp.task('html', function() {
  return gulp.src('./src/index.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist'));
});


// bundle css into one file & put in dist
gulp.task('styles', function() {
  return gulp.src('./src/main.less')
    .pipe($.autoprefixer())
    .pipe($.rename('bundle.css'))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }));
});


// 
gulp.task('scripts', function(cb) {
  process.env.BROWSERIFYSWAP_ENV = 'dist';
  bundle(cb, true);
});

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
      baseDir: 'dist',
      middleware: function(req, res, next) {
        api(req, res, next);
      }
    }
  });

  reporter = 'dot';
  bundler(true).on('update', function() {
    gulp.start('scripts');
    gulp.start('test');
  });
  gulp.watch('./test/**/*.js', ['test']);
  gulp.watch(['./src/main.less', './src/**/*.less'], ['styles']);
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['watch']);