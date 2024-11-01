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

## SECTION 6
---

#### Split CSS code across multiple files
---

You can create multiple files with css in them and import the css into a specific component, eg
Header.css to go with Header.jsx and the import using something like:
```
import './Header.css';
```

BIG DISADVANTAGE - css is not scoped to a particular component.

#### Use inline styles
---

You can use inline styles within jsx, but the format is a bit different to html.   You pass
{}, with an object inside it, hence {{}}.   Also when you have styles that contain a hyphen
you use camel case instead, eg:
```
<p style={{
    colour: 'red',
    textAlight: 'left'
}}>
</p>
```
Declaring the styles within the jsx file makes it specific to that app.

You can also dynamically style elements based upon variables fairly easily:
```
<p style={{
    colour: emailNotValid ? 'red' : 'black'
}}>
</p>
```

DISADVANTAGE - No seperation between css and jsx logic

#### Conditional class css
---

You can style things conditionally using className.   A useful tip for processing some css that
must always be present, plus some that is conditional/dynamic is to use javascripr `` string, eg:
```
className={`label ${emailNotValie ? 'invalid': ''}`}
```
(similar to python 'f' strings)

#### Scoping with css modules
---

To make css component specific, instead of using a filename like Header.css, use Header.module.css
and then import it into the jsx file.   You will import it as something and then use dot notation
to reference the specific classes, eg:
```
import {classes} from './Header.module.css';

<p className={classes.paragraph}></p>
```

Then, when the javascript or css is built, the build process will create a unique name for each
instance of the component to make sure the css is component specific.

#### styled-components
---

There is a system that you have to install called styled-components.   I'm not a big fan, but if
you see code like this, it is probably using it:
```
import {styled} from 'styled-components';

const ControlContainer = styled.div`
    display: flex;
    .....
`
```
It needs to be installed into a react project.   Also, I double checked on the web and aparently it is
quite common to use this.   The basic concept is that the 'styled' import contains all of the components
that you typically might use within html, you then create a new one, eg ControlContainer from a div
(see above) and then apply styles using the backtick.   This ControlContainer then becomes available in
the project, eg <ControlContainer />.

You can perform conditional formatting passsing values into styled-components, eg:
```
colour: ${({invalid}) => invalid ? blue : green};
```

The invalid prop will conflict with normal html attributes, so it is a convention to pre-fix styled component
props with a $, eg:
```
colour: ${({$invalid}) => $invalid ? blue : green};
<ControlContainer $invalid={inputVariable} />
```

There is a special `&` character that can be used to represent the main component and apply styles to sub
components within 'styled-components', eg:
```
   & h1 {.....}             would apply css styling to ControlContainer -> h1
```

#### tailwind css
---

This is a very popular css framework that works well with react and I have heard about it at work!

To install tailwind, goto the tailwind website, installation, framework guides, then vite:
https://tailwindcss.com/docs/guides/vite

---------------------------
IMPORTANT
I think the tailwind docs show you how he setup an initial react app using vite!
---------------------------

```
npm create vite@latest my-project -- --template react       //setup a react project

npm install -D tailwindcss postcss autoprefixer
AND:
npx tailwind init -p

etc
```

VS CODE - Install 'Tailwind CSS Intellisence' extension for good autocompletion etc.

tailwind has similarities to bootstrap.   I am just going to have to do it to get
experience of this.

When creating dynamic tailwind components, you can just use variables, eg:
```
let labelClasses = "......";
if(invalid) {
    labelClasses = ".....x....";
}
...
<label className={labelClasses}>{label}</label>
```

## SECTION 7 - DEBUGGING REACT APPS
---

First part he goes over looking at errors in the console.   Generally aim for the first
problem and it might show the call stack and which line of code went wrong at the top.

Within chrome, when you look at the developer tools (inspect elemenbt), you can goto the
sources tab.   You should see a file structure with the code in.   It tends to have one
file with pre-compiled and once post compiled.   You just add a breakpoint in the code where
you need it.   It's quite easy really.

