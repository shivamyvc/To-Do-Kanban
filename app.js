const addTaskBtn= document.getElementById("add-Task");
const pendingBoard= document.getElementById("pending-task-board");
let taskCount=0;


//WIP Board
const wipBoard=document.getElementById("work-in-progress");


//Done Task Board
const donTaskBoard=document.getElementById("task-done");




/// Add Task
function addMyTask(){
    let taskDesc="";
    if(taskCount>0){
        taskDesc=prompt("Ek Aur Kaam, Pahle wale To Hone De!!");   
    }else{
        taskDesc=prompt("Chal Bhai Kaam Bata");

    }
    if(taskDesc.split(" ").length>1){
    let task=document.createElement("li");
    let moveTaskToWIP=document.createElement("button");

    task.setAttribute('id',`task-${taskCount}`);
    moveTaskToWIP.classList.add("remove-task-btn");
    moveTaskToWIP.setAttribute("id",`task-${taskCount}`);
    moveTaskToWIP.innerText="Ye Chalu Kar";


    moveTaskToWIP.addEventListener("click",(evt)=>{
        moveTask(evt);
    });

    task.innerText=taskDesc;
    task.append(moveTaskToWIP);
    pendingBoard.append(task);
    
    taskCount+=1;
    if(taskCount>0){
        addTaskBtn.innerText="Ek Aur Kaam";
    }else{
        addTaskBtn.innerText="Kam Karega";
    }
}
}

addTaskBtn.addEventListener("click",(evt)=>{
    addMyTask();

    
});




//Move Task To WIP
function moveTask(evt){
    let Taskli=evt.target;
    Taskli.innerText="Ye Ho Gaya";
    wipBoard.appendChild(Taskli.parentElement);
    if(taskCount>0){
    taskCount-=1;
    }if(taskCount==0){
        addTaskBtn.innerText="Kam Karega";
    }
    Taskli.addEventListener("click",(evt1)=>{
        moveTaskDone(evt1);
    });
}


function moveTaskDone(evt){
    let Taskli=evt.target;
    Taskli.innerText="Ye Ho Gaya";
    donTaskBoard.appendChild(Taskli.parentElement);
    Taskli.remove();
}



