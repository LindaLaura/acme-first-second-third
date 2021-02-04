const slots = ['first' , 'second', 'third'];

const users = [
    {id:1, name: 'moe', slot: 'first'},
    {id:2, name: 'larry', slot: 'second'},
    {id:3, name: 'curly', slot: 'third'},
    {id:4, name: 'lucy', slot: 'third', selected : true},
];

const listBtn = document.querySelectorAll("button");
const btnsArr = Array.from(listBtn);
console.log(btnsArr);
const user1 = document.getElementsByClassName("id1");
console.log(user1);

const next1 = document.getElementsByClassName("next1");
console.log(next1);
//next1[0].addEventListener("click", changeSlot)
user1[0].addEventListener("click", changeColor);

function changeColor(ev)
{
    let target = ev.target;
    if (target.style.backgroundColor === 'orangered'){
        target.style.backgroundColor = 'white'
    }
    else
    {
        target.style.backgroundColor = 'orangered';
    }
}