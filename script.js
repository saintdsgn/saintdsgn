/*scrolldown*/
(function ($) {
  "use strict";

  jQuery(document).on("ready", function () {
    $("a.page-scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 50,
          },
          1500
        );
      e.preventDefault();
    });
  });
})(jQuery);

/* 4 Card animate*/
$(document).ready(function () {
  $(".col-lg-4").hover(
    function () {
      $(this).animate(
        {
          marginTop: "-=0.5%",
        },
        100
      );
    },
    function () {
      $(this).animate(
        {
          marginTop: "0%",
        },
        0
      );
    }
  );
});

window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  fadeOut();
};

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 1500);
}

var typed = new Typed(".auto-type", {
  strings: ["", "OPEN YOUR WINGS"],
  typeSpeed: 300,
  backSpeed: 250,
  loop: true,
});

var typed = new Typed(".last-type", {
  strings: ["", "Choose Your Own Adventure"],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true,
});

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// quick reservation//
