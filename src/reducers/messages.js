import _ from "lodash";
import { DELETE_MESSAGE, SEND_MESSAGE } from "../constants/action-types";
import { getMessages } from "../static-data";


const messagesReducer = (state = getMessages(10), action) => {
  
  switch(action.type){
    case SEND_MESSAGE:{
      const { message, userId, activeChatId } = action.payload;
      const userMessages = state[userId];
      const number = activeChatId || +_.keys(userMessages).pop() + 1;
      
      return {
        ...state,
        [userId]:{
          ...userMessages,
          [number]: {
            number,
            text: activeChatId? message.concat(" (edited)") : message,
            is_user_msg: true,
          }
        }
      };
    }
    case DELETE_MESSAGE: {
      const { number, userId } = action.payload;
      let messages = state[userId];
      //Remove the message with the number specified
      messages = _.omit(messages,number);
      
       return {
         ...state,
         [userId]: {
           ...messages
         }
       };
    }
    default:
      return state;
  }
  
}

export default messagesReducer;