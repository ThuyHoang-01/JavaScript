/* Mảng trong Js-Arr
1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào ? Tạo sao
    - Khi nào sử dụng :
        --> Khi có quá nhiều các phần tử diễn đạt cho 1 biến
    - Kiểm tra data type?
        --> Arr có thể chứa tất cả các kiểu dữ liệu trong JS
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/
var languges = [
    'JS',
    'PHP',
    'Java',
    'Fluter'
]; 
// kiểm tra biến languges có phải là Arr . Sử dụng : Array.isArray()
console.log(Array.isArray(languges))

// Truy xuất
console.log(languges.length)

// lấy giá trị theo index
console.log(languges[2])

