package org.frutapp.backend.controllers;

import java.util.List;

import org.frutapp.backend.models.Product;
import org.frutapp.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/product")

public class ProductController {
    
    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> findAllProducts() {
        return productService.findAll();
    }
}
