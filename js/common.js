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

//얼럿
function alertOpen_skin(idx){
	$('.alertPop .title').html(idx);
	$('.alertPop').fadeIn('fast');
}
function alertClose_skin(){
	$('.alertPop').fadeOut('fast');
}




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
	
	// 예식장정보1
	var infoList1 = new Swiper('.infoList .swiper-container', {
    //effect: "fade",
    slidesPerView: 'auto',
    spaceBetween: 0,
    autoHeight: true,
    //allowTouchMove : false,
    centeredSlides: true,
    speed: 200,
      loop: true,
      navigation: {
        nextEl: ".infoList .swiper-button-next",
        prevEl: ".infoList .swiper-button-prev"
    }
  });



	$(".infoList .tab button").click(function(){
		$(".infoList .tab button").removeClass('active');
		$(this).addClass('active');
		infoList1.slideTo($(this).index());
		infoImgChg($(this).index());
	});

	$(".infoList .btnInfo").on('click', function(){ 
		var activeIndex = infoList1.activeIndex+1;
		if($(".infoList .tab button").eq(activeIndex).length <= 0) activeIndex = 0;
		$(".infoList .tab button").removeClass('active');
		$(".infoList .tab button").eq(activeIndex).addClass('active');
		infoList1.slideTo(activeIndex);
		infoImgChg(activeIndex);
	});

	infoImgChg(0);
	function infoImgChg(i){
		var imgSrc = '';
		imgSrc = $(".infoList .tab button").eq(i).data('img');
		$('.infoList .leftBg img, .infoList .rightBg img').attr('src', imgSrc);
	}
	
	//계좌번호 보기
	$('.mindWrap .contBox .tit').on('click',function(){
		$(this).parents('.contBox').toggleClass('active');
	});
	
	//링크복사
	var url = document.location.href;
	var clipboard = new ClipboardJS('.link', {
		text: function() {
			return url;
		}
	});
	clipboard.on('success', function(e) {
	   alertOpen_skin('URL이 복사되었습니다.');
	});
		
	var clipboard4 = new ClipboardJS('.copy03');
	clipboard4.on('success', function(e) {
		alertOpen_skin('주소가 복사되었습니다.');
	});
		
	var bankCopy = new ClipboardJS('.bankCopy');
	bankCopy.on('success', function(e) {
		alertOpen_skin('계좌번호가 복사되었습니다.');
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
	
	

	
	var playBgm = document.getElementById("bgmAudio");
	//playBgm.play();
	//playBgm ? playBgm.pause() : "";
	$('.btnControl a').on('click', function(e){
		e.preventDefault();
		$('.btnControl').toggleClass('on');
		if($('.btnControl').hasClass('on')){
			playBgm.play();
			$('.btnControl .pop a').text('BGM on');
		} else {
			playBgm.pause();
			playBgm.currentTime = 0;
			$('.btnControl .pop a').text('BGM off');
		}
	});
	
	var UserAgent = navigator.userAgent;
	var UADevice = UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i);
	var UAVendor = UserAgent.match(/LG|SAMSUNG|Samsung/);
	if ( UADevice !== null || UAVendor!== null){
		$('html').addClass('mobile');
	}
	var agent = navigator.userAgent.toLowerCase(); 
	
	if (agent.indexOf("chrome") != -1 && !$('html').hasClass('mobile')) {
		var weaList = '<iframe class="silence" style="width:1px; height:1px;" src="https://dddproject.com/html/images/silence.mp3" allow="autoplay"></iframe>';
		$('.wrap').append(weaList);
	}else{

	}

	// 위로가기
	$('.btnTop').on('click',function(){
		$('html,body').stop().animate({scrollTop:0},1000);
	});
	// 아래로
	$('.btnDown').on('click',function(){
		$('html,body').stop().animate({scrollTop:$(document).height()},1000);
	});
	
	//인터뷰 닫기
	$('.btnInterClose').click(function(){
		$('body').removeClass('interOpen');
		$('body').off('scroll touchmove mousewheel');
		noScrollClear();
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

//유투브 영상
function youtubeOpen(src){
	var playBgm = document.getElementById("bgmAudio");
	var youtubeSrc = '<div class="videoBox"><iframe width="100%" src="https://www.youtube-nocookie.com/embed/'+src+'?autoplay=1&rel=0&vq=hd1080&playlist='+src+'" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"  allowfullscreen></iframe></div>';
	$('.inFrame').append(youtubeSrc);
	if( playBgm ) {
	    playBgm.pause();
	    playBgm.currentTime = 0;
	}
	$('.btnControl .pop a').text('BGM off');
	$('.btnControl').removeClass('on');
	$('.videoGal .videoWrap .btnMovieClose').fadeIn(200);
	noScrollRun();
	$('body').addClass('showYoutube');
}
//유투브 영상 닫기
function videoClose(src){
	$('.inFrame').empty();
	$('.btnControl').removeClass('on');
    $('.videoGal .videoWrap .btnMovieClose').hide();
	noScrollClear();
	$('body').removeClass('showYoutube');
}

var posY;
function noScrollRun() {
	posY = $(window).scrollTop();
    $('body').addClass('noScroll');
    $(".wrap").css("top",-posY);
}
function noScrollClear() {
	$('body').removeClass('noScroll');
    posY = $(window).scrollTop(posY);
    $(".wrap").attr("style","");
}



// 이미지팝업 열기/닫기 hammer.zoom.js
