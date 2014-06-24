# PPT2PNG

This node package let you convert documents from PPT to Image.

## Requirements

PPT2PNG requires the following software to be installed:

* unoconv
* LibreOffice-dev
* ImageMagick


## Installation

    npm install ppt2png

Debian/Ubunut:

    sudo apt-get install unoconv libreoffice-dev imagemagick
    

## Basic Usage

    var ppt2png = require('ppt2png');
    
    ppt2png('./foo.ppt', './output/img', function( err ){
        if(err) {
            console.log(err);
        } else {
            console.log('convert successful.');
        }
    }); 



