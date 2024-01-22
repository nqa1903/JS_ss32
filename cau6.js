function sortProductsByPrice(products) {
    products.sort(function(a, b) {
        return a.price - b.price;
    });
    console.log("Danh sách sản phẩm sau khi sắp xếp theo giá tăng dần:");
    for (var i = 0; i < products.length; i++) {
        console.log("ID: " + products[i].id + ", Tên sản phẩm: " + products[i].product_name + ", Giá: " + products[i].price);
    }
}
var products = [
    { id: 1, product_name: "Iphone 12", price: 20000000 },
    { id: 2, product_name: "Iphone 11", price: 10000000 },
    { id: 3, product_name: "Samsung note 10", price: 50000000 },
];
sortProductsByPrice(products);
