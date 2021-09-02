let submit = document.querySelector(".submit");
function addItem(e){
    e.preventDefault()
    let myItem = document.getElementById("my_list").value;
    let listItem =document.createElement("li");
    listItem.innerText=myItem;
    item.appendChild(listItem);
}

let myItem = document.getElementById("my_list")
submit.addEventListener("click", e=>{   
    e.preventDefault()
    let listItem =document.createElement("li");
    listItem.innerText= myItem.value;
    item.appendChild(listItem);

    let undo=document.createElement("button");
    undo.innerText="Cancel-Order";
    undo.className = "Cancel-Order"
    listItem.appendChild(undo);

    undo.addEventListener("click",function(){
    item.removeChild(listItem)
    });
})



