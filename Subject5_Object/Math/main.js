/*
1. Math.Pi
2. Math.round() : làm tròn số
3. Math.abs() : giá trị tuyệt đối
4. Math.celi() : làm tròn trên
5. Math.floor(): làm tròn dưới
6. Math.random() : trả về số thập phân < 1 , số ngãu nhiên
7. Math.min(): lấy ra sô nhỏ nhất
8. Math.max(): lấy ra sô lớn nhất
*/

//console.log(Math.abs(-4));
//console.log(Math.ceil(4.1));

//var random = Math.floor(Math.random() * 100);'

//console.log(Math.min(1,2,3,4,5,6))

// trả về số ngẫu nhiên phần tử mảng
function getRandomItem (array){
    var random = Math.floor(Math.random() * array.length)
    return array[random]
}
