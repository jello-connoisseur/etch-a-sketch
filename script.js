const container = document.querySelector("#container");

function makeGrid(granularity){
    for (i = 0; i < granularity; i ++){
        for (j = 0; j < granularity; j++){
            const grid = document.createElement("div");
            grid.setAttribute('class', 'grid');

            grid.style.height = (600/granularity-2) +"px";
            grid.style.width = (600/granularity-2) +"px";
            
            
            container.appendChild(grid);


            
        }
    }
}

makeGrid(64);
hover();

function hover(){
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = 'black';
        })
    })
}

function clear(){
    const grids = document.querySelectorAll(".grid");

    grids.forEach((grid) => {
        grid.remove();
    })
}

function click(){
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        const input = document.getElementById('granularity');
        clear(); 
        makeGrid(input.value);
        input.value = '';
        hover();
    })  

}

click();


