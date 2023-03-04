const container = document.querySelector('.container');
let size = 5;
setupGrid(5);
function setupGrid(size){

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for( var i=0; i<size;i++){
        for(var j=0; j<size;j++){
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }
}