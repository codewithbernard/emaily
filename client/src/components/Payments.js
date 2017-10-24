import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <StripeCheckout
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        ComponentClass={this.props.sideNav ? 'a' : 'div'}
        name="Emaily"
        description="$5 for 5 email credits"
      >
        {this.props.sideNav ? 'Add Credits' : <button className="btn white red-text text-lighten-2">Add Credits</button> }
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
