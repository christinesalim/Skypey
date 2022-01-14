import { combineReducers } from 'redux';
import contactsReducer from './contacts';
import userReducer from './user';
import activeUserId from './activeUserId';
import messagesReducer from './messages';
import typingReducer from './typing';
import activeChatId from './activeChatId';

export default combineReducers( {
  activeUserId,
  activeChatId,
  user: userReducer,
  contacts: contactsReducer,
  messages: messagesReducer,
  typing: typingReducer,

});
