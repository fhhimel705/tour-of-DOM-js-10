/*--
-----------We can manipulate dom by using 5 methods-----------
--*/

// we use it for single tags
let li_id = document.getElementById('li-id');
console.log(li_id);

// we use it for many tags which we will use frequently
let li_class = document.getElementsByClassName('li-class');
console.log(li_class);


// we will use it by calling out tag names
let li = document.getElementsByTagName('li');
console.log(li);

// we will use it by queryAll which is plural- have to show if its id , class or tag.
let titleQuery = document.querySelectorAll("#tour-tile");
console.log(titleQuery);

let domQuery = document.querySelectorAll('.dom');
console.log(domQuery);

// we will use it by query singular
let liQuery = document.querySelector('li');
console.log(liQuery.innerText);
