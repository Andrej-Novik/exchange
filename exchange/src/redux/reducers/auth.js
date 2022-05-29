import ava from "../../assets/images/headerIcons/authUser/1.jpg";

const initialState = {
  user: {
    name: "Andrej",
    ava: ava,
    email: "crypto@gmail.com",
    password: "12345678",
  },
  isAuth: false,
};

const balance = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default balance;
