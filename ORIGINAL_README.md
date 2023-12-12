# OVERVIEW

These notes are based upon the following tutorial:

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/38345156#notes

These set of notes, rather than the README.md are taken on an ad-hoc basis as I went
through the tutorial.   The README.md is adjusted at a later point in time.

## SECTION 1
---

### Creating React Projects
---

Type ```react.new``` into your browser url and it creates a react sandbox project.   I
found this didn't work.

Install nodejs from nodejs.org (LTS version), 

```
npm create vite@latest react-project
npm install
npm run dev

```

```
npm create react or something.....
```

```
Also mentioned vite and yarn was visible on the screen, which I have found useful
before.
```

## SECTION 2
---

### Javascript Refresher
---

Can use defer attribute to delay exeution of script until html has loaded.
```
<script src="..." defer></scrip>
```

This defers the load, but also treats file as a javascript module, which unlocks
lots of functionality such as ```import``` functions.
```
<script src="..." type="module"></scrip>
```

Examples of export:
```
export let apiKey = 'l.klsdfkjlkjljkj';     // export variable (can be functions)
export default "lkjlkjlkjljl";              // only one, default thing exported by file
```

Examples of import:
```
import { apiKey } from './util.js';
import apiKey from './utils.js';     // goes with default
import * as util from './utils.js';  // imports everything as javascript object (inc 'default').
import { apiKey as myKey } from './util.js';   // aliases.
```

```let and const```   pretty obvious what these do


Notes on arrow function format for functions, ie:
```
() => { return true; }
```

1 - If you have only one variable, you can omit the () and use just the variable name
2 - If the only logic in the body is a return statement, you can omit the curly braces and return statement.   This needs adjustment to tell js to create an object, if you are
returning one of those:
```
blah => blah+1
blah2 => ({'ret': blah2})       // need extra ()
```

Objects:
```
const user = {
    name: "Mark",
    greet() {
        console.log('Hello');
    }
};
```

Classes -> blueprints for objects:
```
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('Hi, I am ' + this.name + '!');
    }
}
```

Useful array methods:
```
myArray.push('blah');
const i = myArray.findIndex((item) => item==='blah');
const cArray = myArray.map((item) => item + '!');       // returns array with adjustments
return numberArray.map((item) => ({val: item}));               // transform into list of objects
```

Destructuring Syntax (relatively new):
```
// for array
const [firstName, lastName] = ['Mark', 'Wilson'];
// for object, userName alias, no age alias
const {name: userName, age} = {name: 'Mark', age: 10};
```

It is also possible to use destructuring syntax within functions, eg:
```
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
// accepts one argument of an object with id and currency properties.
```

Spread operator:
Pulls out elements of an array and adds to a new array, It can also be
used for objects, eg:
```
const mergedArray = [...firstArray, ...secondArray];
const newObject = {
    nationality: 'british',
    ...userObject
};
```

He breifly goes over control structures such as if statements and for loops:
```
for (const hobby of hobbies) {...}
```

It is possible to pass javascript functions as parameters:
```
function greeter(greeterFn) {
    greeterFn();
}
greeter(() => console.log('Hi'));
```
You can also define and execute functions within other functions:
```
function init() {
    function greet() {
        console.log('Hi');
    }
    greet();
}
init();
```

He also covered reference vs primitive values, ie objects/arrays vs string/int/float etc,
ie pass by refererence, pass by value etc.

## SECTION 3
---

### Javascript Refresher