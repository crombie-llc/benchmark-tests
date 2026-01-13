function createBackup(filename) {
   return new Promise((resolve, reject) => {
    exec(`tar -czf backups/${filename}.tar.gz data/`, 
         (error, stdout, stderr) => {
       if (error) reject(error);
       else resolve(stdout);
     });