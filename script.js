const container = document.querySelector('#container');
const grids = document.querySelectorAll('.grid');


console.log(container);


//make grid
function makeGrid(num){
    //column
    for (let i = 0; i < num; i++){
        //row
        for (let j = 0; j < num; j++){
            //create "num" amount of grids
            const grid = document.createElement('div');
            grid.classList.add('grid');

            //need to subtract 0.5px borders on 4 sides = 2px 
            grid.style.height = (800/num-2) + "px";
            grid.style.width = (800/num-2) + "px";
            container.appendChild(grid);
        }
    }
    //call hover function to start sketching
    hover();

}

//initial grid is 16x16
makeGrid(16);


// clears grid when button clicked
const gridChangeBtn = document.querySelector('button');
//when button is clicked,
gridChangeBtn.addEventListener('click', () => {
    //select all grids
    const grids = document.querySelectorAll('.grid');
    //iterate over each grid and remove
    grids.forEach(grid => {
        grid.remove();
    })

    //prompt user for dimension & makes grid
    pickGrid();    

})

function pickGrid(){
    let gridChange = prompt("Enter new Grid Dimension!", "please pick between 2-100");

    while (gridChange < 2 || gridChange > 100){
        gridChange = prompt("that input is invalid, please pick between 2-100");
    }
    makeGrid(gridChange);


}

//hover effect
function hover(){
    //select all grids
    const grids = document.querySelectorAll('.grid');
    //iterate over each grid
    grids.forEach((grid) =>{
        //when mouse enters each grid run this function
        grid.addEventListener('mouseenter', (e) => {
                //if target's background is blank, color it black
                if (e.target.style.background === "") {
                    e.target.style.background = 'black';
                } 
            });
        })
}

