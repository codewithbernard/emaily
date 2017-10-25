import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import $ from 'jquery';

import DeleteSurveyModal from './DeleteSurveyModal';

class SurveyList extends Component {
  state = { deleteSurveyId: null };

  componentDidMount() {
    this.props.fetchSurveys();
    $('#deleteSurveyModal').modal();
  }

  deleteSurvey() {
    this.props.deleteSurvey(this.state.deleteSurveyId);
  }

  renderSurveys() {
    if (this.props.surveys.length) {
      return this.props.surveys.map(survey => {
        return(
          <div key={survey._id} className="card red lighten-5" style={{marginBottom: 30}}>
            <button onClick={() => this.setState({deleteSurveyId: survey._id})} className="btn-floating halfway-fab waves-effect waves-light red modal-trigger" data-target="deleteSurveyModal"><i className="material-icons">delete</i></button>
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
        <DeleteSurveyModal onConfirm={this.deleteSurvey.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys
  }
}

export default connect(mapStateToProps, actions)(SurveyList);
