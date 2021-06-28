document.querySelector(".footer__email").onfocus = function () {
   var x = document.querySelector(".footer__email");
   x.style.border = "1px solid white";
};

document.querySelector(".footer__email").onblur = function () {
   var x = document.querySelector(".footer__email");
   x.style.border = null;
};

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   var header = document.querySelector(".header");
   var headerContainer = document.querySelector("#header__container");
   var x = document.body.scrollTop;
   var y = document.documentElement.scrollTop;
   if ((x >= 30 && x <= 100) || (y >= 30 && y <= 100)) {
      document.querySelector("#header__container").style.height = "0%";
      console.log("123");
   }
   if (x > 200 || y > 200) {
      header.style.position = "fixed";
      header.style.zIndex = "999";
      header.style.backgroundColor = "white";
      document.querySelector("#header__logo").style.visibility = "hidden";
      headerContainer.style.height = "100%";
   } else {
      header.style.position = null;

      header.style.backgroundColor = "transparent";
      document.querySelector("#header__logo").style.visibility = "visible";
      headerContainer.style.height = "100%";
   }
}


function openNav() {
   document.getElementById("mySidenav").style.width = "320px";
   document.getElementById("main").style.marginLeft = "320px";
   //  document.getElementById("main").style.transform = "translateX(320px)";
   var closebtn =document.querySelector(".closebtn");
  closebtn.style.visibility="visible";
 }
 
 function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
   // document.getElementById("main").style.transform = "translateX(0px)";
   var closebtn =document.querySelector(".closebtn");
   closebtn.style.visibility="hidden";
 }

document.querySelector("#btnMenuBar").onclick=function() {
   document.querySelector(".header__info").style.display="block";
}

// function openNav() {
//    // document.getElementById("mySidenav").style.transform = "translateX(0%)";
//    document.getElementById("main").style.marginLeft = "320px";
//    //   document.getElementById("main").style.transform = "translateX(320px)";
//    var closebtn =document.querySelector(".closebtn");
//   closebtn.style.visibility="visible";
//  }
 
//  function closeNav() {
//    document.getElementById("mySidenav").style.transform = "translateX(-100%)";
//    document.getElementById("main").style.marginLeft= "0";
//    //  document.getElementById("main").style.transform = "translateX(-100%)";
//    var closebtn =document.querySelector(".closebtn");
//    closebtn.style.visibility="hidden";
//  }