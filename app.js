const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


const argv = yargs.argv;
const command = argv._[0];



if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    const message = note ? 'Note created' : 'Note title taken';
    if (note) {
        notes.logNote(note, message, console.log);  
    } else {
        console.log(message);
    }
    
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Prints ${allNotes.length} note(s)`);
    
    allNotes.forEach((note, idx) => {
        const message = `Note # ${idx + 1}`;
        notes.logNote(note, message, console.log);
    });
    

} else if (command === 'remove') {
    const isRemoved = notes.removeNote(argv.title);
    const message = isRemoved ? 'Note was removed' : 'Note was not removed';
    console.log(message);
    
} else if (command === 'read') {
    const note = notes.readNote(argv.title);
    const message = note ? 'Note found' : 'Note not found';
    if (note) {
       notes.logNote(note, message, console.log);
    } else {
        console.log(message);
    }

} else {
    console.log('Command not found');
    
}


