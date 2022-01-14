import { 
  DELETE_CONTACT, 
  EDIT_MESSAGE, 
  SEND_MESSAGE, 
  SET_ACTIVE_USER_ID, 
  SET_TYPING_VALUE,
  DELETE_MESSAGE,
 } from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const deleteContact = user_id => ({
  type: DELETE_CONTACT,
  payload: user_id,
});

export const setTypingValue = value => ({
  type: SET_TYPING_VALUE,
  payload: value
});

export const sendMessage = (message, userId, activeChatId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId,
    activeChatId,
  }
});

export const editMessage = (message, activeChatId) => ({
  type: EDIT_MESSAGE,
  payload: {
    message,
    activeChatId,
  }
});

export const deleteMessage = (number, userId) => ({
  type: DELETE_MESSAGE,
  payload: {
    number,
    userId,
  }
});

