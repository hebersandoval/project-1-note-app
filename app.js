console.log('Hello from Notes App!');

// Series of notes hard-coded
const notes = [
    {
        title: 'This note was created by HS.',
        content: 'This is where you will put lots of content to read later.',
    },
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

// Get all the notes and display them in the DOM
notes.forEach(function (note) {
    // 1. Create a new element
    const newNote = document.createElement('p');
    // 2. Update content
    newNote.textContent = note.title;
    // 3. Insert it in the DOM
    document.querySelector('body').appendChild(newNote);
});
