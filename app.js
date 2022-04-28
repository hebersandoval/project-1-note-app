console.log('Hello from Notes App!');

// Series of notes hard-coded
const notes = getSavedNotes();

// Filter data
const filters = {
    searchText: '',
};

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
        // Create new element
        const noteElement = document.createElement('p');
        // Create if notes title is not empty
        if (note.title.length > 0) {
            // Update content
            noteElement.textContent = note.title;
        } else {
            // Not replacing the title property of 'notes' just filling in the element's text content.
            noteElement.textContent = 'Untitled note';
        }
        // Append note to the DOM
        document.querySelector('#notes').appendChild(noteElement);
    });
};

// This gets called ones, just to have some notes to display
renderNotes(notes, filters);

// Create a note
document.querySelector('#create-note').addEventListener('click', function (event) {
    notes.push({
        title: '',
        content: '',
    });
    // Save data to localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    // Render the notes
    renderNotes(notes, filters);
});

// Get input field value
document.querySelector('#search-text').addEventListener('input', function (event) {
    // console.log(event.target.value);
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
});

// Get data from dropdown
document.querySelector('#filter-by').addEventListener('change', function (event) {
    console.log(event.target.value);
});
