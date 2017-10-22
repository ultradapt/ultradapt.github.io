
$(document).ready(function() {
	
	"use strict";
	
	FirstLoad();
	HeroSection();
	AjaxLoad();
	HideShowHeader();
	FullPage();
	MasonryPortfolio();
	//VirtualScr();	
	FooterAppear();
	Sliders();
	Lightbox();
	AppearIteam();
	BackToTop();
	ContactForm();
	$(".page-overlay .animate-box-bottom").css('background-color', function () {
		return $("#page-content").data('textcolor')
	});
		
});

$(window).on("load", function() {
	LazyLoad();
});


/*--------------------------------------------------
Function Firs tLoad
---------------------------------------------------*/	

	function FirstLoad() {
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		$('.item-image').each(function() {
			var image = $(this).data('src');
	
			$(this).css({
				'background-image': 'url(' + image + ')'
			});
		});
		
		$('.project-next').on('click', function() {	
			$('#main').addClass('hidden');
			$('header').addClass('menu-open');
		});		
		
		$('a.ajax-link').on('click', function() {
			$(".page-overlay").addClass("from-bottom");
			$('#main').addClass('hidden');
			
		});	
		
		$('.nav-title').on('mouseenter', function() {
			$(".nav-project-title").addClass('hover');
		}).on('mouseleave', function() {
			$(".nav-project-title").removeClass('hover');
		});		
		
		$('#open-filters, .close-page-action, #open-search').on('click', function() {
			$('.page-action-overlay').toggleClass('active');
		});
		
		$("#main, #image-border-left, #image-border-right, .img-container, #menu-overlay").css('background', function () {
			return $("#page-content").data('bgcolor')
		});
		
		$("#main-content, footer, #menu-overlay").css('background', function () {
			return $("#page-content").data('bgcontent')
		});	
		
		$("h1, h2, h3, h4, h5, h6, .socials-text li a, #open-filters, #open-share, #backtoworks, [data-tooltip], a.link, .color-content a.link, .color-content .hero-title").css('color', function () {
			return $("#page-content").data('textcolor')
		});
		
		$(".color-content #menu-burger span, nav > ul > li span, #filters li a span").css('background-color', function () {
			return $("#page-content").data('textcolor')
		});
		
		setTimeout(function(){
			$("#fp-nav ul li a span").css('background-color', function () {
				return $("#page-content").data('textcolor')
			});
		} , 100 );
		$(".color-content .view-project").css('border-color', function () {
			return $("#page-content").data('textcolor')
		});
		
		if( jQuery('.tooltip-hover').length > 0 ){			
				
			var tooltips = document.querySelectorAll('.item-overlay');
	
			window.onmousemove = function (e) {
				var x = (e.clientX + 20) + 'px',
					y = (e.clientY + 20) + 'px';
				for (var i = 0; i < tooltips.length; i++) {
					tooltips[i].style.top = y;
					tooltips[i].style.left = x;
				}
			};
			
		}
		
		$('#menu-burger, #close-menu').on('click', function() {
			$('header').toggleClass('open');
			$('#menu-burger').toggleClass('open');
			$('#menu-overlay').toggleClass('active');
			$(".page-overlay").addClass("from-bottom");
			setTimeout( function(){
				$(".page-overlay").addClass("from-bottom-end");
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
				} , 800 );
			} , 500 );
		});
		
		$('nav li.has-sub>a').on('click', function(){
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});	
		
		
		var options = {
		  "animate": true,
		  "patternWidth": 100,
		  "patternHeight": 100,
		  "grainOpacity": 0.04,
		  "grainDensity": 1,
		  "grainWidth": 1,
		  "grainHeight": 1
		}
		if( $('.grain-page #main').length > 0 ){	
			grained(".grain-page #main", options);	
			grained(".grain-page #grain-hero", options);
		}
		if( $('.grain-page #close-menu').length > 0 ){	
			grained(".grain-page #close-menu", options);
		}
		if( $('.grain-page #showcase-slider').length > 0 ){	
			grained("#sig1", options);
			grained("#sig2", options);	
			grained("#sig3", options);	
			grained("#sig4", options);	
			grained("#sig5", options);
			grained("#sig6", options);
		}
		
		
		setTimeout( function(){
		$('#project-nav').on('mouseenter', function() {
				$("#project-nav").addClass("from-bottom");			
		}).on('mouseleave', function() {
			$("#project-nav").addClass("from-bottom-end");
			setTimeout( function(){
				$("#project-nav").removeClass("from-bottom");
				$("#project-nav").removeClass("from-bottom-end");
			} , 100 );
		});	
		} , 500 );
	}// End First Load
	
