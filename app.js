console.log('Hello from Notes App!');

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
