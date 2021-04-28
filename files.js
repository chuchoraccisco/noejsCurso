

//import system module named fs
const fs = require('fs');

////reading file 
////coming 2 arguments, one is string the second is a function which is triggered when the path is completed
////the path is the relative path where the file is located
////the function is asynchronous 
////the function contains 2 values, err and data
//fs.readFile('./docs/blog1.txt', (err, data) => {
//    if (err) {
//        console.log(err);
//    }

//    console.log(data.toString());
//});

 
//three arguments
//first argument relative path
//second is text we want to write
//third call back function
//fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//    console.log('file was written');

//});

//directory
//we create in the current directory
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    }) 
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}