# DOM 101
### Some common selector in js

~~~js
console.log(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 'some another title';
console.log(document.doctype);
console.log(document.body);
console.log(document.all);
console.log(document.all[24]); //selecting specific element by destructing html collection
console.log(document.forms);
console.log(document.links);
console.log(document.images);
var headerTitle = document.getElementById('main-header');
var header = document.getElementsByClassName('row');
var header = document.getElementsByTagName('h1')
~~~

### changing html or text content in html page    
`innerHTML`,  `innerText`, `textContent`    
textContent and innerText is about same except textContent work when kept text style display none;

~~~js
headerTitle.innerHTML = "<i>hello world</i>";
headerTitle.innerText = "hello world";
headerTitle.textContent = "Heading changed by textContent";
headerTitle.style.color = 'yellow';
~~~
### destructing html collection when used className selector

~~~js
var items = document.getElementsByClassName('list-group-item');
items[0].textContent = "hello 2";
items[1].style.backgroundColor = "teal";
items[1].style.color = "white";
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f3f3f3';
}
~~~

### querySelector
`querySelector` return single html element. querySelector function take css selector as argument. If there are multiple html element found for this selector, function will return first element. 
~~~js
var listHeader = document.querySelector('#list-header')
listHeader.style.borderBottom = '4px solid #ccc';
listHeader.style.paddingBottom = '10px';
listHeader.style.marginBottom = '20px';
var input = document.querySelector('input');
input.value = 'hello world';
var submit = document.querySelector("input[type=submit]");
submit.value = 'send';
~~~

### querySelectorAll
`querySelectorAll` function also take css selector. It return html collections

~~~js
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
~~~

# Traversing in js
### traversing to parents   
`parentNode` return all text node(even space) and html element.     
`parentElement` return only html element     
~~~js
var list_group = document.querySelector('ul.list-group');
var card_body = list_group.parentNode;
var card_body2 = list_group.parentElement;
~~~

### traversing to child    
`childNodes`, `firstChild`, `lastChild` return html element node as well as text node.    
`children`, `firstElementChild`, `lastElementChild` return only html element.
~~~js
var list_item = list_group.childNodes; // it will return all blank space as child (text node)
var list_item_1 = list_group.childNodes[0];
var list_item = list_group.children; 
var list_item_1 = list_group.children[0];
var first_child = list_group.firstChild;
var first_child = list_group.firstElementChild;
var last_child = list_group.lastChild;
var last_child = list_group.lastElementChild;
~~~

### traversing to siblings      
`nextSibling`, `previousSibling` return text node and html element     
`nextElementSibling`, `previousElementSibling` return only html element  
~~~js
var next_sib = first_child.nextSibling;
var next_sib = first_child.nextElementSibling;
var prev_sib = next_sib.previousSibling;
var prev_sib = next_sib.previousElementSibling;
~~~

### creating element and add to dom
`createElement`, `createTextNode`, `appendChild`, `insertBefore`, `insertAfter`, `append`, `prepand`, `getAttribute`, `setAttribute`  
~~~js
 var h1 = document.createElement('h1');
 h1.className = 'title first-header';
 h1.setAttribute('class', 'hello world');
 var text = document.createTextNode('First heading created by js');
 h1.appendChild(text);
 var container = document.querySelector('.container');
 var h2 = document.querySelector('#main-header');
 container.insertBefore(h1, h2);
 h1.style.fontSize = '20px';
~~~











