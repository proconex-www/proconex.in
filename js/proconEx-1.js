// JavaScript Document of Proconex Pvt. Ltd.
$(function(){
    $("#proconEx_bdy").addClass("fadein");
    if($(".product_photo").length > 0){
        $.getScript("js/jquery.zoom.js").done(function(){
            $(".product_photo").zoom();
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