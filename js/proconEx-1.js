// JavaScript Document of Proconex Pvt. Ltd.
$(function(){
    $("#proconEx_bdy").addClass("fadein");
    if($(".product_photo_zoom").length > 0){
        $.getScript("js/jquery.zoom.js").done(function(){
            $(".product_photo_zoom").zoom({
                on:"click"
            });
            $(".product_photo_zoom").click(function(){
                $(this).children(".icon").toggleClass("d-none");
            });
        });
    }
    if($(".owl-carousel").length > 0){
        $.getScript("js/owl.carousel.js").done(function(){
            if($("#proconEx_products").length > 0){
                $owl = $("#proconEx_products");
                $owl.owlCarousel({
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        576:{
                            items:2
                        },
                        992:{
                            items:3
                        }
                    },
                    loop:false,
                    center:false,
                    margin:5,
                    dots: false,
                    autoplay:false
                });
                $(".product-next").click(function() {
                    $owl.trigger("next.owl.carousel");
                });
                $(".product-prev").click(function() {
                    $owl.trigger("prev.owl.carousel");
                });
//                if ( $owl.currentItem == 0 ) {
//                  $(".product-next").addClass('disabled');
//                }
//                if ( $owl.currentItem == $owl.maximumItem ) {
//                  $(".product-prev").addClass('disabled');
//                }
            }
            if($("#product_carousel").length > 0){
                $("#product_carousel").owlCarousel({
                    items:1,
                    autoplay:false,
                    loop:false,
                    center:true,
                    margin:10,
                    dots: false,
                    URLhashListener:true,
                    startPosition: "URLHash"
                });
            }
            if($("#product_thumbs").length > 0){
                $("#product_thumbs").owlCarousel({
                    items:4,
                    autoplay:false,
                    loop:false,
                    margin:10,
                    dots: false,
                    URLhashListener:true,
                    startPosition: "URLHash"
                });
            }
        });
    }
    if($("input.ps_search").length > 0){
        $("input.ps_search").keyup(function(){
           $obj1 = "#"+ ($(this).attr("id"));
           $obj2 = "#"+ ($(this).next("input").attr("id"));
           filterFunction($obj1, $obj2);
        });
    }
})

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

function preloadphotos(photos){
	$(photos).each(function(){
		$("<img>")[0].src=this;
	});	
}