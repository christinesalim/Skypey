import { generateUser } from '../static-data';

const userReducer = (state = generateUser(), action) => {
  return state;
};

export default userReducer;
