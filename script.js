let currentColor = '#333333'; 
let defaultColor = '#FFFFFF'
let size = 5;  
let colorMode = 'normal';

const normal = document.querySelector('.normal');
const erase = document.querySelector('.erase');
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');
const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');
const colorPicker = document.getElementById('colorPicker');

normal.onclick = () => updateColorMode('normal');
erase.onclick = () => updateColorMode('erase');
rainbow.onclick = () => updateColorMode('rainbow');
clear.onclick = () => clearGrid();
sizeSlider.onmousemove = (e) =>updateSizeValue(e.target.value);
sizeSlider.onchange =  (e) => changeSize(e.target.value);
colorPicker.oninput = (e) => {currentColor = e.target.value;}

function updateColorMode (newMode){
    colorMode = newMode;
}


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

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    if(colorMode === 'normal'){
        e.target.style.backgroundColor = currentColor;
    }
    else if (colorMode === 'erase'){
        e.target.style.backgroundColor = defaultColor;
    }
    else if (colorMode === 'rainbow'){
        const randomR = Math.floor(Math.random()*256); 
        const randomG = Math.floor(Math.random()*256); 
        const randomB = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
    }
}

function clearGrid(){
    container.innerHTML='';
    setupGrid(size);
}

function updateSizeValue(value){
    sizeValue.innerHTML = `${value} x ${value}`;
}

function changeSize(value){
    size = value;
    clearGrid(size);
}