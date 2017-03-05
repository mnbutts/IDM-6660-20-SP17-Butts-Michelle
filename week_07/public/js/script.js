$( document ).ready(function() {
    $('.hamburger button').click(function() {
  $(this).toggleClass('expanded').siblings('.hamburger div').slideToggle();
});
});


	