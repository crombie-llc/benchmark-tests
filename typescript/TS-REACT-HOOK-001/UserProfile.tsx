useEffect(() => {
     fetchUser(userId).then(setUser);
  }, [userId]);
 
   return <div>{user?.name}</div>;
 };