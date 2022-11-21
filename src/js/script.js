$(document).ready(function(){
    $('#nav-button').on('click',function(){
        $('#show-nav').toggleClass('hidden')
        $('#hide-nav').toggleClass('hidden')
        $('#nav-items').toggleClass('!opacity-100 !visible');
        $('.left-half').toggleClass('!top-0 !opacity-100 !visible');
        $('.right-half').toggleClass('!top-0 !opacity-100 !visible');

    })
})

