import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return(
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return(
    <div>
      <h5>Please confirm your values</h5>
      <div style={{marginBottom: 20}}>
        {reviewFields}
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
        <i className="material-icons left">arrow_back</i>
      </button>
      <button onClick={() => submitSurvey(formValues, history)} type="submit" className="green btn-flat white-text right">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
