const colors = [ "red", "purple", "green", "blue", "yellow", "violet", "gray", "white" ];

let sec = document.querySelector("#sec");
let pickText = document.querySelector("#pickText");
let selected = document.querySelector("#selected");
let h2 = document.querySelector("h2");

for ( let color of colors ){
    let createBox = document.createElement('div');
    createBox.className='box';
    sec.appendChild(createBox);
    createBox.style.backgroundColor=color;
    createBox.addEventListener("click", function(){
        pickText.innerText='Your have selected ~ ';
        pickText.style.color=createBox.style.backgroundColor;
        selected.style.background=createBox.style.backgroundColor;
        selected.textContent=createBox.style.backgroundColor;
        h2.style.border=`3px dotted ${color}` ;
    })
}