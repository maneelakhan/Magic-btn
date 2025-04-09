let ver = document.getElementById("btn")
let mode = "light";

ver.addEventListener("click", () => {

if(mode === "light") {
    mode = "black";
    document.querySelector("body").innerHTML = "<h3> welcome To The Magic World </h3>";
    document.querySelector("body").style.background = " rgb(21, 1, 1)";
    document.querySelector("body").style.color = "white";
} else {
    mode = "light";
    document.querySelector("body").style.background = "rgb(143, 223, 94)";
}

console.log(mode)
})