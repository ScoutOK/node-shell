// console.log(process);
// console.log(process.hrtime());
// console.log();
var Command = require('./command')

const myPrompt = '\nprompt > '

// Output a prompt
process.stdout.write(myPrompt);

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (data) {
  var dataArr = data.toString().trim().split(' ');
  const cmd = dataArr.shift();
  //dataArr becomes one parameter
  var parameter = dataArr.join(' ');
  if(Command[cmd]) {
    Command[cmd](dataArr);
  } else {
    process.stderr.write('Command not found: ' + cmd);
    process.stdout.write(myPrompt);
  }

});
