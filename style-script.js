var layer1 = document.getElementById("Layer1");
var layer2 = document.getElementById("Layer2");
var layer3 = document.getElementById("Layer3");
var navButton = document.getElementById("nav-drop-button");
var mobileWidth = 768;

var originalNavHTML = document.getElementById("Layer1").innerHTML;
var homeNavHTML = '<li class="navBox"><a href="index.html">Home</a></li>';
var algebraNavHTML = '<li class="navBox"><div class="navHeader moreDrop">Algebra IB</div><ul class="hideNav hiddenNav"><li><a href="grades.html">Grades</a></li><li><a href="http://www.lhs.kennyiams.com/InternetGrades/index.html">Check Grades</a></li><li><a href="alg_assign.html">Assignments</a></li><li><a href="alg_resources.htm">Resources</a></li><li><a href="FilesAlg/01D_Green%20Sheet%20AlgIB.pdf">Course Information</a></li></ul></li>';
var statsNavHTML = '<li class="navBox"><div class="navHeader moreDrop">AP Statistics</div><ul class="hideNav hiddenNav"><li><a href="grades.html">Grades</a></li><li><a href="http://www.lhs.kennyiams.com/InternetGrades/index.html">Check Grades</a></li><li><a href="APStats_assign.htm">Assignments</a></li><li><a href="APStats_resources.htm">Resources</a></li><li><a href="FilesAPStats/01D_Green%20Sheet%20APStats.pdf">Course Information</a></li></ul></li>';
var cahseeNavHTML = '<li class="navBox"><a href="CAHSEE/flashcards_CAHSEE.htm">CAHSEE Guide</a></li>';
var parentResourcesNavHTML = '<li class="navBox"><a href="parent.html">Parent Resources</a></li>';
var emailNavHTML = '<li class="navBox"><a href="mailto:ken_iams@fuhsd.org">E-mail Mr. Iams</a></li>';
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

    var moreDrops = layer1.getElementsByClassName("moreDrop");
    for (var i = 0; i < moreDrops.length; i++) {
      moreDrops[i].addEventListener("click", function() {
        dropMoreDown(this);
      });
    }
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
  if (!layer1.classList.contains("dropdown")) {
    dropMoreAllUp();
  }
}
function dropup() {
  layer1.classList.remove("dropdown");
  dropMoreAllUp();
}

function dropMoreDown(item) {
  var toDrop = item.parentElement.getElementsByClassName("hideNav");
  for (var i = 0; i < toDrop.length; i++) {
    toDrop[i].classList.toggle("hiddenNav");
  }
}
function dropMoreUp(item) {
  var toDrop = item.parentElement.getElementsByClassName("hideNav");
  for (var i = 0; i < toDrop.length; i++) {
    toDrop[i].classList.add("hiddenNav");
  }
}
function dropMoreAllUp() {
  console.log("dropped more all up");
  var moreDrops = layer1.getElementsByClassName("moreDrop");
  for (var i = 0; i < moreDrops.length; i++) {
    dropMoreUp(moreDrops[i]);
  }
}
