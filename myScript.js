const slots = ['first' , 'second', 'third'];

const users = [
    {id:1, name: 'moe', slot: 'first'},
    {id:2, name: 'larry', slot: 'second'},
    {id:3, name: 'curly', slot: 'third'},
    {id:4, name: 'lucy', slot: 'third', selected : true},
];

const listBtn = document.querySelectorAll("button");
const btnsArr = Array.from(listBtn);
//console.log(btnsArr);

//const div_second = document.querySelector("#second");
const div_first = document.getElementById("first");
const div_second = document.getElementById("second");
const div_third = document.getElementById("third");
//console.log(div_second);

const user1 = document.getElementsByClassName("id1")[0]; // moe
const user2 = document.getElementsByClassName("id2")[0]; // larry
const user3 = document.getElementsByClassName("id3")[0]; //curly
const user4 = document.getElementsByClassName("id4")[0]; //lucy
//console.log(user4);

const next1 = document.getElementsByClassName("next1")[0];
const previous2 = document.getElementsByClassName("previous2")[0];
const next2 = document.getElementsByClassName("next2")[0];
const previous3 = document.getElementsByClassName("previous3")[0];

//console.log(next1);


next1.addEventListener("click", changeSlot);
next2.addEventListener("click", changeSlot);
previous2.addEventListener("click", changeSlot);
previous3.addEventListener("click", changeSlot);
user1.addEventListener("click", changeColor);
user2.addEventListener("click", changeColor);
user3.addEventListener("click", changeColor);
user4.addEventListener("click", changeColor);


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

function changeSlot(ev)
{
    let target = ev.target;

    //console.log(target.className);
    //console.log(document.getElementById("second"));
    
    if(target.className === "previous3" && user4.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user4.innerHTML;
            div_second.appendChild(node);
            node.setAttribute ("class" , "id4");
            user4.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
    }

    if(target.className === "previous3" && user3.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user3.innerHTML;
            div_second.appendChild(node);
            node.setAttribute ("class" , "id3");
            user3.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
    }

    if(target.className === "previous3" && user1.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user1.innerHTML;
            div_second.appendChild(node);
            node.setAttribute ("class" , "id3");
            user1.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
            div_third.removeChild(div_third.lastChild);
    }


    if(target.className === "previous3" && user2.style.backgroundColor === 'orangered')
    {
             user2.style.visibility = 'visible';
             div_third.removeChild(div_third.lastChild);
    }

    if(target.className === "previous2" && user4.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user4.innerHTML;
            div_first.appendChild(node);
            node.setAttribute ("class" , "id4");
            user4.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
            div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "previous2" && user3.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user3.innerHTML;
            div_first.appendChild(node);
            node.setAttribute ("class" , "id4");
            user3.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
            div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "previous2" && user1.style.backgroundColor === 'orangered')
    {
            user1.style.visibility = 'visible';
            div_second.removeChild(div_second.lastChild);
            console.log(target.getElementsByTagName("button"))

    }

    if(target.className === "previous2" && user2.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
            node.innerText = user2.innerHTML;
            div_first.appendChild(node);
            node.setAttribute ("class" , "id2");
            user2.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
            div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "next1" && user1.style.backgroundColor === 'orangered')
    {

           const node = document.createElement("button");
            node.innerText = user1.innerText;
            div_second.appendChild(node);
            node.setAttribute ("class" , "id1");
            user1.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
    }

     if(target.className === "next1" && user2.style.backgroundColor === 'orangered')
    {
        user2.style.visibility = 'visible';
        div_first.removeChild(div_first.lastChild);
    }  

    if(target.className === "next1" && user3.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
        node.innerText = user3.innerHTML;
        div_second.appendChild(node);
        node.setAttribute ("class" , "id1");
        user3.style.visibility = 'hidden';
        node.style.backgroundColor = 'orangered';
        node.addEventListener("click" , changeColor);
        div_first.removeChild(div_first.lastChild);
    }

    if(target.className === "next1" && user4.style.backgroundColor === 'orangered')
    {
        const node = document.createElement("button");
        node.innerText = user4.innerHTML;
        div_second.appendChild(node);
        node.setAttribute ("class" , "id1");
        user4.style.visibility = 'hidden';
        node.style.backgroundColor = 'orangered';
        node.addEventListener("click" , changeColor);
        div_first.removeChild(div_first.lastChild);
    }

    if(target.className === "next2" && user1.style.backgroundColor === 'orangered')
    {
            const node = document.createElement("button");
            node.innerText = user1.innerHTML;
            div_third.appendChild(node);
            node.setAttribute ("class" , "id1");
            user1.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
            div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "next2" && user3.style.backgroundColor === 'orangered')
    {
            user3.style.visibility = 'visible';
            div_second.removeChild(div_second.lastChild);
            //div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "next2" && user4.style.backgroundColor === 'orangered')
    {
            user4.style.visibility = 'visible';
            div_second.removeChild(div_second.lastChild);
            //div_second.removeChild(div_second.lastChild);
    }

    if(target.className === "next2" && user2.style.backgroundColor === 'orangered')
    {
            const node = document.createElement("button");
            node.innerText = user2.innerHTML;
            div_third.appendChild(node);
            node.setAttribute ("class" , "id1");
            user2.style.visibility = 'hidden';
            node.style.backgroundColor = 'orangered';
            node.addEventListener("click" , changeColor);
    }
}
