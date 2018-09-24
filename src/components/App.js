import React, {Component} from 'react'
import UserForm from '../containers/userNameForm'
import Chat from './Chat'

class App extends Component {
    state = {
        currentId: this.props.currUser[0],
        currentUsername: this.props.currUser[1],
        currentScreen: this.props.currUser[2]
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.currUser){
            this.setState({
                currentId:nextProps.currUser[0],
                currentUsername:nextProps.currUser[1],
                currentScreen:nextProps.currUser[2],
            })
        }
    }

    render() {
        return (
            this.state.currentScreen === 'usernameForm' ?
                <UserForm onHandleSubmit={this.props.userSubmit}/>
                :
                <Chat currentId={this.state.currentId}/>
        )
    }
}

export default App