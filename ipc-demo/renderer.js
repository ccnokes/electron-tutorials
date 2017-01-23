require('devtron').install();
const { ipcRenderer, remote } = require('electron');


// IPC
document.querySelector('#sendMsgMain').addEventListener('click', () => {
  ipcRenderer.send('sendMainMessage', {
    greeting: 'Hello'
  });
});

ipcRenderer.on('sendRendererMessage', (event, props) => {
  console.log({event, props});
});


// REMOTE
document.querySelector('#openDialog').addEventListener('click', () => {
  remote.require('./show-dialog').showDialog('Konnichiwa');
  // we could also do it directly here like so:
  // remote.dialog.showMessageBox({
  //   type: 'info',
  //   title: 'Greetings',
  //   message: `Konnichiwa!`
  // });
});




// CPU INTENSIVE
document.querySelector('#doBlockingWork').addEventListener('click', () => {
  ipcRenderer.send('doBlockingWork');
});

document.querySelector('#doNonBlockingWork').addEventListener('click', () => {
  const nonBlockingWork = require('./non-blocking-work');
  nonBlockingWork();
});
