// I have access to all electron, node.js, *and* DOM APIs.
const { ipcRenderer: ipc } = require('electron');

console.log('Hey, this is being run in the context of the webview renderer process');

document.addEventListener('DOMContentLoaded', function(event) {
  for(let el of document.querySelectorAll('*')) {
    console.log(el.tagName);
    // send the info to the parent renderer
    // the id of it is conveniently always 1 in this example, but really you'd want
    // a more robust method of getting it
    ipc.sendTo(1, 'elFound', { tagName: el.tagName });
  }
});
