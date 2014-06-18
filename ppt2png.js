var exec = require('child_process').exec,
    fs = require('fs');


var ppt2png = function(input, output, callback) {
  exec('time unoconv -f pdf -o ' + output + '.pdf ' + input, 
      function( error, stdout, stderr) {
        //console.log('unoconv stdout: ', stdout);
        //console.log('unoconv stderr: ', stderr);
        if (error !== null) {
          callback(error);
        } else {
          pdf2png(output+'.pdf', output, callback);
        }
      });
}

var pdf2png = function(input, output, callback) {
  exec('time convert -resize 1200 -density 200 ' + input + ' ' + output+'.png', 
      function (error, stdout, stderr) {
        //console.log('convert stdout: ', stdout);
        //console.log('convert stderr: ', stderr);
        if (error !== null) {
          callback(error);
        } else {
          fs.unlink(input, function(err) {
            if(err) {
              console.log(err);
            } else {
              callback(null);
            }
          });
        }
      });
}

// ppt to jpg by unoconv directly
var ppt2jpg = function(input, output) {
  exec('unoconv -f html -o ' + output + '/ ' + input, 
      function( error, stdout, stderr) {
        console.log('unoconv stdout: ', stdout);
        console.log('unoconv stderr: ', stderr);
        if (error !== null) {
          console.log('unoconv err: ', error);
        } else {
          exec('rm ' + output + '/*.html ' + output + '/' + output, 
            function(){
              if(error !== null) {
                console.log('rm err: ', error);
              }
            });
        }
      });
}

module.exports = ppt2png;


// Sample
//ppt2jpg('tmp.pptx', 'img');

//ppt2png('tmp.pptx', './out/img', function(err) {
  //console.log(err);
//});
