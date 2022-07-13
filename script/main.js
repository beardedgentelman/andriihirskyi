

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

  $('.contact-me__form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')


    $('.submit', form).val('Sending...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="name"]', form).val() );
    // data.append( 'phone', 		$('[name="phone"]', form).val() );
    data.append( 'email', 		$('[name="email"]', form).val() );
    data.append( 'text', 		$('[name="text"]', form).val() );
    // data.append( 'file', 		$('[name="file"]', form).val() );
   

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
            // Тут выводим ошибку
        },
        complete: function() {
            // Тут можем что-то делать ПОСЛЕ успешной отправки формы
            console.log('Complete')
            form.reset() 
        }
    });

    return false;
});