/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/
	
	function HeroSection() {
		
		if( $('#hero').length > 0 ){
		
		var HeroImage = document.getElementById('hero-styles');		
		var windowScrolled;
		
		
		window.addEventListener('scroll', function windowScroll() {
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
			if ($('#hero-styles').hasClass("scale-onscroll")) {
				HeroImage.style.transform = 'scale('+(100 - windowScrolled/100)/100+')';
			}
			if ($('#hero-styles').hasClass("parallax-onscroll")) {
				HeroImage.style.transform = 'translate3d(0, ' + windowScrolled / -2.5 + 'px, 0)';
			}
			if ($('#hero-styles').hasClass("opacity-onscroll")) {
				HeroImage.style.opacity =  (1 - (windowScrolled/20) / 20);
			}
		});			
		
		}
		
		$('.hero-title, .hero-subtitle, .slide-item-title, .slide-item-description, .zipper .item-title, .zipper .item-cat').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		})
	
	}//End Hero Section	
	
	

/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {		
		
		setTimeout(function(){
			$('body').removeClass('hidden');
		} , 100 );
		
		if( $('#hero-bg-image').length > 0 ){
		
			$('#hero-bg-image').waitForImages({
				finished: function() {
					HeroColor();
					setTimeout(function(){
						$('#hero-bg-image').addClass('animate');
					} , 200 );					
					setTimeout( function(){
						$(".page-overlay").addClass("from-bottom-end");
						setTimeout( function(){
							$(".page-overlay").removeClass("from-bottom");
							$(".page-overlay").removeClass("from-bottom-end");
							setTimeout(function(){
								$(".page-overlay .animate-box-bottom").css('background-color', function () {
									return $("#page-content").data('textcolor')
								});
							} , 1000 );
						} , 800 );
					} , 100 );
				},
				waitForAll: true
			});
		
		} else {
			
			setTimeout( function(){
				HeroColor();
				$(".page-overlay").addClass("from-bottom-end");				
				setTimeout( function(){
					$(".page-overlay").removeClass("from-bottom");
					$(".page-overlay").removeClass("from-bottom-end");
					setTimeout(function(){
						$(".page-overlay .animate-box-bottom").css('background-color', function () {
							return $("#page-content").data('textcolor')
						});
					} , 1000 );
				} , 800 );
				$("#showcase-slider").removeClass("delay");
				setTimeout(function(){
					$("#showcase-slider").removeClass("first-load");
				} , 1200 );				
			} , 100 );
		}
	
	}// End Lazy Load	
	
	
	
