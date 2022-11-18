import React from 'react';
import './Chat.css';
import store from '../store';
import { deleteMessage, editMessage } from '../actions';


const handleDeleteMessage = (number) => {
  const userId = store.getState().activeUserId;
  store.dispatch(deleteMessage(number, userId));
}

const handleEditMessage = (text, number, is_user_msg) => {
  if(is_user_msg){
    store.dispatch(editMessage(
      text,      
      number
    ));
 
  }
}

const Chat = ({ message }) => {
  const { text, is_user_msg, number } = message;    
  return is_user_msg ? (
    <div 
      className="Chat is_user_msg"
      onDoubleClick={handleEditMessage.bind(null, text, number, true)}
    >     
      <span 
        className= "Chat__delete" 
        onClick={handleDeleteMessage.bind(null, number)}
      > 
        X 
      </span>
      {text}      
    </div> 
  ): (
    <span className="Chat">{text}</span>  
  );
};

export default Chat;