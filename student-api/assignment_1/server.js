const express = require('express');

const app = express();

app.use(express.json());

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 60000,
        quantity: 5
    },
    {
        id: 2,
        name: "Mouse",
        category: "Electronics",
        price: 800,
        quantity: 20
    },
    {
        id: 3,
        name: "Notebook",
        category: "Stationery",
        price: 100,
        quantity: 50
    }
];

// GET - Display all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET - Display a particular product
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// POST - Add a new product
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// PUT - Update an existing product
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name;
    product.category = req.body.category;
    product.price = req.body.price;
    product.quantity = req.body.quantity;

    res.json({
        message: "Product updated successfully",
        product: product
    });
});

// DELETE - Delete a product
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.json({
        message: "Product deleted successfully"
    });
});

// GET - Filter products by category
app.get('/products/category/:category', (req, res) => {
    const category = req.params.category;

    const result = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
    );

    if (result.length === 0) {
        return res.status(404).json({
            message: "Category not found"
        });
    }

    res.json(result);
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});