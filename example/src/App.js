import React, { Component } from 'react';
import ConfirmPromiseModal from 'react-simple-promise-modal';
import logo from './cllogo.svg';
import github from './github.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

window.jQuery = $;
require('bootstrap');


const ACTION = {
  IMG: {
    DESC: 'image',
    MSG: 'Do you want to show an icon on the button?',
    CONFIRM: 'Yes',
    CANCEL: 'No'
  },
  COLOR: {
    DESC: 'color',
    MSG: 'Do you want to swap the colors on the button?',
    CONFIRM: 'Yes',
    CANCEL: 'No'
  },
  TEXTAREA: {
    DESC: 'textarea',
    MSG: 'Please give necessary feedback below?',
    CONFIRM: 'Submit',
    CANCEL: 'Cancel'
  },
  DEFAULT: {
    DESC: 'default',
    MSG: 'Are you sure you want to perform this action?',
    CONFIRM: 'Yes',
    CANCEL: 'No'
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showImage: false,
      buttonMsg: ACTION.DEFAULT.MSG,
      yesButton: ACTION.DEFAULT.CONFIRM,
      noButton: ACTION.DEFAULT.CANCEL,
      showTextArea: false,
      colorChanged: false
    };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.getModalMessage = this.handleConfirm.bind(this);
  }
  handleConfirm(status) {
    switch (status) {
      case ACTION.IMG.DESC:
        this.setState({ buttonMsg: ACTION.IMG.MSG, yesButton: ACTION.IMG.CONFIRM, noButton: ACTION.IMG.CANCEL, showTextArea: false }, () =>
          this.confirmModalRef.show()
          .then((result) => {
            // result from modal will defaultly return a boolean
            this.setState({ showImage: result });
          })
        );
        break;
      case ACTION.COLOR.DESC:
        this.setState({ buttonMsg: ACTION.COLOR.MSG, yesButton: ACTION.COLOR.CONFIRM, noButton: ACTION.COLOR.CANCEL, showTextArea: false }, () =>
          this.confirmModalRef.show()
          .then((result) => {
            this.setState({ colorChanged: result });
          })
        );
        break;
      case ACTION.TEXTAREA.DESC:
        this.setState({ buttonMsg: ACTION.TEXTAREA.MSG, yesButton: ACTION.TEXTAREA.CONFIRM, noButton: ACTION.TEXTAREA.CANCEL, showTextArea: true }, () =>
          this.confirmModalRef.show()
          .then((result) => {
            // console.log('result from modal:' + result);
            if (result) {
              alert(`Text returned: ${result}`);
            }
          })
          .catch((err) => {
            // console.error('Error received:', err);
          })
        );
        break;
      default:
        break;
    }
  }
  render() {
    const keyIndex = 'exmaple';
    return (
      <div>
        <div className="header-top">
          <img src={logo} width="115px" alt="Calabash Labs Logo" />
          <a href="https://calabashlabsllc.github.io/react-simple-promise-modal/"><img src={github} className="pull-right" alt="Github Logo" /></a>
        </div>
        <div className="header"></div>
        <div className="button-row">
          <button className="demo-button" onClick={() => this.handleConfirm(ACTION.IMG.DESC)}>Show Icon {this.state.showImage ? <span className="glyphicon glyphicon-leaf" /> : null}</button>
        </div>
        <div className="button-row">
          <button className="demo-button" onClick={() => this.handleConfirm(ACTION.TEXTAREA.DESC)}>Enter Some Text</button>
        </div>
        <div className="button-row">
          <button className={`demo-button ${this.state.colorChanged ? 'changed-color' : 'normal-color'}`} onClick={() => this.handleConfirm(ACTION.COLOR.DESC)}>Button Color Exchange</button>
        </div>
        <ConfirmPromiseModal
          onRef={ref => (this.confirmModalRef = ref)}
          modalId={`action-${keyIndex}`}
          labelId={`label-${keyIndex}`}
          yesButton={this.state.yesButton}
          noButton={this.state.noButton}
          message={this.state.buttonMsg}
          showTextArea={this.state.showTextArea}
        />
      </div>
    );
  }
}


export default App;
