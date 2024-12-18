const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ""){
        alert("Enter a task");
    }
    else{
        let tasks = listContainer.getElementsByTagName("li");
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].textContent.replace("\u00d7", "").trim().toLowerCase() === inputBox.value.toLowerCase()) {
                showPopup();
                // alert("Task already exists!");
                return;
            }
        }
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

function showPopup() {
    const popup = document.getElementById("popup");
    const backdrop = document.getElementById("backdrop");
    popup.style.display = "block";
    backdrop.style.display = "block";
}

  function closePopup() {
    const popup = document.getElementById("popup");
    const backdrop = document.getElementById("backdrop");
    popup.style.display = "none";
    backdrop.style.display = "none";
}