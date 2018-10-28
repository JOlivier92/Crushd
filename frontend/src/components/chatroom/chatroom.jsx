import React from "react";

const firebase = require("firebase/firestore");
require("firebase/firestore");

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messages: [
        { id: 0, text: "first message" },
        { id: 1, text: "second message" }
      ]
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDsZyTtsdAELZyX9Q6QeNwvw1aOrFmE81o",
        authDomain: "crushd-efd3f.firebaseapp.com",
        projectId: "crushd-efd3f",
        storageBucket: "crushd-efd3f.appspot.com",
        databaseURL: "https://crushd-efd3f.firebaseio.com"
      });
    }
    firebase
      .database()
      .ref("chatrooms/test/")
      .on("value", snapshot => {
        console.log(snapshot.val());
        const currentMessages = snapshot.val();

        if (currentMessages != null) {
          this.setState({
            messages: Object.values(currentMessages)
          });
        }
      });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
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
    const currentMessages = () =>
      this.state.messages.map((message, i) => {
        return <li key={message.id}>{message.text}</li>;
      });

    return (
      <div>
        {currentMessages()}
        <input
          className="message-input-text"
          onChange={this.updateMessage}
          type="text"
          placeholder="Message"
        />
        <br />
        <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    );
  }
}

export default ChatRoom;
