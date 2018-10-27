import React from "react";

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
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  submitMessage(event) {
    event.preventDefault();
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
