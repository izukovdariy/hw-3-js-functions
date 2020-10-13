function splitAndMerge(str, sp) {
  return str.split(" ").join("").split("").join(sp);
}

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("Hello World!", ","));

function convert(hash) {
  var newArray = [];
  for (var key in hash) {
    newArray.push([key, hash[key]]);
  }
  return newArray;
}

console.log(convert({ name: "Jeremy", age: 24, role: "Software Engineer" }));

function toCamelCase(str) {
  var arrayString = str.split(/-+|_+/);
  arrayString.forEach((word, index) => {
    if (word !== "" && word[0] === word[0].toLowerCase() && index !== 0) {
      arrayString[index] = word[0].toUpperCase() + word.slice(1);
    }
  });
  return arrayString.join("");
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));

function stringReverse(str) {
  var arrayString = str.split(" ");
  arrayString.forEach((word, index) => {
    word = word.split("").reverse().join("");
    arrayString[index] = word;
  });
  return arrayString.join(" ");
}

console.log(stringReverse("A fun little challenge! "));

function stringExpansion(str) {
  var numeric = 1;
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      numeric = Number(str[i]);
    } else {
      for (var j = 0; j < numeric; j++) {
        newString += str[i];
      }
      numeric = 1;
    }
  }
  return newString;
}

console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("abcde"));

function largest() {
  var largestNumber = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > largestNumber) largestNumber = arguments[i];
  }
  return largestNumber;
}

console.log(largest(2, 0.1, -5, 100, 3));

function smallest() {
  var smallestNumber = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] < smallestNumber) smallestNumber = arguments[i];
  }
  return smallestNumber;
}

console.log(smallest(2, 0.1, -5, 100, 3));

function transform(array) {
  return array.map((element) => {
    return () => {
      return element;
    };
  });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

function sum() {
  if (arguments.length) {
    return arguments[0] + sum.apply(null, [].slice.call(arguments, 1));
  } else {
    return 0;
  }
}

console.log(sum(1, 3, 5, 7));

function countDown(number) {
  var timerId = setInterval(() => {
    if (number < 0) clearInterval(timerId);
    else console.log(number--);
  }, 1000);
}

countDown(3);

Function.prototype.myBind = function () {
  var func = this;
  var args = [].slice.call(arguments);
  return function () {
    args = args.concat([].slice.call(arguments));
    return func.apply(args[0], args.slice(1));
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));
