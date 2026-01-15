StringBuilder report = new StringBuilder("Report:\n");
            report.append("ID: ").append(entry.getId()).append("\n");
            report.append("Name: ").append(entry.getName()).append("\n");
            report.append("Value: ").append(entry.getValue()).append("\n\n");
        return report.toString();