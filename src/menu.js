const { Menu, shell } = require('electron')

exports.menu = app => {
  const m = Menu.buildFromTemplate([
    {
      label: 'Main',
      submenu: [
        {
          label: 'Adjust Notification Value'
        },
        {
          label: 'CoinMarketCap',
          click() {
            shell.openExternal('http://coinmarketcap.com')
          }
        },
        { type: 'separator' },
        {
          label: 'Quit',
          click() {
            app.quit()
          },
          accelerator: 'Cmd+Q'
        }
      ]
    }
  ])

  Menu.setApplicationMenu(m)
}