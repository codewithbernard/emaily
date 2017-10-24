import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  renderLink() {
      if (this.props.authenticated) {
        return(
          <Link to='/surveys' style={{marginTop: 20}} className="waves-effect waves-light btn">
            Let's get started
          </Link>
        );
      } else {
        return(
          <a href='/auth/google' style={{marginTop: 20}} className="waves-effect waves-light btn">
            Log in to get started
          </a>
        );
      }
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <h1>Emaily!</h1>
        Collect feedback from your users
        <br/>
        {this.renderLink()}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth }
}

export default connect(mapStateToProps)(Landing);
