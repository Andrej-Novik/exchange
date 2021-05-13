import { useDispatch, useSelector } from "react-redux";
import {addNewNote} from "../../../redux/actions/notes"
import Notes from "./component";

const NotesContainer = () => {
	const dispatch = useDispatch();
	const notes = useSelector((state) => state.notes.notes);
	
	const addNote = (newNote) => {
		dispatch(addNewNote(newNote))
	}

	return <Notes notes={notes} addNote={ addNote}/>;
};
export const container = NotesContainer;
