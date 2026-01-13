function loadSession(req, res, next) {
   const sessionCookie = req.cookies.session;
   
   if (sessionCookie) {
    req.session = JSON.parse(
      Buffer.from(sessionCookie, 'base64').toString()
    );
   }