let isSliding = false;
let gridSize = 16;
let matrixColors = [];

createGrid();

const slider = document.getElementById('slider');
const button = document.getElementById('clearButton');

slider.addEventListener('mouseup', function(){
    isSliding = true;
    createGrid();
});

slider.addEventListener('mousemove',function(){
    if (isSliding = true){
        getGridSize();
    }
})

button.addEventListener('click',createGrid);

function getGridSize (){
    gridSize = document.getElementById('slider').value;
    const textGridValue = document.querySelector('.slider p');
    textGridValue.textContent = `${gridSize}x${gridSize}`;
    return gridSize;
}

function createGrid (){
    removeOldGrid();
    const container = document.querySelector('.container');
    blockSize = 100/gridSize;
    for (i=0;i<(gridSize*gridSize);i++){
        const gridBlock = document.createElement('div');
        matrixColors.push([0,0,0]);
        gridBlock.addEventListener('mouseover',function(){
            let id = this.getAttribute('id');
            let color = getColor(id);
            let red = color[0];
            let green = color[1];
            let blue = color[2];
            gridBlock.style.background = `rgb(${red},${green},${blue})`;
            matrixColors.splice(id,1,color);
        });
        gridBlock.setAttribute('id',i);
        gridBlock.setAttribute('class','gridBlock')
        gridBlock.style.cssText = `width:${blockSize}%; height:${blockSize}%`;
        container.appendChild(gridBlock);
    }
}

function removeOldGrid (){
    const oldGrid = document.querySelectorAll('.gridBlock');
    const container = document.querySelector('.container');
    oldGrid.forEach(block => {
        block.remove();        
    });
}

function getColor (id){
    const colorWhite = document.getElementById('selectorWhite').checked;
    const colorRandom = document.getElementById('selectorRandom').checked;
    let rgbColor = [];
    let color = [255,255,255];
    if (colorRandom){
        blockColor = matrixColors[id];
        blockColor.forEach(color => {
            if (color != 0){
                rgbColor.push(color-(color*0.3));
            } else {
                rgbColor.push(Math.floor(Math.random()*255));
            }
        });
    color = rgbColor;
    } 
    return color;
    
}
