

  $('.header__contact-me').click(function(e){
      e.preventDefault();
      $('html, body').animate({ scrollTop: $('.main__contact-me').offset().top }, 1500);
  });

  $('.main__topic').slideDown(2500);

  $('.first-color-btn-txt').click(function(e){
      e.preventDefault();
      $(this).next('.html-list').slideToggle(500);
  });

  $('.second-color-btn-txt').click(function(e){
      e.preventDefault();
      $(this).next('.css-list').slideToggle(500);
  });

  $('.third-color-btn-txt').click(function(e){
      e.preventDefault();
      $(this).next('.js-list').slideToggle(500);
  });
