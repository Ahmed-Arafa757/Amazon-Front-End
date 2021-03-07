/* Amr */
function AH_openNav() {
  if(localStorage.getItem('currentLang')==='en')
  {
    document.getElementById("AH_Sidenav").style.right = null;
    document.getElementById("AH_sidenav-head").style.right = null;
    document.getElementById("AH_Sidenav").style.left = "0%";
    document.getElementById("AH_sidenav-head").style.left = "0%";
    document.getElementById("AH_Sidenav").style.zIndex = "3";
    document.getElementById("AH_sidenav-head").style.zIndex = "3";
    document.getElementById("AH_closebtn").style.display = "block";
    document.getElementById("AH_closebtn").style.right = "-50px";
    document.getElementsByTagName("body")[0].style = "overflow: hidden;";
    document.getElementById("overlay").style.display = "block";
    /* document.getElementsByTagName("body")[0].style.overflow = "hidden"; */
  }
  else
  {
  document.getElementById("AH_Sidenav").style.left = null;
  document.getElementById("AH_sidenav-head").style.left = null;
    document.getElementById("AH_Sidenav").style.right = "0%";
    document.getElementById("AH_sidenav-head").style.right = "0%";
    document.getElementById("AH_Sidenav").style.zIndex = "3";
    document.getElementById("AH_sidenav-head").style.zIndex = "3";
    document.getElementById("AH_closebtn").style.display = "block";
    document.getElementById("AH_closebtn").style.right = "450px";
    document.getElementsByTagName("body")[0].style = "overflow: hidden;";
    document.getElementById("overlay").style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
}

function AH_closeNav() {
  if(localStorage.getItem('currentLang')==='en')
  {
  document.getElementById("AH_Sidenav").style.left = "-40%";
  document.getElementById("AH_sidenav-head").style.left = "-40%";
  document.getElementById("AH_closebtn").style.display = "none";
  document.getElementsByTagName("body")[0].style = "overflow: hidden;";
  document.getElementsByTagName("body")[0].style = "background-color: none;";
  document.getElementById("overlay").style.display = "none";
  /* document.getElementsByTagName("body")[0].style.overflow = "scroll"; */
  }else
  {
    document.getElementById("AH_Sidenav").style.right = "-40%";
  document.getElementById("AH_sidenav-head").style.right = "-40%";
  document.getElementById("AH_closebtn").style.display = "none";
  document.getElementsByTagName("body")[0].style = "overflow: hidden;";
  document.getElementsByTagName("body")[0].style = "background-color: none;";
  document.getElementById("overlay").style.display = "none";
  /* document.getElementsByTagName("body")[0].style.overflow = "scroll"; */
  }
}

function shopSeeMore() {
  document.getElementById("shopSeeMore").style.display = "block";
  document.getElementById("shopSeeMoreBtn").style.display = "none";
}
function shopSeeLess() {
  document.getElementById("shopSeeMore").style.display = "none";
  document.getElementById("shopSeeMoreBtn").style.display = "block";
}
/* Serety */
// document.addEventListener("DOMContentLoaded", () => {
//   var elms = document.getElementsByClassName("splide");
//   for (var i = 0, len = elms.length; i < len; i++) {
//     new Splide(elms[i], {
//       type: "loop",
//       gap: 20,
//       cover: true,
//       height: "10rem",
//       autoWidth: true,
//       focus: "center",
//       autoplay: true,
//       interval: 2000,
//     }).mount();
//   }
// });