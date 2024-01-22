function Book(author, name) {
  this.author = author;
  this.name = name;
}
var books = [
  new Book("Author1", "Book1"),
  new Book("Author2", "Book2"),
  new Book("Author3", "Book3"),
];
var searchAuthor = prompt("Nhập tên tác giả:");
var foundBooks = [];
for (var i = 0; i < books.length; i++) {
  if (books[i].author === searchAuthor) {
    foundBooks.push(books[i]);
  }
}
if (foundBooks.length > 0) {
  console.log("Thông tin sách của tác giả " + searchAuthor + ":");
  for (var j = 0; j < foundBooks.length; j++) {
    console.log("Tác giả: " + foundBooks[j].author + ", Tên sách: " + foundBooks[j].name);
  }
}else{
  console.log("Không tìm thấy sách của tác giả " + searchAuthor);
}
