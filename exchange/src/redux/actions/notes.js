import { ADD_NEW_NOTE } from "../actionTypes/notes"

export const addNewNote = (newNote) => {
  return { type: ADD_NEW_NOTE, newNote };
};