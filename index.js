let inputBtn = document.getElementById("input-btn");
let mylinks = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let linkFromlocalstorage = JSON.parse(localStorage.getItem("mylinks"));

if (linkFromlocalstorage)
{
  mylinks = linkFromlocalstorage;
  renderLeads();
}


inputBtn.addEventListener("click", () => {
  mylinks.push(inputEl.value);
  console.log("Value pushhed");
  localStorage.setItem("mylinks",JSON.stringify(mylinks))
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
    let listItems = "";
  for (let i = 0; i < mylinks.length; i++)
    {
        //listItems += "<li><a href ='"+ mylinks[i] +"'target='_blank'>" + mylinks[i] + "</a></li>";
        listItems += `
        <li>
        <a target='_blank' href ='${mylinks[i]}'>
        ${mylinks[i]}</a>
        </li>
        `;

    }
   ulEl.innerHTML = listItems;
}

