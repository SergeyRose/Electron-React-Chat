import React, {Component} from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "./styles";

class UserForm extends Component {
    state = {
        username: '',
        errors: {},
        errorMsg: null
    };
    handleChange = () => e => {
        return this.setState({
            username: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        let errors = {};
        let username = this.state.username;
        this.setState({errors, errorsMsg: null});

        if (username === '') {
            errors = Object.assign({}, errors, {value: true});
            this.setState({errors, errorsMsg: 'This fields are required!'})
        }

        if (Object.keys(errors).length > 0) return null;

        return this.props.onHandleSubmit(username)

    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.userForm}>
                <Typography variant="display3" align="center" className={classes.title}>Welcome</Typography>
                <form onSubmit={this.handleSubmit}>
                    <div >
                    <FormControl
                        className={classes.textField}
                        error={this.state.errors.username && true}
                        aria-describedby="name-error-text"
                    >
                        <InputLabel className={classes.inputLabel}>Your Login</InputLabel>
                        <Input className={classes.input} type='text' required={true} value={this.state.username}
                               onChange={this.handleChange()}/>
                        {this.state.errors.username &&
                        <FormHelperText
                            id="name-error-text">{this.state.errorMsg}</FormHelperText>}
                    </FormControl>
                    <Button variant="contained" type='submit' color="primary" className={classes.button}>
                        OK
                    </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(UserForm)