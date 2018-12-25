jQuery(document).ready( function( $ ) {
    "use strict";

    /* Navbar */
    var site_nav = $('#site-navigation');
    var navigation_height = $(site_nav).outerHeight();
    $('.site-navigation-sticky-wrapper').css('height', navigation_height);
    var distance;
    var is_home = $('body').hasClass('home');
    if( is_home ){
        distance = $('.topbar-slider').outerHeight() + $('.site-branding').outerHeight();
    } else{
        distance = $('.site-branding').outerHeight();
    }
    $(window).scroll(function(){
        if( $(window).scrollTop() > distance){
            $(site_nav).addClass('sticky-bar');
        }else{
            $(site_nav).removeClass('sticky-bar');
        }
    });
    if( $(window).scrollTop() > distance){
        $(site_nav).addClass('sticky-bar');
    }

    /* carousel gallery */
    var $owl = $(".slider-thumbnail");
    $owl.imagesLoaded( function(){
        $owl.owlCarousel({
            autoPlay : 3000,
            slideSpeed : 600,
            stopOnHover : true,
            items : 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet : [600,2],
            itemsMobile : [479,1],
            navigation : true,
            navigationText : [ '<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });
    });

    /* Masonry Blog Layout */
    var $container = $('.container-masonry');
    $container.imagesLoaded( function(){
        $container.masonry();
    });

} );
