    $('.header__burger').click(function(event) {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $("a").click(function(){
        $('.header__burger, .header__nav').removeClass('active');
        $('body').removeClass('lock');
    }); 
