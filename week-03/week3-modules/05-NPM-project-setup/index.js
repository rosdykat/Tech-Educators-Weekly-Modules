console.log("Module 5: NPM Project Setup");

import chalk from "chalk";

console.log(chalk.blue("This is blue!!"));

const yellowTime = chalk.dim.yellow;

console.log(yellowTime("This text is fading away!"));

const blueTime = chalk.bgBlue.white;

console.log(blueTime("it's blue time!!"));

console.log(blueTime("It's blue time!!"), yellowTime("yellow time woo"));

const megaChalk =
  chalk.bold.italic.underline.inverse.overline.strikethrough.cyan;

console.log(megaChalk("i am the mega chalk"));
