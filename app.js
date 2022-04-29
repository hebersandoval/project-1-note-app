console.log('Hello from Notes App!');

// Get notes from localStorage
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
        id: uuidv4(),
        title: '',
        content: '',
    });
    // Save data to localStorage
    saveNotes(notes);

    // Send the user to the edit page when button is clicked
    location.assign('/edit.html');
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
