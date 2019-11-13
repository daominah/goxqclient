# Xiangqi Client
A game written on Phaser 3 on Typescript


### Project Structure

##### Typescript common
* `package.json`:
[npm](https://github.com/npm/cli) is a package manager for JavaScript.
    * Dependencies of the project
    * Build: [webpack](https://github.com/webpack/webpack) 
    build all ts files to one distributable js file 
    * Test: [mocha](https://github.com/mochajs/mocha) is test framework 
    and [rewire](https://github.com/jhnns/rewire) help call unexported 
    functions and variables.
* `webpack.config.js`, `dist/app.js`, `index.html`: webpack files

##### `src/public`
Static image, sound, ..
##### `src/views`
Define how your app renders on the client (html, ..)
##### `src/drive`
Network, database, messaging system, ..
##### `src/core`
Application core business rules, can be test without drivers


### Docker
```docker build --tag=goxqclient --file=./Dockerfile .```  
  
```docker run -dit --name=goxqclient --restart=no --network=host goxqclient```  