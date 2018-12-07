const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesStr = fs.readFileSync('data.json');
        return  JSON.parse(notesStr);
    } catch (e) { 
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = {title, body};

    const isDublicate = notes.some(note => note.title === title );

    if(!isDublicate) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const getAll = () => {
    console.log('Getting all notes');   
};

const removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

const readNote = (title) => {
    const notes = fetchNotes();
    for(let note of notes) {
       if(note.title === title) {
           return note;
       }
    }
};

const logNote = (note, message, fn) => {
    fn(message);
    fn('----');
    fn(`Title: ${note.title}`);
    fn(`Body: ${note.body}`);   
};

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote,
    logNote
}