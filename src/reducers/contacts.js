import { DELETE_CONTACT } from "../constants/action-types";
import { contacts } from "../static-data";

const contactsReducer = (state = contacts, action) => {
 
  switch(action.type){
    case DELETE_CONTACT:
      const contactId = action.payload;
      const { [contactId]: removed, ...newState} = state;
      return newState;
    default:
      return state;
  }
};

export default contactsReducer;