exec(`tar -czf backups/${filename}.tar.gz data/`, 
         (error, stdout, stderr) => {