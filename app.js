var acc = document.getElementsByClassName("accordion-item-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight * 2}px`;
    }

    if (panel.style.opacity) {
      panel.style.opacity = null;
    } else {
      panel.style.opacity = 1;
    }
  });
}

// // get the parent element
// var parentElement = document.querySelector(".accordion-item-header");

// // check if the parent element has the .active class
// if (parentElement.classList.contains("active")) {
//   // get the SVG element
//   var svgElement = parentElement.querySelector("svg");

//   // set the transform attribute to rotate by 45 degrees
//   svgElement.setAttribute("transform", "rotate(999deg)");
// }
