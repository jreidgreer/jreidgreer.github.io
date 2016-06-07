// $(document).on('scroll', function() {
//   console.log('scrolling', $(document).scrollTop());
//   if($(document).scrollTop() > 25) {
//     $('#header').addClass('small-header');
//   } else {
//     $('#header').removeClass('small-header');
//   }
// })

$('.main').onepage_scroll({
  sectionContainer: 'section',
  easing: 'ease',
  pagination: false,
  beforeMove: function(index){
    $('.menu-active').removeClass('menu-active');
    $('#menu_section_' + index).addClass('menu-active');
  },
  loop: false,
  keyboard: true,
  responsiveFallback: false,
});