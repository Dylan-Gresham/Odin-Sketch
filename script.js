// Get HTML defined elements
const bodyTag = document.querySelector('body');
const container = document.querySelector('.container');
const changeBtn = document.querySelector('.change-grid');
const lockColorBtn = document.querySelector('.lock-color')
const nextColorDiv = document.querySelector('.next-color');
const unlockColorBtn = document.querySelector('.unlock-color');
const manualColorBtn = document.querySelector('.manual-color');

// Define functions
function newColor(prevR, prevG, prevB) {
    let newR = Math.floor(Math.random() * 256);
    let newG = Math.floor(Math.random() * 256);
    let newB = Math.floor(Math.random() * 256);

    while(newR === prevR) {
        newR = Math.floor(Math.random() * 256);
    }

    while(newG === prevG) {
        newG = Math.floor(Math.random() * 256);
    }

    while(newB === prevB) {
        newB = Math.floor(Math.random() * 256);
    }

    let str = `rgb(${newR}, ${newG}, ${newB})`;

    nextColorDiv.style['background-color'] = str;

    return [str, newR, newG, newB];
}

function randomColorChanging(e) {
    if(e.target.className !== 'grid-box') {
        return;
    }
    
    e.target.style['background-color'] = nextColor[0];
    nextColor = newColor(nextColor[1], nextColor[2], nextColor[3]);
}

function lockedColorChanging(e) {
    if(e.target.className !== 'grid-box') {
        return;
    }

    e.target.style['background-color'] = nextColor[0];
}

// Initialize variables
let NUM_ROWS_COLS = 16;
let gridSize = 900 / NUM_ROWS_COLS;
let colorArray = ['rgb(255, 0, 0)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)', 'rgb(0, 255, 255)', 'rgb(0, 0, 255)', 'rgb(255, 0, 255)'];
let nextColor = newColor(0, 0, 0);

// Draw initial 16x16 grid
for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
    let newRowDiv = document.createElement('div'); // New row (div element)
    newRowDiv.classList.add('row'); // Add style

    for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
        let newBox = document.createElement('div'); // New box
        newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
        newBox.classList.add('grid-box');
        newRowDiv.appendChild(newBox); // Add to row
    }

    container.appendChild(newRowDiv); // Add whole row to container
}

// Add listeners
window.addEventListener('keydown', e => {
    if(e.code !== 'KeyL' && e.code !== 'KeyU' && e.code !== 'KeyP' && e.code !== 'KeyC') {
        return;
    } else if(e.code === 'KeyL') {
        container.removeEventListener('mouseover', randomColorChanging);
        container.addEventListener('mouseover', lockedColorChanging);
    } else if(e.code === 'KeyU') {
        container.removeEventListener('mouseover', lockedColorChanging);
        container.addEventListener('mouseover', randomColorChanging);
    } else if(e.code === 'KeyP') {
        let newColorR = prompt('Enter value for R (0-255):');
        while(true) {
            if(newColorR < 0 || newColorR > 255) {
                newColorR = prompt('Try again. Enter value for R (0-255):');
            } else {
                break;
            }
        }

        let newColorG = prompt('Enter value for G (0-255):');
        while(true) {
            if(newColorG < 0 || newColorG > 255) {
                newColorG = prompt('Try again. Enter value for G (0-255):');
            } else {
                break;
            }
        }

        let newColorB = prompt('Enter value for B (0-255):');
        while(true) {
            if(newColorB < 0 || newColorB > 255) {
                newColorB = prompt('Try again. Enter value for B (0-255):');
            } else {
                break;
            }
        }

        nextColor = [`rgb(${newColorR}, ${newColorG}, ${newColorB})`, newColorR, newColorG, newColorB];

        container.removeEventListener('mouseover', randomColorChanging);
        container.addEventListener('mouseover', lockedColorChanging);
    } else {
        // Get new dimensions
        let newGridDimensions = prompt('Enter the new size of your grid (<= 100):', 16);
        while(newGridDimensions > 100) {
            newGridDimensions = prompt('Try again. Enter the new size of your grid (<= 100):', 16);
        }
        
        // Remove all grid rows and leaves the top bar
        for(let i = 0; i < NUM_ROWS_COLS; i++) {
            container.removeChild(container.lastChild);
        }

        // Redraw grid
        NUM_ROWS_COLS = newGridDimensions;
        gridSize = 900 / NUM_ROWS_COLS;
        for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
            let newRowDiv = document.createElement('div'); // New row (div element)
            newRowDiv.classList.add('row'); // Add style
        
            for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
                let newBox = document.createElement('div'); // New box
                newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
                newBox.classList.add('grid-box');
                newRowDiv.appendChild(newBox); // Add to row
            }
        
            container.appendChild(newRowDiv); // Add whole row to container
        }

        container.removeEventListener('mouseover', lockedColorChanging);
        container.addEventListener('mouseover', randomColorChanging);
    }
});

