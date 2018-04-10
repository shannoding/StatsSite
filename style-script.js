var layer1 = document.getElementById("Layer1");
var layer2 = document.getElementById("Layer2");
var layer3 = document.getElementById("Layer3");
var navButton = document.getElementById("nav-drop-button");
var mobileWidth = 768;

var originalNavHTML = document.getElementById("Layer1").innerHTML;
var homeNavHTML = '<li class="navBox">Home</li>';
var algebraNavHTML = '<li class="navBox"><span class="navHeader">Algebra IB</span><ul class="hiddenNav"><li>Grades<ul><li>Check Grades</li></ul></li><li>Assignments</li><li>Resources</li><li>Course Information</li></ul></li>';
var statsNavHTML = '<li class="navBox"><span class="navHeader">AP Statistics</span><ul class="hiddenNav"><li>Grades<ul><li>Check Grades</li></ul></li><li>Assignments</li><li>Resources</li><li>Course Information</li></ul></li>';
var cahseeNavHTML = '<li class="navBox">CAHSEE Guide</li>';
var parentResourcesNavHTML = '<li class="navBox">Parent Resources</li>';
var emailNavHTML = '<li class="navBox">E-mail Mr. Iams</li>';
var navHTML = '<div id="nav"><ul>' + homeNavHTML + algebraNavHTML + statsNavHTML + cahseeNavHTML + parentResourcesNavHTML + emailNavHTML + '</ul></div>';
console.log(navHTML);
var navButtonHTML = '<div id="nav-drop-button"><span></span><span></span><span></span></div>';
var mobile = false;

init();

function init() {
  document.querySelector("head").innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1">';
  window.addEventListener("resize", updateNav);
  if (window.innerWidth < mobileWidth) {
    updateNav();
  }
}
function updateNav() {
  if (window.innerWidth < mobileWidth) {
    if (!mobile) {
      console.log("switched to mobile");
      layer1.innerHTML = navHTML;
      layer3.innerHTML += navButtonHTML;
      navButton = document.getElementById("nav-drop-button");
      navButton.addEventListener("click", dropdown);
    }
    mobile = true;
  }
  else {
    if (mobile) {
      console.log("switched to desktop");
      navButton.removeEventListener("click", dropdown);
      dropup();
      layer1.innerHTML = originalNavHTML;
      layer3.removeChild(layer3.lastChild);
    }
    mobile = false;
  }
}


function dropdown() {
  layer1.classList.toggle("dropdown");
}
function dropup() {
  layer1.classList.remove("dropdown");
}
