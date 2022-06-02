const error = require("./error.js");
var browser = window.navigater;
var ua = userAgent;
var browserName = appName;
var electron = Electron;

var BrowserWindow = window.open;

if(!window) throw new RuntimeError("CScript requires a window, Quiting");

function Electron() {
  if(!BrowserWindow) {
    BrowserWindow("file:///C:\Windows\CSMedia\CScript\electronerrorv1.dll\electronerror.html","blank","width:",300,"height:",300,"toolbar","false");
  } else {
    return BrowserWindow;
  }
}
