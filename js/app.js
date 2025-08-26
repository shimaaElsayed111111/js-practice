// add remove to-do list tasks
var inputText =document.getElementById('txt');

    function addItem() {
        var listN = document.getElementById("list");
        var textN = document.createTextNode(inputText.value);
        var liN = document.createElement("LI");

        liN.appendChild(textN);
        listN.appendChild(liN);
    }

    function removeItem() {
    var listN = document.getElementById("list");

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