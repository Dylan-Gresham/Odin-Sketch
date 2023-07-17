const bodyTag = document.querySelector('body');
const container = document.querySelector('.container');

let divArray = [];
let divRowArray = [];
const NUM_ROWS = 16;
const NUM_COLS = 16;

for(let i = 0; i < NUM_ROWS; i++) {
    divArray[i] = [];
    let newRowDiv = document.createElement('div');
    newRowDiv.classList.add('row');

    for(let j = 0; j < NUM_COLS; j++) {
        let newBox = document.createElement('div');
        newBox.classList.add('grid');
        divArray[i][j] = newBox;
        newRowDiv.appendChild(newBox);
    }

    divRowArray[i] = newRowDiv;
    container.appendChild(newRowDiv);
}
