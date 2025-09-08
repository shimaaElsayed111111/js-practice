// add remove to-do list tasks
const inputText = document.getElementById('txt');
const list = document.querySelector('ul');
let listN = document.getElementById("list");

function addTask() {
    if(inputText.value === ''){
        alert("you must write a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listN.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "X";
        li.appendChild(span);
    }
    inputText.value = "";
}

// Add a "checked" symbol when clicking on a list item or remove specific item when click on it
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);

// remove item
function removeItem() {
    const  listN = document.getElementById("list");

if (listN.lastChild) {
    listN.removeChild(listN.lastChild);
} else {
    alert("list is empty");
}
}

// counter app
let count = 0;
    const counter = document.getElementById('counter');
    const incBtn = document.getElementById('incBtn');
    const decBtn = document.getElementById('decBtn');
    const reset = document.getElementById('reset');

    
    function myTasksCounter() {
        counter.textContent = count;
    }

    
    incBtn.addEventListener('click', () => {
        count++;
        myTasksCounter();
    });

    decBtn.addEventListener('click', () => {
        if(count > 0)
        {
            count--;
        }
        myTasksCounter();
    });

    reset.addEventListener('click', () => {
        count = 0;
        myTasksCounter();
    });

    // intial display
    myTasksCounter();