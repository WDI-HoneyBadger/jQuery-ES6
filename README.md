# jQuery Review With ES6!


## But First - ES6 Summary:
We just learned about a few of the essential parts of ES6 (aka JS 2015), the newer version of javascript that is wildly WILDLY popular.  In ES6 we learned about:

* `const` - we use `const` to declare variables that we don't want to change.  If someone tries to reassign a variable that was declared as `const`, javascript will say, "NO".  However, if a `const` variable is an object or array you *can* change it, you just can't reassign it to a brand new array or object.
* `let` - we use `let` to declare variables that we know are going to be changed.  We also use `let` when we want to have a variable that has "block scope".  Block scope is like function scope, but allows variables to be scoped within `for` loops, `if` statements, etc.
* `() => {}` - arrow functions are the ES6 way of declaring functions.  If an arrow function takes in parameters it looks like: `(param1, param2) => {}`.  Arrow functions are there to let us write nice, tidy functions so we can type less and do more.  Other cool things about arrow functions:
  
  A "standard" arrow function looks like this:
  ```javascript
  const addTwo = (num) => {
    return num + 2;
  }
  ```

  But if you want to, with an arrow function you can write it all on one line like this:
  ```javascript
  const addTwo = (num) => num + 2;
  ```

  and it will do exactly the same thing!  
  
  **When an arrow function is written on one line you don't need to use `{}` and you don't need `return`.  The arrow function will automatically return what is on that line!!**

  cool.
 
## jQuery Review (with ES6):
We'll be needing jQuery soon, let's brush up a bit and 

### Starter:
You are given an html, js, and css page.

#### HTML:
The `index.html` is already connected to the javascript file and the css file.  The jQuery CDN has already been loaded in.

There is a button for "Decepticons" and a button for "Autobots".  There is also a `div` with the class name `display`.


#### JS:
The `main.js` has the data needed to complete this task as a const called `transformers`.  This data is in the format of an array of objects.

The `main.js` file has already been set up with `$(document).ready`


## Spec:
We are going to create a simple transformers filter app.  There will be 2 buttons: one labeled "decepticons" and one labeled "autobots".  Clicking on autobots button should clear the `display` of any transformers and then render only the transformers with `team: 'Autobot'` to the `display` div.  Clicking on the "decepticons" button should clear the `display` of any transformers in there and append all the transformers with `team: 'Decepticons'`.

Each rendered transformer should be:
- in it's own div.
- at the top of the div there should be a header with the bots name.
- below the name there should be an image of the transformer.
- below the image have a `<ul>` tag that has the "form" and "team" as seperate `<li>` tags inside.

**IMPORTANT - This should all be done in ES6!!!**

## Bonus - Style with Flexbox
Make that super cool app super pretty! Use flexbox to style the `display` div so the cards are laid out on a grid.  Make the cards `flexboxes` too!

