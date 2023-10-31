
function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) {
        requestMethod.call(element); // Simple fullscreen toggle
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}"); // Send fullscreen keys. (Only in IE)
        }
    }
}

var video = document.getElementById("jumpscare");
function jumpscare() {
var elem = document.body; // Get body HTML element
requestFullScreen(elem); // Go fullscreen
var jumpscare = document.getElementById("jumpscare"); // Get jumpscare image (as HTML)
jumpscare.style.visibility="visible";
  video.play(); 
  

}