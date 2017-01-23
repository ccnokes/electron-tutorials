const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
});
