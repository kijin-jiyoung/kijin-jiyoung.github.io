var JT = {};
JT.smoothscroll = {
	passive : function(){
		var supportsPassive = false;
		try {
		  document.addEventListener("test", null, { get passive() { supportsPassive = true }});
		} catch(e) {}
		return supportsPassive;
	},
	init : function(){
		if($('html').hasClass('mobile') || $('html').hasClass('mac') || $('html').hasClass('ff')) return;
        if($(window).width() < 1280){
            return;
        }
		//this.passive = true ;
        // console.log(this.passive())
		var $window = $(window);
		var scrollTime = 1;
		var distance_offset = 2.5;
		var scrollDistance = $window.height() / distance_offset;

		if(this.passive()){
			 console.log('passive');
		    window.addEventListener("wheel",this.scrolling,{passive: false});
		}else{
			 console.log('not passive');
             $window.on("mousewheel DOMMouseScroll", this.scrolling);
		}
	},
	destroy : function(){
		//window.removeEventListener("mousewheel DOMMouseScroll");
		if(this.passive()){
			// console.log('destroy passive');
		    window.removeEventListener("wheel",this.scrolling);
		}else{
			// console.log('destroy not passive');
            $(window).off("mousewheel DOMMouseScroll", this.scrolling);
		}
		TweenMax.killChildTweensOf($(window),{scrollTo:true});
	},
	scrolling : function(event){
		event.preventDefault();

		var $window = $(window);
		var scrollTime = 1;
		var distance_offset = 2.5;

		// debug custom param for intro page
		// TODO : make options
		if($('#introduce-menu').length > 0){
			scrollTime = 1;
		    distance_offset = 4.5;
		}

		var scrollDistance = $window.height() / distance_offset;
		var delta = 0;

		if(JT.smoothscroll.passive()){
			//console.log('----111------');
		    //console.log(event);
		    //delta = event.wheelDelta/120 || -event.originalEvent.detail/3;
		    delta = event.wheelDelta/120 || -event.deltaY/3;
		}else{
			if(typeof event.originalEvent.deltaY != "undefined"){
				//console.log('----222------');
				//console.log(event.originalEvent);
				delta = -event.originalEvent.deltaY/120;
			}else{
				//console.log('----333------');
				//console.log(event.originalEvent);
			    delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			}
		}

		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
			ease: Power3.easeOut,
			overwrite: 5
		});
	}
};
JT.smoothscroll.init();





















$(function(){
	$(window).scrollTop(0);
	
	$(document).ready(function(){
		$('.mainVisual').imagesLoaded( { background: true }, function() {
	  		$('body').addClass('mainLoad');
		});
	});
	
	//경험하기 iframe 대응
	var offsetArray = [];
	$(window).load(function(){
		offsetArray[0] = $('.greetingWrap').length > 0 ? $('.greetingWrap').offset().top : 0;
		offsetArray[1] = $('.dayWrap').length > 0 ? $('.dayWrap').offset().top : 0;
		offsetArray[2] = $('.galleryWrap').length > 0 ? $('.galleryWrap').offset().top : 0;
		offsetArray[3] = $('.infoWrap').length > 0 ? $('.infoWrap').offset().top : 0;
		offsetArray[4] = $('.guestBookWrap').length > 0 ? $('.guestBookWrap').offset().top : 0;
		offsetArray[5] = $('.contactWrap').length > 0 ? $('.contactWrap').offset().top : 0; 
		offsetArray[6] = $('.mindWrap').length > 0 ? $('.mindWrap').offset().top : 0;
		offsetArray[7] = $('.locationWrap').length > 0 ? $('.locationWrap').offset().top : 0;
		offsetArray[8] = $('.thanksWrap').length > 0 ? $('.thanksWrap').offset().top : 0;
	});
	//메뉴이동
    $('.gnbList ul li a').on('click', function(e) {
        e.preventDefault();
		$('body').removeClass('gnbOpen');
		noScrollClear();
	   	moveGnb = true;
	   
	   if(!$('.wrap').hasClass('iframe')){
			   var idx = $(this).parent().index();
	   		switch(idx){
	   			case 0 : winScTop = $('.greetingWrap').offset().top;
	   			break;
	   			case 1 : winScTop = $('.dayWrap').offset().top;
	   			break;
	   			case 2 : winScTop = $('.galleryWrap').offset().top;
	   			break;
	   			case 3 : winScTop = $('.infoWrap').offset().top;
	   			break;
	   			case 4 : winScTop = $('.guestBookWrap').offset().top;
	   			break;
	   			case 5 : winScTop = $('.contactWrap').offset().top;
	   			break;
	   			case 6 : winScTop = $('.mindWrap').offset().top;
	   			break;
	   			case 7 : winScTop = $('.locationWrap').offset().top;
	   			break;
	   			case 8 : winScTop = $('.thanksWrap').offset().top;
	   			break;
	   		}
	   
           $('body,html').stop().animate({
               scrollTop: winScTop
           }, 500,function(){});
	   }else{
		   var idx = $(this).parent().index();
		   switch(idx){
			   case 0 : winScTop = offsetArray[0];
      			break;
			   case 1 : openInterview(); return false;
			   break;
			   case 2 : winScTop = offsetArray[1];
			   break;
			   case 3 : winScTop = offsetArray[2];
			   break;
			   case 4 : winScTop = offsetArray[3];
			   break;
			   case 5 : winScTop = offsetArray[4];
			   break;
			   case 6 : winScTop = offsetArray[5];
			   break;
			   case 7 : winScTop = offsetArray[6];
			   break;
			   case 8 : winScTop = offsetArray[7];
			   break;
			   case 9 : winScTop = offsetArray[8];
			   break;
		   }
		   $('.wrap').stop().animate({
			   scrollTop: winScTop
			   }, 500,function(){
		   });
	   }
    });