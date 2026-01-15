with open(filepath, 'w') as f:
        json.dump(data, f)
    with open(filepath, 'r') as f:
        data = json.load(f)
        return data