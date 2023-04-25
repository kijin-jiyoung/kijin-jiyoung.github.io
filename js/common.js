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

// 다디단
var DADIDAN = (function(){
  var $wrap = $('.wrap'),
      controller,
      moveFlag = false;

  var posx;
  var posy;
  var pos_val1= 0, pos_val2= 0, pos_val3= 0,
       wH = $(window).height();

  var random = function random(min, max){
      return Math.round(min + Math.random()*(max-min));
  };
  var posXArr=[],
       posYArr=[];
  var myTimer;

  function init(){
      setTimerMot(pos_val1,0,1.2,10600);
      setTimerMot(pos_val2,1,1.5,20600);
      setTimerMot(pos_val3,2,0.9,200);
  }
  
  function setTimerMot(pos_val,i,time1,time2){
  myTimer = setTimeout(function() {
      randomPos();
        posXArr.push(posx);
        posYArr.push(posy);
        var ranNum = random(0,5);
         $('.leafOb').eq(i).css({'top':posy});
        TweenMax.fromTo($('.leafOb').eq(i).find('.leaf'),10,{x:-50,rotation:-6*ranNum},{x:50,delay:0.2*i,rotation:6*ranNum,repeat: -1,yoyo: true,ease: Power2.easeInOut},{delay:220*i});
        TweenMax.to($('.leafOb').eq(i),0.8,{autoAlpha:1,delay:0.4*i});
        
        setIntervalMot(pos_val,i,time1);
        clearTimeout(myTimer);
  }, time2);
  }

  function setIntervalMot(_val,_idx,time){
      $('.leafOb').eq(_idx).hide();
      setInterval(function(){
          _val += 1;
          $('.leafOb').eq(_idx).show();
          if (_val >= wH){
              _val = 0;

              $('.leafOb').eq(_idx).hide();
              randomPos();
          }

          $('.leafOb').eq(_idx).css({top:_val});
      },time*100);
  }

  function randomPos(){
      var divsize = (Math.random()*50).toFixed();

      posx = Number((Math.random() * ($(window).width() - divsize)).toFixed());
      posy = Number((Math.random() * ($(window).height() - divsize)).toFixed());
  }

  return {
     init : init
  }

}());








