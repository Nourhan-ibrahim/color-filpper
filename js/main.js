// alert("hello");
var color = ["red", "green", "blue", "orange","teal"];
var btn = document.getElementById("btn");
var colorName = document.getElementById("colorname");
btn.addEventListener("click", function () {
    var randomNum = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[randomNum];
    colorName.textContent=color[randomNum]
    
});


