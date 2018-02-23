import React, {Component} from 'react';
import io from "socket.io-client";

class Chat extends Component {

    constructor(props){
      super(props);

      this.state = {
          username: '',
          message: '',
          messages: []
      };

      this.socket = io('localhost:8080');

      this.socket.on('RECEIVE_MESSAGE', function(data){
          addMessage(data);
      });

      const addMessage = data => {
          console.log(data);
          this.setState({messages: [...this.state.messages, data]});
          console.log(this.state.messages);
      };

      this.sendMessage = e => {
          e.preventDefault();
          this.socket.emit('SEND_MESSAGE', {
              author: this.state.username,
              message: this.state.message
          })
          this.setState({message: ''});

      }

    }



    handleChangeUsername = (event)=> {
      this.setState({
        username: event.target.value
      })
    }

    handleChangeMessage = (event)=> {
      this.setState({
        message: event.target.value
      })
    }



    render() {
        return (
          <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">Chat App</h3>
                                <hr/>
                                <div className="messages py-3">
                                  {this.state.messages.map(message => {
                                      return (
                                          <div>{message.author}: {message.message}</div>
                                      )
                                  })}
                                </div>
                            </div>
                            <div className="card-footer">
                                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} className="form-control"/>
                                    <br/>
                                    <input type="text" placeholder="Message"  value={this.state.message} onChange={this.handleChangeMessage} className="form-control"/>
                                    <br/>
                                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chat;
