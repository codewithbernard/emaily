import React, { Component } from 'react';

export default class DeleteSurveyModal extends Component {
  render() {
    return(
      <div id="deleteSurveyModal" className="modal">
        <div className="modal-content">
          <h4>Delete Survey</h4>
          <p>This survey will be permanently deleted. Are you sure?</p>
        </div>
        <div className="modal-footer">
          <button onClick={this.props.onConfirm} className="modal-action modal-close waves-effect waves-green btn-flat">Delete</button>
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        </div>
      </div>
    );
  }
}
