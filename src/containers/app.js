import React, {Component} from 'react'
import {connect} from 'react-redux';
import {onUserSubmitted} from "../actions/user";
import App from "../components/App.js";

const mapStateToProps = (state) => ({
    currUser: state.userSubmit
});

const mapDispatchToProps = (dispatch) => ({
    userSubmit:(username) => dispatch(onUserSubmitted(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)