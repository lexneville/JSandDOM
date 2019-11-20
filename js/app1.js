// const myHeading = document.getElementById("heading");

// myHeading.addEventListener("click",()=>{
//     myHeading.style.backgroundColor = "red";
// });

// const heading = document.getElementById("heading");
// const input = document.getElementById("input");
// const button = document.getElementById("button");

// button.addEventListener("click", ()=>{
//     myHeading.style.color = input.value;
// });

// const paragraphs = document.getElementsByTagName("P");
// let firstPara = paragraphs[1];

// console.log(firstPara);

// for (i=0 ; i < paragraphs.length ; i++) {
//     console.log(paragraphs[i]);
// };

// //Activity 2
// const list = document.getElementsByTagName("li");
// console.log(list);

// //Activity 3

// for (i=0 ; i<list.length ; i++){
//     list[i].style.color = "orange";
// };

// //Activity 4

// const notOrange = document.getElementsByClassName("not-orange");

// for (i=0 ; i<notOrange.length ; i++){
//     notOrange[i].style.color = "red";
// };

const listItems = document.querySelectorAll("li:nth-child(even)");

for(let i=0; i < listItems.length; i++){
    listItems[i].style.color = "lightgreen";
}
