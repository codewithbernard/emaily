import React, { Component } from 'react';

class DeleteSurveyModal extends Component {
  render() {
    return(
      <div id="deleteSurveyModal" className="modal">
        <div className="modal-content">
          <h4>Delete Survey</h4>
          <p>This survey will be permanently deleted. Are you sure?</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Delete</a>
        </div>
      </div>
    );
  }
}
