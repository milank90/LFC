    $(window).scroll(function() {
      console.log('Scrolling'); // Check if this message appears in the console
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
      $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
