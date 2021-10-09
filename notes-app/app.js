const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Note description",
			demandOption: true,
			type: "string",
		},
	},
	handler: function (argv) {
		notes.addNote(argv.title, argv.body);
	},
});

// Create remove command
yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: function () {
		console.log("Removing the note!");
	},
});

// Create list command
yargs.command({
	command: "list",
	describe: "List all notes",
	handler: function () {
		console.log("Listing all notes!");
	},
});

// Create read command
yargs.command({
	command: "read",
	describe: "Read a note",
	handler: function () {
		console.log("Reading the note!");
	},
});

console.log(yargs.argv);