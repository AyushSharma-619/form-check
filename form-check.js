var fs = require('fs');
var path = require('path');

function checkInputLength(input, expectedLength , errorCallback){
    if(input.length == expectedLength ) {
        return true
    }
    else {
        errorCallback();
    }
}

function checkInputDataType(input , expectedType , errorCallback){
    if(typeof input == typeof expectedType){
        return true
    }
    else{
        errorCallback();
    }
}


function checkFileType(filePath, expectedFileType ){
    var ext = path.extname(filePath).toLowerCase();
    var providedFileType = expectedFileType.toLowerCase();
    if(providedFileType == ext){
        return true;
    }
    else{
        // returns extension name of file for error handling
        return ext;
    }
}

function checkFileSize(filePath,expectedFileSize){
    fs.stat(filePath, (err,stats)=>{
        if(err){
            return "error processing file"
        }
        // returns file size in MegaByte
        return stats.size/(1024*1024)
    })
    
}


function checkEmail(email,errorCallback){
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) 
    { 
        return true; 
    }
    else{
        errorCallback();
    }
}


function castDataType(){}

