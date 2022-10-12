/* CHUỖI TRONG JAVASCRIPT
1. Tạo chuỗi
    - Các cách tạo chuỗi : 2 cách
    - Nên dùng cách nào ? Nên dùng cách 1
    - Lý do? Vì cách 1 nhanh hơn cách 2 
        + Kiểu dữ liệu của cách 2 đôi khi khôngg đúng
    - Kiểm tra data type
2. Một số case sử dụng backslash(\) vd : backlash in javascript
3. Xem độ dài chuỗi : console.log(fullName.length)
4. Chú ý độ dài khi viết code:
    - Nên sử dụng kí tự trên 1 dòng tối đa là 80 kí tự để tránh gây khó chiệu

*/
var fullName = "To Thuy  la "
+ "\'Sieu Nhan\'" ;
console.log(fullName)

//5. Template string ES6
var firstName = 'Hoang';
var lastName = ' Thuy';

console.log(`Ho va ten : ${firstName} ${lastName}`);

