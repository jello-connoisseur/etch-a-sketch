const container = document.querySelector('#container');
console.log(container);

function makeGrid(){
    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
}

makeGrid();




