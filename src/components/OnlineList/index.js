import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './styles'

class OnlineList extends Component {
    renderListItems(name, id, status) {
        const itemStyle = {};
        return (
            <ListItem>
                {/*<div className={status === 'online' ?*/}
                    {/*this.props.classes.online*/}
                    {/*: this.props.classes.offline}>*/}
                {/*</div>*/}
                {status === 'online' ? <i className={`fas fa-user ${this.props.classes.online}`}/>:
                    <i className={`fas fa-user ${this.props.classes.offline}`} />}
                <ListItemText className={this.props.classes.itemText}>{name}{' '}</ListItemText>
                {' '}
            </ListItem>
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <List className={classes.listContainer}>
                {this.props.users && this.props.users.map((user, index) => {
                    if (user.id === this.props.currentUser.id) {
                        return this.renderListItems(
                            `${user.name} (You)`,
                            user.id,
                            user.presence.state
                        )
                    }
                    return this.renderListItems(user.name, user.id, user.presence.state)
                })}
            </List>
        )
    }
}

export default withStyles(styles)(OnlineList)