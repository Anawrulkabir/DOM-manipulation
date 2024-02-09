// option 1 : getElementsByTagName 
const allHeadings = document.getElementsByTagName('li');
// for (const heading of allHeadings) {
//     console.log(heading.innerText);
// }

// option 2 : getElementById
const allFruits = document.getElementById('fruits');

// for (const fruit of allFruits) {
//     console.log(fruit.innerText);
// }

// option 3 : getElementsByClassName
const fruitName = document.getElementsByClassName('fruit-type');
fruitName.innerText = "hello fruit"

// option 4 : querySelector
const fruitNew = document.querySelector('#fruits-new li');
// console.log(fruitNew);

// option 5 : querySelectorAll
const fruitNew1 = document.querySelectorAll('#fruits-new li');
// console.log(fruitNew1);

// important 
// nodelist vs htmlcollection

// nodelist 
// Anything within an HTML document including comments, text, HTML elements and much more
// “text”, <!-- comment -->, <span>
// live updates - sometimes
// Use static NodeLists or convert to an array since arrays have many additional methods such as map and reduce



// html collection
// Only HTML Elements 
//<span>, <div>, <body>, <a>, etc.
// live updates - always
// Generally don’t use as live updates can lead to hard to fix bugs

const title = document.getElementById('heading');
title.setAttribute('title','title set by js');