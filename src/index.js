const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer

const { notify } = require('./notification')
const { formatEUR } = require('./utils')
const { initTarget } = require('./target-init')
const { getBTC } = require('./api')

const refreshInterval = 30

// Global state :P
let target



// Application State

// Initializing application
const init = () => {
  getBTC(handlePrice)
  setInterval(() => getBTC(handlePrice), refreshInterval * 1000)
}

// Updating current price
const handlePrice = price => {
  showPrice(price)
  notify({ price, target }, window)
}

// Updating target value
const updateTarget = val => {
  target = Number(val)
  showTarget(val)
}



// DOM Management

// Opening settings
const settingsBtn = document.querySelector('#settingsBtn')
settingsBtn.addEventListener('click', initTarget)

// Updating current price
const price = document.querySelector('h1')
const showPrice = p => price.innerHTML = formatEUR(p)

// Updating target price
const targetPrice = document.querySelector('#targetPrice')
const showTarget = p => targetPrice.innerHTML = formatEUR(p)



// Inter-Process Communication

// New target value
ipc.on('targetPriceVal', (_, arg) => updateTarget(arg))



// Initialize

init()