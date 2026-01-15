if (!this.pending.has(key)) {
      const promise = this.fetchFromDb(key);
      this.pending.set(key, promise);
      const value = await promise;
      this.cache.set(key, value);
      this.pending.delete(key);
      return value;
    }
    return this.pending.get(key);