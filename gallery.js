// $(document).ready(function () {
//   $(".fancybox").fancybox({
//     openEffect: "none",
//     closeEffect: "none",
//   });
// });

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}
