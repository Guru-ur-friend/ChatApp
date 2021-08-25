import React from 'react';
import './App.css';
import SideBar from "./sidebar/sidebar";
import LiveChat from "./livechat/livechat";
import Chats from './chats/chats';

class App extends React.Component {
constructor(){
  super();
  this.state = {
    activeUserId : "1",
    chatUpdated : 1
  }
}
  
  toggleChat = (userId) => {
     this.setState({
       activeUserId : userId
     })
  }

  updateChat = () => {
    this.setState({
      chatUpdated : this.state.chatUpdated+1
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="row">
            <div className="col-md-2 col-sm-0 sideBar">
              <SideBar />
            </div>
            <div className="col-md-4 col-sm-0 chatStyle">
              <Chats toggleChat = {this.toggleChat} chatUpdated = {this.state.chatUpdated}/>
            </div>
            <div className="col-md-6 col-sm-12">
              <LiveChat userId = {this.state.activeUserId} updateChat= {this.updateChat}/>
            </div>
          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default App;
