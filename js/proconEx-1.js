// JavaScript Document of Proconex Pvt. Ltd.
$(function(){
    $("#proconEx_bdy").addClass("fadein");
//    $.getScript("js/bootstrap-select.js").done(function(){
//        $("select.selectpicker").selectpicker();
//    });
})

var x, i, j, l, ll, selElmnt, a, b, c, srcha;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  if(i==0){
      srcha = document.createElement("input");
      srcha.setAttribute("type", "text");
      srcha.setAttribute("placeholder", "Search");
      srcha.setAttribute("id", "myInput");
      srcha.setAttribute("onkeyup", 'filterFunction("myInput", "selectitems")');
      srcha.setAttribute("class", "form-control d-none");
      x[i].appendChild(srcha);
  }
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("div");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("div");
  b.setAttribute("class", "select-items select-hide");
  b.setAttribute("id", "selectitems");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new div that will act as an option item:*/
    c = document.createElement("div");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
//      closeAllSelect(this);
      this.previousSibling.classList.toggle("d-none");
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function filterFunction(obj1, obj2) {
  var input, filter, ul, li, a, i, dropdowns;
  input = document.getElementById(obj1);
  filter = input.value.toUpperCase();
  dropdowns = document.getElementById(obj2);
  a = dropdowns.querySelectorAll("div");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}