/* kiểu số (number) trong javascript

1. Tạp giá trị number
    - Các cách tạo : có 2 cách
    - Dùng cách nào: var PI = 3.14 ? Tạo sao : vì từ khóa new khởi tạo 1 đối tượng , rườm rà
    - Kiểm tra dât type
2. Làm việc với Number
    - To string
    - To Fixed

*/
//var age =18; // ko dùng nháy , có nháy là string
//var cost = 300.000500;
// Chuyển thành kiểu dl string : var myString = age.toString();

//kiểm tra kiểu dl number 
function isNumber (value) {
    return typeof value === "number" && isNaN(value) === false
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false