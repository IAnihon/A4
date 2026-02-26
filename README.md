1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById is a DOM method used to select an HTML element by its id. getElementsByClassName is a DOM method used to select HTML elements by their class name.querySelector() is a DOM method that selects an element using a CSS selector. querySelectorAll returns a NodeList that can be multiple. Example : document.querySelectorAll(".item");

2. How do you create and insert a new element into the DOM?
Answer: Create a new element using document.createElement("tagName").
        Add content or attributes using innerText, textContent, or setAttribute().
        Insert it into the DOM using appendChild() or append() on a parent element.

3. What is Event Bubbling? And how does it work?
Answer:Event Bubbling is a process where an event starts from the target element and then propagates upward               through its parent elements in the DOM.
       When an element is triggered, the event first runs on that element and then moves up to its parent and             ancestor elements.

5. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique where you add one event listener to a parent element instead of adding             listeners to multiple child elements.It is useful because it improves performance and works automatically          for dynamically added elements.

6. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser’s default action .stopPropagation() stops the event from bubbling up to         parent elements.
