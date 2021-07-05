
//while(false)
{
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

   function openNav() {
      document.getElementById("mySidenav").style.transform = "translateX(0)";
      let arrTag = document.querySelectorAll(".intro,.team,.form,.footer");
      for (let tag of arrTag) {
         tag.style.transition = "all 0.7s ease";
         // tag.style.transform = "translateX(320px)";
         tag.classList.add('transform320');
      }
      var closebtn = document.querySelector(".closebtn");
      closebtn.style.visibility = "visible";

      disableScroll();
   }
   function closeNav() {
      document.getElementById("mySidenav").style.transform = "translateX(-320px)";
      let arrTag = document.querySelectorAll(".intro,.team,.form,.footer");
      for (let tag of arrTag) {
         tag.style.transition = "all 0.7s ease";
         // tag.style.transform = "translateX(0px)";
         tag.classList.remove('transform320');
      }
      var closebtn = document.querySelector(".closebtn");
      closebtn.style.visibility = "hidden";

      enableScroll();
   }

   function scrollFunction() {
      let header = document.querySelector(".header");
      let body = document.querySelector("body");
      let width = body.offsetWidth;
      if (width > 1200) {
         if (window.pageYOffset <= 150) {
            header.style.position = "absolute";
            header.style.transform = "translateY(0)";
            header.style.backgroundColor = "transparent";
         } else if (window.pageYOffset > 150 && window.pageYOffset <= 500) {
            header.style.position = "fixed";
            header.style.transform = "translateY(-100%)";
            header.style.backgroundColor = "white";
         } else if (window.pageYOffset > 500) {
            header.style.transform = "translateY(0)";
         }
      } else if (width < 1200) {
         if (document.getElementById("mySidenav").style.transform == "translateX(0px)") {
            return;
         }

         if (window.pageYOffset <= 150) {
            header.style.removeProperty("transform");
         } else if (window.pageYOffset > 150 && window.pageYOffset <= 500) {
            header.style.position = "fixed";
            header.style.transform = "translateY(-100%)";
         } else if (window.pageYOffset > 500) {
            header.style.removeProperty("transform");
         }
      }
   }

   /*--------------------------------*/

   var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

   function preventDefault(e) {
      e.preventDefault();
   }

   function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
         preventDefault(e);
         return false;
      }
   }

   var supportsPassive = false;
   try {
      window.addEventListener(
         "test",
         null,
         Object.defineProperty({}, "passive", {
            get: function () {
               supportsPassive = true;
            },
         })
      );
   } catch (e) {}

   var wheelOpt = supportsPassive ? { passive: false } : false;
   var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

   function disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
   }

   function enableScroll() {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
   }
}



$(window).resize(function () {
   let bodyWidth = document.querySelector("body").offsetWidth;
   if(bodyWidth>1200) {
      let arrTag = document.querySelectorAll(".intro,.team,.form,.footer");
      for (let tag of arrTag) {
         tag.classList.remove('transform320');
      }
      document.querySelector('.closebtn').click();
      enableScroll();
   }
});