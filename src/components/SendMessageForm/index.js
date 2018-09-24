import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './styles'


class SendMessageForm extends Component {
    state = {
        text: ''
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.onSend(this.state.text);
        this.setState({text: ''})
    };
    onChange = e => {
        this.setState({text: e.target.value});
        if (this.props.onChange) {
            this.props.onChange()
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        label='Message'
                        value={this.state.text}
                        onChange={this.onChange}
                        className={classes.input}
                    />
                    <Button className={classes.button} variant="contained" color="primary" type='submit'>Send</Button>
                </form>
            </div>
        )
    }

}

export default withStyles(styles)(SendMessageForm)