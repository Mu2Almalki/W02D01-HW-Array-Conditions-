let Numbers = [23, 54, 32, 87, 47]
let sum = 0;
for (i = 0; i < Numbers.length; i++) {
  // console.log(Numbers[i])
  sum = sum + Numbers[i];

}
console.log(sum)
// 
const maxnum = [16, 4, 2, 0, 19, 6]
let max = 0;
for (i = 0; i < maxnum.length; i++)
  if (maxnum[i] > max) {
    max = maxnum[i];
  }
console.log(max)
// 
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [];
for (i = num1.length - 1; i >= 0; i--) {

  num2.push(num1[i]);
}
console.log(num2);
// 
let str = ""
for (i = 0; i <= 5; i++) {
  for (j = 0; j < i; j++) {
    str += "*"
  }

  str += "\n"
}
console.log(str);
// 
let wnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let w = 0
while (w <= wnum.length) {
  if (wnum[w] % 2 !== 0 && wnum[w] % wnum[w] == 0) {
    console.log(wnum[w])
  }
  w++
}


// Arrays

const characters = [{
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];
// Get array of all first names
characters.map(allName);

function allName(item) {
  console.log(item.name);
}
// Get total mass of all characters
let initialValue = 0;
const totalMass = characters.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.mass;
}, initialValue);
console.log(totalMass);


// Get total number of characters in all the character names
let countedChar = 0
const totalChar= characters.reduce(function (allName, character) {
    {
      if (character in allNames) {
        allNames[character]++
      } else {
        allNames[character] = 1
      }
      return allNames
    }
  } 
)
console.log(countedChar); 

// Get characters with mass greater than 100
let x = characters.filter(maassGreater);

function maassGreater(item) {
  return item.mass > 100;

}
console.log(x);

// Get all female characters
let y = characters.filter(gender0);

function gender0(item) {
  return item.gender = 'female';
}
console.log(y)

// Sort by name
let j = characters.sort(function (a, b) {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(j);
// Sort by gender
let aa = characters.sort(function (a, b) {
  return a.gender - b.gender;
})
console.log(aa);

//  Does every character have blue eyes?
let x = characters.map(myFunction)

function myFunction(char) {
  return char.eye_color;
}

console.log(x);

const y = x.every(checkColor)

function checkColor(color) {
  return color == "blue";
}
console.log(y)

// Is every character male?
let f = characters.map(gender1)

function gender1(char) {
  return char.gender;
}

console.log(f);

const g = f.every(checkChar)

function checkChar(char) {
  return char == "male";
}
console.log(g)
// 



// Is there at least one male character?
let H = characters.map(gender2)

function gender2(char) {
  return char.gender2;
}
console.log(H);

const S = H.some(checkChar)

function checkChar(char) {
  return char == "male";
}
console.log(S)
// Is there at least one character that has mass less than 50?
let M = characters.map(Mass1)

function Mass1(char) {
  return char.Mass1;
}

console.log(M);

const N = M.some(checkChar)

function checkChar(char) {
  return char < 50;
}
console.log(N)