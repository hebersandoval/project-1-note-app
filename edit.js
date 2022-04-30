const titleElement = document.querySelector('#note-title');
const contentElement = document.querySelector('#note-content');
const removeElement = document.querySelector('#remove-note');

// Get the ID and remove the '#' symbol
const noteID = location.hash.substring(1);

const notes = getSavedNotes();

// Find the note that matches the id of the hash
const note = notes.find(function (note) {
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

// Update the title property with the value of the input field
titleElement.addEventListener('input', function (event) {
    note.title = event.target.value;
    saveNotes(notes);
});

contentElement.addEventListener('input', function (event) {
    note.content = event.target.value;
    saveNotes(notes);
});

removeElement.addEventListener('click', function (event) {
    removeNote(note.id);
    saveNotes(notes);

    location.assign('/index.html');
});
