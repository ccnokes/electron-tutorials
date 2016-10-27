const { app, BrowserWindow, dialog, ipcMain: ipc } = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

  ipc.on('show-dialog', (event, {type}) => {
    dialog.showMessageBox(mainWindow, {
      type: type,
      buttons: [],
      message: 'Hello, how are you?'
    });
  });
});
