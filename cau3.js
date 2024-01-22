var students = [];
var numberOfStudents = prompt("Nhập số lượng sinh viên:");
numberOfStudents = parseInt(numberOfStudents);
while (isNaN(numberOfStudents) || numberOfStudents <= 0) {
    alert("Vui lòng nhập một số nguyên dương.");
    numberOfStudents = prompt("Nhập số lượng sinh viên:");
    numberOfStudents = parseInt(numberOfStudents);
}
for (var i = 0; i < numberOfStudents; i++) {
    var student = {};
    student.id = prompt("Nhập ID của sinh viên thứ " + (i + 1) + ":");
    student.name = prompt("Nhập tên của sinh viên thứ " + (i + 1) + ":");
    students.push(student);
}
console.log("Danh sách sinh viên:");
console.log(students);
