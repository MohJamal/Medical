/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    
  
    
 //Caching the Scroll Top element
 
 var scrollButton = $("#scroll-top");
 
 //(this).scrollTop is space that counted from page start 
 
 $(window).on("scroll",function(){
  $(this).scrollTop() >=700 ? scrollButton.show() : scrollButton.hide();
   });
  
  //Click on button to scroll top  
  scrollButton.click(function(){
   $("html,body").stop().animate({scrollTop:0},600);
  });    
    

    
        // Smooth Scroll To Elements
    $('.navbar li a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });  
    
    
  
    
    // Add Active Class On Navbar Link and remove from siblings

   $('.navbar li a').click(function() {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    
    $(window).scroll(function() {



    //Sync Navbar Links With Sections

        $('.section').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });
    
    
    
    });
    
  
    
    });