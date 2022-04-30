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

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    });

    // Remove the note
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1); // Removing one item
    }
};

// Save notes to localStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// Generate the DOM structure for the note
const generateNoteDOM = function (note) {
    // Create a div element
    const noteElement = document.createElement('div');

    //Create an anchor element
    const textElement = document.createElement('a');

    // Create a button element and append to left of div
    const button = document.createElement('button');
    button.textContent = 'x';
    noteElement.append(button);
    button.addEventListener('click', function () {
        // Remove note using its id property
        removeNote(note.id);
        saveNotes(notes);
        renderNotes(notes, filters);
    });

    // Create if notes title is not empty
    if (note.title.length > 0) {
        // Update content
        textElement.textContent = note.title;
    } else {
        // Not replacing the title property of 'notes' just filling in the element's text content.
        textElement.textContent = 'Untitled Note';
    }

    // Set attribute for anchor tag
    textElement.setAttribute('href', `/edit.html#${note.id}`);

    // Append the span tag to the div tag
    noteElement.appendChild(textElement);

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
