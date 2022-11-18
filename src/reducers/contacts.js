import { DELETE_CONTACT } from "../constants/action-types";
import { contacts } from "../static-data";

const contactsReducer = (state = contacts, action) => {
 
  switch(action.type){
    case DELETE_CONTACT:
      const contactId = action.payload;
      //Save the new list of contacts in newState after excluding the contact to delete
      const { [contactId]: removed, ...newState} = state;
      //Return the updated contact list
      return newState;
    default:
      return state;
  }
};

export default contactsReducer;