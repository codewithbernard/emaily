import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/auth/google');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/auth/google');
      }
    }

    render() {
      return <ComposedComponent {...this.props } />
    }
  }

  function mapStateToProps(state) {
    if (state.auth) {
      return { authenticated: true }
    }
      return { authenticated: false }
  }

  return connect(mapStateToProps)(Authentication);
}
