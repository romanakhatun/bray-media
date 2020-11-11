jQuery(document).ready(function () {
  //    Mobile Main Menu
  $(".mobile_bars").click(function () {
    $(".responsive_menu").toggleClass("canvas-menu");
    return false;
  });

  // Product Category
  $(".nav-bars").click(function () {
    $(".product_categorias_item ul").slideToggle(300);
    return false;
  });

  // Mobile Dropdown Menu
  $(".arrow_class").click(function () {
    $(".sub_menu").slideToggle(300);
    return false;
  });

  //Dropdown menu
  $(".arrow_class").click(function () {
    $(".arrow_class i").toggleClass("active_arrow");
    return false;
  });
  //Dropdown menu
  $(".arrow_class").click(function () {
    $(".arrow_class").toggleClass("color_add");
    return false;
  });

  $(".video_car.owl-carousel").owlCarousel({
    autoplay: false,
    loop: true,
    responsiveClass: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: true,
    items: 1,
    nav: false,
  });
  var selector = $(".owl-carousel");

  $(".my-next-button").click(function () {
    selector.trigger("next.owl.carousel");
  });

  $(".my-prev-button").click(function () {
    selector.trigger("prev.owl.carousel");
  });
});

const image = document.querySelector(".dev_c_area");

let options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(imageAnimation, options);

function imageAnimation(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".dev_image img").forEach((img) => {
        img.style.animation = "slideRight 1.5s ease-in forwards";
      });
      document.querySelectorAll(".dev_ov_content").forEach((content) => {
        content.style.animation = "slideUp 1s ease 1.5s forwards";
      });
    }
  });
}

$(function () {
  $(document).scroll(function () {
    var $nav = $(".header_area");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    $("#logo_symbol").toggleClass(
      "active",
      $(this).scrollTop() > $nav.height()
    );
    $("#logo_text").toggleClass("active", $(this).scrollTop() > $nav.height());
  });
});

observer.observe(image);
//Aos Animation PlugIN
AOS.init();
