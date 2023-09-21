let mainDom = document.getElementById("todotasks")
let addBtn = document.getElementById("add")
let inputValue = document.getElementById("task")

addBtn.addEventListener("click" , addData)

function addData(e){
    const chapterName = inputValue.value
    const newDiv = document.createElement("div")
    newDiv.classList.add("task-list")
    newDiv.innerHTML = `<h1 class="taskname">${chapterName}</h1>
    <button onclick ="edittask(this)" class="edit">
    edit
    </button>
    <button onclick="removetask(this)" class="dlt">
dlt
    </button>
    `
    mainDom.appendChild(newDiv)
    inputValue.value = ""
}

function removetask(currElement) {
    currElement.parentElement.remove()
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