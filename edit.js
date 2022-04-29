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
document.querySelector('#note-title').value = note.title;

// Set the value of the content in the textarea
document.querySelector('#note-content').value = note.content;
