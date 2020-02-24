/* eslint-disable jsx-quotes, semi */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css'
/* global jQuery */

export default class ConfirmPromiseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promiseInfo: {},
      text: ''
    };
    this.modalId = props.modalId || 'modalId';
    this.labelId = props.labelId || 'labelId';
    this.textId = `text-${this.modalId}`;
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.getHeaderContent = this.getHeaderContent.bind(this);
    this.getBodyContent = this.getBodyContent.bind(this);
    this.getFooterContent = this.getFooterContent.bind(this);
  }
  componentWillMount() {
    // mount ref so parent can call methods
    this.props.onRef(this);
  }
  show() {
    return new Promise((resolve, reject) => {
      this.setState({
        promiseInfo: {
          resolve,
          reject
        }
      })
      jQuery(`#${this.modalId}`).modal('show');
    });
  }
  hide() {
    if (this.props.showTextArea) {
      document.getElementById(this.textId).value = '';
    }
    jQuery(`#${this.modalId}`).modal('hide');
  }
  getHeaderContent() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">
            <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </span>
        </button>
        <h4 className="modal-title w-100 text-left" id={this.labelId}>{this.props.title}</h4>
      </div>
    );
  }
  getBodyContent() {
    return (
      <div className="modal-body">
        <div className="row">
          <div className="modal-form-wrap text-center">
            <p className="modal-delete-msg">
              <span>{this.props.message}</span>
            </p>
            {this.props.showTextArea
              ? <div className="form-group">
                <textarea
                  className={`form-control textarea-controls ${styles.textarea_style}`}
                  id={this.textId}
                  placeholder="Your message here"
                  onChange={e => this.setState({ text: e.target.value })}
                />
              </div> : null}
          </div>
        </div>
      </div>
    );
  }
  getFooterContent() {
    const isDisabled = this.props.showTextArea && this.state.text.length === 0;
    const { resolve = () => {}, reject = () => {} } = this.state.promiseInfo;
    this.resolve = resolve.bind(this);
    this.reject = reject.bind(this); // use to throw error to promise
    return (
      <div className="delete-modal-ft" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <button
          onClick={() => { const txt = this.state.text !== '' ? this.state.text : true; this.setState({ text: '' }); this.resolve(txt); this.hide(); }}
          disabled={isDisabled}
          type="button"
          className={`${styles.btn_cta_primary} delete-btn ${isDisabled && styles.textarea_button_color}`}
          data-dismiss="modal"
          aria-label="Close">
          {this.props.yesButton}
        </button>
        <button type="button" onClick={() => { this.resolve(false); this.hide(); }} className={`${styles.btn_cta_primary} cancel-btn`} data-dismiss="modal" aria-label="Close">
          {this.props.noButton}
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className="modal fade" id={this.modalId} tabIndex="-1" role="dialog" aria-labelledby={this.labelId} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {this.getHeaderContent()}
            {this.getBodyContent()}
            {this.getFooterContent()}
          </div>
        </div>
      </div>
    );
  }
}

ConfirmPromiseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onRef: PropTypes.func.isRequired,
  yesButton: PropTypes.string,
  noButton: PropTypes.string,
  showTextArea: PropTypes.bool,
  title: PropTypes.string
};

ConfirmPromiseModal.defaultProps = {
  showTextArea: false,
  yesButton: 'Confirm',
  noButton: 'Cancel',
  title: 'Notice'
};
