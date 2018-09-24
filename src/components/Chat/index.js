import React, {Component} from 'react'
import {ChatManager, TokenProvider} from '@pusher/chatkit'
import MessageList from '../MessageList'
import SendMessageForm from '../SendMessageForm'
import OnlineList from '../OnlineList'
import { withStyles } from '@material-ui/core/styles';
import {styles} from './style'

class Chat extends Component {
    state = {
        currentUser: null,
        currentRoom: {},
        messages: []
    };

    componentDidMount() {
        const chatkit = new ChatManager({
            instanceLocator: 'v1:us1:055b98c9-7fd3-436a-9075-4fd295c1a495',
            userId: this.props.currentId,
            tokenProvider: new TokenProvider({
                url:
                    'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/055b98c9-7fd3-436a-9075-4fd295c1a495/token'
            })
        });

        chatkit
            .connect()
            .then(currentUser => {
                this.setState({currentUser});
                return currentUser.subscribeToRoom({
                    roomId: 16974188,
                    messageLimit: 100,
                    hooks: {
                        onNewMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        },
                        onUserCameOnline: () => this.forceUpdate(),
                        onUserWentOffline: () => this.forceUpdate(),
                        onUserJoined: () => this.forceUpdate()
                    }
                })
            })
            .then(currentRoom => {
                this.setState({currentRoom})
            })
            .catch(error => console.error('error', error))
    }

    onSend = text => {
        this.state.currentUser.sendMessage({
            text,
            roomId: this.state.currentRoom.id
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.onlineList}>
                    <OnlineList
                        currentUser={this.state.currentUser}
                        users={this.state.currentRoom.users}
                    />
                </div>
                <div className={classes.chat}>
                    <MessageList messages={this.state.messages}/>
                    <SendMessageForm onSend={this.onSend}/>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Chat)