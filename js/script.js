// const gatherBtn = document.querySelector('#gather-btn');



// target the form
const noteForm = document.querySelector('#noteForm');
// target the note header h3
const noteHeader = document.querySelector('#noteHeader');

// noteForm.style.background = 'red';  // DOES THIS WORK? 

function createNote(eventObj) {
    eventObj.preventDefault();

    const noteInput = document.querySelector('#note-input');
    const noteText = noteInput.value;

    const dateObj = new Date();
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();
    const dateStr = month + '/' + date + '/' + year;
    const altDateStr = `${month}/${date}/${year}`;

    // Note object stores the content and date of the note
    var noteObj = {
        note: noteText,
        noteDate: dateStr,
        noteDateAlt: altDateStr
    }

    // Pull the old data from the database(localStorage) an empty array if no previous data has been stored
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    console.log(notes[1]);

    // push the noteBlock to the notes array
    notes.push(noteObj);

    localStorage.setItem('notes', JSON.stringify(notes));

    const container = document.getElementById('grid-container');
    createGrid(5, 3);
}


function createGrid(rows, cols) {
    const container = document.getElementById('grid-container');
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = `[ ${i},${j} ]`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
}

createGrid(5, 3); // Create a 5x5 grid

// set up necessary event listeners that should listen when the page loads

noteForm.addEventListener('submit', createNote);

// localStorage.setItem('name', 'Eli');