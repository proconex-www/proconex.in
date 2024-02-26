// JavaScript Document of Proconex Pvt. Ltd.
$(function () {
  jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
      if (ns.includes("noPreventDefault")) {
        this.addEventListener("touchstart", handle, {
          passive: false
        });
      } else {
        this.addEventListener("touchstart", handle, {
          passive: true
        });
      }
    }
  };
  $("#proconEx_bdy").addClass("fadein");
  setTimeout(whatsappchat, 3000);
  if ($(".product_photo_zoom").length > 0) {
    $.getScript("js/jquery.zoom.js").done(function () {
      $(".product_photo_zoom").zoom({
        on: "click"
      });
    });
  }
  if ($(".proconEx_clients_list").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $(".proconEx_clients_list").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 374,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    });
  }
  if ($("#awards_carousel").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $("#awards_carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
      });
    });
  }
  if ($("#certificates_carousel").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $("#certificates_carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    });
  }
  if ($(".proconEx_products").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $(".proconEx_products").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
    });
  }
  if ($("#product_carousel").length > 0) {
    $.getScript("js/slick.js").done(function () {
      $("#product_carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: "#product_thumbs",
        swipe: false,
        draggable: false,
        touchMove: false,
        touchstart: false,
        swipeToSlide: false
      });
      $("#product_thumbs").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: "#product_carousel",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        draggable: false,
        touchMove: false,
        swipeToSlide: false,
        responsive: [{
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }]
      });
    });
  }
  if ($("input.ps_search").length > 0) {
    $("input.ps_search").keyup(function () {
      $obj1 = "#" + ($(this).attr("id"));
      $obj2 = "#" + ($(this).next("input").attr("id"));
      filterFunction($obj1, $obj2);
    });
  }
  if ($("#product_enquiry_form").length > 0) {
    $('#product_enquiry_form .form-check-input').change(function () {
      if ($(this).is(":checked")) {
        $(this).attr("checked", "checked");
      }
    });
    $("#product_enquiry_form").submit(function (e) {
      e.preventDefault();
        if($("#request_product").length > 0){
            $reqstproduct = $("#request_product").html();
            $("#requestproduct").html($reqstproduct);
        }
      $partcondition = $("#part_condition").html();
      $partavailability = $("#part_availability").html();
      $("#partcondition").html($partcondition);
      $("#partavailability").html($partavailability);
      $("#proconEx_support").modal({
        backdrop: false
      });
    })
  }
  if ($("#product_carousel").length > 0) {
    $.getScript("js/lightgallery.js").done(function () {
      $("#product_carousel").lightGallery({
        selector: '.proconex-zoom-in',
        flipHorizontal: false,
        flipVertical: false,
        rotate: false,
        pinterest: false,
        googlePlus: false,
        hideBarsDelay: 0,
        download: false,
        thumbnail: false,
        share: false,
        autoplayControls: false,
        mousewheel: false
      });
    });
    //    $.when($.getScript("js/lightgallery.umd.js"), $.getScript("js/plugins/zoom/lg-zoom.umd.js")).done(function () {
    //      lightGallery(document.getElementById("product_carousel"), {
    //        download: false,
    //        plugins: [lgZoom],
    //        selector: ".proconex-zoom-in"
    //      });
    //    });
  }
});

function filterFunction(obj1, obj2) {
  //  var input, filter, ul, li, a, i, dropdowns;
  $filter = $(obj1).val().toUpperCase();
  $a = $(obj2 + " + ul > li");
  for ($i = 0; $i < $a.length; $i++) {
    $txtValue = $a[$i].textContent || $a[i].innerText;
    if ($txtValue.toUpperCase().indexOf($filter) > -1) {
      $a[$i].style.display = "";
    } else {
      $a[$i].style.display = "none";
    }
  }
}

function preloadphotos(photos) {
  $(photos).each(function () {
    $("<img>")[0].src = this;
  });
}

function whatsappchat() {
  $("#whatsapp_chat").removeClass("d-none").animate({
    bottom: "20",
    opacity: "1"
  });
}
