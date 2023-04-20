let form=document.querySelector("form");
let formBtn =document.querySelector(".btn");
let list=document.querySelector("ul");
let input=document.getElementById("inp");


form.addEventListener("submit",function (e) {
    e.preventDefault();
})

formBtn.onclick=()=>{
    if (input.value.trim()!=="") {
        list.innerHTML+=`<li><i class="fa-solid fa-circle-check" id="check"></i><span>${input.value}</span><i class="fa-regular fa-trash-can trash" id="trash"></i></li>`;
        input.value="";
        showDone();
        deleteTask();
       
         
    }else{
        alert("Please enter a task..");
    }
};



function showDone(){
    let doneIcon=document.querySelectorAll("#check");
    for (let i = 0; i < doneIcon.length; i++) {
        doneIcon[i].onclick=()=>{
            doneIcon[i].parentNode.classList.toggle("done");
        }
    }
}

function deleteTask() {
    let trashIcon=document.querySelectorAll("#trash");    
    for (let i = 0; i < trashIcon.length; i++) {
        trashIcon[i].onclick=()=>{
            trashIcon[i].parentNode.remove();
        }
        
    }
}



