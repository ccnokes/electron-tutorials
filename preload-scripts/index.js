const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow; //do this so that the window object doesn't get GC'd

// can't create a BrowserWindow until `ready` is fired
app.on('ready', function() {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));
  mainWindow.webContents.openDevTools();
});
