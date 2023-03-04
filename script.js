let currentColor = '#333333'; 
let size = 5;  

const container = document.querySelector('.container');

//setupGrid(size of grid)
setupGrid(5);

function setupGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for( var i=0; i<size;i++){
        for(var j=0; j<size;j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.addEventListener('mouseover', changeColor);
            gridItem.addEventListener('mousedown', changeColor);
            container.appendChild(gridItem);
        }
    }
}

//track of mouse click and mouse down
let mouseDown = false;
document.body.onmousedown = () =>(mouseDown=true);
document.body.onmouseup = () => (mouseDown = false);

//simple text no color mode specified
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}