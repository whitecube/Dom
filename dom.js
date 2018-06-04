export class Dom {

    /**
     * Creates a DOM element with the 
     * specified classes and attributes
     * 
     * @param {string} tag The tag name
     * @param {array} classes Optional list of class names
     * @param {string} content Optional text content
     * @param {object} attributes Optional additionnal attributes
     * @returns {DomElement}
     */
    static element(tag, classes, content, attributes) {
        return new DomElement().create(tag, classes, content, attributes);
    }

}

export class DomElement {

    constructor(element = null) {
        this.el = element;
        this.classes = element != null ? element.className.split(/\s+/) : [];
        this.attributes = element ? this.extractAttributes(element) : {};
    }

    init(content = null) {
        let el = document.createElement(this.tag);
        el.textContent = content;
        this.classes.forEach(className => el.classList.add(className));
        for (var key in this.attributes) {
            el.setAttribute(key, this.attributes[key]);
        }
        this.el = el;
    }

    extractAttributes(node) {
        let attrs = {};
        for (var i = 0, atts = node.attributes, n = atts.length; i < n; i++) {
            attrs[atts[i].nodeName] = atts[i].value;
        }
        return attrs;
    }

    /**
     * Creates a DOM element with the 
     * specified classes and attributes
     * 
     * @param {string} tag The tag name
     * @param {array} classes Optional list of class names
     * @param {string} content Optional text content
     * @param {object} attributes Optional additionnal attributes
     * @returns {DomElement}
     */
    create(tag, classes = [], content = null, attributes = {}) {
        this.tag = tag;
        this.classes = classes;
        this.attributes = attributes;
        this.init(content);
        return this;
    }

    /**
     * Adds a class to the element
     * @param {string} className The class to add
     * @returns {this}
     */
    addClass(className) {
        if (this.classes.includes(className) || this.hasClass(className)) return this;
        this.classes.push(className);
        this.el.classList.add(className);
        return this;
    }

    /**
     * Removes a class from the element
     * @param {string} className The class to remove
     * @returns {this}
     */
    removeClass(className) {
        if(!this.classes.includes(className) || !this.hasClass(className)) return this;
        this.classes = this.classes.filter(existingClass => existingClass != className);
        this.el.classList.remove(className);
        return this;
    }

    /**
     * Checks if the element has the specified class
     * @param {string} className The class to check for
     * @returns {boolean}
     */
    hasClass(className) {
        return this.el.classList.contains(className);
    }

    /**
     * Removes an attribute from the element
     * @param {string} attribute The attribute name to remove
     * @returns {this}
     */
    removeAttribute(attribute) {
        if(!this.attributes[attribute] || !this.hasAttribute(attribute)) return this;
        delete this.attributes[attribute];
        this.el.removeAttribute(attribute);
        return this;
    }

    /**
     * Sets an attribute on the element
     * @param {string} attribute The attribute name
     * @param {mixed} value The value to set the attribute to
     * @returns {this}
     */
    setAttribute(attribute, value) {
        if (this.attributes[attribute] || this.hasAttribute(attribute)) return this;
        this.attributes[attribute] = value;
        this.el.setAttribute(attribute, value);
        return this;
    }

    /**
     * Checks if the element has the specified attribute
     * @param {string} attribute The attribute name to check for
     * @returns {boolean}
     */
    hasAttribute(attribute) {
        return this.el.hasAttribute(attribute);
    }

    /**
     * Removes an element from the DOM
     * @param {int} duration The duration after which to remove the element
     * @param {string} className An optional class name to add to the element before removing it
     * @returns {this}
     */
    remove(duration = 0, className = '') {
        if (duration == 0) return this.unbindFromDom();
        this.addClass(className);
        setTimeout(() => {
            this.unbindFromDom();
            this.removeClass(className);
        }, duration);
        return this;
    }

    /**
     * Remove the element from the DOM immediately
     * @returns {this}
     */
    unbindFromDom() {
        this.el.parentNode.removeChild(this.el);
        return this;
    }

    /**
     * Inserts the element into the specified element
     * @param {HTMLElement|DomElement} element The parent element
     * @returns {this}
     */
    insertInto(element) {
        element.appendChild(this.el);
        return this;
    }

    /**
     * Appends a child element to the element
     * @param {HTMLElement|DomElement} childNode The child element
     * @returns {this}
     */
    appendChild(childNode) {
        this.el.appendChild(childNode);
        return this;
    }

    /**
     * Adds an event listener to this element
     * @param {string} event The event to listen for
     * @param {callback} callback The actions to perform
     */
    on(event, callback) {
        this.el.addEventListener(event, callback, false);
        return this;
    }

    /**
     * Removes an event listener
     * @param {string} event The event to stop listening for
     * @param {callback} callback
     * @returns {this}
     */
    off(event, callback) {
        this.el.removeEventListener(event, callback);
        return this;
    }

}