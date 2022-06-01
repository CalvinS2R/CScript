const error = require("./error.js");
var browser = window.navigater;
var ua = userAgent;
var browserName = appName;
var electron = Electron;

var BrowserWindow = window.open;

if(!window) throw new RuntimeError("CScript requires a window, Quiting");

function Electron() {}
