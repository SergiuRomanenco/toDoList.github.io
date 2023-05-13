//Create a close button for each item in the list
let liItem = document.getElementsByTagName("LI");
for(let i = 0; i < liItem.length; i++){
    var span = document.createElement("SPAN"); //<span></span>
    var txt = document.createTextNode("x"); //<span>x</span>
    span.className = "close"; // <span class="close"> x </span>
    span.appendChild(txt);
    liItem[i].appendChild(span); //<li> Text <span class="close"> x </span> </li>
}

// Deleting the element
let close = document.getElementsByClassName("close")
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let divLI = this.parentElement;
        divLI.style.display = 'none';
    }
}

// Visiual deleting of list --> (checked)
let list = document.getElementById('myUL')
list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
});

//Create new element
function newElement(){
    let li = document.createElement('li'); //<li></li>
    let inputValue = document.getElementById('myList').value; //The input value
    let text = document.createTextNode(inputValue)
    li.appendChild(text);

    if(inputValue === ''){
        alert('ERROR!!! You must to write something')
    } else {
        list.appendChild(li);
    }

    //Delete value from input
    document.getElementById('myList').value = '';

    //Create a close button for each item in the list
    let span = document.createElement("SPAN"); //<span></span>
    let txt = document.createTextNode("x"); //<span>x</span>
    span.className = "close"; // <span class="close"> x </span>
    span.appendChild(txt);
    li.appendChild(span);

    // Deleting the element
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var divLI = this.parentElement;
            divLI.style.display = 'none';
        }
    }
}