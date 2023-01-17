// const ulElement = document.createElement(ul);
// Object.prototype.toString.call(ulElement);

flavors = [
  "Chocolate", "Vanilla", "Strawberry"
]

const ul = document.createElement("ul");
ul.setAttribute("id", "icecream");
document.querySelector("div").append(ul);
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const liThree = document.createElement("li");

liOne.append(flavors[0]);
liTwo.append(flavors[1]);
liThree.append(flavors[2]);
document.getElementById("icecream").append(liOne, liTwo, liThree);

