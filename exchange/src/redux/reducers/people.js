import { v4 as uuidv4 } from "uuid";
import andrej from "../../assets/images/peoples/1.webp";
import ivan from "../../assets/images/peoples/2.jpg";
import artem from "../../assets/images/peoples/3.png";
import sasha from "../../assets/images/peoples/4.png";
import misha from "../../assets/images/peoples/5.jpg";
import {OPEN_MODAL, CLOSE_MODAL} from "../actionTypes/people"

const initialState = {
	isModalOpen: false,
	newPerson: {},
  people: [
    {
      id: uuidv4(),
      name: "Andrej",
      ava: andrej,
    },
    {
      id: uuidv4(),
      name: "Ivan",
      ava: ivan,
    },
    {
      id: uuidv4(),
      name: "Artem",
      ava: artem,
    },
    {
      id: uuidv4(),
      name: "Sasha",
      ava: sasha,
    },
    {
      id: uuidv4(),
      name: "Misha",
      ava: misha,
    },
  ],
};

const balance = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL: {
			return {
				...state,
				isModalOpen: true
			}
		}
		case CLOSE_MODAL: {
			return {
				...state,
				isModalOpen: false
			}
		}
    default:
      return state;
  }
};

export default balance;
