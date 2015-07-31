$(window).scroll(function(){
    
    var nav_bar = $('nav ul');
    var logo_v = $('.logo img');
    var section = $('section.nav');
    var color_links = $('ul li a');
    var languages = $('div.languages');
    
    var scrollPos = $(this).scrollTop();
    
	if (scrollPos === 0) {
    	
    	console.log('Club going up on a Tuesday!');
    	
	} else if (scrollPos < 415) {
    	
    	section.removeClass('effecto');
    	section.removeClass('effecta');
    	section.removeClass('effectu');
    	nav_bar.removeClass('effectu-top');
	    logo_v.removeClass('effectu-logo');
	    color_links.removeClass('effectu-links');
    	 
	} else if (scrollPos > 415 && scrollPos < 470) { 
    
	    section.removeClass('effecto').addClass('effecta');
	    nav_bar.removeClass('effectu-top');
	    logo_v.removeClass('effectu-logo');
	    color_links.addClass('effectu-links');
	    
    } else if (scrollPos > 470) {
        
        section.removeClass('effecta').addClass('effectu');
        nav_bar.addClass('effectu-top');
        logo_v.addClass('effectu-logo');
    }

	switch (true) {
        case (scrollPos < 300):
            languages.fadeIn(1000);
            break;
        case (scrollPos > 410):
           languages.fadeOut(800);
            break;
        default:
            languages.show();
    }
    
});
