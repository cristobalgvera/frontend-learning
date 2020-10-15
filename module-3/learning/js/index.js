let dollar = prompt("How many dollars do you have right now?", 0);
dollar = dollar === "" ? 0 : dollar;

let message = "$" + dollar + " USD";

if (dollar > 10) message += ", hey you, you have so much dollars!";
else message += ", hey dude, that's terrible for you :(";

document.write("<h1>" + message + "</h1>");

let z = 0;
const test = (x, y = 0) => x + y + z;

console.log(test(4, 4, 3));

document.getElementById("fecha-actual").innerHTML += new Date().toISOString();

const redirection = () => {document.location = "https://www.google.com"};

const square = () => {
    let number = document.getElementById("number").value ** 2;
    document.getElementById("result").value = number;
};

const summation = () => {
    let numbers = document.getElementById("number").value.split(",");
    let test = numbers.concat([[9,3]]);
    console.log(test);
    document.getElementById("result").value = numbers.reduce((a, b) => +a + +b);
}