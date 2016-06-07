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
    var $skillContainer = $('<li></li>', {class: 'skill'});
    $skillContainer.text(skill.name);

    var $starsContainer = $('<span></span>');

    for(var i = skill.rating; i > 0; i--) {
      $starsContainer.append('&#10026;');
    }

    $skillContainer.append($starsContainer);

    $skills.append($skillContainer);
  });
});