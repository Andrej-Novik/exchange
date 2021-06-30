import { v4 as uuidv4 } from "uuid";
import { ADD_NEW_NOTE } from "../actionTypes/notes";

const initialState = {
  notes: [
    {
      id: uuidv4(),
      text: "купить биткоин",
    },
    {
      id: uuidv4(),
      text: "поставить закуп на 55600",
    },
	],
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: uuidv4(),
            text: action.newNote,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default notes;
