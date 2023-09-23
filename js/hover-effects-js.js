var config = {
  over: showSubmenu,  // Function to run when hovering over the element
  out: hideSubmenu,  // Function to run when moving the mouse out
};

// Apply HoverIntent to the list items
$('.casestudy-image-area, .other-service-img-area, .blog-hero-banner-inner, .blog-list-main, .has-dropdown, .bottom-social-links li a').hoverIntent(config);

// Function to show the submenu and modify the clip-path
function showSubmenu() {
  // Add a class to the li element to indicate it's being hovered
  $(this).addClass('hovered');
}

// Function to hide the submenu and reset the clip-path
function hideSubmenu() {
  // Remove the 'hovered' class and reset the clip-path
  $('.hovered').removeClass('hovered');
}