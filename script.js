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
// var li = document.querySelectorAll('li')
// console.log('li', li);
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f3f3f3';
// }
// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = 'teal';
//   even[i].style.color = 'white';
// }

/**
 * Dom Traversing parents 
 */
var list_group = document.querySelector('ul.list-group');
var card_body = list_group.parentNode;
var card_body2 = list_group.parentElement;

/**
 * Dom Traversing child 
 */
var list_item = list_group.childNodes; // it will return all blank space as child (text node)
var list_item_1 = list_group.childNodes[0];
var list_item = list_group.children; // so we should use children instead of childNodes
var list_item_1 = list_group.children[0]; //
var first_child = list_group.firstChild; //here first childNode return text which actually a empty space
var first_child = list_group.firstElementChild; // firstElementChild return li
var last_child = list_group.lastChild;
var last_child = list_group.lastElementChild;
/**
 * Dom Traversing siblings 
 */
var next_sib = first_child.nextSibling;
var next_sib = first_child.nextElementSibling;
var prev_sib = next_sib.previousSibling;
var prev_sib = next_sib.previousElementSibling;

/**
 * Creating element in dom
 */
var h1 = document.createElement('h1');
h1.className = 'title first-header';
h1.setAttribute('class', 'hello world');
var text = document.createTextNode('First heading created by js');
h1.appendChild(text);
var container = document.querySelector('.container');
var h2 = document.querySelector('#main-header');
container.insertBefore(h1, h2);
h1.style.fontSize = '20px';

 /**
  * Events in js
  */
var btn = document.querySelector('#test_btn');
btn.addEventListener('click', function (e) {
  console.log('event', e);
  console.log('event type - ', e.type);
  console.log('target - ', e.target);
  console.log('target id - ', e.target.id);
  console.log('target className - ', e.target.className);
  console.log('target classList - ', e.target.classList);
  console.log('clientX - ', e.clientX);
  console.log('clientY - ', e.clientY);
  console.log('offsetX - ', e.offsetX);
  console.log('offsetY - ', e.offsetY);
  console.log('ctrl key - ', e.ctrlKey);
  console.log('shift key - ', e.shiftKey);
  console.log('alt key - ', e.altKey);
})














