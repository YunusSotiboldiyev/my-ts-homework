var myUser = { name: "Alice" };
var myAdmin = { role: "Moderator" };
function getUserInfo(person) {
    if ("name" in person) {
        return person.name;
    }
    else if ("role" in person) {
        return person.role;
    }
    return '';
}
console.log(getUserInfo(myUser));
console.log(getUserInfo(myAdmin));
//2-vazifa
function processArray(arr) {
    if (typeof arr === "string") {
        return arr.map(function (str) { return str.toUpperCase(); });
    }
    else if (typeof arr === "number") {
        return arr.map(function (num) { return num * 2; });
    }
    return [];
}
console.log(processArray([1]));
//3-vazifa
function returnValue(flag) {
    if (flag) {
        return 42;
    }
    else {
        return "Hello";
    }
}
console.log(returnValue(true));
console.log(returnValue(false));
