# Xiangqi Client
A game written on Phaser 3 on Typescript


### Project Structure
##### Typescript common files
* `package.json`, `node_modules`:
[npm](https://github.com/npm/cli) scripts and dependencies
* `webpack.config.js`, `index.html`:
We use [webpack](https://github.com/webpack/webpack) to build all ts 
files to one distributable file `dist/app.js`
* `jest.config.js`:
Unittest framework [jest](https://github.com/facebook/jest)
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