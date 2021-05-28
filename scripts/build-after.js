module.exports = (context) => {
  const { exec } = require("child_process");
  exec('rm -r www/3rdpartylicenses.txt', (error, stdout, stderr) => {
    if (error) {
      console.error('EXEC ERROR', error);
      return;
    }
    if (stderr) {
      console.error('EXEC STDERR', stderr);
      return;
    }
    console.log(stdout);
  });
};
