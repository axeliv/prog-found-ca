//question 1
for (var counter = 15; counter <= 25; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
//question 2
function whatAmI() {
  console.log("I am a function");
}
whatAmI();
var innerfunction = whatAmI;
console.log(innerfunction);
function outerFunction(bob) {
  bob();
}
outerFunction(innerfunction);
