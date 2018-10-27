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
    this.submitMessage = this.submitMessage.bind(this);
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  submitMessage(event) {
    event.preventDefault();
    console.log(this.state.message);
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    };
    let list = Object.assign([], this.state.messages);
    list.push(nextMessage);
    console.log(list);
    this.setState({
      messages: list
    });
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
