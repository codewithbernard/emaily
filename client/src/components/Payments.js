import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
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
        {this.props.sideNav ? ['Add Credits', <i key="AddCredits" className="material-icons left">credit_card</i>] : <button className="btn white red-text text-lighten-2">Add Credits</button> }
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
