todo list:



# server side beauty

## in /index.js

* call /app/app.js


## in /app/app.js

* stand by until admin chooses a game type
* start that game type by calling /game/???.js


## in /game/domination.js

* this is the code that responds to events sent from backbone on the client side


events that it would handle:

* start (accepts param for time to win)
* pause
* stop




# fix fonts

## option 1

gulp task to put fonts in root of dist
override bootstrap css with @font-face in root of web


## option 2

gulp task to create font directory in root of dist
