//this is the old way to implement getter and setter using prototype
function user(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
}

const chai = new user("chai@chai.com","chai123")
console.log(chai.email);