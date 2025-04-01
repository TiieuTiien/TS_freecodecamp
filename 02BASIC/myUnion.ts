let score: number | string = 33;
score = 44
score = "55"

// type User = {
//     name: string;
//     id: number
// }

type Admin = {
    username: string;
    id: number
}

// let tien: User | Admin = {name: "Tien", id: 901} 

// tien = {username: "Tien", id: 901}

// function getDBId(id: number | string){

//     console.log(`DB ID is: ${id}`);
// }

function getDBId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
        console.log(`DB ID is: ${id}`);
    }else{
        id += 2
        console.log(`DB ID is: ${id}`);
    }
}


// array

const data1: number[] = [1, 2, 3]
const data2: string[] = ["4", "5"]
const data3: (number | string)[] = [1, 2, 3, "4", "5", 6, 7, 8, 9, 10]
data3.push(11)

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"