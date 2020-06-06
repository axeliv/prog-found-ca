//question 1
var string = "string";
//question 2
var person = {
  name: "Clarice Starling",
  occupation: "student",
};
//question 3
var outOfStock = false;
if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}
//question 4
var numbers = [5, 10, 15, 16, 20];
for (var i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}
//question 5
for (var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}
//question 6
if ((counter = 20)) {
  console.log(counter);
}
//question 7
var deskItems = [
  {
    name: "candle",
    quantity: 1,
    writingUtensil: false,
  },
  {
    name: "pen",
    quantity: 3,
    writingUtensil: true,
  },
];
for (var i = 0; i < deskItems.length; i++) {
  console.log(deskItems[i].quantity);
  console.log(deskItems[i].writingUtensil);
}
//question 8
function whatIDontLike(icky) {
  console.log("I don't like " + icky);
}
whatIDontLike("white chocolate");
//question 9
function subtraction(firstNumber, secondNumber) {
  var total = firstNumber - secondNumber;
  console.log(total);
}
subtraction(10, 3);
//question 10
var whiteBoard = [];
function write(message) {
  whiteBoard.push(message);
  console.log(whiteBoard);
}
write("fail often");
