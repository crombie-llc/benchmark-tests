using (var connection = new SqlConnection(_connectionString))
            using (var command = new SqlCommand("SELECT * FROM Users", connection))
            {
                connection.Open();
                var reader = command.ExecuteReader();
                
                var users = new List<User>();
                while (reader.Read())
                {
                    users.Add(MapUser(reader));
                }
                return users;