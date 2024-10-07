let input = document.getElementById("todoinput");
let btn = document.getElementById("btn-list");
let listcontainer = document.getElementById("list-container");


btn.onclick = function() {
        let paragraph = document.createElement("p");
        paragraph.innerText = input.value;
        if(input.value != ""){
        paragraph.classList.add("para");
        listcontainer.appendChild(paragraph);
        input.value = "";
        }

        paragraph.addEventListener("click", function() {
            paragraph.classList.add("newlist");
        })
        paragraph.addEventListener("dblclick", function() {
            listcontainer.removeChild(paragraph);
        })
    }
