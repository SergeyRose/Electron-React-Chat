import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {styles} from './style'

class MessageList extends Component {
    render() {
        const {classes} = this.props;
        console.log(this.props);
        return (
            <List className={classes.placement}>
                {this.props.messages.map((message, index) => (
                    <ListItem key={message.id}>
                        <ListItemText  className={classes.ListItemText}>{message.sender.name + ' :'}</ListItemText>
                        <ListItemText  className={classes.ListItemText}>{message.text}</ListItemText>
                    </ListItem>
                ))}
            </List>
        )
    }
}

export default withStyles(styles)(MessageList)