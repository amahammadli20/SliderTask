function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}

function openSection(event, tabName) {
  var tabContent = document.getElementsByClassName("contentText");

  var tabLinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabLinks.length; i++) {
    tabContent[i].classList.remove("active");
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
    document.getElementById(tabName).classList.add("active");
  }

  event.currentTarget.className += " active";

  document.getElementById("next").style.pointerEvents = "initial";
}

function displayCurrentTab(event, tabName) {
  var tabContent = document.getElementsByClassName("contentText");

  for (var i = 0; i < tabContent.length; i++) {
    if (tabContent[i].classList.contains("active")) {
      if (
        tabContent[i].classList.contains("active") &&
        tabContent[i].classList.contains("contentText-5")
      ) {
        nextButton.style.pointerEvents = "none";
      } else {
        nextButton.style.pointerEvents = "initial";
        tabContent[i + 1].classList.add("active");
        tabContent[i].classList.remove("active");
        return;
      }
    }
  }
}

function dispTab() {
  var tablink = document.getElementsByClassName("tablinks");
  for (var j = 0; j < tablink.length; j++) {
    if (tablink[j].classList.contains("active")) {
      if (
        tablink[j].classList.contains("active") &&
        tablink[j].classList.contains("disabled")
      ) {
        nextButton.style.pointerEvents = "none";
      } else {
        nextButton.style.pointerEvents = "initial";
        tablink[j + 1].classList.add("active");
        tablink[j].classList.remove("active");
        return;
      }
    }
  }
}

var nextButton = document.getElementById("next");

nextButton.addEventListener("click", displayCurrentTab);
nextButton.addEventListener("click", dispTab);