/*--------------------------------------------------
Function Ajax Load
---------------------------------------------------*/	

	function AjaxLoad() {		
		
		jQuery(document).ready(function(){
		  var isAnimating = false,
			newLocation = '';
			firstLoad = false;
		  
		  //trigger smooth transition from the actual page to the new one 
		  $('main').on('click', '[data-type="page-transition"]', function(event){
			event.preventDefault();
			//detect which page has been selected
			var newPage = $(this).attr('href');
			//if the page is not already being animated - trigger animation
			if( !isAnimating ) changePage(newPage, true);
			firstLoad = true;
		  });
		  
		  
		  
		  //detect the 'popstate' event - e.g. user clicking the back button
		  $(window).on('popstate', function() {
			if( firstLoad ) {
			  /*
			  Safari emits a popstate event on page load - check if firstLoad is true before animating
			  if it's false - the page has just been loaded 
			  */
			  var newPageArray = location.pathname.split('/'),
				//this is the url of the page to be loaded 
				newPage = newPageArray[newPageArray.length - 1];
		
			  if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
			}
			firstLoad = true;
			});
			
			
		
			function changePage(url, bool) {
			isAnimating = true;
			// trigger page animation
			$('body').addClass('page-is-changing');
			$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				loadNewContent(url, bool);
			  newLocation = url;
			  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
			//if browser doesn't support CSS transitions
			if( !transitionsSupported() ) {
			  loadNewContent(url, bool);
			  newLocation = url;
			}
			}
		
			function loadNewContent(url, bool) {
				url = ('' == url) ? 'index.html' : url;
			
			var section = $('<div class="cd-main-content "></div>');
			
			FullPageDestroy();			
				
			section.load(url+' .cd-main-content > *', function(event){
			  
			  var clapat_elements = $(event);			 
			  var clapat_body = $('#body', clapat_elements);			  
			 
			  var parser = new DOMParser();
			  doc = parser.parseFromString(event, "text/html");
			  // Your class(es)
			  var docClass = doc.body.getAttribute('class');
			  $('#body').removeClass();
			  $('#body').addClass(docClass);
			  
			  
			  $('main').html(section);
			  
				
				$('html, body').scrollTop(0);
			  
			  //if browser doesn't support CSS transitions - dont wait for the end of transitions
			  var delay = ( transitionsSupported() ) ? 30 : 0;
			  setTimeout(function(){
				//wait for the end of the transition on the loading bar before revealing the new content				
				$('body').removeClass('page-is-changing');
				$('.cd-cover-layer').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				  isAnimating = false;
				  $('.cd-cover-layer').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
				});				
				
				FirstLoad();
				HeroSection();
				LazyLoad();				
				FullPage();			
				MasonryPortfolio();
				HideShowHeader();				
				FooterAppear();
				Sliders();
				Lightbox();
				AppearIteam();
				BackToTop();
				ContactForm();
				
				
				
				if( !transitionsSupported() ) isAnimating = false;
			  }, delay);			  
			  if(url!=window.location && bool){
				window.history.pushState({path: url},'',url);
			  }
				});
		  }
		
		  function transitionsSupported() {
			return $('html').hasClass('csstransitions');
		  }
		});
			
		
	}// End Ajax Load
	
	
/*--------------------------------------------------
Function Hide Show Header
---------------------------------------------------*/
	
	function HideShowHeader() {
			
			var didScroll;
			var lastScrollTop = 0;
			var delta = 50;
			var navbarHeight = 250;
			var navbarHideAfter = navbarHeight
			
			$(window).scroll(function(event){
				didScroll = true;
			});			
			
			if( $('.scroll-hide').length > 0 ){
				
				setInterval(function() {
					if (didScroll) {
						hasScrolled();
						didScroll = false;
					}
				}, 100);
			
			}
		
			return false;
			
			function hasScrolled() {
				var st = $(this).scrollTop();
				
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				if (st > lastScrollTop && st > navbarHideAfter){
					if( $('.scroll-hide').length > 0 ){
					$('header').addClass('nav-hide');
					}
				} else {
					if( $('.scroll-hide').length > 0 ){
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-hide');
					}
					}
				}
				
				lastScrollTop = st;
			}
			
			
	}//End Hide Show Header			
	



