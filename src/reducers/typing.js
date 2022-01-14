import { 
  SET_TYPING_VALUE,
  EDIT_MESSAGE,
  SEND_MESSAGE,
 } from "../constants/action-types";

const typingReducer = ( state="", action) => {
  switch(action.type){
    case SET_TYPING_VALUE:
      return action.payload;
    case EDIT_MESSAGE:
      return action.payload.message;
    case SEND_MESSAGE:
      //Empty the text input when a chat is submitted
      return "";
    default:
       return state;
  }
};

export default typingReducer;