}
 
   async findByEmail(email: string): Promise<User | null> {
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    return this.userRepository.query(query);
   }
 }