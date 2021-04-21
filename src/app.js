const todos = [
{ name: 'task1', key: 1},
{ name: 'task2', key: 2},
{ name: 'task3', key: 3},
{ name: 'task4', key: 4},
{ name: 'task5', key: 5},
{ name: 'task6', key: 6},
{ name: 'task7', key: 7},
];
const parent = document.querySelector("body > div > div:nth-child(4) > ul");
parent.innerHTML = '';
for (let i = 0; i < todos.length; i++) {
let todo = todos[i];
parent.innerHTML += `<li data-id="${todo.id}">
${todo.name}
</li>`;
}
const slid_bar = document.querySelector("#js-bar");
slid_bar.style.background = 'Cyan';


const span = document.querySelector("span");
// меняем его HTML, todos.length = кол во элементов в массиве
span.innerHTML = `${todos.length} items left`;
for (let i = 0; i < todos.length; i++) {
let text_li = document.querySelector("div.row:nth-child(4) > ul:nth-child(1) > li:nth-child(i)");
text_li.style.color = "green";
}
