exports.initTarget = () => {
  let win = new BrowserWindow({
    width: 400,
    height: 200,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname, '../assets/img/btc.png')
  })

  // Listen for close of popup
  win.on('close', function() { win = null })

  // Get html view
  win.loadURL(path.join('file://', __dirname, 'target.html'))
  win.show()
}