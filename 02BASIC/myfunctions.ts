function addTwo(num: number): number{
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(2);
getUpper("tien");

signUpUser("tien", "tien@gmail.com", true);
loginUser("tien", "h@t.com")

// function getValue(myVal: number){
//     if(myVal > 5){
//         return true;
//     }

//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "";
}

// const herors = ["thor", "spiderman", "ironman"];
const herors = [1, 2, 3];

herors.map((hero): string => {
    return 'hero is ${hero}';
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {}; // Make this a module.