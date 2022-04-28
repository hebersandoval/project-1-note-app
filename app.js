console.log('Hello from Notes App!');

// Series of notes hard-coded
const notes = getSavedNotes();

// Filter data
const filters = {
    searchText: '',
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
    saveNotes(notes);
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
