const seen = new Set();
  const dupes = new Set();
  
  for (const item of items) {
    if (seen.has(item.id)) {
      dupes.add(item.id);
    } else {
      seen.add(item.id);
    }
  }
  
  return items.filter(item => dupes.has(item.id));