const container = document.querySelector("#container");

function makeGrid(granularity){
    for (i = 0; i < granularity; i ++){
        for (j = 0; j < granularity; j++){
            const grid = document.createElement("div");
            grid.setAttribute('class', 'grid');

            grid.style.height = (800/granularity-2) +"px";
            grid.style.width = (800/granularity-2) +"px";
            
            
            container.appendChild(grid);


            
        }
    }
}

makeGrid(4);
hover();

function hover(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = 'black';
        })
    })

}

