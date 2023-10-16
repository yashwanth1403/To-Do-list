const inputbox = document.querySelector("#input-value");
const listcontainer = document.getElementById("list-container");
const add = document.getElementById("add-btn");

add.addEventListener("click", () => {
  if (inputbox.value == "") {
    alert("you must enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  SaveData();
});

listcontainer.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("checked");
      SaveData();
    } else if (event.target.tagName == "SPAN") {
      event.target.parentElement.remove();
      SaveData();
    }
  },
  false
);

function SaveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}

function ShowTask() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
ShowTask();
