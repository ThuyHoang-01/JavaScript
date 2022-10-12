
var User = function( firstName , lastName , avt) { //describle
    this.firstName = firstName;
    this.lastName = lastName;
    this.avt = avt;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User ('Thuy' , 'Hoang ', 'X');// obj
var user = new User ('Thien' , 'Huong ', 'C');

author.title = new User (' Hoc JS tại');
user.comment = new User (' F8')

console.log(author.getName());
console.log(user.getName());

// protyotype thêm thuộc tính vào 