/*--------------------------------------------------
Function Header Color
---------------------------------------------------*/	


	function HeroColor() {
		$('#hero').waitForImages({
			finished: function() {
		if( $('#hero-height').length > 0 ){
			
			
			if ($('#hero-bg-image').hasClass("light-content")) {
				$('#hero-styles').addClass('light-content').addClass('animate');
				
			}
			setTimeout(function(){
				$('#hero-caption').addClass('animate');
				$('#hero-height').removeClass('hidden');
			} , 250 );			
			
		}
		},
			waitForAll: true
		});	
			
		

	}// End Header Color
	
	
	function FullPageDestroy() {
		
		if( $('#showcase-slider').length > 0 ){	
	
			$('#showcase-slider').fullpage.destroy('all');
		}
	}
	
/*--------------------------------------------------
Function FullPage
---------------------------------------------------*/
	
	function FullPage() {
		
		if( $('#showcase-slider').length > 0 ){	
			
			
	
			$('#showcase-slider').fullpage({
       			css3: true,
				navigation: true,
        		navigationPosition: 'right',
				navigationTooltips: ['Heavensake', 'Value Studio', 'Retroduck', 'Miami Vice', 'Golden Lion', 'Tosca Blue'],
				afterLoad: function(anchorLink, index, direction){
					if(index === 1){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:0});						
					}
					if(index === 2){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-20});
					}
					if(index === 3){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-40});
					}					
					if(index === 4){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-60});
					}
					if(index === 5){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-80});
					}
					if(index === 6){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-100});
					}
					if(index === 7){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-120});
					}					
					if(index === 8){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-140});
					}
					if(index === 9){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-160});
					}
					if(index === 10){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-180});
					}
					if(index === 11){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-200});
					}
					if(index === 12){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-220});
					}
					if(index === 13){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-240});
					}					
					if(index === 14){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-260});
					}
					if(index === 15){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image"); 
						$("#page-counter").css({top:-280});
					}
					if(index === 16){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-300});
					}
					if(index === 17){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-320});
					}					
					if(index === 18){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-340});
					}
					if(index === 19){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-360});
					}
					if(index === 20){
						$('.section-image').removeClass("scale-image");
						$('.active .section-image').addClass("scale-image");
						$("#page-counter").css({top:-380});
					}
				},
				
				onLeave: function(index, nextIndex, direction){
					var leavingSection = $(this);
		
					//after leaving section 2
					if(index  && direction ==='down'){
						setTimeout( function(){
							$(".page-overlay").addClass("from-bottom");
							setTimeout( function(){
								$(".page-overlay").addClass("from-bottom-end");
								setTimeout( function(){
									$(".page-overlay").removeClass("from-bottom");
									$(".page-overlay").removeClass("from-bottom-end");
								} , 800 );
							} , 500 );	
						} , 500 );							
					}
		
					else if(index  && direction === 'up'){
						setTimeout( function(){
							$(".page-overlay").addClass("from-bottom");
							setTimeout( function(){
								$(".page-overlay").addClass("from-bottom-end");
								setTimeout( function(){
									$(".page-overlay").removeClass("from-bottom");
									$(".page-overlay").removeClass("from-bottom-end");
								} , 800 );
							} , 500 );	
						} , 500 );					
					}
					
				}
							
       		});
			
			if ($(".active").hasClass("light-content")) {
				$('#page-content').addClass("project-light-content");
			}
			
			$('.view-project').on('mouseenter', function() {
				$(".active .section-image").addClass('hover-speed');
				$(".active .section-image").addClass('hover');
			}).on('mouseleave', function() {
				$(".active .section-image").removeClass('hover');
				setTimeout( function(){
					$(".active .section-image").removeClass('hover-speed');
				} , 600 );
			});	
			
			
		}
			

	}//End FullPage	
	
	
	
	
