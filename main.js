const { app, BrowserWindow } = require('electron')

function createWindow() {

  win = new BrowserWindow({ width: 800, height: 600})
  //win.setMenu(null);

  win.loadFile('index.html')

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

}

app.on('ready', createWindow)