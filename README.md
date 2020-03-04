## Thanks for visiting

A react customizable modal that can be used to capture a user's response to the modal. Include prompt for text response. Easy integration. Uses Bootstrap 3. 

[Demo](https://calabashlabsllc.github.io/react-simple-promise-modal/)

[![NPM](https://img.shields.io/npm/v/react-simple-promise-modal.svg)](https://www.npmjs.com/package/react-simple-promise-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save react-simple-promise-modal
```

### Usage
```
this.confirmModalRef.show()
  .then((result) => {
    console.log('resolve:'+JSON.stringify(result));
  })
  .catch((err) => {
    console.log('reject:'+JSON.stringify(err));
  });
```

For more details, check out the API below.

### Component API

`<ConfirmPromiseModal>` component:

Property | Type | Default | Required | Description
-------- | ---- | ------- | -------- |-----------
modalId | `String` | n/a | yes | Unique id for modal
labelId | `String` | n/a | yes | Unique id for modal title
render | `Function` | n/a | yes | Main message on modal
onRef | `Function` | n/a | yes | Used to mount for parent usage
yesButton | `String` | 'Confirm' | no | Text on confirm button
noButton | `String` | 'Cancel' | no | Text on cancel button
showTextArea | `Boolean` | false | no | Show textarea input
title | `String` | 'Notice' | no | Title on modal

Render prop example (String or Component):
```
render={typeof this.state.modalMsg === 'string' ? () => <span>{this.state.modalMsg}</span> : () => this.state.modalMsg}
```

### Note
Bootstrap 4 uses possibly will have to hard code any modal styling differences.

### Support or Contact

Any questions? Check out our [documentation](https://github.com/CalabashLabsLLC/react-simple-promise-modal/blob/master/README.md) or [contact support](https://www.calabashlabs.com/contact) and we’ll help you sort it out.

### License

MIT © [calabashlabsllc](https://github.com/calabashlabsllc)
