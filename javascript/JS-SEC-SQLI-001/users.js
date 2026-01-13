router.get('/search', async (req, res) => {
   const { email } = req.query;
   
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const users = await db.query(query);
   
   res.json({ users });
 });