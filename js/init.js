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

var $skills = $('#skills-container');

$.getJSON('../data/skills.json', function(data) {
  data.forEach(function(skill) {
    console.log('skill', skill.name);
    var $skillContainer = $('span');
    $skillContainer.text(skill.name);

    $skills.append($skillContainer);
  });
});