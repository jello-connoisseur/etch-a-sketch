const container = document.querySelector('#container');
const grids = document.querySelectorAll('.grid');


console.log(container);


//make grid
function makeGrid(num){
    for (let i = 0; i < num; i++){
        for (let j = 0; j < num; j++){
            const grid = document.createElement('div');
            grid.classList.add('grid');

            //need to subtract 0.5px borders on 4 sides = 2px 
            grid.style.height = (800/num-2) + "px";
            grid.style.width = (800/num-2) + "px";
            container.appendChild(grid);
        }
    }
    hover();

}
makeGrid(16);

// clears grid when button clicked
const gridChangeBtn = document.querySelector('button');
gridChangeBtn.addEventListener('click', () => {
    promptNewGrid();
    gridReset();
    

})
//
function promptNewGrid() {

    let gridChange = prompt("Enter new Grid Dimension!");
    return gridChange;
    window.gridChange = gridChange;


}

function gridReset() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.remove();
    })
    makeGrid(gridChange);
    
}
//hover
function hover(){
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) =>{
    grid.addEventListener('mouseenter', (e) => {

            if (e.target.style.background === "") {
                e.target.style.background = 'black';
            } 
        });
    })
}


// let gridChange = prompt("Enter new Grid Dimension!");
// makeGrid(gridChange);

// gridChangeBtn.addEventListener('click', () => {
//     grids.forEach(grid => {
//         grid.remove();
//     })
// })






// gets user input for grid granularity
// function getDimension() {
//     btn.addEventListener('click', () => {
        
        
        

//     });
// }


// btn.addEventListener('click', () => {
//     makeGrid(getDimension());
// });












