const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesStr = fs.readFileSync('data.json');
        return  JSON.parse(notesStr);
    } catch (e) { 
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {title, body};

    let isDublicate = notes.some(note => note.title === title );

    if(!isDublicate) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const getAll = () => {
    console.log('Getting all notes');   
}

const removeNote = (title) => {
    console.log('removing');
}

const readNote = (title) => {
    console.log('Reading');
}


module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote
}