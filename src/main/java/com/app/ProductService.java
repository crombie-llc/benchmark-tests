import java.util.stream.Collectors;
        return products.stream()
            .filter(Product::isActive)
            .collect(Collectors.toList());