You can also do it in safari, but the directory structure might not be as clear.

Strict Mode

Generally done in index.jsx, but can be other components.   Need to import
```
import {StrictMode} from 'react';
```

You then wrap a component with <StrictMode></StrictMode>, eg:
```
<StrictMode>
<App />
</StrictMode>
```

It executes code twice in development, so can be useful for highlighting potential issues
that need fixing, such as growing arrays that are not supposed to grow.

DEV TOOLS - Chrome Only

He also shows you about react dev tools, which can be installed within chrome.   It adds a new
area to the dev area, where you can see 'components' and investigate components, props and
different areas of the screen.

Performance Insights -> Components

You just do a global search for how to install this.   As it turns out, you can also install
it into Safari, but you need to use npm/yarn etc:
```
yarn global add react-devtools
npm install -g react-devtools
```

## SECTION 8 - REFS AND PORTALS
---

Within the code you can create a variable that points directly to an object and then gets that
objects values directly without the get/set of useState, eg:
```
import {useState, useRef} from 'react';

const playerName = useRef();

function handleOnClick() {
    setEnteredPlayerName(playerName.current.value);
    setSubmitted(true);
}

<input ref={playerName} type="text" />

```
YOU MUST USE ```.current``` to access the variable.   It is like binding an input to a variable.

Note that it is possible to adjust the value of the input using something like ```playerName.current.value = 0```,
but that isn't really what react is about, but it can simplify things sometimes.

REF's DO NOT CAUSE A COMPONENT CODE TO BE RE-EXECUTED UNLIKE STATE, WHICH DOES, WHICH IS WHY
WE USE STATE.   REF'S ARE USEFUL BECAUSE THEY GIVE YOU DIRECT DOM ELEMENT ACCESS.

He had an interesting example project using a timer.   He couldn't set a local variable to the timer because
the javascript jsx code wiped the variable out when it was refereshed.   He tried making it a global variable,
but found this was shared between other components and so ended up with confused functionality.   He ended
up using a a ref to point at the timer function,

USEREF CAN BE USED TO POINT AT TIMER FUNTIONS !!!!

```
timer.current = setTimeout(()=>{...}
...
clearTimeout(timer.current);
```

#### forward refs
---

You cannot forward a ref into another component such as creating a dialog and a ref to it
in a parent component, then pass that ref into a sub component and call dialog.current.showModal().

To achieve this w need to use forwarRef.   The code needs to be restructured slightly with the
following key points:
    - import forwardRef
    - forwardRef needs to enclose the entire function that you would normally use and is assigned
    to a constant.
    - the ref parameter is passed at the end after params
    - don't forget to export default the constant.


```
import {forwardRef} from 'react';

const ResultModal =  forwardRef(function ResultModal({result, targetTime}, ref) {
    return (
        <dialog ref={ref} className="resultModal">
            ....
        </dialog>
    );
})

export default ResultModal;
```

#### useImperativeHandle
---

With the previous example, we call dialog.current.showModal() from outside of the
component, which can be a bit yucky as far as encapsulation is concerned.   For
example if we change from <dialog> to <div>, the code outside of the component
will stop working.

With useImperativeHande, we can define functions as part of the component that
can be called outside of the component.   We then only have to focus on the code
inside the dialog component if we change from <dialog> to <div>.

```
useImperativeHandle(
    ref,
    () => {
        return {
            open() {
                dialog.current.showModal();
            }
    };
});
```

#### portals (TELEPORT)
---

NOTE - THE IMPORT STATEMENT IS DIFFERENT
```
import {createPortal} from 'react-dom';

return createPortal(
    jsx code that you want to teleport,
    document.getElementById('modal')
)
```

It basically teleports the react jsx code of the component somewhere else within the document,
in particular the index.html file

