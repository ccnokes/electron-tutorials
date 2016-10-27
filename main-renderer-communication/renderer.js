const { ipcRenderer: ipc, remote } = require('electron');
require('devtron').install();

document.querySelector('#btn').addEventListener('click', () => {
  ipc.send('show-dialog', {
    type: 'info'
  });
});

document.querySelector('#btn2').addEventListener('click', () => {
  remote.dialog.showMessageBox(remote.getCurrentWindow(), {
    type: 'info',
    buttons: [],
    message: 'Hello, how are you?'
  });
});
