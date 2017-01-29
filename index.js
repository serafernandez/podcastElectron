var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
var path = require('path');
var url = require('url');

var win;
function createWindow(){
    win = new BrowserWindow({
        width: 800,
        heigth: 600
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin')
        app.quit();
});

app.on('activate', function(){
    if(win===null)
        createWindow();
});
