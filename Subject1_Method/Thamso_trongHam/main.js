/* 
1. Tham số ?
    - Định nghĩa
    - Kiểu dữ liệu: không giới hạn
    - Tính Private
    - 1 Tham số
    - Nhiều tham số
2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng agruments
    - Giới thiệu vòng for

    */
/*
function writeLog( message , message_coppy){ 
  

    if(message){

          console.log( message)
    }
    if(message_coppy){

        console.log( message_coppy)   // tham số message
    }
  
}
writeLog('Test message' , 'Test Message coppy');// khi gọi tới nó sẽ là đối số
*/
function writeLog(){
    var myString='';
    for(var param of arguments){ // định nghĩa param . argurment = arry 
        // Vòng for chạy lần 1 lấy elements đầu tiên của array sau đó gán cho params
        myString += '${param} -'
    }
    console.log(myString)
}
writeLog('Log1','Log2','Log3');
