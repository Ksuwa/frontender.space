$(document).ready(function () {
//Animation content on main-page
  $('#main-h1').addClass("show");
  $('.main-page__tech').addClass("show");
  $('.animate-mouse').addClass("show");

//Show/hide menu
  $('.header__menu').click(function () {
    $(this).toggleClass('open');
    $('.nav').toggleClass('show');
  });


  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
