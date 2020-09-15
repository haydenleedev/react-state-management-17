import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];
const usernames = users.map(user => user.username);

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

state = {
  message: { 
    username: '', 
    text: '', 
   },
  messages:[],
}

messageSubmit = (event) => {
  event.preventDefault();
  this.setState((prevState) => ({
    messages: [...prevState.messages, this.state.message],
  }))
}

inputChange1 = (event) => {
    const message = { ...this.state.message };
    message.text = event.target.value;
    message.username = usernames[0];
    this.setState( prevState => ({
    	message: {
          ...prevState.message,
          username: message.username,
          text: message.text,
        }
    }))
 };

inputChange2 = (event) => {
     const message = { ...this.state.message };
    message.text = event.target.value;
    message.username = usernames[1];
    this.setState( prevState => ({
    	message: {
          ...prevState.message,
          username: message.username,
          text: message.text,
        }
    }))
 };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[0].username}</div>

            <ul className="message-list">
              {
                this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[0].username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))
}
            </ul>

            <div>
              <form className="input-group" onSubmit={this.messageSubmit} >
                <input type="text" className="form-control" 
				placeholder="Enter your message..."
				value={this.state.message.text}
                onChange={this.inputChange1} 
				/>

                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{users[1].username}</div>
            <ul className="message-list">
              {
				this.state.messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === users[1].username ? 'message sender' : 'message recipient'
                  }
                >
                 <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))
			}
            </ul>

            <div>
              <form className="input-group"  onSubmit={this.messageSubmit}>
                <input type="text" className="form-control" placeholder="Enter your message..."
				value={this.state.message.text}
                onChange={this.inputChange2} 
				/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
