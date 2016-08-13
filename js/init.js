// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Load up skills
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

// Load up projects
var $projects = $('#projects-container');

$.getJSON('../data/projects.json', function(data) {
  data.forEach(function(project) {
    var $projectContainer = $('<div></div>', {class: 'portfolio-project'});
    //*************************************
    // Set the name of the project
    $nameContainer = $('<div></div>', {class: 'project-name'});
    $nameContainer.text(project.name);
    $projectContainer.append($nameContainer);
    //*************************************
    // Set the description of the project
    $descContainer = $('<div></div>', {class: 'project-desc'});
    $descContainer.text(project.desc);
    $projectContainer.append($descContainer);
    //*************************************
    // Add in screenshots
    if(project.mainImage) {
      $imageContainer = $('<img />', {class: 'project-image-main'});
      $imageContainer.attr('src', '/img/screenshots/' + project.mainImage + '.jpg');
      $projectContainer.append($imageContainer);
    }
    //*************************************
    // Add deployed links if available
    if(project.url){
      $urlContainer = $('<a></a>', {class: 'btn btn-default portfolio-btn'});
      $urlSpan = $('<span></span>').text('Visit App');
      $urlContainer.append($urlSpan);
      $urlContainer.attr('href', project.url);
      $projectContainer.append($urlContainer);
    }
    //*************************************
    // // Create container for tech used in project
    // $techContainer = $('<div></div>', {class: 'project-tech'});
    // // Iterate through different tech tags
    // project.tech.forEach(function(tech) {
    //   $techItem = $('<span></span>', {class: 'project-tech-item'});
    //   $techItem.text(tech + ' ');
    //   // Add each tag to the container
    //   $techContainer.append($techItem);
    // })
    // // Add the tech container to the project
    // $projectContainer.append($techContainer);
    //*************************************
    // Create container for project roles
    $roleContainer = $('<ul></ul>', {class: 'project-roles'});
    // Iterate through the different roles
    project.role.forEach(function(role) {
      $roleItem = $('<li></li>', {class: 'project-role-item'});
      $roleItem.text(role);
      // Add each tag to the container
      $roleContainer.append($roleItem);
    });
    // Add the role container to the project
    $projectContainer.append($roleContainer);
    //*************************************
    // Add project to the container
    $projects.append($projectContainer);
  });

  $('.portfolio-project-container').slick({
    infinite: true,
  });
});

// $(document).ready(function(){
//   $('.portfolio-project-container').slick({
//     infinite: true,
//   });
// });
