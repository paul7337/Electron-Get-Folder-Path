const exec = require('child_process').exec;

var remote = require('remote'); 

var dialog = remote.require('dialog'); 

var wat = "";
function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};


// function selectDirectory() {
//  //var wat = app;
//   dialog.showOpenDialog(mainWindow, {
//     properties: ['openDirectory']
//   })
// }

 // selectDirectory();
// call the function
// execute('git clone https://github.com/elementphp/element C:/users/paul.lawton/testclone', (output) => {
//     console.log(output);
// });