container.addEventListener('mouseover', randomColorChanging);

changeBtn.addEventListener('click', e => {
    // Get new dimensions
    let newGridDimensions = prompt('Enter the new size of your grid (<= 100):', 16);
    while(newGridDimensions > 100) {
        newGridDimensions = prompt('Try again. Enter the new size of your grid (<= 100):', 16);
    }
    
    // Remove all grid rows and leaves the top bar
    for(let i = 0; i < NUM_ROWS_COLS; i++) {
        container.removeChild(container.lastChild);
    }

    // Redraw grid
    NUM_ROWS_COLS = newGridDimensions;
    gridSize = 900 / NUM_ROWS_COLS;
    for(let i = 0; i < NUM_ROWS_COLS; i++) { // Rows
        let newRowDiv = document.createElement('div'); // New row (div element)
        newRowDiv.classList.add('row'); // Add style
    
        for(let j = 0; j < NUM_ROWS_COLS; j++) { // Columns
            let newBox = document.createElement('div'); // New box
            newBox.style.cssText = `background-color: #484848; width: ${gridSize}px; height: ${gridSize}px;`; // Add style
            newBox.classList.add('grid-box');
            newRowDiv.appendChild(newBox); // Add to row
        }
    
        container.appendChild(newRowDiv); // Add whole row to container
    }

    container.removeEventListener('mouseover', lockedColorChanging);
    container.addEventListener('mouseover', randomColorChanging);

    e.stopPropagation();
});

lockColorBtn.addEventListener('click', e => {
    container.removeEventListener('mouseover', randomColorChanging);
    container.addEventListener('mouseover', lockedColorChanging);
});

unlockColorBtn.addEventListener('click', e => {
    container.removeEventListener('mouseover', lockedColorChanging);
    container.addEventListener('mouseover', randomColorChanging);
});

manualColorBtn.addEventListener('click', e => {
    let newColorR = prompt('Enter value for R (0-255):');
    while(true) {
        if(newColorR < 0 || newColorR > 255) {
            newColorR = prompt('Try again. Enter value for R (0-255):');
        } else {
            break;
        }
    }

    let newColorG = prompt('Enter value for G (0-255):');
    while(true) {
        if(newColorG < 0 || newColorG > 255) {
            newColorG = prompt('Try again. Enter value for G (0-255):');
        } else {
            break;
        }
    }

    let newColorB = prompt('Enter value for B (0-255):');
    while(true) {
        if(newColorB < 0 || newColorB > 255) {
            newColorB = prompt('Try again. Enter value for B (0-255):');
        } else {
            break;
        }
    }

    nextColor = [`rgb(${newColorR}, ${newColorG}, ${newColorB})`, newColorR, newColorG, newColorB];

    container.removeEventListener('mouseover', randomColorChanging);
    container.addEventListener('mouseover', lockedColorChanging);
});