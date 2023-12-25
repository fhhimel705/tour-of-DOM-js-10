// const manipulateSection = document.getElementById('manipulate-section');
// console.log(manipulateSection.childNodes);
// console.log(manipulateSection.childNodes[1]);
// console.log(manipulateSection.childNodes[3]);
// console.log(manipulateSection.childNodes[3].childNodes[5]);
// console.log(manipulateSection.childNodes[3].childNodes[5].nextSibling);

console.log(document.querySelector("#manipulate-section ul"));

/*------ we can create element and append or add it into any section or tag -------*/

let p = document.createElement("p");
p.innerText = 'hello minna. how are you all ? i guess you are all fine.';
// console.log(p);

let manipulateSection = document.getElementById('manipulate-section');
manipulateSection.appendChild(p);

let li = document.createElement('li');
li.innerText = 'dom-05';
// console.log(li);

let manipulateUl = document.getElementById('manipulate-ul');
manipulateUl.appendChild(li);


document.createElement("span");
document.createElement("div");
document.createElement("section");

/*-------- we can set parentNode , childNode or sibilingsNode as output ----------*/

console.log(manipulateUl.parentNode.parentNode.parentElement);
console.log(manipulateSection.childNodes);