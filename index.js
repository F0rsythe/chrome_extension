let inputBtn = document.getElementById("input-btn");
let mylinks = [];
const inputEl = document.getElementById("input-el");
inputBtn.addEventListener("click", () =>{
    mylinks.push(inputEl.value);
    inputEl.value = "";
    console.log("Value pushhed");
    console.log(mylinks);
})

