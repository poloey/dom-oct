// console.log(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 'some another title';
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[24]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

/**
 *  Selector
 */
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.innerText = "hello world"
// headerTitle.innerHTML = "hello world"
//textContent work when I keep text style display none;
// headerTitle.textContent = "Heading changed by textContent"
// headerTitle.style.color = 'yellow';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[0].textContent = "hello 2";
// items[1].style.backgroundColor = "teal";
// items[1].style.color = "white";
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f3f3f3';
// }

/**
 * querySelector
 */
// var listHeader = document.querySelector('#list-header')
// listHeader.style.borderBottom = '4px solid #ccc';
// listHeader.style.paddingBottom = '10px';
// listHeader.style.marginBottom = '20px';
// var input = document.querySelector('input');
// input.value = 'hello world';
// var submit = document.querySelector("input[type=submit]");
// submit.value = 'send';
// console.log(submit);
/**
 *  querySelectorAll
 */
var li = document.querySelectorAll('li')
console.log('li', li);
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f3f3f3';
}
for (let i = 0; i < even.length; i++) {
  even[i].style.backgroundColor = 'teal';
  even[i].style.color = 'white';
}

















