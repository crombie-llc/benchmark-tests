const filepath = `./uploads/${req.params.filename}`;
  res.sendFile(filepath);