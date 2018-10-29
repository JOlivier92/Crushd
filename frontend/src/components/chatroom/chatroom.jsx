import React from "react";
import Loader from "react-loader-spinner";
import HomeNavContainer from "../home/home_nav/home_nav_container";
import ResponsesIndexContainer from "./../responses/responses_index_container";
import MessagesIndexContainer from "./../messages/messages_index_container";
import "./chatroom.css";
const firebase = require("firebase");
require("firebase/firestore");

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      navOption: true,
      message: "",
      messages: [
        { id: 0, text: "first message" },
        { id: 1, text: "second message" }
      ]
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });

    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDsZyTtsdAELZyX9Q6QeNwvw1aOrFmE81o",
        authDomain: "crushd-efd3f.firebaseapp.com",
        projectId: "crushd-efd3f",
        storageBucket: "crushd-efd3f.appspot.com",
        databaseURL: "https://crushd-efd3f.firebaseio.com"
      });
    }
    firebase.database().ref("chatrooms/test/").on("value", snapshot => {
      console.log(snapshot.val());
      const currentMessages = snapshot.val();

      if (currentMessages != null) {
        this.setState({
          messages: Object.values(currentMessages)
        });
      }
    });

    await this.sleep(1000);
    this.setState({ loading: false });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  componentWillReceiveProps(nextProps) {
    const { ui } = this.props;
    if (nextProps.ui !== ui) {
      this.setState({ navOption: nextProps.ui });
    }
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  keyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      this.submitMessage(event);
    } else {
      return null;
    }
  }

  submitMessage(event) {
    event.preventDefault();
    const nextMessage = {
      id: this.state.messages.length + 1,
      text: this.state.message,
      message: ""
    };

    document.getElementsByClassName("message-input-text")[0].value = "";
    firebase
      .database()
      .ref("chatrooms/test/" + nextMessage.id)
      .set(nextMessage);
  }

  render() {
    const { navOption, loading } = this.state;
    console.log(this.refs);
    if (loading) {
      return (
        <div className="loader-container">
          <Loader className="spinner" type="Hearts" height="200" width="200" />;
        </div>
      );
    }
    const currentMessages = () =>
      this.state.messages.map((message, i) => {
        let color = null;
        if (i % 2 === 0) {
          color = "chat gray";
        } else {
          color = "chat blue";
        }
        return <div className="chat-divider">
            <li className={color} key={message.id}>
              {message.text}
            </li>
          </div>;
      });

    return <div className="chat-content-section">
        {<HomeNavContainer />}
        <div>
          {navOption ? <ResponsesIndexContainer /> : <MessagesIndexContainer />}
        </div>
        <div className="chat-box-outer">
          <div className="chat-header">
            <h2>Chat</h2>
          </div>
          <ul className="chat-box-inner">
            {currentMessages()}
          </ul>
          <div className="chat-footer">
            <input onKeyDown={this.keyDown} className="message-input-text" onChange={this.updateMessage} type="text" placeholder="Message" />
            <br />
            <div className="chat-btn-outer">
              <button id="chat-btn" className="chat-btn" onClick={this.submitMessage}>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default ChatRoom;
