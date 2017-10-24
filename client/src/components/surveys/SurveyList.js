import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

import DeleteSurveyModal from './DeleteSurveyModal';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length) {
      return this.props.surveys.reverse().map(survey => {
        return(
          <div key={survey.id} className="card red lighten-5" style={{marginBottom: 30}}>
            <a className="btn-floating halfway-fab waves-effect waves-light red modal-trigger" href="#deleteSurveyModal"><i className="material-icons">delete</i></a>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</p>
            </div>
            <div className="card-action">
              <a className="red-text text-lighten-1">Yes: {survey.yes}</a>
              <a className="red-text text-lighten-1">No: {survey.no}</a>
            </div>
          </div>
        );
      });
    } else {
      return(
        <div style={{textAlign: 'center'}}>
          <h3>You didn't create any survey yet</h3>
          Start with clicking on add button on the right bottom of the screen
        </div>
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderSurveys()}
        <DeleteSurveyModal />
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys
  }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
