var fs = require('fs');

module.exports = {
  pwd: function() {
    process.stdout.write(__dirname);
    process.stdout.write('\nprompt > ');
  },
  date: function () {
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function () {
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write('\nprompt > ');
  });
  },
  echo: function (arg) {
    process.stdout.write(arg);
    process.stdout.write('\nprompt > ');
  },
  cat: function (file) {
    fs.readFile(__dirname+"/"+file, function (err, data) {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    })
  },
  head: function (file) {
  fs.readFile(__dirname+"/"+file, function (err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      var less = lines.splice(0, 5).join('\n');
      process.stdout.write(less);
      process.stdout.write('\nprompt > ');
    })
  },
  tail: function (file) {
  fs.readFile(__dirname+"/"+file, function (err, data) {
      if (err) throw err;
      var lines = data.toString().split('\n');
      var less = lines.splice(-5).join('\n');
      process.stdout.write(less);
      process.stdout.write('\nprompt > ');
    })
  }
}
