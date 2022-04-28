// *** Functions used in our application *** //

// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        // Retrun the parse existing array
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

// Generate the DOM structure for the note
const generateNoteDOM = function (note) {
    // Create new element
    const noteElement = document.createElement('p');
    // Create if notes title is not empty
    if (note.title.length > 0) {
        // Update content
        noteElement.textContent = note.title;
    } else {
        // Not replacing the title property of 'notes' just filling in the element's text content.
        noteElement.textContent = 'Untitled Note';
    }
    return noteElement;
};
