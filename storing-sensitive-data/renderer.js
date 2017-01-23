const { remote } = require('electron');
// use `remote` require so that it's run in the context of the main process
// this makes it so that the application listed Access Control List is our main app, not `MyApp Helper`
// this isn't 100% necessary and probably somewhat of a personal preference
const keytar = remote.require('keytar');

const getBtn = document.querySelector('#getBtn');
const setBtn = document.querySelector('#setBtn');
const secretValEl = document.querySelector('#secretVal');
const output = document.querySelector('#output');


getBtn.addEventListener('click', () => {
  // Params are: service name, account name. Both are arbitrary
  const secret = keytar.getPassword('KeytarTest', 'AccountName');
  output.innerText = secret || 'Nothing set';
});

setBtn.addEventListener('click', () => {
  const secret = secretValEl.value;
  keytar.replacePassword('KeytarTest', 'AccountName', secret);
});
