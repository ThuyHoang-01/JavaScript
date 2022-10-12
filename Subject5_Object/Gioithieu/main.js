var myInfor = {
    id: '19432541',
    name: ' ToThuy',
    adress:' Tp.Hcm',
    getName : function(){
        return this.name;
    }
};
/*/ thêm key vào value
myInfor.email = "hoangtothuy01@gmail.com"; //C1
myInfor['my-email']= 'hoangtothuy01@gmail.com'; //C2
//xóa 
delete myInfor.adress; */

console.log(myInfor.getName());

// function --> phương thức 

