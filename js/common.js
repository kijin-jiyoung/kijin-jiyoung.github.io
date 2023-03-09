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
	
	
	
	
	
	
	
	
	
	
	
	
	
//인터뷰 더보기
	$('.interPop .popCont .inner .more span').click(function(){
		$('.interPop .popCont .inner .hidden').fadeIn('slow');
		$(this).parents('.more').hide();
	});
	
	$(window).scroll(function(){
		var idx = $(window).scrollTop();
		if(idx > 10){
			$('.head').addClass('on');
		}else{
			$('.head').removeClass('on');
		}
	});
	
	
//인터뷰 닫기
	$('.btnInterClose').click(function(){
		$('body').removeClass('interOpen');
		$('body').off('scroll touchmove mousewheel');
		noScrollClear();
	});

	
	
	
	
	

	
	

$(function(){
    /*$("img").each( function(){
        $(this).attr({"oncontextmenu":"return false"});
    });*/
    // For Android
    $(document).bind("contextmenu", function (e) {
        return false;
    });
    
    /*$("img").on("touchstart",function(e){
        let eventStop = true;
        if( $(this).closest(".swiper-button-next").length || $(this).hasClass("zoomImg") ) {
            console.log("aa");
            eventStop = false;
        }
        
        
        eventStop ? e.preventDefault() : ""
    }).on("touchend",function(e){
        let eventStop = true;
        if( $(this).closest(".swiper-button-next").length || $(this).hasClass("zoomImg") ) {
            console.log("bb");
            eventStop = false;
        }
        
        eventStop ? e.preventDefault() : ""
    }).on("touchmove",function(e){
        //e.preventDefault(); 
    });*/
    
    /*$("a").on("click", function(e) {
        if( !this.attr("href").indexOf("tel") )
            e.preventDefault();
    })*/
    
    $("a").on("contextmenu", (e) => {
        e.preventDefault();
        return false;
    })
    
    //$("img").attr("oncontextmenu","return false").attr("style","-webkit-touch-callout:none");
    
    setTimeout(function(){
        try{
            var map_level = map.getLevel();
            map.setLevel(map_level + 1);
            map.setLevel(map_level);
        } catch(e){}
    },1000);
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

$(function() {
    $('.lazy').lazy();
    setTimeout( ()=> {
        $('.popslide img.lazy').each( function() {
            $(this).attr('src', $(this).data('src'));
            $(this).removeAttr('data-src');
            $(this).removeClass('lazy');
        });
        //$('.contentSlide.popslide .slideList ul').slick('refresh');
    },5000);
});
	
	
	
	
	
	
	
	
	//갤러리팝업 - 슬라이드
	var popSlide = new Swiper('.popSlide .swiper-container', {
	  slidesPerView: 1,
	  spaceBetween: 0,
	  loop: true,
	  speed:1100,
	  pagination: {
      	el: ".popSlide .swiper-pagination",
        type: "fraction",
      },
	  navigation: {
      	nextEl: ".popSlide .swiper-button-next",
      	prevEl: ".popSlide .swiper-button-prev",
     }
	});
	// 갤러리팝업 - 열기
	$(".galWrap .galList li").on('click', function(e){
		noScrollRun();
		$('body').addClass('showSlide');
		$('body').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();     
			event.stopPropagation();     
			return false; 
		});
		var slideActive = $(this).attr("slide-num");
		popSlide.update();
		popSlide.slideTo(slideActive, 0);
	});
	// 갤러리팝업 -  닫기
	$(".popSlide .closeSlide").click(function(){
		noScrollClear();
		$('body').removeClass('showSlide');
		$('body').off('scroll touchmove mousewheel');
	});
		

	
	// 갤러리 더보기
function morePic(){
	$('.hiddenList').show();
	$('.galleryWrap .more').hide();
}

//인터뷰 열기
function openInterview(){
	$('.interPop').scrollTop(0);
	$('body').addClass('interOpen');
	$('body').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
		event.preventDefault();     
		event.stopPropagation();     
		return false; 
	});
	noScrollRun();
}
	
	
	
	

	
	
	
	
	