Commonly used to transport code such as dialogs to other locations in html.

## SECTION 9 - PRACTICE PROJECT
---

I WATCHED THIS, BUT DIDN'T IMPLEMENT IT.   SOMETHING TO CATCH UP ON LATER.

## SECTION 10 - CONTEXT API, useReducer, Advanced State Management
---

Prop drilling - passing props from one component into a sub component, then sub component
into another sub component etc etc.

#### component composition
---

He had an example where he moved the code from the shop component into the app component,
stopped passing in a prop, but instead used the children prop to pass the data to the
sub component.

The problem with this is that it leads to a bloated app component, ie the top level component.

#### context api
---

The idea is that you can wrap multiple component with a context api that makes the props
available globally.   Also you can use it to manage 'state'.

There is a convention where context mangers go in a store directory next to the components directory,
so this is where he put the context manager(shopping-cart-context.jsx)

```
import {createContext} from 'react';

export const CartContext = createContext({
    items: []
});
```

Note - Name CartContext is on purpose, not snake case and first letter is capital.


Then in the app that is using it you wrap the components that want to use the
context manager:

```
import {CartContext} from './store/shopping-cart-context.jsx';

// Wrap the components that you want to be able to use this context manager using
// this syntax:

<CartContext.Provider value={{items: []}}>

    <Component1 />
    <Component2 />

</CartContext.Provider>
```

The `value={{items: []}}` is like a default value that you must provide when you
want to use the context within one of the sub apps.

To consume the context provider, you do something like this within the sub components:
```
// Import useContext and the actual context provider that you want to use:
import {useContext} from 'react';
import {CartContext} from '../store/shopping-cart-context.jsx';

export default function ........{
    const cartCtx = useContext(CartContext);
    // OR
    const {items} = useContext(CartContext);        // deconstruct context provider

    // You then use it within the component, eg:
    if(cartCtx.items.length === 0){...}
    // OR
    if(items.length === 0){...}
}
```

#### linking it to state
---

If you want to link it to a state, you just adjust the value property to point at the
state, however this has a problem.  It allows you to read, but not update!

```
const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

<CartContext.Provider value={shoppingCar}>
...
```

To deal with this, we add an object with the ability to read and update the context
provider.   You then pass this into the value:
```
const ctxValue = {
    items: shoppingCart.items,      // read the context provider
    addItemToCart: handleAddItemToCart  // function for updateing the context provider
};

<CartContext.Provider value={ctxValue}>

// He also updated the context provider so that we get autocompletion:
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}         // new dummy function
});
```

You can also deconstruct the context provider and then use the individual components,
eg:
```
const {items ,addItemToCart} = useContext(CartContext);

if (items.count !== 0) {....}
```

There is another method that you can use to access a context provider that might be used
in old react projects.   It's a bit more cumbersome and so isn't the default method.
It basially uses 'consumer' property of the context provider, but it needs to contain
a function that returns jsx code.   get:
```
return (
    <CartContext.Consumer>
    {(cartCtx) => {
        the original jsx code that you were returning.
    }}
    </CartContext.Consumer>
);
```

WHEN ACCESSING STATE VIA THE CONTEXT PROVIDER, THE REACT JSX SHOULD UPDATE WHEN THE
STATE IS CHANGED.

AS YOU MAY HAVE NOTICED EVEN THOUGH IT REDUCES PROP PROPOGATION, YOU STILL END UP
CALLING THE CONTEXT PROVIDE AND SETTING VALUES ALL OVER YOUR COMPONENTS.   THERE
IS AN ALTERNATIVE PATTERN, WHICH INVOLVES MOVING THE STATE AND FUNCTIONS THAT PROCESS
THE STATE INTO THE CONTEXT MANAGER (shopping-cart-context.jsx).

