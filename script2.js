$('ul.nav').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href).offset();
    $('body').animate({ scrollTop: $anchor.top });
    return false;
});
$(document).ready(function(){
$('ul li').click(function(){
    
    var clicked_tab = $(this);
    
    clicked_tab.addClass('active');
    
    clicked_tab.siblings('li').not(clicked_tab).removeClass('active');
    
    
});
});