var div = document.createElement("div")
div.classList.add("box");

for (let i = 0; i < 20; i++) {
  document.getElementById("box-container").appendChild(div);
}
