const electron = require('electron')
const remote = electron.remote
const ipc = electron.ipcRenderer

// Event handlers

// Closing window
const closeMe = () => {
  const win = remote.getCurrentWindow()
  win.close()
}

// Updating target value
const updateValue = () => {
  ipc.send('update-notify-value', document.querySelector('#notifyVal').value)
  closeMe()
}



// DOM Management

// Closing self
const closeBtn = document.querySelector('#closeBtn')
closeBtn.addEventListener('click', closeMe)

// Updating value
const updateBtn = document.querySelector('#updateBtn')
updateBtn.addEventListener('click', updateValue)