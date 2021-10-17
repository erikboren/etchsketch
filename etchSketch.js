var div = document.createElement("div")
div.classList.add("box");
const grid = document.getElementById("grid")
const defaultGridSize = 16
var gridSize = defaultGridSize;


eraseGrid = function(){
  grid.innerHTML ="";
}

changeColor = function(element){
  element.target.style.backgroundColor = "black";
}

document.getElementById("erase").addEventListener('click', function(){
  resizeGrid(gridSize);
});

resizeGrid = function(gridSize){
  eraseGrid();
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize*gridSize; i++) {
    var div = document.createElement("div")
    div.addEventListener('mouseover', changeColor);
    div.classList.add("box");
    grid.appendChild(div);
  }

}

resizeGrid(gridSize);
