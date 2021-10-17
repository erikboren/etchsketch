var div = document.createElement("div")
div.classList.add("box");
const grid = document.getElementById("grid")
const defaultGridSize = 16
const defaultColor = 'black';
var gridSize = defaultGridSize;

const rainbowButton = document.getElementById('rainbowColor');
const blackButton = document.getElementById('blackColor');
const eraserButton = document.getElementById('eraser')

var selectedColor = defaultColor;



eraseGrid = function(){
  grid.innerHTML ="";
}

rainbowButton.addEventListener('click', function(){
  selectedColor = 'rainbow';
})

blackButton.addEventListener('click', function(){
  selectedColor = 'black';
})

eraserButton.addEventListener('click', function(){
  selectedColor = 'eraser';
})

document.getElementById('setGridSize').addEventListener('click', function(){
  gridSize = prompt('Enter grid size:');
  resizeGrid(gridSize);

});

document.getElementById("clear").addEventListener('click', function(){
  resizeGrid(gridSize);
});

changeColor = function(element){
  var color;
  if (selectedColor == 'black'){
    color = 'black'
  }
  if (selectedColor == 'eraser'){
    color = 'white';
  }
  if (selectedColor == 'rainbow'){
    var red = Math.floor(Math.random()*255);
    var green =Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    var alpha = Math.random();
    var color = `rgb(${red}, ${green}, ${blue}, ${alpha})`;
  }
  element.target.style.backgroundColor = color;
}

resizeGrid = function(gridSize){
  eraseGrid();
  document.getElementById("gridSizeDisplay").innerHTML= `${gridSize}x${gridSize}`;
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
