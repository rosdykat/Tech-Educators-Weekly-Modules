// example: how to code stored in your nodle modules
// we need to import the code from the node modules - whenever you use code not part of the file you are using - import the code
// import something from somewhere --> the new way of importing, ES6 syntax
// require() --> the old way of importing data, will not use this most of the time. Only for older npms??

const cowsay = require("cowsay");
// if using a newer npm
// import cowsay from "cowsay";

// tips

// to make a package go from common.js to module, add type : “module”
// You would do this if an old package uses common.js. Most packages should already work

// in package.json
// add “dev”: “node app” under scripts to run the package without running node app
// you would then type “npm run dev” in the terminal to specifically fun just this packages

// you cannot store packages in github accounts, when you push your projects do not include the packages
// add a .gitignore file to make sure our node_modules are NOT pushed to Github
