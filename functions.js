// *** Functions used in our application *** //

// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes');

    if (notesJSON !== null) {
        // Retrun the parse existing array
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};
