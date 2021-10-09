const fs = require("fs");

const getNotes = () => {
	return "Notes";
};

const addNote = (title, body) => {
	const notes = loadNotes();
	const duplicateNotes = notes.filter((note) => {
		return note.title === title;
	});

	if (duplicateNotes.length === 0) {
		notes.push({
			title,
			body,
		});
		saveNotes(notes);
		console.log("New note added!");
	} else {
		console.log("Note title taken!");
	}
};

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();

		return JSON.parse(dataJSON);
	} catch (err) {
		return [];
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
};