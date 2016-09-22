const { app, BrowserWindow } = require('electron');
const path = require('path');
const Store = require('./store.js');
let mainWindow; //do this so that the window object doesn't get GC'd

// initialize the store
const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 800,
      height: 600 ,
      x: 0,
      y: 0
    }
  }
});

// can't create a BrowserWindow until `ready` is fired
app.on('ready', function() {
  mainWindow = new BrowserWindow(store.get('windowBounds'));

  function saveWindowBounds() {
    store.set('windowBounds', mainWindow.getBounds());
  }

  // listen to `resize` and `move` and save the settings
  mainWindow.on('resize', saveWindowBounds);
  mainWindow.on('move', saveWindowBounds);

  mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));
});
