/* Amr */
function AH_openNav() {
  document.getElementById("AH_Sidenav").style.left = "0%";
  document.getElementById("AH_sidenav-head").style.left = "0%";
  document.getElementById("AH_Sidenav").style.zIndex = "3";
  document.getElementById("AH_closebtn").style.display = "block";
  document.getElementsByTagName("body")[0].style = "overflow: hidden;";
  document.getElementById("overlay").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function AH_closeNav() {
  document.getElementById("AH_Sidenav").style.left = "-40%";
  document.getElementById("AH_sidenav-head").style.left = "-40%";
  document.getElementById("AH_closebtn").style.display = "none";
  document.getElementsByTagName("body")[0].style = "overflow: visible;";
  document.getElementsByTagName("body")[0].style = "background-color: none;";
  document.getElementById("overlay").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "scroll";
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
