/* Làm việc với Array
-- Thuộc tính thường xuyên sử dụng ---
-- Reference:  search keyword " JavaScript array methods" 
1. To string
2. Join
3. Pop
4. Push
5. Shift : xóa phần tử ở đầu mảng trả về phần tử đã xóa
6. Unshift: Thêm 1 or N element ở đầu Arr . Trả về length mới
7. Splicing : xoá , cắt , chèn trong Arr 
8. Concat: Nối Arr 
9. Slicing: cắt 1 or n element
 */
/*
var languges = [
    'Java',
    'PHP',
    'Ruby',
];
// chuyển arr -> string => sử dụng hàm join
 console.log(languges.join())

 // xóa phần tử cuối của mảng và trả về phần tử đã xóa
console.log(languges.pop())

// thêm 1 or N phần tử cuối mảng -> return element 
console.log(languges.push('NodeJS'))
console.log(languges)

//(1,2,'Dart') --- 1: vị trí con trỏ chuột khi bắt đầu ---2: số lượng phần tử cần xóa----'A' : chèn Dart vào vị trí đã xóa
languges.splice(1,1,'Dart')

// Nối Arr
var demo = [
    ' Css',
    'Html',
];
console.log(languges.concat(demo))

*/

/*tạo hàm getLastElement có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.
function getLastElement(array) {
    return array[array.length - 2]
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
*/

// Trả về phần tử đầu tiên trong mảng
function getFirstElement (array){
    return array[0]
}
// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']