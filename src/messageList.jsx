import React, {Component} from 'react';
import Message from './message.jsx';

class MessageList extends Component {
  render = () => (
      <main className="messages">
        {this.props.messages.map((msg,i) => (
          <Message key={i} msg={msg} />
        ))}
      </main>
    )
}

export default MessageList;