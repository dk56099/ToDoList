const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value==='') //to check the input provided by user
    {
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); //creating a HTML element
        li.innerHTML=inputBox.value; //adding the text provided to li
        listContainer.appendChild(li); //display under list container
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value="";
    saveData(); //calling the function to save data

}


listContainer.addEventListener("click",function(e){  
    if(e.target.tagName==="LI"){  //checked where we have clicked
    
        e.target.classList.toggle("checked");//if the class name is checked  it will remove
        saveData();
    }
    else if(e.target.tagName==="SPAN"){  //if cliecked target element is span it will remove the LI and the task will be deleted
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){ //everytime when a new task is added this fuction must be called to save data 
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask(); //to display the task list



