/*--(01) where to add --*/
let manipulateSection02 = document.getElementById("manipulate-section");

/*--(02) what to be added --*/
let p02 = document.createElement("p");
p02.innerText = "hello minna. how are you all ? i guess you are all fine.";
// console.log(p);

/*---(03)  add the child -------*/
manipulateSection02.appendChild(p02);

// ----------------- how to add a new section ny js ---------------------------//

let mainId = document.getElementById("main-id");

let newSection = document.createElement("section");
console.log(newSection);
let newH1 = document.createElement("h1");
newH1.innerText = "New section title";

newSection.appendChild(newH1);
mainId.appendChild(newSection);

let newUl = document.createElement('ul');

let li01 = document.createElement('li');
li01.innerText = 'new li created by js 01';
newUl.appendChild(li01);

let li02 = document.createElement('li');
li02.innerText = 'new li created by js 02';
newUl.appendChild(li02);

let li03 = document.createElement('li');
li03.innerText = 'new li created by js 03';
newUl.appendChild(li03);

newSection.appendChild(newUl);

/*----------- Set innerHtml Directly -----------*/
const secondSection = document.createElement('section');
secondSection.innerHTML = `
<h1> Second section title has added by js </h1>
<ul>
<li> new section added 01 </li>
<li> new section added 02 </li>
<li> new section added 03 </li>
</ul>
`
mainId.appendChild(secondSection);