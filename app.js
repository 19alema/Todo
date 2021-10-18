// javascript

const input = document.getElementById("input-text");
const btn = document.getElementById("btn");

let toDisplay = document.querySelector(".section");



btn.addEventListener("click", renderTask)

window.addEventListener("keydown",function(e) {
    let key = e.keyCode;
    if(key === 13) {
        renderTask()
    }
})


function renderTask() {
     
    
    let div = document.createElement("div");
    
    div.setAttribute("class", "div-content");
    
    let icon = document.createElement("i");
    
    icon.setAttribute("class", "fa fa-check-square");
    
   
    let para = document.createElement("p");
    
    let nav = document.createElement("nav");
    
    para.innerHTML = input.value;
    
    let button = document.createElement("button");
    button.setAttribute("class", "fa fa-trash");
    
     
    div.appendChild(para);
    nav.appendChild(button);
    nav.appendChild(icon);
    div.appendChild(nav);
    
    toDisplay.appendChild(div)
    input.value = "";
    
    button.addEventListener("click", function() {
        div.remove();
    })
    
      icon.addEventListener("click", function() {
        para.style.textDecoration = "line-through";
        icon.classList.add("active");
   
    })
    
    }