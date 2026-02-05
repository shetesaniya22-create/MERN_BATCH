console.log("this s our main file");

let contentPara=document.getElementById("content");
console.log(contentPara);

contentPara.style.fontFamily="arial";
contentPara.style.fontSize="20px";

let container=document.getElementById("container");
console.log(container);

// container.children.filter(element=>{
//     console.log(element);
    
// })

//It will gives the all the childrean elements from div tag
Array.from(container.children).forEach(element=>{
    console.log(element);
    
});

for(let child of container.children){
    console.log(child);
    
}

//DOM Traversal Methods---->
// 1.getElementById()
// 2.getElementsByClassName()
// 3.querySelector()
// 4.querySelectorAll()

console.log(document.querySelector("#content"));

//To get the P tag inside the container
console.log(document.querySelector("#container p"));

//It gives nodeList
console.log(document.querySelectorAll("#container span"));

// > ---> Immediate child
console.log(document.querySelector(".outer > li > p"));

// space--->Anywhere inside
console.log(document.querySelector(".outer li p"));


let para=document.querySelector(".outer p");

//text-content--> It will give all the text even though there is display:none property exist that is hidden text also
console.log("text-content:->",para.textContent);

//innerText--> It will not give the text content where display:none property exist
console.log("inner text:->",para.innerText);

//innerHTML--> It will gives the content of the selected tag including HTML-tag also
console.log("innerHTML-->",para.innerHTML);


//Get an element with attribute 
let inputElement=document.querySelector(`input[name='fname']`);
console.log(inputElement);

let allColumns=document.querySelectorAll("#age-table td");
console.log(allColumns);

for(let columns of allColumns){
    if(columns.textContent.includes("Age")){
       console.log(columns);
       
    }
}

document.getElementById("content").setAttribute("data-value",2)









