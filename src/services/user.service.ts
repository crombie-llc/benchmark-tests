const query = `SELECT * FROM users WHERE email = '${email}'`;
    return this.userRepository.query(query);