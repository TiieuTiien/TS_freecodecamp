"use strict";
// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Hanoi";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
// const tien = new User("t@t.com", "tien")
// tien.name
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Hanoi";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const tien = new User("t@t.com", "tien");
// tien.deleteToken()
