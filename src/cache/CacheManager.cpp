cache_.erase(it);
    if (it != cache_.end())
        return it->second->data;
    return empty_string_;