```
import {useState, createContext} from 'react';

// Define the context
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}         // new dummy function
});

// Also define a function that creates state, provides functions for editing
// state etc:
export default function CartContextProvider({children}) {
    // define states
    const [shoppingCart, setShoppingCart] = useState(...);

    function addItemToCart() {...};

    const ctxValue = {
        items: shoppingCart.items,
        addItemToCart: addItemToCart,
    };

    return (
        <CartContextProvider value={ctxValue}>
            {children}
        </CartContextProvider>);

}
```

You then just import that CartContextProvider and wrap your sub components
that need it with the component, eg:
```
    import {CartContextProvider} from '.....';

    export default function Blah() {
        return (
            <CarcContextProvider>
                .....
            </CartContextProvider>
        );
    }
```

WARNING - DOING THE USER TEST WAS DIFFICULT FOR THIS.   HERE ARE SOME KEY POINTS:

KEY POINTS:
    - You need to create a theme context provider which consists of:
        - A theme using react's createContext(...);
        - A theme context provider, which is basically an exported function.
            - You define states and functions to be exported within the context provider function
            - You either
                - create an object to hold those states and functions and pass it into value={object} OR:
                = deconstruct the states/functions directly into value, ie value={{myState, myFunction}}
            - Don't forget that the returned context provider, must end in .Provider and contain {children}
        - You choose a high up component, eg App.jsx where all sub-apps will be able to access the context provider
            - import the context provider FUNCTION
            - wrap the jsx in the context provider.
        - Within the sub-components that need to use the context provider you do the following:
            - import the context (NOT FUNCTION)
            - use the react function useContext(...) to get a handle on the context.
            - use that handle to either display state values or run functions for updating state.
        - Remember:
            - THIS IS HARD
            - provide {children} to the context provider function and return something like this:
                <ThemeContext.Provider value={..}>{children}</ThemeContext.Provider>
        
        AS THIS IS VERY DIFFICULT, I HAVE COPIED MY CODE THAT WORKED FOR THE TEST AND SAVED IT IN
        Section 10 -> 'my working tutorial' directory, but this won't work locally because it is based
        around the online method of writing react code.
    
#### useReducer
---

You may have noticed that quite frequently, the code looks a bit horrible because you have lots of
calls like this (pevStateValue) => {...code to update state...}

He is introducing a new concept called useReducer.   The generall format is like this:
```
function shoppingCartReducer(state, action) {
    return state;
}

export default function BlahContextProvider() {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {items: []});

    // The first argument is the function defined above, OUTSIDE OF THE CONTEXT PROVIDER FUNCTION
    // and the second argument is the default/initial value of the state.


}
```
later on in the code, you would then call the dispatch with an object to indicate how you want to
adjust the state, eg:
```
shoppingCartDispatch(
    {
        type: 'ADD_ITEM',
        payload: id
    }
);
```

The shoppingCartReducer could then be adjusted as follows:
```
function shoppingCartReducer(state, action) {
    if(action.type==='ADD_ITEM') {
        ........
        return new_state;
    }
    return state;
}
```

I HAVE TO SAY, THIS CHAPTER IS COMPLICATED !!!!!!

AGAIN, THIS IS PRETTY COMPLEX, SO I HAVE COPIED MY EXERCISE CODE INTO THE
'my working reducer exercise' DIRECTORY.

## SECTION 11 - side effects and useEffect() Hook
---

side effects are 'tasks' that don't impact the current render cycle.

He showed an example where the App needed sort sort a list of locations by
their distance from our current geolocation.   This was put at the top of
the App component.   Because other code then needs to use this data, it
is used to update a state.

This causes a problem because the new code updates state, the change in
state causes the jsx template to re-render, which causes the sorting
algorithm to run again etc etc, ie it creates an infinite loop.

#### useEffect for some side effects
---

It takes the following format:
```
import {useEffect} from 'react';

useEffect(()=>{
    .....
}, [dependencyList]);
```

