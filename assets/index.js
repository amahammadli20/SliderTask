function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function openSection(event, tabName) {
    var tabContent = document.getElementsByClassName("contentText");
    for(var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    var tabLinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabLinks.length; i++) {
        // string.replace(originalstr,newstr)  
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }


  // function displayCurrentTab(event, tabName){
  //   var tabContent = document.getElementsByClassName("contentText");
  //   for(var i = 0; i < tabContent.length; i++) {
  //       if(tabContent[i].style.display = "block"){
  //           tabContent[i].style.display = "none";
  //           tabContent[i] = tabContent[i + 1];
  //           tabContent[i].style.display = "block";
  //       }
  //     }
  //   var tabLinks = document.getElementsByClassName("tablinks");
  //   for (var i = 0; i < tabLinks.length; i++) {
  //       if(tabLinks[i].classList.contains("active")){
  //           console.log(tabLinks[i]);
  //           tabLinks[i].className = tabLinks[i].className.replace("active", "");
  //           tabLinks[i] = tabLinks[i + 1];
  //           console.log(tabLinks[i+1]);
  //           event.currentTarget.className += " active";
  //       }
  //   }
  // }

  // var nextButton = document.getElementById("next");

  // nextButton.addEventListener("click", displayCurrentTab);

