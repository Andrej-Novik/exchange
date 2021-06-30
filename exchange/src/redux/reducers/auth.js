import ava from "../../assets/images/headerIcons/authUser/1.jpg"

const initialState = {
	user: {
		name: "Andrej",
		ava: ava
	}
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default balance;
