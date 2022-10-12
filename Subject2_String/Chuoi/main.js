
// Làm việc với chuỗi
// Keyword tham khảo : JavaScript string methods
var myString = "   Hoc JS tai F8! JS";
  //1. Lenght
   console.log(" Độ dài của chuỗi là: ", myString.length)

  // 2. Find index
    console.log(myString.indexOf('JS',7))
    console.log(" Vị trí JS cuối cùng trong câu là:" ,myString.lastIndexOf('JS'))
  
 //3. Cut string
    console.log("cắt chữ JS tại vị trí ", myString.slice(5,7))
    console.log("cắt chữ từ đầu đến cuôi ", myString.slice(0))
    console.log(" cắt từ phải sang trái ", myString.slice(-1 ,-5))
 //4.Replace ( ghi đè)
    console.log(myString.replace(/JS/g ,'JavaScript'))

 // 5. Covert to upper case ( chuyenr đổi chuỗi thành chữ hoa)
    console.log(myString.toUpperCase())

// 6. Convert to lower case ( chuyển đổi chuỗi thành chữ tường)
    console.log(myString.toLowerCase())

 //  7. Trim
    console.log(myString.trim().length)

// 8. Split ( cắt 1 chuỗi thành array , tìm điểm chung của chuỗi , Nếu cắt từng chữ cái thì truyền chuỗi rỗng (''))
    var languages = 'JavaScript , PHP , Ruby';
    console.log(languages.split(','))

// 9. Get a character by index( lấy 1 kí tự cho trước)
const myString2 = 'Tu Hoc Java'
console.log( typeof myString2.charAt(0))

 
 /* kiểm tra độ dài của content
function getContentLength(content) {
  var test = content;
  return test.length;

}
// Mở tab Console để xem kết quả trực quan
console.log(getContentLength('JavaScript'));
console.log(getContentLength('Hello World'));
*/

/* =================================================
Bai Tap chuyen doi chu thuong thanh hoa
function getUpperCaseName(name){
  return name.toUpperCase();
  }
  
  // Expected results:
  console.log(getUpperCaseName("Nguyen van a")) // "NGUYEN VAN A"
  console.log(getUpperCaseName("nGuyen vAn C")) // "NGUYEN VAN C"

  */