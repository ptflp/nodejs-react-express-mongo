import mongoose from "mongoose";

import '../models/Note';

import config from '../../config/config.json';


const Note = mongoose.model('Note');
const db = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

export function setUpConnection() {
	mongoose.connect(db);
}

export function listNotes() {
	return Note.find();
}

export function createNote(data) {
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createdAt: new Date()
	});
	return note.save();
}

export function deleteNote(id) {
	return Note.findById(id).remove();
}

