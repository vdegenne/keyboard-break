const { app, BrowserWindow, ipcMain } = require('electron');
const ioHook = require('iohook');
const fs = require('fs');

const keycountFile = '.keycount';

let win;
let keycount;
if (fs.existsSync(keycountFile)) {
  keycount = parseInt(fs.readFileSync(keycountFile));
}
else {
  keycount = 0;
}

app.on('ready', () => {
  win = new BrowserWindow({
    // width: 150,
    // height: 100,
    frame: false,
    transparent: true,
    fullscreen: true,
    alwaysOnTop: true
  });
  win.setIgnoreMouseEvents(true);

  win.on('closed', () => win = null);

  win.loadFile('index.html');
  
  try {

    ioHook.on('keyup', (e) => {
      keycount += 1;
      fs.writeFileSync(keycountFile, keycount);
      /* alert the front end */
      win.webContents.send('keypressed', { keycount, keycode: e.keycode });
    });

    ioHook.start();
  } catch (e) { /* pass ? */ }
});