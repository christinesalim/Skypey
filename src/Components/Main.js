import React from 'react';
import './Main.css';
import Empty from './Empty';
import ChatWindow from '../Containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
 
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  }
  return <main className='Main'>{renderMainContent()}</main>
};

export default Main;
