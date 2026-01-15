if (!data || !data.user) {
    return null;
  }
  
    email: data.user.email?.toLowerCase() || '',