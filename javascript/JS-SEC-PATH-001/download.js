const express = require('express');
 const router = express.Router();
 
 router.get('/file/:filename', (req, res) => {
  const filepath = `./uploads/${req.params.filename}`;
  res.sendFile(filepath);
 });
 
 module.exports = router;