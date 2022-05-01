const titleElement = document.querySelector('#note-title');
const contentElement = document.querySelector('#note-content');
const removeElement = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-edited');

// Get the ID and remove the '#' symbol
const noteID = location.hash.substring(1);

let notes = getSavedNotes();

// Find the note that matches the id of the hash
let note = notes.find(function (note) {
    return note.id === noteID;
});

// Return to homepage if no ID matches
if (note === undefined) {
    location.assign('/index.html');
}

// Set the value of the title in the input field
titleElement.value = note.title;

// Set the value of the content in the textarea
contentElement.value = note.content;

dateElement.textContent = generateLastEdited(note.updatedAt);

// Update the title property with the value of the input field
titleElement.addEventListener('input', function (event) {
    note.title = event.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

contentElement.addEventListener('input', function (event) {
    note.content = event.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

removeElement.addEventListener('click', function (event) {
    removeNote(note.id);
    saveNotes(notes);

    location.assign('/index.html');
});

// Add an event on window to listen on localStorage
window.addEventListener('storage', function (event) {
    // Access latest data and render it to the screen
    if (event.key == 'notes') {
        notes = JSON.parse(event.newValue);

        // Find the note that matches the id of the hash
        note = notes.find(function (note) {
            return note.id === noteID;
        });
        // Return to homepage if no ID matches
        if (note === undefined) {
            location.assign('/index.html');
        }
        // Set the value of the title in the input field
        titleElement.value = note.title;
        // Set the value of the content in the textarea
        contentElement.value = note.content;
        // Update value on storage change
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
});
