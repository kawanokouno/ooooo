$(function () {
    'use strict'

    {

        const header =$('.header-fixed');
        header.hide();
        const bottom = $('.fixed-bottom');
        bottom.hide();
        let winW = $(window).width();    


        // for (let i = 1; i <= 16; i++) {
        //     if(i !== 4) {
        //         const option = document.createElement('option');
        //         option.textContent = (`ゲスト${i}人`);
        //         $('#member').prepend(option);
               
        //      }else {
        //         $('#member').append('<option selected>ゲスト4人</option>');
        
        //     }

        // }




       
        
        if(winW < 744) {

            $(window).scroll(function () {
    
                if ($(this).scrollTop() > 500 && $(this).scrollTop() <6300) {
                    
                    bottom.show();
    
                }　else {
                    bottom.hide();
                }
    
            });
    
            $(window).scroll(function () {
    
                if ($(this).scrollTop() > 500 && $(this).scrollTop() <6300) {
                    
                    header.fadeIn();
    
                }　else {
                    header.fadeOut();
                }
    
            });

        }else if( winW < 1128　){

            $(window).scroll(function () {
    
                if ($(this).scrollTop() > 500 && $(this).scrollTop() <5100) {
                    
                    bottom.show();
    
                }　else {
                    bottom.hide();
                }
    
            });
    
            $(window).scroll(function () {
    
                if ($(this).scrollTop() > 500 && $(this).scrollTop() <5100) {
                    
                    header.fadeIn();
    
                }　else {
                    header.fadeOut();
                }
    
            });



        }else if( winW => 1128 ){
            header.show();

        }

        



        





        const menu = $('.menu');
        const menuIn = $('#menuIn');

        menuIn.click(function() {
            $('body, html').animate({ scrollTop: 0 }, 500);
            menu.slideToggle();
            $('body').addClass('bodyd');
            return false;
            
        })

        menu.find('.logo').click(function(){
            menu.slideToggle();
            $('body').removeClass('bodyd');


        })








    
    

 











    }

});


