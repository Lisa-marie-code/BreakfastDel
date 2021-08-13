let submit = document.querySelector(".submit");
console.log(submit);
console.log('submit');
function addItem(e){
    e.preventDefault()
    let myItem = document.getElementById("my_list").value;
    let listItem =document.createElement("li");
    listItem.innerText=myItem;
    item.appendChild(listItem);


let undo=document.createElement("button");
undo.innerText="delete";
listItem.appendChild(undo);

undo.addEventListener("click",function(){
    item.removeChild(listItem)
    });
}

let myItem = document.getElementById("my_list")
submit.addEventListener("click", e=>{   
    e.preventDefault()
    let listItem =document.createElement("li");
    listItem.innerText= myItem.value;
    console.log(listItem.textContent);
    item.appendChild(listItem);

    let undo=document.createElement("button");
    undo.innerText="delete";
    undo.className = "delete"
    listItem.appendChild(undo);

    undo.addEventListener("click",function(){
    item.removeChild(listItem)
    });
})

// function addItem(){
// let myItem = document.getElementById('my_list').value

// }