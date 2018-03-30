
var exec = require('child_process').exec;
var android = exec('sh android.sh');
exec('sh android.sh', (err, stdout, stderr) => {
    if (err) {
        console.log('get weather api error:' + stderr);
    } else {
        console.log();
    }
});