- The code is run after the jsx code has been rendered, but the next time
it comes to running this, it checks the dependency list to see if it has
changed.   If it hasn't changed, the useEffect code is not run again, hence
preventing the infinite loop.

- When the dependency list is empty, ie [], then it will only execute once.
If you left out the , []) argument, the useEffect would execute over and over
again and you would get an infinite loop.

HE HAS TWO TUTORIALS DEMONSTRATING THAT YOU DO NOT ALWAYS NEED TO USE useEffect,
ONLY TO PREVENT INFINITE LOOPS OR DO SOMETHING THAT MUST HAPPEN AFTER THE jsx
CODE HAS RENDERED.

From tutorial 183-185, he went through an alternative way of showing a dialog
box.   The showModal() and close() need to be called after the modal has
renedered, so he uses useEffect to run the code at the end, after the return
statement:
```
function Modal({ open, children }) {
  const dialog = useRef();

  // useEffect is used to run the actual showModal and close after the
  // jsx has rendered and the dialog is actually associated with the modal.
  useEffect(() => {
    if(open) {
      dialog.current.showModal();
    }
    else {
      dialog.current.close();
    }
  }, [open]);   // adds dependencies here, ie props/state that the effect is dependent upon that can cause a refender.

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};
```
THE PREVIOUS CODE HAS A SLIGHT BUG WHERE THE USER CAN CLOSE A MODAL BY HITTING ESCAPE.   YOU NEED TO
ADD AN onClose={..} PROP TO SYNCRONISE THE STATE.   SEE 185 FOR HOW TO FIX THE BUG !!!!

In 188 onwards he mentioned a couple of key points:

- It is possible to return a cleanup function from useEffect(), which is called when the DOM of the jsx
is removed.
- There are some difficulties when using a function as a dependency within useEffect, eg:

```
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect( () => {
    const timer = setTimeout(() => {
      onConfirm();
    }
      ,3000
    );

    // Return a cleanup funciton which is called once the dom is removed.
    // Note, if useEffect is re-run, the cleanup function runs again before
    // useEffect (clean last useEffect).
    return () => {clearTimeout(timer);};

  },[onConfirm]); //Important - Danger

  ....}
```
- The previous example is used ot clear the timer when the dom is removed, ie no button is hit,
which is great.
- using the function onConform could cause an infite loop.   It is called, which re-renders the
parent app, which causes useEffect to re-render, which causes onConfirm to call again etc etc.

There is another react hook which can be used to deal with this problem useCallback.

#### useCallback
---

It takes the following format:
```
import {useEffect, useCallback} from 'react';

const someFunc = useCallback(
  normal_function_code
, [list_of_dependencies]);
```

Again, it has a list of dependencies and the normal_function_code is executed when this function is
called.   The key point is that this function isn't re-rendered all of the time and prevents the
infinite loop.

KEY:   USE useCallback WHEN USING useEffect WITH DEPENDENCIES THAT ARE FUNCTIONS.

#### Interesting Examples
---

He has an interesting example in lecture 190, where he has a progress bar that counts down
and useEffect is used to clean it up once the function is cleared.

HE ALSO POINTED OUT THAT THE EXAMPLE IS INEFFICIENT BECAUSE THE TIMER CODE CHANGES STATE EVER
10 MILLISECONDS, WHICH MAKES THE JSX RE-RENDER EVERY 10 MILLISECONDS.   SO HE SHOWS HOW
THE PROGRESS BAR CAN BE PUT INTO IT'S OWN COMPONENT WHICH MAKES IT MORE EFFICIENT.

## SECTION 12
---

This goes through building an example project.  It's worth watching quickly if you are having problems
with the previous sections.

There is something intersting.   The timer wasn't re-rendering once expired, so he managed to solve
this by making sure the key=.... was set on the component.   eg
```
<QuestionTimer
    key={activeQuestionIndex}
    timeout={10000}
    onTimeout={handleSkipAnswer}
/>
```
It also helped show why react strict mode is useful for debugging.

