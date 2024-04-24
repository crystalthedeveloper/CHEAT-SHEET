$('.dark-light-button').click(function () {
  var we_clicks = $(this).data('we_clicks');
  if (!we_clicks) {
    // Dark Mode
    $('body').css({
      'background-color': '#0a1f1f',
      'color': '#ffffff'
    });
    $('.paragraph, .footer-link, .about-title, .title, .h2, .course-labels, .bonus-h2').css('color', '#ffffff');
    $('.about-info-wrap').css('background-color', '#0a1f1f');
    $('.footer-logo-image').attr('src', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/662831673fd2dec6eba4fecb_FST%20Logo-dark.png');
    $('.hero-image').attr('src', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6628fdecad917d34c52e572d_hero-image-dark.png');
    $('.hero-image').attr('srcset', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6628fdecad917d34c52e572d_hero-image-dark.png 500w, https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6628fdecad917d34c52e572d_hero-image-dark.png 800w');
  } else {
    // Light Mode
    $('body').css({
      'background-color': '#ffffff',
      'color': '#000000'
    });
    $('.paragraph, .footer-link, .about-title, .title, .h2, .course-labels, .bonus-h2').css('color', '#000000');
    $('.about-info-wrap').css('background-color', '#ffffff');
    $('.footer-logo-image').attr('src', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6622cffa219b956a49edd98c_FST%20Logo-footer.png');
    $('.hero-image').attr('src', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6622a21033311b2de3e6fffb_hero-image.png');
    $('.hero-image').attr('srcset', 'https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6622a21033311b2de3e6fffb_hero-image.png 500w, https://uploads-ssl.webflow.com/65f0d5739b651eae06b2ca56/6622a21033311b2de3e6fffb_hero-image.png 800w');
  }
  $(this).data("we_clicks", !we_clicks);
});
