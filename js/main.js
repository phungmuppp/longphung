(function(b){b(document).ready(function(){function c(){if(b(window).width()>992){b(".navbar .dropdown").on("mouseover",function(){b(".dropdown-toggle",this).trigger("click")}).on("mouseout",function(){b(".dropdown-toggle",this).trigger("click").blur()})}else{b(".navbar .dropdown").off("mouseover").off("mouseout")}}c();b(window).resize(c)});b(window).scroll(function(){if(b(this).scrollTop()>100){b(".back-to-top").fadeIn("slow")}else{b(".back-to-top").fadeOut("slow")}});b(".back-to-top").click(function(){b("html, body").animate({scrollTop:0},1500,"easeInOutExpo");return false});b(".service-carousel").owlCarousel({autoplay:true,smartSpeed:1500,dots:false,loop:true,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},576:{items:1},768:{items:2},992:{items:2}}});var a=b(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"});b("#portfolio-flters li").on("click",function(){b("#portfolio-flters li").removeClass("active");b(this).addClass("active");a.isotope({filter:b(this).data("filter")})});b(".team-carousel").owlCarousel({autoplay:true,smartSpeed:1500,dots:false,loop:true,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],responsive:{0:{items:1},576:{items:1},768:{items:2},992:{items:3}}});b(".testimonial-carousel").owlCarousel({autoplay:true,smartSpeed:1000,items:1,dots:false,loop:true,nav:true,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']})})(jQuery);