## SECTION 13
---

After looking at the initial project, I noticed something interesting. He has a function in log.js
the prints output to the console, but it formats the output so that it stands out.

#### React Profiler
---

He spent a bit of time demonstrating the react profiler.  In chrome, you goto inspect, then in the
title that contains things like console, eleements etc, to the right (hidden by >>) you get profiler.

Initially there is no data, but if you hit the record circle, hit some buttons on the website, then
stop recording, it will show a relationship between the components on the page and which components
were updated.

There are 2 main views:

Flame Icon - Has a hierarchical view of DOM and hightlights components that were changed during the
    recording with a colour.
Ranked Icon - I think this is ranked by render time.   It could be based upon component that caused
    the re-render and the components impacted below it.

#### Memo
---

During this tutorial, he highlighted how react re-renders lots of the dom when a state in the
parent component changes.   He used the memo field:
```
import {memo} from 'react';

const Counter = memo(...original function....);

export default Counter;
```

memo takes a look at the props that are passed to the component and will only rerender the
component if the input props have changed.

DON'T OVERUSE MEMO BECAUSE IT TAKES SOME PERFORMANCE TIME TO CHECK THE PROPS. INSTEAD TRY TO
USE IT HIGH UP IN THE COMPONENT TREE AS POSSIBLE TO PREVENT LOTS OF SUB COMPONENTS BEING
RENDERED.

#### Clever Component Composition
---

He demonstrated that a clever use of component composition can result in less rendering
in the dom. Changing state within a component will only render sub components, but
won't cause the parent component to re-render, so by moving state that changes quite
a lot into sub components rather than parent components can prevent lots of re-rendering.

He demonstrated this with the ConfigureCounter component, which was moved from App.jsx
into ConfigureCounter.jsx

#### memo doesn't always work and useCallback
---

He showed an example of where using memo should work, but didn't because of functions
within a component.   By using useCallback, it stopped the component being re-rendered
all of the time.

#### useMemo
---

You can get the situation where a complex function can be recalculated whenever a
prop changes, however unlike memo, useMemo works on the function rather than the
component funciton:

memo - works on component function.
useMemo - works on individual functions.

Example:
```
const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);
```

AGAIN, DON'T OVERUSE useMemo, AS IT CAN IMPACT PERFORMANCE.   USE IT TO ENCLOSE
CALCULATION INTENSIVE FUNCTIONS

#### React uses a virtual DOM.   Time to explore it.
---

When you hit a button etc, it isn't the whole DOM that changes, just a part of it.

React builds a virtual DOM in memory, when you interact with it, it builds the DOM,
compares it to the old DOM, checks what HTML etc has changed and then only implements
those changes.   Efficient !!

#### IMPORTANT - WHY KEYS MATTER
---

You would think that state is specific to a component, but it isn't.   It is also
dependent upon position, which means you can have weird effects if components of
the same type are next to each other but swap position.

This is why the `key` is important to keep local specific to an instance of the
component.

Using keys can also speed up dom rendering with only a few components re-rendering
rather than lots.

There was a situation where a component wasn't re-rendering when a prop changed.
YOU CAN FORCE A COMPONENT TO RERENDER IF YOU GIVE IT A KEY THAT CONTAINS THE
VALUE THAT YOU WANT TO MAKE THE COMPONENT RERENDER, IF IT CHANGES, eg:
```
<Counter key={chosenCount}.../>
```
[A change in chosenCount will re-render the Counter component.]

#### IMPORTANT - MILLIONJS
---

He briefly goes over the instalation of this, which is pretty simple when done in
automatic mode and can significantly speed up DOM rendering.  Worth watching for
complex projects.

## SECTION 14 - Class Based Components
---

So far we have only seen functional compnents.   You also get class comonents that take
the following general form:
```
import {Component} from 'react';

class User extends Component {
  render() {
    // extending Components makes this.props available
    return <li className={blah}>{this.props.name}</li>;
  }
}

export default User;
```

