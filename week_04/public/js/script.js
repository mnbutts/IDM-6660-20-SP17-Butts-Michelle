$( document ).ready(function() {
  $('.hamburger button').click(function() {
  		$(this).toggleClass('expanded').siblings('.hamburger div').slideToggle();
  });
  var moreText = "Read more",
	lessText = "Read less",
	moreButton = $("#change_value");

  moreButton.click(function (){
	var $this = $(this);
	$this.text($this.text() == lessText ? moreText : lessText);
  })
});


	