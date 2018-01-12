import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      message: ''
    };
  }

  submitUser(event) {
    const oldName = this.state.username;
    console.log('Input:', event.target.value);

    this.setState({username: event.target.value}, () => {

      const username = this.state.username;
      this.props.send('nameChange', {oldName, username});
    });
    // this.props.addUser(this.state.username)
  }

  submitMessage() {
    const content = this.state.message;
    this.props.send('chat', {content, username: this.state.username});
    // this.props.addMessage(this.state.message);
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={this.state.username}

        onBlur={event => {
          this.submitUser(event)
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.submitUser(event)
          }
        }}
        />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          value={ this.state.message }
          onChange={ event => {
            this.setState({ message: event.target.value })
          }}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              //this.submitUser();
              this.submitMessage()
            }
          }}/>
      </footer>
    );
  }
}

export default ChatBar;