console.log('Hello from Notes App!');

// Query document for varies elements in page.
const p = document.querySelector('p');

// p.remove();

// Query all and remove
const ps = document.querySelectorAll('p');

ps.forEach(function (p) {
    console.log(p.textContent);
});
