try (FileReader reader = new FileReader(path);
             BufferedReader br = new BufferedReader(reader)) {
            
            String line;
            while ((line = br.readLine()) != null) {
                lines.add(line);
            }