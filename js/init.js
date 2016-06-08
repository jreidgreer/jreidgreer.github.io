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

var $strongSkills = $('#skills-strong');
var $experiencedSkills = $('#skills-experienced');

$.getJSON('../data/skills.json', function(data) {
  data.forEach(function(skill) {
    var $skillContainer = $('<li></li>', {class: 'skill'});
    $skillContainer.text(skill.name);
    var $starsContainer = $('<span></span>');

    if(skill.rating === 'Strong') {
      $strongSkills.append($skillContainer);
    } else if (skill.rating === 'Experienced') {
      $experiencedSkills.append($skillContainer);
    }
  });
});