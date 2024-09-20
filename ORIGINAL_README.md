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

#### Best Practices: Good Project Structure

    - If possible, store each component in a seperate file.
    - Components must begin with a capital letter,
    - Give the file the same name as the component, ended with ```.jsx```
    - Put the components within a ```components``` directory under src.

    - It is possible to split .css files into seperate files.   He does this:
        - creates a Header directory
        - moves the Header.jsx file and a new Header.css file into this directory.
        - imports the Header.css file in the jsx file.
        - PLEASE NOTE THIS CSS IS NOT SCOPED!!!

#### props.children

    If you have a component that has something inbetween it, you can use that inside
    the components using the ```props.children``` property.   There is always a props
    associated with jsx and it will always have a children property.   You can also
    expand it using {}, eg:
    ```
    export default function TabButton(props) {
        return (<button>{props.children}</button>
    OR
    export default function TabButton({children}) {
        return (<button>{children}</button>
    ```

    This is called COMPONENT COMPOSITION.

#### Reacting to events

    You can add functions within component functions (function within function).

    You then return the function to an event, eg:
    ```
    <button onClick={handleClick}>{children}</button>
    NOT
    <button onClick={handleClick()}>{children}</button>
    ```

#### Passing functions as values to props

    You can pass a function into a prop and call it from within the component, eg

    1 - Add a function to the parent component:
    ```
    function handleSelect() {
        console.log('button clicked');
    }
    ```
    2 - Pass it into the component:
    ```
    <TabButton onSelect={handleSelect}>Concepts</TabButton>
    ```
    3 - Within the component, use the prop:
    ```
    export default function TabButton({children, onSelect}) {
        ...
        <button onClick={onSelect}>{children}</button>
    ```

#### Passing arguments to these functions

    Instead of doing this:
    ```
    ```
    <TabButton onSelect={handleSelect}>Concepts</TabButton>
    ```
    Do this:
    ```
    <TabButton onSelect={() => handleSelect('MyString')}>Concepts</TabButton>
    ```
    You can then change the function in the parent component to accept an argument:
    ```
    function handleSelect(inputString) {...}
    ```

#### useState - hooks

    When you want to have a variable that updates, you need a special hook to get the
    component javascript to re-run.   It normally on runs once.
    ```
    import {useState} from "react"
    ```
    Then in the code you can use something like this:
    ```
    const [selectedTopic, setSelectedTopic] = useState("Please select a button");
    ```
    You would then use selectedTopic where you want the variable output:
    ```
    <h2>{selectedTopic}</h2>
    ```
    If you wanted to change the value within javascript, you would do something like:
    ```
    setSelectedTopic('my new input');
    ```
    IMPORTANT: selectedTopic doesn't update instantly, so you can't see it within the
    react code straight after the javascript change.   The change flows through later.

#### Rendering content conditionally

    There are multiple ways of doing this.

    1 - Use a ternary expression, eg:
    ```
    {!selectedTopic ? <p>Please select a topic.</p> : null}
    ```
    2 - Use &&
    ```
    {!selectedTopic && <p>Please select a topic.</p> }
    ```
    3 - Create a variable higher up that you assign some jsx code to, then based upon state
    variable, change the variable to alternative jsx code.   Finally just display the variable
    within the original jsx:
    ```
    {tabContent}
    ```

#### css styling

    Within react, you can dynamically style classes.   It feels a bit weird, but you use the
    ```className``` attribute rather than ```class```. eg:

    ```
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    ```

#### outputting lists

    When you want to output lists, you can do this dynamically, eg:
    ```
    {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    ```

    The 'key' attribute is something specific to react.   It needs to be a value that uniquely
    identifies the attribute.

#### Working with Fragments

    A JSX FUNCTION MUST RETURN HTML ENCLOSED BY ONE ELEMENT, TYPICALLY <div>...</div>

    This is inefficient sometimes as you render an unnecessary <div> tag.

    1 - Can use fragment element, which isn't rendered on output:
    ```
    import {useState, Fragment} from "react";
    ...
    <Fragment>
    </Fragment>
    ```

    2 - In current projects, there is a sytactically shortcut that doesn't need importing:
    ```
    return (
        <>
            ...
        </>
    )
    ```

##### Forwarding Props to wrapped elements

    When you call a component, it can be really tedious creating an input variable for each
    attribute that you want to set, eg id='..' name='...'.   You can use a special syntax to
    forward all remainging props, eg:
    ```
    export default function Section({text, ...props}) {
        return (
            <section {...props}>
                ...
            </section>
        )
    ```

#### Working with Multiple JSX Props

    It's worth reviewing this video as it shows an important react design pattern.   He talks about
    the situation where you have say a generic Tabs container, pass and display the chidren into
    the container, but also want to display a menu item.   You then pass the menu jsx code into the
    generic component using a buttons attribute, which must contain valid jsx code (it doesn't have to
    be called buttons, this is the example he used).

#### Setting component types dynamically

    If you want to be able to control if a component uses say menu, ul or ol to display something,
    you want to pass in the component type.   He shows you how to do this with this video.   Basically
    you pass in a prop such as buttonsContainer.   You then create a variable with AN UPPER CASE FIRST
    LETTER, eg ButtonsContainer and set it to buttonsContainer.   You can then use this within the
    component:
    ```
        ButtonsContainer = buttonsContainer;
        return (
            <ButtonsContainer>...</ButtonsContainer>
        );

        <MyComponent buttonsContainer='main' /> or <MyComponent buttonsContainer={OtherComponent} />

    ```

#### Setting Default propr values

    You can also set default prop values, eg:
    ```
    export default function Tabs({children, buttonsContainer = 'menu'}) {...}
    ```

## SECTION 4
---

#### public/ vs assets/ for images   

You can store images within the public/ folcer or src/assets/.   What is the difference ?

The public folder images become directly visible to the public without alteration and it is
a good place for favicons etc.   With the src/assets/ folder images are injected into the
code by react as it is run with some optimization and is a good place for component specific
images.

#### IMPORTANT - Best practice for updating state

Within react, if a state has the value false, then you would expect the following code to
make no change:
```
setIsEditing(!isEditing);
setIsEditing(!isEditing);
```

Unfortuately this isn't the case.   When changing state, react schedules the change for the
next time when it is available.

If you want to force react to use the current state, you need to use a function when changing
state, eg:
```
setIsEditing(editing => !editing);
setIsEditing(editing => !editing);
```

#### IMPORTANT - Best practice - update state immutably.

When processing something like a list, you don't want to update the list passed into the function,
but take a copy of that list, adjust it and then return the updated list.
To take a copy of the list of lists, he did something like this:
```
const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
```

#### Lifting State Up

This was an important concept.   You have a variable with a state in a parent component, then pass
a function to be called into one sub-component and possibly the variable that represents the state.
The sub component can then call the function to change the state.   The state can also be entered
into another sub component, so you effectively have one component being able to influence another
component.   See the video if necessary.

#### IMPORTANT - Try to avoid unnecessary state menagement

Try to move states to a parent component and make sure that when you update a state, you don't use
any other state variables in the update.

You then want to pass that parent state down and derive values to be used within the sub components.

This concept is known as Deriving state from props.

---
I GOT BORED AT VIDEO 90, LIFTING COMPUTED VALUES UP.    IT JUST SEEMED LIKE REFACTORING THE CODE TO
USE A SINGLE STATE, SO JUST WATCHED THE VIDEO'S AND DIDN'T UPDATE THE CODE.
---

