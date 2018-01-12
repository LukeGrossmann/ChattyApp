import React, {Component} from 'react';

class Message extends Component {
  render() {
    const {username, content, type, oldName} = this.props.msg;
    if (type === 'chat') {
      return (
        <div className="message">
          <span className="message-username">{username || 'Anonymous'}</span>
          <span className="message-content">{content}</span>
        </div>
      );
    }
    else if (type === 'nameChange') {
      return (
        <div className="message system">
          <span>{oldName || (<i>Anonymous </i>)}</span>
          <span>has changed there name to</span>
          <span>{username}</span>
        </div>
      );
    }
    else {
    return ('error no type');
  }
  }
}

export default Message;