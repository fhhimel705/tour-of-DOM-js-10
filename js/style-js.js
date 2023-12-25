const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '3px solid black';
    section.style.marginBottom = '5px';
    section.style.textAlign = 'center';
    section.style.borderRadius = '20px';
    section.style.backgroundColor = 'lightgray';
}

/*---- we can also overwrite style in js -----*/
// document.getElementById('manipulate-section').style.backgroundColor = 'yellow';

