$(document).ready(function () {



//Date & Time picker
    $('.form_date').datetimepicker({
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('.form_time').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });


//Navigation change background on scroll
    var didScroll;
    var lastScrollTop = 50;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.navbar-brand > img').removeClass('navImg-up').addClass('navImg-down');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.navbar-brand > img').removeClass('navImg-down').addClass('navImg-up');

            }
        }

        lastScrollTop = st;
    }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

//owl carousel
    $("#owl").owlCarousel({
        navigation: true,
        navigationText: ["prev", "next"],
    });

    //form
    $('.blog_form').validator();

    //filter gallery
    /*
$('.filter a').click(function(e) {
  e.preventDefault();
  var a = $(this).attr('href');
  a = a.substr(1);
  $('.gallery a').each(function() {
    if (!$(this).hasClass(a) && a != 'all')
      $(this).addClass('hide');
    else
      $(this).removeClass('hide');
  });

});

$('.gallery a').click(function(e) {
  e.preventDefault();
  var $i = $(this);
  $('.gallery a').not($i).toggleClass('pophide');
  $i.toggleClass('pop');
});

$('#myContent').wookmark();*/
    
    $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
  packery: {
    horizontal: true
  }
});

});