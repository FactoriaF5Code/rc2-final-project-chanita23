package org.frutapp.backend.service;

import java.util.List;
import java.util.Optional;

import org.frutapp.backend.models.Product;
import org.frutapp.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.NoResultException;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product updateProduct(Integer id, Product updatedProduct) {
        String name = updatedProduct.getName();
        String description = updatedProduct.getDescription();
        String img = updatedProduct.getImg();
        if (updatedProduct == null || name == null || description == null || img == null) {
            throw new IllegalArgumentException("Los datos de los productos actualizados son invalidos");

        }

        Optional<Product> teamOptional = productRepository.findById(id);
        if (teamOptional.isPresent()) {
            Product existingProduct = teamOptional.get();
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setImg(updatedProduct.getImg());
            return productRepository.save(existingProduct);

       } else {
        throw new NoResultException("No se encontro el producto con el ID:" + id);

       }
        

    }

    public void deleteProduct(Integer id) {
        productRepository.deleteById(id);
    }
    
}