CLASS BASED COMPONENTS CANNOT USE REACT HOOKS.

BOTH CLASS AND FUNCTIONAL BASED COMPONENTS CAN EXIST WITHIN A PROJECT.

#### Working with State & Events
---

In this tutorial he shows you how to change a functional component into
a class based component.   The following are key points:

1 - When using state within a class based component, you need to use a
constructor.   You must call super(); and you set this.state to a single
object.

2 - Any functions are created as functions of the class.   If you want to 
change state you need to use the this.setState() function.   Unlike the
useState, react merges the changes that you make and there is a function
type one that ensures updates flow through correctly.

3 - You reference the state values using `this.state.myValue`

4 - When you call a function you cannot just use this.functionName, you
need to use something like this:
```
{this.toggleUsersHandler.bind(this)}
```


FINAL RESULT:
```
class Users extends Component {
  
  constructor() {
    // With class based components, state is always initialized
    // to an object.
    super();
    this.state = {
      showUsers: true,
    };
  }

  // Functions are just added to the class.
  toggleUsersHandler() {
    // This isn't how you change state in the class
    // this.state.showUsers = false;

    // IMPORTANT - Don't need to override state, it will be merged, hence
    // no need for ...this.state
    // this.setState({showUsers: false});
    // It also supports a function format:
    this.setState((oldState) => {
      return {showUsers: !oldState.showUsers};
    });
  }

  render() {

    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
```

#### component lifecycle with classes
---

You cannot use things like useEffect() within a class.   Basically the Component
base class comes with some functions that you can overide.   The 3 most important
are:
- componentDidMount()       - called when component mounted         - equivalent to useEffect(...,[])
- componentDidUpdate()      - called when comp is updated           - equivalent to useEffect(...,[someDependencies])
- componentWillUnmount()    - called before comp unmouned           - equivalent to cleanup function in useEffect


componentDidUpdate(prevProps, prevState) {
    // to avoid infinite loops, check if prevState has changed
}

componentDidMount() {
    // send http request to some database
    // then update state:
    this.setState({filteredUsers: DUMMY_USERS});
}

componentWillUnmount() {
    console.log('Users will unmount!');
}

#### Class Components and Context
---

With class based components, you cannot connect to multiple contexts, you can only
connect to one.

Within the class, you add something like this:
```
class UserFinder extends Component {
    static contextType = UsersContext;
    ....
```

You could then access the context using something like
```
    this.context.users
```

If you do need more than one context, perhaps consider wrapping a class within a
class.

#### Class vs Functional Components
---

- As a general principle, prefer functional components, unless:
    - you prefer class components
    - your teams uses a lot of class components
    - you need to work with error boundaries

#### Class Components and Error Boundaries
---

In javascript can use try ... catch ... to process errors, which is fine within
one error.  This doesn't work within jsx if you want to raise an error and another
parent component to process the error.

As an end result, what you end up with is a component that you can wrap other
components with to catch their errors, eg:
```
    <ErrorBoundary>
        <SomeOtherComponent />
    </ErrorBoundary>
```

To write an error boundary component, you must use a class and it can take a format
similar to the following:
```
class ErrorBoundary extends Component {
    constructor () {
        super();
        this.state = {hasError: false};
    }

    componentDidCatchError(error) {
        console.log(error);
        this.setState({hasError: true});
    }

    render() {
        if(this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}
```

CURRENTLY IF YOU ARE LOOKING AT THE WEBPAGE IN DEV, YOU MIGHT QUICKLY SEE THE ERROR
AND THEN IT WILL TAKE YOU TO ANOTHER PAGE HIGHLIGHTING THE ERROR.   IN A PRODUCTION
BUILD ENVIRONMENT THIS WON'T HAPPEN.

## SECTION 15 - HTTP Requests (connecting to a database)
---


#### ???
---