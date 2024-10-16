//1-vazifda
interface User {
    name: string;
}

interface Admin {
    role: string;
}
const myUser: User = { name: "Alice" };
const myAdmin: Admin = { role: "Moderator" };
function getUserInfo(person: User | Admin): string {
    if ("name" in person) {
        return person.name;
    } else if ("role" in person) {
        return person.role;
    }
    return'';
}
console.log(getUserInfo(myUser));
console.log(getUserInfo(myAdmin));

//2-vazifa
function processArray(arr: string[] | number[]): string[] | number[] {
    if (typeof arr === "string") {
        return (arr as string[]).map((str) => str.toUpperCase());
    } else if (typeof arr === "number") {
        return (arr as number[]).map((num) => num * 2);
    }
    return [];
}
console.log(processArray([1]));

//3-vazifa
function returnValue(flag: boolean): number | string {
    if (flag) {
        return 42; 
    } else {
        return "Hello"; 
    }
}
console.log(returnValue(true));
console.log(returnValue(false));

