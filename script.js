const container = document.querySelector('#container');
console.log(container);

//making 16x16 grid
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

//paints the grid black when hovered
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) =>{
    grid.addEventListener('mouseenter', () => {
        grid.style.background = "black";
    });
})

//clears grid when button clicked
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    grids.forEach((grid) => {
        grid.style.background = "white";
    });

});

btn.addEventListener('click', () => {
    console.log("hi");
});






