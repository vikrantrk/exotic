import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import {push} from 'react-router-redux';
import {setSignupModalVisibility} from '../actions/header';
import {setLoginModalVisibility} from '../actions/header';
import {validateUser} from '../actions/header';

class HeaderContainer extends Component {
    render() {
        return (
            <Header properties={this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isSignupModalVisible: state.header.isSignupModalVisible,
        isLoginModalVisible: state.header.isLoginModalVisible,
        formData: state.form
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        goToPage: (path) => dispatch(push(path)),
        setSignupModalVisibility: (isVisible) => dispatch(setSignupModalVisibility(isVisible)),
        setLoginModalVisibility: (isVisible) => dispatch(setLoginModalVisibility(isVisible)),
        validateUser: (data) => dispatch(validateUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);