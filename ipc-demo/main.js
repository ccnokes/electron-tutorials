const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { showDialog } = require('./show-dialog');
let mainWindow;

app.on('ready', () => {

  let mainWindow = new BrowserWindow({
    height: 1400,
    width: 1000,
    title: 'Renderer Process'
  });

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));
  mainWindow.openDevTools({mode: 'bottom'});




  ipcMain.on('sendMainMessage', (event, props) => {
    showDialog(props.greeting);

    // sending a message back is a little different
    mainWindow.webContents.send('sendRendererMessage', { result: true });
  });



  ipcMain.on('doBlockingWork', () => {
    const work = require('./work');
    work();
  });

});
