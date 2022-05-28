function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  function revealremain() {
    var reveals2 = document.querySelectorAll(".revealremain");
  
    for (var i = 0; i < reveals2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      } 
    }
  }
  
  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", revealremain);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("navbar").style.top = "0";
} else {
document.getElementById("navbar").style.top = "-75px";
}
prevScrollpos = currentScrollPos;
}
  

  