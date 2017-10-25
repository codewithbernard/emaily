import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Payments from './Payments';

class Header extends Component {
    componentDidMount() {
      $('.button-collapse').sideNav();
    }

    renderContent() {
      switch(this.props.auth) {
        case null:
          return;
        case false:
          return <li><a href="/auth/google">Login With Google</a></li>;
        default:
          return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
            <li key="2"><a href="/api/logout">Logout</a></li>
          ];
      }
    }

    renderSideNav() {
      switch(this.props.auth) {
        case null:
          return;
        case false:
          return <li><a href="/auth/google">Login With Google <i className="material-icons left">forward</i></a></li>;
        default:
          return [
            <li key="1"><Payments sideNav /></li>,
            <li key="3"><a>Credits: {this.props.auth.credits} <i className="material-icons left">attach_money</i></a></li>,
            <li key="2"><a href="/api/logout">Logout <i className="material-icons left">exit_to_app</i></a></li>
          ];
      }
    }

    render() {
      return(
          <nav style={{marginBottom: 20}}>
            <div className="nav-wrapper">
              <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo" style={{marginLeft: 10}}><i className="large material-icons">email</i>Emaily</Link>
              <a href="#" data-activates="mobileContent" className="right button-collapse"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
              <ul className="side-nav" id="mobileContent">
                {this.renderSideNav()}
              </ul>
            </div>
          </nav>
      );
    }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
