const chalk = require('chalk');
console.log(chalk.blue('Success') + " " + chalk.red('Fire'));

console.log(`
CPU: ${chalk.red.inverse.bold('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));