/*--------------------------------------------------
Function Masonry Portfolio
---------------------------------------------------*/	
		
	function MasonryPortfolio() {	
	
		if( $('#portfolio-wrap').length > 0 ){
			
		
			var $container = $('#portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector });		
				return false;
			});
			
			$(window).on( 'resize', function () {
			
				var winWidth = window.innerWidth;
				columnNumb = 1;			
				var attr_col = $('#portfolio').attr('data-col');
					
				 if (winWidth >= 1466) {
					
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 320 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 70 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					if (typeof attr_col !== typeof undefined && attr_col !== false) {
						columnNumb = $('#portfolio').attr('data-col');
					} else columnNumb = 2;
					
					postHeight = window.innerHeight
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						
						
						
						if ( $('#portfolio').attr('data-col') === '2' ) {						
							if( $('.zipper').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 60 + 'px',
									height : postWidth * 1 - 60 + 'px',
									margin : 30 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 60 + 'px',
									height : postWidth * 1 - 60 + 'px',
									margin : 30 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1  + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 0.5 - 60 + 'px',
									height : postWidth * 0.5 - 60 + 'px',
									margin : 30 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 60 + 'px',
									height : postWidth * 1 - 60 + 'px',
									margin : 30 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
							}
						} 
						
					});
					
					
				} else if (winWidth > 1024) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 120 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 150  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.zipper').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1  + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 0.5 - 40 + 'px',
									height : postWidth * 0.5 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
							}
					});
					
					
				}else if (winWidth > 767) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 50 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 100  + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 2;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.zipper').length > 0 ){
								$('.item').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 1  + 'px',
									height : postWidth * 1 + 'px',
									margin : 0 + 'px'  
								});									
							} else {
								$('.item').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item').css( {
									width : postWidth * 1 + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px' 
								});
								$('.item.wide').css( { 
									width : postWidth * 1 - 40 + 'px',
									height : postWidth * 1 - 40 + 'px',
									margin : 20 + 'px' 
								});
								$('.no-gutter .item.wide').css( { 
									width : postWidth * 2  + 'px',
									height : postWidth * 1.4 + 'px',
									margin : 0 + 'px'  
								});	
							}
					});
					
					
				}	else if (winWidth > 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 40 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() -80 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.zipper').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth * 1 + 'px',
								height : postWidth * 1 + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 1 + 'px',
								margin : 0 + 'px'  
							});									
						} else {
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth * 1 + 'px',
								height : postWidth * 1.4 + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 2  + 'px',
								height : postWidth * 1.4 + 'px',
								margin : 0 + 'px'  
							});	
						}
					});
					
					
				}
				
				else if (winWidth <= 479) {
					
					$('#portfolio-wrap').css( {width : $('#portfolio-wrap').parent().width() - 30 + 'px'});
					$('#portfolio-wrap.no-gutter').css( {width : $('#portfolio-wrap').parent().width() - 60 + 'px'});			
					var portfolioWidth = $('#portfolio-wrap').width();
					
					columnNumb = 1;
					postWidth = Math.floor(portfolioWidth / columnNumb)			
					$container.find('.item').each(function () { 
						if( $('.zipper').length > 0 ){
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth * 1 + 'px',
								height : postWidth * 1 + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 1  + 'px',
								height : postWidth * 1 + 'px',
								margin : 0 + 'px'  
							});									
						} else {
							$('.item').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item').css( {
								width : postWidth * 1 + 'px',
								height : postWidth * 1.4 + 'px',
								margin : 0 + 'px' 
							});
							$('.item.wide').css( { 
								width : postWidth * 1 - 40 + 'px',
								height : postWidth * 1 - 40 + 'px',
								margin : 20 + 'px' 
							});
							$('.no-gutter .item.wide').css( { 
								width : postWidth * 2  + 'px',
								height : postWidth * 1.4 + 'px',
								margin : 0 + 'px'  
							});	
						}
					});
					
					
				}		
				return columnNumb;
				
			
			}).resize();
		
			$("#all").trigger('click');
			
			
			
			setTimeout( function(){				
				
				var $animation_elements = $('.item');
				var $window = $(window);
				
				function check_if_in_view() {
				  var window_height = $window.height();
				  var window_top_position = $window.scrollTop() + 50;
				  var window_bottom_position = (window_top_position + window_height - 350);
				
				  $.each($animation_elements, function() {
					var $element = $(this);
					var element_height = $element.outerHeight();
					var element_top_position = $element.offset().top;
					var element_bottom_position = (element_top_position + element_height);
				
				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
						$element.addClass('in-view');
					}
				 
				});
				}
				
				$window.on('scroll resize', check_if_in_view);
			} , 1000 );	
			
			
			
			
			
							
		}
	
	}//End MasonryPortfolio
	



