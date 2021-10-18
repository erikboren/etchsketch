var div = document.createElement("div")
div.classList.add("box");
const grid = document.getElementById("grid")
const defaultGridSize = 16
const defaultColor = 'black';
var gridSize = defaultGridSize;

const colorPicker = document.getElementById('colorPicker');
const rainbowButton = document.getElementById('rainbowColor');
const blackButton = document.getElementById('blackColor');
const eraserButton = document.getElementById('eraser')

var colorMode = defaultColor;



eraseGrid = function(){
  grid.innerHTML ="";
}

colorPicker.addEventListener('input', function(){
  colorMode = 'input';
});

rainbowButton.addEventListener('click', function(){
  colorMode = 'rainbow';
});

eraserButton.addEventListener('click', function(){
  colorMode = 'eraser';
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

  if (colorMode == 'eraser'){
    color = 'white';
  }
  else if (colorMode == 'rainbow'){
    var red = Math.floor(Math.random()*255);
    var green =Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);

    var color = `rgb(${red}, ${green}, ${blue})`;
  }

  else if (colorMode == 'input'){
    color = colorPicker.value;
  }
  else {
    color = 'black';
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
