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