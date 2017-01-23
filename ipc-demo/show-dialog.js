// dialog can only be directly run in the main process
// if we're in the renderer, we can interact with it normally using `remote`
const dialog = require('electron').dialog || require('electron').remote.dialog;

function showDialog(greeting) {
  dialog.showMessageBox({
    type: 'info',
    title: 'Greetings',
    message: `${greeting}!`,
    buttons: []
  });
}

module.exports = { showDialog };
