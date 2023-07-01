let {top:about}=$('#about').offset();
console.log(about)


$(window).scroll(function(){
    
    let height= $(window).scrollTop()
    
    if(height>about-100){
        $('.navbar').css('background-color','rgba(0,0,0,0.7)')
        $('.navbar .container').css('padding','0 100px')
        $('.iconUp').fadeIn(1000);
    }else{
        $('.navbar').css('background-color','transparent')
        $('.navbar .container').css('padding','0 12px')
        $('.iconUp').fadeOut(1000);
    }

})

$('.iconUp').click(function(){
    $('html,body').animate({scrollTop:0},1000)
})