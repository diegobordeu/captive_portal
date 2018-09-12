var parser = new UAParser();
var uastring = navigator.userAgent || navigator.vendor || window.opera;
parser.setUA(uastring);

var result = parser.getResult();
// this will also produce the same result (without instantiation):
// var result = UAParser(uastring);
function execute() {
  //console.log(result.browser.major, 'browser major');
  document.getElementById("a1").innerHTML = result.browser.major; // {name: "Chromium", version: "15.0.874.106"}
  //console.log(result.browser.name, 'browser name');
  document.getElementById("a2").innerHTML = result.browser.name;
  //console.log(result.browser.version, 'browser version');
  document.getElementById("a3").innerHTML = result.browser.version;
  //console.log(result.device.model, 'device model');
  document.getElementById("a4").innerHTML = result.device.model;
  //console.log(result.device.type, 'device type');
  document.getElementById("a5").innerHTML = result.device.type;
  //console.log(result.device.vendor, 'device vendr');     // {model: undefined, type: undefined, vendor: undefined}
  document.getElementById("a6").innerHTML = result.device.vendor;
  //console.log(result.os.version, 'Version');     // "11.10"
  document.getElementById("a7").innerHTML = result.os.version;
  //console.log(result.engine.name, 'engine');    // "WebKit"
  document.getElementById("a8").innerHTML = result.engine.name;
  //console.log(result.cpu.architecture, 'cpu arqui');   // "amd64"
  document.getElementById("a9").innerHTML = result.cpu.architecture;

  if (!isProbematicPhone() && false) {
    console.log('redirecting');
    redirect();
  } else {
    enableProblematicPhones();
  }
}

function isProbematicPhone() { //// TODO: ESPECICICAR LA SEGUNDA CONDICION (EJ: CELULAR DEL SHAG0)
  if (result.browser.name.includes("WebView")) {
    if( Number(result.os.version.split('.')[0]) <= 7){
      return true;
    } else {
      return false
    }
  } else {
    return false;
  }
}

function redirect() {
  setTimeout(function() {
    window.location = 'http://accstage.herokuapp.com/welcome/places/1/render?filename=index.html&is_initial=true&person=T-$(mac-esc)&burl=$(link-login-only)';
  }, 1);
  setTimeout(function() {
    window.location.replace("http://accstage.herokuapp.com/welcome/places/1/render?filename=index.html&is_initial=true&person=T-$(mac-esc)&burl=$(link-login-only)");
  }, 4000);
  setTimeout(function() {
    window.location.assign("http://accstage.herokuapp.com/welcome/places/1/render?filename=index.html&is_initial=true&person=T-$(mac-esc)&burl=$(link-login-only)");
  }, 7000);
  setTimeout(function() {
    window.location.href = "http://accstage.herokuapp.com/welcome/places/1/render?filename=index.html&is_initial=true&person=T-$(mac-esc)&burl=$(link-login-only)";
  }, 10000);
}

function enableProblematicPhones() {
  document.getElementById("problematic-phones").style.display = "";
}



var clipboard = new ClipboardJS('#copy_button');
clipboard.on('success', function(e) {
  console.log(e);
});
clipboard.on('error', function(e) {
  console.log(e);
});
