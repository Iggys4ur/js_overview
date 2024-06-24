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

    console.log(noteText);
    console.log(dateStr);
    console.log(altDateStr);

    // Note object stores the content and date of the note
    var noteObj = {
        note: noteText,
        noteDate: altDateStr
    }

    // Pull the old data from the database(localStorage) an empty array if no previous data has been stored
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    // push the noteBlock to the notes array
    notes.push(noteObj);

    localStorage.setItem('notes', JSON.stringify(notes));
}

// set up necessary event listeners that should listen when the page loads

noteForm.addEventListener('submit', createNote);

// localStorage.setItem('name', 'Eli');