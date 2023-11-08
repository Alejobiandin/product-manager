class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    
    getProducts() {
        return this.products;
    }

    
    getProductById(id) {
        return this.products.find(product => product.id === id);

const productMan
productManager.addProduct({ id: 1, name: "Producto 1", price: 10.99 });
productManager.addProduct({ id: 2, name: "Producto 2", price: 19.99 });
productManager.addProduct({ id: 3, name: "Producto 3", price: 25.99 });


console.log("Todos los productos:", productManager.getProducts());

const productIdToGet = 2;
console.log(`Producto con ID ${productIdToGet}:`, productManager.getProductById(productIdToGet));
