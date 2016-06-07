$(document).on('scroll', function() {
  console.log('scrolling', $(document).scrollTop());
  if($(document).scrollTop() > 25) {
    $('#header').addClass('small-header');
  } else {
    $('#header').removeClass('small-header');
  }
})