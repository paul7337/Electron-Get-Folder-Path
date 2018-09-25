const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path') 
const {ipcMain} = require('electron')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

ipcMain.on('openFolder', (event, path) => { 
   const {dialog} = require('electron') 

    dialog.showOpenDialog(win, {
      properties: ['openDirectory']
    }, 
      paths => respondWithPath(paths)
    );

  function respondWithPath(paths) {
    event.sender.send('folderData', paths) 
  }
})  
app.on('ready', createWindow)