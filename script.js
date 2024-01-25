import User from "./userinfo";

const user = new User();

getStudentInfo = function () {
    user.name.firstName = prompt("Whats your first name?");
    user.name.secondName = prompt("Whats your second name?");
    user.name.surname = prompt("Whats your surname?");
    user.age = prompt("Whats your age?");
    user.gender = prompt("Are you Male or Female?")
    return "Done";
};

document.querySelector("#name").innerHTML = `Student name : ${user.name.surname} ${user.name.firstName}`;
document.querySelector("#age").innerHTML = `Student age : ${user.age}`;
document.querySelector("#gender").innerHTML = `Student gender : ${user.gender}`;
