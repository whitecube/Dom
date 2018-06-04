# Dom

A super lightweight JavaScript Dom manipulator

## Installation

### NPM
`npm i whitecube-dom`

### Yarn
`yarn add whitecube-dom`

and then in your code simply import the classes you need:

```js
import { Dom, DomCollection, DomElement } from 'whitecube-dom';
```


## Dom
The `Dom` class aims to give you shortcuts to make your life easier when working with dom elements.

#### `Dom.element(tag, classes = [], attributes = {})`
*→ returns a DomElement instance.*  
```js
let x = Dom.element('div');
let y = Dom.element('div', ['class-one']);
let z = Dom.element('div', ['class-one', 'class-two'], { 
  'data-test': 'Hello there'
});
```

## DomCollection
The `DomCollection` class wraps multiple DomElements.


### Constructor
#### `new DomCollection(elements = [])`

### Properties
`DomCollection.els` → An array/nodelist containing the DomElements

### Methods

#### `DomCollection.add(el)`
`param {DomElement|HTMLElement} el` The element to add
*→ returns `this`*  
Add an element to the collection.


#### `DomCollection.each(callback, reverse = false)`
`param {callback} callback` The code to execute  
`@param {boolean} reverse` Should we loop in reverse  
*→ returns `this`*  
Iterate over each of the DomElements and run code.


#### `DomCollection.on(event, callback)`
`param {string} event` The event to listen for  
`param {callback} callback` The code to execute  
*→ returns `this`*  
Add event listeners to all elements of the collection.


#### `DomCollection.off(event, callback)`
`param {string} event` The event to stop listening for  
`param {callback} callback`
*→ returns `this`*  
Remove event listeners from all elements of the collection.


#### `DomCollection.insertInto(parent)`
`param {DomElement|HTMLElement} parent` The element to insert into  
*→ returns `this`*  
Insert this collection into an element.


#### `DomCollection.count()`
*→ returns `int`*  
Returns the amount of items in the collection.


## DomElement
The `DomElement` class is a container for a single dom element.  
Most of the following methods return `this` to allow method chaining.  

### Constructor
#### `new DomElement(element = null)`

### Properties
`DomElement.tag` → the tag name of this element  
`DomElement.classes` → an array containing the classes  
`DomElement.attributes` → an object containing the available attributes  
`DomElement.el` → the underlying HTMLElement

### Methods

#### `DomElement.create(tag, classes = [], content = null, attributes = {})`
*→ returns `this`*  
Creates a node

#### `DomElement.addClass(className)`
*→ returns `this`*  
Adds a class to the element.


#### `DomElement.removeClass(className)`
*→ returns `this`*  
Removes a class from the element.


#### `DomElement.hasClass(className)`
*→ returns `boolean`*  
Checks if the element has the specified class.


#### `DomElement.setAttribute(attribute, value)`
`param {string} attribute` The attribute name  
`param {mixed} value` The value to set the attribute to  
*→ returns `this`*  
Sets an attribute on the element.


#### `DomElement.removeAttribute(attribute)`
`param {string} attribute` The attribute name to remove  
*→ returns `this`*  
Removes an attribute from the element.


#### `DomElement.hasAttribure(attribute)`
`param {string} attribute` The attribute name to check for  
*→ returns `boolean`*  
Checks if the element has the specified attribute.


#### `DomElement.remove(duration = 0, className = '')`
`param {int} duration` The duration after which to remove the element  
`param {string} className` An optional class name to add to the element before removing it  
*→ returns `this`*  
Removes an element from the DOM.


#### `DomElement.insertInto(element)`
`param {HTMLElement|DomElement}` element The parent element  
*→ returns `this`*  
Inserts the element into the specified element.


#### `DomElement.appendChild(childNode)`
`param {HTMLElement|DomElement} childNode` The child element  
*→ returns `this`*  
Appends a child element to the element.


#### `DomElement.on(event, callback)`
`param {string} event` The event to listen for  
`param {callback} callback` The actions to perform  
Adds an event listener to this element.


#### `DomElement.off(event, callback)`
`param {string} event` The event to stop listening for  
`param {callback} callback`  
Removes an event listener.


#### `DomElement.clone(deep = true)`
`param {boolean} deep` Should we copy the child nodes as well  
*→ returns `DomElement`*  
Create a copy of this element.


#### `DomElement.qs(selector)`
`param {string} selector` Query selector  
*→ returns `DomElement`*  
Finds an child element.


#### `DomElement.qsa(selector)`
`param {string} selector` Query selector  
*→ returns `DomCollection`*  
Finds child elements.


#### `DomElement.height()`
*→ returns `int`*  
Get the height of the element.


#### `DomElement.width()`
*→ returns `int`*  
Get the width of the element.

---

Todo: complete the docs.
