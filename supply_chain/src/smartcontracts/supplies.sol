pragma solidity ^0.7.0;

contract SupplyChain {
    // Struct for storing information about a product
    struct Product {
        string name;
        string description;
        uint price;
        uint inventory;
        address[] suppliers;
    }

    // Mapping from product ID to product struct
    mapping(uint => Product) public products;

    // Event for logging changes to a product's inventory
    event InventoryChanged(uint productId, uint newInventory);

    // Function to add a new product to the supply chain
    function addProduct(uint productId, string memory name, string memory description, uint price, uint inventory) public {
        Product memory newProduct = Product({
            name: name,
            description: description,
            price: price,
            inventory: inventory,
            suppliers: new address[](0)
        });

        products[productId] = newProduct;
    }

    // Function to update a product's inventory level
    function updateInventory(uint productId, uint newInventory) public {
        Product storage product = products[productId];
        product.inventory = newInventory;
        emit InventoryChanged(productId, newInventory);
    }

    // Function to add a new supplier to a product
    function addSupplier(uint productId, address supplier) public {
        Product storage product = products[productId];
        product.suppliers.push(supplier);
    }

    // Function to remove a supplier from a product
    function removeSupplier(uint productId, address supplier) public {
        Product storage product = products[productId];
        uint supplierIndex = 0;
        for (uint i = 0; i < product.suppliers.length; i++) {
            if (product.suppliers[i] == supplier) {
                supplierIndex = i;
                break;
            }
        }
        delete product.suppliers[supplierIndex];
    }
}
