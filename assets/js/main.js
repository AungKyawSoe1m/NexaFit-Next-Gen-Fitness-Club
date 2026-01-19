$(document).ready(function () {

  $(window).on("load", function () {
    $("#preloader")
      .delay(500)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  });

  const navIcon = $("#nav-icon");

  $("#navbarNav").on("show.bs.collapse", function () {
    navIcon.removeClass("bi-list").addClass("bi-x-lg");
  });

  $("#navbarNav").on("hide.bs.collapse", function () {
    navIcon.removeClass("bi-x-lg").addClass("bi-list");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTop").fadeIn();
    } else {
      $("#backToTop").fadeOut();
    }
  });

  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  var images = [];
  var currentIndex = 0;

  $(".gallery-item a").each(function () {
    images.push($(this).attr("href"));
  });

  $(".gallery-item a").on("click", function (e) {
    e.preventDefault();
    var imageSrc = $(this).attr("href");
    currentIndex = images.indexOf(imageSrc);
    $("#lightbox-img").attr("src", imageSrc);
    $("#custom-lightbox").fadeIn().css("display", "flex");
  });

  $(".close-lightbox, #custom-lightbox").on("click", function (e) {
    if (
      e.target !== $("#lightbox-img")[0] &&
      e.target !== $("#next-btn i") &&
      e.target !== $("#prev-btn i")
    ) {
      $("#custom-lightbox").fadeOut();
    }
  });

  $("#next-btn").on("click", function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    $("#lightbox-img").attr("src", images[currentIndex]);
  });

  $("#prev-btn").on("click", function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    $("#lightbox-img").attr("src", images[currentIndex]);
  });

  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
  });

  $(".trainer-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 },
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".main-nav").addClass("navbar-scrolled");
    } else {
      $(".main-nav").removeClass("navbar-scrolled");
    }
  });
});
