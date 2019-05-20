npm init -y
create index.js
create index.html
use index.js in index.html
create greeting.js
call greet frunction from index.js
now add greeting.js from index.html
# chrome does not not understand ES6 module- here we have added export which is the part of ES6 module


# install web pack
# this is for webpack Zero configuration 
npm install --save-dev webpack
add build script in the package.json
you can opt for production or development mode by doing like this 
// reference : https://webpack.js.org/concepts
  "build": "webpack" // this is for production mode
  "build": "webpack --mode  development" // this is for development mode 
npm run  build // it will bundel both the javascript files[Index and greeting] into one file called main.js, which can be found in the dist directory. You can also notice that It does not perform any operation on the index.html

# Now we can move from zero configuration to some configuration 
1. create "webpack.config.js" file manually in the root directory
2. install below packages
    html-webpack-plugin html-loader copy-webpack-plugin

npm i -D @babel/core  babel-loader  @babel/preset/env

http://www.matthiassommer.it/software-architecture/webpack-node-modules/

