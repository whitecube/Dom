# Dom

A super lightweight JavaScript Dom manipulator

## Installation

### NPM
`npm i whitecube-dom`

### Yarn
`yarn add whitecube-dom`


## Dom class
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


## DomElement class
The `DomElement` class is a container for a single dom element.  
Most of the following methods return `this` to allow method chaining.  

### Properties
`DomElement.tag` → the tag name of this element  
`DomElement.classes` → an array containing the classes  
`DomElement.attributes` → an object containing the available attributes  
`DomElement.el` → the underlying HTMLElement

### Methods

### `DomElement.addClass(className)`
*→ returns `this`*  
Adds a class to the element.


### `DomElement.removeClass(className)`
*→ returns `this`*  
Removes a class from the element.

...


---

Todo: complete the docs.