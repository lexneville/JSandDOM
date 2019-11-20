// const input = document.getElementById('input');
// const submit = document.getElementById('submit');
// const showHideButton = document.getElementById('showHideButton');
// const removeButton = document.getElementById('removeButton'); 
 

// submit.addEventListener('click', ()=> {
//     let listItem = document.createElement('li');
//     listItem.textContent = input.value;
//     console.log(listItem);
//     list.appendChild(listItem);
//     input.value = '';
// })

// removeButton.addEventListener('click', () => {
//     let lastItem = document.querySelector('li:last-child');
//     let list = document.getElementsByTagName("ul")[0];  
//     list.removeChild(lastItem);
// })

// showHideButton.addEventListener('click', ()=> {
//     // Check if the list is already visible
//     if (list.style.display == 'none') {
//         // if list is invisible change to visible
//         list.style.display = 'block';
//         //change button text to 'Hide"
//         showHideButton.textContent = 'hide';
//     } else {
//         //if list is visible
//         //change list display to invisible
//         list.style.display = 'none';
//         //change button text to 'show'
//         showHideButton.textContent = 'show';
//     }
// })

//=-=-=-=-=-=- Mouseover changes lower to uppercase =-=-=-=-=-=

// const listItem = document.getElementsByTagName("li");

// list.addEventListener("mouseover",()=>{
//     listItem[1].textContent = listItem[1].textContent.toUpperCase();
// })
// list.addEventListener("mouseout",()=>{
//     listItem[1].textContent = listItem[1].textContent.toLowerCase();
// })

//=-=-=-=-=-=- Mouseover changes lower to uppercase using event method to target the element that the mouse is hovering over =-=-=-=-=-=

// document.addEventListener("click",(event)=> {
//     console.log(event);
//     console.log(event.target);
// })

// list.addEventListener("mouseover",(event)=>{
//     if(event.target.tagName == "LI")
//     event.target.textContent = event.target.textContent.toUpperCase();})
// list.addEventListener("mouseout",(event)=>{
//     if(event.target.tagName == "LI")
//     event.target.textContent = event.target.textContent.toLowerCase();})



const list = document.getElementById("list");

list.addEventListener("click", (event) =>{
    if(event.target.tagName=="LI") {
        let li = event.target;
        let ul = li.parentNode
        ul.removeChild(li);
    }
});




