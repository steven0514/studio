$(function() {
        $("img").lazyload();
        
        $('select').select2({
            minimumResultsForSearch: Infinity
        });

        var opt = {
            dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            prevText: "上月",
            nextText: "次月",
            weekHeader: "週",
            dateFormat: "yy/mm/dd",
            changeMonth: true,
            changeYear: true,
            yearRange: '-100:+0'

        };

        $("#datecon").datepicker(opt)

        $('.datecon').on('click', function() {
            $("#datecon").datepicker('show');
        });
        if($(window).width()>768){
            $('#QRcode').click(function(){
                $('#QRcodeM').modal();
            });
        }else{
            $('#QRcode').click(function(){
                window.open( 'tel:02-2716-3355', '_top' );
            });
        }
    })
    /*global $ */
$(document).ready(function() {

    "use strict";

    // $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"><i class='fa fa-2 fa-bars' aria-hidden='true'></i></a>");
    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function(e) {
        if ($(window).width() > 1023) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function() {
        if ($(window).width() <= 1023) {

            $(this).siblings().find('.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');

            $(this).siblings().removeClass('open').children("ul").slideUp(500);
            $(this).addClass('open').children("ul").slideToggle(500);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile i").click(function(e) {
        $(".menu > ul").slideToggle(500).addClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

});

/******menu scroll*******/
$(function() {
    // console.log($('.banner-slider').offset().top);

    var menu_top = $('.menubar').offset().top;
    // var client_top = $('.client').offset().top;
    
    $(window).scroll(function() {
        // console.log(client_top);
        // console.log('scroll:'+$(window).scrollTop()+',menu_top:'+menu_top);

        if ($(window).scrollTop() > menu_top && $(window).width() > 1024) {
            $('.menubar').removeClass('normal').addClass('onact');
            // $('.menu ul.menupc').css({'bottom':'auto'});
            // if ($(window).scrollTop() > client_top - $('.menubar').height()) {
            //     $('.menubar').addClass('normal').removeClass('onact');
            // }
        } else{
            $('.menubar').addClass('normal').removeClass('onact')
            if($(window).scrollTop() <= menu_top/2){
                $('.menu ul.menupc').css({'bottom':'45px'});
            }
            if($(window).scrollTop() > menu_top/2){
                $('.menu ul.menupc').css({'bottom':'auto'});
            }
        }
        // if ($(window).scrollTop() > $('.banner-slider').height()) {
        //     $('.banner-slider .item .content').hide();
        //     $('.banner-slider .logo').hide();
        //     $('.banner-slider .social-icons').hide();
        // } else {
        //     $('.banner-slider .item .content').show();
        //     $('.banner-slider .logo').show();
        //     $('.banner-slider .social-icons').show();
        // }
    });
});

jQuery(document).ready(function($){
    
    function show_search_icon() {
        
        var windowsize = $(window).width();
        
        if (windowsize >= 1024) {
            $('.search-bar-mobile').hide();
            console.log(windowsize);                
        } else {
            $('.search-bar-mobile').show();
        }
        
        
    }
    
    // Execute on load
    show_search_icon();
    
    // Bind event listener
    $(window).resize(show_search_icon);
    
});
