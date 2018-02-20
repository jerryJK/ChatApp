import React, {Component} from 'react';


class Chat extends Component {

    constructor(props){
      super(props);

      this.state = {
          username: '',
          message: '',
          messages: [{author:'jerry', message:'hello'}, {author:'jerry2', message:'hello2'}]
      };
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
                                    <input type="text" placeholder="Username" className="form-control"/>
                                    <br/>
                                    <input type="text" placeholder="Message" className="form-control"/>
                                    <br/>
                                    <button className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Chat;
