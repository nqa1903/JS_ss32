var product = {
    id: "",
    name: "",
    price: 0,
    quantity: 0
};
product.id = prompt("Nhập ID của sản phẩm:");
product.name = prompt("Nhập tên của sản phẩm:");
product.price = parseFloat(prompt("Nhập giá của sản phẩm:"));
product.quantity = parseInt(prompt("Nhập số lượng của sản phẩm:"));
console.log("Thông tin sản phẩm:");
console.log("ID: " + product.id);
console.log("Tên sản phẩm: " + product.name);
console.log("Giá: " + product.price);
console.log("Số lượng: " + product.quantity);
