const chalk = require('chalk');

/**
 * @function pad - It is necessary for
 * @returns { 0 } before the number passed if it is greater than 10
 * @returns { '' }  before the number passed if it is less than 10
 * @param { n } - This is the number
 */

function pad(n) {
  
    if (n < 10) {
  
        return '0' + n;
  
    } else {
  
        return '' + n;
  
    };

};

/**
 * Making the clock
 * It will look something like [05:41:05 | 20/6/2018]
 * The date and time is based on when it was created
 */

var t = new Date();

var hours = chalk.cyan.bold(pad(t.getHours()));
var minutes = chalk.cyan.bold(pad(t.getMinutes()));
var seconds = chalk.cyan.bold(pad(t.getSeconds()));
var date = chalk.cyan.bold(t.getDate());
var month = chalk.cyan.bold(pad(t.getMonth()));
var year = chalk.cyan.bold(t.getFullYear());

var colon = chalk.gray.bold(':');
var slash = chalk.gray.bold('/')

var time = hours + colon + minutes + colon + seconds;
var calender = date + slash + month + slash + year;

var clock = '[' + time + ' | ' + calender + ']';

/*
* The data and times will differ, depending upon your time and date
* NOTE: The SUCCESS will have a green background not []
* Expected output => [12:12:12 | 20/06/18] [SUCCESS] Your text 
*/

function Logger() {

    /**
     * @param { text } - The text to log in the console 
    */

    this.success = function(text) {

        return console.log(clock + ' ' + chalk.bgGreen.bold(' SUCCESS ') + ' ' + chalk.green.bold(text));

    };

    this.error = function(text) {

        return console.log(clock + ' ' + chalk.bgRed.bold(' ERROR ') + ' ' + chalk.red.bold(text));

    };

    this.warning = function(text) {

        return console.log(clock + ' ' + chalk.bgYellow.bold(' WARNING ') + ' ' + chalk.yellow.bold(text));

    };

    this.alert = function(text) {

        return console.log(clock + ' ' + chalk.bgBlue.bold(' ALERT ') + ' ' + chalk.blue.bold(text));

    };

    this.debug = function(text) {

        return console.log(clock + ' ' + chalk.bgWhite.black(' DEBUG ') + ' ' + chalk.white.bold(text));

    };

};

/*
* The data and times will differ, depending upon your time and date
* NOTE: The TITLE will have a green background not []
* Expected output => [12:12:12 | 20/06/2018] [TITLE] Your text
*/

function CustomLogger() {

    /**
     * @param { text } - The text to log in the console 
    */

    this.success = function(title, text) {

        return console.log(clock + ' ' + chalk.bgGreen.bold(` ${title} `) + ' ' +  chalk.green.bold(text));
        
    };

    this.error = function(title, text) {

        return console.log(clock + ' ' + chalk.bgRed.bold(` ${title} `) + ' ' + chalk.red.bold(text));

    };

    this.warning = function(title, text) {

        return console.log(clock + ' ' + chalk.bgYellow.bold(` ${title} `) + ' ' + chalk.yellow.bold(text));

    };

    this.alert = function(title, text) {

        return console.log(clock + ' ' + chalk.bgBlue.bold(` ${title} `) + ' ' + chalk.blue.bold(text));

    };

    this.debug = function(title, text) {

        return console.log(clock + ' ' + chalk.bgWhite.black(` ${title} `) + ' ' + chalk.white.bold(text));

    };

};

module.exports = new Logger();
module.exports.custom = new CustomLogger();
