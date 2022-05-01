console.log('Hello from Notes App!');

// Get notes from localStorage
let notes = getSavedNotes();

// Filter data
const filters = {
    searchText: '',
    sortBy: 'byEdited',
};

// This gets called ones, just to have some notes to display
renderNotes(notes, filters);

// Create a note
document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4();

    const timestamp = moment().valueOf();

    notes.push({
        id: id,
        title: '',
        content: '',
        createdAt: timestamp,
        updatedAt: timestamp,
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
    filters.sortBy = event.target.value;
    renderNotes(notes, filters);
});

// Add an event on window to listen on localStorage
window.addEventListener('storage', function (event) {
    if (event.key === 'notes') {
        notes = JSON.parse(event.newValue);
        renderNotes(notes, filters);
    }
});
