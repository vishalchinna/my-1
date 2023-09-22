let mainDom = document.getElementById("todotasks")
let addBtn = document.getElementById("add")
let inputValue = document.getElementById("task")

addBtn.addEventListener("click" , addData)


function addData(){
    const chapterName = inputValue.value
    const uniqueId = Math.random().toString(36).substr(2, 9)
   let getTasks = JSON.parse(localStorage.getItem("tasks")) ?? []
    const newTask = {
        id : uniqueId,
        task : chapterName
    }
getTasks.push(newTask)
    console.log(newTask)
    console.log(getTasks)
    localStorage.setItem("tasks" , JSON.stringify(getTasks))
    displayTasks()
    
}


displayTasks = () => {
    let getData = JSON.parse(localStorage.getItem("tasks")) ?? []
    console.log(getData)
    let finalData = ""

    getData.forEach( (element,i) => {
        finalData +=  `
        <div class="task-list">
        <h1 class="taskname">${element.task}</h1>
        <button onclick ="edittask(this)" class="edit">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <button onclick="removetask(${i})" class="dlt">
        <i class="fa-solid fa-trash"></i>

        </button>
        </div>
        `
    })
        
        mainDom.innerHTML = finalData
        inputValue.value = ""
}


function removetask(i) {
    let getData = JSON.parse(localStorage.getItem("tasks")) ?? []

    getData.splice(i,1)

    localStorage.setItem("tasks" , JSON.stringify(getData))

    displayTasks()
}

function edittask(currElement){
    if (currElement.textContent==="done"){
        currElement.textContent = "edit"
        let currName = currElement.previousElementSibling.value
        let newHead = document.createElement("h1")
        newHead.textContent = currName
        newHead.classList.add("taskname")
        currElement.parentElement.replaceChild(newHead , currElement.previousElementSibling)

    }else{

    
    currElement.textContent="done"
    let currentname = currElement.previousElementSibling.textContent
    let newInput = document.createElement("input")
    newInput.type="text"
    newInput.value = currentname
    newInput.className = "inputchange"
    currElement.parentElement.replaceChild(newInput , currElement.previousElementSibling) 
    }
}

displayTasks()