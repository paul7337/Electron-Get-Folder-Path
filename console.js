const exec = require('child_process').exec;

function execute(command, callback) {
    exec(command, (error, stdout, stderr) => { 
        callback(stdout); 
    });
};

// call the function
// execute('git clone https://github.com/elementphp/element C:/users/paul.lawton/testclone', (output) => {
//     console.log(output);
// });