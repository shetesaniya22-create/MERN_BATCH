const section=document.createElement("section");
// console.log({section});

const para=document.createElement("p");
para.id="title";
para.textContent="some random text comes here";
// console.log({para});


const additionalPara=document.createElement('p');
additionalPara.textContent="some more text for additional para";
additionalPara.id="additional";
// console.log(additionalPara);


//append() function characteristics--->
//Multiple nodes can be appended at a time
//Text node can be added
//Doesn't return anything
//Adds the element as a last child of parent element

//append child
//only works with node
//returns th appended node
//only one node can be appended at a time.

console.log("append:->", section.append(additionalPara,"Created using"));


//When we add elements to the beginning  then we can use prepend() method


//Difference between remove and removeChild()

//1.removeChild needs to be called on the parent element
//2. removeChild return the node which was removed

//1.remove is directly called on the element which is to be removed
//2.remove doesn't return anything-returns undefined


//There are two ways to remove all the chld nodes of an element.
//1. innerHTML ="" (We can set it to the blank)
//2. replaceChildren()--> without any arguments it will clear all the child nodes
