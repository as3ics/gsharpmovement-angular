(function($){
	"use strict";

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-light').addClass("is-sticky");
		}
		else{
			$('.navbar-light').removeClass("is-sticky");
		}
	});

	// Sidebar Example Demo Modal
	$(".sidebar-demo-control").on('click',  function() {
		$('.example-demo-modal').toggleClass('active');
	});
	$(".example-demo-modal-control").on('click',  function() {
		$('.example-demo-modal').removeClass('active');
	});

	// Navbar Menu JS
	$('.navbar .navbar-nav li .nav-link').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
	$('.navbar .navbar-nav li').on('click',function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
	})

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		],
	});
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".home-slides p").removeClass("animated fadeInDown").css("opacity", "0");
		$(".home-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".home-slides span").removeClass("animated zoomIn").css("opacity", "0");
		$(".home-slides .btn, .home-slides .video-btn").removeClass("animated fadeInDown").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".home-slides p").addClass("animated fadeInDown").css("opacity", "1");
		$(".home-slides h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".home-slides span").addClass("animated zoomIn").css("opacity", "1");
		$(".home-slides .btn, .home-slides .video-btn").addClass("animated fadeInDown").css("opacity", "1");
	});

	// Single Features Active
	$('.features-area').on('mouseover', '.single-features', function() {
		$('.single-features.active').removeClass('active');
		$(this).addClass('active');
	});

	// MixItUp Shorting
	$(function(){
		$('.shorting').mixItUp();
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		],
		responsive: {
			0: {
				items:1,
			},
			768: {
				items:2,
			},
			1200: {
				items:3,
			}
		}
	});

	// Popup Image
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Ripple Effect
	$('.ripple-effect, .ripple-playing').ripples({
		resolution: 512,
		dropRadius: 25,
		perturbance: 0.04,
	});

	// Testimonial Slides
	$('.testimonial-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		],
		responsive: {
			0: {
				items:1,
			},
			768: {
				items:1,
			},
			1200: {
				items:2,
			}
		}
	});

	// Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			let el = $(this);
			let percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}
	if($('.count-box').length){
		$('.count-box').appear(function(){
			let $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	// Text Animation
	let TxtType = function(el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};
	TxtType.prototype.tick = function() {
		let i = this.loopNum % this.toRotate.length;
		let fullTxt = this.toRotate[i];
		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}
		this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		let that = this;
		let delta = 200 - Math.random() * 100;
		if (this.isDeleting) { delta /= 2; }
		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}
		setTimeout(function() {
			that.tick();
		}, delta);
	};
	window.onload = function() {
		let elements = document.getElementsByClassName('typewrite');
		for (let i=0; i<elements.length; i++) {
			let toRotate = elements[i].getAttribute('data-type');
			let period = elements[i].getAttribute('data-period');
			if (toRotate) {
			  new TxtType(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		let css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".typewrite > .wrap { border-right: none}";
		document.body.appendChild(css);
	};

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			let tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Particles JS
	if(document.getElementById("particles-js")) particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 110,
				"density": {
					"enable": true,
					"value_area": 1000
				}
			},
			"color": {
				"value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#fff"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.6,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 2,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 120,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": false
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});

	// Particles Js Bubble
	if(document.getElementById("particles-js-bubble")) particlesJS("particles-js-bubble", {
		"particles": {
			"number": {
				"value": 120, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#f2f2f2"
			}
			, "shape": {
				"type":"circle", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg", "width": 80, "height": 80
				}
			}
			, "opacity": {
				"value":0.5, "random":true, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value":10, "random":true, "anim": {
					"enable": false, "speed": 40, "size_min": 0.1, "sync": false
				}
			}
			, "line_linked": {
				"enable": false, "distance": 500, "color": "#f2f2f2", "opacity": 0.4, "width": 2
			}
			, "move": {
				"enable":true, "speed":6, "direction":"bottom", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on":"canvas", "events": {
				"onhover": {
					"enable": true, "mode": "bubble"
				}
				, "onclick": {
					"enable": true, "mode": "repulse"
				}
				, "resize":true
			}
			, "modes": {
				"grab": {
					"distance":400, "line_linked": {
						"opacity": 0.5
					}
				}
				, "bubble": {
					"distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3
				}
				, "repulse": {
					"distance": 200, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect":true
	});

	// Particles Js Star
	if(document.getElementById("particles-js-star")) particlesJS("particles-js-star", {
		"particles": {
			"number": {
				"value": 100, "density": {
					"enable": false, "value_area": 800
				}
			}
			, "color": {
				"value": "#f2f2f2"
			}
			, "shape": {
				"type":"star", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
			}
			, "opacity": {
				"value":0.5, "random":false, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value":4, "random":true, "anim": {
					"enable": false, "speed": 40, "size_min": 0.1, "sync": false
				}
			}
			, "line_linked": {
				"enable": false, "distance": 150, "color": "#f2f2f2", "opacity": 0.1, "width": 1
			}
			, "move": {
				"enable":true, "speed":14, "direction":"right", "random":false, "straight":true, "out_mode":"out", "bounce":false, "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on":"canvas", "events": {
				"onhover": {
					"enable": false, "mode": "grab"
				}
				, "onclick": {
					"enable": true, "mode": "repulse"
				}
				, "resize":true
			}
			, "modes": {
				"grab": {
					"distance":200, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
				}
				, "repulse": {
					"distance": 200, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect":true
	});

	// Particles Js Bubble
	if(document.getElementById("particles-js-big-bubble")) particlesJS("particles-js-big-bubble", {
		"particles": {
			"number": {
				"value": 6, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#1b1e34"
			}
			, "shape": {
				"type":"polygon", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 6
				}
				, "image": {
					"src": "img/github.svg", "width": 10, "height": 10
				}
			}
			, "opacity": {
				"value":0.3, "random":true, "anim": {
					"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
				}
			}
			, "size": {
				"value": 160, "random":false, "anim": {
					"enable": true, "speed": 10, "size_min": 40, "sync": false
				}
			}
			, "line_linked": {
				"enable": false, "distance": 200, "color": "#ffffff", "opacity": 1, "width": 2
			}
			, "move": {
				"enable":true, "speed":8, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
					"enable": false, "rotateX": 600, "rotateY": 1200
				}
			}
		}
		, "interactivity": {
			"detect_on":"canvas", "events": {
				"onhover": {
					"enable": false, "mode": "grab"
				}
				, "onclick": {
					"enable": false, "mode": "push"
				}
				, "resize":true
			}
			, "modes": {
				"grab": {
					"distance":400, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
				}
				, "repulse": {
					"distance": 200, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect":true
	});

	// Particles Js Small Bubble
	if(document.getElementById("particles-js-small-bubble")) particlesJS("particles-js-small-bubble", {
		"particles": {
			"number": {
				"value": 200, "density": {
					"enable": true, "value_area": 800
				}
			}
			, "color": {
				"value": "#ffffff"
			}
			, "shape": {
				"type":"circle", "stroke": {
					"width": 0, "color": "#000000"
				}
				, "polygon": {
					"nb_sides": 5
				}
				, "image": {
					"src": "img/github.svg", "width": 100, "height": 100
				}
			}
			, "opacity": {
				"value":1, "random":true, "anim": {
					"enable": true, "speed": 1, "opacity_min": 0, "sync": false
				}
			}
			, "size": {
				"value":3, "random":true, "anim": {
					"enable": false, "speed": 4, "size_min": 0.3, "sync": false
				}
			}
			, "line_linked": {
				"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
			}
			, "move": {
				"enable":true, "speed":1, "direction":"none", "random":true, "straight":false, "out_mode":"out", "bounce":false, "attract": {
					"enable": false, "rotateX": 600, "rotateY": 600
				}
			}
		}
		, "interactivity": {
			"detect_on":"canvas", "events": {
				"onhover": {
					"enable": true, "mode": "bubble"
				}
				, "onclick": {
					"enable": true, "mode": "repulse"
				}
				, "resize":true
			}
			, "modes": {
				"grab": {
					"distance":400, "line_linked": {
						"opacity": 1
					}
				}
				, "bubble": {
					"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3
				}
				, "repulse": {
					"distance": 400, "duration": 0.4
				}
				, "push": {
					"particles_nb": 4
				}
				, "remove": {
					"particles_nb": 2
				}
			}
		}
		, "retina_detect":true
	});

	// Pricing Tabs
	$(".tab-slider-body").hide();
	$(".tab-slider-body:first").show();
	$(".tab-slider-nav li").on('click', function() {
		$(".tab-slider-body").hide();
		let activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn();
		if($(this).attr("rel") == "yearly"){
			$('.tab-slider-tabs').addClass('slide');
		}else {
			$('.tab-slider-tabs').removeClass('slide');
		}
		$(".tab-slider-nav li").removeClass("active");
		$(this).addClass("active");
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		],
		responsive: {
			0: {
				items:2,
			},
			768: {
				items:3,
			},
			1200: {
				items:5,
			}
		}
	});

	// Odometer JS
    $('.odometer').appear(function(e) {
        let odo = $(".odometer");
        odo.each(function() {
            let countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

	// WOW JS
	$(window).on ('load', function (){
		if ($(".wow").length) { 
			let wow = new WOW ({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 20,
				mobile: true,
				live: true,
			});
			wow.init();
		}
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Go to Top
	$(function(){
		// Scroll event
		$(window).on('scroll', function(){
			let scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').fadeIn('slow');
			if (scrolled < 300) $('.go-top').fadeOut('slow');
		});  
		// Click event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));