// Create an Inventory Array of Product Objects

const inventory = [{
    name: 'GPU',
    price: 500.00,
    quantity: 0,
    lowStockLevel: 5

},

{
    name: 'CPU',
    price: 300.00,
    quantity: 20,
    lowStockLevel: 10

},

{
    name: 'RAM',
    price: 100.00,
    quantity: 30,
    lowStockLevel: 15
},

{
    name: 'SSD',
    price: 200.00,
    quantity: 40,
    lowStockLevel: 20
},

{
    name: 'HDD',
    price: 150.00,
    quantity: 50,
    lowStockLevel: 25
}
];

// Create a Function to Display Product details

function displayProductDetails(product) {

    console.log(`Product: ${product.name}`);
    console.log(`Price: ${product.price}`);
    console.log(`Quantity: ${product.quantity}`);
    
    if (product.quantity === 0) {
        console.log('Out of Stock');
    } else if (product.quantity <= product.lowStockLevel) {
        console.log('Low Stock Level');
    } else {
        console.log('In Stock');
    }
}

inventory.forEach(displayProductDetails);
