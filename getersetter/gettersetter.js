class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email=value
    }
    get password(){
        return this._password.toUpperCase()
    }
    //here constructor and set start a race for setting the value of 
    //password ,it cause error:-"Maximum call stack size exceeded"
    //for resolving this we add _or any other thing to just change te 
    //password
    set password(value){
        this._password=value
    }
}

const hitesh=new User("h@hitesh.ai","abc")
console.log(hitesh.password)
console.log(hitesh.email)