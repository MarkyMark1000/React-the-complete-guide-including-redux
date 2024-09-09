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

When doing this course he goes over 2 ways of doing it.   Using a 

The start project is located here:
https://github.com/academind/react-complete-guide-course-resources/blob/main/attachments/03%20React%20Essentials/01-starting-project.zip

I used git clone to clone the code from his git repository:
git@github.com:academind/react-complete-guide-course-resources.git

You can then install the code (only need to do once) and run it using:
```
npm install             yarn
npm run dev             yarn run dev
ctrl + c to quit.
```

This npm/yarn cheat may be useful:
https://www.digitalocean.com/community/tutorials/nodejs-npm-yarn-cheatsheet
```
npm init                        yarn init
npm run                         yarn run
npm test                        yarn test
npm install                     yarn
npm install [package]           yarn add [package]
npm uninstall [package]         yarn remove [package]
npm update                      yarn upgrade
```

### React Essentials
---

#### JSX & React Components
---

- Components are stored in files that end with ```.jsx```
- Components must contain a javascript function that:
    - Begins with a capital letter
    - Returns something that is renderable
    - Return html markup within brackets (...)

lets say you create a react function called Header, you can embed that
component into other code using this format:
```
    <Header></Header>     OR
    <Header />
```

#### Dynamic Values

You can output dynamic values within a component by enclosing them within
```{}```.   You can also add basic javascript code, but not complex code like
for statements.

#### Image

To process images properly within react components, the normal path method might
not work properly when you build and deploy the app.   You need to do two things
to use images properly:

1 - Import the image at the top of the react component.   Bit weird, but words
within react:
```
import reactImage from "./assets/react-core-concepts.png";
THIS DOESN'T WORK:
import {reactImage} from "./assets/react-core-concepts.png";
```

2 - Use that image as a dynamic component within the source, eg:
```
<img src={reactImage} alt="Stylized atom" />
```

#### Props - Quite Important

These are used to pass values into a component whenever it is used.   You should be
familiar with this from Vue.   You get an argument to the component function, typically
called props, which you then use to populate the jsx/html:
```
function CoreConcepts(props) {
    return (
        <li>
            <img src={props.img} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    );
}
```

You can then re-use this within other components in a similar manner:
```
    <CoreConcept
        title="Components"
        description="The core UI building block."
        img={componentsImg}
    />
```

#### Alternative Props Syntax

Instead of using function blah(props) {...}, you can deconstruct an object being
passed into the component using this:
```
function CoreConcepts({img, title, description}) {
    return (
        ...
    );
}
```

He also shows you how to import objects from another page into the component and
re-use the object with react components.   It works like this:
```
import {CORE_CONCEPTS} from "./data";           // NOTE {} not other import
...
    <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
    />

    <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} />
```

Note that you could also do this:
```
// In the component
CoreConcept({ concept }) {...}

// When using the component use either:
concept.title, concept.description etc
// OR
const {title, description, image} = concept;
```

You can also pass values in singularly and then group those props into a single variable
within the component, eg:
```
    <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
    />

    function CoreConcept({}...concept}) {...};
```