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


const grids = document.querySelectorAll('.grid');
grids.forEach((grid) =>{
    grid.addEventListener('mouseenter', () => {
        grid.style.background = "purple";
    });
})
//.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    // event.target.style.color = "purple";




