console.log('Hello from Notes App!');

// Series of notes hard-coded
const notes = [
    {
        title: 'Learn JavaScript Types in a day.',
        content: 'It would be nice to learn all you can about JavaScript types in a day and remember then.',
    },
    {
        title: 'Plan a trip to the beach or cabin in the woods.',
        content: 'If you forget this, you wont be able to go anywhere this summer',
    },
    {
        title: 'Start working on your JavaScript project.',
        content: 'What are you going to build or what idea is in your head?',
    },
];

// Testing localStorage API
localStorage.setItem('name', 'Heber');

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
        // Update content
        noteElement.textContent = note.title;
        // Append note to the DOM
        document.querySelector('#notes').appendChild(noteElement);
    });
};

// This gets called ones, just to have some notes to display
renderNotes(notes, filters);

// Create a note
document.querySelector('#create-note').addEventListener('click', function (event) {
    console.log('Did this work');
    event.target.textContent = 'Clicked';
});

// Get input field value
document.querySelector('#search-text').addEventListener('input', function (event) {
    // console.log(event.target.value);
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
});

// Capture form data
document.querySelector('#note-form').addEventListener('submit', function (event) {
    // Disable default behavior on form submission
    event.preventDefault();
    // Display data to the console for now
    console.log(event.target.elements.myNote.value);
    // Set value of input field to empty string
    event.target.elements.myNote.value = '';
});

// Get data from dropdown
document.querySelector('#filter-by').addEventListener('change', function (event) {
    console.log(event.target.value);
});
