import React, {Component} from 'react';
import ChatBar from './chatBar.jsx';
import MessageList from './messageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeUsers: 0
    };
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onmessage = (event) => {
      var parsedData = JSON.parse(event.data);
      if(parsedData.type === 'activeUsers') {
        this.setState({
          activeUsers: parsedData.value
        })
      }
      else {
        let newList = this.state.messages.concat(JSON.parse(event.data));
        console.log(newList);
        this.setState({
          messages: newList
        });
      }
    }
    this.socket.onopen = function (event) {
      console.log('Opened web socket connection');
    }
  }

  addUser(name) {
    const user = {
      name: name
    };
    this.setState({
      currentUser: user
    });
  }

  send(type, props) {
    const newMsg = {
      ...props,
      type
    };
    this.socket.send(JSON.stringify(newMsg));
  }


  render() {

    const msgs = this.state.messages;
    const activeUsers = this.state.activeUsers;
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span> Active Users {activeUsers} </span>
        </nav>
        <MessageList messages={msgs} />
        <ChatBar send={this.send.bind(this)} />
      </div>
    );
  }
}
export default App;
