// const User = {
//     name: "Tien", 
//     email: "Tien@gmail.com",
//     isActive: true
// }

// let newUser = {name: "Tien", isPaid: false, email: "h@h.com"};

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 399};
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true};
// }

// createUser({name: "", email: "", isActive: true});


// READONLY AND OPSTIONAL

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "t",
    email: "t@t.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



myUser.email = "t@gmail.com";




export {};