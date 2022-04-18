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

// Query document for varies elements in page.
const p = document.querySelector('p');

// p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');

ps.forEach(function (p) {
    // Change content for each paragraph's value.
    p.textContent = '*********************';
});

// Add a new element to page
// 1. Create a new element
const newParagraph = document.createElement('p');
// 2. Update content
newParagraph.textContent = 'This is a new element from JS code.';
// 3. Put it somewhere in the DOM
document.querySelector('body').appendChild(newParagraph); // Will append 'newParagraph' to the end of the list of tag selected.
