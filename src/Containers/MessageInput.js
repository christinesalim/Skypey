import React from 'react';
import store from '../store';
import { setTypingValue, sendMessage } from '../actions';
import './MessageInput.css';


const MessageInput = ({ value }) => {
 
  const state = store.getState();

  const handleChange = e => {    
    store.dispatch(setTypingValue(
      e.target.value));
  };

  const handleSubmit= e => {
    e.preventDefault(); //to prevent page reload
    //get the message typed and active user who typed it
    const { typing, activeUserId, activeChatId } = state;

    //The sendMessage action creator results in the message being
    //added to the list of messages for the active user
    store.dispatch(sendMessage(typing, activeUserId, activeChatId));
   
  }

  return (
    <form className="Message" onSubmit={handleSubmit}>
      <input 
        className="Message__input"
        placeholder="Write a message"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};

export default MessageInput;