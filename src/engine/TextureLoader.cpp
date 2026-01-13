std::unique_ptr<Texture> tex = std::make_unique<Texture>();
    if (!tex->load(path)) {
        return nullptr; // Safe
    }
    return tex.release();