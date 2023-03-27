let inputBtn = document.getElementById("input-btn");
let mylinks = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn")
let linkFromlocalstorage = JSON.parse(localStorage.getItem("mylinks"));

if (linkFromlocalstorage)
{
  mylinks = linkFromlocalstorage;
  render(mylinks);
}

deletebtn.addEventListener("dblclick", ()=>{
  localStorage.clear();
  mylinks = [];
  render(mylinks);
});

inputBtn.addEventListener("click", () => {
  mylinks.push(inputEl.value);
  console.log("Value pushhed");
  localStorage.setItem("mylinks",JSON.stringify(mylinks))
  render(mylinks);
  inputEl.value = "";
});

function render(leads) {
    let listItems = "";
  for (let i = 0; i < mylinks.length; i++)
    {
        //listItems += "<li><a href ='"+ mylinks[i] +"'target='_blank'>" + mylinks[i] + "</a></li>";
        listItems += `
        <li>
        <a target='_blank' href ='${leads[i]}'>
        ${leads[i]}</a>
        </li>
        `;

    }
   ulEl.innerHTML = listItems;
}

