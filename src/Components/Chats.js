import React from 'react';
import './Chats.css';
import Chat from './Chat';


class Chats extends React.Component {
  constructor (props) {
    super(props);
    this.chatsRef = React.createRef();
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = 
      this.chatsRef.current.scrollHeight;
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="Chats" ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;