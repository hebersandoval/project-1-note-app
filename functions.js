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

// Save notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
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

// Render application notes
const renderNotes = function (notes, filters) {
    // Limit notes that pass filters
    const filteredNotes = notes.filter(function (note) {
        // Contains searched text
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    // Clear element
    document.querySelector('#notes').innerHTML = '';
    // Iterate over notes and create new element to append to DOM
    filteredNotes.forEach(function (note) {
        // Generates a new note
        const noteElement = generateNoteDOM(note);
        // Append note to the DOM
        document.querySelector('#notes').appendChild(noteElement);
    });
};
