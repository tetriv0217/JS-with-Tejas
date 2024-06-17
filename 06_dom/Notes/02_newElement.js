/*
1. You have parent has children,then it is in HTML Collections
//parent to child
2.
parent.children

3.
parent.firstElementChild
parent.lastElementChild
//child to parent
4.
dayOne.parentElement
dayOne.nextElementSibling

//Interesting Concepts
5.
parent.childNodes


//How to add element
const div = document.createElement('div')
    console.log(div);//gives <div></div>
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title","generate title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "Tejas inserting element."
    //Same as div.innerText
    const addText = document.createTextNode("Tejas inserting element")
    div.appendChild(addText)

    document.body.appendChild(div)
*/