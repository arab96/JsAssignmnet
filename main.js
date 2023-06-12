let text = document.querySelector("#txtDugsiiye")
let fs = document.querySelector("#fs")

fs.addEventListener("input", function(){
    text.style.fontSize = fs.value;
})

let bigBox = document.querySelector(".big-box");
let br = document.querySelector("#br")

br.addEventListener("input", function(){
    bigBox.style.borderRadius = br.value;
})


let fw = document.querySelector("#fw")

fw.addEventListener("input", function(){
    text.style.fontWeight = fw.value;
})

// Background color

function color(c){
    let a = getComputedStyle(c)
    let b = a.backgroundColor;
    bigBox.style.backgroundColor = b; 
}

// Font Family