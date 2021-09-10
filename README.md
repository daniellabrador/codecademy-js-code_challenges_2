# **JavaScript Code Challenges**

This repository contains programs as a fulfillment to [Codecademy's code challenges for scope, arrays, loops, iterators and objects](#project-prompt).

## Table of Contents

- [Project Prompt](#project-prompt)
  - [reverseArray](#reversearray)
  - [greetAliens](#greetaliens)
  - [convertToBaby](#converttobaby)
  - [Fix The Broken Code 3](#fix-the-broken-code-3)
  - [declineEverything and acceptEverything](#declineeverything-and-accepteverything)
  - [squareNums](#squarenums)
  - [shoutGreetings](#shoutgreetings)
  - [sortYears](#sortyears)
  - [justCoolStuff](#justcoolstuff)
  - [isTheDinnerVegan](#isthedinnervegan)
  - [sortSpeciesByTeeth](#sortspeciesbyteeth)
  - [findMyKeys](#findmykeys)
  - [dogFactory](#dogfactory)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

## Project Prompt

In the exercises that follow, you will practice and reinforce your understanding of JavaScript scope, arrays, loops, iterators, and objects. We encourage you to review the relevant lessons and look things up in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)!

---

### reverseArray

Write a function, `reverseArray()`, that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a [built-in method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

```js
const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];
```

---

### greetAliens

Write a function, `greetAliens()`, that takes in an array of strings and uses a `for` loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

```js
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender!
```

Note: You may have noticed how convenient it would be to use .`forEach()`, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

---

### convertToBaby

Write a function, `convertToBaby()`, that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with `'baby '`.

```js
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
```

Note: You may have noticed how convenient it would be to use `map`, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

---

### Fix The Broken Code 3

We wrote a function, `smallestPowerOfTwo()`, which takes in an array.

Within our function, we create a new array called `results`. We then loop through the argument array and calculate the smallest power of two which is greater than the current element before using `.push()` to add it to `results`.

```js
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
```

It’s not doing what we want. Can you fix our code, please?

---

### declineEverything and acceptEverything

1. Write a function `declineEverything()` that takes in an array of strings and, using `.forEach()`, loops through each element in the array and calls `politelyDecline()` with each of them. The `.forEach()` function should apply `politelyDecline()` directly; it should NOT merely receive an argument function that uses `politelyDecline()`. You can test your function when you’re ready by passing in the `veggies` array or by making your own array!

2. Write another function `acceptEverything()` that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: `'Ok, I guess I will eat some [element].'` You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the `veggies` array or by making your own array!

---

### squareNums

Write a function, `squareNums()`, that takes in an array of numbers and, using `.map()`, returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the `numbers` array or by making your own array!

---

### shoutGreetings

Write a function `shoutGreetings()` that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: `'heya'` will become `'HEYA!'`

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the `greetings` array or by making your own array!

---

### sortYears

Write a function `sortYears()` that takes in an array of years, and, using [the built-in `.sort()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the `years` array or by making your own array of years!

---

### justCoolStuff

Write a function `justCoolStuff()` that takes in two arrays of strings, and, using [the built-in `.filter()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), returns an array with the items that are present in both arrays.

```js
let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
```

You can test your function when you’re ready by passing in the `myStuff` and `coolStuff` arrays or by making arrays of your own!

---

### isTheDinnerVegan

Write a function `isTheDinnerVegan()` that takes in an array of food objects in the format:

```js
{name: 'cabbage', source: 'plant'}
```

and returns a boolean value based on whether or not every item in the array has entirely `plant`-based origins.

```js
const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true
```

You can test your function when you’re ready by passing in the `dinner` array or by making your own!

---

### sortSpeciesByTeeth

Write a function `sortSpeciesByTeeth()` that takes in an array of species objects in the format:

```js
{speciesName: 'shark', numTeeth: 50 }
```

and sorts the array in ascending order based on the average number of teeth that species possesses (`numTeeth`) .

You’ll need to access each object’s `.numTeeth` property. Feel free to either write a named comparison function, or use an anonymous function for your argument to `.sort()`.

You can test your function when you’re ready by passing in the `speciesArray` array or by making your own!

---

### findMyKeys

Write a function, `findMyKeys()`, that takes in an array of strings which may or may not contain `'keys'`. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return `-1`.

```js
const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1
```

You can use any technique you want to accomplish this task. Though, if you look, there’s a [built-in method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) that will make pretty quick work of it.

You can test your function when you’re ready by passing in the `randomStuff` array or by making your own array!

---

### dogFactory

Write a function, `dogFactory()`. It should:

- have 3 parameters: `name`, `breed`, and `weight` (in that order)
- expect `name` and `breed` to be strings
- expect `weight` to be a number
- return an object
- have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in

```js
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }
```

Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

Add two methods to your object: `.bark()` which returns `‘ruff! ruff!’` and `.eatTooManyTreats()` which should increment the `weight` property by 1.

---

## Technologies

- JavaScript ES6

## Setup

To run this program, you needinstall [Node.js](https://nodejs.org/en/download/) to your machine.

Enter this command to the terminal: `node filename`

For example:

```git
node convertToBaby.js
```

## Sources

The techniques utilized was based on the lessons taught in [Codecademy's Learn JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript). The challenge is also provided by Codecademy.