/*--------------------------------------------------
Function Virtual Scroll
---------------------------------------------------*/

	function VirtualScr() {		
		
		new SmoothScroll();

		function SmoothScroll(el) {
		var t = this, h = document.documentElement;
		el = el || window;
		t.rAF = false;
		t.target = 0;
		t.scroll = 0;
		t.animate = function() {
		t.scroll += (t.target - t.scroll) * 0.1;
		if (Math.abs(t.scroll.toFixed(5) - t.target) <= 0.47131) {
		cancelAnimationFrame(t.rAF);
		t.rAF = false;}
		if (el == window) scrollTo(0, t.scroll);
		else el.scrollTop = t.scroll;
		if (t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onmousewheel = function(e) {
		e.preventDefault();
		e.stopPropagation();
		var scrollEnd = (el == window) ? h.scrollHeight - h.clientHeight : el.scrollHeight - el.clientHeight;
		t.target += (e.wheelDelta > 0) ? -100 : 100;
		if (t.target < 0) t.target = 0;
		if (t.target > scrollEnd) t.target = scrollEnd;
		if (!t.rAF) t.rAF = requestAnimationFrame(t.animate);};
		el.onscroll = function() {
		if (t.rAF) return;
		t.target = (el == window) ? pageYOffset || h.scrollTop : el.scrollTop;
		t.scroll = t.target;};
		}
			
		
	}// End First Load
	
	
	

 

/*--------------------------------------------------
Function FooterAppear
---------------------------------------------------*/	
	
	function FooterAppear() {
		
		if( $('#page-content').length > 0 ){
			$(window).scroll(function() {    
				var scroll = $(window).scrollTop();
			
				if (scroll >= 300) {					
					$("#page-action-holder,  #socials-holder").addClass('is-active');					
				} else {								
					$("#page-action-holder,  #socials-holder").removeClass('is-active');
				}
			});
		}
		
		var lastScroll = 0;
	
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll > lastScroll) {
				$("#page-action-holder,  #socials-holder").addClass("is-visible");
			} else if (scroll < lastScroll) {
				$("#page-action-holder,  #socials-holder").removeClass("is-visible");
			}
			lastScroll = scroll;
		});
  
  }//End FooterAppear
  
  

  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:0,
			autoHeight:false,
			nav:true,
			navSpeed: 600,
			items:1,			
		});
		
		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			navSpeed: 600,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:true,
				dotsEach: 1,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoplayHoverPause:true
			});		  
		}
		
	
	}//End Sliders
	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
			
	}//End Lightbox	 
	
	

	
/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		$('.has-animation').each(function() {	
			$(this).appear(function() {				
				$(this).delay($(this).attr('data-delay')).queue(function(next){
					$(this).addClass('animate-in');
					next();
				});				 		
			});		
		});		
	
	}//End AppearIteam					 	
  
  
  
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function BackToTop() {
		
		$('.scrolltotop').on('click', function() {
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	
	}//End BackToTop
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( jQuery('#contact-formular').length > 0 ){
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						comments: $('#comments').val()
					},
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled');
						if(data.match('success') != null) $('#contactform').slideUp('slow');		
					}
				);		
				});		
				return false;		
			});		
		}

	}//End ContactForm		
	
	