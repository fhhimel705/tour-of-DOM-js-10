// console.log('hello world');

/*---in case of id its singular and it will not return array like object and you can get innerText directly------*/
let ul =  document.getElementById('ul-id');
// console.log(ul);

/*---in case of class its plural and it will return array like object and you can't get innerText directly------*/
let li = document.getElementsByClassName('li-class');
// console.log(li);

for(const li01 of li){
    // console.log(li01.innerText);
}

/*---  in case of tag its plural and it will return array like object and you can't get innerText directly ------*/
let h1 = document.getElementsByTagName('h1');
console.log(h1);
for(let h1_title of h1){
    console.log(h1_title.innerText);
}

/*---------- you can also cahnge innerText ----------*/
let h1Title = document.getElementById('cocky-title');
h1Title.innerText = 'Title changed by js';

/**---------- using query------------- */
let queryLi = document.querySelectorAll('.li-query');
console.log(queryLi);

/*---------- we can get li using query by ul class --------**/
let query_ul_li = document.querySelectorAll('.query-ul li');
console.log(query_ul_li);