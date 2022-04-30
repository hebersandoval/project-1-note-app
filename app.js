console.log('Hello from Notes App!');

// Get notes from localStorage
let notes = getSavedNotes();

// Filter data
const filters = {
    searchText: '',
};

// This gets called ones, just to have some notes to display
renderNotes(notes, filters);

// Create a note
document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4();

    notes.push({
        id: id,
        title: '',
        content: '',
    });
    // Save data to localStorage
    saveNotes(notes);

    // Send the user to the edit page when button is clicked
    location.assign(`/edit.html#${id}`);
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

// Add an event on window to listen on localStorage
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue);
        renderNotes(notes, filters);
    }
});
