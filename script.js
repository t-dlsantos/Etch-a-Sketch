const button = document.querySelector('button');
const container = document.querySelector('#container');

function clearGrid() {
    container.innerHTML = '';
}

function createGrid(width) {
    clearGrid();
    for (let i = 0; i < width * width; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-element');
        div.style.cssText = `width: ${500 / width}px`;
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'blue';
        });
    }
}

function initilizate() {
    createGrid(16);

    button.addEventListener('click', () => {
        let proportion;
        do {
            proportion = Number(prompt('What is the number of squares per side of the new grid?', 16));
            if(isNaN(proportion) || proportion > 100) {
                alert('Invalid input. Please enter a number less than or equal to 100.');
            }
        } while(isNaN(proportion) || proportion > 100);
        createGrid(proportion);
    });
}

initilizate();