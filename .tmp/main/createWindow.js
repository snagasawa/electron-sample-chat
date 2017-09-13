'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _electron = require('electron');

var win = void 0;
function createWindow() {
    win = new _electron.BrowserWindow();
    win.loadURL('file://' + __dirname + '/../../index.html');
    win.on('close', function () {
        win = null;
    });
}

exports.default = createWindow;