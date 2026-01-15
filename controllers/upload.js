try {
    const result = await processFile(file);
    const saved = await saveToDatabase(result);
    
    res.json({ success: true, id: saved.id });
  } catch (error) {
    console.error('Upload failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }