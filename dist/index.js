'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "\n.styles_btn_cta_primary__LaEMa, .styles_btn_cta_primary__LaEMa:hover {\n  background: #00c8b0 !important;\n  border: 2px solid #00c8b0 !important;\n  color: black !important;\n  padding: 8px 25px;\n  font-size: 16px;\n  margin: 6px 5px 6px 5px !important;\n  font-weight: 600;\n  text-align: center;\n  display: inline-block;\n  border-radius: 3px;\n  line-height: 25px;\n  margin-bottom: 20px;\n  -webkit-border-radius: 50px !important;\n  -moz-border-radius: 50px !important;\n  -ms-border-radius: 50px !important;\n  -o-border-radius: 50px !important;\n  outline: none !important;\n}\n\n.styles_textarea_style__3SGDE {\n  width: 58% !important;\n  margin: 20px auto 0px;\n}\n\n.styles_textarea_button_color__1B4HC {\n  color: #ccc !important;\n}\n";
var styles = { "btn_cta_primary": "styles_btn_cta_primary__LaEMa", "textarea_style": "styles_textarea_style__3SGDE", "textarea_button_color": "styles_textarea_button_color__1B4HC" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint-disable jsx-quotes, semi */
/* global jQuery */

var ConfirmPromiseModal = function (_React$Component) {
  inherits(ConfirmPromiseModal, _React$Component);

  function ConfirmPromiseModal(props) {
    classCallCheck(this, ConfirmPromiseModal);

    var _this = possibleConstructorReturn(this, (ConfirmPromiseModal.__proto__ || Object.getPrototypeOf(ConfirmPromiseModal)).call(this, props));

    _this.state = {
      promiseInfo: {},
      text: ''
    };
    _this.modalId = props.modalId || 'modalId';
    _this.labelId = props.labelId || 'labelId';
    _this.textId = 'text-' + _this.modalId;
    _this.hide = _this.hide.bind(_this);
    _this.show = _this.show.bind(_this);
    _this.getHeaderContent = _this.getHeaderContent.bind(_this);
    _this.getBodyContent = _this.getBodyContent.bind(_this);
    _this.getFooterContent = _this.getFooterContent.bind(_this);
    return _this;
  }

  createClass(ConfirmPromiseModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // mount ref so parent can call methods
      this.props.onRef(this);
    }
  }, {
    key: 'show',
    value: function show() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.setState({
          promiseInfo: {
            resolve: resolve,
            reject: reject
          }
        });
        jQuery('#' + _this2.modalId).modal('show');
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (this.props.showTextArea) {
        document.getElementById(this.textId).value = '';
      }
      jQuery('#' + this.modalId).modal('hide');
    }
  }, {
    key: 'getHeaderContent',
    value: function getHeaderContent() {
      return React.createElement(
        'div',
        { className: 'modal-header' },
        React.createElement(
          'button',
          { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
          React.createElement(
            'span',
            { 'aria-hidden': 'true' },
            React.createElement(
              'svg',
              { focusable: 'false', height: '24px', viewBox: '0 0 24 24', width: '24px', xmlns: 'http://www.w3.org/2000/svg' },
              React.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' }),
              React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
            )
          )
        ),
        React.createElement(
          'h4',
          { className: 'modal-title w-100 text-left', id: this.labelId },
          this.props.title
        )
      );
    }
  }, {
    key: 'getBodyContent',
    value: function getBodyContent() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'modal-body' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'modal-form-wrap text-center' },
            React.createElement(
              'div',
              { className: 'modal-delete-msg' },
              this.props.render()
            ),
            this.props.showTextArea ? React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('textarea', {
                className: 'form-control textarea-controls ' + styles.textarea_style,
                id: this.textId,
                placeholder: 'Your message here',
                onChange: function onChange(e) {
                  return _this3.setState({ text: e.target.value });
                }
              })
            ) : null
          )
        )
      );
    }
  }, {
    key: 'getFooterContent',
    value: function getFooterContent() {
      var _this4 = this;

      var isDisabled = this.props.showTextArea && this.state.text.length === 0;
      var _state$promiseInfo = this.state.promiseInfo,
          _state$promiseInfo$re = _state$promiseInfo.resolve,
          resolve = _state$promiseInfo$re === undefined ? function () {} : _state$promiseInfo$re,
          _state$promiseInfo$re2 = _state$promiseInfo.reject,
          reject = _state$promiseInfo$re2 === undefined ? function () {} : _state$promiseInfo$re2;

      this.resolve = resolve.bind(this);
      this.reject = reject.bind(this); // use to throw error to promise
      return React.createElement(
        'div',
        { className: 'delete-modal-ft', style: { marginBottom: '20px', textAlign: 'center' } },
        React.createElement(
          'button',
          {
            onClick: function onClick() {
              var txt = _this4.state.text !== '' ? _this4.state.text : true;_this4.setState({ text: '' });_this4.resolve(txt);_this4.hide();
            },
            disabled: isDisabled,
            type: 'button',
            className: styles.btn_cta_primary + ' delete-btn ' + (isDisabled && styles.textarea_button_color),
            'data-dismiss': 'modal',
            'aria-label': 'Close' },
          this.props.yesButton
        ),
        React.createElement(
          'button',
          { type: 'button', onClick: function onClick() {
              _this4.resolve(false);_this4.hide();
            }, className: styles.btn_cta_primary + ' cancel-btn', 'data-dismiss': 'modal', 'aria-label': 'Close' },
          this.props.noButton
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'modal fade', id: this.modalId, tabIndex: '-1', role: 'dialog', 'aria-labelledby': this.labelId, 'aria-hidden': 'true' },
        React.createElement(
          'div',
          { className: 'modal-dialog' },
          React.createElement(
            'div',
            { className: 'modal-content' },
            this.getHeaderContent(),
            this.getBodyContent(),
            this.getFooterContent()
          )
        )
      );
    }
  }]);
  return ConfirmPromiseModal;
}(React.Component);


ConfirmPromiseModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
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

module.exports = ConfirmPromiseModal;
//# sourceMappingURL=index.js.map
