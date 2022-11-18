import React from 'react';
import _ from "lodash";
import './ChatWindow.css';
import store from '../store';
import Header from '../Components/Header';
import Chats from '../Components/Chats';
import MessageInput from './MessageInput';


const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  //Get contact information for the active user selected
  const activeUser = state.contacts[activeUserId];

  //Get messages of the active user selected
  const activeMsgs = state.messages[activeUserId];
  
  const { typing } = state; 

  return (
    <div className="ChatWindow"> 
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing}/>
    </div>
  );
};
export default ChatWindow;