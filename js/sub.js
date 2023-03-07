@charset "utf-8";

.subContainer {max-width:1280px; margin:0 auto; padding:50px 0 120px 0;}
.subContainer.full {max-width:100%;}
.subContainer.grayBg {padding:50px 0 125px 0; background:#f8f8f8;}
.subContainer.ptZero {padding:0; /*padding-top:238px !important;*/}


.linkList {margin-bottom:10px; background:#fff;}
.linkList ul li {border-bottom:1px solid #f8f8f8;}
.linkList ul li a{position: relative; display: block; font-size:14px; line-height:14px; color:#222222; font-weight:700; padding:20px 15px;}
.linkList ul li a:after {content:''; position: absolute; right:20px; top:50%; width:9px; height:16px; margin-top:-8px; background:url('../images/sub/ico_arrow_m.png') center no-repeat; background-size:9px auto;}
.linkList ul li.arrowNone a:after{display: none;}


.h2Wrap {margin-bottom:50px;}
.h2Wrap h2 {font-size:32px; line-height:32px; color:#222222; font-weight:700;}
.h2Wrap.centerBorder {text-align: center; padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #f2f2f2;}

.sortWrap {position: relative; margin-bottom:50px; text-align: center;}
.sortWrap .selSort {position: absolute; right:0; top:-10px;}

.lstSort ul{display: inline-block; border-bottom:1px solid #f2f2f2;}
.lstSort ul li {display: inline-block; vertical-align: top; margin-right:25px; }
.lstSort ul li:last-child {margin-right:0;}
.lstSort ul li a {position: relative; display: block;padding-bottom:16px; font-size:18px; line-height:18px; color:#888888; font-weight:300;}
.lstSort ul li.active a {font-weight:700; color:#222222;}
.lstSort ul li.active a:after {content:''; position: absolute; left:0; bottom:0; width: 100%; height:2px; background:#222222;}

.lstTab {padding-top:30px;}
.lstTab ul li {display: inline-block; vertical-align: top; margin-right:12px; }
.lstTab ul li:last-child {margin-right:0;}
.lstTab ul li a {display: block; font-size:14px; color:#aaaaaa; font-weight:300; line-height:35px; border:1px solid #eaeaea; min-width:167px; border-radius:10px; padding:0 10px;}
.lstTab ul li.active a {font-weight:500; color:#fff; background:#222222; border:none;}


.selSort {display: inline-block;}
.selSort .title a {display: block; font-size:18px; color:#222222; font-weight:500; line-height:18px; width:130px; padding:20px 0 20px 0; text-align: right;}
.selSort .title a span {padding-right:30px; background:url('../images/sub/ico_sortdown.png') right center no-repeat;}
.selSort .pop {display: none; position: absolute; right:0; top:55px; width: 100%; z-index:20; padding:10px 0; background:#fff; border:1px solid #f2f2f2}
.selSort .pop li a {display: block; font-size:16px; color:#888888; font-weight:300; line-height:16px;  padding:10px 30px 10px 0; text-align: right;}
.selSort.active .pop {display: block;}
.selSort.active .title a span {background:url('../images/sub/ico_sortup.png') right center no-repeat;}

.prdListWrap .listType1 .in {padding-top: 0; padding-bottom:0;}



.detailWrap {}
.detailWrap .boxGrid {position: relative; max-width:1280px; margin:0 auto; min-height:1020px}
.detailWrap .boxGrid:after {content:''; display: block; clear:both;}
.detailWrap .boxGrid .detailSlide {position: absolute; left:0; top:0; width:calc(100% - 630px); }
.detailWrap .boxGrid .prdAllWrap {float:right; width:580px;}
.detailWrap .bgSlide {background:#f8f8f8; padding:30px 0; margin-bottom:50px;}
.detailWrap .topSlide {}

.detailSlide {float:left; position: relative;}
.detailSlide .gallery-top {margin-bottom:20px; border:1px solid #e8e7e7; border-radius:5px;}
.detailSlide .swiper-slide img {width:100%;}
.detailSlide .gallery-thumbs .swiper-slide {overflow:hidden; border:1px solid #f2f2f2; width:121px !important; margin-right:11px !important; cursor:pointer;}
.detailSlide .swiper-pagination {display: none; position:absolute; width:100%; bottom:8px; text-align: center; font-size: 0;}
.detailSlide .swiper-pagination span {width:7px; height:7px; border-radius:50%; background:#222222; margin-right:10px; opacity:1;}
.detailSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#bf94a2;}
.detailSlide .swiper-pagination span:last-child {margin-right:0;}

.btnBack {display: none; position: absolute; left:20px; top:20px;  width:10px; height:16px; background:url('../images/sub/ico_back_m.png') center no-repeat; background-size:10px auto; text-indent:-999em; z-index: 10;}


.favoSlide {margin-bottom:75px; }
.favoSlide .inner {padding:30px 0 70px 0; }
.favoSlide .inner .title {padding-bottom:50px; margin-bottom:35px; border-bottom:1px solid #f2f2f2;}
.favoSlide .inner .title span {font-size:24px; color:#222222; line-height:24px; font-weight: 700; padding-left:39px; background:url('/html/images/ico_favo.png') left center no-repeat;}
.favoSlide .slide {position: relative;}
.favoSlide .swiper-container {margin:0 100px;}
.favoSlide .swiper-slide {margin:0 10px; width:250px; }
.favoSlide .swiper-slide a {  position: relative; display: block;}
.favoSlide .swiper-slide a .img {margin-bottom:15px; overflow:hidden; border-radius:10px;}
.favoSlide .swiper-slide a .img img {width:100%;}
.favoSlide .swiper-slide a .txtWrap .tit01 {font-size:16px; color:#222222; font-weight:500; margin-bottom:5px;  height:54px; overflow:hidden; }
.favoSlide .swiper-slide a .txtWrap .info {font-size:18px; color:#bf94a2; font-weight:700;}
.favoSlide .control {}
.favoSlide .control a {position: absolute; top:102px; width:50px; height:50px; border:1px solid #efe8ea; border-radius:10px; background:#fff; }
.favoSlide .control a.prev {left:0; background:#fff url('/html/images/ico_prevSlide.png') center no-repeat;}
.favoSlide .control a.next {right:0; background:#fff url('/html/images/ico_nextSlide.png') center no-repeat;}

.favoSlideNew {margin-bottom:75px; }
.favoSlideNew .inner {padding:30px 0 70px 0; }
.favoSlideNew .inner .title {padding-bottom:50px; margin-bottom:35px; border-bottom:1px solid #f2f2f2;}
.favoSlideNew .inner .title span {font-size:24px; color:#222222; line-height:24px; font-weight: 700; padding-left:39px; background:url('/html/images/ico_favo.png') left center no-repeat;}
.favoSlideNew .slide {position: relative;}
.favoSlideNew .swiper-container {margin:0 100px;}
.favoSlideNew .swiper-slide {margin:0 10px; width:250px; }
.favoSlideNew .swiper-slide a {  position: relative; display: block;}
.favoSlideNew .swiper-slide a .img {margin-bottom:15px; overflow:hidden; border-radius:10px;}
.favoSlideNew .swiper-slide a .img img {width:100%;}
.favoSlideNew .swiper-slide a .txtWrap .tit01 {font-size:14px; color:#222222; font-weight:500; margin-bottom:5px;  height:auto; overflow:hidden; }
.favoSlideNew .swiper-slide a .txtWrap .info {font-size:18px; color:#bf94a2; font-weight:700;}
.favoSlideNew .control {}
.favoSlideNew .control a {position: absolute; top:102px; width:50px; height:50px; border:1px solid #efe8ea; border-radius:10px; background:#fff; }
.favoSlideNew .control a.prev {left:0; background:#fff url('/html/images/ico_prevSlide.png') center no-repeat;}
.favoSlideNew .control a.next {right:0; background:#fff url('/html/images/ico_nextSlide.png') center no-repeat;}


.starList li {display: inline-block; width:21px; height: 20px; background:url('../images/sub/ico_star_empty.png') center no-repeat; vertical-align: middle; }
.starList li.full {background:url('../images/sub/ico_star.png') center no-repeat;}
.starList li.half {background:url('../images/sub/ico_star_half.png') center no-repeat;}

.wranBox span {display: inline-block; vertical-align: top; padding-left:38px; background:url('../images/sub/ico_info.png') left 3px no-repeat; font-size:18px; font-weight:300; color:#222222; letter-spacing:-0.05em; }

.ckType1 {display: inline-block; vertical-align: top; }
.ckType1 input {position: absolute; visibility: hidden;}
.ckType1 label {position: relative; font-size:18px; line-height:18px; padding-left:35px; font-weight:300; }
.ckType1 label:after {content:''; position: absolute; left:0; top:50%; width:22px; height:22px; margin-top:-12px; border:1px solid #222222;}
.ckType1 input:checked + label:before {content:''; position: absolute; left:0; top:50%; margin-top:-12px; width:24px; height:24px; background:#222 url('../images/sub/ico_checkOn.png') center no-repeat;}
.ckType1.rightCk label {padding-left:0; padding-right: 35px; font-size:14px; color:#aaaaaa; line-height:14px;}
.ckType1.rightCk label:after {left:auto; right:0;}
.ckType1.rightCk input:checked + label:before { left:auto; right:0;}


.sorting {position: relative;  background:#fff; z-index: 10; cursor:pointer; }
.sorting .value {position: relative; height: 65px; font-size: 18px; color:#222222; line-height:65px; padding-left:30px; border:1px solid #222; font-weight: 500;}
.sorting .value:after {content:''; position: absolute; right:18px; top:50%; margin-top:-4px; width: 15px; height: 9px;background:url('../images/sub/ico_op.png') center no-repeat; }
.sorting .value.on:after {transform:rotate(180deg);  }
.sorting .lstValue  {position: absolute; left:0; top:65px; width: 100%; background:#fff; display: none; background:#f8f8f8; border:1px solid #f2f2f2; padding:15px 0; border-top:none;}
.sorting .lstValue li { font-size: 20px; color:#666666;  padding-left:30px;  margin-bottom:15px;}
.sorting .lstValue li:last-child {margin-bottom:0;}
.sorting .lstValue li label {cursor:pointer; display: block; font-size:18px; color:#222222; font-weight:300;}
.sorting .lstValue li input{display:none}

.infoDate {padding-top:12px;}
.infoDate span{display: inline-block; vertical-align: middle; position: relative; margin-right:12px; padding-right:12px; font-size:18px; color:#aaaaaa; font-weight:300; }
.infoDate span:after {content:''; position: absolute; right:0; top:50%; margin-top:-8px;; width:1px; height:16px; background:#eaeaea;}
.infoDate span:last-child:after {display: none;}

#prdAllWrapSide { overflow-y:auto; max-height:calc(100vh - 360px); }
.fixTabLoca .rightBuyList #prdAllWrapSide .fixArea .opList {max-height:100%; overflow:visible;}

.prdAllWrap {margin-bottom:70px; }
.prdAllWrap .prdInfo {position: relative;}
.prdAllWrap .prdInfo .label {display: inline-block; font-size:14px; line-height:14px; color:#fff; font-weight:500; padding:8px; background:#333; margin-bottom:10px;}
.prdAllWrap .prdInfo .title {font-size:24px; color:#222222; font-weight:700; margin-bottom:30px; }
.prdAllWrap .prdInfo .priceReview {padding-bottom:35px; margin-bottom:40px; border-bottom:1px solid #f2f2f2;}
.prdAllWrap .prdInfo .priceReview:after{content:''; display: block; clear:both;}
.prdAllWrap .prdInfo .priceReview .price {float:left; }
.prdAllWrap .prdInfo .priceReview .price .old {font-size:24px; line-height:24px; color:#cccccc; font-weight:300; text-decoration: line-through; margin-bottom:5px;}
.prdAllWrap .prdInfo .priceReview .price .info {font-size:24px; color:#222222; font-weight:300; }
.prdAllWrap .prdInfo .priceReview .price .info em {font-size:32px; font-weight:700;}
.prdAllWrap .prdInfo .priceReview .price .info .percent {font-size:32px; font-weight:700; color:#f76868; margin-left:20px;}
.prdAllWrap .prdInfo .priceReview .review {float:right; padding-top:45px; }
.prdAllWrap .prdInfo .priceReview .review .starList {display: inline-block; vertical-align: middle; margin-right: 10px;}
.prdAllWrap .prdInfo .priceReview .review .link {display: inline-block; vertical-align: middle; font-size:20px; line-height:20px; color:#222222; font-weight:300;}
.prdAllWrap .prdInfo .priceReview .review .link em {font-weight:700;}
.prdAllWrap .prdInfo .priceReview .review .link {border-bottom:1px solid #222;}


.prdAllWrap .wranBox {margin-bottom:45px;}
.prdAllWrap .favoShare {margin-bottom:30px;}
.prdAllWrap .favoShare:after {content:''; display: block; clear:both;}
.prdAllWrap .favoShare .box {position: relative; float:left; width:49%; border:1px solid #f2f2f2; text-align: center; overflow:hidden;}
.prdAllWrap .favoShare .box:last-child {float:right;}
.prdAllWrap .favoShare .box a {display: block; height:75px; line-height:75px;}
.prdAllWrap .favoShare .box a.share span{padding-left:37px; font-size:20px; color:#222222; font-weight:300; background:url('../images/sub/ico_share_m.png') left center no-repeat; background-size:22px auto;}
.prdAllWrap .favoShare .box input {position: absolute; visibility: hidden;}
.prdAllWrap .favoShare .box label {display: block;  height:75px; line-height:75px; font-size:20px; color:#222222; font-weight:700; }
.prdAllWrap .favoShare .box label span {padding-left:37px;  background:url('../images/sub/ico_favo.png') left center no-repeat; }
.prdAllWrap .favoShare .box label em {color:#f76868;}
.prdAllWrap .favoShare .box input:checked + label span { background:url('../images/sub/ico_favo_on.png') left center no-repeat; }
.prdAllWrap .favoShare .check:before{content:''; position: absolute; left:0; top:0; width:100%; height:100%; z-index:10; cursor:pointer;}


.prdAllWrap .btnExp {padding:0 0 45px 0;}
.prdAllWrap .btnExp a {display: block; background:#222222; border-radius:5px; height:100px; line-height:100px; text-align: center; font-size:20px; font-weight:300; color:#fff; }
.prdAllWrap .btnExp a span {padding-right:36px; background:url('../images/sub/ico_link.png') right center no-repeat;}
.prdAllWrap .btnExp a span em {font-weight:700;}
.prdAllWrap .fixArea .fixIn .tit {font-size:18px; color:#222222; line-height:18px; font-weight:500; margin-bottom:18px;}
.prdAllWrap .fixArea .fixIn .ckList  {margin-bottom:30px;}
.prdAllWrap .fixArea .fixIn .ckList .toggleCk {margin-bottom:10px;}
.prdAllWrap .fixArea .fixIn .ckList .toggleCk:last-child {margin-bottom:0;}
.prdAllWrap .fixArea .fixIn .ckList .toggleCk label{font-weight:300;}

.prdAllWrap .fixArea .fixIn .sorting {margin-bottom:20px;}
.prdAllWrap .fixArea .fixIn .selBox  { font-weight:500; margin-bottom:20px;}
.prdAllWrap .fixArea .fixIn .selBox select {margin-bottom:10px; height:65px; font-weight:500; }

.prdAllWrap .fixArea .fixIn .formBox .line .tit {padding-top:13px; min-width:190px;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox {width:100%;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox .ipBox input {height:45px; border-radius:10px; font-size:15px; font-weight:300; border:1px solid #dddddd; padding-left:20px;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox.date a {background:url('../images/order/ico_cal2.png') no-repeat;width:17px; height:17px; background-size:17px auto; right:20px; margin-top:-9px;}

.prdAllWrap .fixArea .fixIn .totalPrice {padding-top:25px; padding-bottom:30px; border-top:1px solid #222222;;}
.prdAllWrap .fixArea .fixIn .totalPrice:after {display: block; clear:both; content:'';}
.prdAllWrap .fixArea .fixIn .totalPrice .txt {float:left; font-size:20px; font-size:20px; padding-top:10px; font-weight:500; color:#222222}
.prdAllWrap .fixArea .fixIn .totalPrice .price {float:right; font-size:24px; font-size:24px;color:#222222; font-weight:300;}
.prdAllWrap .fixArea .fixIn .totalPrice .price em{font-weight:700; font-size:32px; font-size:32px; }

.prdAllWrap .fixArea .fixIn .opList ul li {padding:20px 0; position: relative; border-top:1px solid #f2f2f2;;}
.prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit01 {font-size:18px; font-weight:700; color:#222222; margin-bottom:5px;}
.prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit02 {font-size:18px; font-weight:300; color:#aaaaaa;}
.prdAllWrap .fixArea .fixIn .opList ul li .control {margin-top:20px; font-size: 0;}
.prdAllWrap .fixArea .fixIn .opList ul li .control a {width:24px; height:24px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-indent:-999em;}
.prdAllWrap .fixArea .fixIn .opList ul li .control a.min {background:#f8f8f8 url('../images/sub/ico_min.png') center no-repeat; }
.prdAllWrap .fixArea .fixIn .opList ul li .control a.plus {background:#f8f8f8 url('../images/sub/ico_plus.png') center no-repeat; }
.prdAllWrap .fixArea .fixIn .opList ul li .control input {font-size:14px; color:#222222; font-weight:300; width:48px; height:24px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-align: center; margin:0 5px;}
.prdAllWrap .fixArea .fixIn .opList ul li .price {position: absolute; right:0; bottom:20px;font-size:20px; line-height:20px; color:#222222; font-weight:300;}
.prdAllWrap .fixArea .fixIn .opList ul li .price em {font-weight:700;}
.prdAllWrap .fixArea .fixIn .opList ul li .del {position: absolute; right:0; top:5px; text-indent:-999em; width:14px; height:14px; background:url('../images/sub/ico_list_del.png') center no-repeat;}
.prdAllWrap .fixArea .btnOrder:after {content:''; display: block; clear:both;}
.prdAllWrap .fixArea .btnOrder a {float:left; width:49%;}
.prdAllWrap .fixArea .btnOrder a:last-child {float:right;}


.detailFolder {max-width:1280px; margin:0 auto;}
.detailFolder .folder {position: relative; border-bottom:2px solid #222222; padding-bottom:45px; margin-bottom:45px;}

.detailFolder .folder .title {position: relative; cursor:pointer; font-size:24px; line-height:24px; font-weight:700; color:#222222;}
.detailFolder .folder .title span {padding-left:35px;}
.detailFolder .folder .title:after {content:''; position: absolute; right:18px; top:50%; width:14px; height:9px; margin-top:-4px; background:url('../images/sub/ico_tab_on.png') center no-repeat; transform:rotate(180deg);}
.detailFolder .folder .title .count {display: inline-block; vertical-align: middle; margin-left:20px; font-size:24px; font-weight:300; border-bottom:1px solid #222; padding-bottom:5px;}
.detailFolder .folder .title .count em {font-weight:700;}
.detailFolder .folder .txt {font-size:20px; font-weight:300; padding-left:37px;}
.detailFolder .folder .contBox {margin-top:50px; position: relative; display: none;}
.detailFolder .folder.active .contBox{display: block;}
.detailFolder .folder.active .title:after {transform:rotate(0);}

.detailFolder .folder.detailImg.active .contBox { border-top:1px solid #eaeaea;}

/* .detailFolder .folder.detailImg.active {border-bottom:none; padding-bottom:0; } */
.detailFolder .folder.detailImg .contBox .img {text-align: center; height:2900px; overflow:hidden; background:#fbfbfb; border-bottom:1px solid #f2f2f2;;}
.detailFolder .folder.detailImg.expand .contBox .img {height:auto; }
.detailFolder .folder.detailImg.expand .contBox {padding-bottom:140px; }
.detailFolder .folder.detailImg .contBox .more {position: absolute; left:50%; bottom:35px; height:75px; line-height:75px; width:580px;; margin-left:-290px; background:#222; text-align: center; font-size:20px; font-weight:700; color:#fff; z-index: 5;}
.detailFolder .folder.detailImg .title span {background:url('../images/sub/ico_detail.png') left center no-repeat;}
.detailFolder .folder.detailImg .contBox:after {content:''; position: absolute; left:0; bottom:0; width: 100%; height: 511px; background-size:cover; background:url('../images/bgWhite.png') center no-repeat; z-index: 3;}
.detailFolder .folder.detailImg.expand .contBox:after {display: none;}
.detailFolder .folder.delivery .title span {background:url('../images/sub/ico_dil.png') left center no-repeat;}
.detailFolder .folder.warnList .title span {background:url('../images/sub/ico_info2.png') left center no-repeat;}
.detailFolder .folder.question .title span {background:url('../images/sub/ico_list.png') left center no-repeat;}
.detailFolder .folder.review .title span {background:url('../images/sub/ico_review.png') left center no-repeat;}

.detailFolder .folder.warnList .contBox ul li {padding:25px 0; border-top:1px solid #f2f2f2; display:table; color:#222222; font-size:18px; font-weight:300; }
.detailFolder .folder.warnList .contBox ul li .txt01 {display:table-cell; vertical-align: middle; font-weight:700; width:350px; padding-left:37px;}
.detailFolder .folder.warnList .contBox ul li .txt02 { padding-right:35px;}
.detailFolder .folder.warnList .contBox ul li .txt02 span {font-weight:500; color :#f76868;}

.detailFolder .folder.question .stateQuestion{position: relative; border-top:1px solid #f2f2f2; border-bottom:1px solid #f2f2f2; padding:20px 0 20px 37px}
.detailFolder .folder.question .stateQuestion .count span {padding-left:35px; font-size:18px; line-height:18px; color:#222222; background:url('../images/sub/ico_info.png') left center no-repeat;}
.detailFolder .folder.question .stateQuestion .count em {font-weight:700;}
.detailFolder .folder.question .stateQuestion .goQuestion {position: absolute; right:35px; top:50%; margin-top:-10px; font-size:18px; line-height:18px; font-weight:700; color:#222222;}
.questionList > ul > li .topBox {padding:30px 0; border-bottom:1px solid #f2f2f2; cursor:pointer;}
.questionList > ul > li .topBox:after {content:''; display: block; clear:both;}
.questionList > ul > li .topBox .state {float:left; width:125px; text-align: center; font-size:18px; line-height:18px; color:#aaaaaa; font-weight:300; padding-top:5px;}
.questionList > ul > li .topBox .state.complete {color:#689ef7;}
.questionList > ul > li .topBox .txtWrap {padding-left:125px;}
.questionList > ul > li .topBox .txtWrap .tit {font-size:20px; color:#222222; font-weight:700;}
.questionList > ul > li.secret .topBox .txtWrap .tit {padding-left:32px; background:url('../images/sub/ico_sec.png') left center no-repeat;}

.questionList > ul > li .hiddenBox {background:#f8f8f8; padding:0 35px; display: none;} 
.questionList > ul > li .hiddenBox .qBox {border-bottom:1px solid #eaeaea;  padding:30px 0 30px 50px; background:url('../images/sub/ico_q.png') left 35px no-repeat ;}
.questionList > ul > li .hiddenBox .aBox { padding:30px 0 30px 50px; background:url('../images/sub/ico_a.png') left 35px no-repeat ;}
.questionList > ul > li .hiddenBox .tit{font-size:20px; color:#222222; font-weight:700;}
.questionList > ul > li .hiddenBox .prdName {font-size:16px; color:#aaaaaa; font-weight:300; padding-top:20px;}
.questionList > ul > li .hiddenBox .txt {padding-top:0; padding-left:0;}

.detailFolder .folder.review {border-bottom:none;}
.detailFolder .folder.review .controlBox {padding:25px 36px; position: relative; border-top:1px solid #f2f2f2; border-bottom:1px solid #f2f2f2;}
.toggleCk {}
.toggleCk label{display: inline-block; font-size:18px; color:#222222; line-height:18px; font-weight:500; padding-left:53px; position: relative;}
.toggleCk input {position: absolute; visibility: hidden;}
.toggleCk label:after {content:''; position: absolute; left:0; top:50%; margin-top:-8px; width:36px; height:15px; background:#e3e3e3; border-radius:20px;}
.toggleCk label:before {content:''; position: absolute; left:0; top:50%; margin-top:-10px; width:17px; height:17px; background:#f8f8f8; border:1px solid #b0b0b0; border-radius:50%; transition:left .3s; z-index: 5;} 
.toggleCk input:checked + label:after { background:#222;} 
.toggleCk input:checked + label:before { left:17px; background:#fff; border:1px solid #222222; background:#fff url('../images/sub/ico_photo.png') center no-repeat;} 
.detailFolder .folder.review .controlBox .grade {position: absolute; right:36px; top:50%; margin-top:-10px;}
.detailFolder .folder.review .controlBox .grade .count {display: inline-block; vertical-align: middle; font-size:18px; line-height:18px; color:#222222; font-weight:300; margin-right:12px;}
.detailFolder .folder.review .controlBox .grade .count em {font-weight:700;}
.detailFolder .folder.review .controlBox .grade .starList {position: relative; top:-2px; display: inline-block;vertical-align: middle;}
.detailFolder .folder.review .controlBox .grade .write {display: inline-block; vertical-align: middle; font-size:18px; line-height:18px; color:#222222; font-weight:700; margin-left:50px;}
.detailFolder .folder.review .rvList > ul > li {border-bottom:1px solid #f2f2f2;}
.detailFolder .folder.review .rvList > ul > li .titleBox{position: relative; padding:50px 37px; cursor:pointer;}
.detailFolder .folder.review .rvList > ul > li .titleBox .starList{margin-bottom:10px;}
.detailFolder .folder.review .rvList > ul > li .titleBox .title{margin-bottom:10px; font-size:20px; color:#222222; font-weight:700;}
.detailFolder .folder.review .rvList > ul > li .titleBox .title .notiTxt {padding:0 7px; background:#222; margin-right:5px;}
.detailFolder .folder.review .rvList > ul > li .titleBox .info{}
.detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto {position: absolute; right:40px; top:50%; margin-top:-60px; width:120px; height:120px;}
.detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto span {display:block; position: relative; width: 120px; height: 120px; overflow:hidden;}
.detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto span img {position: absolute; left:50%; top:50%; transform:translate(-50%,-50%); max-width:200%;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox {background:#f8f8f8; padding:30px; display: none;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide {max-width:640px; position: relative; margin-bottom:30px;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide img {width:100%; }
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination { position:absolute; width:100%; bottom:20px; text-align: center; font-size: 0;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span {width:10px; height:10px; border-radius:50%; background:#eaeaea; margin-right:10px; opacity:1;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#222222;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .tit01 {font-size:20px; color:#222222; font-weight:700; margin-bottom:25px;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .txt {font-size:18px; color:#222222; font-weight:300; padding-top:0; padding-left:0;}
.detailFolder .folder.review .rvList > ul > li .titleBox .infoDate {padding-top:0;}
.detailFolder.reviewType {background:#fff; padding:30px 50px 50px 50px;}
.detailFolder.reviewType .folder {margin-top:0; padding-bottom:0; margin-bottom:0;}
.detailFolder.reviewType .folder .contBox {margin-top:0; padding-bottom:0; margin-bottom:0;}
.detailFolder.reviewType .folder.review .controlBox .grade {right:0; top:11px;}
.detailFolder.reviewType .folder.review .controlBox {padding-top:0; padding-left: 0; padding-right:0; border-top:none;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox {padding-right:170px; padding-left: 0; }
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .smPhoto {right:0; text-align: center;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .smPhoto img {max-height:100%;}
.detailFolder.reviewType .folder .title:after {display: none;}

.prdImgPop { position: fixed; left:0; top:0; width: 100%; height: 100%; z-index:500; background:rgba(0,0,0,.85); display: none;}
.prdImgPop .imgSlide {height:100vh; text-align: center;}
.prdImgPop .imgSlide .swiper-slide {line-height:100vh; height:100vh; max-height:90vh; padding-top:30px;}
.prdImgPop .imgSlide .swiper-slide img {height:100%;}
.prdImgPop .imgSlide .swiper-pagination {position: static; margin-top:37px;width:100%; bottom:20px; text-align: center; font-size: 0;}
.prdImgPop .imgSlide .swiper-pagination span {width:10px; height:10px; border-radius:50%; background:#888888; margin-right:10px; opacity:1;}
.prdImgPop .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#fff;}
.prdImgPop .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.prdImgPop .closePop {position: absolute; right:30px; top:30px; text-indent:-999em; width:32px; height:32px; background:url('../images/sub/ico_popClose_m.png') center no-repeat; z-index: 10; }

.prdImgPop {position: fixed; left:0; top:0; width: 100%; height: 100%; z-index:500; background:rgba(0,0,0,.85); display: none;}
.prdImgPop .soloImg {height:100vh; text-align: center;}
.prdImgPop .soloImg .img {line-height:100vh; height:100vh;}
.prdImgPop .soloImg .img img {height:auto; vertical-align: middle; max-height:100%;}

.btnMoreList {text-align: center; margin-top:25px;}
.btnMoreList a {display: block; background:#f8f8f8; font-size:18px; font-weight:700; color:#222222; height:75px; line-height:75px; border:1px solid #f2f2f2; max-width:580px; margin:0 auto;}


.loginWrap {max-width:736px; margin:0 auto;}
.loginWrap .in { background:#fff;  padding:50px 75px;}
.loginWrap .in h2 {font-size:32px; line-height:32px; font-weight:700; margin-bottom:45px; text-align: center; color:#222222;}


.formBox .line {margin-top:10px; display:table; width:100%;}
.formBox .line:first-child {margin-top:0;}
.formBox .tit {display:table-cell; width:97px; font-size:18px; color:#222222; vertical-align: middle; font-weight:700;}
.formBox .rBox {display:table-cell; }
.formBox .rBox.ckBox2 {padding:20px 0;}
.formBox .rBox.ckBox2 .ckType1 {margin-right:20px;}
.formBox .rBox.ckBox {padding-top:25px;}
.formBox .rBox.ckBox .ckType1 {margin-right:20px;}
.formBox .idSave {margin:15px 0 55px 0;}
.formBox .idSave:after {content:''; display: block; clear:both;}
.formBox .idSave .ckType1 {float:left;}
.formBox .idSave .frLink {float:right;}
.formBox .idSave .frLink a {position: relative; display: inline-block; vertical-align: middle; margin-right:28px; font-size:18px; color:#222222; line-height:18px; font-weight:300;}
.formBox .idSave .frLink a:after {content:''; position: absolute; right:-15px; top:50%; width:1px; height:16px; margin-top:-8px; background:#f2f2f2;}
.formBox .idSave .frLink a:last-child {margin-right:0;}
.formBox .idSave .frLink a:last-child:after {display: none;}
.formBox .textarea textarea {border:1px solid #ccc; resize:none; height:200px; padding:30px; font-size:18px; color:#222; width:100%; }


.formBox .line.showCheckBox {display: none;}
.formBox .line.showCheckBox.active {display: table;}

.orderWriteWrap .formBox ::-webkit-input-placeholder {font-size:15px;}
.orderListSec .formBox ::-webkit-input-placeholder {font-size:15px;}

.pwShow {position: relative;}
.pwShow input {padding-right:85px;}
.pwShow .btnShow {position: absolute; right:30px; top:50%; margin-top:-6px;; padding-left:23px; background:url('../images/ico_show.png') left center no-repeat; font-size:14px; line-height:14px; color:#888888; font-weight:300;}



.ipBox input {width: 100%; border:1px solid #eaeaea; height:75px; padding-left:30px;  font-size:18px; color:#222222; }
.ipBox input:read-only  {background:#f8f8f8;}
.ipBox.h60 input {height:60px;  }
.ipBox ::-webkit-input-placeholder  {font-size:18px; color:#888888; font-weight:300;}
.ipBox input:focus {border:1px solid #222; outline:none}

.taBox textarea {width: 100%; border:1px solid #eaeaea; height:110px; padding:30px;  font-size:18px; color:#222222; resize:none}
.taBox textarea:read-only  {background:#f8f8f8;}
.taBox ::-webkit-input-placeholder  {font-size:18px; color:#888888; font-weight:300;}
.taBox textarea:focus {border:1px solid #222; outline:none}
.taBox.h200 textarea {height:200px;}
.taBox {position: relative;}
.taBox .count {position: absolute; right:19px; bottom:19px; font-size:14px; color:#222222; line-height:14px; font-weight: 300; letter-spacing:-1px; background:#fff;}
.taBox .count em {font-weight:700; color:#689ef7; }


.btType01 { height:75px; line-height:73px; font-size:20px; color:#222222; font-weight:700; background:#f2f2f2; border:1px solid #f8f8f8; text-align: center;  display: block;}
.btType01.white { background:#fff; border:1px solid #f2f2f2; text-align: center;}
.btType01.border { background:#f8f8f8; border:1px solid #f2f2f2; text-align: center;}
.btType01.black {background:#222222; color:#fff; border:none;  }
.btType01.solo {max-width:285px; margin:0 auto;}
.btType01.solo2 {max-width:200px; margin:0 auto;}
.btType01.solo3 {display: inline-block; margin:0 auto; padding:0 35px; font-size:18px; font-weight:500;}
.btType01.h60 {height:60px; line-height:58px;}

.btnCenter {text-align: center;}

.btnTwo:after {content:''; display: block; clear:both;}
.btnTwo a {float:left; width:49%;}
.btnTwo a:last-child {float:right;}
.btnTwo.type1 {max-width:460px; margin:0 auto;}
.btnTwo.type2 { position: relative;}
.btnTwo.type2 .left { width:225px;}
.btnTwo.type2 .left a { width:100%;}
.btnTwo.type2 .right {position: absolute; right:0; top:0; width:460px;}



.max {margin:0 auto; max-width:1280px;}
.h2Box {text-align: center; padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #eaeaea;}
.h2Box.brderNone {padding-bottom: 0; border-bottom:none;}
.h2Box h2 {font-size:32px; line-height:32px; color:#222222; font-weight:700;}

.searchWrap .in .formBox {max-width:687px; margin:0 auto; background:#fff; padding:50px 70px;}
.searchWrap .in .btnCenter {margin-top:50px;}
.searchWrap .in .phoneType {display: none;}
.searchWrap .in .phoneType.db {display: table;}

.tabType1 {max-width:580px; margin:0 auto 30px auto; text-align: center;}
.tabType1 a {font-size:20px;  color:#888888; font-weight:300; border:1px solid #eaeaea; background:#fff; height:75px; line-height:72px;}
.tabType1 a.active {color:#222222; border:1px solid #222222; font-weight:500;}

.selBox select {padding-right:50px; white-space:nowrap; text-overflow:ellipsis; overflow:hidden; width:100%; height:75px; padding-left:30px; border:1px solid #222222; background:#fff; color:#222222; font-size:18px; background:url('../images/sub/ico_op.png') calc(100% - 28px) center no-repeat; -webkit-appearance: none; -moz-appearance: none; appearance: none }
.selBox.h60 select {height:60px;}
.selBox select::-ms-expand {display: none;}

.phoneType {display:table; width: 100%;}
.phoneType .td {display:table-cell; width:33.3%; padding-left:10px;}
.phoneType .td:first-child {padding-left: 0;}

.addrBox {display:table; width: 100%;}
.addrBox .td {display:table-cell; width:50%; padding-left:10px; vertical-align: top;}
.addrBox .td:first-child {width:230px; padding-left:0;}

.idInfoText {text-align: center; padding-top:68px; background:url('../images/sub/ico_member.png') center top no-repeat; font-size:24px; color:#222222; font-weight:300; margin-bottom:35px;}
.idInfoText.type2 { background:url('../images/sub/ico_member2.png') center top no-repeat;}
.idInfoText.type3 { background:url('../images/sub/ico_member3.png') center top no-repeat;}
.idInfoText.type4 { background:url('../images/sub/ico_member4.png') center top no-repeat;}
.idInfoText .tit01 {font-weight:700;}

.idComp {text-align: center;  font-size:18px; color:#222222; font-weight:300; background:#fff; border:1px solid #f5f5f5; padding:45px 0; max-width:485px; margin:0 auto; }
.idComp span {font-weight:700;}

.formBox .infoPw {position: relative; padding-bottom:50px; margin-bottom:30px; border-bottom:1px solid #f2f2f2; text-align: center;}
.formBox .infoPw span {font-weight:500}
.formBox .infoPw h3 {font-weight:700; font-size:24px; line-height:24px; color:#222222; text-align: left;}
.formBox .infoPw .ckType1 {position: absolute; right:0; top:0;}
.formBox .mb {margin-bottom:10px;}

.searchWrap .in .formBox.joinForm {max-width:760px;}
.searchWrap .in .formBox.joinForm .tit {vertical-align: top; padding-top:22px;; width:167px;}
.searchWrap .in .formBox.joinForm.mb {margin-bottom:30px;}

.warnText {margin:8px 0 20px 0; letter-spacing:-0.05em;}
.warnText span {display: inline-block; vertical-align: top; font-size:18px; line-height:24px; color:#222222; padding-left:35px; background:url('../images/sub/ico_info.png') left center no-repeat; }
.warnText.red span {color:#f76868; background:url('../images/sub/ico_info_red.png') left center no-repeat; }
.warnText.blue span {color:#689ef7; background:url('../images/order/ico_info2.png') left center no-repeat; font-weight:300; }

.warnText.solo {margin:0 0 30px 0; padding:48px 10px 48px 50px;  border:1px solid #f2f2f2; background:#fff; font-weight:300;}
.warnText.gray {background:#f8f8f8; padding:65px 0; text-align: center;}
.warnText.white  {background:#ffffff; border:1px solid #f2f2f2; padding:30px 20px; margin-bottom:30px; }


.error {border:1px solid #f76868 !important}


.toggleAgree {padding-top:25px;}
.toggleAgree ul li {padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #f2f2f2;}
.toggleAgree ul li:last-child {padding-bottom: 0; margin-bottom:0; border-bottom:none;}
.toggleAgree ul li .title {position: relative;}
.toggleAgree ul li .title .arrow {position: absolute; right:0; top:10px; width:15px; height:9px; background:url('../images/sub/ico_op.png') center no-repeat; text-indent:-999em;}
.toggleAgree ul li.active .title .arrow {transform:rotate(180deg);}
.toggleAgree ul li .title .ckType1 label {font-weight:700;}
.toggleAgree ul li .hiddenText {font-size:18px; color:#222222; padding:30px; background:#f8f8f8; font-weight:300; display: none; margin-top:50px; height:150px; overflow-y:auto;}


.mypageWrap {background:#f8f8f8; padding-top:50px;}
.mypageWrap .mySec {margin-bottom:50px;}
.mypageWrap .mySec:after {content:''; display: block; clear:both;}
.mypageWrap .mySec .sec {float:left; width:35%;}
.mypageWrap .mySec .sec .tit { font-size:24px; line-height:24px; font-weight:700; color:#222222; margin-bottom:30px;}
.mypageWrap .mySec .sec .tit span {padding-left:35px; background:url('../images/sub/ico_my2.png') left center no-repeat;}
.mypageWrap .mySec .sec .box .grid {background:#fff; border:1px solid #f2f2f2; padding:48px 0 0 34px; min-height:175px}
.mypageWrap .mySec .sec .box:after {content:''; display: block; clear:both;}
.mypageWrap .mySec .sec .box .topUser {position: relative;}
.mypageWrap .mySec .sec .box .topUser .name{font-size:20px; color:#222222; font-weight:300; margin-bottom:25px;}
.mypageWrap .mySec .sec .box .topUser .name span {font-weight:700;}
.mypageWrap .mySec .sec .box .topUser .info span {font-size:18px; line-height:18px; font-weight:300; color:#888888;}
.mypageWrap .mySec .sec .box .topUser .info span:first-child {margin-right:30px; position: relative;}
.mypageWrap .mySec .sec .box .topUser .info span:first-child:after {content:''; position: absolute; right:-15px; top:50%; margin-top:-7px; width:1px; height:14px; background:#f2f2f2;}
.mypageWrap .mySec .sec .box .topUser .rightbtn {position: absolute; right:30px; top:-5px; width:155px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p:first-of-type {margin-bottom:10px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p a {display: block; padding:0 25px 0 24px; height:45px; line-height:45px; font-size:14px; color:#222222; font-weight:300; border:1px solid #f2f2f2; background:#f8f8f8; border-radius:20px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p a span{display: block; background:url('../images/sub/ico_myArrow01.png') right center no-repeat;}

.mypageWrap .mySec .sec.no2 {float:right; width:63%;}
.mypageWrap .mySec .sec.no2 .tit span { background:url('../images/sub/ico_my.png') left center no-repeat;}
.mypageWrap .mySec .sec.no2 .box .grid {float:left; width:23.8%; margin-left:1.5%; padding:50px 40px 0 40px;}
.mypageWrap .mySec .sec.no2 .box .grid:first-child {margin-left:0;}
.mypageWrap .mySec .sec.no2 .box .grid a {display: block;}
.mypageWrap .mySec .sec.no2 .box .grid a .name { font-size:18px; line-height:18px; color:#888888; font-weight:300; background:url('../images/sub/ico_myArrow02.png') right center no-repeat; margin-bottom:30px;}
.mypageWrap .mySec .sec.no2 .box .grid a .count { font-size:32px; line-height:32px; color:#222222; font-weight:700}

.mypageWrap .myBottom {background:#fff; padding:30px 0 125px 0;}
.mypageWrap .myBottom .btnMy {background:#222222; position: relative; padding:30px 0 30px 40px; margin-bottom:30px;}
.mypageWrap .myBottom .btnMy .tit {font-size:20px; line-height:20px; color:#fff; font-weight:700; padding-left:35px; background:url('../images/sub/ico_my3.png') left center no-repeat;}
.mypageWrap .myBottom .btnMy a {position: absolute; right:40px; top:50%; transform:translateY(-50%); font-size:20px; line-height:20px; color:#fff; font-weight:300; padding-right:27px; background:url('../images/sub/ico_my4.png') right center no-repeat;}
.mypageWrap .myBottom .btnMy a span {font-weight:700; color:#bf94a2;}
.mypageWrap .myBottom .lst ul {display:flex;}
.mypageWrap .myBottom .lst ul:after {content:''; display: block; clear:both;}
.mypageWrap .myBottom .lst ul li {flex:1; width:auto; border:1px solid #f2f2f2; margin-left:-1px; }
.mypageWrap .myBottom .lst ul li a {display: block; height:180px; padding-top:55px; text-align: center; }
.mypageWrap .myBottom .lst ul li a span {display: block; padding-top:47px; font-size:20px; line-height:20px; color:#222222; font-weight:700;}
.mypageWrap .myBottom .lst ul li.no1 a span {background:url('../images/sub/ico_my5.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no2 a span {background:url('../images/sub/ico_my6.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no3 a span {background:url('../images/sub/ico_my7.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no4 a span {background:url('../images/sub/ico_my8.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no5 a span {background:url('../images/sub/ico_my9.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no6 a span {background:url('../images/sub/ico_my10.png') center top no-repeat;}
.mypageWrap .myBottom .lst ul li.no7 a span {background:url('../images/sub/ico_my11.png') center top no-repeat;}


.boardWrap {background: #f8f8f8; padding:50px 0 125px 0;}
.boardWrap .warnText {background:#fff; text-align: center; padding:45px 0; border:1px solid #f2f2f2; margin-bottom:50px;}
.boardWrap.white {background:#fff;}
.boardTab {font-size: 0; margin-bottom:50px; text-align: center;}
.boardTab ul {border-bottom:1px solid #f2f2f2;; display: inline-block; vertical-align: top;}
.boardTab ul li{display: inline-block; vertical-align: top; margin-left:30px;}
.boardTab ul li:first-child{margin-left:0;}
.boardTab ul li a{position: relative; display: inline-block; padding-bottom:15px; font-size:18px; line-height:18px; color:#888888; font-weight:300;}
.boardTab ul li.active a {color:#222222; font-weight:700;}
.boardTab ul li.active a:after {content:''; position: absolute; left:0; bottom:-1px; width:100%; height:2px; background:#222; }

.listBoard {position: relative;}
.listBoard .btnWrite {position: absolute; right:0; top:0;}
.listBoard .btnWrite a { width:225px; height:60px; line-height:57px;}

.listBoard .formSearch {margin-bottom:30px;}
.listBoard .formSearch .box {display:table; width:687px;}
.listBoard .formSearch .box > div {display:table-cell; }
.listBoard .formSearch .box > div.selBox {width:225px; background:#fff;}
.listBoard .formSearch .box > div.selBox select {border:1px solid #222222; height:60px;  font-weight:700; color:#222222; padding-top:5px;}
.listBoard .formSearch .box > div.ipBox {padding-left:10px; position: relative;}
.listBoard .formSearch .box > div.ipBox input {height:60px;}
.listBoard .formSearch .box > div.ipBox a {position: absolute; right:20px; top:50%; margin-top:-11px; width:20px; height:22px; background:url('../images/sub/ico_search.png') center no-repeat; text-indent:-999em;}

.listType2 {background:#fff; padding:30px 30px 0 30px; border:1px solid #f2f2f2; }
.listType2 .theadBox ul {display:table; width:100%; padding-bottom:27px; border-bottom:2px solid #222;}
.listType2 .theadBox ul li {display:table-cell; vertical-align: top; font-size:18px; line-height:18px; color:#222222; font-weight:500; text-align: center;}
.listType2 .theadBox ul li.size1 {width:125px;}
.listType2 .theadBox ul li.size3 {width:150px;}
.listType2 .theadBox ul li.size4 {width:150px;}

.listType2 .tbodyBox ul li a {display:table; width:100%;border-bottom:1px solid #eaeaea; font-size:18px; line-height:18px; color:#222222; font-weight:300; text-align: center; padding:30px 0;}
.listType2 .tbodyBox ul li a > div {display:table-cell; }
.listType2 .tbodyBox ul li a > div.title {text-align: left; }
.listType2 .tbodyBox ul li a > div.num {width:125px;}
.listType2 .tbodyBox ul li a > div.info {width:150px; font-size:16px; color:#aaaaaa;}



.notiTxt {display: inline-block; text-align: center !important; vertical-align: middle; min-width:35px; height:20px; font-size:12px; line-height:20px; margin-right:10px; color:#fff; background:#222; padding:0 3px; font-weight:500; }

.tbodyBox .notiTxt {margin-right:0;}


.paging {text-align: center; padding:50px 0;}
.paging a {display: inline-block; vertical-align: middle; width:42px; height:42px; line-height:40px;}
.paging span {display: inline-block; vertical-align: middle; }
.paging > a { text-indent:-999em; }
.paging > a.first {background:url('../images/sub/ico_prev2.png') center no-repeat;}
.paging > a.prev {background:url('../images/sub/ico_prev.png') center no-repeat;}
.paging > a.next {background:url('../images/sub/ico_next.png') center no-repeat;}
.paging > a.last {background:url('../images/sub/ico_next2.png') center no-repeat;}
.paging .num {margin:0 20px;}
.paging .num a {position: relative; font-size:18px; color:#888888; font-weight:300; margin:0 5px;}
.paging .num a:last-child {margin-right:0;}
.paging .num a.active {font-weight:700; color:#222222; border:2px solid #222;}


.writeBoard {}
.writeBoard .formBox {background:#fff; padding:50px; margin-bottom:50px;}
.writeBoard .formBox .tit {vertical-align: top; padding-top:15px;; width:120px;}
.writeBoard .formBox .tit.vm {vertical-align: middle; padding-top: 0;}
.writeBoard .formBox .titleArea .title p {margin-left:0;}

.formEdit {background:#f8f8f8; padding:30px; margin:30px 0;}

.fileBox {position: relative; padding-right:236px;}
.fileBox .fileList {border:1px solid #cccccc; height:60px; line-height:58px;}
.fileBox .fileList span {display: inline-block; margin-left:28px; font-size:18px; color:#222222; font-weight:300;}
.fileBox .fileList span a {display: inline-block; vertical-align: middle; text-indent:-999em; margin-left:10px; width:13px; height:13px; background:url('../images/sub/ico_fileDel.png') center no-repeat;}
.fileBox .fakeFile {position: absolute; right:0; top:0; width:225px; overflow:hidden; padding-right:0;}
.fileBox .fakeFile input {position: absolute; right:0; top:0; width:750px; height:100%; opacity:0; z-index: 10; font-size: 100px; cursor:pointer;}


.formBox .writeTd {display:table; width: 100%;}
.formBox .writeTd .selBox {width:225px; display:table-cell;}
.formBox .writeTd .ipBox {padding-left: 10px;display:table-cell;}
.formBox .writeTd .ipBox.size01 {padding-left:0;}
.formBox .writeTd .ipBox.size01 input { width:400px;}
.formBox .writeTd .ipBox input {border:1px solid #ccc}
.formBox .writeTd .ckBox2 {display:table-cell; padding:20px 0 0 0; width:225px;}
.formBox .writeTd .ckBox2 .ckType1 {margin-right:20px;}

.formBox .titleArea {position: relative; padding-bottom:50px; padding-right:350px; margin-bottom:50px; border-bottom:1px solid #eaeaea; }
.formBox .titleArea .title p{display: inline-block; vertical-align: middle; font-size:20px; color:#222222; font-weight:500; margin-left:15px;}  
.formBox .titleArea .rInfo {position: absolute; right:0; top:0;}
.formBox .titleArea .rInfo > div {display: inline-block; vertical-align: middle; font-size:16px; font-weight:300; color:#222222;}
.formBox .titleArea .rInfo > div.date {color:#aaaaaa;}
.formBox .titleArea .rInfo > div.date span:first-child:after {display: none;}
.formBox .titleArea .rInfo > div span {position: relative; padding-left:15px; margin-left:15px;}
.formBox .titleArea .rInfo > div span:after {content:''; position: absolute; left:0; top:50%; width:1px; height:16px; margin-top:-8px; background:#eaeaea;}
.formBox .upList a {display: inline-block; vertical-align: middle; font-size:18px; line-height:18px; color:#222222; padding-left:33px; margin-right:25px; background:url('../images/sub/ico_down.png') left center no-repeat;}


.searchPrd {background:#fff; padding:30px 30px 30px 175px; min-height:180px; position: relative;  border:1px solid #f2f2f2; margin-bottom:30px; letter-spacing:-0.05em;}
.searchPrd .img {position: absolute; left:30px; top:30px; width:120px; height:120px; border:1px solid #f2f2f2; border-radius:5px; overflow:hidden; background:#f8f8f8;}
.searchPrd .img img {display: none;}
.searchPrd .txtWrap {padding:30px 0 0 0;}
.searchPrd .txtWrap .tit01 {margin:0 0 13px 0; font-size:20px; font-weight:300; color:#222222; background:#f8f8f8; width:530px; height:22px; text-indent:-999em; }
.searchPrd .txtWrap .tit02 {font-size:18px; font-weight:300; color:#222222; background:#f8f8f8; width:90px; height:22px;  text-indent:-999em;}
.searchPrd .txtWrap .tit02 span {font-size:20px; font-weight:700;}
.searchPrd .btnSearch {position: absolute; right:30px; top:50%;  width:225px; height:60px; line-height:58px; margin-top:-30px; text-align: center; font-size:18px; color:#222222; font-weight:500; border:1px solid #222;}


.searchPrd.active .img img {display: block;}
.searchPrd.active .txtWrap .tit01  {background:none; height:auto; margin-bottom:6px ;  text-indent:0; width:auto; max-width:800px;}
.searchPrd.active .txtWrap .tit02  { background:none; height:auto;  text-indent:0;}


.prdSearchPop {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999; display: none;}
.prdSearchPop .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; background:rgba(0,0,0,.2);}
.prdSearchPop .in {position: fixed; left:50%; top:50%;  transform:translateY(-50%); width:760px; margin-left:-380px;  z-index:10; background:#fff; padding:50px 70px 70px 70px;}
.prdSearchPop .in .title {font-size:24px; line-height:24px; color:#222222; font-weight:700; text-align: center; padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #f2f2f2;}
.prdSearchPop .in .searchPop {display:table; width:100%; margin-bottom:30px;}
.prdSearchPop .in .searchPop .ipBox {display:table-cell; padding-right:10px;}
.prdSearchPop .in .searchPop a {display:table-cell; width:200px; background:#222222; text-align: center; font-size:18px; font-weight:700; color:#fff;}
.prdSearchPop .in .prdList {background:#f8f8f8; padding:0 20px; padding-top:20px;}
.prdSearchPop .in .prdList ul {}
.prdSearchPop .in .prdList ul li {position: relative; padding:30px 0 30px 80px;   border-bottom:1px solid #eaeaea;}
.prdSearchPop .in .prdList ul li:last-child { border-bottom:none;}
.prdSearchPop .in .prdList ul li .img {position: absolute; left:0; top:30px; width:60px; height:60px; border:1px solid #f2f2f2;}
.prdSearchPop .in .prdList ul li .txtWrap {font-size:18px; color:#222222; font-weight:300; padding-top:5px;}
.prdSearchPop .in .prdList ul li .txtWrap .tit02 {font-size:14px; padding-top:5px; }
.prdSearchPop .in .prdList ul li .txtWrap .tit02 span {font-weight:700;}
.prdSearchPop .in .prdList ul li .btnSel {position: absolute; right:0; top:50%;  width:75px; height:35px; line-height:33px; margin-top:-17px; background:#222222; color:#fff; text-align: center; font-size:14px;}
.prdSearchPop .in .prdList ul li .btnSel span {padding-right:20px; background:url('../images/sub/ico_prdArrow.png') right center no-repeat;}
.prdSearchPop .in .closePop {position: absolute; right:20px; top:20px; width:22px; height:22px; text-indent:-999em; background:url('../images/sub/ico_list_del_m.png') center no-repeat; }
.prdSearchPop .boardTab {margin-bottom:30px;}
.prdSearchPop .tabCont .contBox {display: none;}
.prdSearchPop .tabCont .contBox.active {display: block;}
.prdSearchPop .my .prdList {padding-top:20px;}
.prdSearchPop .my .prdList ul li {padding:0;}
.prdSearchPop .my .prdList ul li .basePrd .img {width:120px; height: 120px; position: static;}
.prdSearchPop .my .prdList ul li .btnSel {right:25px; top:25px; margin-top:0;}
.prdSearchPop .my .prdList ul li .basePrd .txtWrap .txt .tit01 {letter-spacing:-1px;}

.prdSearchPop .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:30px;}
.prdSearchPop .scrollBox .inSc .mCSB_container.mCS_no_scrollbar_y {padding-right:0;}


/* scrollBox */
.scrollBox .inSc {position: relative; height:260px;  overflow:auto;}
.scrollBox .inSc .mCSB_inside>.mCSB_container {margin-right:0;  padding-right:40px;}
.scrollBox .inSc .mCSB_scrollTools {opacity:1 !important; width:10px;}
.scrollBox .inSc .mCSB_dragger .mCSB_dragger_bar {background-color:#cccccc !important; width:10px; border-radius:0px; }
.scrollBox .inSc .mCSB_draggerRail {background:none;width:10px;}


.grayContainer {background:#f8f8f8; padding:45px 0 125px 0; max-width:100%;}
.orderListSec {padding:0 50px; background:#fff; margin-bottom:35px; border:1px solid #f2f2f2;}
.orderListSec .titleWrap {position: relative; padding:50px 0; text-align: left; }
.orderListSec .titleWrap .tit {display: inline-block; font-size:24px; line-height:24px; vertical-align: middle; font-weight:700; margin-right:10px;}
.orderListSec .titleWrap .warnText {display: inline-block; vertical-align: middle; padding:0; margin:0;}
.orderListSec .titleWrap .toggle {position: absolute; right:0; top:50%; margin-top:-4px; width:14px; height:8px; text-indent:-999em; background:url('../images/order/ico_toggle.png') center no-repeat;}
.orderListSec .titleWrap .count {display: inline-block; font-size:24px; color:#222222; font-weight:300; border-bottom:1px solid #222;; vertical-align: middle;}
.orderListSec .titleWrap .count span {font-weight:700;}
.orderListSec.active .titleWrap .toggle {transform:rotate(180deg);}
.orderListSec.active .contWrap {display: block;}
.orderListSec .contWrap {position: relative; padding:50px 0; border-top:1px solid #eaeaea; display: none;}
.orderListSec .contWrap.pt0 {padding-top:0;}
.orderListSec .contWrap:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .tit{ font-size:20px; line-height:20px; font-weight:400; margin-bottom:30px; }
.orderListSec .contWrap .questionList > ul > li .tit {margin-bottom:0;}
.orderListSec .contWrap .questionList > ul > li .hiddenBox .txt {font-size:18px; font-weight:300;}
.orderListSec .contWrap .rangeSet {width:51.75%; display: inline-block; vertical-align: top;}
.orderListSec .contWrap .rangeSet:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rangeSet div {float:left; width:18.7%; margin-left:1.5%;}
.orderListSec .contWrap .rangeSet div:first-child {margin-left: 0;}
.orderListSec .contWrap .rangeSet div input {position: absolute; visibility: hidden;}
.orderListSec .contWrap .rangeSet div label {display: block; height:60px; line-height:58px; border:1px solid #eaeaea; text-align: center; font-size:18px; color:#888888; font-weight:300;  }
.orderListSec .contWrap .rangeSet div input:checked + label { border:1px solid #222222;  color:#222222; font-weight:500;  }
.orderListSec .contWrap .dateRange {display: inline-block; vertical-align: top; width:45.8%; margin-left:2%;}
.orderListSec .contWrap .dateRange .cmsDate {display:table; width:100%; padding-left:50px; background:url('../images/order/ico_cal.png') left center no-repeat;}
.orderListSec .contWrap .dateRange .cmsDate span {display:table-cell; width:46%;}
.orderListSec .contWrap .dateRange .cmsDate button {display: none;}
.orderListSec .contWrap .dateRange .cmsDate input {border:1px solid #eaeaea; text-align: center; height:60px;  width:100%; font-size:18px; font-weight:300;}
.orderListSec .contWrap .dateRange .cmsDate .line {width:53px; text-align: center; font-size:18px; color:#222222; font-weight:300;}
.orderListSec .contWrap .prdSearch {position: relative; margin-top:30px; padding-right:470px; }
.orderListSec .contWrap .prdSearch:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .prdSearch .tit {display: inline-block;  vertical-align: middle; padding-top:17px; float:left; }
.orderListSec .contWrap .prdSearch.type2 .tit { width:125px;  }
.orderListSec .contWrap .prdSearch .selBox {float:left; width:225px; position: relative; z-index:1;}
.orderListSec .contWrap .prdSearch .ipBox {position: relative; width:100%; padding-left:120px;}
.orderListSec .contWrap .prdSearch.type2 .ipBox { padding-left:235px;}
.orderListSec .contWrap .prdSearch .ipBox input {height:60px;}
.orderListSec .contWrap .prdSearch .ipBox .search {position: absolute; right:25px; top:50%; margin-top:-11px; width:20px; height:22px; text-indent:-999em; background:url('../images/order/ico_search.png') center no-repeat;}
.orderListSec .contWrap .prdSearch .btnTwo {position: absolute; right:0; top:0; width:460px ;}
.orderListSec .contWrap .title {padding:24px 0 24px 29px; background:#fff;}
.orderListSec .contWrap .title span {display: inline-block; vertical-align: top; font-size:20px; line-height:20px; color:#222222; font-weight:700; padding-left:13px; position: relative;}
.orderListSec .contWrap .title span:after {content:''; position: absolute; left:0; top:0; width:2px; height:100%; background:#222;}
.orderListSec .contWrap .leftInfo {position: absolute; left:0; top:50px;  width:287px; height:calc(100% - 100px); border:1px solid #222222; background:#f8f8f8; }
.orderListSec .contWrap .leftInfo .box {padding:30px;}
.orderListSec .contWrap .leftInfo .box .dateInfo {padding-bottom:30px; border-bottom:1px solid #eaeaea;}
.orderListSec .contWrap .leftInfo .box .dateInfo .date {font-size:18px; color:#222222; font-weight:300; margin-bottom:10px;}
.orderListSec .contWrap .leftInfo .box .dateInfo .date span {font-weight:700; font-size:20px;}
.orderListSec .contWrap .leftInfo .box .dateInfo .num {font-size:18px; color:#888888; font-weight:300; }
.orderListSec .contWrap .leftInfo .box .dateInfo .num a {font-size:18px; color:#222222; font-weight:500; padding-right:15px; margin-left:15px; background:url('../images/order/ico_btn01.png') right center no-repeat; }
.orderListSec .contWrap .leftInfo .box .prdInfo {position: absolute; left:0; bottom:30px; width: 100%; padding:0 30px;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl {margin-bottom:10px;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl dt {display: inline-block; vertical-align: middle; font-size:18px; line-height:18px; color:#222222; font-weight:700; width:100px;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl dd {display: inline-block; vertical-align: middle; font-size:18px; line-height:18px; color:#888888; font-weight:300; }
.orderListSec .contWrap .leftInfo .box .prdInfo .total {padding-top:40px;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .txt { font-size:18px; line-height:18px; color:#222222; font-weight:700; margin-bottom:10px;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .price { font-size:18px; line-height:18px; color:#222222; font-weight:300;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .price span { font-size:30px; line-height:30px; color:#f76868; font-weight:700;}

.orderListSec .contWrap .rightInfo {position: relative; margin-left:298px;}
.orderListSec .contWrap .rightInfo .title {border:1px solid #222222; margin-bottom:10px;}
.orderListSec .contWrap .rightInfo .detailBox {border:1px solid #eaeaea; min-height:400px;}
.orderListSec .contWrap .rightInfo .topPrd {position: relative; padding:30px;}
.orderListSec .contWrap .rightInfo .topPrd:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .topPrd .img {float:left; width:125px; height:125px; border:1px solid #f2f2f2;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap {padding-left:145px; padding-right:185px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit01 {font-size:20px; color:#222222; font-weight:300; margin-bottom:5px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit02 {font-size:18px; color:#aaaaaa; font-weight:300; margin-bottom:15px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 {font-size:18px; color:#222222; font-weight:300;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span {position: relative; margin-right:13px; padding-right:13px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:16px; margin-top:-8px; background:#eaeaea;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span em {font-size:20px; font-weight:700;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span:last-child:after {display: none;}
.orderListSec .contWrap .rightInfo .topPrd .btn {position: absolute; right:30px; top:30px; width:176px;}
.orderListSec .contWrap .rightInfo .topPrd .btn p {margin-bottom:10px;}
.orderListSec .contWrap .rightInfo .topPrd .btn p a{position: relative; height:35px; line-height:33px; padding-left:20px; font-size:14px; color:#222222; font-weight:300; display: block; background:#f8f8f8; border:1px solid #f2f2f2; border-radius:30px; }
.orderListSec .contWrap .rightInfo .topPrd .btn p a:after {content:''; position: absolute; right:20px; top:50%; margin-top:-5px; width:6px; height:10px; background:url('../images/order/ico_btn01.png') center no-repeat;}

.orderListSec.cancel .contWrap .leftInfo .box .dateInfo {padding-bottom:0; border-bottom:none;}
.orderListSec .subTitle {font-size:18px; color:#222222; font-weight:700; position: relative; margin-bottom:30px; padding-left: 12px;}
.orderListSec .subTitle:after {content:''; position: absolute; left:0; top:7px; width:2px; height:14px; background:#222222;}

.addRsvpList {padding-top:45px; margin-top:45px; border-top:1px solid #eaeaea;;}
.addRsvpList .tit span{font-size:18px; line-height:18px; color:#888888; font-weight:300;}
.addRsvpList ul {margin-left:-1%;}
.addRsvpList ul li {float:left; width:24%; height:110px; margin-left:1%; margin-bottom:1%; border:1px solid #eaeaea; border-radius:8px; padding:24px 0 0 30px;}
.addRsvpList ul li .txt01 {font-size:18px; line-height:18px; font-weight:300; color:#222222; margin-bottom:10px;}
.addRsvpList ul li .txt02 {font-size:36px; line-height:36px; font-weight:700; color:#222222;}


.formBox.opAddType .line.first .tit {width: 260px; vertical-align: middle;}
.formBox.opAddType .line.first .rBox {vertical-align: middle;}
.formBox.opAddType .line .rBox .ckType1 {margin-right:15px;}
.formBox.opAddType .addOptionList {margin-top:20px; width:720px;}
.formBox.opAddType .addOptionList .list {padding-top:25px; margin-top:25px; border-top:1px solid #eaeaea; }
.formBox.opAddType .addOptionList .list:first-child {padding-top:0; margin-top:0; border-top:0;}
.formBox.opAddType .line .tit {width: 190px;  padding: 20px 0;  vertical-align: middle;}
.formBox.opAddType .line.desc .tit {color:#888888; font-weight:300;}
.formBox.opAddType .line .rBox .ipBox {width: 440px; display: inline-block; vertical-align: top; margin-right:7px;}
.formBox.opAddType .line .rBox .addOp {display: inline-block; vertical-align: top; border:1px solid #f2f2f2; width:75px; height:75px; line-height:75px; text-align: center; }
.formBox.opAddType .line .rBox .addOp span {display: inline-block; vertical-align: middle; width:14px; height:14px; text-indent:-999em; background:url('../images/order/ico_plus.png') center no-repeat;}
.formBox.opAddType .line .rBox .delOp {display: inline-block; vertical-align: top; border:1px solid #f2f2f2; width:75px; height:75px; line-height:75px; text-align: center; }
.formBox.opAddType .line .rBox .delOp span {display: inline-block; vertical-align: middle; width:18px; height:20px; text-indent:-999em; background:url('../images/order/ico_trash.png') center no-repeat;}


.stepList {padding:0 30px;}
.stepList ul {padding:30px 0; border-top:1px solid #f2f2f2;}
.stepList ul:after {content:''; display: block; clear:both;}
.stepList ul li {position: relative; float:left; padding-right:18.5%; padding-top:32px;}
.stepList ul li .round {width:40px; height:40px; position: relative;}
.stepList ul li .tit {font-size:18px; line-height:18px; color:#888888; font-weight:300 !important; margin-bottom:14px; position: absolute; width:100%; white-space:nowrap; left:50%; top:-30px; transform:translateX(-50%); min-width:100px; text-align: center; }
.stepList ul li:first-child {padding-left: 0;}
.stepList ul li:first-child .tit {left:0;  transform:translateX(0); min-width:auto; }
.stepList ul li:last-child {padding-right:0;}
.stepList ul li:last-child .tit {left:auto; right:0; text-align: right;  transform:translateX(0);  }
.stepList ul li .num {position: relative; z-index:5;display: inline-block; vertical-align: top; width: 40px; height: 40px; line-height:38px; background:#fff; border:2px solid #eaeaea; font-size:18px; color:#eaeaea; font-weight:700; border-radius:50%;  text-align: center;}
.stepList ul li:after {content:''; position: absolute; right:0; bottom:18px; width:100%; height:4px; background:#eaeaea; }
.stepList ul li.complete:after { background:#222; }
.stepList ul li.complete .tit {color:#222; font-weight:700 !important;}
.stepList ul li.complete .num {background:#222;  border:none; color:#fff;}
.stepList ul li.ing:after { background:url('../images/order/ico_dot.png') repeat-x; }
.stepList ul li.ing .tit {color:#689ef7; font-weight:700 !important;}
.stepList ul li.ing .num {background:#689ef7; border:none; color:#fff;}
.stepList ul li.warn .tit {color:#f76868;}
.stepList ul li.warn .num {background:#f76868; border:none; color:#fff;}

.stepList ul li:last-child.complete .tit {color:#689ef7; font-weight:700;}
.stepList ul li:last-child.complete .num {background:#689ef7;  border:none; color:#fff;}


.stepList.five li {padding-right:20.5% !important;}
.stepList.five li:last-child {padding-right:0 !important;}

.stepList.six li {padding-right:15.5% !important;}
.stepList.six li:last-child {padding-right:0 !important;}


.stepList.seven {border:1px solid #f2f2f2; margin-bottom:30px; padding:30px; background:#fff;}
.stepList.seven ul {padding:0; border-top:none;}
.stepList.seven li {padding-right:12.7% !important;}
.stepList.seven li:last-child {padding-right:0 !important;}

.stepList.eight {border:1px solid #f2f2f2; margin-bottom:30px; padding:30px; background:#fff;}
.stepList.eight ul {padding:0; border-top:none;}
.stepList.eight li {padding-right:10.5% !important;}
.stepList.eight li:last-child {padding-right:0 !important;}

.orderListSec .contWrap .rightInfo .detailBox .myCheck { margin:0 30px; padding:30px 0; border-top:1px solid #f2f2f2;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .txt {font-size:20px; line-height:20px; color:#222222; font-weight:500; padding-left:35px; background:url('../images/order/ico_heart.png') left center no-repeat; margin-bottom:30px;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a {float:left; width:24%; margin-left:1%; background:#f8f8f8; height:60px; line-height:58px; border:1px solid #eaeaea; font-size:18px; color:#aaaaaa; text-align: center; font-weight:300; }
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a.active {color:#fff; font-weight:500; border:none; background:#222;}

.orderListSec .contWrap .rightInfo .detailBox .myCheck { margin:0 30px; padding:30px 0; border-top:1px solid #f2f2f2;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .txt {font-size:20px; line-height:20px; color:#222222; font-weight:500; padding-left:35px; background:url('../images/order/ico_heart.png') left center no-repeat; margin-bottom:30px;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a {position: relative; float:left; width:24%; margin-left:1%; background:#f8f8f8; height:60px; line-height:58px; border:1px solid #eaeaea; font-size:18px; color:#aaaaaa; text-align: center; font-weight:300; }
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a.active {color:#fff; font-weight:500; border:none; background:#222;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a.ready {color:#222; font-weight:500; border:1px solid #222222; background:#fff}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr {position: absolute; right:5px; top:-25px; text-align: center; font-size:14px; color:#fff; font-weight:700; width:95px; height:30px; line-height:28px; border-radius:3px; background:#689ef7; border:1px solid #6092e3;  }
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr em {padding-left:17px; background:url('../images/ico_star.png') left center no-repeat;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr:after {content:''; position: absolute; right:21px; bottom:-6px; width:13px; height:6px; background:url('../images/ico_starBull.png') left center no-repeat;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr.go { color:#f2d872;  background:#222222; border:1px solid #000;  }
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr.go em {padding-left:17px; background:url('../images/ico_star2.png') left center no-repeat;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr.go:after {background:url('../images/ico_starBull2.png') left center no-repeat;}

.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr.check em {padding-left:17px; background:url('../images/ico_star3.png') left center no-repeat;}


.orderListSec .contWrap .rightInfo .borderPrd {border:1px solid #eaeaea; margin-bottom:10px;}
.orderListSec .contWrap .rightInfo .addrInfo {border:1px solid #eaeaea; padding:30px; letter-spacing:-0.05em; background:#f8f8f8;}
.orderListSec .contWrap .rightInfo .addrInfo dl {margin-bottom:10px;}
.orderListSec .contWrap .rightInfo .addrInfo dl:last-child {margin-bottom:0;}
.orderListSec .contWrap .rightInfo .addrInfo dl:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .addrInfo dl dt {float:left; font-size:18px;  font-weight:700; color:#222222; }
.orderListSec .contWrap .rightInfo .addrInfo dl dd {padding-left:100px; font-size:18px;  font-weight:300; color:#888888;}

.orderListSec .contWrap .rightInfo .grid {margin-right:297px;}
.orderListSec .contWrap .rightInfo .grid.right {position: absolute; right:0; top:0; width:287px; height:100%; margin-right:0;  }
.orderListSec .contWrap .rightInfo .grid.right .dilInfo {border:1px solid #eaeaea; position: relative; height:calc(100% - 81px); padding:30px;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 {font-size:20px; color:#222222; font-weight:300;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span {color:#cccccc; font-weight:700;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span.ing {color:#689ef7}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span.complete {color:#f76868}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom {position: absolute; left:0; bottom:0; padding:30px; width:100%;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit01 {font-weight:700; margin-bottom:5px; margin-top:15px;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit02 {font-size:20px; color:#222222; font-weight:300; margin-bottom:15px;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit03 {font-size:18px; color:#aaa; font-weight:300;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .btn a {font-size:18px; color:#aaaaaa; border:1px solid #f2f2f2; background:#f8f8f8; font-weight:300; display: block; height:60px; line-height:58px; text-align: center;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .btn a.active {background:#222; color:#fff;}
.orderListSec .contWrap .dilSection {position: relative; margin-bottom:50px;}
.orderListSec .contWrap .dilSection:last-child {margin-bottom:0;}
.orderListSec .contWrap .dilSection .leftInfo {height:100%; top:0;}


.ui-datepicker {z-index:10 !important;}


.orderDetailGrid:after {content:''; display: block; clear:both;}
.orderDetailGrid .leftBox {float:left; width:57%;  background:#fff; padding:50px 50px 30px 50px; border:1px solid #f2f2f2;}
.orderDetailGrid .leftBox .dateInfo:after {content:''; display: block; clear:both;}
.orderDetailGrid .leftBox .dateInfo {border-bottom:1px solid #eaeaea; padding-bottom:50px; margin-bottom:30px;}
.orderDetailGrid .leftBox .dateInfo .date {float:left; font-size:24px; line-height:24px; color:#222222; font-weight:700; }
.orderDetailGrid .leftBox .dateInfo .num {float:right; font-size:20px; line-height:20px; color:#222222; font-weight:300; }
.orderDetailGrid .leftBox .dateInfo .num span {border-bottom:1px solid #222;}
.orderDetailGrid .leftBox .prd {position: relative; padding-right:180px; }
.orderDetailGrid .leftBox .prd:after {content:''; display: block; clear:both;}
.orderDetailGrid .leftBox .prd .img {float:left; width:125px; height:125px; border:1px solid #f2f2f2;}
.orderDetailGrid .leftBox .prd .txtWrap {padding-left:145px; letter-spacing:-0.05em;}
.orderDetailGrid .leftBox .prd .txtWrap .tit01 {font-size:20px; color:#222222; font-weight:300; margin-bottom:5px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit02 {font-size:18px; color:#aaaaaa; font-weight:300; margin-bottom:15px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 {font-size:18px; color:#222222; font-weight:300;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span {position: relative; margin-right:13px; padding-right:13px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:16px; margin-top:-8px; background:#eaeaea;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span em {font-size:20px; font-weight:700;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span:last-child:after {display: none;}
.orderDetailGrid .leftBox .prd .btn {position: absolute; right:0; top:0; width:176px;}
.orderDetailGrid .leftBox .prd .btn p {margin-bottom:10px;}
.orderDetailGrid .leftBox .prd .btn p a{position: relative; height:35px; line-height:33px; padding-left:20px; font-size:14px; color:#222222; font-weight:300; display: block; background:#f8f8f8; border:1px solid #f2f2f2; border-radius:30px; }
.orderDetailGrid .leftBox .prd .btn p a:after {content:''; position: absolute; right:20px; top:50%; margin-top:-5px; width:6px; height:10px; background:url('../images/order/ico_btn01.png') center no-repeat;}


.orderDetailGrid .rightBox {float:right; width:42%; background:#fff; border:1px solid #f2f2f2; padding:50px;}
.orderDetailGrid .rightBox .sec {border-bottom:1px solid #222222; padding-bottom:30px; margin-bottom:30px;}
.orderDetailGrid .rightBox .sec:last-child {padding-bottom: 0; margin-bottom: 0; border-bottom:none;}
.orderDetailGrid .rightBox .sec .title {font-size:18px; line-height:18px; color:#222222; font-weight:700; margin-bottom:25px;}
.orderDetailGrid .rightBox .sec ul {padding-bottom:30px; margin-bottom:30px; border-bottom:2px dashed #f5f5f5;}
.orderDetailGrid .rightBox .sec ul:last-child {padding-bottom: 0; margin-bottom: 0; border-bottom:none;}
.orderDetailGrid .rightBox .sec ul li {margin-bottom:10px;}
.orderDetailGrid .rightBox .sec ul li:after {content:''; display: block; clear:both;}
.orderDetailGrid .rightBox .sec ul li:last-child {margin-bottom:0;}
.orderDetailGrid .rightBox .sec ul li .tit {float:left; font-size:18px; color:#888888; font-weight:300;}
.orderDetailGrid .rightBox .sec ul li .txt {float:right; font-size:18px; color:#222222; font-weight:300; text-align: right;}
.orderDetailGrid .rightBox .sec ul li.bold .tit { font-weight:500; color:#000}
.orderDetailGrid .rightBox .sec ul li.bold .txt { font-weight:500;}
.orderDetailGrid .rightBox .sec ul li.bold .txt em{color:#f76868; font-weight:700; font-size:30px;}
.orderDetailGrid .rightBox .sec ul li .txt.pink {color:#f76868; }


.orderSortingBox {text-align: center; margin:80px 0; }
.orderSortingBox .tit01 {font-size:24px; line-height:24px; font-weight:700; color:#222; margin-bottom:10px;}
.orderSortingBox .tit02 {font-size:18px; font-weight:300; color:#888888; margin-bottom:25px; padding-bottom:25px; border-bottom:1px solid #eaeaea;}
.orderSortingBox .btn {font-size:0;}
.orderSortingBox .btn a {display: inline-block; vertical-align: top; width:225px; height:60px; line-height:58px; border:1px solid #eaeaea;  background:#fff; font-size:18px; color:#888888; font-weight:300; margin-left:10px;}
.orderSortingBox .btn a.active {color:#222; border:1px solid #222; font-weight:500; }
.orderSortingBox .btn a:first-child {margin-left:0;}

.couponGrid {margin-bottom:30px;}
.couponGrid:after {content:''; display: block; clear:both;}
.couponGrid .grid {float:left; width:49.5%;}
.couponGrid .grid:after {content:''; display: block; clear:both;}
.couponGrid .grid .box {float:left; background:#fff; border:1px solid #f2f2f2; height:210px; padding:47px 47px 0 47px; width:49%;}
.couponGrid .grid .box .tit {font-size:24px; line-height:24px; color:#222222; font-weight:300; margin-bottom:30px;}
.couponGrid .grid .box .tit.ico {cursor:pointer; padding-right:20px; background:url('../images/sub/ico_coupon.png') right center no-repeat; }
.couponGrid .grid .box .count{font-size:24px; line-height:24px; color:#222222; font-weight:300;}
.couponGrid .grid .box .count span {font-size:32px; font-weight:700;}
.couponGrid .grid .box:last-child {float:right;}
.couponGrid .grid.no2 {float:right; width:49.5%;}
.couponGrid .grid.no2 .box {width:100%; float:none;}
.couponGrid .grid.no2 .box .search {position: relative; padding-right:235px;}
.couponGrid .grid.no2 .box .search .btn {position: absolute; right:0; top:0; width:225px; height:60px; line-height:58px; text-align: center; font-size:20px; font-weight:700; color:#fff; background:#222;}

.listType3 {background:#fff; padding:45px; border:1px solid #f2f2f2; }
.listType3 .theadBox ul {display:table;  table-layout:fixed; width:100%; padding-bottom:27px; border-bottom:2px solid #222;}
.listType3 .theadBox ul li {display:table-cell; vertical-align: top; font-size:18px; line-height:18px; color:#222222; font-weight:500; text-align: center;}
.listType3 .theadBox ul li.size1 {width:115px;}
.listType3 .theadBox ul li.size3 {width:160px;}
.listType3 .theadBox ul li.size4 {width:615px;}

.listType3 .tbodyBox ul li .pr {position: relative; display:table; table-layout:fixed; width:100%;border-bottom:1px solid #eaeaea; font-size:16px; color:#aaaaaa; font-weight:300; text-align: center; padding:25px 0;}
.listType3 .tbodyBox ul li .pr > div {display:table-cell; }
.listType3 .tbodyBox ul li .pr .date {width:115px;}
.listType3 .tbodyBox ul li .pr .blank { width:615px;}
.listType3 .tbodyBox ul li .pr .titleWrap {position: static; font-size:18px; color:#222; font-weight:500;}
.listType3 .tbodyBox ul li .pr .percent {color:#689ef7; font-size:18px; width:160px;}
.listType3 .tbodyBox ul li .pr .percent span {font-weight:500;}
.listType3 .tbodyBox ul li .pr .pop {position: absolute; right:0; top:0; width:615px; padding:25px 0; font-size:16px; color:#aaa; font-weight:300;}


.basePop {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999; display: none;  background:rgba(0,0,0,.2);}
.basePop .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; display: none; }
.basePop .in {position: fixed; left:50%; top:50%;  transform:translateY(-50%); width:760px; margin-left:-380px;  z-index:10; background:#fff; padding:50px 70px 70px 70px;}
.basePop .in .title {position: relative; font-size:24px; line-height:24px; color:#222222; font-weight:700; text-align: center; padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #f2f2f2;}
.basePop .in .closePop {position: absolute; right:0; top:0; width:14px; height:14px; text-indent:-999em; background:url('../images/sub/ico_list_del.png') center no-repeat; }
.w1440 .in {width:1280px; margin-left:-640px; padding:50px;}


.basePop .title.borderNone {border-bottom:none; padding-bottom:0;}
.basePop .grayBox {text-align: center; background:#f8f8f8; font-size:18px; color:#222222; font-weight:300; padding:30px 10px; margin-bottom:50px; }

.progressWrap {margin-bottom:35px;}
.progressWrap .infoPro {margin-bottom:15px;}
.progressWrap .infoPro .percent {float:left; font-size:16px; line-height:16px; color:#222222;font-weight:700;}
.progressWrap .infoPro .percent span {display: inline !important}
.progressWrap .infoPro .remain {float:right; font-size:14px; line-height:14px; color:#888888;font-weight:300;}
.progressWrap .rail {background:#eaeaea; position: relative; border-radius:10px; height:8px; overflow:hidden;}
.progressWrap .rail span {position: absolute; left:0; top:0; width:0; height:100%; background:#689ef7;}



.couponPop .in .listType3 {border:none; padding:0;}
.couponPop .in .listType3 .theadBox ul li.size1 {width:80px;}
.couponPop .in .listType3 .theadBox ul li.size2 {width:155px;}
.couponPop .in .listType3 .theadBox ul li.size4 {width:100px; text-align: right;}
.couponPop .in .listType3 .tbodyBox ul li .pr .date {width:80px;}
.couponPop .in .listType3 .tbodyBox ul li .pr .use {width:155px; font-weight:500; font-size:18px;}
.couponPop .in .listType3 .tbodyBox ul li .pr .use .end {color:#f76868;}
.couponPop .in .listType3 .tbodyBox ul li .pr .percent {width:100px; text-align: right;}
.couponPop .in .listType3 .tbodyBox ul li .pr .titleWrap {text-align: left;}
.couponPop .in .listType3 .tbodyBox ul li .pr .titleWrap .tit {text-align: left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}


.listType3 .theadBox ul li.size5 {width:125px;}
.listType3 .theadBox ul li.size6 {width:85px;}
.listType3 .theadBox ul li.size8 {width:115px; text-align: right; padding-right:30px;}

.listType3.type2 .tbodyBox ul li .pr .date {width:125px;}
.listType3.type2 .tbodyBox ul li .pr .dv {width:85px; font-size:18px; color:#aaaaaa; font-weight:500;}
.listType3.type2 .tbodyBox ul li .pr .dv.blue {color:#689ef7;}
.listType3.type2 .tbodyBox ul li .pr .dv.red {color:#f76868;}
.listType3.type2 .tbodyBox ul li .pr .price { width:615px; text-align: right; color:#222222; padding-right: 25px;}
.listType3.type2 .tbodyBox ul li .pr .price span {font-weight:500;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap {position: static; font-size:18px; color:#222; font-weight:500; text-align: left; padding-left:20px;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap .tit {display: inline-block; vertical-align: middle;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap  span {margin-left:10px;display: inline-block; vertical-align: middle; font-size:16px; color:#aaaaaa; font-weight:300;}

.pointPop .in .listType3 {border:none; padding:0;}
.pointPop .in .listType3 .theadBox ul li.size9 {width:80px;}
.pointPop .in .listType3 .theadBox ul li.size11 {width:80px; text-align: right;}

.pointPop .in .listType3 .tbodyBox ul li .pr .date {width:80px;}
.pointPop .in .listType3 .tbodyBox ul li .pr .titleWrap {text-align: left; padding-left:40px;}
.pointPop .in .listType3 .tbodyBox ul li .pr .price {width:125px; padding-right: 0;}

.interestWrap {padding:45px; background:#fff; border:1px solid #f2f2f2}
.sortWrap {}
.sortWrap .count {font-size:24px; color:#222222;}
.sortWrap .count span {font-weight:700;}
.interestWrap .listType1 .in{ padding:0;}
/* .interestWrap .listType1 .in ul {margin-left:-2%;}
.interestWrap .listType1 .in li {width:31%; margin-left:2%;} */
.interestWrap .listType1 .in li .desc {display: none;}

.listType2.questionType {padding:0 ;border:none;}
.listType2.questionType .theadBox ul li.size3 {width:150px;}
.listType2.questionType .theadBox ul li.size4 {width:150px;}

.listType2.questionType .tbodyBox ul li .pr {display:table; width:100%;border-bottom:1px solid #eaeaea; font-size:18px; line-height:18px; color:#222222; font-weight:300; text-align: center; padding:30px 0;}
.listType2.questionType .tbodyBox ul li .pr > div {display:table-cell; }
.listType2.questionType .tbodyBox ul li .pr > div.title {text-align: left; padding:0 0 0 20px; font-weight:500; cursor:pointer;}
.listType2.questionType .tbodyBox ul li .pr > div.dv {width:105px; font-size:18px; color:#aaaaaa; font-weight:500;}
.listType2.questionType .tbodyBox ul li.complete .pr > div.dv {color:#689ef7;}
.listType2.questionType .tbodyBox ul li.answer .pr > div.title {font-weight:300; padding-left:50px; position: relative; }
.listType2.questionType .tbodyBox ul li.answer .pr > div.title:after {content:''; position: absolute; left:20px; top:-5px; background:url('../images/sub/ico_line.png') 0 0 no-repeat; width:15px; height:15px;}
.listType2.questionType .tbodyBox ul li .pr > div.info {width:150px; font-size:16px; color:#aaaaaa;}
.listType2.questionType .paging {padding-bottom:0;}

.listType2.editType {padding:0 ;border:none;}
.listType2.editType .inBox ul .size1 {width:50px;}
.listType2.editType .inBox ul .size2 {width:120px;}
.listType2.editType .inBox ul .size3 {width:auto;}
.listType2.editType .inBox ul .size4 {width:120px;}
.listType2.editType .tbodyBox ul li .pr {display:table; width:100%;border-bottom:1px solid #eaeaea; font-size:18px; line-height:18px;  color:#222222; font-weight:300; text-align: center; padding:30px 0;}
.listType2.editType .tbodyBox ul li .pr > div {display:table-cell; }
.listType2.editType .tbodyBox ul li .pr > div.dv {color:#689ef7;}
.listType2.editType .tbodyBox ul li.complete .pr > div.dv {color:#000;}
.listType2.editType .tbodyBox ul li .info {text-align: left;}
.listType2.editType .tbodyBox ul li .date {color:#aaaaaa}
.listType2.editType .btnCenter {margin-top:30px; text-align: center;}
.listType2.editType .btnCenter a {display: inline-block;}

.boardWrap.editOrder {padding:0;}
.boardWrap.editOrder .warnText {margin-bottom:30px;}

.orderNewSec.editOrder {border:1px solid #f2f2f2}
.orderNewSec.editOrder:after {display:none;}
.orderListSec.editOrder {margin-top:30px;}
.orderListSec.editOrder .contWrap{border:none;}



.pwCheckPop .pwCheckTit {font-size:18px; color:#222222; font-weight:300; line-height:18px; margin-bottom:30px; text-align: center;}


.basePrd {border:1px solid #f2f2f2; background:#fff; padding:30px; margin-bottom:30px;}
.basePrd:after {content:''; clear:both; display: block;}
.basePrd .img {float:left; border:1px solid #f2f2f2; width:120px; height:120px; border-radius:5px;}
.basePrd .txtWrap {padding-left:150px;}
.basePrd .txtWrap .dateInfo {font-size:18px; color:#222222; font-weight:300; margin-bottom:25px;}
.basePrd .txtWrap .dateInfo span {color:#888888}
.basePrd .txtWrap .dateInfo em {font-weight:700; font-size:20px;}
.basePrd .txtWrap .txt .tit01 {font-size:20px; color:#222222; font-weight:500;}
.basePrd .txtWrap .txt .tit01 span {font-size:16px; font-weight:300;}
.basePrd .txtWrap .txt .tit02 {font-size:18px; color:#888888; font-weight:300;}
.basePrd .txtWrap .txt .tit02 .arrow {background:url('../images/ico_deli03.png') right center no-repeat; padding-right:20px;}
.basePrd .txtWrap .txt .tit02 em {text-decoration: underline;}



.orderWriteWrap .orderListSec .contWrap {border-top:2px solid #222;}

.formBox.orderType .line:after {content:''; display: block; clear:both;}
.formBox.orderType .line .db {float:left; width:47.5%; display:table;}
.formBox.orderType .line .db:first-child {margin-right:5%;}
.formBox.orderType .line .tit {width:190px; vertical-align: top; padding-top:25px;}
.formBox.orderType.option .line .db:first-child {width:580px; margin-right:0;}
.formBox.orderType.option .line .tit {width:260px; padding:20px 0; vertical-align: middle;}
.formBox.orderType.option .line .rBox { vertical-align: middle;}
.formBox.orderType.option .line .rBox .ckType1 {margin-right:10px;}
.formBox.orderType .line .rBox.date {position: relative;}
.formBox.orderType .line .rBox.date input {background:#fff;}
.formBox.orderType .line .rBox.date a {position: absolute; right:29px; top:50%; margin-top:-12px; width:24px; height:24px; text-indent:-999em;background:url('../images/order/ico_cal.png') no-repeat;}
.lineHr {margin:30px 0; height:1px; background:#f2f2f2;}
.lineHrFirst {margin:30px 0; height:1px; background:#f2f2f2;}



.fileBox2 {position: relative; display: inline-block;  overflow:hidden; vertical-align: top; width:650px; padding-right:210px;}
.fileBox2 .fileList {border:1px solid #eaeaea; height:75px; line-height:73px;}
.fileBox2 .fileList span {display: inline-block; margin-left:15px; font-size:16px; color:#222222;}
.fileBox2 .fileList span a {display: inline-block; vertical-align: middle; text-indent:-999em; margin-left:10px; width:13px; height:13px; background:url('../images/sub/ico_fileDel.png') center no-repeat;}
.fileBox2 .fakeFile {position: absolute; right:0; top:0; width:200px; height: 75px;  text-align: center; overflow:hidden; padding-right:0;}
.fileBox2 .fakeFile input {position: absolute; right:0; top:0; width:750px; height:100%; opacity:0; z-index: 10; font-size: 100px; cursor:pointer;}
.fileBox2 .fakeFile .btn {width: 200px; height: 75px; padding:0; line-height:73px; position: absolute; right:0; top: 0px; background:#222; font-size:18px; color:#fff; font-weight:700; border:none; border-radius:0px;}




/* fakeFile */
.fakeFile {position: relative; overflow:hidden; width:650px; padding-right:210px;}
.fakeFile.mb {margin-bottom:10px;}
.fakeFile .fileText {background:#fff !important}
.fakeFile .fileInput .fileInputButton{width: 200px; height: 75px; line-height:73px; position: absolute; right:0; top: 0px; background:#222; font-size:18px; color:#fff; font-weight:700; border:none;}
.fakeFile .fileInput .fileInputHidden{font-size: 85px;position: absolute;right: 0px;top: 0px;opacity: 0; filter: alpha(opacity=0);-ms-filter: "alpha(opacity=0)";-khtml-opacity: 0;-moz-opacity: 0; cursor:pointer;}
.fakeFile.solo .fileInputButton {position: static;}



.btType01.max200 {width:200px;}
.btType01.max440 {width:440px;}
.btType01.db {display: inline-block;}
.galListWrap {border:1px solid #eaeaea; margin-top:10px;}
.galListWrap .titGal {padding:25px 29px}
.galListWrap .titGal em {display: inline-block; font-size:18px; color:#222; font-weight:500; margin-right:15px; vertical-align: middle;}
.galListWrap .titGal .warnText {display: inline-block; vertical-align: middle; margin:0;}
.galListWrap .dargGal {padding:30px 30px 20px 30px; background:#f8f8f8;}
.galListWrap .dargGal .dragIn:after {content:''; display: block; clear:both;}
.galListWrap .dargGal .dragIn .dragBox {position: relative; float:left; width:19%; height:270px; padding:10px 10px 50px 10px; background:#fff; border:1px solid #eaeaea; margin:0 1% 10px 0;}
.galListWrap .dargGal .dragIn .dragBox .img {height:170px; text-align: center; line-height:170px; margin-bottom:10px; background:#f8f8f8; }
.galListWrap .dargGal .dragIn .dragBox .img img {vertical-align: middle; max-height:100%}
.galListWrap .dargGal .dragIn .dragBox .txt {text-align: center; font-size:12px; color:#888888; font-weight:300; }
.galListWrap .dargGal .dragIn .dragBox .mb {text-align: center; font-size:12px; color:#888888; font-weight:300; }
.galListWrap .dargGal .dragIn .dragBox .btn {position: absolute; left:0; bottom:10px; padding:0 10px; width:100%; text-align: center; text-align: right;}
.galListWrap .dargGal .dragIn .dragBox .btn .darg {float:left; background:url('../images/order/ico_drag.png') center no-repeat; width:22px; height:22px; text-indent:-999em; text-align: left;}
.galListWrap .dargGal .dragIn .dragBox .btn .delete {display: inline-block; background:url('../images/order/ico_trash.png') center no-repeat; width:18px; height:20px; text-indent:-9999em; text-align: left; }
.galListWrap .dargGal .dragIn .dragBox .btn .show {display: inline-block; background:url('../images/order/ico_zoom.png') center no-repeat; width:19px; height:20px; text-indent:-9999em; margin-left:10px;  text-align: left; }


.galListWrap .dargGal .file-drop-zone {border:none; padding:0; margin:0;}
.galListWrap .dargGal .bg-success {background:#aaa !important; font-family:'Noto Sans KR', sans-serif;}
.galListWrap .dargGal .krajee-default.file-preview-frame .kv-file-content {height:170px; text-align: center; line-height:170px; background:#f8f8f8; font-size: 0; }
.galListWrap .dargGal .krajee-default.file-preview-frame .kv-file-content img {vertical-align: middle;}
.galListWrap .dargGal .krajee-default .file-footer-caption {margin-bottom:10px;}
.galListWrap .dargGal .krajee-default .file-drag-handle {margin-top:0;}
.galListWrap .dargGal .file-sortable .file-drag-handle {text-indent:-999em; background:url('../images/order/ico_drag.png') center no-repeat; width:22px; height:22px;}
.galListWrap .dargGal .krajee-default .file-footer-buttons button {text-indent:-999em; border:none; padding:0; width:20px; height:20px;}
.galListWrap .dargGal .krajee-default .file-footer-buttons .kv-file-remove { background:url('../images/order/ico_trash.png') center no-repeat}
.galListWrap .dargGal .krajee-default .file-footer-buttons .kv-file-zoom { background:url('../images/order/ico_zoom.png') center no-repeat; margin-left:10px; }
.galListWrap .dargGal .file-drop-zone-title {line-height:260px; padding:0;}


.ckBox3 {margin-top:10px; padding-bottom:20px;}
.ckBox3 .ckType1 {margin-right:20px;}

.openInvite {margin-bottom:10px;}

.icoWarn {display: inline-block; vertical-align: middle; margin-left:10px;text-indent:-999em; width:22px; height:22px; background:url('../images/order/ico_info3.png') no-repeat; cursor:pointer; position: relative; top:-2px}

.orderNumPop .in {height:720px; background:#f4eef0; }
.orderNumPop .in .backBg img {position: absolute; left:0; top:0; }
.orderNumPop .in .numSelBox {position: relative; z-index:10; padding:160px 0 0 160px;}
.orderNumPop .in .numSelBox .tit01 {font-size:36px; line-height:44px; color:#222222; margin-bottom:20px; font-weight:bold; transition:1s all;   opacity:0; transform:translateY(30px);}
.orderNumPop .in .numSelBox .tit02 {font-size:18px; color:#a19b9e; margin-bottom:70px;transition:1s all;   opacity:0; transform:translateY(30px); }
.orderNumPop .in .numSelBox .choiceBox {position: relative; width:556px; padding-right:210px; transition:1s all;   opacity:0; transform:translateY(30px); z-index: 10;}
.orderNumPop .in .numSelBox .choiceBox:after {content:''; display: block; clear:both;}
.orderNumPop .in .numSelBox .choiceBox .selBox { width:100%;}
.orderNumPop .in .numSelBox .choiceBox .btn {position: absolute;left:0; top:0; width:200px; }
.orderNumPop .in .numSelBox .choiceBox a {position: absolute;left:0; top:0; width:200px;  text-align: center; font-size:20px; color:#222; border:1px solid #222; height:75px; line-height:73px; }
.orderNumPop .in .numSelBox .choiceBox a.back {width:0; background:#222;  color:#fff; transition:1s all; overflow:hidden; white-space:nowrap; border:none; }
.orderNumPop .in .numSelBox .choiceBox a.back span {position: absolute; left:0; top:0; width:200px; height:75px; line-height:73px;}
.orderNumPop.active .in .numSelBox .choiceBox a.back {width:200px; }
.orderNumPop .in .numSelBox .imgBox {position: absolute; right:100px; top:20px; }
.orderNumPop .in .numSelBox .imgBox .card {transition:1s all;   opacity:0; transform:translateX(30px);}
.orderNumPop .in .numSelBox .imgBox .leaf span {position: absolute; left:0; top:0; transition:5s all;  opacity:0; }
.orderNumPop .in .numSelBox .imgBox .leaf span.no1 {left:310px; top:35px;    transform:translate(130px,-50px) rotate(110deg);   }
.orderNumPop .in .numSelBox .imgBox .leaf span.no2 {left:-17px; top:325px; transform:translate(-60px,-50px) rotate(50deg);;}
.orderNumPop .in .numSelBox .imgBox .leaf span.no3 {left:364px; top:556px; width:42px; transform:translate(60px,-50px) rotate(60deg);}
.orderNumPop .in .closePop {right:60px; top:60px; z-index:15;}

.openPop .orderNumPop {visibility:visible;}
.openPop .orderNumPop .in .numSelBox .tit01 {opacity:1; transform:translate(0,0);}
.openPop .orderNumPop .in .numSelBox .tit02 {opacity:1; transform:translate(0,0); transition-delay:300ms;}
.openPop .orderNumPop .in .numSelBox .choiceBox {opacity:1; transform:translate(0,0); transition-delay:500ms;}
.openPop .orderNumPop .in .numSelBox .imgBox .card {opacity:1; transform:translate(0,0); transition-delay:700ms;}
.openPop .orderNumPop .in .numSelBox .imgBox .leaf span {transition-delay:100ms;}
.openPop .orderNumPop .in .numSelBox .imgBox .leaf span.no1 { transform:translate(0,0) rotate(0deg);  opacity:1;}
.openPop .orderNumPop .in .numSelBox .imgBox .leaf span.no2 { transform:translate(0,0) rotate(0deg);  opacity:1;}
.openPop .orderNumPop .in .numSelBox .imgBox .leaf span.no3 { transform:translate(0,0) rotate(0deg);  opacity:1;}

.questionPop .in .stepList {padding:0; border:none; margin-bottom:70px;}
.questionPop .in .stepList ul {padding:0; border:none;}
.questionPop .in .stepList li {padding-right:29%;}
.questionPop .in .stepList li:last-child {padding-right: 0;}
.questionPop .in .stepContent > div {display: none; position: relative;}
.questionPop .in .stepContent > div.active {display: block;}
.questionPop .in .stepContent .tit01 {font-size:24px; color:#222222; font-weight:700; margin-bottom:5px;}
.questionPop .in .stepContent .tit02 {font-size:18px; color:#888888; font-weight:300; margin-bottom:25px;}
.questionPop .in .stepContent .tit02 span {color:#689ef7}
.questionPop .in .stepContent .ckBox {margin-bottom:40px;}
.questionPop .in .stepContent .ckBox:after {content:''; display: block; clear:both;}
.questionPop .in .stepContent .ckBox .ckType2 {float:left; width:32.8%; margin-left:.75%; margin-bottom:10px;}
.questionPop .in .stepContent .ckBox .ckType2:nth-child(1) {margin-left:0;}
.questionPop .in .stepContent .ckBox .ckType2:nth-child(3n+1) {margin-left:0;}

.ckType2 {display: inline-block; min-width:160px; vertical-align: top; }
.ckType2 input {position: absolute; visibility: hidden;}
.ckType2 label {position: relative; font-size:18px; color:#888888; padding:25px 50px; text-align: center; font-weight:300; border:1px solid #eaeaea; display: block;}
.ckType2 label:after {content:''; position: absolute; left:29px; top:50%; width:22px; height:22px; margin-top:-12px; border:1px solid #222222;}
.ckType2 input:checked + label {color:#222; border:1px solid #222;}
.ckType2 input:checked + label:before {content:''; position: absolute; left:29px; top:50%; margin-top:-12px; width:24px; height:24px; background:#222 url('../images/sub/ico_checkOn.png') center no-repeat;}
.ckType2.left label {text-align: left; padding-left:85px; padding-right:30px;}


.selectFunc {position: absolute; right:0; top:40px;}
.selectFunc .cancel {display: inline-block; vertical-align: middle; font-size:18px; color:#888888; font-weight:300; padding-left:23px; background:url('/html/images/btnRe.png') left center no-repeat; margin-right:20px; }
.selectFunc .ckType2 {display: inline-block; vertical-align: middle; min-width:auto;}
.selectFunc .ckType2 label {border:none; padding:0; color:#222222; padding-left:30px;}
.selectFunc .ckType2 label:after {left:0;}
.selectFunc .ckType2 input:checked + label:before {left:0;}
.selectFunc .ckType2 input:checked + label {border:none;}


.btnTwo2 {}
.btnTwo2:after {content:''; display: block; clear:both;}
.btnTwo2 a {float:left; width:150px; border:1px solid #f2f2f2; text-align: center; font-size:20px; font-weight:500;color:#222; height:60px; line-height:58px; }
.btnTwo2 a.black { background:#222; border:none; color:#fff; float:right; }
.btnTwo2 a span {padding-right:24px; background:url('../images/order/ico_use1.png') right center no-repeat;}
.btnTwo2 a.black span {background:url('../images/order/ico_use2.png') right center no-repeat;}
.btnTwo2.center {text-align: center;}
.btnTwo2.right {text-align: right;}
.btnTwo2.center a {float:none; display: inline-block; vertical-align: top;}
.btnTwo2.center a + a {margin-left:10px;}
.btnTwo2 a label {display: block;}

.inviteSamPop .in .ckBox .ckType2 { }
.inviteSamPop .in .ckBox {margin-bottom:30px; max-height:400px; overflow-y:auto; font-size: 0;}
.inviteSamPop .in .ckBox:after {content:''; display: block; clear:both;}
.inviteSamPop .in .ckBox .ckType2 {display: inline-block; vertical-align: top; width:49.5%; margin-bottom:10px;}
.inviteSamPop .in .ckBox .ckType2:nth-child(2n) { margin-left:1%;}


.basePop .sample {margin-bottom:30px; text-align: center;}
.grayWarn {padding:24px 0; margin-bottom:30px; background:#f8f8f8; text-align: center;}
.grayWarn .warnText {margin:0;}
.warnText.solo {margin:0 0 20px 0; padding:20px 10px 20px 15px;  border:1px solid #f2f2f2; background:#fff; font-weight:300;}

.orderWriteWrap .in {position: relative;}
.quickBtn {position: absolute; right:-30px;; bottom:0; }
.quickBtn ul {position: fixed; bottom: 200px;width:74px; }
.quickBtn ul li {margin-bottom:10px;}
.quickBtn ul li a {display: block; height:74px; background:#222; text-align: center; color:#fff; padding-top:15px; font-size:14px; line-height:14px; font-weight:500;}
.quickBtn ul li a span {display: block; padding-top:30px; }
.quickBtn ul li.no1 a {background:#fff; border:1px solid #222; color:#222;}
.quickBtn ul li.no1 a span {background:url('../images/order/ico_quick01.png') center top no-repeat;}
.quickBtn ul li.no2 a span {background:url('../images/order/ico_quick02.png') center top no-repeat;}
.quickBtn ul li.no3 a span {background:url('../images/order/ico_quick03.png') center top no-repeat;}


.eventList {font-size:0;}
.eventList:after {content:''; display: block; clear:both;}
.eventList li {display: inline-block; vertical-align: top; width:32%; margin-left:2%; margin-bottom:2%;}
.eventList li:first-child {margin-left:0;}
.eventList li a {display: block; text-align: center;}
.eventList li a span {display: block;}
.eventList li a .img {margin-bottom:25px; border-radius:5px; overflow:hidden; position: relative;}
.eventList.end li a .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.eventList li a .tit01 {font-size:18px; color:#888888; font-weight:300;}
.eventList li a .tit02 {font-size:20px; color:#222; font-weight:700; letter-spacing:-0.05em;}


.h2Box .redInfo {font-size:18px; color:#b27085; font-weight:300; margin-top:30px;}

.eventList_new {font-size: 0;}
.eventList_new:after {content:''; display: block; clear:both;}
.eventList_new li {display: inline-block; vertical-align: top;  margin-right:2.4%; width:23.2%; margin-bottom:45px;}
.eventList_new li:first-child {margin-left:0;}
.eventList_new li:nth-child(4n) {margin-right:0;}
.eventList_new li a {display: block;}
.eventList_new li a span {display: block;}
.eventList_new li a .img {margin-bottom:15px; border-radius:5px; overflow:hidden; position: relative;}
.eventList_new.end li a .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.eventList_new li a .tit01 {font-size:24px; color:#222222; font-weight:700; letter-spacing:-0.05em; line-height:32px; margin-bottom:5px;}
.eventList_new li a .tit01 img {vertical-align: middle; position: relative; top:-3px}
.eventList_new li a .tit02 {font-size:18px; color:#888888; font-weight:300;}


.faqRecent {margin-bottom:75px;}
.faqRecent .box {float:left; width:49%; background:#fff; padding:50px;}
.faqRecent .box:last-child {float:right;}
.faqRecent .box .tit {font-size:20px; line-height:20px; color:#222; font-weight:700; padding-bottom:20px; margin-bottom:15px; border-bottom:1px solid #eaeaea; }
.faqRecent .box ul li {margin-bottom:15px;}
.faqRecent .box ul li:last-child {margin-bottom:0;}
.faqRecent .box ul li a {display: block;}
.faqRecent .box ul li a:after {content:''; display: block; clear:both;}
.faqRecent .box ul li a span {float:left; font-size:18px; color:#689ef7; font-weight:700;}
.faqRecent .box ul li a p {padding-left:26px; font-size:18px; color:#222222; font-weight:300; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}

.keywordSearch {border:10px solid #f2f2f2; padding:40px 140px; margin-bottom:30px;}
.keywordSearch .tit {text-align: center;  font-size:26px; line-height:26px; margin-bottom:26px; color:#222; font-weight:700;}
.keywordSearch .ipBox {position: relative;}
.keywordSearch .ipBox input {border:1px solid #222; padding-right:50px;}
.keywordSearch .ipBox a {position: absolute; right:30px; top:50%; margin-top:-11px; width:20px; height:22px; background:url('../images/sub/ico_search.png') center no-repeat; text-indent:-9999em;}
.keywordSearch .keyList {margin-top:30px; text-align: center;}
.keywordSearch .keyList .txt {display: inline-block; margin-right:25px; vertical-align: top; padding-right:22px; font-size:18px; color:#222; font-weight:700; background:url('../images/sub/ico_keyword.png') right center no-repeat;}
.keywordSearch .keyList ul {display: inline-block; vertical-align: top;}
.keywordSearch .keyList ul li {display: inline-block;  border-bottom:1px solid #689ef7; padding-bottom:5px; margin-right:25px;}
.keywordSearch .keyList ul li a { font-size:18px; color:#689ef7; font-weight:500; }

.sortFaq {margin-bottom:30px;}
.sortFaq ul li {float:left; width:19.5%; margin-left:.5%; border:1px solid #eaeaea; text-align: center;}
.sortFaq ul li a {display: block; height:195px; padding-top:50px; background:#fff;}
.sortFaq ul li a span {display: inline-block; vertical-align: top; font-size:22px; color:#888888; font-weight:300; padding-top:70px;}
.sortFaq ul li.active a {border:2px solid #222; background:none;}
.sortFaq ul li.active a span {color:#222; font-weight:700;}

.sortFaq ul li.no1 span {background:url('../images/sub/ico_faq01.png') center top no-repeat;}
.sortFaq ul li.no2 span {background:url('../images/sub/ico_faq02.png') center top no-repeat;}
.sortFaq ul li.no3 span {background:url('../images/sub/ico_faq03.png') center top no-repeat;}
.sortFaq ul li.no4 span {background:url('../images/sub/ico_faq04.png') center top no-repeat;}
.sortFaq ul li.no5 span {background:url('../images/sub/ico_faq05.png') center top no-repeat;}

.sortFaq ul li.active.no1 span {background:url('../images/sub/ico_faq01_on.png') center top no-repeat;}
.sortFaq ul li.active.no2 span {background:url('../images/sub/ico_faq02_on.png') center top no-repeat;}
.sortFaq ul li.active.no3 span {background:url('../images/sub/ico_faq03_on.png') center top no-repeat;}
.sortFaq ul li.active.no4 span {background:url('../images/sub/ico_faq04_on.png') center top no-repeat;}
.sortFaq ul li.active.no5 span {background:url('../images/sub/ico_faq05_on.png') center top no-repeat;}

.faqList ul li {margin-bottom:10px; border:1px solid #f2f2f2; background:#fff;}
.faqList ul li .box {padding:25px 47px}
.faqList ul li .box.question  {cursor:pointer}
.faqList ul li .box.question .title {position: relative; padding-right:25px;padding-left:50px; font-size:18px; color:#222; font-weight:700; background:url('../images/sub/ico_q.png') left 0 no-repeat; }
.faqList ul li .box.question .title:after{content:''; position: absolute; right:0; top:50%; margin-top:-4px; width:15px; height:8px; background:url('../images/sub/ico_op.png') left 0 no-repeat; cursor:pointer}
.faqList ul li.active .box.question .title:after {transform:rotate(180deg)}
.faqList ul li.active .box.answer { display: block;}
.faqList ul li .box.answer { padding-top:0; display: none;}
.faqList ul li .box.answer .txt {border-top:1px solid #f2f2f2; padding-top:25px; padding-left:50px; font-size:18px; color:#888888; font-weight:300; background:url('../images/sub/ico_a.png') left 30px no-repeat;}


.rvPop { overflow-y:auto; z-index: 500 !important; }
.rvPop .in{ padding:35px;}
.rvPop .rvList {position: relative;}
.rvPop .rvList .titleBox{position: relative; margin-bottom:40px;}
.rvPop .rvList .titleBox .starList{margin-bottom:10px;}
.rvPop .rvList .titleBox .rvTit{margin-bottom:0; font-size:20px; color:#222222; font-weight:700;}
.rvPop .rvList .titleBox .info{}
.rvPop .rvList .closePop {position: absolute; right:0; top:0; width:14px; height:14px; text-indent:-999em; background:url('../images/sub/ico_list_del.png') center no-repeat; }

.rvPop .rvList .hiddenBox { }
.rvPop .rvList .hiddenBox .imgSlide {max-width:640px; position: relative; margin-bottom:30px;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination { position:absolute; width:100%; bottom:20px; text-align: center; font-size: 0;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span {width:10px; height:10px; border-radius:50%; background:#eaeaea; margin-right:10px; opacity:1;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#222222;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.rvPop .rvList .hiddenBox .tit01 {font-size:20px; color:#222222; font-weight:700; margin-bottom:25px;}
.rvPop .rvList .hiddenBox .txt {font-size:18px; color:#222222; font-weight:300; padding-top:0; padding-left:0;}
.rvPop .rvList .hiddenBox .imgSlide img {width:100%;}


.rvPop .notiTxt {width:45px;;}
.rvPop .rvList .titleBox {margin-bottom:30px; padding-bottom:30px; border-bottom:1px solid #eaeaea;;}
.rvPop .rvList .imgList {margin-bottom:34px;}
.rvPop .rvList .imgList ul {}
.rvPop .rvList .imgList ul li {width:100px; height:100px;}
.rvPop .rvList .imgList ul li a { border-radius:10px; overflow:hidden; display: block; width:100px; height:100px; }
.rvPop .rvList .contBox {}
.rvPop .rvList .contBox .txt {font-size:18px; color:#222222; font-weight:300;}
.rvPop .scrollBox .inSc {max-height:380px; height:auto;}
.rvPop .scrollBox .inSc .mCSB_scrollTools {width:5px; background:#eaeaea; border-radius:10px;}
.rvPop .scrollBox .inSc .mCSB_dragger .mCSB_dragger_bar {width:5px;  border-radius:10px;}
.rvPop .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:20px;}



.orderStep {padding:50px; background:#fff; border:1px solid #f2f2f2; margin-bottom:30px;}
.orderStep.type2 {margin-bottom:70px;}
.orderStep .stepList {padding:0;}
.orderStep .stepList ul{padding:0; border:none;}
.orderStep .stepList ul li {padding-right:28%;}
.orderStep .stepList ul li:last-child {padding-right:0;}

.ordertit {position: relative; padding-bottom:45px; margin-bottom:45px; border-bottom:1px solid #f2f2f2;}
.ordertit .tit {font-size:24px; color:#222; font-weight:700; line-height:24px;}
.ordertit .ckType1 {position: absolute; right:0; top:0;}
.ordertit .count {display: inline-block;  margin-left:20px; font-size:24px; line-height:24px; font-weight:300; border-bottom:1px solid #222; padding-bottom:5px;}
.ordertit .count em {font-weight:700;}

.orderBase {padding:50px; background:#fff; border:1px solid #f2f2f2; margin-bottom:30px;}

.orderConfirmList .thead {display:table; width:100%;}
.orderConfirmList .thead .th {display:table-cell; font-size:20px; font-weight:500; color:#222; padding-bottom:30px; border-bottom:1px solid #eaeaea; text-align: center; width:135px; }
.orderConfirmList .thead .th.no1 {width:102px;}
.orderConfirmList .thead .th.no2 {width:auto;}
.orderConfirmList .thead .th.no3 {width:150px;}
.orderConfirmList .thead .th.no5 {width:120px;}
.orderConfirmList .thead .th label {font-weight:500;}

.orderConfirmList .tbody {padding-top:0;}
.orderConfirmList .tbody .tr {display:table; width:100%;  border-bottom:1px solid #eaeaea;}
.orderConfirmList .tbody .tr .td {display:table-cell; font-size:18px; font-weight:300; color:#222; padding:23px 0; text-align: center; width:135px;}
.orderConfirmList .tbody .tr .td.no1 {width:32px;}
.orderConfirmList .tbody .tr .td.no2 {width:auto; padding-left:30px; position: relative;}
.orderConfirmList .tbody .price em {font-weight:700; font-size:20px;}

.orderConfirmList .imgTxt:after {content:''; display: block; clear:both;}
.orderConfirmList .imgTxt .img {float:left; width:125px; height:125px; border:1px solid #f2f2f2; border:1px solid #f2f2f2}
.orderConfirmList .imgTxt .txtWrap {padding-left:145px; padding-top:35px; text-align: left;}
.orderConfirmList .imgTxt .txtWrap .tit01 {font-size:20px; color:#222; font-weight:300;}
.orderConfirmList .imgTxt .txtWrap .tit02 {font-size:18px; color:#aaaaaa; font-weight:300;}

.orderConfirmList .lastInfo {position: relative; padding-top:30px;}
.orderConfirmList .lastInfo .btn a {display: inline-block; vertical-align: top; padding:0 20px;height:35px; line-height:32px; text-align: center; font-size:14px; color:#fff; font-weight:500; background:#222; margin-right:5px;}
.orderConfirmList .lastInfo .btn.right {position: absolute; right:0; top:30px;}
.orderConfirmList .lastInfo .btn.right a {width: 125px;}
.orderConfirmList .lastInfo .btn.right a:first-child {margin-right:7px;}
.orderConfirmList .lastInfo .priceAll {position: absolute; right:0; top:35px; text-align: right; font-size:18px; color:#222222; font-weight:300;}
.orderConfirmList .lastInfo em {font-weight:700; font-size:20px; margin-left:5px;;}
.orderConfirmList .lastInfo .plus {display: inline-block; vertical-align: middle; width:12px; height:12px; margin:0 10px; position: relative; top:-2px; background:url('../images/sub/ico_price01.png') center no-repeat; }
.orderConfirmList .lastInfo .equal {display: inline-block; vertical-align: middle; width:13px; height:9px;  margin:0 10px; position: relative; top:-2px; background:url('../images/sub/ico_price02.png') center no-repeat; }
.orderConfirmList .lastInfo .last {display: inline-block; vertical-align: top;  position: relative; top:-15px;  }
.orderConfirmList .lastInfo .last .total {font-size:20px; color:#222; font-weight:700;  }
.orderConfirmList .lastInfo .last .red {font-size:24px;  color:#f76868; font-weight:300;}
.orderConfirmList .lastInfo .last .red em{font-size:32px; font-weight:700;}


.orderBase.type3 .orderConfirmList .imgTxt .txtWrap {position: relative; top:-20px; padding-bottom:20px;}
.orderBase.type3 .orderConfirmList .btnOpChange {position: absolute; left:180px; bottom:25px; text-align: left;}
.orderBase.type3 .orderConfirmList .btnOpChange a {display: block;font-size:14px; color:#222222; font-weight:500; height:35px; line-height:33px; text-align: center; width:150px; background:#f8f8f8; border:1px solid #f2f2f2}

.ckType3 {display: inline-block; vertical-align: top; }
.ckType3 input {position: absolute; visibility: hidden;}
.ckType3 label {position: relative;  display: block; font-size:18px; line-height:73px; height:75px; color:#222; border:1px solid #eaeaea; text-align: center; font-weight:300; }
.ckType3 input:checked + label {background:#222; color:#fff; font-weight:700;}

.orderBase .formBox .tit {width:168px;}
.orderBase .lineSize01 {width:606px;}
.orderBase .lineSize02 {width:510px;}
.orderBase .lineSize03 {width:740px;}
.orderBase .btnShowAddr a {width:200px; display: inline-block; vertical-align: middle; margin-right:25px;}
.orderBase .btnShowAddr .ckType1 { display: inline-block; vertical-align: middle;}


.lastOrder {position: relative; padding-right:427px;}
.lastOrder .orderBase {}
.lastOrder .orderBase .rBox {width:auto;}
.lastOrder .orderBase .btnText {position: relative;}
.lastOrder .orderBase .btnText.money .text {padding-top:10px;}
.lastOrder .orderBase .btnText .text {font-size:18px; color:#222222; font-weight:300; padding:23px 0;}
.lastOrder .orderBase .btnText .text em {font-weight:700;}
.lastOrder .orderBase .btnText .text .name {font-size:18px; color:#222222; position: relative; z-index:5;}
.lastOrder .orderBase .btnText .text .name em {display: inline-block; vertical-align: middle; font-weight:300;}
.lastOrder .orderBase .btnText .text .name a {display: inline-block;text-indent:-999em; width:12px; height:12px; vertical-align: middle; margin-left:5px; background:url('../images/sub/ico_list_del.png') center no-repeat; background-size:14px auto;}
.lastOrder .orderBase .btnText .right {position: absolute; right:0; top:0; width:410px; text-align: right;}
.lastOrder .orderBase .btnText .right .ipBox { display: inline-block;  width:200px; vertical-align: middle;}
.lastOrder .orderBase .btnText .right a {display: inline-block; width:200px; vertical-align: middle; margin-left:5px;}
.lastOrder .orderBase .line.bt {padding-top:20px; border-top:1px solid #f2f2f2; padding-top:40px; margin-top:40px;}
.lastOrder .orderBase .line.bt .tit {vertical-align: top; padding-top:20px;}
.lastOrder .orderBase .pay {font-size:0; margin-bottom:30px;}
.lastOrder .orderBase .pay .ckType3 {width:32.5%; margin-right:1.25%;}
.lastOrder .orderBase .pay .ckType3:nth-child(3n) {margin-right:0;}
.lastOrder .orderBase .pay .ckType3:nth-child(4) {margin-top:7px;}
.lastOrder .orderBase .bankType {margin-bottom:20px;}


.bankType:after {content:''; display: block; clear:both;}
.bankType .selBox {float:left; width:49%;}
.bankType .ipBox {float:right; width:49%;}

.lastOrder .lastPrice {position: absolute; right:0; top:0; width:395px; border:2px solid #222222; }
.lastOrder .lastPrice .inner {padding:45px;}
.lastOrder .lastPrice dl{margin-bottom:20px;}
.lastOrder .lastPrice dl:last-child {margin-bottom:0;}
.lastOrder .lastPrice dl:after {content:''; display: block; clear:both;}
.lastOrder .lastPrice dl dt {float:left; font-size:18px; color:#222; font-weight:300;}
.lastOrder .lastPrice dl dd {float:right; font-size:18px; color:#222; font-weight:300;}
.lastOrder .lastPrice dl dd em {font-size:24px; font-weight:700;}
.lastOrder .lastPrice .price {padding-top:45px; margin-top:45px; border-top:1px solid #f2f2f2;}
.lastOrder .lastPrice .price dd {color:#f76868; font-size:20px; position: relative; top:-15px}
.lastOrder .lastPrice .price dd em {font-size:32px; font-weight:700;}
.lastOrder .lastPrice .btn a { display: block; text-align: center; font-size:18px; color:#fff; font-weight:700; height:75px;; line-height:73px; background:#222;}

.listType2.order {padding:0; border:0; margin-bottom:30px;}
.listType2.order .size01 {width:75px;}
.listType2.order .size02 {width:85px;}
.listType2.order .size05 {width:110px; text-align: right;}
.listType2.order .tbodyBox ul {display:table; width:100%; border-bottom:1px solid #eaeaea;}
.listType2.order .tbodyBox ul li {display:table-cell; padding:25px 0; text-align: center; font-size:18px; font-weight:300;}
.listType2.order .tbodyBox ul li.bold {font-weight:500; text-align: left; padding-left:20px;}
.listType2.order .tbodyBox ul li.left {color:#888888; text-align: left;}
.listType2.order .tbodyBox ul li.blue {text-align: right; font-size:18px; color:#689ef7;}
.listType2.order .tbodyBox ul li.blue em {font-weight:500;}

.mobsortingPort {display: none;}

.portSharePop .btnPortShare {text-align: center;}
.portSharePop .btnPortShare a {display: inline-block; vertical-align: top; margin-left:27px; text-align: center; width:75px; padding-top:90px; font-size:18px; color:#222222; font-weight:300;}
.portSharePop .btnPortShare a:first-child {margin-left:0;}
.portSharePop .btnPortShare a.kakao {background:url('../images/port/ico_share01.png') center top no-repeat;}
.portSharePop .btnPortShare a.urlCopy {background:url('../images/port/ico_share02.png') center top no-repeat;}
.portSharePop .btnPortShare a.more {background:url('../images/port/ico_share03.png') center top no-repeat; display: none;}


.ui-widget {font-family: 'Noto Sans KR', sans-serif;}
.ui-widget.ui-widget-content {border:1px solid #eaeaea;}
.ui-datepicker {border-radius:0;}
.ui-datepicker .ui-datepicker-header {border-radius:0; background:#f8f8f8; border:none; padding:8px 0; }
.ui-datepicker .ui-datepicker-title {background:#f8f8f8; font-size:12px; font-weight:700;}
.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus, .ui-button:hover, .ui-button:focus {border:none; background:none;}
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active {border:none; text-align: center; font-size:11px; color:#222222;}
.ui-datepicker .ui-state-active {background:#222; color:#fff;}
.ui-datepicker th {font-size:12px; font-weight:700;}
.ui-datepicker th:first-child {color:#f76868;}
.ui-datepicker th:last-child {color:#689ef7;}
.ui-datepicker td span, .ui-datepicker td a {padding:5px 0;}
.ui-datepicker .ui-datepicker-prev  {left:0; top:5px; cursor:pointer;}
.ui-datepicker .ui-datepicker-prev span {background:url('../images/order/ico_calArrowLeft.png') center no-repeat; left:0; top:0;}
.ui-datepicker .ui-datepicker-next  {right:0; top:5px; cursor:pointer;}
.ui-datepicker .ui-datepicker-next span {left:auto; background:url('../images/order/ico_calArrowRight.png') center no-repeat; right:0; top:0;}
.ui-datepicker .ui-datepicker-prev span, .ui-datepicker .ui-datepicker-next span {margin:0; width:30px; height:100%;}

.datepicker {border:1px solid #eaeaea !important;}
.datepicker .datepicker--nav-title {color:#222 !important; font-family: 'Noto Sans KR', sans-serif !important; font-weight:500;}
.datepicker .datepicker--nav-title i {color:#222 !important; }
.datepicker .datepicker--nav {border:none; background:#f8f8f8; padding:0; margin:3px;}
.datepicker .datepicker--day-name {font-size:12px; font-weight:700; color:#222222; margin-bottom:5px;}
.datepicker .datepicker--day-name:first-child {color:#f76868;}
.datepicker .datepicker--day-name:last-child {color:#689ef7;}
.datepicker .datepicker--cells-days {width:calc(100% + 32px)}
.datepicker .datepicker--cell-day {color:#222; background:#f8f8f8; border-radius:0;  margin:0 0 1px 1px;  border-radius:0; font-size:12px; height:28px; width:12.2%;}
.datepicker .datepicker--cell-day.-current- { background:#f8f8f8; color:#222; }
.datepicker .datepicker--cell.-selected-, .datepicker--cell.-selected-.-current- {background:#222 !important; border-radius:0;}
.datepicker .datepicker--time-current-hours, .datepicker--time-current-minutes {font-family: 'Noto Sans KR', sans-serif !important;}

body.absolute{overflow-y:hidden}

.scrollPop { bottom:0; overflow-y:auto}
.scrollPop .in {position: absolute; transform:translateY(0); top:5%;}
.questionPop .in{padding:50px; }
.questionPop .in .title {border-bottom:0; padding-bottom:0;}
.questionPop .in .writeBoard {margin-bottom:30px;}
.questionPop .in .writeBoard .formBox{padding:0; margin:0;}
.questionPop .in .writeBoard .formBox .tit {display: block; margin-bottom:10px; width:auto;}
.questionPop .in .writeBoard .formBox .rBox {display: block;}
.questionPop .in .writeBoard .formBox .writeTd {display: table;}

/* scFileIp */
.scFileIp .fileSec {position: relative; ; padding-right:305px; margin-bottom:10px;}
.scFileIp .fileSec .ctr {position: absolute; right:0; top:0; width:60px; height:100%; border:1px solid #f2f2f2; text-indent:-999em;}
.scFileIp .fileSec .ctr.del {background:url('../images/ico_file01.png') center no-repeat;}
.scFileIp .fileSec .ctr.add {background:url('../images/ico_file02.png') center no-repeat;}
.scFileIp .fileSec:last-child {margin-bottom:0;}
.scFileIp .fileSec .fileText { border:1px solid #cccccc; width:100%; height:60px; line-height:58px;  cursor:pointer; padding-left:30px; font-size:18px; font-weight:300;}
.scFileIp .fileSec  input[type="button"]{width: 225px; height: 60px; line-height:58px; position: absolute; right:70px; top: 0px; background:#222; border:none; font-size:18px; color:#fff; font-weight:500; }
.scFileIp .fileSec  input[type="file"] {font-size: 45px;position: absolute;right: 0px;top: 0px;opacity: 0; filter: alpha(opacity=0);-ms-filter: "alpha(opacity=0)";-khtml-opacity: 0;-moz-opacity: 0; cursor:pointer;}

.reviewPop .in {padding:50px;}
.reviewPop .in .title {border-bottom:0; padding-bottom:0;}
.reviewWrite .point {background:#222; font-size:20px; color:#fff; font-weight:300; text-align: center; padding:18px 0; margin-bottom:10px;}
.reviewWrite .point span {display: inline-block; vertical-align: top; padding-left:40px; background:url('../images/ico_review03.png') left center no-repeat;}
.reviewWrite .point em {color:#f2d872; font-weight:500;}
.reviewWrite .basePrd {margin-bottom:50px;}
.reviewWrite .reviewTit {margin-bottom:10px;}
.reviewWrite .reviewTit .name {font-size:20px; color:#222; font-weight:700;}
.reviewWrite .reviewTit .pink {font-size:16px; color:#f76868; font-weight:300;}
.reviewWrite .reviewTit .benefit {margin-left:20px;}

.starReview {margin-bottom:50px;}
.starReview ul {display: inline-block; vertical-align:middle; margin-right:10px;}
.starReview ul li.hover{background:url('../images/ico_review01.png') center no-repeat; opacity:.5}
.starReview ul li.active{background:url('../images/ico_review01.png') center no-repeat; opacity:1;}
.starReview ul li {display: inline-block; vertical-align: top; width:41px; height:39px; background:url('../images/ico_review02.png') center no-repeat; margin-right:5px; cursor:pointer;}
.starReview .txtResult {display: inline-block; vertical-align: middle; font-size:18px; color:#222222; font-weight:300; }
.starReview .txtResult em {font-weight:700; }

.reviewWrite .picVideo {margin-bottom:50px;}
.reviewWrite .picVideo .btn {position: relative;width:263px; height:60px; line-height:58px; border:1px solid #eaeaea; text-align: center; margin-bottom:20px; overflow:hidden;}
.reviewWrite .picVideo .btn input {position: absolute; right:0; top:0; font-size:150px; opacity:0; cursor:pointer;}
.reviewWrite .picVideo .btn .txt {font-size:18px; color:#222; font-weight:500; display: inline-block; vertical-align: middle; padding-left:38px; background:url('../images/ico_review04.png') left center no-repeat;}
.reviewWrite .picVideo .list {margin-bottom:15px;}
.reviewWrite .picVideo .list li {float:left; width:19%; margin-left:1%; border-radius:3px; overflow:hidden; background:#f8f8f8; height:120px;position: relative;}
.reviewWrite .picVideo .list li:first-child {margin-left:0;}
.reviewWrite .picVideo .list li .del {position: absolute; right:0; top:0; width:21px; height:21px; background:url('../images/ico_review05.png') center no-repeat; text-indent:-999em; z-index: 5; }
.reviewWrite .picVideo .list li.video:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.25) url('../images/ico_review06.png') center no-repeat;}
.reviewWrite .reviewTxtArea {padding-bottom:50px; margin-bottom:50px; border-bottom:1px solid #eaeaea;}
.reviewWrite .reviewTxtArea .taBox {position: relative;}
.reviewWrite .reviewTxtArea .count {position: absolute; right:30px; bottom:30px; font-size:14px; line-height:14px; color:#222222; font-weight:300; background:#fff;}
.reviewWrite .reviewTxtArea .count em {color:#689ef7; font-weight:700;}
.reviewWrite .reviewTxtArea textarea {width:100%; height:200px; padding:30px 70px 30px 30px; border:1px solid #eaeaea;}
.reviewWrite .reviewTxtArea textarea:focus {border:1px solid #222; outline:none;}

.reviewWrite .portOrder .info {font-size:18px; color:#888888; font-weight:300; padding-bottom:30px; margin-bottom:30px; border-bottom:1px solid #888888;;}
.reviewWrite .portOrder .check {margin-bottom:30px;}
.reviewWrite .portOrder .grayInfo {background:#f8f8f8;margin-bottom:30px; font-size:14px; color:#888888; font-weight:300; padding:30px;}

.benefit {position: relative; display: inline-block; vertical-align: middle;  text-align: center; font-size:14px; color:#fff; font-weight:700; width:168px; height:30px; line-height:28px; border-radius:3px; background:#689ef7; border:1px solid #6092e3;  }
.benefit em {padding-left:17px; background:url('../images/ico_star.png') left center no-repeat;}
.benefit:after {content:''; position: absolute; right:21px; bottom:-6px; width:13px; height:6px; background:url('../images/ico_starBull.png') left center no-repeat;}

.orderBase.type2 .thead .th {width:200px;}
.orderBase.type2 .thead .th.no1 {text-align: left; width:200px;}
.orderBase.type2 .thead .th.no2 {width:auto; padding-left:0; text-align: left;}

.orderBase.type2 .tbody .tr .td {width:200px; color:#888888; font-weight:300;}
.orderBase.type2 .tbody .tr .td .ckType1 em {display: inline-block; vertical-align: top; line-height:27px; color:#222222; font-weight:500;}
.orderBase.type2 .tbody .tr .td .ckType1 em span {position: relative; top:-2px;}
.orderBase.type2 .tbody .tr .td.no1 {text-align: left; width:200px;}
.orderBase.type2 .tbody .tr .td.no2 {width:auto; padding-left:0; text-align: left;}
.orderBase.type2 .tbody .tr.baseAddress .td {color:#222;}

.deliveryAdd .formBox .saveBase {}
.deliveryAdd .formBox .tit {display: block; margin-bottom:15px; margin-top:25px; }
.deliveryAdd .formBox .rBox {display: block; }
.deliveryAdd .max01  {width:77% !important;}
.deliveryAdd .btnTwo2 {margin-top:30px;}


.rBox.previewUse .fakeFile {display: inline-block;  vertical-align: top;}
.rBox.previewUse .previewFile {display: inline-block; margin-left:10px; vertical-align: top; width:200px; height:75px; line-height:73px; border:1px solid #eaeaea; text-align: center;}
.rBox.previewUse .previewFile span {padding-left:27px; font-size:18px; color:#222222; background:url('../images/ico_file03.png') left center no-repeat;}

.rBox.linkUSe .ipBox {display: inline-block;  vertical-align: top; width:440px;}
.rBox.linkUSe .linkCheck {display: inline-block; margin-left:10px; vertical-align: top; width:200px; height:75px; line-height:73px; border:1px solid #eaeaea; text-align: center;}
.rBox.linkUSe .linkCheck span {padding-left:27px; font-size:18px; color:#222222; background:url('../images/ico_file06.png') left center no-repeat;}


.ckBox3 .soundBox {display: inline-block; margin-right:30px;}
.ckBox3 .ckType1 {vertical-align: middle;}

.soundTest {display: inline-block; vertical-align: middle; background:#f8f8f8; border:1px solid #f2f2f2; height:35px; line-height:33px; border-radius:30px; padding:0 18px;}
.soundTest audio {position: absolute; visibility: hidden;}
.soundTest span {display: inline-block; vertical-align: middle; font-size:14px; color:#222222; font-weight:300;  margin-right:8px; }
.soundTest a {display: inline-block; vertical-align: middle; text-indent:-999em;  }
.soundTest a.play {background:url('../images/ico_file04.png') center no-repeat; width:11px; height:13px; margin-right:10px; }
.soundTest a.stop {background:url('../images/ico_file05.png') center no-repeat; width:9px; height:12px; }


.scFileIp.type2 .fileSec {max-width:870px; padding-right:470px;}
.scFileIp.type2 .fileSec .ctr {width:225px; text-indent:0; background:none !important; text-align: center;}
.scFileIp.type2 .fileSec .ctr span {display:inline-block; position: relative; padding-left: 27px; line-height:50px; font-size:18px; font-weight:500;}
.scFileIp.type2 .fileSec .ctr.del span {background:url('../images/ico_file01.png') left center no-repeat;}
.scFileIp.type2 .fileSec .ctr.add span {background:url('../images/ico_file02.png') left center no-repeat;}
.scFileIp.type2 .fileSec input[type="button"] {right:235px}

.pwCheckPop .pwInfo {text-align: center; padding-bottom:20px; font-size:18px; color:#222; font-weight:300;}
.pwCheckPop .addrBox .bta {width:33%}


.invitePop .in {padding:50px;}
.invitePop .in .inviCont {text-align: center;}
.invitePop .in .inviCont .tit01{font-size:48px; color:#222222; line-height:48px; font-weight:700; margin-bottom:20px;}
.invitePop .in .inviCont .tit02{font-size:28px; color:#222222;  font-weight:300; margin-bottom:10px;}
.invitePop .in .inviCont .tit02 em {font-weight:700;}
.invitePop .in .inviCont .tit03{font-size:20px; color:#888888; font-weight:300; margin-bottom:40px;}
.invitePop .in .inviCont .tit04{font-size:24px; color:#222222; font-weight:300; padding:30px 0; background:#f8f8f8;}
.invitePop .in .inviCont .tit04 em {font-weight:700;}
.invitePop .in .inviCont .btn {text-align: center; margin-top:50px;}
.invitePop .in .inviCont .btn a {display: inline-block; vertical-align: top; width:200px; height:60px; font-size:20px; font-weight:500; line-height:58px; color:#fff; background:#222;}
.invitePop .in .inviCont .btn a + a {margin-left:10px;}
.invitePop .in .inviCont .count {padding:45px 0; border-bottom:1px solid #eaeaea;}
.invitePop .in .inviCont .count .box{float:left; width:50%;}
.invitePop .in .inviCont .count .box .txt01 {font-size:24px; color:#222222; line-height:24px; font-weight:700; margin-bottom:10px;}
.invitePop .in .inviCont .count .box .txt01 em {color:#689ef7;}
.invitePop .in .inviCont .count .box .txt02 {font-size:20px; color:#888888; line-height:20px; font-weight:300; margin-bottom:25px;}
.invitePop .in .inviCont .count .box .txt02 em {font-weight:700;}
.invitePop .in .inviCont .count .box .btnCheck a {display: inline-block; vertical-align: top; background:#f8f8f8; border-radius:30px; padding:12px 20px; border:1px solid #f2f2f2;}
.invitePop .in .inviCont .count .box .btnCheck a span {font-size:14px; font-weight:500; color:#689ef7; padding-right:48px; background:url('../images/ico_iv01.png') right center no-repeat;}
.invitePop .in .inviCont .count .box.women {border-left:1px solid #f2f2f2;}
.invitePop .in .inviCont .count .box.women .txt01 em {color:#f76868;}
.invitePop .in .inviCont .count .box.women .btnCheck a span {color:#f76868;  background:url('../images/ico_iv02.png') right center no-repeat;}


.deliveryCheck .in {padding:50px;}
.deliveryCheck .in .title {padding-bottom: 0; border-bottom:none;}
.deliveryCheck .grayInfo {background:#f8f8f8;margin-bottom:30px; font-size:14px; color:#888888; font-weight:300; padding:30px;}
.deliveryCheck .grayInfo p {text-indent:-10px; padding-left:10px;}
.deliveryCheck .deliContTit {margin-bottom:20px;}
.deliveryCheck .deliContTit span {font-size:20px; color:#222222; font-weight:700;}
.deliveryCheck .dlInfo {margin-bottom:25px; padding-bottom:30px; border-bottom:1px solid #eaeaea;}
.deliveryCheck .dlInfo dl {margin-bottom:5px;}
.deliveryCheck .dlInfo dl dt {display: inline-block; vertical-align: top; width:95px; font-size:18px; color:#888888; font-weight:300; }
.deliveryCheck .dlInfo dl dd {display: inline-block; vertical-align: top; font-size:18px; color:#222; font-weight:500; }
.deliveryCheck .findList {margin-bottom:50px;}
.deliveryCheck .findList ul{position: relative;}
.deliveryCheck .findList ul:before {content:''; position: absolute; left:10px; top:-3px; width:1px; height:calc(100% - 5px); background:#eaeaea;}
.deliveryCheck .findList ul li {position: relative; padding-bottom:20px;}
.deliveryCheck .findList ul li:last-child {padding-bottom:0;}
.deliveryCheck .findList ul li:after {content:''; display: block; clear:both;}
.deliveryCheck .findList ul li .time {position: relative; float:left; font-size:14px; line-height:14px; color:#aaaaaa; font-weight:300; padding-left:30px;}
.deliveryCheck .findList ul li .time:after {content:''; position: absolute; left:6px; top:4px; width:9px; height:9px; background:#eaeaea; border-radius:50%;}
.deliveryCheck .findList ul li .info {padding-left:155px; font-size:18px; line-height:18px; color:#888888; font-weight:300;}
.deliveryCheck .findList ul li .tel {display: inline-block; text-indent:-999em; width:16px; height:16px; background:url('../images/ico_deli02.png') center no-repeat;}
.deliveryCheck .findList ul li .tel.mob {display: none;}
.deliveryCheck .findList ul li .place { display: inline-block; vertical-align: middle;}
.deliveryCheck .findList ul li .state {padding-left:10px; margin-left: 10px; position: relative; display: inline-block; vertical-align: middle; color:#aaaaaa;}
.deliveryCheck .findList ul li .state:before {content:''; position: absolute; left:0; top:50%; margin-top:-7px; width:1px; height:15px; background:#eaeaea;}
.deliveryCheck .findList ul li.complete .time {color:#222;}
.deliveryCheck .findList ul li.complete .time:after {content:''; position: absolute; left:0; top:-3px; width:19px; height:19px; background:url('../images/ico_deli01.png') center no-repeat; border-radius:50%;}

.deliveryCheck .findList ul li.complete .place {color:#222; font-weight:700;}
.deliveryCheck .findList ul li.complete .state {color:#689ef7; font-weight:500;}
.deliveryCheck .btnTwo {max-width:415px; margin:0 auto;} 

.cancelOrderPop .in {padding:50px;}
.cancelOrderPop .in .title {border-bottom:0; padding-bottom:0;}
.cancelOrderPop .in .reviewTxtArea {padding-bottom:0;  border-bottom:none;}
.cancelOrderPop .in .reviewTxtArea .selBox {width:330px; margin-bottom:10px;}
.cancelOrderPop .in .picVideo {padding-bottom:30px; margin-bottom:50px; border-bottom:1px solid #eaeaea}


.cancelOp {margin-bottom:25px;}
.cancelOp .ckType4 {float:left; width:32.6%; margin-left:1%;}
.cancelOp .ckType4:first-child {margin-left:0;}

.ckType4 {display: inline-block; vertical-align: top; }
.ckType4 input {position: absolute; visibility: hidden;}
.ckType4 label {position: relative;  display: block; font-size:18px; line-height:60px; height:58px; color:#888888; border:1px solid #eaeaea; text-align: center; font-weight:300; }
.ckType4 input:checked + label {border:1px solid #222; color:#222; font-weight:500;}

.refunInfo {margin-bottom:20px; margin-top:20px;}
.refunInfo dl {margin-bottom:5px; }
.refunInfo dl:after {content:''; display: block; clear:both;}
.refunInfo dl dt {float:left; font-size:18px; color:#888888; font-weight:300;}
.refunInfo dl dd {float:right; font-size:18px; color:#888888; font-weight:300;}
.refunInfo dl.total dt {color:#222; }
.refunInfo dl.total dd {color:#222; }
.refunInfo dl.total dd em {color:#f76868; font-size:22px; font-weight:700; }

.cancelOrderPop .grayInfo { background:#f8f8f8;margin-bottom:30px; font-size:14px; color:#888888; font-weight:300; padding:30px;}
.cancelOrderPop .grayInfo p { text-indent:-10px; padding-left:10px;}


.orderListSec .contWrap .rangeSet.type2 div {width:197px;}

.orderConfirmList.type2 {padding-top:48px;}
.orderConfirmList.type2 .th {border-bottom:2px solid #222;}
.orderConfirmList.type2 .th.no1 {width:25px;}
.orderConfirmList.type2 .th.no2 {width:170px;}
.orderConfirmList.type2 .th.no3 {width:auto; text-align: left;}
.orderConfirmList.type2 .th.no4 {width:100px;}

.orderConfirmList.type2 .tbody .td {text-align: left;}
.orderConfirmList.type2 .tbody .td.mno1 {width:25px;}
.orderConfirmList.type2 .tbody .td.mno2 {width:170px; text-align: center; color:#888888;}
.orderConfirmList.type2 .tbody .td.mno3 {width:auto;  text-align: left; color:#222222; font-weight: 500;}
.orderConfirmList.type2 .tbody .td.mno3 .mob {font-weight: 300;}
.orderConfirmList.type2 .tbody .td.mno4 {width:100px; text-align: center; }
.orderConfirmList.messageTb  .tbody .td.mno5 {width:120px; text-align: center; color:#888888;}


.rsvpWrap .rvSec .sec {float:left; width:50%;}
.rsvpWrap .rvSec .sec:first-child {float:right; padding:0 0 0 60px;}
.rsvpWrap .rvSec .sec .grayBox {background:#f8f8f8; padding:25px 10px 25px 30px;}
.rsvpWrap .rvSec .sec .grayBox .txtColor {font-size:18px; color:#888888; font-weight:300;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li {display: inline-block; vertical-align: top; margin-right:20px; letter-spacing:-0.05em; }
.rsvpWrap .rvSec .sec .grayBox .txtColor li p {position: relative; margin-bottom:10px; padding-left:24px; font-size:18px; line-height:18px; font-weight:300; color:#888888}
.rsvpWrap .rvSec .sec .grayBox .txtColor li p:after {content:''; position: absolute; left:0; top:50%; margin-top:-7px; width:15px; height:15px; border-radius:50%; background:#222;}

.rsvpWrap .rvSec .sec .grayBox .txtColor li.no1 p {color:#909090;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no1 p:after {background:#909090;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no1 p:first-child {color:#222;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no1 p:first-child:after {background:#222;}

.rsvpWrap .rvSec .sec .grayBox .txtColor li.no2 p {color:#b3cefb;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no2 p:after {background:#b3cefb;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no2 p:first-child {color:#689ef7;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no2 p:first-child:after {background:#689ef7;}

.rsvpWrap .rvSec .sec .grayBox .txtColor li.no3 p {color:#fbb3b3;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no3 p:after {background:#fbb3b3;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no3 p:first-child {color:#f76868;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li.no3 p:first-child:after {background:#f76868;}

.rsvpWrap .rvSec .sec .grayBox .txtColor li.no4 p:after {background:#eaeaea;}

.rsvpWrap .rvSec .sec .grayBox .info {font-size:18px; color:#888888; font-weight:300; padding-top:20px; margin-top:10px; border-top:1px solid #f2f2f2;}


.rsvpWrap .rvSec .sec .totalCount {margin-top:35px; padding:45px 0; text-align: center; background:#f8f8f8;  font-size:18px; color:#222; font-weight:300; text-align: center;}
.rsvpWrap .rvSec .sec .totalCount em {font-weight:700; font-size:24px;}


.rsvpWrap .rvSec .sec .graphBox .totalTxt {text-align: right; font-size:20px; line-height:20px; color:#888888; font-weight:300; margin-bottom:35px;}
.rsvpWrap .rvSec .sec .graphBox .totalTxt em {color:#222222; font-weight:700; margin-left:5px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar {border-bottom:1px solid #f2f2f2; padding-bottom:17px; margin-bottom:30px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box {position: relative; float:left; width:33.3%;  height:226px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul {position: absolute;height:100%;width:100%; text-align: center; }
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li {position: relative; display: inline-block; height:226px; vertical-align: bottom;  width:22px; margin-left:15px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li:first-child {margin-left:0;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li > div { position: absolute; left:0; bottom:0; width:100%; background:#000; border-radius:10px 10px 0 0;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li > div span {position: absolute; left:50%; margin-left:-50px; top:-26px; width: 100px; text-align: center; font-size:18px; line-height:18px; color:#909090; font-weight:300; }
.rsvpWrap .rvSec .sec .graphBox .graphBar .box .name {position: absolute; left:0; width: 100%; bottom:-53px; text-align: center; font-size:20px; line-height:20px; color:#222222; font-weight:700;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box .name span {padding-left:34px; background:url('../images/ico_rv01.png') left center no-repeat;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 .name span {padding-left:23px; color:#689ef7; background:url('../images/ico_rv02.png') left center no-repeat;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 .name span {padding-left:23px;color:#f76868; background:url('../images/ico_rv03.png') left center no-repeat;}

.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no1 ul li:nth-child(1) div {background:#909090;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no1 ul li:nth-child(1) div span {color:#909090;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no1 ul li:nth-child(2) div {background:#222;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no1 ul li:nth-child(2) div span {color:#222;}

.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 ul li:nth-child(1) div {background:#b3cefb;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 ul li:nth-child(1) div span {color:#b3cefb;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 ul li:nth-child(2) div {background:#689ef7;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 ul li:nth-child(2) div span {color:#689ef7;}

.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 ul li:nth-child(1) div {background:#fbb3b3;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 ul li:nth-child(1) div span {color:#fbb3b3;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 ul li:nth-child(2) div {background:#f76868;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 ul li:nth-child(2) div span {color:#f76868;}


.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li:nth-child(2) div span {font-weight:700;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li:nth-child(3) div {background:#eaeaea;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li:nth-child(3) div span {color:#888888;}


.rsvpWrap .orderListSec .rangeBox .rBox {float:left; width:49%;}
.rsvpWrap .orderListSec .rangeBox .rBox:last-child {float:right; }
.rsvpWrap .orderListSec .rangeBox .rangeSet {width:100%;}
.rsvpWrap .orderListSec .rangeBox .rangeSet:after {content:''; display: block; clear:both;}
.rsvpWrap .orderListSec .rangeBox .rangeSet div {float:left; width: 32%; margin-left:1.8%;}
.rsvpWrap .orderListSec .rangeBox .rangeSet div:first-child {margin-left:0;}
.rsvpWrap .orderListSec .prdSearch .ipBox {padding-left:0;}

.orderConfirmList.type3 {padding-top:48px;}
.orderConfirmList.type3 .th {border-bottom:2px solid #222;}
.orderConfirmList.type3 .th.no1 {width:25px;}
.orderConfirmList.type3 .th.no2 {width:115px;}
.orderConfirmList.type3 .th.no3 {width:85px; }
.orderConfirmList.type3 .th.no4 {width:145px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no5 {width:115px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no6 {width:200px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no7 {width:auto; text-align: left;}
.orderConfirmList.type3 .th.no8 {width:145px; }
.orderConfirmList.type3 .th.no9 {width:130px; }


.orderConfirmList.type3 .tbody .tr .td {font-size:18px; color:#222; font-weight:300;}
.orderConfirmList.type3 .tbody .tr .td.mno1 {width:25px; text-align: left; }
.orderConfirmList.type3 .tbody .tr .td.mno2 {width:115px; font-size:16px; color:#888888;}
.orderConfirmList.type3 .tbody .tr .td.mno3 {width:85px; }
.orderConfirmList .dv {display: inline-block; font-size:12px; line-height:11px; color:#222222; background:#f8f8f8; padding:5px 7px; width:54px; height:24px; border:1px solid #f2f2f2; }
.orderConfirmList .dv.color1 {background:#f76868; color:#fff;}
.orderConfirmList .dv.color2 {background:#689ef7; color:#fff;}
.orderConfirmList.type3 .tbody .tr .td.mno4 {width:145px; padding-left:10px; text-align: left; font-size:18px; color:#222;}
.orderConfirmList.type3 .tbody .tr .td.mno4 em {font-weight:700; font-size:20px;}
.orderConfirmList.type3 .tbody .tr .td.mno5 {width:115px;  padding-left:10px; text-align: left;}
.orderConfirmList.type3 .tbody .tr .td.mno5 .invite {color:#cccccc; font-weight:700; }
.orderConfirmList.type3 .tbody .tr .td.mno5 .invite.on {color:#222; padding-right:30px; background:url('../images/ico_rv04.png') right center no-repeat;}
.orderConfirmList.type3 .tbody .tr .td.mno6 {width:200px; padding-left:10px;  text-align: left;}
.orderConfirmList.type3 .tbody .tr .td.mno7 {width:auto; text-align: left;}
.orderConfirmList.type3 .tbody .tr .td.mno8 {width:145px; font-size:16px; color:#888888;}
.orderConfirmList.type3 .tbody .tr .td.mno9 {width:130px; font-size:16px; color:#888888;}

.orderConfirmList .tbody .dv {width:47px; height: 20px; line-height: 20px; padding:0; text-align: center; border:none;}
.orderConfirmList .tbody .dv.color1 {background:#ffefef; color:#f76868;}
.orderConfirmList .tbody .dv.color2 {background:#eff7ff; color:#689ef7;}



.quickArea {position: fixed; top:50%; right:10px; z-index:100; transform:translate(400px,-50%); transition:.5s all; opacity:0; }
.quickArea .box {background:#fff; border-radius:10px; margin-bottom:5px; }
.quickArea .box a {display: block; width:50px; position: relative;}
.quickArea .box a .ico {display: block; height:50px; text-indent:-999em; }
.quickArea .box a .txt {position: absolute; right:60px; top:50%; margin-top:-13px; border-radius:5px;  min-width:54px; height:26px; line-height:24px; background:rgba(0,0,0,.15); text-align: center; font-size:14px; color:#555555; transition:.3s all; transform:translateX(20%); opacity:0;}
.quickArea .box .no1 .ico {background:url('../images/main/ico_quick01.png') center no-repeat;}
.quickArea .box .no2 .ico {background:url('../images/main/ico_quick01_1.png') center no-repeat;}
.quickArea .box .no2 .txt {width:67px;}
.quickArea .box .no3 .ico {background:url('../images/main/ico_quick02.png') center no-repeat;}
.quickArea .box .no3 .txt {width:67px;}
.quickArea .box .no4 .ico {background:url('../images/main/ico_quick03.png') center no-repeat;}
.quickArea .box .no4 .txt {width:67px;}
.quickArea .box .no5 .ico {background:url('../images/main/ico_quick04.png') center no-repeat;}
.quickArea .box .no5 .txt {width:67px;}
.quickArea .box .no6 .ico {background:url('../images/main/ico_quick05.png') center no-repeat;}
.quickArea .box .no6 .txt {width:80px;}
.quickArea .box .no7 .ico {background:url('../images/main/ico_quick06.png') center no-repeat;}
.quickArea .box .no7 .txt {width:80px;}
.quickArea .box .no8 .ico {background:url('../images/main/ico_quick07.png') center no-repeat;}
.quickArea .box .no4 a .ico,.quickArea .box .no6 a .ico,.quickArea .box .no7 a .ico{height:40px;}

.quickArea .box a:hover .txt {transform:translateX(0); opacity:1;}
body.fixed .quickArea { transform:translate(0,-50%);  opacity:1; }


.personalPay {padding:0 20px 20px;}
.personalPay a {display: block; border:1px solid #222222; font-size:14px; font-weight:700; height:45px; line-height:42px;  text-align: center;}


.subContainer.personalPayWrap {background:#fff !important;}
.subContainer.personalPayWrap .listType1 .in {padding-top:0;}



.reviewSelectPop .in {padding:50px;}
.reviewSelectPop .in .title {margin-bottom:0; border-bottom:none;}
.reviewSelectPop .in .reviewSelect {padding:20px; background:#f8f8f8; margin-bottom:30px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc {height:480px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:30px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc.mCS_no_scrollbar .mCSB_inside>.mCSB_container {padding-right:0;}
.reviewSelectPop .in .reviewSelect .basePrd {margin-bottom:10px; cursor:pointer;}
.reviewSelectPop .in .reviewSelect .basePrd.active {border:2px solid #222; padding:29px;}


.sampleSave .in {padding:50px}
.sampleSave .imgSlide {}
.sampleSave .imgSlide .sample-thumbs {background:#f8f8f8;}
.sampleSave .imgSlide .sample-thumbs .swiper-slide {padding:10px 0; text-align: center; position: relative; }
.sampleSave .imgSlide .sample-thumbs .swiper-slide img {height:auto; max-height:390px; vertical-align: middle;}
.sampleSave .closePop {position: absolute; right:15px; top:15px; text-indent:-999em; width:16px; height:16px; background:url('../images/sub/ico_popClose_m.png') center no-repeat; background-size:16px auto; z-index: 10; }
.sampleSave .tabSave {margin-bottom:45px; margin-top:-20px;}
.sampleSave .tabSave:after {content:''; display: block; clear:both;}
.sampleSave .tabSave a {width:49%; float:left; border:1px solid #eaeaea; height:60px; line-height:56px; text-align: center; font-size:18px; color:#888888; font-weight:300;}
.sampleSave .tabSave a:last-child {float:right;}
.sampleSave .tabSave a.active {border:1px solid #222222; color:#222222; font-weight:500;}
.sampleSave .sample-top {border-bottom:1px solid #f2f2f2; margin-bottom:30px;}
.sampleSave .sample-top .swiper-slide {font-size:18px; line-height:18px; padding-bottom:15px; color:#888888; font-weight:300; display: inline-block; width:auto; margin-right:34px !important;}
.sampleSave .sample-top .swiper-slide:last-child {margin-right:0 !important;}
.sampleSave .sample-top .swiper-slide.swiper-slide-thumb-active {font-weight:700; border-bottom:2px solid #222222; color:#222222;}
.sampleSave .sample-bottom {position: relative; background:#f8f8f8; margin-bottom:45px;}
.sampleSave .sample-bottom .swiper-slide  {padding:10px 0; text-align: center; position: relative; }
.sampleSave .sample-bottom .swiper-slide .img {position: relative; display: inline-block;}
.sampleSave .sample-bottom .swiper-slide .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.sampleSave .sample-bottom .swiper-slide img {height:auto; max-height:330px; vertical-align: middle;}
.sampleSave .sample-bottom .swiper-slide .btnSave {position: absolute; left:0; bottom:30px; width:100%; text-align: center; z-index: 10; } 
.sampleSave .sample-bottom .swiper-slide .btnSave a {font-size:16px; line-height:16px; font-weight:500; color:#ffffff; padding-left:27px; background:url('../images/sub/ico_slide03.png') left center no-repeat; }
.sampleSave .sample-bottom .nav a {position: absolute; top:50%; margin-top:-9px; width:11px; height:18px; text-indent:-999em; z-index: 10;}
.sampleSave .sample-bottom .nav a.prev {left:30px; background:url('../images/sub/ico_slide01.png') center no-repeat;}
.sampleSave .sample-bottom .nav a.next {right:30px; background:url('../images/sub/ico_slide02.png') center no-repeat;}


.sampleInvite .in .title {border-bottom:0; margin-bottom:0; border-bottom:none;}
.sampleInvite .imgOne {position: relative; background:#f8f8f8; margin-bottom:45px;}
.sampleInvite .imgOne .box  {padding:10px 0; text-align: center; position: relative; }
.sampleInvite .imgOne .box .img {position: relative; display: inline-block;}
.sampleInvite .imgOne .box .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.1);}
.sampleInvite .imgOne .box img {height:auto; max-height:330px; vertical-align: middle;}
.sampleInvite .imgOne .box .btnSave {position: absolute; left:0; bottom:30px; width:100%; text-align: center; z-index: 10; } 
.sampleInvite .imgOne .box .btnSave a {font-size:16px; line-height:16px; font-weight:500; color:#000; padding-left:27px; background:url('../images/sub/ico_slide04.png') left center no-repeat; }
.agreeSample {text-align: center;}
.agreeSample .txt {padding-top:15px; font-size:18px; font-weight:300; color:#888888; margin-bottom:40px; }


.designSample {text-align: center;}
.designSample .in {padding:50px;}
.designSample .in .title {margin-bottom:30px; padding-bottom:30px;}

.designSample .sample-top2 {border-bottom:1px solid #f2f2f2; margin-bottom:30px; display: inline-block;}
.designSample .sample-top2 .swiper-slide {font-size:18px; line-height:18px; padding-bottom:15px; color:#888888; font-weight:300; display: inline-block; width:auto; margin-right:34px !important;}
.designSample .sample-top2 .swiper-slide:last-child {margin-right:0 !important;}
.designSample .sample-top2 .swiper-slide.swiper-slide-thumb-active {font-weight:700; border-bottom:2px solid #222222; color:#222222;}
.designSample .sample-bottom2 {position: relative; background:#f8f8f8; margin-bottom:45px;}
.designSample .sample-bottom2 .swiper-slide  {padding:10px 0; text-align: center; position: relative; }
.designSample .sample-bottom2 .swiper-slide .img {position: relative; display: inline-block;}
.designSample .sample-bottom2 .swiper-slide .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.1);}
.designSample .sample-bottom2 .swiper-slide img {height:auto; max-height:330px; vertical-align: middle;}
.designSample .sample-bottom2 .swiper-slide .btnSave {position: absolute; left:0; bottom:30px; width:100%; text-align: center; z-index: 10; } 
.designSample .sample-bottom2 .swiper-slide .btnSave a {font-size:16px; line-height:16px; font-weight:500; color:#222; padding-left:27px; background:url('../images/sub/ico_slide04.png') left center no-repeat; }
.designSample .sample-bottom2 .nav a {position: absolute; top:50%; margin-top:-9px; width:11px; height:18px; text-indent:-999em; z-index: 10;}
.designSample .sample-bottom2 .nav a.prev {left:30px; background:url('../images/sub/ico_slide01.png') center no-repeat;}
.designSample .sample-bottom2 .nav a.next {right:30px; background:url('../images/sub/ico_slide02.png') center no-repeat;}


.quickEtc {display: none; position: fixed; right:0; top:50%;  margin-top:180px; z-index:10;}
.quickEtc .btn a {display: block; width:195px; height:60px; line-height:58px; border-radius:20px 0 0 20px; font-size:18px; color:#222222; font-weight:700; text-align: center; background:#ffdf0b;}
.quickEtc .btn a span {padding-left:30px; background:url('../images/sub/ico_q01.png') left center no-repeat;}
.quickEtc .btn.no1 a {margin-bottom:10px;}
.quickEtc .btn.no2 a {color:#fff; background:#222222;}
.quickEtc .btn.no2 a span {background:url('../images/sub/ico_q02.png') left center no-repeat;}


.warnText.bgWhite {background:#fff; text-align: center; padding:45px 0; border:1px solid #f2f2f2; margin-bottom:30px;}

/* .cartChange {display: block;} */
.cartChange .in {padding:50px;}
.cartChange .in .title {margin-bottom:0; border-bottom:none;}

.prdBox .topPrd {position: relative; padding:30px; border:1px solid #eaeaea; margin-bottom:30px;}
.prdBox .topPrd:after {content:''; display: block; clear:both;}
.prdBox .topPrd .img {float:left; width:125px; height:125px; border:1px solid #f2f2f2;}
.prdBox .topPrd .txtWrap {padding-left:145px;}
.prdBox .topPrd .txtWrap .tit01 {font-size:20px; color:#222222; font-weight:300; margin-bottom:5px;}
.prdBox .topPrd .txtWrap .tit02 {font-size:18px; color:#aaaaaa; font-weight:300; margin-bottom:15px;}
.prdBox .topPrd .txtWrap .tit03 {font-size:18px; color:#222222; font-weight:300;}
.prdBox .topPrd .txtWrap .tit03 span {position: relative; margin-right:13px; padding-right:13px;}
.prdBox .topPrd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:16px; margin-top:-8px; background:#eaeaea;}
.prdBox .topPrd .txtWrap .tit03 span em {font-size:20px; font-weight:700;}
.prdBox .topPrd .txtWrap .tit03 span:last-child:after {display: none;}

.opDetail .tit {font-size:18px; color:#222222; line-height:18px; font-weight:500; margin-bottom:18px;}
.opDetail .ckList  {margin-bottom:30px;}
.opDetail .ckList .toggleCk {margin-bottom:10px;}
.opDetail .ckList .toggleCk:last-child {margin-bottom:0;}
.opDetail .ckList .toggleCk label{font-weight:300;}

.opDetail .sorting {margin-bottom:20px;}
.opDetail .selBox  { font-weight:500; margin-bottom:20px;}
.opDetail .selBox select {margin-bottom:10px; height:65px; font-weight:500;}

.opDetail .totalPrice {padding-top:25px; padding-bottom:30px; border-top:1px solid #222222;;}
.opDetail .totalPrice:after {display: block; clear:both; content:'';}
.opDetail .totalPrice .txt {float:left; font-size:20px; font-size:20px; padding-top:10px; font-weight:500; color:#222222}
.opDetail .totalPrice .price {float:right; font-size:24px; font-size:24px;color:#222222; font-weight:300;}
.opDetail .totalPrice .price em{font-weight:700; font-size:32px; font-size:32px; }

.opDetail .opList ul li {padding:20px 0; position: relative; border-top:1px solid #f2f2f2;;}
.opDetail .opList ul li .txtWrap .tit01 {font-size:18px; font-weight:700; color:#222222; margin-bottom:5px;}
.opDetail .opList ul li .txtWrap .tit02 {font-size:18px; font-weight:300; color:#aaaaaa;}
.opDetail .opList ul li .control {margin-top:20px; font-size: 0;}
.opDetail .opList ul li .control a {width:24px; height:24px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-indent:-999em;}
.opDetail .opList ul li .control a.min {background:#f8f8f8 url('../images/sub/ico_min.png') center no-repeat; }
.opDetail .opList ul li .control a.plus {background:#f8f8f8 url('../images/sub/ico_plus.png') center no-repeat; }
.opDetail .opList ul li .control input {font-size:14px; color:#222222; font-weight:300; width:48px; height:24px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-align: center; margin:0 5px;}
.opDetail .opList ul li .price {position: absolute; right:0; bottom:20px;font-size:20px; line-height:20px; color:#222222; font-weight:300;}
.opDetail .opList ul li .price em {font-weight:700;}
.opDetail .opList ul li .del {position: absolute; right:0; top:20px; text-indent:-999em; width:14px; height:14px; background:url('../images/sub/ico_list_del.png') center no-repeat;}


.prdSelPop .in .title {margin-bottom:0; border-bottom:none;}
.prdSelPop .in .basePrdList {padding:15px; background:#f8f8f8; margin-bottom:40px; font-size:0;}
.prdSelPop .in .basePrdList li {display: inline-block; vertical-align: top; width:49.5%; margin-bottom:1%; cursor:pointer;}
.prdSelPop .in .basePrdList li.active {border:2px solid #222222;}
.prdSelPop .in .basePrdList li.active .basePrd {padding:28px;}
.prdSelPop .in .basePrdList li:nth-child(2n) {margin-left:1%;}
.prdSelPop .in .basePrdList li .basePrd {margin-bottom:0;}
.prdSelPop .in .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:25px;}


.partnerSelect .partnerSelctList {text-align: center; margin-bottom:50px; font-size: 0;}
.partnerSelect .partnerSelctList ul {max-height:214px; overflow-y:auto}
.partnerSelect .partnerSelctList ul li {width:49%;display: inline-block; vertical-align: top; border:1px solid #eaeaea; height:97px; line-height:97px; margin-bottom:10px;}
.partnerSelect .partnerSelctList ul li:nth-child(2n) {margin-left:2%;}
.partnerSelect .partnerSelctList ul li img {vertical-align: middle; max-width:200px;}


.voteForm .infoPw {margin-bottom:0; padding-bottom:0; border-bottom:none;}
.voteForm .infoPw h3 em {font-size: 18px; font-weight:300; }
.voteForm .warnText {margin:50px 0 20px 0; border:1px solid #2b88fa; padding:24px; text-align: left; border-radius:10px;}
.voteForm .btnPartCheck {background:#222222; border-radius:10px; padding:15px; text-align: center; margin-bottom:15px; }
.voteForm .btnPartCheck a {font-size:16px; color:#ffffff; font-weight:300; }
.voteForm .btnPartCheck span {display: inline-block; vertical-align: top;   font-weight:300;  padding-left:28px; background:url('../images/new/part02.png') left center no-repeat;}
.voteForm .btnPartCheck em {font-weight:500;}
.voteForm .ckBox2 {vertical-align: top; padding-bottom:20px; padding-top:20px;}
.voteForm .ckBox2 .oneCk {margin-bottom:15px;}

.linkWrap {padding-top:75px;}
.linkWrap #iframeWrap {height:calc(100vh - 75px);}
.linkWrap #iframeWrap iframe {height:calc(100vh - 75px);}
.checkLink {position: fixed; left:0; top:0; width: 100%; background:#fff; height:75px; line-height:75px; color:#222222; font-size:18px; text-align: center;}
.checkLink .txt {display: inline-block; vertical-align: middle; padding:0 40px  0 35px; background:url('../images/new/ico_confirm.png') left center no-repeat;}
.checkLink .confirm {display: inline-block; vertical-align: middle; font-size:14px; color:#fff; font-weight:700; background:#689ef7; width:120px; height:35px; line-height:33px; border-radius:30px}

.linkWrap.type2 .checkLink .box {display: inline-block; vertical-align: middle; }
.linkWrap.type2 .checkLink .box:first-child {margin-right:30px;}
.linkWrap.type2 .checkLink .txt {padding-right:13px;}
.linkWrap.type2 .checkLink .confirm {border-radius:10px; width:130px;}
.linkWrap.type2 .checkLink .txt.gray {color:#929292; background:url('../images/port/ico_portText.png') left center no-repeat;}
.linkWrap.type2 .checkLink .edit {display: inline-block; vertical-align: middle; font-size:14px; color:#000000; background:#f8f8f8; width:130px; height:35px; line-height:33px; border:1px solid #eaeaea; border-radius:10px}



.blueText {margin-bottom:50px; text-align: center; font-size:18px; color:#222222; font-weight:300;}
.blueText .no2 {color:#689ef7; font-weight:400; }
.blueText .no3 {color:#f76868; font-weight:400; }
.blueText .no4 {color:#222222; font-weight:400; }
.blueText .no5 {color:#888888;  }
.blueText .no6 {color:#689ef7; font-weight:500;  }



.confirmLink .text01 {font-size: 18px; color:#222222; font-weight: 300; margin-bottom:5px; text-align: center;}
.confirmLink .text02 {font-size: 14px; color:#222222; font-weight: 500; margin-bottom:25px; text-align: center;}
.checkList {text-align: center; padding-bottom: 30px; padding-top: 50px; border-top:1px solid #eaeaea;}
.checkList span{display: inline-block; vertical-align: top; font-size:18px; color:#22222; margin-right:37px; margin-bottom:20px; padding-left:32px; background:url('../images/port/ico_port_check.png') left center no-repeat;}

.confirmLink .btnTwo {max-width:455px; margin:0 auto;}

.btType03 {font-size:18px; color:#222222;  font-weight:500; border:1px solid #eaeaea; text-align: center; width:225px; height:60px; line-height:58px; }
.btType03.blue { background:#689ef7; border:none; color:#fff; }


.allOrderEnd .link a {position: relative; background:#f8f8f8; height:60px; line-height:58px; border:1px solid #eaeaea; font-size:18px; color:#aaaaaa; text-align: center; font-weight:300; }
.allOrderEnd .link a.active {color:#fff; font-weight:500; border:none; background:#222;}
.allOrderEnd .link a.ready {color:#222; font-weight:500; border:1px solid #222222; background:#fff}
.allOrderEnd .link a .pr {position: absolute; right:5px; top:-25px; text-align: center; font-size:14px; color:#fff; font-weight:700; width:95px; height:30px; line-height:28px; border-radius:3px; background:#689ef7; border:1px solid #6092e3;  }
.allOrderEnd .link a .pr em {padding-left:17px; background:url('../images/ico_star.png') left center no-repeat;}
.allOrderEnd .link a .pr.check em {padding-left:17px; background:url('../images/ico_star3.png') left center no-repeat;}
.allOrderEnd .link a .pr:after {content:''; position: absolute; right:21px; bottom:-6px; width:13px; height:6px; background:url('../images/ico_starBull.png') left center no-repeat;}

.cartPopup {text-align: center;}
.cartPopup .cartCont .tit01 {font-size:18px; color:#222222; }
.cartPopup .cartCont .tit02 {font-size:18px; color:#888888; font-weight:300; margin-bottom:50px; }
.cartPopup .cartCont .btn a {float:left; width:49%; height:60px; line-height:58px; background:#222222; color:#fff; font-size:18px; font-weight:500;}
.cartPopup .cartCont .btn a.white {float:right; background:#fff; border:1px solid #222; color:#222222; }


.mainPopup {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999;  }
.mainPopup .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; background:rgba(0,0,0,.3);}
.mainPopup .in {position: fixed; left:50%; top:50%; width:460px; margin-left:0;  z-index:50; background:#fff; }
.mainPopup .in img {width: 100%;}
.mainPopup .in .swiper-pagination {bottom:30px; font-size:0;}
.mainPopup .in .swiper-pagination span {width:10px; height:10px; background:rgba(255,255,255,.5); opacity:1 !important}
.mainPopup .in .swiper-pagination .swiper-pagination-bullet-active {background:#fff;}
.mainPopup .in .btn {background:#fff; text-align: center;}
.mainPopup .in .btn:after {content:''; display: block; clear:both;}
.mainPopup .in .btn a {position: relative;float:left; width:50%; height:60px; line-height:58px; color:#888888; font-size:16px; font-weight:300;}
.mainPopup .in .btn a:last-child:after {content:''; position: absolute; left:0; top:50%; width:1px; height:20px; background:#eaeaea; margin-top:-10px; }
.mainPopup .in .btn a:last-child {float:right; color:#24282d; font-weight:500; }
.mainPopup .mainPopupCont p {font-size: 0;}

.eventImg {margin-bottom:45px; text-align: center;}
.eventImg img{}

.eventReply {max-width:1280px; margin:0 auto;}
.eventReply .title { margin-bottom:13px;}
.eventReply .title em{font-size:20px; line-height:20px; color:#222222; font-weight:700; display: inline-block; vertical-align: middle;}
.eventReply .title .warnText {display: inline-block; padding:0; border:none; margin:0; margin-left:10px;}
.eventReply .replyWrite {border:1px solid #eaeaea; margin-bottom:20px; }
.eventReply textarea {border:none; border-bottom:1px solid #eaeaea; padding:30px; resize:none; height:200px; width:100%; font-size:18px; vertical-align: top; position: relative; z-index: 10;}
.eventReply textarea::-webkit-input-placeholder { font-size: 18px; color:#888888; }
.eventReply .info {position: relative; background:#fff;}
.eventReply .info .count {padding:30px; font-size:14px; line-height:14px; color:#222222; font-weight:300;}
.eventReply .info .count em {color:#689ef7; font-weight:700;}
.eventReply .info .rightBtn {position: absolute; right:15px; top:12px;}
.eventReply .info .rightBtn .ckType1 {display: inline-block; vertical-align: middle;}
.eventReply .info .rightBtn .up {display: inline-block; vertical-align: middle; width: 100px; height:50px; line-height:50px; text-align: center; font-size:20px; color:#fff; font-weight:500; margin-left:30px; background:#222222;}

.replyList ul li { border-bottom:1px solid #eaeaea;;}
.replyList .replyBox {position: relative; padding:50px 30px;}
.replyList .name {font-size:20px; line-height:20px; color:#000000; font-weight:500; margin-bottom:10px;}
.replyList .date{font-size:16px; line-height:16px; color:#aaaaaa; font-weight:300; margin-right:25px; display: inline-block; vertical-align: top;}
.replyList .edit{display: inline-block; vertical-align: top; }
.replyList .edit a{font-size:16px; line-height:16px; color:#515151; font-weight:300;  display: inline-block; vertical-align: top; }
.replyList .edit a:first-child {position: relative; padding-right:19px; margin-right:19px;}
.replyList .edit a:first-child:after {content:''; position: absolute; right:0;top:0; width: 1px; height:14px; background:#c2c2c2;}
.replyList .text {margin-top:22px; font-size:18px; color:#000000; font-weight:300; padding-right:170px; }
.replyList .text.pw {color:#888888; padding-left: 26px; background:url('/html/images/ico_eventPw.png') left 5px no-repeat; background-size:16px auto;}
.replyList .btn {position: absolute; right:25px; bottom:45px; margin-top:25px; font-size:18px; color:#000000; font-weight:300; }
.replyList .btn a {font-size:16px; display: inline-block; vertical-align: top; color:#515151; padding-bottom:7px; border-bottom:1px solid #717171; margin-left:12px; }
.replyList .btn a.list {color:#689ef7; border-bottom:1px solid #689ef7; }
.replyList .replyWrite {position: relative; padding:30px 30px 70px 30px;background:#fafafa; display: none;  border:none; margin-bottom:0; border-top:1px solid #eaeaea;}
.replyList .replyWrite textarea { border:1px solid #eaeaea; }
.replyList .replyWrite .info { border:1px solid #eaeaea; border-top:none;}

.replyList .replyWrite .btnClose {position: absolute; left:0; bottom:0; width: 100%;   }
.replyList .replyWrite .btnClose a {display: block; height:70px; line-height:70px; text-align: center; font-size:18px; color:#222222; font-weight:500; }
.replyList .replyWrite .btnClose a span {padding-right:30px; background:url('/html/images/ico_event.png') right center no-repeat ;}


.replyList .modifyWrite {border:1px solid #eaeaea; margin:0 20px 50px 20px;; background:#fff; position: relative; display: none;}


.replyList .replyContent {margin-bottom:-1px;}
.replyList .replyContent .list {position: relative; border-bottom:1px solid #eaeaea; background:#fafafa; padding:50px 80px; }
.replyList .replyContent .list:last-child {}
.replyList .replyContent .list .text em {font-weight:700;}
.replyList .replyContent .list .btn {right:75px;}

.openWrite .replyWrite {display: block;}
.openEdit .modifyWrite {display: block;}
.openReply .replyContent {display: block;}
.openReply.replyDepth {display: block;}

.replyDepth {
    display:none;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    background: #fafafa;
    padding: 0px 50px;
}
.replyDepth .replyBox .info {
    background: #fafafa;
}
.replyDepth .text em {
    font-weight: 700;
}

.btnPop {position: relative;}
.btnPop a {position: absolute; right:0; top:-100px; width:225px;}



/* 신규 주문상세 */
.pageLoca {max-width:1280px; margin:0 auto; display:flex; align-items:center; padding-bottom:15px;}
.pageLoca span {font-size:14px; line-height:14px; color:#aaaaaa; font-weight:300; margin-left:10px; padding-left:13px; position: relative; background:url('../images/sub/subLnb02.png') left center no-repeat;}
.pageLoca span.home {text-indent:-999em; background:url('../images/sub/subLnb01.png') center no-repeat; width:16px; height:11px; margin-left:0; padding-left:0;}
.pageLoca span:last-child {color:#222222; font-weight:400;}

.previewWrap {position: relative; left:0; top:0; width:100%; height:770px; background:#fafafa; padding-top:20px;}
.previewWrap #iframeSlide iframe{position: relative; width: 100%; display: block;}
.previewWrap #iframeSlide  {position: relative; right:16px; width:428px; height:741px; margin:0 auto 0 auto;  transform-origin:center top;  padding-top:20px; background:url('../images/bgDeviceMob.png') no-repeat;}
.previewWrap #iframeSlide .frameBox {position: relative; border-radius:30px; padding-top: 41px; overflow:hidden; width:360px; margin-left:50px; }
.previewWrap #iframeSlide .frameBox iframe { width: 100%; height:618px !important;  display:block; overflow-x:hidden; position: relative; z-index:10;  }
.previewWrap #iframeSlide .frameBox:after {content:''; position: absolute; left:0; top:41px; height: 100%; width: 100%; background:#fff;}
.previewWrap .info {position: absolute; left:0; /* bottom:50px; */ bottom:20px; width: 100%; text-align: center; z-index:10; font-size:14px; font-weight:300;}
.previewWrap .info span {padding-left:20px; background:url('../images/sub/subMouse2.png') left center no-repeat; z-index: 1;  color:#555555; }




.detailWrap.new {margin-bottom: 100px;}
.detailWrap.new .boxGrid {border-bottom:1px solid #000;}
.detailWrap.new .boxGrid .detailSlide {width:calc(100% - 510px)}
.detailWrap.new .boxGrid .prdAllWrap {width:475px; margin-bottom:35px;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .label {background:#b27085;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .title {font-size:28px; line-height:36px; margin-bottom:35px; padding-bottom:35px; border-bottom:1px solid #000000;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview {margin-bottom:0; border-bottom:none;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .old {font-size:18px; line-height:18px;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info {font-size:22px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info em {font-size:28px; line-height:28px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info .percent {font-size:28px; line-height:28px; margin-left:11px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .review {padding-top:24px;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .review .link {font-size:18px;}
.detailWrap.new .boxGrid .prdAllWrap .starList li {width:16px; height:15px; background-size:16px auto;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box {border-radius:10px;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box a { height:65px; line-height:65px;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box label {font-size:18px; height:65px; line-height:65px; font-weight:500;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box a.share span {font-size:18px; font-weight:500;}
.detailWrap.new .boxGrid .prdAllWrap .wranBox  { background:#fafafa; padding:24px; margin-bottom:10px; border-radius:10px;}
.detailWrap.new .boxGrid .prdAllWrap .wranBox span { font-size:14px;}
.detailWrap.new .detailSlide .gallery-top {border:none; margin-bottom:10px;; }
.detailWrap.new .detailSlide .gallery-thumbs .swiper-slide {width:85px !important; border-radius:5px; overflow:hidden; margin-right:10px !important;}
.detailWrap.new .detailSlide .gallery-thumbs .previewThumb:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:url('../images/sub/subMouse.png') center no-repeat; z-index: 1;}
.detailWrap.new .detailSlide .gallery-thumbs .previewThumb:before {content:''; position: absolute; left:0; top:0; width:100%; height:100%;background:rgba(0,0,0,.4); }

.detailWrap.new .prdAllWrap .fixArea .fixIn .warnSel {font-size:14px; color:#000000; font-weight:300; padding-left:27px; background:url('../images/sub/warnSam1.png') left center no-repeat; margin-bottom:15px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .warnSel.type2 {color:#aaaaaa; background:url('../images/sub/warnSam2.png') left center no-repeat; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .selBox select {border-radius:10px;}


.prdAllWrap .fixArea .fixIn .formBox .line .tit {padding-top:15px; min-width:100px; display:table-cell; font-size:13px;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox {width:100%;  display:table-cell;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox .ipBox input {height:40px; border-radius:10px; font-size:12px; font-weight:300; border:1px solid #dddddd; padding-left:20px;}
.prdAllWrap .fixArea .fixIn .formBox .line .rBox.date a {background:url('../images/order/ico_cal2_m.png') no-repeat;width:17px; height:17px; background-size:17px auto; right:20px; margin-top:-9px;}


.prdAllWrap .fixArea .fixIn .formBox .line .checkbox .tit {min-width:250px;}
.prdAllWrap .fixArea .fixIn .formBox .line .checkbox .rBox  {text-align:right; overflow:hidden;}
.prdAllWrap .fixArea .fixIn .formBox .line .checkbox .rBox .rightCk {padding-top:8px;}

.prdAllWrap .fixArea .fixIn .formBox.addOption {padding:10px 0 35px 0; margin-bottom: 35px; border-bottom:1px solid #eaeaea;}
.prdAllWrap .fixArea .fixIn .formBox.addOption .line .tit {font-size:16px; font-weight:500; color:#222222;  min-width:165px; padding:10px 0;}

.prdAllWrap .fixArea .fixIn .formBox.addOption .line .rBox .ipBox input {height:45px;}



.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li {background:#fafafa; border-radius:10px; margin-bottom:10px; padding:30px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit01 {font-size:16px; padding-right:20px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit02 {font-size:14px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .del {top:30px; right:30px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .price {right:30px; bottom:30px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control {margin-top:15px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a {background-color:#fff;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a.min {border-top-left-radius:5px; border-bottom-left-radius:5px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a.plus {border-top-right-radius:5px; border-bottom-right-radius:5px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control input {margin:0; border-left:none; border-right:none;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice {border-top:none; padding:30px 28px 40px 28px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .txt {font-size:18px; line-height:18px; padding-top:5px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .price {font-size:26px; line-height:26px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .price em {font-size:26px; line-height:26px; }
.detailWrap.new .prdAllWrap .fixArea .btnOrder a {height:65px; line-height:65px; font-size:18px; border-radius:10px;}

.samLinkAreaAni {position: relative; margin-bottom:35px; overflow:hidden; padding-bottom:35px; border-bottom:1px solid #eaeaea;}
.samLinkAreaAni .text {float:left; width:calc(100% - 175px); border-radius:100px; background:#fafafa; height:65px; line-height:65px; text-align: center; font-size:14px; color:#222222;  }
.samLinkAreaAni .text span {padding-left:27px; background:url('../images/sub/sam01.png') left center no-repeat;}
.samLinkAreaAni .text em {padding-right:15px; background:url('../images/sub/sam02.png') right center no-repeat;}
.samLinkAreaAni .btnSam {float:right; width:140px; }
.samLinkAreaAni .btnSam .link { width:65px; height:65px; float:left;  }
.samLinkAreaAni .btnSam .link:first-child {margin-right:10px;}
.samLinkAreaAni .btnSam .link.url {}
.samLinkAreaAni .btnSam .link.kakao {}
.samLinkAreaAni .btnSam .link .pop {position: absolute; right:100px;; top:0; width:65px; height:65px; transition:.5s all;  background:#222222; border-radius:100px; overflow:hidden; }
.samLinkAreaAni .btnSam .link .pop a {display: block; width: 100%; font-size:14px; color:#fff; text-align: center; background:#222; border-radius:100px;}
.samLinkAreaAni .btnSam .link .pop a span {display: inline-block;  height:65px; line-height:65px; width:22px; overflow:hidden; transition:width 2s;   }
.samLinkAreaAni .btnSam .link.url .pop span { padding-left:22px;   background:url('../images/sub/sam05.png') left center no-repeat;  }
.samLinkAreaAni .btnSam .link.kakao .pop {background:#fae54b; right:25px;}
.samLinkAreaAni .btnSam .link.kakao .pop a {color:#000000; background:#fae54b}
.samLinkAreaAni .btnSam .link.kakao .pop span { padding-left:28px; width:28px;  background:url('../images/sub/sam06.png') left center no-repeat; }
.samLinkAreaAni .btnSam .link.url:hover .pop {z-index: 10;}
.samLinkAreaAni .btnSam .link.url:hover .pop span {width:auto; padding-left:37px;; transition-delay:500ms;}
.samLinkAreaAni .btnSam .link.url:hover .pop {width:calc(100% - 25px); right:25px;}
.samLinkAreaAni .btnSam .link.kakao:hover .pop span {width:auto; padding-left:45px;; transition-delay:500ms;}
.samLinkAreaAni .btnSam .link.kakao:hover .pop {width:calc(100% - 25px);}

.samLinkArea {position: relative; margin-bottom:35px; overflow:hidden; padding-bottom:35px; border-bottom:1px solid #eaeaea;}
.samLinkArea .text {float:left; width:calc(100% - 150px); border-radius:100px; background:#fafafa; height:65px; line-height:65px; text-align: center; font-size:14px; color:#222222;  }
.samLinkArea .text span {padding-left:27px; background:url('../images/sub/sam01.png') left center no-repeat;}
.samLinkArea .text em {padding-right:15px; background:url('../images/sub/sam02.png') right center no-repeat;}
.samLinkArea .btnSam {float:right; width:140px; }
.samLinkArea .btnSam .link {width:65px; height:65px; float:left; }
.samLinkArea .btnSam .link:first-child {margin-right:10px;}
.samLinkArea .btnSam .link.url {background:url('../images/sub/sam03.png') center no-repeat;}
.samLinkArea .btnSam .link.kakao {background:url('../images/sub/sam04.png') center no-repeat;}
.samLinkArea .btnSam .link .pop {position: absolute; left:0; top:0; display: none; width:100%;  }
.samLinkArea .btnSam .link .pop a {display: block; width: 100%; font-size:14px; color:#fff; text-align: center; background:#222; border-radius:100px;}
.samLinkArea .btnSam .link .pop a span {display: inline-block;  height:65px; line-height:65px;}
.samLinkArea .btnSam .link.url .pop span { padding-left:37px;   background:url('../images/sub/sam05.png') left center no-repeat; }
.samLinkArea .btnSam .link.kakao .pop a {color:#000000; background:#fae54b}
.samLinkArea .btnSam .link.kakao .pop span { padding-left:45px;   background:url('../images/sub/sam06.png') left center no-repeat; }
.samLinkArea .btnSam .link:hover .pop {display: block;}

.detailWrap.new .detailFolder {padding-right:510px;}
.detailWrap.new .detailFolder .folder {padding:0 24px 35px 24px; margin-bottom:0; border-bottom:1px solid #000000;}
.detailWrap.new .detailFolder .folder .contBox {display: block; margin-top:0;}
.detailWrap.new .detailFolder .folder.detailImg.active .contBox {border-top:none;}
.detailWrap.new .detailFolder .folder.detailImg .contBox:after {display: none;}

.detailWrap.new .detailFolder .folder.detailImg .contBox .more {display: none;}
.detailWrap.new .detailFolder .folder.detailImg .contBox .img { height:auto; background:none; border:none;}
.detailWrap.new .detailFolder .folder > .title {font-size:18px; line-height:18px; font-weight:700; padding:34px 0;}

.detailWrap.new .detailFolder .folder .title span em {position: relative; padding-left:15px; margin-left:10px; }
.detailWrap.new .detailFolder .folder .title span em:after {content:''; position: absolute; left:0; top:50%; margin-top:-5px; width:1px; height:10px; background:#cccccc; }
.detailWrap.new .detailFolder .folder .title:after {display: none;}
.detailWrap.new .detailFolder .folder .title .count {margin-left:0; border:none; padding:0; color:#689ef7; font-size: 18px; line-height:18px;  vertical-align: middle;}
.detailWrap.new .detailFolder .btnMoreList a {max-width:100%; border:none; border-radius:10px;}
.detailWrap.new .detailFolder .folder.review .controlBox {padding-left: 0; padding-right:0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox {padding:34px 0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto {right:0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li.photoUse .titleBox {padding-right:135px;}

.detailWrap.new .detailFolder .folder.review .controlBox .grade {right:0;}
.detailWrap.new .detailFolder .folder.question .stateQuestion {padding-left:0;}
.detailWrap.new .detailFolder .folder.question .stateQuestion .goQuestion{right:0;}
.detailWrap.new .detailFolder .questionList > ul > li .topBox .state{width:75px;}
.detailWrap.new .detailFolder .questionList > ul > li .topBox .txtWrap{padding-left: 95px;}
.detailWrap.new .detailFolder .questionList > ul > li .txt{font-size: 16px;}
.detailWrap.new .detailFolder .folder.recoEvent {border-bottom:none; height:800px}
.detailWrap.new .detailFolder .folder.recoEvent .first { border-bottom:1px solid #f8f8f8;}





.detailWrap.new .detailFolder .folder.review > .title span {background:none !important; padding-left:0; display: inline-block; vertical-align: middle;}
.detailWrap.new .detailFolder .folder.question > .title span {background:none !important; padding-left:0; display: inline-block; vertical-align: middle;}
.detailWrap.new .detailFolder .folder.warnList > .title span {background:none !important; padding-left:0; display: inline-block; vertical-align: middle;}
.detailWrap.new .detailFolder .folder.detailImg > .title span {background:none !important; padding-left:0; display: inline-block; vertical-align: middle;}
.detailWrap.new .detailFolder .folder.delivery > .title span {background:none !important; padding-left:0; display: inline-block; vertical-align: middle;}
.detailWrap.new .detailFolder .folder.recoEvent  span {padding-left: 0;}




.detailWrap.new .detailFolder .folder.warnList .contBox ul li .txt01 {display: block; padding:0; width:100%; font-size:16px; margin-bottom:13px;}
.detailWrap.new .detailFolder .folder.warnList .contBox ul li .txt02 {display: block; font-size:14px; padding:0; letter-spacing:-0.01em;}
.detailWrap.new .detailFolder .folder.delivery .txt {padding:30px 0 0 0; font-size:14px; color:#222222; font-weight:300; border-top:1px solid #f2f2f2;} 
.detailWrap.new .favoSlide {margin-bottom:0;}
.detailWrap.new .favoSlide .swiper-container {margin:0;}
.detailWrap.new .favoSlide .inner {padding:0;}
.detailWrap.new .favoSlide .swiper-slide {width:180px; margin:0 15px 0 0;}
.detailWrap.new .favoSlide .swiper-slide a .txtWrap .tit01 {font-size:14px; height:auto;}
.detailWrap.new .favoSlide .control a {z-index:10; top:65px;}
.detailWrap.new .favoSlide .control a.prev {left:-25px;}
.detailWrap.new .favoSlide .control a.next {right:-25px;}

.detailWrap.new .favoSlideNew {margin-bottom:0;}
.detailWrap.new .favoSlideNew .swiper-container {margin:0;}
.detailWrap.new .favoSlideNew .inner {padding:0;}
.detailWrap.new .favoSlideNew .swiper-slide {width:185px; margin:0 10px 0 0;}
.detailWrap.new .favoSlideNew .control {display:none;}
.detailWrap.new .favoSlideNew .control a {z-index:10; top:65px;}
.detailWrap.new .favoSlideNew .control a.prev {left:-25px;}
.detailWrap.new .favoSlideNew .control a.next {right:-25px;}
.detailWrap.new .favoSlideNew.arrowActive .control {display:block}

.recoEventList {padding-bottom:35px; border-bottom:1px solid #f2f2f2;}
.recoEventList:after {content:''; display: block; clear:both;}
.recoEventList li{float:left; width:23%; margin-left:2%; }
.recoEventList li:first-child {margin-left: 0;}
.recoEventList li .img { overflow:hidden; border-radius:5px;}
.recoEventList li .img img {width:100%;}
.recoEventList li .tit01 { font-size:14px;  color:#222222; font-weight:500;}
.recoEventList li .date {font-size:14px; color:#aaaaaa; font-weight:300;}

.fixTabLoca { z-index:30;}
.fixTabLoca .inFix {position: relative;  max-width:1280px; margin:0 auto; background:#fff;  z-index:30;}
.fixTabLoca .rightBuyList {position: absolute; right:25px; top:0; padding-top:35px; width:425px; height:100vh; background:#fff;}
.fixTabLoca .rightBuyList .samLinkArea {margin-bottom: 0; border-bottom:none;;}
.fixTabLoca .rightBuyList .prdAllWrap .fixArea .fixIn .totalPrice {position: absolute; left:0; bottom:170px; width:100%; padding:10px 0;}
.fixTabLoca .rightBuyList .prdAllWrap .fixArea .btnOrder {position: absolute; left:0; bottom:100px; width:100%;}
.fixTabLoca .rightBuyList .prdAllWrap .fixArea .opList {max-height:500px; overflow-y:auto;}
.fixTabLoca .rightBuyList .topSlide {position: absolute; left:0; bottom:20px; width:100%; margin:0;}
.fixTabLoca .rightBuyList .topSlide .swiper-slide a .img {height:auto;}
.fixTabLoca .rightBuyList .topSlide .swiper-slide a .img img {position: static; transform:none;}
.fixTabLoca .rightBuyList .topSlide .control {left:auto; right:20px; top:17px; width:auto; background:none;}
.fixTabLoca .rightBuyList .topSlide .control span {font-size:14px; color:#fff;}
.fixTabLoca .rightBuyList .topSlide .control span.numTotal {font-weight:300;}

.folderTab {width:770px;  position: relative;}
.folderTab ul {display:flex; justify-content:space-between; border-bottom:1px solid #eaeaea; text-align: center;}
.folderTab ul li {width:20%;}
.folderTab ul li a {position: relative; display: block; line-height:65px; font-size:18px; color:#888888; font-weight:300; white-space:nowrap;  }
.folderTab ul li.active a { font-weight:700; color:#222222;  }
.folderTab ul li.active a:after {content:''; position: absolute; left:0; bottom:0; width:100%; height:2px; background:#000000;}

.fixInfo {display: none;}


.fixTabFake {height:0;}

.fixRel .fixTabLoca {position: static !important }
.fixTabOn .fixTabLoca {position: fixed; top:0; width: 100%; }
.fixTabOn .fixTabFake {display: block; height:66px;}


/* 이벤트 신규 상세 */
.newEventDetail {position: relative; max-width:1280px; margin:0 auto 0 auto;text-align: left; }
.newEventDetail .eventImgLeft {max-width:770px;}
.newEventDetail .eventImgLeft.end {position: relative;}
.newEventDetail .eventImgLeft.end:after {content:''; position: absolute; left:0; top:0; width: 100%; height: 100%; background:rgba(0,0,0,.3);}
.newEventDetail .eventTop {}
.newEventDetail .eventTop .state {font-size:12px; color:#689ef7; font-weight:500; margin-bottom:10px; }
.newEventDetail .eventTop .state span {display: inline-block;  width:48px; height:25px; line-height:24px; border:1px solid #689ef7; text-align: center;}
.newEventDetail .eventTop .state.end span {border:1px solid #cacaca;color:#888888;}
.newEventDetail .eventTop .title {font-size:28px; line-height:35px; color:#222222; font-weight:500; margin-bottom:25px; }
.newEventDetail .eventTop .date {font-size:18px; color:#aaaaaa; font-weight:300; }
.newEventDetail .newEventReply {position: absolute; right:25px; top:0; width:425px; }

.newEventDetail .newEventReply .warnText.red {border:none; padding:15px 0 35px 0;  margin-bottom:0;}
.newEventDetail .newEventReply .warnText.red span {font-size:16px;  padding-left:30px; background-size:20px auto;}
.newEventDetail .newEventReply .btnList {margin-top:25px}
.newEventDetail .newEventReply .count ~ .btnList {position: static; margin-top:0; }
.newEventDetail .newEventReply .replyList ~ .btnList {position: static; margin-top:0; }
.newEventDetail .newEventReply .btnList a {display: block; text-align: center; font-size:18px; color:#fff; font-weight:500; height:65px; line-height:65px; background:#222222; border-radius:10px;}
.newEventDetail .paging {padding:35px  0;}
.newEventDetail .paging > a {width:35px;}
.newEventDetail .paging .num {margin:0 10px;}
.newEventDetail .paging .num a {margin:0;}


.fixedEvent .newEventDetail .newEventReply .fixed {position: fixed; top:140px; max-width:425px;}

.newReplyWrite {position: relative; padding:17px 75px 14px 20px;  border:1px solid #f2f2f2; border-radius:10px; background:#fff;}
.newReplyWrite textarea {width:100%; resize:none; min-height:27px; padding:0; max-height:85px; border:none; font-size:18px; color:#000000; font-weight:300; outline:none;}
.newReplyWrite textarea::-webkit-input-placeholder  {font-size:18px; font-weight:300;}
.newReplyWrite a {position: absolute; right:25px; top:23px; font-size:18px; color:#749df0; line-height:18px; font-weight:500;}

.pwReplyCheck input {position: absolute; visibility: hidden;}
.pwReplyCheck label {display: block; height:65px; line-height:60px; border-radius:10px; border:1px solid #f2f2f2; margin-bottom:10px; text-align: center; background:#fff; }
.pwReplyCheck label span {display: inline-block; vertical-align: middle; font-size:18px;  color:#888888; font-weight:300; padding-left:27px; background:url('../images/evPw.png') left center no-repeat;}
.pwReplyCheck input:checked + label {border:1px solid #666666}
.pwReplyCheck input:checked + label span {font-size:18px;  color:#000000; font-weight:300; background:url('../images/evPwOn.png') left center no-repeat;}
.pwReplyCheck.end {margin-bottom:30px;}
.pwReplyCheck.end label {background:#f8f8f8;}
.pwReplyCheck.end label span {color:#888888; font-weight:300; background:url('../images/evQ.png') left center no-repeat;}

.newEventDetail .replyList {max-height:calc(100vh - 820px); min-height:300px; overflow-y:auto; margin-top: 30px;border-top:1px solid #000000; margin-bottom:30px;}
.fixedEvent .newEventDetail .replyList {max-height:calc(100vh - 750px);}


.newEventDetail .replyList .replyBox {padding:30px 0 35px 0;}
.newEventDetail .replyList .btn {position: static; bottom:35px;}
.newEventDetail .replyList .btn a {margin-left: 0; margin-right:12px;}
.newEventDetail .replyList .name {display: inline-block; margin-right:10px; font-size:18px;}
.newEventDetail .replyList .edit {position: absolute; right:0; top:30px;}
.newEventDetail .replyList .text {padding-right: 0; margin-top:12px;}
.newEventDetail .replyList .edit a:first-child {margin-right:6px; padding-right:10px;}
.newEventDetail .replyList .edit a:first-child:after {top:2px; height:13px;}

.newEventDetail .replyList .setPwReply {padding-bottom:35px; display: none;}

.newEventDetail .replyDepth { padding:0 20px; display: block;}
.newEventDetail .replyDepth .text em {font-size:19px;  font-weight:500; margin-right:5px;}
.newEventDetail .replyDepth .text p {display: inline-block; }

.newEventDetail .modifyWrite { border:none; padding:0 0 35px 0; margin:0; background:none;}
.newEventDetail .replyList .setPwReply .newReplyWrite textarea {text-indent:90px;}
.newEventDetail .useId {position: absolute; left:20px; top:17px; background:#fff; height:30px; font-size:18px; color:#000000; font-weight:500;  width:90px; overflow:hidden;}

.newEventDetail .openWrite .setPwReply {display: block;}
.newEventDetail .openEdit .modifyWrite {display: block;}
.newEventDetail .openReply .replyContent {display: block;}
.newEventDetail .openReply.replyDepth {display: block;}


.loadOrder {position: relative;}
.loadOrder .rightBtn {position: absolute; right:30px; top:50%; margin-top: -30px;	}
.loadOrder .rightBtn a {display: inline-block; vertical-align: top; width:225px;}
.loadOrder .rightBtn a:first-child {margin-right:7px;}

.prdLoadPop .in .title {margin-bottom:0; border-bottom:none;}
.prdLoadPop .in .basePrdList {padding:15px; background:#f8f8f8; margin-bottom:40px; font-size:0;}
.prdLoadPop .in .basePrdList li {display: inline-block; vertical-align: top; width:49.5%; margin-bottom:1%; cursor:pointer;}
.prdLoadPop .in .basePrdList li.active {border:2px solid #222222;}
.prdLoadPop .in .basePrdList li.active .basePrd {padding:28px;}
.prdLoadPop .in .basePrdList li:nth-child(2n) {margin-left:1%;}
.prdLoadPop .in .basePrdList li .basePrd {margin-bottom:0;}
.prdLoadPop .in .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:25px;}
.prdLoadPop .in .complete {font-size:18px; color:#222222; font-weight:300; display:flex; align-items:center; margin-bottom:25px;}
.prdLoadPop .in .complete div {display: inline-block; vertical-align: top; }
.prdLoadPop .in .complete .text {position: relative; font-weight:400; padding-right:12px; margin-right:12px; }
.prdLoadPop .in .complete .text:after {content:''; position: absolute; right:0; top:50%; margin-top:-7px; width:1px; height:15px; background:#dddddd;}
.prdLoadPop .in .basePrd .img {position: relative; overflow:hidden; border-radius:7px;}
.prdLoadPop .in .basePrd .img .info {position: absolute; left:0; bottom:0; width: 100%;  height:20px; line-height:18px; font-size:12px; color:#fff; font-weight:500; background:#689ef7; text-align: center;}
.prdLoadPop .in .basePrd .img .info.bride {background:#f76868;}

.new1440 .in {width:1440px; margin-left:-720px;}


.cor {font-family: 'Cormorant Infant', serif;}
.endDateWrap {background:url('../images/event/bgEndEvent.jpg') repeat; min-height:100vh}
.endDateWrap .content {max-width:640px; margin:0 auto;}
.endDateWrap .content .imgBox {height:440px; background-size:auto 100% !important;}
.endDateWrap .content .info {min-height:calc(100vh - 440px);  background:url('../images/event/newEvent04.png') repeat; text-align: center;}
.endDateWrap .content .info .name {padding:35px 0; max-width:400px; margin:0 auto 50px auto; background:url('../images/event/newEvent05.png') center bottom no-repeat; background-size:100% auto; }
.endDateWrap .content .info .name .box {display: inline-block; vertical-align: middle;}
.endDateWrap .content .info .name .box .en {color:#888888; font-size:18px; font-style: italic; }
.endDateWrap .content .info .name .box .tit {font-size:24px; color:#222222; font-weight:500;}
.endDateWrap .content .info .name .box.center {margin:0 12px;}
.endDateWrap .content .info .name .box.center .en {font-size:30px; font-weight:300; font-style: normal; }
.endDateWrap .content .info .bottom .title { font-size:30px; color:#000000; font-weight:300; margin-bottom:30px;}
.endDateWrap .content .info .bottom .title span { font-weight:500;}
.endDateWrap .content .info .bottom .th { font-size:18px; color:#000000; font-weight:600; margin-bottom:50px; letter-spacing:5px;}
.endDateWrap .content .info .bottom .btn { margin-bottom:35px;}
.endDateWrap .content .info .bottom .btn a {display: inline-block; width:400px; height:75px; line-height:70px; background:#222222;vertical-align: top; font-size:22px; color:#fff; font-weight:500;}
.endDateWrap .content .info .bottom .btn2 a {display: inline-block; vertical-align: top; font-size:18px; line-height:18px; color:#000000; font-weight:400; padding-left:26px; background:url('../images/event/newEvent03.png') left 1px no-repeat; background-size:16px auto; padding-bottom:10px; border-bottom:1px solid #000000;}


.previewInfoPop {background:rgba(0,0,0,.5); font-family:'Noto Sans KR', sans-serif !important;}
.previewInfoPop .in {max-width:510px; margin-left:-255px; padding:35px; letter-spacing:-0.05em;}
.previewInfoPop .in .textWrap {padding-left:50px; background:url('/html/images/infoPreview.png') left center no-repeat; background-size:26px auto;;}
.previewInfoPop .in .textWrap .tit01 {font-size:18px; color:#222222; font-weight:500;}
.previewInfoPop .in .textWrap .tit02 {font-size:16px; color:#222222; font-weight:300;}
.previewInfoPop .in .closePop {position: absolute; right:34px; top:50%; margin-top:-8px; width:16px; height:16px; background:url('/html/images/closePreivew.png') center no-repeat;  background-size:16px auto;}

.deceased {padding:12px 0 25px 0;}


.ipBox.type2 input {padding-left:30px;}
.ipBox.type2 ::-webkit-input-placeholder {font-size:15px; color:#888888; font-weight:300;}
.fileBox2 .fileList span.type2 {font-size:15px; color:#888888; font-weight:300; margin-left:30px;}

.schWrap {max-width:1280px; margin:0 auto;}
.schWrap .schBanner {position:relative; height:245px;}
.schWrap .schBanner .box {position: absolute; left:50%; top:0; margin-left:-960px;  width:1920px;}
.schWrap .title {margin:100px 0 75px 0;}
.schWrap .title span {font-size:26px; line-height:26px; color:#222222; font-weight:500; padding-left:180px; background:url('/html/images/sch/titcheck.png') left center no-repeat;}
.schWrap .stepWrap:after {content:''; display: block; clear:both;}
.schWrap .stepWrap .box {float:left; width:32%;  padding-left:70px;height:285px; border-left:1px solid #f2f2f2;}
.schWrap .stepWrap .box.no1 {padding-left: 0; border-left:none;}
.schWrap .stepWrap .box.no2 {width:36%;}
.schWrap .stepWrap .box.no3 {padding-left:75px;}
.schWrap .stepWrap .box .subTit .en{display: block; font-size:14px; line-height:14px; color:#aaaaaa; margin-bottom:15px;}
.schWrap .stepWrap .box .subTit .tit{display: block; font-size:20px; line-height:20px; color:#222222; font-weight:500; margin-bottom:30px;}
.schWrap .stepWrap .box .formBox {max-width:335px;}
.schWrap .stepWrap .box .formBox .twoBox {display:table;}
.schWrap .stepWrap .box .formBox .twoBox .rBox {width:100%; vertical-align: top;}
.schWrap .stepWrap .box .formBox .twoBox .rBox .ipBox { width:225px;}
.schWrap .stepWrap .box .formBox .twoBox .rBox .ipBox input {height:45px; border:1px solid #dddddd; border-radius:10px; padding-left:20px; font-size:16px; color:#222222; font-weight:300;}
.schWrap .stepWrap .box .formBox .twoBox .rBox.date a {right:20px; width:17px; height:17px; background:url('/html/images/sch/ico03.png') center no-repeat; background-size:17px auto; margin-top:-9px;}
.schWrap .stepWrap .box .formBox .twoBox .bta {width:100px; margin-left:10px;}
.schWrap .stepWrap .box .formBox .twoBox .bta .checkBtn {background:#222222; color:#fff; font-weight:500; width:100px; height:45px; line-height:45px; text-align: center; display: inline-block; vertical-align: top; border-radius:10px;}
.schWrap .stepWrap .box .warn {margin-top:50px; font-size:16px; font-weight:300; color:#aaaaaa; padding-left: 26px;  background:url('/html/images/sch/ico02.png') left 5px no-repeat;}
.schWrap .stepWrap .box .warn span {color:#888888; font-weight:400;}
.schWrap .stepWrap .box .dateCheck {background:#fafafa; padding:14px 20px; border:1px solid #f8f8f8; border-radius:10px; max-width:335px;}
.schWrap .stepWrap .box .dateCheck span {padding-left: 27px;  background:url('/html/images/sch/ico01.png') left center no-repeat; font-size:16px; line-height:16px; color:#222222; }
.schWrap .stepWrap .box .calWrap th {font-size:14px; color:#222222; padding:0 11px 12px 11px; font-weight:300;}
.schWrap .stepWrap .box .calWrap td {font-size:14px; color:#222222; padding:2px 7px; text-align: center; min-width:30px; height:30px;}
.schWrap .stepWrap .box .calWrap tr td:last-child {color:#cccccc;}
.schWrap .stepWrap .box .calWrap tr td:first-child {color:#cccccc;}
.schWrap .stepWrap .box .calWrap tr td.dayoff {color:#cccccc;}
.schWrap .stepWrap .box .calWrap tr .active {position: relative; font-weight:500; color:#fff;}
.schWrap .stepWrap .box .calWrap tr .active:after {content:''; position: absolute; left:50%; top:50%; margin:-13px 0 0 -13px; z-index:-1; background:#fe824d; border-radius:50%; width:27px; height:27px; line-height:27px; }
.schWrap .stepWrap .box .calWrap .holy {color:#cccccc;}
.schWrap .lastWarn {background:#fafafa; padding:35px; font-size:14px; color:#888888; font-weight:300; margin-top:120px;}
.schWrap .lastWarn .tit {font-size:14px; line-height:17px; margin-bottom:15px; font-weight:300; color:#888888; padding-left: 25px;  background:url('/html/images/sch/ico02.png') left center no-repeat;}
.schWrap .lastWarn .text p {padding-left:10px; text-indent:-10px;}



.inviteWrap {display:flex; justify-content:center; align-items:center; background:#f6f6f6 url('../images/invite/bg.jpg') repeat; min-height:100vh}
.inviteWrap .content {width:428px; margin:0 auto; position: relative; top:-40px;}
.inviteWrap .content .info { text-align: center;}
.inviteWrap .content .info .title {font-size:18px; color:#000000; margin-bottom:30px; letter-spacing:5px; font-weight:500;}
.inviteWrap .content .info .title2 {font-size:30px; line-height:30px; color:#000000; margin-bottom:30px; font-weight:500;}
.inviteWrap .content .info .title3 {font-size:18px;  color:#888888;  margin-bottom:47px; font-weight:300; padding-bottom:50px; background:url('../images/invite/dot.png') center bottom no-repeat;}
.inviteWrap .content .info .name { max-width:400px; margin:0 auto 50px auto; }
.inviteWrap .content .info .name .box {display: inline-block; vertical-align: middle;}
.inviteWrap .content .info .name .box .en {color:#888888; font-size:18px; font-style: italic; }
.inviteWrap .content .info .name .box .tit {font-size:24px; color:#222222; font-weight:500;}
.inviteWrap .content .info .name .box.center {margin:0 12px;}
.inviteWrap .content .info .name .box.center .en {font-size:30px; font-weight:300; font-style: normal; }
.inviteWrap .content .info .bottom .pw {margin-bottom:20px;}
.inviteWrap .content .info .bottom .pw input {padding-left:67px; height:85px; width:100%;  background:#fff url('../images/invite/icoPw.png') 34px center no-repeat; border:none; font-size:16px; }
.inviteWrap .content .info .bottom .pw input ::-webkit-input-placeholder {  color: #888888;  }
.inviteWrap .content .info .bottom .btn a {display: block; height:85px; line-height:85px; background:#222222;vertical-align: top; font-size:21px; color:#fff; font-weight:500;}

.inviteErrorPop {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999; display: none;  background:rgba(0,0,0,.5);}
.inviteErrorPop .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; display: none; }
.inviteErrorPop .in {position: fixed; left:50%; top:50%;  transform:translateY(-50%); width:510px; margin-left:-255px;  z-index:10; background:#fff; padding:35px; border:1px solid #f2f2f2}
.inviteErrorPop .in .title {padding-left:50px; background:#fff url('../images/invite/icoWarn.png') 0 center no-repeat;}
.inviteErrorPop .in .title .no1{position: relative; font-size:18px; line-height:18px; color:#222222; font-weight:500; margin-bottom:10px;}
.inviteErrorPop .in .title .no2{font-size:16px; line-height:16px; color:#222222; font-weight:300; }
.inviteErrorPop .in .closePop {position: absolute; right:35px; top:50%; margin-top:-8px; width:17px; height:16px; text-indent:-999em; background:url('../images/invite/close.png') center no-repeat; }



.orderNewSec {position: relative; padding:50px; background:#fff;   border:1px solid #f2f2f2; border-top:none; border-bottom:none;}
.orderNewSec:after {content:''; position: absolute; left:50px; bottom:0; height:2px; background:#eaeaea; width:calc(100% - 100px);}
.orderNewSec:first-child{border-top:1px solid #f2f2f2;}
.orderNewSec:nth-child(2){border-top:1px solid #f2f2f2;}
.orderNewSec:last-child{border-bottom:1px solid #f2f2f2;}
.orderNewSec:last-child:after {display: none;}
.orderNewSec .orderBigTit {margin-bottom:50px;}
.orderNewSec .orderBigTit > span {position: relative; font-size: 26px; line-height:26px; padding-left:13px; color:#222222; font-weight:700; display: inline-block; vertical-align: top;  }
.orderNewSec .orderBigTit > span:after {content:''; position: absolute; left:0; top:3px; height:24px; width:3px; background:#000000;}
.orderNewSec .orderBigTit .showDetail {margin-left:25px;}
.orderNewSec .orderBigTit .warnInfo01 {margin-top:20px;}

.orderNewSec .infoProduct {display:flex; margin-bottom:25px;}
.orderNewSec .infoProduct .img{width:110px; margin-right:15px;}
.orderNewSec .infoProduct .textWrap {padding-top:10px; font-size:14px; line-height:14px; font-weight:300; color:#888888;}
.orderNewSec .infoProduct .textWrap .date { margin-bottom: 10px;}
.orderNewSec .infoProduct .textWrap .title {font-size:16px; line-height:16px; font-weight:700; color:#000000; margin-bottom: 30px;}
.orderNewSec .opDetailText {background:#f8f8f8; padding:25px; border-radius:5px; font-size:14px; margin-bottom:10px;}
.orderNewSec .opDetailText .tit { color:#000000; margin-bottom:10px;}
.orderNewSec .opDetailText .txt { font-weight:300;}
.warnInfo01 {margin-top:10px;}
.warnInfo01 span {display: block; padding-left: 23px; background:url('../images/od/ico_info5.png') left 3px no-repeat; font-size:14px; color:#000000; font-weight:300;}
.orderNewSec .grayInfoBox {padding:25px; background:#f8f8f8; border-radius:5px; margin-bottom:35px;}
.orderNewSec .grayInfoBox .box {margin-bottom:30px;}
.orderNewSec .grayInfoBox .box:last-child {margin-bottom:0;}
.orderNewSec .grayInfoBox .box .tit {font-size:18px; line-height:18px; font-weight:700;color:#666666; margin-bottom:10px;}
.orderNewSec .grayInfoBox .box .txt p {position: relative; font-size:18px; color:#666666; font-weight:300; padding-left:25px; }
.orderNewSec .grayInfoBox .box .txt p:after {content:'-'; position: absolute; left:0; top:0;}
.orderNewSec .grayInfoBox .box .txt p.red {color:#ff4242; font-weight:400;}
.orderNewSec .centerBox01 {text-align: center; margin-bottom:45px;}
.orderNewSec .center {text-align: center;}

.orderNewSec .showDetail { display: inline-block; vertical-align: middle; }
.orderNewSec .showDetail a{padding-right:25px; position: relative; background:url('../images/od/ico_info4.png') right center no-repeat;}
.orderNewSec .showDetail a span {font-size:14px; color:#888888; font-weight:300; border-bottom:1px solid #888888;}

.ckType5 input {position: absolute; visibility: hidden;}
.ckType5 label {font-size:16px; line-height:16px; color:#000000; position: relative; padding-left:25px; }
.ckType5 label:after {content:''; position: absolute; left:0; top:4px; width: 17px; height:17px; border:1px solid #000000; border-radius:3px;}
.ckType5 input:checked + label:after {background:#000000 url('../images/od/ico_check02.png') center no-repeat;}

.btType04 {display: inline-block; vertical-align: top; font-size:16px; color:#fff; min-width:235px; height:55px; line-height:53px; background:#000000; border-radius:5px; text-align: center; }
.btType04.blue { color:#418dfb; background:#f0f6ff; border:1px solid #e0eaf9; font-weight:700; }
.btType04.blank { color:#000000; background:#fff; border:1px solid #000000;  }
.btType04.blank span {padding-left:30px;}
.btType04.gray { color:#000000; background:#fff; border:1px solid #eaeaea;  }
.btType04.gray span {padding-left:30px;}


.orderNewForm {margin-top:30px;}
.orderNewForm ::-webkit-input-placeholder  {font-size:16px; color:#888888; font-weight: 400;}
.orderNewForm:first-child {margin-top:0;}
.orderNewForm .orderSubTit {position: relative; margin-bottom:10px; max-width:605px;}
.orderNewForm .orderSubTit.max01 {max-width:360px;}
.orderNewForm .orderSubTit .titBox .tit {font-size: 18px; line-height:18px; color:#222222; font-weight:700; position: relative;}
.orderNewForm .orderSubTit .titBox.rq .tit {padding-right:15px;}
.orderNewForm .orderSubTit .titBox.rq .tit:after {content:''; position: absolute; right:0; top:50%; width:5px; height:5px; background:#f76868; border-radius:50%; margin-top:-3px;}
.orderNewForm .orderSubTit .titBox .cho {font-size:14px; color:#aaaaaa;}
.orderNewForm .orderSubTit .showDetail {position: absolute; right:0; top:0;}

.orderNewForm .newForm .line {margin-bottom:10px; display:flex;}
.orderNewForm .newForm .line .box {width:360px; margin-left:10px;}
.orderNewForm .newForm .line.full .box {width: 100%;}
.orderNewForm .newForm .line.sm .box {width:235px;}
.orderNewForm .newForm .line .box:first-child {margin-left:0;}
.orderNewForm .newForm .line .ipType {position: relative;}
.orderNewForm .newForm .line .ipType .fileDel {position: absolute; right:0; top:0; width:52px; height:100%; border-left:1px solid #eaeaea; text-indent:-999em; background:url('../images/od/ico_trash2.png') center no-repeat;}
.orderNewForm .newForm .line .ipType input {border:1px solid #eaeaea; border-radius:5px; padding-left:20px; height:55px; color:#222222; font-size:16px; width:100%; letter-spacing:-0.03em; }
.orderNewForm .newForm .line .ipType input:focus {outline:none;  }
.orderNewForm .newForm .line .ipType.dateIp input {background:url('../images/od/ico_cal3.png') calc(100% - 19px) center no-repeat;}
.orderNewForm .newForm .line .ipType.timeIp input {background:url('../images/od/ico_time.png') calc(100% - 19px) center no-repeat;}
.orderNewForm .newForm .line:last-child {margin-bottom:0;}
.orderNewForm .newForm .line .selType select{ background:url('../images/od/ico_sel01.png') calc(100% - 19px) center no-repeat; border:1px solid #eaeaea; border-radius:5px; padding-left:20px; height:55px; color:#222222; font-size:16px; width:100%;}
.btnFormArea {position: relative; margin-top:50px;}
.btnFormArea:after {content:''; display: block; clear:both;}
.btnFormArea .rightBtn {float:right; font-size: 0;}
.btnFormArea .rightBtn a:last-child {margin-left: 10px;}
.btnFormArea .leftBtn {float:left;}

.ckType6 input {position: absolute; visibility: hidden;}
.ckType6 label {display: flex; align-items:center; border:1px solid #eaeaea; border-radius:5px; padding-left:20px; height:55px; width:100%;  position: relative; padding-left:20px; }
.ckType6 label span {position: relative; padding-left: 25px; display: block;  color:#888888; font-size:16px; line-height:16px; }
.ckType6 label span:after {content:''; position: absolute; left:0; top:50%; margin-top:-8px; width: 15px; height:15px; border:1px solid #888888; border-radius:3px;}
.ckType6 input:checked + label {border:1px solid #222;}
.ckType6 input:checked + label span {color:#222;}
.ckType6 input:checked + label span:after {background:#000000 url('../images/od/ico_check01On.png') center no-repeat; border:1px solid #000000}

.orderNewSec .orderBigTit.mb0 {margin-bottom: 0;}
.orderNewSec .orderBigTit .useCheck {display: inline-block; vertical-align: top; position: relative; top:2px; margin-left:20px;}
.orderNewSec .orderBigTit .useCheck .checkBlue {display: inline-block; vertical-align: middle; margin-right:5px;}
.orderNewSec .orderBigTit .useCheck .checkBlue input {position: absolute; visibility: hidden;}
.orderNewSec .orderBigTit .useCheck .checkBlue label {transition:.3s all; display: inline-block; position: relative; text-indent:-999em; width:32px; height:20px; border-radius:20px; background:#eaeaea;}
.orderNewSec .orderBigTit .useCheck .checkBlue label:after {content:''; position: absolute; left:3px; top:50%; width:14px; height:14px; margin-top:-7px; background:#fff; border-radius:50%; transition:.3s all;}
.orderNewSec .orderBigTit .useCheck .checkBlue input:checked + label {background:#0060ff;}
.orderNewSec .orderBigTit .useCheck .checkBlue input:checked + label:after { left:15px;}
.orderNewSec .orderBigTit .useCheck .useText {display: inline-block; vertical-align: middle; height:24px; line-height:22px; padding:0 9px; background:#eaeaea; border-radius:5px;  font-size:14px; }
.orderNewSec .orderBigTit .useCheck .useText.able {background:#f0f6ff;}
.orderNewSec .orderBigTit .useCheck .useText.able span {padding-left:16px; background:url('../images/od/ico_check01.png') left 7px no-repeat;  color:#418dfb;}

.fakeFileV3 {position: relative;}
.fakeFileV3 .fileInput {position: relative; display: inline-block; vertical-align: top; overflow:hidden;}
.fakeFileV3 .fileInput .fileInputHiddenV3 {position: absolute; left:0; top:0; cursor:pointer; font-size: 500px; width: 100%; height:100%; opacity:0; z-index:10;}

.galPhoto .fakeFileV3 {margin-bottom:35px;}

.linkType .btType04 span { background:url('../images/od/ico_link.png') left center no-repeat; }
.upType .btType04 span { background:url('../images/od/ico_zoom2.png') left center no-repeat; }
.playType .btType04 span { background:url('../images/od/ico_play.png') left center no-repeat; }
.picType .btType04 span { background:url('../images/od/ico_pic.png') left center no-repeat; }
.plusType .btType04 span { background:url('../images/od/ico_plus2.png') left center no-repeat;  padding-left:23px;}
.delType .btType04 span { background:url('../images/od/ico_trash2.png') left center no-repeat; }

.orderNewForm .newForm .line.big2 .box:nth-child(2) {width:235px;}

.textareaType1 {width: 100%; height:165px; border:1px solid #eaeaea; border-radius:5px; padding:20px; resize:none;} 


.orderNewSec .owCompTit01 {font-size:18px; color:#000000; font-weight: 300; margin-bottom:45px;}
.orderNewSec .owCompTit01 span {font-weight: 400;}
.orderNewSec .owCompCopy {border-radius:5px; border:1px solid #cccccc; max-width:360px; font-size:16px; margin-bottom:10px; color:#000000; overflow:hidden;}
.orderNewSec .owCompCopy .text {border-bottom: 1px solid #cccccc; background:#f8f8f8; padding:30px;}
.orderNewSec .owCompCopy .btnCopy a{display: block; text-align: center; height:55px; line-height:53px;}
.orderNewSec .owCompCopy .btnCopy a span {padding-left: 25px; background:url('../images/od/ico_copy.png') left center no-repeat;}
.orderNewSec .kakao {max-width:360px; }
.orderNewSec .kakao .btn a {display: block; text-align: center; ;border-radius:5px; background:#ffe404; font-size:16px; color:#3f1d1d;  height:55px; line-height:53px;}
.orderNewSec .kakao .btn a span {padding-left: 32px; background:url('../images/od/ico_kakao.png') left center no-repeat;}


.addTextarea {clear:both; margin-top: 50px; padding-top: 40px; border-top:1px solid #f2f2f2;;}
.addTextarea textarea{width: 100%; height: 150px; padding:20px; font-size: 18px; border:1px solid #eaeaea; color:#222222; resize:none;}
.addTextarea ::-webkit-input-placeholder  {font-size:18px; color:#888888; font-weight:300;}


/******************************

@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????
@@@@@@@@@ ?̵???????

******************************/

/* @media (not print) and (max-width:1240px){ */

@media all and (max-width:1240px) {


.container.newOwContainer {padding-bottom:0; margin-bottom:40px;}
.container.newOwContainer.white {background:#fff;}
.container.newOwContainer.white .h2Box {margin-bottom: 0;}
.container.newOwContainer.white .orderNewSec:nth-child(2) {padding-top: 40px;}

.orderNewSec {padding:20px 15px; border:none !important; border-bottom: 10px solid #f8f8f8 !important;  margin:0 -15px;}
.orderNewSec:last-child {border-bottom:none !important;}
.orderNewSec:after {display:none;}
.orderNewSec .orderBigTit {margin-bottom:25px;}
.orderNewSec .orderBigTit:after {content:''; display: block; clear:both; }
.orderNewSec .orderBigTit > span {position: relative; font-size: 18px; line-height:18px; padding-left:8px; color:#222222; font-weight:700; display: inline-block; vertical-align: top;  }
.orderNewSec .orderBigTit > span:after {content:''; position: absolute; left:0; top:1px; height:17px; width:2px; background:#000000;}
.orderNewSec .orderBigTit .showDetail {margin-left:12px;}
.orderNewSec .orderBigTit .warnInfo01 {margin-top:10px;}
.orderNewSec .infoProduct {display:flex; margin-bottom:15px; }
.orderNewSec .infoProduct .img{width:110px; margin-right:15px;}
.orderNewSec .infoProduct .textWrap {padding-top:3px; font-size:11px; line-height:11px; font-weight:300; color:#888888;}
.orderNewSec .infoProduct .textWrap .date { margin-bottom: 10px;}
.orderNewSec .infoProduct .textWrap .title {font-size:13px; line-height:auto; font-weight:700; color:#000000; margin-bottom:5px;}
.orderNewSec .opDetailText {background:#f8f8f8; padding:15px; border-radius:5px; font-size:12px; margin-bottom:10px;}
.orderNewSec .opDetailText .tit { color:#000000; margin-bottom:10px;}
.orderNewSec .opDetailText .txt { font-weight:300;}
.warnInfo01 {margin-top:10px;}
.warnInfo01 span {display: block; padding-left: 17px; background:url('../images/od/ico_info5_m.png') left 3px no-repeat; background-size:12px auto; font-size:11px; color:#000000; font-weight:300;}
.orderNewSec .grayInfoBox {padding:15px; background:#f8f8f8; border-radius:5px; margin-bottom:15px;}
.orderNewSec .grayInfoBox .box {margin-bottom:15px;}
.orderNewSec .grayInfoBox .box:last-child {margin-bottom:0;}
.orderNewSec .grayInfoBox .box .tit {font-size:12px; line-height:12px; font-weight:700;color:#666666; margin-bottom:10px;}
.orderNewSec .grayInfoBox .box .txt p {position: relative; font-size:12px; color:#666666; font-weight:300; padding-left:15px; }
.orderNewSec .grayInfoBox .box .txt p:after {content:'-'; position: absolute; left:0; top:0;}
.orderNewSec .grayInfoBox .box .txt p.red {color:#ff4242; font-weight:400;}
.orderNewSec .centerBox01 {text-align: left; margin-bottom:25px;}
.orderNewSec .center {text-align: center;}

.orderNewSec .showDetail {float:right; display: inline-block; vertical-align: middle; position: relative; top:-3px; }
.orderNewSec .showDetail a{padding-right:20px; position: relative; background:url('../images/od/ico_info4_m.png') right 6px no-repeat; background-size: 15px auto;}
.orderNewSec .showDetail a span {font-size:12px; color:#888888; font-weight:300; border-bottom:1px solid #888888;}

.ckType5 input {position: absolute; visibility: hidden;}
.ckType5 label {font-size:12px; line-height:12px; color:#000000; position: relative; padding-left:18px; }
.ckType5 label:after {content:''; position: absolute; left:0; top:2px; width: 12px; height:12px; border:1px solid #000000; border-radius:3px;}
.ckType5 input:checked + label:after {background:#000000 url('../images/od/ico_check02_m.png') center no-repeat; background-size:8px auto;}

.btType04 {display:block;  font-size:12px; color:#fff; min-width:auto; height:45px; line-height:43px; background:#000000; border-radius:5px; text-align: center; }
.btType04.full {display:block; width:100%;}
.btType04.blue { color:#418dfb; background:#f0f6ff; border:1px solid #e0eaf9; font-weight:700; }
.btType04.blank { color:#000000; background:#fff; border:1px solid #000000;  }
.btType04.blank span {padding-left:20px;}
.btType04.gray { color:#000000; background:#fff; border:1px solid #eaeaea;  }
.btType04.gray span {padding-left:20px;}





.orderNewForm {margin-top:25px;}
.orderNewForm ::-webkit-input-placeholder  {font-size:12px; color:#888888; font-weight: 400;}
.orderNewForm:first-child {margin-top:0;}
.orderNewForm .orderSubTit {position: relative; margin-bottom:10px; max-width:100%;}
.orderNewForm .orderSubTit.max01 {max-width:360px;}
.orderNewForm .orderSubTit .titBox .tit {font-size: 13px; line-height:13px; color:#222222; font-weight:700; position: relative;}
.orderNewForm .orderSubTit .titBox.rq .tit {padding-right:10px;}
.orderNewForm .orderSubTit .titBox.rq .tit:after {content:''; position: absolute; right:0; top:50%; width:3px; height:3px; background:#f76868; border-radius:50%; margin-top:-2px;}
.orderNewForm .orderSubTit .titBox .cho {font-size:11px; color:#aaaaaa;}
.orderNewForm .orderSubTit .showDetail {position: absolute; right:0; top:0;}

.orderNewForm .newForm .line {margin-bottom:5px; display:block;}
.orderNewForm .newForm .line.db {display: flex;}
.orderNewForm .newForm .line.db .box {width:50%; margin-top:0 !important;}
.orderNewForm .newForm .line.db .box:first-child {margin-right: 5px;}
.orderNewForm .newForm .line .box {width:100%; margin-left:0;}
.orderNewForm .newForm .line .box.mt15 {margin-top:15px;}
.orderNewForm .newForm .line .box:nth-child(2) {margin-top:5px;}
.orderNewForm .newForm .line.full .box {width: 100%;}
.orderNewForm .newForm .line.sm .box {width:100%;}
.orderNewForm .newForm .line .box:first-child {margin-left:0;}
.orderNewForm .newForm .line .ipType {position: relative;}
.orderNewForm .newForm .line .ipType .fileDel {position: absolute; right:0; top:0; width:52px; height:100%; border-left:1px solid #eaeaea; text-indent:-999em; background:url('../images/od/ico_trash2_m.png') center no-repeat; background-size:14px auto;}
.orderNewForm .newForm .line .ipType input {border:1px solid #eaeaea; border-radius:5px; padding-left:15px; height:45px; color:#222222; font-size:12px; width:100%; letter-spacing:-0.03em; }
.orderNewForm .newForm .line .ipType input:focus {outline:none;  }
.orderNewForm .newForm .line .ipType.dateIp input {background:url('../images/od/ico_cal3_m.png') calc(100% - 10px) center no-repeat; background-size:15px auto;}
.orderNewForm .newForm .line .ipType.timeIp input {background:url('../images/od/ico_time_m.png') calc(100% - 10px) center no-repeat; background-size:15px auto;}
.orderNewForm .newForm .line .selType select{ background:url('../images/od/ico_sel01_m.png') calc(100% - 15px) center no-repeat; background-size:8px auto; border:1px solid #eaeaea; border-radius:5px; padding-left:15px; height:45px; color:#222222; font-size:12px; width:100%;}
.btnFormArea {position: relative; margin-top:30px; padding-bottom: 50px;}
.btnFormArea:after {content:''; display: block; clear:both;}
.btnFormArea .rightBtn {float:right; font-size: 0; width:100%;}
.btnFormArea .rightBtn a:last-child {margin-left: 0;}
.btnFormArea .rightBtn a { width:100%; margin-top:5px;}
.btnFormArea .rightBtn a.blue {position: absolute;left:0; bottom:0; width:100% !important;}
.btnFormArea .leftBtn {float:left;}
.btnFormArea.three .leftBtn {float:left; width:50%; padding-right:3px;}
.btnFormArea.three .rightBtn {padding-left:2px; width:50%;}
.btnFormArea.three .rightBtn a {width:100%; margin:0;}

.ckType6 label {padding-left:15px; height:45px; width:100%;  position: relative; padding-left:15px; }
.ckType6 label span {position: relative; padding-left: 20px; display: block;  color:#888888; font-size:12px; line-height:12px; }
.ckType6 label span:after {content:''; position: absolute; left:0; top:50%; margin-top:-7px; width: 13px; height:13px; border:1px solid #888888; border-radius:3px;}
.ckType6 input:checked + label {border:1px solid #222;}
.ckType6 input:checked + label span {color:#222;}
.ckType6 input:checked + label span:after {background:#000000 url('../images/od/ico_check01On_m.png') center no-repeat; background-size: 10px auto;}

.orderNewSec .orderBigTit.check {padding-bottom:30px; position: relative;}
.orderNewSec .orderBigTit.mb0 {margin-bottom: 0;}
.orderNewSec .orderBigTit .useCheck {float:right; margin-left:10px; position: static;}
.orderNewSec .orderBigTit .useCheck .checkBlue {margin-right:0; float:right;}
.orderNewSec .orderBigTit .useCheck .checkBlue input {position: absolute; visibility: hidden;}
.orderNewSec .orderBigTit .useCheck .checkBlue label {transition:.3s all; display: inline-block; position: relative; text-indent:-999em; width:32px; height:20px; border-radius:20px; background:#eaeaea;}
.orderNewSec .orderBigTit .useCheck .checkBlue label:after {content:''; position: absolute; left:3px; top:50%; width:14px; height:14px; margin-top:-7px; background:#fff; border-radius:50%; transition:.3s all;}
.orderNewSec .orderBigTit .useCheck .checkBlue input:checked + label {background:#0060ff;}
.orderNewSec .orderBigTit .useCheck .checkBlue input:checked + label:after { left:15px;}
.orderNewSec .orderBigTit .useCheck .useText {position: absolute; left:0; bottom:0; width:100%;  height:23px; line-height:23px; padding:0; background:#eaeaea; border-radius:5px;  font-size:12px; text-align: center; }
.orderNewSec .orderBigTit .useCheck .useText.able {background:#f0f6ff;}
.orderNewSec .orderBigTit .useCheck .useText.able span {padding-left:15px; background:url('../images/od/ico_check01.png') left 7px no-repeat;  color:#418dfb; background-size: 10px auto;}

.fakeFileV3 {position: relative;}
.fakeFileV3 .fileInput {position: relative; display: block; vertical-align: top; overflow:hidden;}
.fakeFileV3 .fileInput .fileInputHiddenV3 {position: absolute; left:0; top:0; cursor:pointer; font-size: 500px; width: 100%; height:100%; opacity:0; z-index:10;}

.galPhoto .fakeFileV3 {margin-bottom:35px;}

.linkType .btType04 span { background:url('../images/od/ico_link_m.png') left center no-repeat; background-size:17px auto; }
.upType .btType04 span { background:url('../images/od/ico_zoom2_m.png') left center no-repeat; background-size:14px auto;  }
.playType .btType04 span { background:url('../images/od/ico_play_m.png') left center no-repeat; background-size:17px auto; }
.picType .btType04 span { background:url('../images/od/ico_pic_m.png') left center no-repeat;background-size:14px auto;  }
.plusType .btType04 span { background:url('../images/od/ico_plus2_m.png') left center no-repeat;  padding-left:23px; background-size:17px auto; }
.delType .btType04 span { background:url('../images/od/ico_trash2_m.png') left center no-repeat;  background-size:13px auto; }

.orderNewForm .newForm .line.big2 .box:nth-child(2) {width:100%; margin-bottom:5px; }

.textareaType1 {width: 100%; height:145px; border:1px solid #eaeaea; border-radius:5px; padding:15px; resize:none;} 


.orderNewSec .owCompTit01 {font-size:12px; color:#000000; font-weight: 300; margin-bottom:25px;}
.orderNewSec .owCompTit01 span {font-weight: 400;}
.orderNewSec .owCompCopy {border-radius:5px; border:1px solid #cccccc; max-width:100%; font-size:12px; margin-bottom:10px; color:#000000;}
.orderNewSec .owCompCopy .text {border-bottom: 1px solid #cccccc; background:#f8f8f8; padding:15px;}
.orderNewSec .owCompCopy .btnCopy a{display: block; text-align: center; height:45px; line-height:43px; font-size: 13px;}
.orderNewSec .owCompCopy .btnCopy a span {padding-left: 25px; background:url('../images/od/ico_copy.png') left center no-repeat; background-size: 15px auto;}
.orderNewSec .kakao {max-width:360px; }
.orderNewSec .kakao .btn a {display: block; text-align: center; ;border-radius:5px; background:#ffe404; font-size:13px; color:#3f1d1d;  height:45px; line-height:43px;}
.orderNewSec .kakao .btn a span {padding-left: 25px; background:url('../images/od/ico_kakao_m.png') left center no-repeat; background-size: 18px auto;}










.subContainer {padding:25px 0 50px 0; border-top:10px solid #f8f8f8;;}
.subContainer.pt0 {padding-top:0;}
.subContainer.pb0 {padding-bottom:0;}
.subContainer.full {padding-top:0; border-top:none;}
.subContainer.ptZero {padding:0; }
.subContainer.pt30 { padding-top:30px !important;}


.h2Wrap {margin-bottom:25px; padding:0 15px;}
.h2Wrap h2 {font-size:18px; line-height:18px; color:#222222; }
.h2Wrap.centerBorder {padding-bottom:0; margin-bottom:25px; border-bottom:none; padding-top:20px;}

.sortWrap {position: relative; margin-bottom:25px; padding:0 15px 10px 15px; border-bottom:1px solid #f2f2f2; text-align: left;}
.sortWrap .selSort {position: relative; top:0;}
.sortWrap .mobSorting {position: absolute; right:0; bottom:15px;}
.sortWrap .mobSorting a {display: inline-block; vertical-align:top; text-indent:-999em; width:22px; height:22px; margin-right:15px;}
.sortWrap .mobSorting a.type1 {background:url('../images/sub/ico_sorting01.png') center no-repeat; background-size:22px auto;}
.sortWrap .mobSorting a.type2 {background:url('../images/sub/ico_sorting02.png') center no-repeat; background-size:22px auto;}

.lstSort {margin-bottom:10px;}
.lstSort ul{display: block; white-space:nowrap; overflow-x:auto; }
.lstSort ul li {display: inline-block; vertical-align: top; margin-right:12px; }
.lstSort ul li a {padding-bottom:13px; font-size:14px; line-height:14px; }

.lstTab {padding-top:5px; padding-bottom:10px;}
.lstTab ul {white-space:nowrap; overflow-x:scroll}
.lstTab ul li {display: inline-block; vertical-align: top; margin-right:5px;  text-align: center;}
.lstTab ul li:last-child {margin-right:0;}
.lstTab ul li a {display: block; font-size:11px; color:#aaaaaa; font-weight:300; line-height:30px; border:1px solid #eaeaea; min-width:123px; border-radius:10px; padding:0 5px;}
.lstTab ul li.active a {font-weight:500; color:#fff; background:#222222; border:none;}


.selSort {display: inline-block;}
.selSort .title a {display: block; font-size:14px; line-height:14px; width:130px; padding:10px 0 10px 0; text-align: left;}
.selSort .title a span {padding-right:20px; background:url('../images/sub/ico_sortdown_m.png') right center no-repeat; background-size:8px auto;}
.selSort .pop { right:auto; left:0; top:35px; width: 100%; z-index:20; padding:10px 0; background:#fff; border:1px solid #f2f2f2}
.selSort .pop li a {display: block; font-size:14px;  line-height:14px;  padding:10px 0 10px 20px; text-align: left;}
.selSort.active .pop {display: block;}
.selSort.active .title a span {background:url('../images/sub/ico_sortup_m.png') right center no-repeat; background-size:8px auto;}

.paging {text-align: center; padding-top:25px; }
.paging a {display: inline-block; vertical-align: middle; }
.paging span {display: inline-block; vertical-align: middle; }
.paging > a {width:15px; height:14px; text-indent:-999em; }
.paging > a.prev {background-size:6px auto;}
.paging > a.next {background-size:6px auto;}
.paging .num {margin:0 13px;}
.paging .num a {position: relative; font-size:14px; line-height:20px;   color:#888888; font-weight:300; margin-right:10px;}
.paging .num a.active:after {bottom:-3px; width:100%; h}

.detailWrap {}
.detailWrap .boxGrid {min-height:auto;}
.detailWrap .boxGrid .detailSlide {position:relative; left:0; top:0; width:100%; }
.detailWrap .boxGrid .prdAllWrap {float:none; width:100%;}
.detailWrap .bgSlide {background:#fff; padding:0; margin-bottom:0; border-bottom:10px solid #f8f8f8;}
.detailWrap .topSlide {}

.favoSlide {margin-bottom:15px; border-bottom:10px solid #f8f8f8; }
.favoSlide .inner {padding:20px 0 30px 0; }
.favoSlide .inner .title {padding-bottom:15px; margin-bottom:20px; border-bottom:1px solid #f2f2f2; padding-left:25px;}
.favoSlide .inner .title span {font-size:16px; color:#222222; line-height:16px; font-weight: 700; padding-left:25px; background:url('/html/images/ico_favo_m.png') left center no-repeat; background-size:15px auto;}
.favoSlide .slide {position: relative;}
.favoSlide .swiper-container {margin:0 15px;}
.favoSlide .swiper-slide {margin:0 5px; width:35%; }
.favoSlide .swiper-slide a {  position: relative; display: block;}
.favoSlide .swiper-slide a .img {margin-bottom:5px;}
.favoSlide .swiper-slide a .img img {width:100%;}
.favoSlide .swiper-slide a .txtWrap .tit01 {font-size:13px;color:#222222; font-weight:500; margin-bottom:8px; height:auto; overflow:hidden; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; text-overflow:ellipsis; }
.favoSlide .swiper-slide a .txtWrap .info {font-size:12px; line-height: 12px; color:#b998a2; font-weight:500;}
.favoSlide .control {display: none;}

.favoSlideNew {margin-bottom:15px;}
.favoSlideNew .inner {padding:20px 0 30px 0; }
.favoSlideNew .inner .title {padding-bottom:15px; margin-bottom:20px; border-bottom:1px solid #f2f2f2; padding-left:25px;}
.favoSlideNew .inner .title span {font-size:16px; color:#222222; line-height:16px; font-weight: 700; padding-left:25px; background:url('/html/images/ico_favo_m.png') left center no-repeat; background-size:15px auto;}
.favoSlideNew .slide {position: relative;}
.favoSlideNew .swiper-container {margin:0 15px;}
.favoSlideNew .swiper-slide {margin:0 5px; width:35%; }
.favoSlideNew .swiper-slide a {  position: relative; display: block;}
.favoSlideNew .swiper-slide a .img {margin-bottom:5px;}
.favoSlideNew .swiper-slide a .img img {width:100%;}
.favoSlideNew .swiper-slide a .txtWrap .tit01 {font-size:13px;color:#222222; font-weight:500; margin-bottom:8px; height:auto; overflow:hidden; }
.favoSlideNew .swiper-slide a .txtWrap .info {font-size:12px; line-height: 12px; color:#b998a2; font-weight:500;}
.favoSlideNew .control {display: none;}

.detailWrap.new .favoSlideNew .swiper-slide {width:110px;}

.detailSlide {float:none; position: relative;}
.detailSlide .btnBack {display: block; }
.detailSlide .gallery-top {margin-bottom:15px; border:none; border-radius:0;}
.detailSlide .swiper-slide img {width:100%;}
.detailSlide .gallery-thumbs {position: absolute; opacity:0; top:0; width:50px;  visibility: hidden;}
.detailSlide .gallery-thumbs .swiper-slide {overflow:hidden; border:1px solid #f2f2f2; border-radius:5px;}
.detailSlide .swiper-pagination {display: block; position:absolute; width:100%; bottom:8px; text-align: center; font-size: 0;}
.detailSlide .swiper-pagination span {width:7px; height:7px; border-radius:50%; background:#222222; margin-right:10px; opacity:1;}
.detailSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#bf94a2;}
.detailSlide .swiper-pagination span:last-child {margin-right:0;}

.starList li {display: inline-block; width:14px; height:13px; background:url('../images/sub/ico_star_m.png') center no-repeat; background-size:14px auto !important;}
.starList li.full {background:url('../images/sub/ico_star_m.png') center no-repeat;}
.starList li.half {background:url('../images/sub/ico_star_half_m.png') center no-repeat;}

.wranBox {padding:0 15px;}
.wranBox span {display: inline-block; vertical-align: top; padding-left:25px; background:url('../images/sub/ico_info_m.png') left 3px no-repeat; font-size:12px; background-size:16px auto; }

.ckType1 {display: inline-block; vertical-align: top; }
.ckType1 input {position: absolute; visibility: hidden;}
.ckType1 label {position: relative; font-size:12px; line-height:12px; padding-left:20px; font-weight:300; }
.ckType1 label:after {content:''; position: absolute; left:0; top:50%; width:14px; height:14px; margin-top:-8px; border:1px solid #222222;}
.ckType1 input:checked + label:before {content:''; position: absolute; left:0; top:50%; margin-top:-8px; width:16px; height:16px; background:#222 url('../images/sub/ico_checkOn_m.png') center no-repeat; background-size:10px auto;}


.sorting {position: relative;  background:#fff; z-index: 10; cursor:pointer; }
.sorting .value {position: relative; height: 40px; font-size: 12px; color:#222222; line-height:40px; padding-left:15px; border:1px solid #222; font-weight: 500;}
.sorting .value:after {content:''; position: absolute; right:15px; top:50%; margin-top:-4px; width: 12px; height: 9px;background:url('../images/sub/ico_op_m.png') center no-repeat; background-size:12px auto; }
.sorting .value.on:after {transform:rotate(180deg);  }
.sorting .lstValue  {position: absolute; left:0; top:40px; width: 100%; background:#fff; display: none; background:#f8f8f8; border:1px solid #f2f2f2; padding:7px 0; border-top:none;}
.sorting .lstValue li { font-size:13px; color:#666666;  padding-left:15px;  margin-bottom:7px;}
.sorting .lstValue li:last-child {margin-bottom:0;}
.sorting .lstValue li label {cursor:pointer; display: block; font-size:12px; color:#222222; font-weight:300;}
.sorting .lstValue li input{display:none}

.infoDate {padding-top:0;}
.infoDate span{display: inline-block; vertical-align: middle; position: relative; margin-right:8px; padding-right:8px; font-size:12px; color:#aaaaaa; font-weight:300; }
.infoDate span:after {content:''; position: absolute; right:0; top:50%; margin-top:-5px;; width:1px; height:10px; background:#eaeaea;}
.infoDate span:last-child:after {display: none;}

.prdAllWrap {position: relative; margin-bottom:0; padding-top:90px;}
.prdAllWrap .prdInfo {position: relative; padding:0 15px 15px 15px; border-bottom:1px solid #f2f2f2;}
.prdAllWrap .prdInfo .label {display: inline-block; font-size:12px; line-height:12px; color:#fff; font-weight:500; padding:5px; background:#333; margin-bottom:10px;}
.prdAllWrap .prdInfo .title {font-size:17px; color:#222222; font-weight:700; margin-bottom:15px; }
.prdAllWrap .prdInfo .priceReview {  margin-bottom:0; padding-bottom:0; border-bottom:none; }
.prdAllWrap .prdInfo .priceReview:after{content:''; display: block; clear:both;}
.prdAllWrap .prdInfo .priceReview .price .old {font-size:14px; line-height:14px; color:#cccccc; font-weight:300; text-decoration: line-through; margin-bottom:5px;}
.prdAllWrap .prdInfo .priceReview .price .info {font-size:14px; color:#222222; font-weight:300; }
.prdAllWrap .prdInfo .priceReview .price .info em {font-size:18px; font-weight:700;}
.prdAllWrap .prdInfo .priceReview .price .info .percent {font-size:18px; font-weight:700; color:#f76868; margin-left:5px;}
.prdAllWrap .prdInfo .priceReview .review {float:right; padding-top:0; }
.prdAllWrap .prdInfo .priceReview .review .starList {display: inline-block; vertical-align: middle; margin-right:7px;}
.prdAllWrap .prdInfo .priceReview .review .link {display: inline-block; vertical-align: middle; font-size:13px; line-height:17px; color:#222222; font-weight:300;}
.prdAllWrap .prdInfo .priceReview .review .link em {font-weight:700;}
.prdAllWrap .prdInfo .priceReview .review .link {border-bottom:1px solid #222;}


.prdAllWrap .wranBox {margin-bottom:15px; padding-top:25px; }
.prdAllWrap .favoShare {margin-bottom:0; border-top:10px solid #f8f8f8;  border-bottom:10px solid #f8f8f8;}
.prdAllWrap .favoShare:after {content:''; display: block; clear:both;}
.prdAllWrap .favoShare .box {position: relative;border:none; text-align: center; width:50%;}
.prdAllWrap .favoShare .box:first-child:after {content:''; position: absolute; right:0; top:50%; width:1px; height:35px; margin-top:-17px; background:#f8f8f8;}
.prdAllWrap .favoShare .box a {display: block; height:50px; line-height:50px;}
.prdAllWrap .favoShare .box a.share span{padding-left:25px; font-size:15px; color:#222222; font-weight:300; background:url('../images/sub/ico_share_m.png') left center no-repeat; background-size:17px auto;}
.prdAllWrap .favoShare .box input {position: absolute; visibility: hidden;}
.prdAllWrap .favoShare .box label {display: block;  height:50px; line-height:50px; font-size:15px; color:#222222; font-weight:700; }
.prdAllWrap .favoShare .box label span {padding-left:25px;  background:url('../images/sub/ico_favo_m.png') left center no-repeat;  background-size:18px auto;}
.prdAllWrap .favoShare .box label em {color:#f76868;}
.prdAllWrap .favoShare .box input:checked + label span { background:url('../images/sub/ico_favo_on_m.png') left center no-repeat; background-size:18px auto; }

.prdAllWrap .btnExp {position: absolute; left:0; top:0; width:100%; padding:0 15px; display:none;}
.prdAllWrap .btnExp a {display: block; height:60px; line-height:60px; background:#222222; border-radius:5px; padding:0; text-align: center; font-size:14px; font-weight:300; color:#fff;}
.prdAllWrap .btnExp a span {padding-right:20px; background:url('../images/sub/ico_link_m.png') right center no-repeat; background-size:6px auto;}
.prdAllWrap .btnExp a span em {font-weight:700;}


.prdAllWrap .fixArea {position:fixed; left:0; bottom:0; width:100%; padding-bottom:45px;  z-index: 30; }
.prdAllWrap .fixArea .fixIn {display: none;  padding:20px 15px 0 15px; overflow-y:auto; height:330px; background:#fff;}
.prdAllWrap .fixArea .fixIn .tit {font-size:12px; color:#222222; line-height:12px; font-weight:500; margin-bottom:10px;}
.prdAllWrap .fixArea .fixIn .ckList  {margin-bottom:10px;}
.prdAllWrap .fixArea .fixIn .sorting {margin-bottom:15px;}

.prdAllWrap .fixArea .fixIn .selBox {margin-bottom:10px}
.prdAllWrap .fixArea .fixIn .selBox select {height:40px; font-size:13px; }

.prdAllWrap .fixArea .fixIn .totalPrice {padding-top:15px; padding-bottom:25px; border-top:1px solid #222222;;}
.prdAllWrap .fixArea .fixIn .totalPrice .txt {float:left;  font-size:14px; padding-top:5px; font-weight:500; color:#222222}
.prdAllWrap .fixArea .fixIn .totalPrice .price {float:right; font-size:15px;color:#222222; font-weight:300;}
.prdAllWrap .fixArea .fixIn .totalPrice .price em{font-weight:700; font-size:20px;  }



.prdAllWrap .fixArea .fixIn .opList {margin:0 -15px;}
.prdAllWrap .fixArea .fixIn .opList ul li {padding:15px; position: relative; border-top:1px solid #f2f2f2;;}
.prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit01 {font-size:13px; font-weight:700; color:#222222; margin-bottom:2px;}
.prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit02 {font-size:12px; font-weight:300; color:#aaaaaa;}
.prdAllWrap .fixArea .fixIn .opList ul li .control {margin-top:10px; font-size: 0;}
.prdAllWrap .fixArea .fixIn .opList ul li .control a {width:20px; height:20px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-indent:-999em;}
.prdAllWrap .fixArea .fixIn .opList ul li .control a.min {background:#f8f8f8 url('../images/sub/ico_min_m.png') center no-repeat;  background-size:8px auto;}
.prdAllWrap .fixArea .fixIn .opList ul li .control a.plus {background:#f8f8f8 url('../images/sub/ico_plus_m.png') center no-repeat;  background-size:8px auto; }
.prdAllWrap .fixArea .fixIn .opList ul li .control input {font-size:12px; color:#222222; font-weight:300; width:30px; height:20px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-align: center; margin:0 5px;}
.prdAllWrap .fixArea .fixIn .opList ul li .price {position: absolute; right:15px; bottom:20px;font-size:13px; line-height:20px; color:#222222; font-weight:300;}
.prdAllWrap .fixArea .fixIn .opList ul li .price em {font-weight:700;}
.prdAllWrap .fixArea .fixIn .opList ul li .del {position: absolute; right:15px; top:15px; text-indent:-999em; width:14px; height:14px; background:url('../images/sub/ico_list_del.png') center no-repeat; background-size:10px auto;}

.prdAllWrap .fixArea .btnOrder {position: fixed; left:0; bottom:0; width: 100%; z-index:50;}
.prdAllWrap .fixArea .btnOrder a {float:left; width:50%; height:45px; line-height:45px; font-size:15px; }

.btType01 {  height:45px; line-height:45px; font-size:15px;}

.detailFolder {max-width:1280px; margin:0 auto; padding-top:25px;}
.detailFolder .folder {position: relative; border-bottom:10px solid #f8f8f8; padding-bottom:25px; margin-bottom:25px;}

.detailFolder .folder .title {position: relative; cursor:pointer; font-size:16px; line-height:16px; font-weight:700; color:#222222; padding:0 15px;}
.detailFolder .folder .title span {padding-left:25px;}
.detailFolder .folder .title:after {content:''; position: absolute; right:15px; top:50%; width:16px; height:10px; margin-top:-5px; background:url('../images/sub/ico_tab_on_m.png') center no-repeat; background-size:16px auto; transform:rotate(180deg);}
.detailFolder .folder .title .count {display: inline-block; vertical-align: middle; margin-left:20px; font-size:15px; font-weight:300; border-bottom:1px solid #222; padding-bottom:5px;}
.detailFolder .folder .title .count em {font-weight:700;}
.detailFolder .folder .txt {font-size:13px; font-weight:300; padding:0 15px;}
.detailFolder .folder .contBox {margin-top:20px; position: relative; display: none;}
.detailFolder .folder.active .contBox{display: block;}
.detailFolder .folder.active .title:after {transform:rotate(0);}

.detailFolder.reviewType {background:#fff; padding:15px 10px 20px 10px;}
.detailFolder.reviewType.mPd0 {padding-top:0;}
.detailFolder.reviewType .folder {margin-top:0; padding-bottom:0; margin-bottom:0;}
.detailFolder.reviewType .folder .contBox {margin-top:0; padding-bottom:0; margin-bottom:0;}
.detailFolder.reviewType .folder.review .controlBox .grade {right:0; top:11px;}
.detailFolder.reviewType .folder.review .controlBox {padding-top:0; padding-left: 0; padding-right:0; border-top:none;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox {padding-right:0; padding-left: 0; }
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .title {font-size:12px;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .title span {font-size:10px; padding:0 3px;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .smPhoto {right:0;}
.detailFolder.reviewType .folder.review .rvList > ul > li .titleBox .smPhoto span {width:60px; height:60px;}
.detailFolder.reviewType .folder .title:after {display: none;}
.detailFolder.reviewType .btnMoreList {padding:0;}
.detailFolder.reviewType .btnMoreList a {font-size:13px;}


/* .detailFolder .folder.detailImg.active {border-bottom:none; padding-bottom:0; } */
/* .detailFolder .folder.detailImg {padding-bottom:0;} */
.detailFolder .folder.detailImg .contBox .img {text-align: center; height:2860px; overflow:hidden; background:#fbfbfb; border-bottom:1px solid #f2f2f2;;}
.detailFolder .folder.detailImg.expand .contBox .img {height:auto; }
.detailFolder .folder.detailImg.expand .contBox {padding-bottom:80px;}
.detailFolder .folder.detailImg .contBox .more {position: absolute; left:4%; bottom:15px; height:50px; line-height:50px; width:92%;; margin-left:0;text-align: center; font-size:15px; font-weight:700; }
.detailFolder .folder.detailImg .title span {background:url('../images/sub/ico_detail.png') left center no-repeat; background-size:15px auto;}
.detailFolder .folder.delivery .title span {background:url('../images/sub/ico_dil.png') left center no-repeat; background-size:15px auto;}
.detailFolder .folder.warnList .title span {background:url('../images/sub/ico_info2.png') left center no-repeat; background-size:16px auto;}
.detailFolder .folder.question .title span {background:url('../images/sub/ico_list.png') left center no-repeat; background-size:18px auto;}
.detailFolder .folder.review .title span {background:url('../images/sub/ico_review.png') left center no-repeat; background-size:16px auto;}

.detailFolder .folder.warnList .contBox ul li {padding:15px; border-top:1px solid #f2f2f2; display:block; color:#222222; font-size:13px; font-weight:300; }
.detailFolder .folder.warnList .contBox ul li .txt01 {display:block; vertical-align: middle; font-weight:700; width:350px; padding-left:0; margin-bottom:10px;}
.detailFolder .folder.warnList .contBox ul li .txt02 { padding-right:0; padding-left:10px;}
.detailFolder .folder.warnList .contBox ul li .txt02 span {font-weight:500; color :#f76868;}

.detailFolder .folder.question .stateQuestion{position: relative; border-top:1px solid #f2f2f2; border-bottom:1px solid #f2f2f2; padding:10px 0 10px 15px}
.detailFolder .folder.question .stateQuestion .count span {padding-left:20px; font-size:12px; line-height:12px; color:#222222; background:url('../images/sub/ico_info_m.png') left center no-repeat; background-size:16px auto;}
.detailFolder .folder.question .stateQuestion .count em {font-weight:700;}
.detailFolder .folder.question .stateQuestion .goQuestion {position: absolute; right:15px; top:50%; margin-top:-6px; font-size:12px; line-height:12px; font-weight:700; color:#222222;}
.questionList > ul > li .topBox {padding:15px 0; border-bottom:1px solid #f2f2f2; cursor:pointer;}
.questionList > ul > li .topBox:after {content:''; display: block; clear:both;}
.questionList > ul > li .topBox .state {float:left; width:80px; text-align: center; font-size:12px; line-height:12px; color:#aaaaaa; font-weight:300; padding-top:5px;}
.questionList > ul > li .topBox .state.complete {color:#689ef7;}
.questionList > ul > li .topBox .txtWrap {padding-left:80px;}
.questionList > ul > li .topBox .txtWrap .tit {font-size:15px; line-height:inherit; color:#222222; font-weight:700;}
.questionList > ul > li.secret .topBox .txtWrap .tit {padding-left:20px; background:url('../images/sub/ico_sec_m.png') left center no-repeat; background-size:13px auto;}

.questionList > ul > li .hiddenBox {background:#f8f8f8; padding:0 15px; display: none;} 
.questionList > ul > li .hiddenBox .qBox {border-bottom:1px solid #eaeaea;  padding:15px 0 15px 25px; background:url('../images/sub/ico_q_m.png') left 17px no-repeat ;  background-size:15px auto}
.questionList > ul > li .hiddenBox .aBox { padding:15px 0 15px 25px; background:url('../images/sub/ico_a_m.png') left 17px no-repeat ; background-size:15px auto;}
.questionList > ul > li .hiddenBox .tit{font-size:14px; color:#222222; font-weight:700;}
.questionList > ul > li .hiddenBox .prdName {font-size:12px; color:#aaaaaa; font-weight:300; padding-top:10px;}
.questionList > ul > li .hiddenBox .txt {padding:0; font-size:12px;}
.orderListSec .contWrap .questionList > ul > li .hiddenBox .txt {font-size:12px;}


.detailFolder .folder.review {border-bottom:none;}
.detailFolder .folder.review .controlBox {padding:15px 15px; position: relative; border-top:1px solid #f2f2f2; border-bottom:1px solid #f2f2f2;}
.toggleCk {}
.toggleCk label{display: inline-block; font-size:12px; color:#222222; line-height:12px; font-weight:500; padding-left:33px; position: relative;}
.toggleCk input {position: absolute; visibility: hidden;}
.toggleCk label:after {margin-top:-6px; width:26px; height:12px; border-radius:20px;}
.toggleCk label:before { margin-top:-8px; width:14px; height:14px; } 
.toggleCk input:checked + label:before { left:10px; background:#fff url('../images/sub/ico_photo.png') center no-repeat; background-size:6px auto;} 
.detailFolder .folder.review .controlBox .grade {position: absolute; right:15px; top:50%; margin-top:-14px;}
.detailFolder .folder.review .controlBox .grade .count {display: inline-block; vertical-align: middle; font-size:12px; line-height:12px; color:#222222; font-weight:300; margin-right:6px;}
.detailFolder .folder.review .controlBox .grade .count em {font-weight:700;}
.detailFolder .folder.review .controlBox .grade .starList {position: relative; top:-2px; display: inline-block;vertical-align: middle;}
.detailFolder .folder.review .controlBox .grade .write {display: inline-block; vertical-align: middle; font-size:12px; line-height:12px; color:#222222; font-weight:700; margin-left:8px;}
.detailFolder .folder.review .rvList > ul > li {border-bottom:1px solid #f2f2f2;}
.detailFolder .folder.review .rvList > ul > li .titleBox{position: relative; padding:20px 15px; cursor:pointer;}
.detailFolder .folder.review .rvList > ul > li .titleBox .starList{margin-bottom:5px;}
.detailFolder .folder.review .rvList > ul > li .titleBox .title{margin-bottom:5px; font-size:15px; color:#222222; font-weight:700; padding-left: 0; padding-right:70px;}
.detailFolder .folder.review .rvList > ul > li .titleBox .info{}
.detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto {position: absolute; right:15px; top:50%; margin-top:-30px; width:60px; height:60px;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox {background:#f8f8f8; padding:15px; display: none;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide {max-width:100%; position: relative; margin-bottom:15px;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination { position:absolute; width:100%; bottom:5px; text-align: center; font-size: 0;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span {width:5px; height:5px; border-radius:50%; background:#eaeaea; margin-right:5px; opacity:1;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#222222;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .tit01 {font-size:15px; color:#222222; font-weight:700; margin-bottom:15px;}
.detailFolder .folder.review .rvList > ul > li .hiddenBox .txt {font-size:12px; color:#222222; font-weight:300; padding-top:0; padding-left:0;}

.detailBackBg {opacity:0; visibility:hidden; transition:.3s all; position:fixed; left:0; bottom:0; width:100%; height:100%;  z-index:10; background:rgba(0,0,0,.2);}


.prdImgPop .imgSlide .swiper-slide {line-height:100vh; height:100vh; max-height:100%; padding:0 15px 0 15px;}
.prdImgPop .imgSlide .swiper-slide img {height:auto; vertical-align: middle;}
.prdImgPop .imgSlide .swiper-pagination {position: absolute; margin-top:20px;width:100%; bottom:20px; text-align: center; font-size: 0;}
.prdImgPop .imgSlide .swiper-pagination span {width:5px; height:5px; border-radius:50%; background:#888888; margin-right:5px; opacity:1;}
.prdImgPop .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#fff;}
.prdImgPop .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.prdImgPop .closePop {position: absolute; right:15px; top:15px; text-indent:-999em; width:16px; height:16px; background:url('../images/sub/ico_popClose_m.png') center no-repeat; background-size:16px auto; z-index: 10; }

.btnMoreList {text-align: center; margin-top:15px; padding:0 15px; }
.btnMoreList a {display: block; background:#f8f8f8; font-size:15px; font-weight:700; color:#222222; height:50px; line-height:47px; border:1px solid #f2f2f2; max-width:100%; margin:0 auto;}

.fixArea .border {text-align: center; margin-bottom:5px; transition:.3s all; transform:translateY(100%); opacity:0; visibility:hidden}
.fixArea .border span{display: inline-block; background:#fff; width:100px; height:7px; border-radius:20px; }

body.openOrder .detailBackBg {display: block;  opacity:1; visibility:visible;}
body.openOrder .prdAllWrap {z-index:80;}
body.openOrder .prdAllWrap .fixArea {z-index:80;}
body.openOrder .prdAllWrap .fixArea .fixIn {display: block; transform:translateY(0); opacity:1; visibility:visible;}
body.openOrder .fixArea .border { transform:translateY(0); opacity:1; visibility:visible; }


.loginWrap {padding:25px 15px;}
.loginWrap .in {padding:25px 15px;}
.loginWrap .in h2 {font-size:20px; line-height:20px; font-weight:700; margin-bottom:20px; text-align: center; color:#222222;}
.loginWrap .in .formBox .tit {display: none;}


.formBox .tit {display:block; width:100%; font-size:15px; margin-bottom:10px; color:#222222; vertical-align: middle; font-weight:700;}
.formBox .rBox {display:block; }
.formBox .rBox.ckBox {padding-top:0px;}
.formBox .rBox.ckBox .ckType1 {margin-right:20px;}
.formBox .idSave {margin:15px 0 25px 0;}
.formBox .idSave:after {content:''; display: block; clear:both;}
.formBox .idSave .ckType1 {float:left;}
.formBox .idSave .frLink {float:right;}
.formBox .idSave .frLink a {position: relative; display: inline-block; vertical-align: middle; margin-right:15px; font-size:12px; color:#222222; line-height:12px; font-weight:300;}
.formBox .idSave .frLink a:after {content:''; position: absolute; right:-10px; top:50%; width:1px; height:10px; margin-top:-5px; background:#f2f2f2;}
.formBox .idSave .frLink a:last-child {margin-right:0;}
.formBox .idSave .frLink a:last-child:after {display: none;}
.formBox .line {margin-top:15px;}

.ipBox input {width: 100%; border:1px solid #eaeaea; height:50px; padding-left:15px;  font-size:13px; color:#222222; }
.ipBox ::-webkit-input-placeholder  {font-size:13px; color:#888888; font-weight:300;}



.btType01 { height:50px; line-height:50px; font-size:14px; }
.btType01.solo {max-width:100%; margin:0 auto;}
.btType01.h60 { height:50px; line-height:50px;}
.btType01.solo3 {padding:0 15px; font-size:12px; font-weight:500;}

.btnTwo.type2 .left { width:32%;}
.btnTwo.type2 .left a { width:100%;}
.btnTwo.type2 .right {position: absolute; right:0; top:0; width:67%;}
.btnTwo.type2 .right a {width:49%;}



.max {margin:0 auto; max-width:1280px;}
.h2Box {position: relative; text-align: center; padding-bottom:25px; margin:0 -15px 25px -15px; border-bottom:1px solid #eaeaea; padding-top:25px;}
.h2Box h2 {font-size:18px; line-height:18px; color:#222222; font-weight:700;}
.h2Box .btnBack {display: block; top:27px;}

.searchWrap .in {padding:0 15px;}
.searchWrap .in .formBox {max-width:100%; margin:0 auto; background:#fff; padding:25px 15px;}
.searchWrap .in .btnCenter {margin-top:25px;}
.searchWrap .in .phoneType {display: none;}

.tabType1 {max-width:100%; margin:0 0 15px 0; text-align: center; padding:0}
.tabType1 a {font-size:15px; height:50px;  line-height:48px;}

.selBox select {width:100%; height:50px; padding-right:30px; padding-left:15px; font-size:15px; background:url('../images/sub/ico_op_m.png') calc(100% - 15px) center no-repeat; background-size:10px auto; -webkit-appearance: none; -moz-appearance: none; appearance: none }


.addrBox .td {display:table-cell; width:50%; padding-left:10px; vertical-align: top;}
.addrBox .td:first-child {width:230px; padding-left:0;}

.idInfoText {text-align: center; padding-top:40px; background:url('../images/sub/ico_member_m.png') center top no-repeat; background-size:32px auto; font-size:17px; color:#222222; font-weight:300; margin-bottom:15px;}
.idInfoText.type2 { background:url('../images/sub/ico_member2_m.png') center top no-repeat; background-size:32px auto;}
.idInfoText.type3 { background:url('../images/sub/ico_member3_m.png') center top no-repeat; background-size:32px auto;}
.idInfoText.type4 { background:url('../images/sub/ico_member4_m.png') center top no-repeat; background-size:32px auto;}
.idInfoText .tit01 {font-weight:700;}

.idComp {text-align: center;  font-size:15px; color:#222222; font-weight:300; background:#fff; border:1px solid #f5f5f5; padding:20px 0; max-width:100%; margin:0 auto; }
.idComp span {font-weight:700;}

.formBox .infoPw {position: relative; padding-bottom:20px; margin-bottom:5px; border-bottom:1px solid #f2f2f2; text-align: center;}
.formBox .infoPw h3 {font-weight:700; font-size:17px; line-height:17px; color:#222222; text-align: left;}
.formBox .mb {margin-bottom:10px;}

.searchWrap .in .formBox.joinForm {max-width:100%;}
.searchWrap .in .formBox.joinForm .tit {vertical-align: top; padding-top:0;; width:100%;}
.searchWrap .in .formBox.joinForm.mb {margin-bottom:15px;}

.warnText {margin:8px 0 0 0; letter-spacing:-0.05em; text-align: left !important;}
.warnText span {display: inline-block; vertical-align: top; font-size:13px; line-height:1.5; color:#222222; padding-left:23px; background:url('../images/sub/ico_info_m.png') left 2px no-repeat; background-size:16px auto; }
.warnText.red span {color:#f76868; background:url('../images/sub/ico_info_red_m.png') left 2px no-repeat;  background-size:16px auto; }
.warnText.blue span {color:#689ef7; background:url('../images/order/ico_info2_m.png') left 2px no-repeat; background-size:16px auto;   font-weight:300; }
.warnText.white  {padding:20px 15px; margin-bottom:25px; }



.toggleAgree {padding-top:15px;}
.toggleAgree ul li {padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid #f2f2f2;}
.toggleAgree ul li .title .arrow {position: absolute; right:0; top:10px; width:15px; height:10px; background:url('../images/sub/ico_op_m.png') center no-repeat; background-size:15px auto; text-indent:-999em;}
.toggleAgree ul li .hiddenText {font-size:12px; color:#222222; padding:15px; margin-top:20px; height:150px; overflow-y:auto;}


.mypageWrap {background:#f8f8f8; padding-top:0;}
.mypageWrap .mySec {margin-bottom:20px; padding:0 15px;}
.mypageWrap .mySec .sec {float:none; width:100%;}
.mypageWrap .mySec .sec .tit { font-size:17px; line-height:17px; margin-bottom:15px;}
.mypageWrap .mySec .sec .tit span {padding-left:23px; background:url('../images/sub/ico_my2_m.png') left center no-repeat; background-size:15px auto;}
.mypageWrap .mySec .sec .box .grid {background:#fff; border:1px solid #f2f2f2; padding:23px 0 23px 23px; min-height:100%; }
.mypageWrap .mySec .sec .box:after {content:''; display: block; clear:both;}
.mypageWrap .mySec .sec .box .topUser {position: relative; padding-right:130px;}
.mypageWrap .mySec .sec .box .topUser .name{font-size:15px; color:#222222; font-weight:300; margin-bottom:10px;}
.mypageWrap .mySec .sec .box .topUser .name span {font-weight:700;}
.mypageWrap .mySec .sec .box .topUser .info span {font-size:12px; line-height:12px; font-weight:300; color:#888888;}
.mypageWrap .mySec .sec .box .topUser .info span:first-child {margin-right:15px; position: relative;}
.mypageWrap .mySec .sec .box .topUser .info span:first-child:after {content:''; position: absolute; right:-10px; top:50%; margin-top:-5px; width:1px; height:10px; background:#f2f2f2;}
.mypageWrap .mySec .sec .box .topUser .rightbtn {position: absolute; right:15px; top:-5px; margin-top:0; width:120px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p:first-of-type {margin-bottom:5px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p a {display: block; padding:0 14px 0 14px; height:30px; line-height:30px; font-size:12px; border-radius:20px;}
.mypageWrap .mySec .sec .box .topUser .rightbtn p a span{display: block; background:url('../images/sub/ico_myArrow01_m.png') right center no-repeat; background-size:6px auto;}

.mypageWrap .mySec .sec.no2 {float:none; width:100%; margin-top:30px;}
.mypageWrap .mySec .sec.no2 .tit span { background:url('../images/sub/ico_my_m.png') left center no-repeat; background-size:17px auto;}
.mypageWrap .mySec .sec.no2 .box .grid {float:left; width:49%; margin-left:0; margin-bottom:2%; padding:25px;}
.mypageWrap .mySec .sec.no2 .box .grid:nth-child(2n) {margin-left:2%;}
.mypageWrap .mySec .sec.no2 .box .grid:first-child {margin-left:0;}
.mypageWrap .mySec .sec.no2 .box .grid a {display: block;}
.mypageWrap .mySec .sec.no2 .box .grid a .name { font-size:14px; line-height:14px; color:#888888; font-weight:300; background:url('../images/sub/ico_myArrow02_m.png') right center no-repeat; background-size:5px auto; margin-bottom:15px;}
.mypageWrap .mySec .sec.no2 .box .grid a .count { font-size:20px; line-height:20px; color:#222222; font-weight:700}

.mypageWrap .myBottom {background:#fff; padding:30px 15px 25px 15px;}
.mypageWrap .myBottom .btnMy {background:#222222; position: relative; padding:15px 125px 15px 20px; margin-bottom:15px;}
.mypageWrap .myBottom .btnMy .tit {font-size:14px; line-height:14px; color:#fff; font-weight:700; padding-left:22px; background:url('../images/sub/ico_my3_m.png') left center no-repeat; background-size:15px auto;}
.mypageWrap .myBottom .btnMy a {position: absolute; right:15px; top:50%; transform:translateY(-50%); font-size:13px; line-height:13px; color:#fff; font-weight:300; padding-right:15px; background:url('../images/sub/ico_my4_m.png') right center no-repeat; background-size:5px auto;}
.mypageWrap .myBottom .btnMy a span {font-weight:700; color:#bf94a2;}
.mypageWrap .myBottom .lst ul {display:block;}
.mypageWrap .myBottom .lst ul:after {content:''; display: block; clear:both;}
.mypageWrap .myBottom .lst ul li {flex:2; float:left;  width:50%; border:1px solid #f2f2f2; margin-left:-1px; margin-bottom:-1px; }
.mypageWrap .myBottom .lst ul li a {display: block; height:50px; line-height:50px; padding-top:0; padding-left:20px; text-align: left; }
.mypageWrap .myBottom .lst ul li a span {display: block; padding-top:0; padding-left:27px; font-size:14px; line-height:50px; color:#222222; font-weight:700;}
.mypageWrap .myBottom .lst ul li.no1 a span {background:url('../images/sub/ico_my5_m.png') left center no-repeat; background-size:18px auto;}
.mypageWrap .myBottom .lst ul li.no2 a span {background:url('../images/sub/ico_my6_m.png') left center no-repeat; background-size:16px auto;}
.mypageWrap .myBottom .lst ul li.no3 a span {background:url('../images/sub/ico_my7_m.png') left center no-repeat; background-size:17px auto;}
.mypageWrap .myBottom .lst ul li.no4 a span {background:url('../images/sub/ico_my8_m.png') left center no-repeat; background-size:15px auto;}
.mypageWrap .myBottom .lst ul li.no5 a span {background:url('../images/sub/ico_my9_m.png') left center no-repeat; background-size:15px auto;}
.mypageWrap .myBottom .lst ul li.no6 a span {background:url('../images/sub/ico_my10_m.png') left center no-repeat; background-size:15px auto;}
.mypageWrap .myBottom .lst ul li.no7 a span {background:url('../images/sub/ico_my11_m.png') left center no-repeat; background-size:18px auto;}
.btnLink {padding-top:10px; padding-bottom:50px;}
.btnLink a {display: block; font-size:15px; color:#222222; font-weight:700; padding:15px 0 15px 15px; background:#fff;}


.boardWrap {background: #f8f8f8; padding:0 0 50px 0;}

.boardWrap .warnText {background:#fff; text-align: center; padding:15px; border:1px solid #f2f2f2; margin:0 15px 20px 15px}

.boardTab {font-size: 0; margin-bottom:20px; text-align: center;}
.boardTab ul {white-space:nowrap; overflow-x:auto}
.boardTab ul li{display: inline-block; vertical-align: top; margin-left:20px;}
.boardTab ul li a{position: relative; display: inline-block; padding-bottom:10px; font-size:12px; line-height:12px; color:#888888; font-weight:300;}
.boardTab ul li.active a:after {content:''; position: absolute; left:0; bottom:-1px; width:100%; height:2px; background:#222; }

.listBoard {position: relative; padding:20px 15px 15px 15px; border-top:1px solid #eaeaea;}
.listBoard .btnWrite {position: static;}
.listBoard .btnWrite a { width:100%; height:45px; line-height:43px;}

.listBoard .formSearch {margin-bottom:20px;}
.listBoard .formSearch .box {display:table; width:100%;}
.listBoard .formSearch .box > div {display:table-cell; }
.listBoard .formSearch .box > div.selBox {width:120px; background:#fff;}
.listBoard .formSearch .box > div.selBox select {border:1px solid #222222; height:40px;  font-weight:700; color:#222222; padding-top:5px; font-size:14px;}
.listBoard .formSearch .box > div.ipBox {padding-left:10px; position: relative;}
.listBoard .formSearch .box > div.ipBox input {height:40px;}
.listBoard .formSearch .box > div.ipBox a {position: absolute; right:15px; top:50%; margin-top:-11px; width:20px; height:22px; background:url('../images/sub/ico_my5_m.png') center no-repeat;  background-size:15px auto; text-indent:-999em;}

.listType2 {background:#fff; padding:15px 10px 0 10px; border:1px solid #f2f2f2; margin-bottom:15px; }
.listType2 .theadBox ul {display:table; width:100%; padding-bottom:15px; border-bottom:2px solid #222;}
.listType2 .theadBox ul li {display:table-cell; vertical-align: top; font-size:14px; line-height:14px; color:#222222; font-weight:500; text-align: center;}
.listType2 .theadBox ul li.size1 {width:50px;}
.listType2 .theadBox ul li.size3 {width:150px;}
.listType2 .theadBox ul li.size4 {width:150px;}
.listType2 .theadBox ul li.pc {display: none;}

.listType2 .tbodyBox ul li a {position: relative;display:table; width:100%;border-bottom:1px solid #eaeaea; font-size:12px; line-height:1.5; color:#222222; font-weight:300; text-align: left; padding:10px 0;  padding-left:60px;}
.listType2 .tbodyBox ul li a > div {display:block; }
.listType2 .tbodyBox ul li a > div.title {text-align: left; font-size:13px; margin-bottom:5px;}
.listType2 .tbodyBox ul li a > div.num {width:50px; position: absolute; left:0; top:50%; margin-top:-10px; text-align: center;}
.listType2 .tbodyBox ul li a > div.info {display: block; width:auto; font-size:12px; color:#aaaaaa; text-align: left; display: inline-block; vertical-align: middle; margin-right:10px;}

.notiTxt {display: inline-block; vertical-align: middle; min-width:35px; height:18px; font-size:12px; line-height:18px; color:#fff; background:#222; padding:0 3px; font-weight:500;margin-right:5px; }

.paging {text-align: center; padding:20px 0;}
.paging a {display: inline-block; vertical-align: middle; width:25px; height:25px; line-height:23px;}
.paging span {display: inline-block; vertical-align: middle; }
.paging > a { text-indent:-999em; }
.paging > a.first {background:url('../images/sub/ico_prev2_m.png') center no-repeat; background-size:13px auto;}
.paging > a.prev {background:url('../images/sub/ico_prev_m.png') center no-repeat;background-size:6px auto;}
.paging > a.next {background:url('../images/sub/ico_next_m.png') center no-repeat;background-size:6px auto;}
.paging > a.last {background:url('../images/sub/ico_next2_m.png') center no-repeat;background-size:13px auto;}
.paging .num {margin:0 7px;}
.paging .num a {position: relative; font-size:12px; color:#888888; font-weight:300; margin:0 2px;  border:none; line-height:23px;}
.paging .num a.active {font-weight:700; color:#222222; border:1px solid #222;}

.writeBoard {padding:15px; border-top:1px solid #eaeaea;}
.writeBoard.type2 {padding:20px 0 0 0;}
.writeBoard .formBox {background:#fff; padding:15px; margin-bottom:0;}
.writeBoard .formBox .tit {vertical-align: top; padding-top:10px;; width:120px;}
.writeBoard .formBox .tit.vm {vertical-align: middle; padding-top: 0;}

.formEdit {background:#f8f8f8; padding:15px; margin:10px 0; font-size:12px;}
.formEdit img {width:auto !important; height:auto !important;}

.fileBox {position: relative; padding-right:0;}
.fileBox .fileList {border:1px solid #cccccc; height:45px; line-height:43px;}
.fileBox .fileList span {display: inline-block; margin-left:10px; font-size:12px; color:#222222; font-weight:300;}
.fileBox .fileList span a {display: inline-block; vertical-align: middle; text-indent:-999em; margin-left:5px; width:11px; height:11px; background:url('../images/sub/ico_fileDel_m.png') center no-repeat; background-size:11px auto;}
.fileBox .fakeFile {position: relative; right:0; top:0; width:100%; margin-top:10px; overflow:hidden;}
.fileBox .fakeFile input {position: absolute; right:0; top:0; width:750px; height:100%; opacity:0; z-index: 10; font-size: 100px; cursor:pointer;}
.fileBox .fakeFile a {height:45px; line-height:43px;}

.formBox .writeTd {display:table; width: 100%;}
.formBox .writeTd .selBox {width:100%; display:block; margin-bottom:5px;}
.formBox .writeTd .ipBox {padding-left: 0;display:block; }
.formBox .writeTd .ipBox input {border:1px solid #ccc}
.formBox .writeTd .ipBox.size01 input {width:100%;}
.formBox .writeTd .ckBox2 {display:block; padding:0 0 0 0; width:100%; margin-bottom:10px;}
.formBox .writeTd .ckBox2 .ckType1 {margin-right:10px;}
.formBox .textarea textarea {height:150px; padding:15px; font-size:13px; color:#222; width:100%; }


.formBox .titleArea {position: relative; padding-bottom:20px; padding-right:0; margin-bottom:20px; border-bottom:1px solid #eaeaea; }
.formBox .titleArea .title .notiTxt {text-align: center;}
.formBox .titleArea .title p{display: inline-block; vertical-align: middle; font-size:14px; color:#222222; font-weight:500; margin-left:10px;}  
.formBox .titleArea .rInfo {position: static; right:0; top:0; padding-top:10px;}
.formBox .titleArea .rInfo:after {content:''; display: block; clear:both;}
.formBox .titleArea .rInfo > div {display: inline-block; vertical-align: middle; font-size:12px; font-weight:300; color:#222222;}
.formBox .titleArea .rInfo > div a {font-size:12px; font-weight:300; color:#222222;}
.formBox .titleArea .rInfo > div.date {float:left; color:#aaaaaa;}
.formBox .titleArea .rInfo > div.date span:first-child {margin-left:0; padding-left: 0;}
.formBox .titleArea .rInfo > div.date span:first-child:after {display: none;}
.formBox .titleArea .rInfo > div.func {float:right; color:#aaaaaa;}
.formBox .titleArea .rInfo > div.func span:first-child:after {display: none;}
.formBox .titleArea .rInfo > div span {position: relative; padding-left:10px; margin-left:10px;}
.formBox .titleArea .rInfo > div span:after {content:''; position: absolute; left:0; top:50%; width:1px; height:10px; margin-top:-5px; background:#eaeaea;}
.formBox .upList a {display: inline-block; vertical-align: middle; font-size:12px; line-height:12px; color:#222222; padding-left:20px; margin-right:15px; background:url('../images/sub/ico_down_m.png') left center no-repeat; background-size:15px auto;}

.searchPrd {background:#fff; padding:10px 10px 10px 110px; min-height:110px; position: relative;  border:1px solid #f2f2f2; margin:0 0 15px 0; letter-spacing:-0.05em;}
.searchPrd .img {position: absolute; left:10px; top:10px; width:90px; height:90px; border:1px solid #f2f2f2; border-radius:5px; overflow:hidden; background:#f8f8f8;}
.searchPrd .img img {display: none;}
.searchPrd .txtWrap {padding:0 0 10px 0;}
.searchPrd .txtWrap .tit01 {margin:0 0 5px 0; font-size:12px; font-weight:300; color:#222222; background:#f8f8f8; width:100%; height:15px; text-indent:-999em; }
.searchPrd .txtWrap .tit02 {font-size:12px; font-weight:300; color:#222222; background:#f8f8f8; width:90px; height:15px;  text-indent:-999em;}
.searchPrd .txtWrap .tit02 span {font-size:13px; font-weight:700;}
.searchPrd .btnSearch {display: block; position:static; right:auto; top:auto; bottom:10px; left:110px;  width:100%; height:40px; line-height:38px; margin-top:0; text-align: center; font-size:12px; color:#222222; font-weight:500; border:1px solid #222;}
.searchPrd.viewType .txtWrap{padding-top:25px;}

.searchPrd.active .img img {display: block;}
.searchPrd.active .txtWrap .tit01  {background:none; height:auto; margin-bottom:3px ;  text-indent:0;}
.searchPrd.active .txtWrap .tit02  { background:none; height:auto;  text-indent:0;}


.prdSearchPop {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999; }
.prdSearchPop .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; background:rgba(0,0,0,.2);}
.prdSearchPop .in {position: fixed; left:15px; top:50%;  transform:translateY(-50%); width:calc(100% - 30px); margin-left:0;  z-index:10; background:#fff; padding:20px 15px 15px 20px;}
.prdSearchPop .in .title {font-size:15px; line-height:15px; color:#222222; font-weight:700; text-align: center; padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid #f2f2f2;}
.prdSearchPop .in .searchPop {display:table; width:100%; margin-bottom:15px;}
.prdSearchPop .in .searchPop .ipBox {display:table-cell; padding-right:5px;}
.prdSearchPop .in .searchPop a {display:table-cell; width:110px; background:#222222; text-align: center; font-size:13px; font-weight:700; color:#fff;}
.prdSearchPop .in .prdList {background:#f8f8f8; padding:0 10px; padding-top:0;}
.prdSearchPop .in .prdList ul {}
.prdSearchPop .in .prdList ul li {position: relative; padding:10px 0 10px 60px;   border-bottom:1px solid #eaeaea;}
.prdSearchPop .in .prdList ul li:last-child { border-bottom:none;}
.prdSearchPop .in .prdList ul li .img {position: absolute; left:0; top:10px; width:50px; height:50px; border:1px solid #f2f2f2;}
.prdSearchPop .in .prdList ul li .txtWrap {font-size:12px; color:#222222; font-weight:300; padding-top:5px; padding-right:55px;}
.prdSearchPop .in .prdList ul li .txtWrap .tit01 { white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.prdSearchPop .in .prdList ul li .txtWrap .tit02 {font-size:12px; padding-top:5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.prdSearchPop .in .prdList ul li .txtWrap .tit02 span {font-weight:700;}
.prdSearchPop .in .prdList ul li .btnSel {position: absolute; right:0; top:50%;  width:45px; height:25px; line-height:23px; margin-top:-10px; background:#222222; color:#fff; text-align: center; font-size:11px;}
.prdSearchPop .in .prdList ul li .btnSel span {padding-right:10px; background:url('../images/sub/ico_prdArrow_m.png') right center no-repeat; background-size:4px auto;}
.prdSearchPop .in .closePop {position: absolute; right:10px; top:10px; width:22px; height:22px; text-indent:-999em; background:url('../images/sub/ico_list_del_m.png') center no-repeat; background-size:15px auto; }


.prdSearchPop .boardTab {margin-bottom:15px;}
.prdSearchPop .tabCont .contBox {display: none;}
.prdSearchPop .tabCont .contBox.active {display: block;}
.prdSearchPop .my .prdList {padding-top:10px;}
.prdSearchPop .my .prdList ul li {padding:0;}
.prdSearchPop .my .prdList ul li .basePrd .img {width:60px; height: 60px; position: static;}
.prdSearchPop .my .prdList ul li .btnSel {right:0; top:0; margin-top:0;}
.prdSearchPop .my .prdList ul li .basePrd .txtWrap {padding-left:70px; padding-right:10px; padding-top:0;}
.prdSearchPop .my .prdList ul li .basePrd .txtWrap .txt .tit01 {letter-spacing:-1px;}

.prdSearchPop .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:20px;}
.prdSearchPop .scrollBox .inSc .mCSB_container.mCS_no_scrollbar_y {padding-right:0;}


/* scrollBox */
.scrollBox .inSc {position: relative; height:200px;  overflow:auto;}
.scrollBox .inSc .mCSB_inside>.mCSB_container {margin-right:0;  padding-right:15px;}
.scrollBox .inSc .mCSB_scrollTools {opacity:1 !important; width:5px;}
.scrollBox .inSc .mCSB_dragger .mCSB_dragger_bar {background-color:#cccccc !important; width:5px; border-radius:0px; }
.scrollBox .inSc .mCSB_draggerRail {background:none;width:10px;}

.ipBox.h60 input {height:40px;}
.selBox.h60 select {height:40px;}

.btnTwo.type1 {width: 100%; padding:0 15px;}
.btnTwo.type1.editOrder {width: 100%; padding:0; margin-top:20px;}
.btnTwo.type1.nonePd {padding:0;}
.btnTwo.type1 a {height:45px; line-height:43px;}

.mpd15 {padding:0 15px;}


.grayContainer {background:#f8f8f8; padding:0 15px 40px 15px; max-width:100%; border-top:none;}
.orderListSec {padding:0 15px; background:#fff; margin-bottom:15px; border:1px solid #f2f2f2;}
.orderListSec .titleWrap {position: relative; padding:25px 0; text-align: left; }
.orderListSec .titleWrap .tit {display: inline-block; font-size:16px; line-height:16px; vertical-align: middle; font-weight:700; margin-right:5px;}
.orderListSec .titleWrap .warnText {display: block; vertical-align: middle; padding:0; margin:0; margin-top:10px;}
.orderListSec .titleWrap .warnText {font-size:10px;}
.orderListSec .titleWrap .toggle {position: absolute; right:0; top:50%; margin-top:-5px; width:16px; height:10px; text-indent:-999em; background:url('../images/order/ico_toggle_m.png') center no-repeat; background-size:16px auto;}
.orderListSec .titleWrap .count {display: inline-block; font-size:13px; }
.orderListSec .contWrap {position: relative; padding:15px 0; border-top:1px solid #eaeaea; display: none;}
.orderListSec .contWrap:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .tit{ font-size:13px; line-height:13px; font-weight:500; margin-bottom:15px; }
.orderListSec .contWrap .rangeSet {width:100%; display:block; vertical-align: top; margin-bottom:10px;}
.orderListSec .contWrap .rangeSet:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rangeSet div {float:left; width:19%; margin-left:1%;}
.orderListSec .contWrap .rangeSet div:first-child {margin-left: 0;}
.orderListSec .contWrap .rangeSet div label {display: block; height:45px; line-height:43px; border:1px solid #eaeaea; text-align: center; font-size:13px; color:#888888; font-weight:300;  }
.orderListSec .contWrap .rangeSet div input:checked + label { border:1px solid #222222;  color:#222222; font-weight:500;  }
.orderListSec .contWrap .dateRange {display: inline-block; vertical-align: top; width:100%; margin-left:0;}
.orderListSec .contWrap .dateRange .cmsDate {display:table; width:100%; padding-left:50px; background:url('../images/order/ico_cal_m.png') left center no-repeat; background-size:24px auto;}
.orderListSec .contWrap .dateRange .cmsDate span {display:table-cell; width:44%;}
.orderListSec .contWrap .dateRange .cmsDate button {display: none;}
.orderListSec .contWrap .dateRange .cmsDate input {border:1px solid #eaeaea; text-align: center; height:45px;  width:100%; font-size:13px; font-weight:300;}
.orderListSec .contWrap .dateRange .cmsDate .line {width:45px; text-align: center; font-size:13px; color:#222222; font-weight:300;}
.orderListSec .contWrap .prdSearch {position: relative; margin-top:10px; padding-right:0; }
.orderListSec .contWrap .prdSearch:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .prdSearch .tit {display: inline-block;  vertical-align: middle; padding-top:15px; width:75px; float:left; }
.orderListSec .contWrap .prdSearch .selBox { width:90px;  }
.orderListSec .contWrap .prdSearch .selBox select {height:45px; font-size:13px;}
.orderListSec .contWrap .prdSearch .ipBox {position: relative; width:100%; padding-left:75px;}
.orderListSec .contWrap .prdSearch.type2 .ipBox {padding-left:100px;}
.orderListSec .contWrap .prdSearch .ipBox input {height:45px;}
.orderListSec .contWrap .prdSearch .ipBox .search {position: absolute; right:15px; top:50%; margin-top:-11px; width:20px; height:22px; text-indent:-999em; background:url('../images/order/ico_search.png') center no-repeat; display: none;}
.orderListSec .contWrap .prdSearch .btnTwo {position: static; width:100%; padding:0; padding-top:10px;}

.orderListSec .contWrap .title {padding:15px 0 15px 15px; background:#fff; font-size: 0;}
.orderListSec .contWrap .title span {display: inline-block; vertical-align: top; font-size:15px; line-height:15px; color:#222222; font-weight:700; padding-left:10px; position: relative;}
.orderListSec .contWrap .title span:after {content:''; position: absolute; left:0; top:0; width:2px; height:100%; background:#222;}
.orderListSec .contWrap .leftInfo {position:static; left:0; top:50px;  width:100%; height:auto; border:1px solid #222222; background:#f8f8f8; }
.orderListSec .contWrap .leftInfo .box {padding:15px;}
.orderListSec .contWrap .leftInfo .box .dateInfo {padding-bottom:15px;  letter-spacing:-0.05em;}
.orderListSec .contWrap .leftInfo .box .dateInfo .date {font-size:12px; color:#222222; font-weight:300; margin-bottom:0; display: inline-block; vertical-align: middle; margin-right:10px;}
.orderListSec .contWrap .leftInfo .box .dateInfo .date span {font-weight:700; font-size:13px;}
.orderListSec .contWrap .leftInfo .box .dateInfo .num {font-size:12px; color:#888888; font-weight:300; vertical-align: middle; display: inline-block;}
.orderListSec .contWrap .leftInfo .box .dateInfo .num a {font-size:13px; color:#222222; font-weight:500; padding-right:15px; margin-left:10px; background:url('../images/order/ico_btn01_m.png') right center no-repeat; background-size:5px auto; }
.orderListSec .contWrap .leftInfo .box .prdInfo {position: relative; left:0; bottom:0; padding:15px 15px 0 0;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl {margin-bottom:0;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl dt {display: inline-block; vertical-align: middle; font-size:12px; line-height:12px; color:#222222; font-weight:700; width:70px;}
.orderListSec .contWrap .leftInfo .box .prdInfo dl dd {display: inline-block; vertical-align: middle; font-size:12px; line-height:12px; color:#888888; font-weight:300; }
.orderListSec .contWrap .leftInfo .box .prdInfo .total {position: absolute; right:0; bottom:0; text-align: right; padding-top:40px;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .txt { font-size:13px; line-height:13px; color:#222222; font-weight:700; margin-bottom:5px;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .price { font-size:13px; line-height:13px; color:#222222; font-weight:300;}
.orderListSec .contWrap .leftInfo .box .prdInfo .total .price span { font-size:16px; line-height:16px; color:#f76868; font-weight:700;}

.orderListSec .contWrap .rightInfo {position: relative; margin-left:0; margin-top:10px;}
.orderListSec .contWrap .rightInfo .title {border:1px solid #222222; margin-bottom:0;}
.orderListSec .contWrap .rightInfo .detailBox {border:1px solid #eaeaea; border-top:none; min-height:auto;}
.orderListSec .contWrap .rightInfo .topPrd {position: relative; padding:15px;}
.orderListSec .contWrap .rightInfo .topPrd:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .topPrd .img {float:left; width:80px; height:80px; border:1px solid #f2f2f2;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap {padding-left:90px; margin-bottom:15px;padding-right:0;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit01 {font-size:13px; color:#222222; font-weight:300; margin-bottom:0;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit02 {font-size:12px; color:#aaaaaa; font-weight:300; margin-bottom:5px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 {font-size:12px; color:#222222; font-weight:300;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span {position: relative; margin-right:10px; padding-right:10px;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:10px; margin-top:-5px; background:#eaeaea;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span em {font-size:13px; font-weight:700;}
.orderListSec .contWrap .rightInfo .topPrd .txtWrap .tit03 span:last-child:after {display: none;}
.orderListSec .contWrap .rightInfo .topPrd .btn {position: static; width:100%; font-size: 0; clear:both; margin-top:10px;}
.orderListSec .contWrap .rightInfo .topPrd .btn p {margin-bottom:10px; width:48%; display: inline-block; vertical-align: top;}
.orderListSec .contWrap .rightInfo .topPrd .btn p:nth-child(2n) {margin-left:2%;}
.orderListSec .contWrap .rightInfo .topPrd .btn p a{position: relative; height:30px; line-height:28px; padding-left:10px; font-size:11px; color:#222222; font-weight:300; display: block; background:#f8f8f8; border:1px solid #f2f2f2; border-radius:30px; }
.orderListSec .contWrap .rightInfo .topPrd .btn p a:after {content:''; position: absolute; right:10px; top:50%; margin-top:-5px; width:6px; height:10px; background:url('../images/order/ico_btn01_m.png') center no-repeat; background-size:5px auto;}

.orderListSec .subTitle {font-size:13px;  margin-bottom:20px; margin-top:20px; padding-left: 8px;}
.orderListSec .subTitle:after {content:''; position: absolute; left:0; top:5px; width:2px; height:10px; background:#222222;}


.stepList {padding:0 15px;}
.stepList ul {padding:15px 0; border-top:1px solid #f2f2f2;}
.stepList ul:after {content:''; display: block; clear:both;}
.stepList ul li {position: relative; float:left; padding-right:13.2%; padding-top:25px;}
.stepList ul li:nth-child(5) .tit { transform-origin:right center; }

.stepList ul li .round {width:25px; height:25px; position: relative;}
.stepList ul li .tit {font-size:10px; line-height:10px; color:#888888; font-weight:300; margin-bottom:0; position: absolute; width:100%; white-space:nowrap; left:50%; top:-20px; transform:translateX(-50%) scale(.65); min-width:100px; text-align: center; }
.stepList ul li:last-child {padding-right: 0;}
.stepList ul li:first-child .tit {left:0;  transform:translateX(0) scale(.65); min-width:auto; }
.stepList ul li:last-child .tit {left:auto; right:0; text-align: right;  transform:translateX(0) scale(.65);  }
.stepList ul li .num {position: relative; z-index:5;display: inline-block; vertical-align: top; width: 25px; height: 25px; line-height:23px; background:#fff; border:2px solid #eaeaea; font-size:10px; color:#eaeaea; font-weight:700; border-radius:50%;  text-align: center;}
.stepList ul li:after {bottom:12px; width:100%; height:2px; background:#eaeaea; }

.stepList.seven {border:1px solid #f2f2f2; margin-bottom:25px; padding:25px 25px 5px 25px; background:#fff;}
.stepList.seven ul {padding:0; border-top:none;}
.stepList.seven li {padding-right:21.7% !important; margin-bottom:10px;}
.stepList.seven li .tit { transform:translateX(-50%) scale(1) !important;}
.stepList.seven li:nth-child(4) {padding-right:0 !important;}
.stepList.seven li:nth-child(4):after {display: none;}
.stepList.seven li:last-child {padding-right:0 !important;}
.stepList.seven li:last-child .tit { transform:translateX(20%) scale(1) !important;}

.stepList.eight {border:1px solid #f2f2f2; margin-bottom:25px; padding:25px 25px 5px 25px; background:#fff;}
.stepList.eight ul {padding:0; border-top:none;}
.stepList.eight li {padding-right:21.2% !important; margin-bottom:10px;}
.stepList.eight li .tit { transform:translateX(-50%) scale(1) !important;}
.stepList.eight li:nth-child(1) .tit {min-width:100px !important; left:50%}
.stepList.eight li:nth-child(4) {padding-right:0 !important;}
.stepList.eight li:nth-child(4):after {display: none;}
.stepList.eight li:last-child {padding-right:0 !important;}
.stepList.eight li:last-child .tit { transform:translateX(0%) scale(1) !important;}



.orderListSec .contWrap .rightInfo .detailBox .myCheck { margin:0 15px; padding:15px 0; border-top:1px solid #f2f2f2;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .txt {font-size:13px; line-height:13px; color:#222222; font-weight:500; padding:3px 0 3px 25px; background:url('../images/order/ico_heart_m.png') left center no-repeat; background-size:17px auto; margin-bottom:15px;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a {position: relative; float:left; width:49%; margin-left:0; margin-bottom:2%; background:#f8f8f8; height:40px; line-height:38px; border:1px solid #eaeaea; font-size:11px; color:#aaaaaa; text-align: center; font-weight:300; }
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a:nth-child(2n) {margin-left:2%;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a.active {color:#fff; font-weight:500; border:none; background:#222;}
.orderListSec .contWrap .rightInfo .detailBox .myCheck .link a .pr {transform:scale(.5); transform-origin:right bottom;}

.orderListSec .contWrap .rightInfo .borderPrd {border:1px solid #eaeaea; margin-bottom:10px;}
.orderListSec .contWrap .rightInfo .addrInfo {border:1px solid #eaeaea; padding:15px; letter-spacing:-0.05em; background:#f8f8f8;}
.orderListSec .contWrap .rightInfo .addrInfo dl {margin-bottom:5px;}
.orderListSec .contWrap .rightInfo .addrInfo dl:last-child {margin-bottom:0;}
.orderListSec .contWrap .rightInfo .addrInfo dl:after {content:''; display: block; clear:both;}
.orderListSec .contWrap .rightInfo .addrInfo dl dt {float:left; font-size:12px;  font-weight:700; color:#222222; }
.orderListSec .contWrap .rightInfo .addrInfo dl dd {padding-left:70px; font-size:12px;  font-weight:300; color:#888888;}

.orderListSec .contWrap .rightInfo .grid {margin-right:0;}
.orderListSec .contWrap .rightInfo .grid.right {position: static; width:100%; height:100%; margin-right:0; margin-top:10px;  }
.orderListSec .contWrap .rightInfo .grid.right .dilInfo {border:1px solid #eaeaea; position: relative; height:auto; padding:15px 15px 70px 15px;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 {font-size:12px; color:#222222; font-weight:300; display: inline-block; vertical-align: top; width:49%;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span {color:#cccccc; font-weight:700;font-size:14px;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span.ing {color:#689ef7}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .tit01 span.complete {color:#f76868}

.orderListSec.cancel  .contWrap .rightInfo .grid.right .dilInfo {padding-bottom:15px;}


.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom {position: static; padding:0; width:49%; padding-left:15px;  border-left:1px solid #eaeaea; display: inline-block; vertical-align: top;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit01 {font-weight:700; margin-bottom:2px; display: block; width:100%;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit02 {font-size:12px; color:#222222; font-weight:300; margin-bottom:0; margin-top:0;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .tit03 {font-size:12px; margin:0 0 10px 0;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .btn {position: absolute; left:15px; bottom:10px; width:calc(100% - 30px);}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .btn a {font-size:12px; color:#aaaaaa; border:1px solid #f2f2f2; background:#f8f8f8; font-weight:300; display: block; height:40px; line-height:38px; text-align: center;}
.orderListSec .contWrap .rightInfo .grid.right .dilInfo .bottom .btn a.active {background:#222; color:#fff;}
.orderListSec .contWrap .dilSection {position: relative; margin-bottom:25px;}
.orderListSec .contWrap .dilSection:last-child {margin-bottom:0;}
.orderListSec .contWrap .dilSection .leftInfo {height:100%; top:0;}

.orderDetailGrid .leftBox {float:none; width: 100%; padding:25px 15px 25px 15px; margin-bottom:20px; }
.orderDetailGrid .leftBox .dateInfo {border-bottom:1px solid #eaeaea; padding-bottom:20px; margin-bottom:20px;}
.orderDetailGrid .leftBox .dateInfo .date {float:left; font-size:14px; line-height:14px; color:#222222; font-weight:700; }
.orderDetailGrid .leftBox .dateInfo .num {float:right; font-size:13px; line-height:13px; color:#222222; font-weight:300; }
.orderDetailGrid .leftBox .dateInfo .num span {border-bottom:1px solid #222;}
.orderDetailGrid .leftBox .prd {position: relative; padding-right:0;}
.orderDetailGrid .leftBox .prd:after {content:''; display: block; clear:both;}
.orderDetailGrid .leftBox .prd .img {float:left; width:80px; height:80px; border:1px solid #f2f2f2;}
.orderDetailGrid .leftBox .prd .txtWrap {padding-left:90px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit01 {font-size:13px; color:#222222; font-weight:300; margin-bottom:5px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit02 {font-size:12px; color:#aaaaaa; font-weight:300; margin-bottom:10px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 {font-size:12px; color:#222222; font-weight:300;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span {position: relative; margin-right:8px; padding-right:8px;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:12px; margin-top:-6px; background:#eaeaea;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span em {font-size:13px; font-weight:700;}
.orderDetailGrid .leftBox .prd .txtWrap .tit03 span:last-child:after {display: none;}

.orderDetailGrid .leftBox .prd .btn {position: static; width:100%; font-size: 0; clear:both; padding-top:10px;}
.orderDetailGrid .leftBox .prd .btn p {margin-bottom:10px; width:48%; display: inline-block; vertical-align: top;}
.orderDetailGrid .leftBox .prd .btn p:nth-child(2n) {margin-left:2%;}
.orderDetailGrid .leftBox .prd .btn p a{position: relative; height:30px; line-height:28px; padding-left:10px; font-size:11px; color:#222222; font-weight:300; display: block; background:#f8f8f8; border:1px solid #f2f2f2; border-radius:30px; }
.orderDetailGrid .leftBox .prd .btn p a:after {content:''; position: absolute; right:10px; top:50%; margin-top:-5px; width:6px; height:10px; background:url('../images/order/ico_btn01_m.png') center no-repeat; background-size:5px auto;}


.orderDetailGrid .rightBox {float:none; width: 100%; padding:25px 15px 25px 15px;}
.orderDetailGrid .rightBox .sec {border-bottom:1px solid #222222; padding-bottom:20px; margin-bottom:20px;}
.orderDetailGrid .rightBox .sec:last-child {padding-bottom: 0; margin-bottom: 0; border-bottom:none;}
.orderDetailGrid .rightBox .sec .title {font-size:15px; line-height:15px; color:#222222; font-weight:700; margin-bottom:15px;}
.orderDetailGrid .rightBox .sec ul {padding-bottom:15px; margin-bottom:15px; border-bottom:2px dashed #f5f5f5;}
.orderDetailGrid .rightBox .sec ul:last-child {padding-bottom: 0; margin-bottom: 0; border-bottom:none;}
.orderDetailGrid .rightBox .sec ul li {margin-bottom:5px;}
.orderDetailGrid .rightBox .sec ul li:after {content:''; display: block; clear:both;}
.orderDetailGrid .rightBox .sec ul li:last-child {margin-bottom:0;}
.orderDetailGrid .rightBox .sec ul li .tit {float:left; font-size:12px; color:#888888; font-weight:300;}
.orderDetailGrid .rightBox .sec ul li .txt {float:right; font-size:12px; color:#222222; font-weight:300; text-align: right;}
.orderDetailGrid .rightBox .sec ul li.bold .tit { font-weight:500; color:#000}
.orderDetailGrid .rightBox .sec ul li.bold .txt { font-weight:500;}
.orderDetailGrid .rightBox .sec ul li.bold .txt em{font-size:16px;}


.orderSortingBox {text-align: center; margin:40px 0; }
.orderSortingBox .tit01 {font-size:16px; line-height:15px; font-weight:700; color:#222; margin-bottom:7px;}
.orderSortingBox .tit02 {font-size:12px; font-weight:300; color:#888888; margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #eaeaea;}
.orderSortingBox .btn {font-size:0;}
.orderSortingBox .btn:after {content:''; display: block; clear:both;}
.orderSortingBox .btn a {float:left;  width:49%; height:45px; line-height:43px;font-size:13px; color:#888888; font-weight:300; margin-left:0; margin-bottom:2%; }
.orderSortingBox .btn a:nth-child(2n) {margin-left:2%;}
.orderSortingBox .btn a.active {color:#222; border:1px solid #222; font-weight:500; }
.orderSortingBox .btn a:first-child {margin-left:0;}


.couponGrid {margin-bottom:15px;}
.couponGrid:after {content:''; display: block; clear:both;}
.couponGrid .grid {float:none; width:100%}
.couponGrid .grid:after {content:''; display: block; clear:both;}
.couponGrid .grid .box {float:left; background:#fff; border:1px solid #f2f2f2; height:auto; padding:25px 15px 25px 15px; width:49%;}
.couponGrid .grid .box .tit {font-size:14px; line-height:14px; color:#222222; font-weight:300; margin-bottom:20px;}
.couponGrid .grid .box .tit.ico {cursor:pointer; padding-right:20px; background:url('../images/sub/ico_coupon_m.png') right center no-repeat; background-size:8px auto; }
.couponGrid .grid .box .count{font-size:13px; line-height:13px; color:#222222; font-weight:300;}
.couponGrid .grid .box .count span {font-size:15px; font-weight:700;}
.couponGrid .grid .box:last-child {float:right;}
.couponGrid .grid.no2 {float:none; width:100%; margin-top:10px;}
.couponGrid .grid.no2 .box {width:100%; float:none;}
.couponGrid .grid.no2 .box .search {position: relative; padding-right:110px;}
.couponGrid .grid.no2 .box .search .btn {position: absolute; right:0; top:0; width:100px; height:40px; line-height:38px; text-align: center; font-size:14px; font-weight:700; color:#fff; background:#222;}

.listType3 {background:#fff; padding:25px 15px; border:1px solid #f2f2f2; }
.listType3 .theadBox ul {display:table;  table-layout:fixed; width:100%; padding-bottom:15px; border-bottom:2px solid #222;}
.listType3 .theadBox ul li {display:table-cell; vertical-align: top; font-size:13px; line-height:13px; color:#222222; font-weight:500; text-align: center;}
.listType3 .theadBox ul li.size1 {width:60px; text-align: left;}
.listType3 .theadBox ul li.size3 {width:60px; text-align: right;}
.listType3 .theadBox ul li.size4 {width:615px; display: none;}

.listType3 .tbodyBox ul li .pr { font-size:12px; color:#aaaaaa; font-weight:300; text-align: center; padding:15px 0;}
.listType3 .tbodyBox ul li .pr > div {display:table-cell; }
.listType3 .tbodyBox ul li .pr .date {width:60px; font-size:12px; }
.listType3 .tbodyBox ul li .pr .blank { width:615px; display: none;}
.listType3 .tbodyBox ul li .pr .titleWrap {position: static; font-size:13px; color:#222; font-weight:500; text-align: left; padding-left:15px;}
.listType3 .tbodyBox ul li .pr .titleWrap .title {overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.listType3 .tbodyBox ul li .pr .percent {color:#689ef7; font-size:13px; width:60px; text-align: right;}
.listType3 .tbodyBox ul li .pr .percent span {font-weight:500;}
.listType3 .tbodyBox ul li .pr .pop {position: static; padding:5px 0 0 0; font-size:11px; display: block; width: 100%; color:#aaa; font-weight:300;}

.basePop {position: fixed; left:0; top:0; width:100%; height:100%; z-index:999; display: none; }
.basePop .bg {position: fixed; left:0; top:0; width:100%; height:100%; z-index:1; background:rgba(0,0,0,.2);}
.basePop .in {position: fixed; left:15px; top:50%;  transform:translateY(-50%); width:calc(100% - 30px); margin-left:0;  z-index:10; background:#fff; padding:20px 15px 15px 20px;}
.basePop .in .title {font-size:15px; line-height:15px; color:#222222; font-weight:700; text-align: center; padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid #f2f2f2;}
.basePop .in .closePop {position: absolute; right:0; top:0; width:12px; height:12px; text-indent:-999em; background:url('../images/sub/ico_list_del_m.png') center no-repeat; background-size:12px auto; }


.couponPop .in .listType3 {border:none; padding:0;}
.couponPop .in .listType3 .theadBox ul li.size1 {width:60px; display: none;}
.couponPop .in .listType3 .theadBox ul li.size2 {width:80px; text-align: left;}
.couponPop .in .listType3 .theadBox ul li.size3 {width:auto; text-align: center;}
.couponPop .in .listType3 .theadBox ul li.size4 {width:60px; text-align: right; display:table-cell}

.couponPop .in .listType3 .tbodyBox ul li .pr .date {width:60px; padding-top:20px; text-align: left;}
.couponPop .in .listType3 .tbodyBox ul li .pr .use {position: absolute; left:0; top:15px; width:60px; font-weight:500; font-size:13px; display:block; text-align: center;}
.couponPop .in .listType3 .tbodyBox ul li .pr .use .end {color:#f76868;}
.couponPop .in .listType3 .tbodyBox ul li .pr .percent {width:60px; text-align: right;}
.couponPop .in .listType3 .tbodyBox ul li .pr .titleWrap {text-align: left; vertical-align: top; width:80%;}
.couponPop .in .listType3 .tbodyBox ul li .pr .titleWrap .tit {text-align: left; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}


.listType3 .theadBox ul li.size5 {display: none;}
.listType3 .theadBox ul li.size6 {width:40px;}
.listType3 .theadBox ul li.size8 {width:60px; text-align: right; padding-right:0;}

.listType3.type2 .tbodyBox ul li .pr .date {position: absolute; right:0; bottom:15px; width:60px; text-align: right;}
.listType3.type2 .tbodyBox ul li .pr .dv {width:40px; font-size:13px; color:#aaaaaa; font-weight:500;}
.listType3.type2 .tbodyBox ul li .pr .dv.blue {color:#689ef7;}
.listType3.type2 .tbodyBox ul li .pr .dv.red {color:#f76868;}
.listType3.type2 .tbodyBox ul li .pr .price { width:auto; text-align: right; color:#222222; padding-right: 0; width:60px; padding-bottom:20px;}
.listType3.type2 .tbodyBox ul li .pr .price span {font-weight:500;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap {position: static; font-size:13px; color:#222; font-weight:500; text-align: left; padding-left:10px; width:80%;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap .tit {display: block; vertical-align: middle;}
.listType3.type2 .tbodyBox ul li .pr .titleWrap  span {margin-left:0;display: block; vertical-align: middle; font-size:11px; color:#aaaaaa; font-weight:300;}

.pointPop {display: block;}
.pointPop .in .listType3 {border:none; padding:0;}
.pointPop .in .listType3 .theadBox ul li.size9 {width:60px; display: block;}
.pointPop .in .listType3 .theadBox ul li.size11 {width:80px; text-align: right;}

.pointPop .in .listType3 .tbodyBox ul li .pr .date {width:60px; position: static;}
.pointPop .in .listType3 .tbodyBox ul li .pr .titleWrap {text-align: left; padding-left:10px;}
.pointPop .in .listType3 .tbodyBox ul li .pr .price {width:60px; padding-right: 0;}

.interestWrap {padding:15px; background:#fff; border:1px solid #f2f2f2}
.interestWrap .sortWrap { padding-left: 0; padding-top:10px;}
.interestWrap .sortWrap .mobSorting  {bottom:10px;}
.sortWrap .count {font-size:14px; color:#222222;}
.sortWrap .count span {font-weight:700;}
.interestWrap .listType1 .in{ padding:0;}
.interestWrap .listType1 .in ul {0}
.interestWrap .listType1 .in li {width: 100%; margin-left:0 !important; padding-bottom:15px; margin-bottom:15px;border-bottom:1px solid #f2f2f2;}
.interestWrap .listType1 .in li:last-child {padding-bottom: 0;  border-bottom:none;}
.interestWrap .listType1 .in li .desc {display: block; font-size:11px; color:#aaaaaa; margin-top:15px; font-weight:300;}
.interestWrap .listType1 ul li a {border-radius:5px;}
.interestWrap .listType1 ul li a:after {content:''; display: block; clear:both;}
.interestWrap .listType1 ul li a .img {width:100px; height:100px; float:left; border-radius:5px; margin-bottom: 0;}
.interestWrap .listType1 ul li a .txtWrap {padding-left:110px;}
.interestWrap .listType1 ul li a .txtWrap .tit01 {margin-bottom:5px;}
.interestWrap .listType1.expend ul li {display: block; width: 100%; margin-left:0 !important; }
.interestWrap .listType1.thumb ul {margin-left:-2%;}
.interestWrap .listType1.thumb ul li { width:49%; border-bottom:none; margin-bottom:5px; }
.interestWrap .listType1.thumb ul li:nth-child(2n) { width:49%; margin-left:2% !important; }
.interestWrap .listType1.thumb ul li .txtWrap {padding-left: 0;}
.interestWrap .listType1.thumb ul li .img {width: 100%;height:auto; margin-bottom:5px; float:none;}
.interestWrap .listType1.thumb ul li .desc {display: none;}

.listType2.questionType {padding:0 ;border:none;}
.listType2.questionType .theadBox ul li.size1 {width:60px;}
.listType2.questionType .theadBox ul li.size3 {width:150px;}
.listType2.questionType .theadBox ul li.size4 {width:150px;}

.listType2.questionType .tbodyBox ul li .pr {position: relative; display:block; width:100%;border-bottom:1px solid #eaeaea; font-size:12px; line-height:auto; color:#222222; font-weight:300; text-align: left; padding:15px 0 15px 60px;}
.listType2.questionType .tbodyBox ul li .pr > div {display:block; }
.listType2.questionType .tbodyBox ul li .pr > div.title {text-align: left; padding:0 0 0 10px; font-weight:500;  display: block; text-align: left;  font-size:13px; margin-bottom:8px;}
.listType2.questionType .tbodyBox ul li .pr > div.dv {position: absolute; left:0; top:0; padding:15px 0;width:60px; font-size:13px; color:#aaaaaa; font-weight:500;}
.listType2.questionType .tbodyBox ul li.complete .pr > div.dv {color:#689ef7;}
.listType2.questionType .tbodyBox ul li.answer .pr > div.title {font-weight:300; padding-left:30px; position: relative;}
.listType2.questionType .tbodyBox ul li.answer .pr > div.title:after {content:''; position: absolute; left:10px; top:-5px; background:url('../images/sub/ico_line_m.png') 0 0 no-repeat;  background-size:12px auto;width:12px; height:12px;}
.listType2.questionType .tbodyBox ul li .pr > div.info {display: block; width:auto; font-size:12px; color:#aaaaaa; text-align: left; display: inline-block; vertical-align: middle; margin-right:0; margin-left:7px; white-space:nowrap;}


.basePrd {border:1px solid #f2f2f2; background:#fff; padding:15px; margin-bottom:15px;}
.basePrd:after {content:''; clear:both; display: block;}
.basePrd .img {float:left; border:1px solid #f2f2f2; width:80px; height:80px; border-radius:5px;}
.basePrd .txtWrap {padding-left:90px;}
.basePrd .txtWrap .dateInfo {font-size:11px; color:#222222; font-weight:300; margin-bottom:10px;}
.basePrd .txtWrap .dateInfo span {color:#888888; display: block;}
.basePrd .txtWrap .dateInfo em {font-weight:700; font-size:12px;}
.basePrd .txtWrap .txt .tit01 {font-size:12px; color:#222222; font-weight:500;}
.basePrd .txtWrap .txt .tit02 {font-size:11px; color:#888888; font-weight:300;}
.basePrd .txtWrap .txt .tit01 span {font-size:11px; font-weight:300;}
.basePrd .txtWrap .txt .tit02 .arrow {font-size:12px; background:url('../images/ico_deli03_m.png') right center no-repeat; background-size:5px auto; padding-right:15px;}



.orderWriteWrap .orderListSec .contWrap {border-top:2px solid #222; padding-top:0;}

.formBox.orderType .line { margin-top:15px;}
.formBox.orderType .line:after {content:''; display: block; clear:both;}
.formBox.orderType .line .db {float:none; width:100%; display:block;}
.formBox.orderType .line .db:first-child {margin-right:0; ;}
.formBox.orderType .line .db:nth-child(2) {margin-top:15px;}
.formBox.orderType .line .tit {width:auto; display: block; vertical-align: top; padding-top:0; margin-bottom:10px;}
.formBox.orderType .line .tit br {display: none;}
.formBox.orderType.option .line .db:first-child {width:100%; margin-right:0;}
.formBox.orderType.option .line .tit {width:auto; padding:10px 0; display: block; vertical-align: middle; margin-bottom:0;}
.formBox.orderType.option .line .rBox { vertical-align: middle;}
.formBox.orderType.option .line .rBox .ckType1 {margin-right:10px;}
.formBox.orderType .line .rBox.date a {right:15px; top:50%; margin-top:-10px; width:20px; height:20px; text-indent:-999em;background:url('../images/order/ico_cal_m.png') no-repeat; background-size:20px auto;}



.lineHr {margin:20px 0; height:1px; background:#f2f2f2;}
.lineHrFirst {margin:20px 0; height:1px; background:#f2f2f2;}

/* fakeFile */
.fakeFile {position: relative; overflow:hidden; width:100%; padding-right:0;}
.fakeFile .fileText {background:#fff !important}
.fakeFile .fileInput .fileInputButton{margin-top:10px;width: 100%; height:50px; line-height:48px; position: static; right:0; top: 0px; background:#222; font-size:13px; color:#fff; font-weight:700; border:none;}
.fakeFile .fileInput .fileInputHidden{font-size: 85px;position: absolute;right: 0px;top: 0px;opacity: 0; filter: alpha(opacity=0);-ms-filter: "alpha(opacity=0)";-khtml-opacity: 0;-moz-opacity: 0; cursor:pointer;}
.fakeFile.solo .fileInputButton {margin-top:0;}

.btType01.max200 {width:100%;}
.btType01.max440 {width:100%;}
.galListWrap {border:1px solid #eaeaea; margin-top:10px;}
.galListWrap .titGal {padding:10px 15px}
.galListWrap .titGal em {display: block; margin-bottom:5px; font-size:13px; color:#222; font-weight:500; margin-right:5px; vertical-align: middle;}
.galListWrap .titGal .warnText {display: inline-block; vertical-align: middle; margin:0;}
.galListWrap .titGal .warnText span {font-size:11px; min-height:21px;;}
.galListWrap .dargGal {padding:15px 5px; background:#f8f8f8;}
.galListWrap .dargGal .dragIn .dragBox {width:49%; height:200px; padding:5px 5px 50px 5px; background:#fff; border:1px solid #eaeaea; margin:0 2% 2% 0;}
.galListWrap .dargGal .dragIn .dragBox:nth-child(2n) {margin-right:0;}
.galListWrap .dargGal .dragIn .dragBox .img {height:100px; text-align: center; line-height:100px; margin-bottom:10px; background:#f8f8f8; }
.galListWrap .dargGal .dragIn .dragBox .img img {vertical-align: middle; max-height:100%}
.galListWrap .dargGal .dragIn .dragBox .txt {text-align: center; font-size:10px; color:#888888; font-weight:300; }
.galListWrap .dargGal .dragIn .dragBox .mb {text-align: center; font-size:10px; color:#888888; font-weight:300; }
.galListWrap .dargGal .dragIn .dragBox .btn {position: absolute; left:0; bottom:5px; padding:0 5px; width:100%; text-align: center; text-align: right;}
.galListWrap .dargGal .dragIn .dragBox .btn .darg { width:22px; height:22px; background-size:15px auto;}
.galListWrap .dargGal .dragIn .dragBox .btn .delete { width:13px; height:20px;  background-size:13px auto;}
.galListWrap .dargGal .dragIn .dragBox .btn .show { width:13px; height:20px;  background-size:13px auto; }

.galListWrap .dargGal .file-drop-zone {border:none; padding:0; margin:0; min-height:160px}
.galListWrap .dargGal .bg-success {background:#aaa !important; font-family:'Noto Sans KR', sans-serif;}
.galListWrap .dargGal .krajee-default.file-preview-frame {width:44%;}
.galListWrap .dargGal .krajee-default.file-preview-frame .kv-file-content {height:90px; text-align: center; line-height:90px; background:#f8f8f8; font-size: 0; width:100%; }
.galListWrap .dargGal .krajee-default.file-preview-frame .kv-file-content img {vertical-align: middle;}
.galListWrap .dargGal .krajee-default .file-footer-caption {margin-bottom:10px;}
.galListWrap .dargGal .krajee-default .file-drag-handle {margin-top:0;}
.galListWrap .dargGal .file-sortable .file-drag-handle {text-indent:-999em; background:url('../images/order/ico_drag.png') center no-repeat; width:22px; height:22px;}
.galListWrap .dargGal .krajee-default .file-footer-buttons button {text-indent:-999em; border:none; padding:0; width:20px; height:20px;}
.galListWrap .dargGal .krajee-default .file-footer-buttons .kv-file-remove { background:url('../images/order/ico_trash.png') center no-repeat}
.galListWrap .dargGal .krajee-default .file-footer-buttons .kv-file-zoom { background:url('../images/order/ico_zoom.png') center no-repeat; margin-left:5px; }
.galListWrap .dargGal .file-drop-zone-title {line-height:160px; padding:0; font-size:15px;}
.galListWrap .dargGal .file-input .file-preview {padding:0; border:none;  background:none;}
.galListWrap .dargGal .file-preview-thumbnails {display: block; }
.galListWrap .dargGal .krajee-default .file-caption-info, .krajee-default .file-size-info {width:100% !important;}

.ckBox3 {margin-top:10px; padding-bottom:10px;}
.ckBox3 .ckType1 {margin-right:10px;}

.openInvite {margin-bottom:10px;}

.icoWarn {display: inline-block; vertical-align: middle; margin-left:5px;text-indent:-999em; width:15px; height:15px; background:url('../images/order/ico_info3_m.png') no-repeat; background-size:15px auto;}


.orderNumPop .in {height:auto; min-height:400px; padding-bottom:0; }
.orderNumPop .in .backBg img {position: absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:100%; height:100%; }
.orderNumPop .in .numSelBox {position: relative; z-index:10; padding:20px 10px 0 10px;}
.orderNumPop .in .numSelBox .tit01 {font-size:20px; line-height:25px; color:#222222; margin-bottom:10px; font-weight:bold;}
.orderNumPop .in .numSelBox .tit02 {font-size:10px; color:#a19b9e; margin-bottom:20px; }
.orderNumPop .in .numSelBox .choiceBox {position: relative; width:100%; padding-right:0;}
.orderNumPop .in .numSelBox .choiceBox:after {content:''; display: block; clear:both;}
.orderNumPop .in .numSelBox .choiceBox .selBox { width:100%;}
.orderNumPop .in .numSelBox .choiceBox .selBox select {font-size:13px;}
.orderNumPop .in .numSelBox .choiceBox .btn {position: absolute;left:0; right:auto; top:auto; bottom:-55px; width:120px; }
.orderNumPop .in .numSelBox .choiceBox a {top:auto; bottom:0; width:120px; text-align: center; font-size:13px; height:45px; line-height:43px; }
.orderNumPop .in .numSelBox .choiceBox a.back {top:auto; bottom:0; width:0; text-align: center; font-size:13px; height:45px; line-height:43px; }
.orderNumPop .in .numSelBox .choiceBox a.back span {top:auto; bottom:0; width:120px; text-align: center; font-size:13px; height:45px; line-height:43px; }
.orderNumPop .in .numSelBox .imgBox { text-align: right; position: relative; right:0; top:0; text-align: right; font-size:0;}
.orderNumPop .in .numSelBox .imgBox .card {display: inline-block; width:66%; position: relative; left:2%}
.orderNumPop .in .numSelBox .imgBox .card img.mob {display: inline-block; max-height:400px;}
.orderNumPop .in .numSelBox .imgBox .leaf {position: absolute; right:0; top:0; height:100%; width:66%;}
.orderNumPop .in .numSelBox .imgBox .leaf span {position: absolute; left:0; top:0; transition:3s all;}
.orderNumPop .in .numSelBox .imgBox .leaf span.no1 {left:auto; right:-10px; top:15px; width:28px;}
.orderNumPop .in .numSelBox .imgBox .leaf span.no2 {left:0; bottom:50px; top:auto;  width:25px;}
.orderNumPop .in .numSelBox .imgBox .leaf span.no3 {left:364px; top:556px; width:42px;}
.orderNumPop .in .closePop {right:20px; top:20px; z-index:15;}
.orderNumPop.active .in .numSelBox .choiceBox a.back {width:120px;}

.selectFunc {position: static; margin-bottom:20px;}
.selectFunc:after {content:''; display: block; clear:both;}
.selectFunc .cancel {float:left; font-size:13px;  padding-left:20px; background:url('/html/images/btnRe_m.png') left center no-repeat; margin-right:0; background-size:14px auto; }
.selectFunc .ckType2 {float:right;}
.selectFunc .ckType2 label {border:none; padding:0; color:#222222; padding-left:23px;}
.selectFunc .ckType2 label:after {left:0;}
.selectFunc .ckType2 input:checked + label:before {left:0;}
.selectFunc .ckType2 input:checked + label {border:none;}

.questionPop {}
.questionPop .in .stepList {padding:0; border:none; margin-bottom:10px;}
.questionPop .in .stepList ul {padding:0; border:none;}
.questionPop .in .stepList li {padding-right:22%; margin-top:0;}
.questionPop .in .stepList ul li .tit {transform:translateX(-50%) scale(1)}
.questionPop .in .stepList ul li:first-child .tit {transform:translateX(0) scale(1)}
.questionPop .in .stepList ul li:last-child .tit {transform:translateX(0) scale(1)}
.questionPop .in .stepContent > div {display: none;}
.questionPop .in .stepContent > div.active {display: block;}
.questionPop .in .stepContent .tit01 {font-size:13px; color:#222222; font-weight:700; margin-bottom:5px;}
.questionPop .in .stepContent .tit02 {font-size:11px; color:#888888; font-weight:300; margin-bottom:15px;}
.questionPop .in .stepContent .tit02 span {color:#689ef7}
.questionPop .in .stepContent .ckBox {margin-bottom:10px;}
.questionPop .in .stepContent .ckBox:after {content:''; display: block; clear:both;}
.questionPop .in .stepContent .ckBox .ckType2 {float:left; width:100%; margin-left:0; margin-bottom:10px;}
.questionPop .in .stepContent .ckBox .ckType2:nth-child(1) {margin-left:0;}
.questionPop .in .stepContent .ckBox .ckType2:nth-child(4) {margin-left:0;}

.stepList.five li {padding-right:14% !important;}
.stepList.five li:last-child {padding-right:0 !important;}

.stepList.six li {padding-right:9.8% !important;}
.stepList.six li:last-child {padding-right:0 !important;}
.questionPop .in .stepList.six ul li:last-child .tit {transform:translateX(19px) scale(.9)}



.ckType2 {display: inline-block; min-width:100%; vertical-align: top; }
.ckType2 input {position: absolute; visibility: hidden;}
.ckType2 label {position: relative; font-size:12px; color:#888888; padding:10px 20px; text-align: center; font-weight:300; border:1px solid #eaeaea; display: block;}
.ckType2 label:after {content:''; position: absolute; left:15px; top:50%; width:16px; height:16px; margin-top:-9px; border:1px solid #222222;}
.ckType2 input:checked + label {color:#222; border:1px solid #222;}
.ckType2 input:checked + label:before {content:''; position: absolute; left:15px; top:50%; margin-top:-9px; width:18px; height:18px;     background: #222 url(../images/sub/ico_checkOn_m.png) center no-repeat; background-size:12px auto;}
.ckType2.left label {text-align: left; padding-left:55px; padding-right:15px;}


.btnTwo2 {}
.btnTwo2:after {content:''; display: block; clear:both;}
.btnTwo2 a {float:left; width:49%; font-size:13px;height:40px; line-height:38px; }
.btnTwo2 a label {display: block;}
.btnTwo2 a span {padding-right:20px; background:url('../images/order/ico_use1_m.png') right center no-repeat; background-size:10px auto;}
.btnTwo2 a.black span {background:url('../images/order/ico_use2_m.png') right center no-repeat;  background-size:14px auto;}
.btnTwo2.center a + a {margin-left:0;}
.btnTwo2.center a {float:left;}
.btnTwo2.center a:last-child {float:right;}

.inviteSamPop {}
.inviteSamPop .in .ckBox .ckType2 { }
.inviteSamPop .in .ckBox {margin-bottom:10px;}
.inviteSamPop .in .ckBox:after {content:''; display: block; clear:both;}
.inviteSamPop .in .ckBox .ckType2 {float:left; width:100%; margin-left:0; margin-bottom:10px;}
.inviteSamPop .in .ckBox .ckType2:first-child {margin-left:0;}


.basePop .sample {margin-bottom:10px; text-align: center; padding:0 20px;}
.grayWarn {padding:15px; margin-bottom:20px; background:#f8f8f8; text-align: center;}
.grayWarn .warnText {margin:0;}


.taBox textarea {height:110px; padding:15px;  font-size:12px; color:#222222; resize:none}
.taBox textarea:read-only  {background:#f8f8f8;}
.taBox ::-webkit-input-placeholder  {font-size:12px; color:#888888; font-weight:300;}
.taBox textarea:focus {border:1px solid #222; outline:none}
.taBox.h200 textarea {height:110px;}
.taBox .count {right:15px; bottom:15px; font-size:10px; color:#222222; line-height:10px; font-weight: 300; letter-spacing:-0.03em; background:#fff;}
.taBox .count em {font-weight:700; color:#689ef7; }



.orderWriteWrap .in {position: relative;}
.quickBtn {position:static; }
.quickBtn ul {position: fixed; left:0; bottom: 0;width:100%; z-index: 10; }
.quickBtn ul li {margin-bottom:0; float:left; width:33.3336%;}
.quickBtn ul li a {display: block; height:45px; background:#222; text-align: center; color:#fff; padding-top:0; font-size:12px; line-height:42px; font-weight:500;}
.quickBtn ul li a span {display:inline-block;; padding-top:0; vertical-align: middle; padding-left:30px; }
.quickBtn ul li.no1 a {background:#fff; border:1px solid #222; border-left:none;  color:#222;}
.quickBtn ul li.no2 a {border-right:1px solid #fff;}
.quickBtn ul li.no1 a span {background:url('../images/order/ico_quick01_m.png') left center no-repeat; background-size:18px auto; padding-left:25px;}
.quickBtn ul li.no2 a span {background:url('../images/order/ico_quick02_m.png') left center no-repeat; background-size:20px auto;}
.quickBtn ul li.no3 a span {background:url('../images/order/ico_quick03_m.png') left center no-repeat; background-size:20px auto;}

 .countSamPop .sample {padding:0;}

.eventWrap {margin:0 15px;}
.eventList {font-size:0;}
.eventList:after {content:''; display: block; clear:both;}
.eventList li {display: block; margin-left:0; width:100%; float:none; margin-bottom:30px;}
.eventList li:first-child {margin-left:0;}
.eventList li a {display: block; text-align: center;}
.eventList li a span {display: block;}
.eventList li a .img {margin-bottom:15px; border-radius:5px; overflow:hidden; position: relative;}
.eventList.end li a .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.eventList li a .tit01 {font-size:12px; color:#888888; font-weight:300;}
.eventList li a .tit02 {font-size:14px; color:#222; font-weight:700; letter-spacing:-0.05em;}

.h2Box .redInfo {font-size:12px; color:#b27085; font-weight:300; margin-top:10px;}


.eventList_new li { width:48%;margin-right:4%; margin-left:0; margin-bottom:20px;}
.eventList_new li:nth-child(2n) {margin-right:0;}
.eventList_new li a {display: block;}
.eventList_new li a span {display: block;}
.eventList_new li a .img {margin-bottom:15px; border-radius:5px; overflow:hidden; position: relative;}
.eventList_new.end li a .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.eventList_new li a .tit01 {font-size:14px; line-height:20px; }
.eventList_new li a .tit01 img {width:14px; top:-1px;}
.eventList_new li a .tit02 {font-size:12px;}



.faqRecent {margin-bottom:30px; padding:15px; padding-top:20px; border-top:1px solid #eaeaea; }
.faqRecent .box {float:none; width:100%; background:#fff; padding:20px;}
.faqRecent .box:last-child {float:none; margin-top:10px;}
.faqRecent .box .tit {font-size:13px; line-height:13px; color:#222; font-weight:700; padding-bottom:10px; margin-bottom:15px; border-bottom:1px solid #eaeaea; }
.faqRecent .box ul li {margin-bottom:10px;}
.faqRecent .box ul li:last-child {margin-bottom:0;}
.faqRecent .box ul li a {display: block;}
.faqRecent .box ul li a:after {content:''; display: block; clear:both;}
.faqRecent .box ul li a span {float:left; font-size:12px; color:#689ef7; font-weight:700;}
.faqRecent .box ul li a p {padding-left:15px; font-size:12px; color:#222222; font-weight:300;}

.keywordSearch {border:5px solid #f2f2f2; padding:20px 20px;margin:0 15px 20px 15px; background:#fff;}
.keywordSearch .tit {text-align: center;  font-size:14px; line-height:14px; margin-bottom:13px; color:#222; font-weight:700;}
.keywordSearch .ipBox {position: relative;}
.keywordSearch .ipBox input {border:1px solid #222; padding-right:30px;}
.keywordSearch .ipBox a {position: absolute; right:10px; top:50%; margin-top:-11px; width:20px; height:22px; background:url('../images/sub/ico_my5_m.png') center no-repeat; background-size:17px auto;text-indent:-9999em;}
.keywordSearch .keyList {margin-top:15px; text-align: center;}
.keywordSearch .keyList:after {content:''; display: block; clear:both;}
.keywordSearch .keyList .txt {float:left; margin-top:5px; margin-left:10px; margin-right:10px; vertical-align: top; padding-right:12px; font-size:12px; color:#222; font-weight:700; background:url('../images/sub/ico_keyword_m.png') right center no-repeat; background-size:6px auto;}
.keywordSearch .keyList ul {padding-left:70px; text-align: left; vertical-align: top; display: block;}
.keywordSearch .keyList ul li {display: inline-block;  border-bottom:1px solid #689ef7; padding-bottom:1px; margin-right:10px; margin-bottom:5px;}
.keywordSearch .keyList ul li a { font-size:10px; color:#689ef7; font-weight:500; }

.sortFaq {margin-bottom:0; padding:15px;}
.sortFaq ul li {float:left; width:49%; margin-left:0; border:1px solid #eaeaea; margin-bottom:2%; text-align: center;}
.sortFaq ul li:nth-child(2n) {margin-left:2%;}
.sortFaq ul li a {display: block; height:75px; line-height:75px; padding-top:0; background:#fff;}
.sortFaq ul li a span {display: inline-block; vertical-align: top; font-size:14px; color:#888888; font-weight:300; padding-top:0; padding-left:50px; background-position:left center !important; background-size:30px auto !important;}
.sortFaq ul li.active a {border:1px solid #222; background:none;}
.sortFaq ul li.active a span {color:#222; font-weight:700;}



.faqList {padding:0 15px;}
.faqList ul li {margin-bottom:10px; border:1px solid #f2f2f2; background:#fff;}
.faqList ul li:last-child {margin-bottom: 0;}
.faqList ul li .box {padding:15px 15px}
.faqList ul li .box.question .title {padding-left:30px; font-size:12px;  padding-right:30px;  color:#222; font-weight:700; background:url('../images/sub/ico_q_m.png') left 3px no-repeat; background-size:13px auto; cursor:pointer}
.faqList ul li.active .box.answer { display: block;}
.faqList ul li .box.answer { padding-top:0; display: none;}
.faqList ul li .box.answer .txt {border-top:1px solid #f2f2f2; padding-top:15px; padding-left:20px; font-size:12px; color:#888888; font-weight:300; background:url('../images/sub/ico_a_m.png') left 17px no-repeat; background-size:12px auto; }
.faqList ul li .box.question .title:after{right:0; top:10px; margin-top:0; width:16px; height:10px; background:url('../images/sub/ico_op_m.png') left 0 no-repeat; background-size:12px auto; cursor:pointer}


/*.rvPop .in{transform:translate(0,0); top:10px;  margin-top:0; position: absolute;}*/
.rvPop .rvList .titleBox{position: relative; margin-bottom:20px;}
.rvPop .rvList .titleBox .starList{margin-bottom:10px;}
.rvPop .rvList .titleBox .rvTit{margin-bottom:0; font-size:13px; color:#222222; font-weight:700;}
.rvPop .rvList .titleBox .info{}
.rvPop .rvList .closePop {position: absolute; right:0; top:5px; width:11px; height:11px; text-indent:-999em; background:url('../images/sub/ico_list_del_m.png') center no-repeat; background-size:11px auto; }

.rvPop .rvList .hiddenBox { }
.rvPop .rvList .hiddenBox .imgSlide {max-width:100%; position: relative; margin-bottom:20px;}
.rvPop .rvList .hiddenBox .imgSlide {max-width:100%; position: relative; margin-bottom:15px;}
.rvPop .rvList .hiddenBox .imgSlide img {width:100%;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination { position:absolute; width:100%; bottom:5px; text-align: center; font-size: 0;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span {width:5px; height:5px; border-radius:50%; background:#eaeaea; margin-right:5px; opacity:1;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#222222;}
.rvPop .rvList .hiddenBox .imgSlide .swiper-pagination span:last-child {margin-right:0;}
.rvPop .rvList .hiddenBox .tit01 {font-size:15px; color:#222222; font-weight:700; margin-bottom:15px;}
.rvPop .rvList .hiddenBox .txt {font-size:12px; color:#222222; font-weight:300; padding-top:0; padding-left:0;}



.rvPop .notiTxt {width:35px;;}
.rvPop .rvList .titleBox {margin-bottom:10px; padding-bottom:10px; border-bottom:1px solid #eaeaea;;}
.rvPop .rvList .imgList {margin-bottom:15px;}
.rvPop .rvList .imgList ul {}
.rvPop .rvList .imgList ul li {width:60px; height:60px;}
.rvPop .rvList .imgList ul li a {width:60px; height:60px;}
.rvPop .rvList .contBox .txt {font-size:13px; color:#222222; font-weight:300;}
.rvPop .scrollBox .inSc {max-height:250px; height:auto;}
.rvPop .scrollBox .inSc .mCSB_scrollTools {width:5px; background:#eaeaea; border-radius:10px;}
.rvPop .scrollBox .inSc .mCSB_dragger .mCSB_dragger_bar {width:5px;  border-radius:10px;}
.rvPop .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:10px;}




.orderStep {padding:15px; background:#fff; border:1px solid #f2f2f2; margin-bottom:20px;}
.orderStep.type2 {margin-bottom:30px;}
.orderStep .stepList {padding:0;}
.orderStep .stepList ul{padding:0; border:none;}
.orderStep .stepList ul li {padding-right:22%; margin-top:0 !important;}
.orderStep .stepList ul li:last-child {padding-right:0;}
.orderStep .stepList ul li .tit {font-size:16px; }
.orderStep .stepList ul li:nth-child(4) .tit {transform-origin:right center;}

.ordertit {position: relative; padding-bottom:20px; margin-bottom:15px; border-bottom:1px solid #f2f2f2;}
.ordertit .tit {font-size:14px; color:#222; font-weight:700; line-height:14px;}
.ordertit .ckType1 {position: absolute; right:0; top:0;}
.ordertit .count {display: inline-block;  margin-left:10px; font-size:13px; line-height:13px; font-weight:300; border-bottom:1px solid #222; padding-bottom:2px;}
.ordertit .count em {font-weight:700;}

.orderBase {padding:15px; background:#fff; border:1px solid #f2f2f2; margin-bottom:20px;}

.orderConfirmList .thead {display: none;}

.orderConfirmList .tbody {padding-top:0;}
.orderConfirmList .tbody .tr {display:block; width:100%; border-bottom:1px solid #eaeaea; }
.orderConfirmList .tbody .tr:after {content:''; display: block; clear:both;}
.orderConfirmList .tbody .tr .td {display:block; font-size:11px; font-weight:300; color:#222; padding:12px 0;  text-align: center; width:auto;}
.orderConfirmList .tbody .tr .td.no1 {width:32px;float:left; border-bottom:none;}
.orderConfirmList .tbody .tr .td.no2 {width:auto; padding-left:;}
.orderConfirmList .tbody .tr .td.no3 {display: none;}
.orderConfirmList .tbody .tr .td.no4 {display: none;}
.orderConfirmList .tbody .tr .td.no5 {display: none;}
.orderConfirmList .tbody .tr .td.no6 {display: none;}
.orderConfirmList .tbody .tr .td.no7 {display: none;}
.orderConfirmList .tbody .tr .mobEtcInfo {clear:both; margin-left:30px; border-top:1px solid #eaeaea; padding:10px 0;}
.orderConfirmList .tbody .tr .mobEtcInfo dl {font-size:12px; font-weight:300; color:#22; margin-bottom:7px;}
.orderConfirmList .tbody .tr .mobEtcInfo dl:after {content:''; display: block; clear:both;}
.orderConfirmList .tbody .tr .mobEtcInfo dl:last-child {margin-bottom:0;}
.orderConfirmList .tbody .tr .mobEtcInfo dl dt {float:left; font-weight:500;;}
.orderConfirmList .tbody .tr .mobEtcInfo dl dd {float:right; text-align: right;}
.orderConfirmList .tbody .price {display: inline-block; font-size:11px; }
.orderConfirmList .tbody .price em {font-weight:700; font-size:11px;}
.orderConfirmList .tbody .count {display: inline-block; font-size:11px; padding-left:10px; margin-left:8px; position: relative;}
.orderConfirmList .tbody .count:after {content:''; position: absolute; left:0; top:50%; margin-top:-5px; width:1px; height:10px; background:#eaeaea;}
.orderConfirmList .tbody .writer {display: none;}

.orderConfirmList.messageTb .tbody .tr {position: relative; padding-left:35px; padding:10px 0 10px 40px}
.orderConfirmList.messageTb .tbody .tr .td.mno1 {position: absolute; left:0; top:50%; margin-top:-16px;}
.orderConfirmList.messageTb .tbody .td.mno3 .mob {padding-left:55px;}
.orderConfirmList.messageTb .tbody .td.mno4 {position: absolute; left:35px; bottom:15px;}
.orderConfirmList.messageTb .tbody .td.mno5 {position: absolute; left:174px; bottom:13px; font-size: 12px; line-height:12px; width:auto;}
.orderConfirmList.messageTb .tbody .td.mno5:after {content:''; position: absolute; left:-7px; width:1px; height:10px; background:#aaaaaa; }
.orderConfirmList.messageTb .tbody .td.mno5 br {display: none;}

.orderConfirmList .imgTxt:after {content:''; display: block; clear:both;}
.orderConfirmList .imgTxt .img {float:left; width:80px; height:80px; border:1px solid #f2f2f2; border:1px solid #f2f2f2}
.orderConfirmList .imgTxt .txtWrap {padding-left:90px; padding-top:0; text-align: left;}
.orderConfirmList .imgTxt .txtWrap .tit01 {font-size:13px; color:#222; font-weight:300;}
.orderConfirmList .imgTxt .txtWrap .tit02 {font-size:12px; color:#aaaaaa; font-weight:300;}

.orderConfirmList .lastInfo {position: relative; padding-top:15px;}
.orderConfirmList .lastInfo .btn {width:32%;}
.orderConfirmList .lastInfo .btn a {width:100%; display: inline-block; vertical-align: top; height:35px; line-height:32px; text-align: center; font-size:12px; color:#fff; font-weight:500; background:#222; padding:0 5px;}
.orderConfirmList .lastInfo .btn.right {position: absolute; right:0; top:15px; width:66%; font-size: 0;}
.orderConfirmList .lastInfo .btn.right a {width: 48%; max-width:48%; margin-right:0;}
.orderConfirmList .lastInfo .btn.right a:first-child {margin-right:3%;}

.orderConfirmList .lastInfo .priceAll {position: static; padding-top:15px; margin-top:15px; border-top:1px solid #eaeaea; text-align: right; font-size:12px; color:#222222; font-weight:300;}
.orderConfirmList .lastInfo em {font-weight:700; font-size:13px; margin-left:5px;;}
.orderConfirmList .lastInfo .plus {display: inline-block; vertical-align: middle; width:10px; height:10px; margin:0 5px; position: relative; top:-2px; background:url('../images/sub/ico_price01_m.png') center no-repeat; background-size:10px auto; }
.orderConfirmList .lastInfo .equal {display: none;}
.orderConfirmList .lastInfo .last {display: block; top:0; padding-top:10px;  }
.orderConfirmList .lastInfo .last .total {font-size:14px; color:#222; font-weight:700;  }
.orderConfirmList .lastInfo .last .red {font-size:15px;  color:#f76868; font-weight:300;}
.orderConfirmList .lastInfo .last .red em{font-size:18px; font-weight:700;}

.ckType3 {display: inline-block; vertical-align: top; }
.ckType3 input {position: absolute; visibility: hidden;}
.ckType3 label {position: relative;  display: block; font-size:13px; line-height:45px; height:43px; color:#222; border:1px solid #eaeaea; text-align: center; font-weight:300; }
.ckType3 input:checked + label {background:#222; color:#fff; font-weight:700;}

.orderBase .formBox .tit {width:auto;}
.orderBase .lineSize01 {width:100%;}
.orderBase .lineSize02 {width:100%;}
.orderBase .lineSize03 {width:100%;}
.orderBase .btnShowAddr a {width:150px; display: inline-block; vertical-align: middle; margin-right:15px;}
.orderBase .btnShowAddr .ckType1 { display: inline-block; vertical-align: middle;}


.lastOrder {position: relative; padding-right:0;}
.lastOrder .orderBase {}
.lastOrder .orderBase .rBox {width:auto;}
.lastOrder .orderBase .btnText {position: relative;}
.lastOrder .orderBase .btnText .text {font-size:13px; color:#222222; font-weight:300; padding:10px 0;}
.lastOrder .orderBase .btnText .text em {font-weight:700;}
.lastOrder .orderBase .btnText .text .name {font-size:12px; color:#222222; position: relative; z-index:5;}
.lastOrder .orderBase .btnText .text .name em {max-width:48%; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}
.lastOrder .orderBase .btnText .text .name a {width:12px; height:12px; vertical-align: middle; margin-left:0; background:url('../images/sub/ico_list_del.png') center no-repeat; background-size:10px auto;}
.lastOrder .orderBase .btnText.money .text br {display: none;}

.lastOrder .orderBase .btnText .right {position: absolute; right:0; top:0; width:210px; text-align: right;}
.lastOrder .orderBase .btnText .right .ipBox { display: inline-block;  width:200px; vertical-align: middle;}
.lastOrder .orderBase .btnText .right a {display: inline-block; width:120px; vertical-align: middle; margin-left:5px;}
.lastOrder .orderBase .btnText .right.type2 {position: static; text-align: left; width:100%; padding-right:130px;}
.lastOrder .orderBase .btnText .right.type2 .ipBox {width:100%;}
.lastOrder .orderBase .btnText .right.type2 a {position: absolute; right:0; bottom:0;}
.lastOrder .orderBase .line.bt {padding-top:15px; border-top:1px solid #f2f2f2; padding-top:20px; margin-top:20px;}
.lastOrder .orderBase .line.bt .tit {vertical-align: top; padding-top:0;}
.lastOrder .orderBase .pay {font-size:0; margin-bottom:15px;}
.lastOrder .orderBase .pay .ckType3 {width:49%; margin-right:1.25%; margin-bottom:1%;}
.lastOrder .orderBase .pay .ckType3:first-child {margin-left:0; }
.lastOrder .orderBase .pay .ckType3:nth-child(2n) {margin-right:0;}
.lastOrder .orderBase .pay .ckType3:nth-child(3) { margin-right:1.25%;}
.lastOrder .orderBase .pay .ckType3:nth-child(4) {margin-top:0;}
.lastOrder .orderBase .bankType {margin-bottom:10px;}


.bankType:after {content:''; display: block; clear:both;}
.bankType .selBox {float:none; width:100%; margin-bottom:5px;}
.bankType .ipBox {float:none; width:100%;}

.lastOrder .lastPrice {position: static; width:100%; border:1px solid #222222;  background:#fff;}
.lastOrder .lastPrice .ordertit .tit {font-size:16px;}
.lastOrder .lastPrice .inner {padding:15px;}
.lastOrder .lastPrice dl{margin-bottom:10px;}
.lastOrder .lastPrice dl:last-child {margin-bottom:0;}
.lastOrder .lastPrice dl:after {content:''; display: block; clear:both;}
.lastOrder .lastPrice dl dt {float:left; font-size:12px; color:#222; font-weight:300;}
.lastOrder .lastPrice dl dd {float:right; font-size:12px; color:#222; font-weight:300;}
.lastOrder .lastPrice dl dd em {font-size:13px; font-weight:700;}
.lastOrder .lastPrice .price {padding-top:15px; margin-top:15px; border-top:1px solid #f2f2f2;}
.lastOrder .lastPrice .price dd {color:#f76868; font-size:13px; position: relative; top:0}
.lastOrder .lastPrice .price dd em {font-size:17px; font-weight:700;}
.lastOrder .lastPrice .btn a { display: block; text-align: center; font-size:13px; color:#fff; font-weight:700; height:45px;; line-height:43px; background:#222;}

.listType2.order {padding:0; border:0; margin-bottom:15px;}
.listType2.order .size01 {width:45px;}
.listType2.order .size02 {width:55px;}
.listType2.order .size05 {width:60px; text-align: right;}
.listType2.order .tbodyBox ul {display:table; width:100%; border-bottom:1px solid #eaeaea;}
.listType2.order .tbodyBox ul li {display:table-cell; padding:15px 0; text-align: center; font-size:12px; font-weight:300;}
.listType2.order .tbodyBox ul li.bold {font-weight:500; text-align: left; padding-left:10px;}
.listType2.order .tbodyBox ul li.left {color:#888888; text-align: left;}
.listType2.order .tbodyBox ul li.blue {text-align: right; font-size:12px; color:#689ef7;}
.listType2.order .tbodyBox ul li.blue em {font-weight:500;}

.saveAddress .btnTwo.type1 {padding:0;}
.couponSearch .btnTwo.type1 {padding:0;}

.mobsortingPort {display: none;}

.portSharePop .btnPortShare {text-align: center; padding-bottom:10px;}
.portSharePop .btnPortShare a {display: inline-block; vertical-align: top; margin-left:15px; text-align: center; width:55px; padding-top:65px; font-size:13px; color:#222222; font-weight:300;}
.portSharePop .btnPortShare a:first-child {margin-left:0;}
.portSharePop .btnPortShare a.kakao {background:url('../images/port/ico_share01_m.png') center top no-repeat; background-size:55px auto;}
.portSharePop .btnPortShare a.urlCopy {background:url('../images/port/ico_share02_m.png') center top no-repeat; background-size:55px auto;}
.portSharePop .btnPortShare a.more {background:url('../images/port/ico_share03_m.png') center top no-repeat; display: inline-block; background-size:55px auto;}



.scrollPop { bottom:0; overflow-y:auto}
.scrollPop .in {position: absolute; transform:translateY(0); top:3%;}
.questionPop .in .searchPrd .txtWrap {padding-top:25px;}
.questionPop .in .title {border-bottom:none; padding-bottom:0;}
.questionPop .in .writeBoard {margin-bottom:25px; padding:0; border-top:none;}
.questionPop .in .writeBoard .formBox{padding:0; margin:0;}
.questionPop .in .writeBoard .formBox .tit {display: block; margin-bottom:10px; width:auto;}
.questionPop .in .writeBoard .formBox .rBox {display: block;}
.questionPop .in .writeBoard .formBox .writeTd {display: table;}

/* scFileIp */
.scFileIp .fileSec {position: relative; ; padding-right:145px; margin-bottom:5px;}
.scFileIp .fileSec .ctr {position: absolute; right:0; top:0; width:40px; height:100%; border:1px solid #f2f2f2; text-indent:-999em;}
.scFileIp .fileSec .ctr.del {background:url('../images/ico_file01.png') center no-repeat; background-size:9px auto;}
.scFileIp .fileSec .ctr.add {background:url('../images/ico_file02.png') center no-repeat;  background-size:7px auto;}
.scFileIp .fileSec:last-child {margin-bottom:0;}
.scFileIp .fileSec .fileText { border:1px solid #cccccc; width:100%; height:40px; line-height:58px;  cursor:pointer; padding-left:15px; font-size:12px; font-weight:300;}
.scFileIp .fileSec  input[type="button"]{width: 90px; height: 40px; line-height:38px; position: absolute; right:50px; top: 0px; background:#222; border:none; font-size:12px; color:#fff; font-weight:500; }
.scFileIp .fileSec  input[type="file"] {font-size: 45px;position: absolute;right: 0px;top: 0px;opacity: 0; filter: alpha(opacity=0);-ms-filter: "alpha(opacity=0)";-khtml-opacity: 0;-moz-opacity: 0; cursor:pointer;}

.reviewPop .in {padding:20px 15px 15px 15px;}
.reviewPop .in .title {border-bottom:0; padding-bottom:0;}
.reviewWrite .point {background:#222; font-size:11px; color:#fff; font-weight:300; text-align: center; padding:10px 5px; margin-bottom:10px;}
.reviewWrite .point span {display: inline-block; vertical-align: top; padding-left:20px; background:url('../images/ico_review03.png') left center no-repeat; background-size:13px auto ;}
.reviewWrite .point em {color:#f2d872; font-weight:500;}
.reviewWrite .basePrd {margin-bottom:20px;}
.reviewWrite .reviewTit {margin-bottom:10px;position: relative;}
.reviewWrite .reviewTit .name {font-size:13px; color:#222; font-weight:700;}
.reviewWrite .reviewTit .pink {font-size:10px; color:#f76868; font-weight:300;}
.reviewWrite .reviewTit .benefit {margin-left:5px; position: absolute; right:-30px; top:0;}

.starReview {margin-bottom:25px;}
.starReview ul {display: inline-block; vertical-align:middle; margin-right:5px;}
.starReview ul li.hover{background:url('../images/ico_review01.png') center no-repeat; opacity:.5; background-size:25px auto;}
.starReview ul li.active{background:url('../images/ico_review01.png') center no-repeat; opacity:1; background-size:25px auto;}
.starReview ul li {display: inline-block; vertical-align: top; width:25px; height:25px; background:url('../images/ico_review02.png') center no-repeat; background-size:25px auto; margin-right:3px; cursor:pointer;}
.starReview .txtResult {display: inline-block; vertical-align: middle; font-size:12px; color:#222222; font-weight:300; }
.starReview .txtResult em {font-weight:700; }

.reviewWrite .picVideo {margin-bottom:20px;}
.reviewWrite .picVideo .btn {position: relative;width:180px; height:40px; line-height:35px; border:1px solid #eaeaea; text-align: center; margin-bottom:10px; overflow:hidden;}
.reviewWrite .picVideo .btn input {position: absolute; right:0; top:0; font-size:150px; opacity:0; cursor:pointer;}
.reviewWrite .picVideo .btn .txt {font-size:12px; color:#222; font-weight:500; display: inline-block; vertical-align: middle; padding-left:20px; background:url('../images/ico_review04.png') left center no-repeat;  background-size:12px auto;}
.reviewWrite .picVideo .list {margin-bottom:15px;}
.reviewWrite .picVideo .list li {float:left; width:32.5%; margin-left:1%; margin-bottom:2%; border-radius:3px; overflow:hidden; background:#f8f8f8; height:100px;position: relative;}
.reviewWrite .picVideo .list li:first-child {margin-left:0;}
.reviewWrite .picVideo .list li:nth-child(4) {margin-left:0;}
.reviewWrite .picVideo .list li .del {position: absolute; right:0; top:0; width:15px; height:15px; background:url('../images/ico_review05.png') center no-repeat; background-size:15px auto; text-indent:-999em; z-index: 5; }
.reviewWrite .picVideo .list li.video:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.25) url('../images/ico_review06.png') center no-repeat; background-size:10px auto;}
.reviewWrite .reviewTxtArea {padding-bottom:20px; margin-bottom:20px; border-bottom:1px solid #eaeaea;}
.reviewWrite .reviewTxtArea .taBox {position: relative; margin-top:10px;}
.reviewWrite .reviewTxtArea .count {position: absolute; right:15px; bottom:15px; font-size:12px; line-height:12px; color:#222222; font-weight:300; background:#fff;}
.reviewWrite .reviewTxtArea .count em {color:#689ef7; font-weight:700;}
.reviewWrite .reviewTxtArea textarea {width:100%; height:150px; padding:15px 50px 15px 15px; border:1px solid #eaeaea;}
.reviewWrite .reviewTxtArea textarea:focus {border:1px solid #222; outline:none;}

.reviewWrite .portOrder .info {font-size:12px; color:#888888; font-weight:300; padding-bottom:15px; margin-bottom:15px; border-bottom:1px solid #888888;;}
.reviewWrite .portOrder .check {margin-bottom:15px;}
.reviewWrite .portOrder .grayInfo {background:#f8f8f8;margin-bottom:15px; font-size:12px; color:#888888; font-weight:300; padding:10px;}
.reviewPop .warnText span {font-size:11px; line-height:20px;}
.benefit {transform:scale(.5);}


.orderBase.type2 {margin:0 15px 20px 15px;}
.orderBase.type2 .tbody .tr .td {width:100%; color:#888888; font-weight:300;}
.orderBase.type2 .tbody .tr .td .ckType1 em { line-height:18px; font-size:13px; margin-left:5px; }
.orderBase.type2 .tbody .tr .td .ckType1 em span {position: relative; top:-2px; ;}
.orderBase.type2 .tbody .tr .td.no1 {text-align: left; width:100%;}
.orderBase.type2 .tbody .tr .td.no2 {width:auto; padding-left:0; text-align: left; padding-left:25px;}
.orderBase.type2 .tbody .tr.baseAddress .td {color:#222;}
.orderBase.type2 .tbody .tr .mobEtcInfo {margin-left:25px;}

.deliveryAdd {}
.deliveryAdd .formBox .saveBase {}
.deliveryAdd .formBox .tit {display: block; margin-bottom:10px; margin-top:5px; }
.deliveryAdd .formBox .rBox {display: block; }
.deliveryAdd .max01  {width:100% !important;}
.deliveryAdd .btnTwo2 {margin-top:15px;}

.mob15 {margin:0 15px;}


.rBox.previewUse {position: relative;}
.rBox.previewUse .fakeFile {display: block; }
.rBox.previewUse .fakeFile .fileInput .fileInputButton {width:49%;}
.rBox.previewUse .previewFile {position: absolute; right:0; bottom:0; margin-left:0; vertical-align: top; width:49%; height:50px; line-height:48px; border:1px solid #eaeaea; text-align: center;}
.rBox.previewUse .previewFile span {padding-left:20px; font-size:14px; color:#222222; background:url('../images/ico_file03_m.png') left center no-repeat; background-size:15px auto;}

.rBox.linkUSe .ipBox {display: block;  vertical-align: top; width:100%;}
.rBox.linkUSe .linkCheck {display: block; margin-left:0; vertical-align: top; width:100%; height:50px; line-height:48px; border:1px solid #eaeaea; text-align: center; margin-top:10px;}
.rBox.linkUSe .linkCheck span {padding-left:22px; font-size:14px; color:#222222; background:url('../images/ico_file06_m.png') left center no-repeat;  background-size:13px auto;}


.ckBox3 .soundBox {display: block; margin-right:0;}
.ckBox3 .soundBox:first-child {margin-bottom:5px;}
.ckBox3 .ckType1 {vertical-align: middle;}

.soundTest {display: inline-block; vertical-align: middle; background:#f8f8f8; border:1px solid #f2f2f2; height:30px; line-height:26px; border-radius:30px; padding:0 10px;}
.soundTest audio {position: absolute; visibility: hidden;}
.soundTest span {display: inline-block; vertical-align: middle; font-size:12px; color:#222222; font-weight:300;  margin-right:10px; }
.soundTest a {display: inline-block; vertical-align: middle; text-indent:-999em;  }
.soundTest a.play {background:url('../images/ico_file04_m.png') center no-repeat; width:8px; height:13px; margin-right:10px;  background-size:8px auto;}
.soundTest a.stop {background:url('../images/ico_file05_m.png') center no-repeat; width:7px; height:12px;  background-size:7px auto; }

.scFileIp.type2 .fileSec {max-width:100%; padding-right:0;}
.scFileIp.type2 .fileSec input[type="button"] {position: static; width:49%; margin-top:5px;}
.scFileIp.type2 .fileSec .ctr {width:49%; position: absolute; right:0; top:45px; height:40px;  text-indent:0; background:none !important; text-align: center;}
.scFileIp.type2 .fileSec .ctr span {display:inline-block; position: relative; padding-left: 18px; line-height:38px; height:40px; font-size:13px; font-weight:500;}
.scFileIp.type2 .fileSec .ctr.del span {background:url('../images/ico_file01.png') left center no-repeat; background-size:10px auto; }
.scFileIp.type2 .fileSec .ctr.add span {background:url('../images/ico_file02.png') left center no-repeat; background-size:9px auto; }
.scFileIp.type2 .fileSec input[type="button"] {right:235px}

.pwCheckPop .pwInfo {text-align: center; padding-bottom:10px; font-size:12px; color:#222; font-weight:300;}




.invitePop .in {padding:20px 15px 15px 15px;}
.invitePop .in .inviCont {text-align: center;}
.invitePop .in .inviCont .tit01{font-size:23px; color:#222222; line-height:23px; font-weight:700; margin-bottom:10px;}
.invitePop .in .inviCont .tit02{font-size:15px; color:#222222;  font-weight:300; margin-bottom:5px;}
.invitePop .in .inviCont .tit02 em {font-weight:700;}
.invitePop .in .inviCont .tit03{font-size:13px; color:#888888; font-weight:300; margin-bottom:20px;}
.invitePop .in .inviCont .tit04{font-size:13px; color:#222222; font-weight:300; padding:15px 0; background:#f8f8f8;}
.invitePop .in .inviCont .tit04 em {font-weight:700;}
.invitePop .in .inviCont .btn {text-align: center; margin-top:25px;}
.invitePop .in .inviCont .btn:after {content:''; display: block; clear:both;}
.invitePop .in .inviCont .btn a {vertical-align: top; width:150px; height:40px; font-size:13px; font-weight:500; line-height:38px; color:#fff; background:#222;}
.invitePop .in .inviCont .btn a + a {margin-left:10px;  width:49%;}
.invitePop .in .inviCont .btn.db a {float:left; width:49%;}
.invitePop .in .inviCont .btn.db a + a { float:right; width:49%; margin-left:0;}
.invitePop .in .inviCont .count {padding:25px 0; border-bottom:1px solid #eaeaea;}
.invitePop .in .inviCont .count .box .txt01 {font-size:13px; color:#222222; line-height:13px; font-weight:700; margin-bottom:10px;}
.invitePop .in .inviCont .count .box .txt01 em {color:#689ef7;}
.invitePop .in .inviCont .count .box .txt02 {font-size:11px; color:#888888; line-height:11px; font-weight:300; margin-bottom:20px; letter-spacing:-0.05em;}
.invitePop .in .inviCont .count .box .txt02 em {font-weight:700;}
.invitePop .in .inviCont .count .box .btnCheck a {display: inline-block; vertical-align: top; background:#f8f8f8; border-radius:30px; padding:6px 15px 8px 15px; border:1px solid #f2f2f2;}
.invitePop .in .inviCont .count .box .btnCheck a span {font-size:10px; font-weight:500; color:#689ef7; padding-right:15px; background:url('../images/ico_iv01_m.png') right center no-repeat; background-size:5px auto;}
.invitePop .in .inviCont .count .box.women {border-left:1px solid #f2f2f2;}
.invitePop .in .inviCont .count .box.women .txt01 em {color:#f76868;}
.invitePop .in .inviCont .count .box.women .btnCheck a span {color:#f76868;  background:url('../images/ico_iv02_m.png') right center no-repeat; background-size:5px auto;}


.deliveryCheck .in {padding:20px 15px 15px 15px;}
.deliveryCheck .in .title {padding-bottom: 0; border-bottom:none;}
.deliveryCheck .grayInfo {background:#f8f8f8;margin-bottom:20px; font-size:12px; color:#888888; font-weight:300; padding:10px;}
.deliveryCheck .grayInfo p {text-indent:-8px; padding-left:8px;}
.deliveryCheck .deliContTit {margin-bottom:10px;}
.deliveryCheck .deliContTit span {font-size:14px; color:#222222; font-weight:700;}
.deliveryCheck .dlInfo {margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid #eaeaea;}
.deliveryCheck .dlInfo dl {margin-bottom:5px;}
.deliveryCheck .dlInfo dl dt {display: inline-block; vertical-align: top; width:65px; font-size:13px; color:#888888; font-weight:300; }
.deliveryCheck .dlInfo dl dd {display: inline-block; vertical-align: top; font-size:13px; color:#222; font-weight:500; }
.deliveryCheck .findList {margin-bottom:20px;}
.deliveryCheck .findList ul{position: relative;}
.deliveryCheck .findList ul:before {content:''; position: absolute; left:6px; top:-3px; width:1px; height:calc(100% - 18px); background:#eaeaea;}
.deliveryCheck .findList ul li {position: relative; padding-bottom:20px;}
.deliveryCheck .findList ul li:last-child {padding-bottom:0;}
.deliveryCheck .findList ul li:after {content:''; display: block; clear:both;}
.deliveryCheck .findList ul li .time {position: relative; float:none; font-size:11px; line-height:11px; color:#aaaaaa; font-weight:300; padding-left:30px; margin-bottom:5px;}
.deliveryCheck .findList ul li .time:after {content:''; position: absolute; left:2px; top:2px; width:9px; height:9px; background:#eaeaea; border-radius:50%;}
.deliveryCheck .findList ul li .info {padding-left:30px; font-size:13px; line-height:13px; color:#888888; font-weight:300;}
.deliveryCheck .findList ul li .tel {display: inline-block; text-indent:-999em; width:15px; height:15px; background:url('../images/ico_deli02_m.png') center no-repeat; background-size:15px auto;}
.deliveryCheck .findList ul li .tel.pc {display: none;}
.deliveryCheck .findList ul li .tel.mob {display: inline-block; margin-left:5px;}
.deliveryCheck .findList ul li .place { display: inline-block; vertical-align: middle;}
.deliveryCheck .findList ul li .state {padding-left:10px; margin-left: 8px; position: relative; display: inline-block; vertical-align: middle; color:#aaaaaa;}
.deliveryCheck .findList ul li .state:before {content:''; position: absolute; left:0; top:50%; margin-top:-7px; width:1px; height:14px; background:#eaeaea;}
.deliveryCheck .findList ul li.complete .time {color:#222;}
.deliveryCheck .findList ul li.complete .time:after {content:''; position: absolute; left:0; top:-3px; width:15px; height:15px; background:url('../images/ico_deli01_m.png') center no-repeat; background-size:15px auto; border-radius:50%;}

.deliveryCheck .findList ul li.complete .place {color:#222; font-weight:700;}
.deliveryCheck .findList ul li.complete .state {color:#689ef7; font-weight:500;}
.deliveryCheck .btnTwo {max-width:415px; margin:0 auto;} 
.deliveryCheck .btnTwo a {height:45px; line-height:43px;}

.cancelOrderPop .in {padding:20px 15px 15px 15px}
.cancelOrderPop .in .title {border-bottom:0; padding-bottom:0;}
.cancelOrderPop .in .reviewTxtArea {padding-bottom:0;  border-bottom:none;}
.cancelOrderPop .in .reviewTxtArea .selBox {width:100%; margin-bottom:10px;}
.cancelOrderPop .in .reviewTxtArea .selBox select {font-size:13px;}
.cancelOrderPop .in .picVideo {padding-bottom:25px; margin-bottom:25px; border-bottom:1px solid #eaeaea}
.cancelOrderPop .in .btType01.h60 {max-width:100%; height:45px; line-height:43px;}

.cancelOp {margin-bottom:15px;}
.cancelOp .ckType4 {float:left; width:32.6%; margin-left:1%;}
.cancelOp .ckType4:first-child {margin-left:0;}

.ckType4 {display: inline-block; vertical-align: top; }
.ckType4 input {position: absolute; visibility: hidden;}
.ckType4 label {position: relative;  display: block; font-size:13px; line-height:40px; height:38px; color:#888888; border:1px solid #eaeaea; text-align: center; font-weight:300; }
.ckType4 input:checked + label {border:1px solid #222; color:#222; font-weight:500;}

.refunInfo {margin-bottom:10px; margin-top:10px;}
.refunInfo dl {margin-bottom:5px; }
.refunInfo dl:after {content:''; display: block; clear:both;}
.refunInfo dl dt {float:left; font-size:13px; color:#888888; font-weight:300;}
.refunInfo dl dd {float:right; font-size:13px; color:#888888; font-weight:300;}
.refunInfo dl.total dt {color:#222; }
.refunInfo dl.total dd {color:#222; }
.refunInfo dl.total dd em {color:#f76868; font-size:16px; font-weight:700; }

.cancelOrderPop .grayInfo { background:#f8f8f8;margin-bottom:20px; font-size:12px; color:#888888; font-weight:300; padding:10px;}
.cancelOrderPop .grayInfo p { text-indent:-8px; padding-left:8px;}


.orderListSec .contWrap .rangeSet.type2 div {width:32%; margin-left:1.5%;}
.orderListSec .contWrap .rangeSet.type2 div:first-child {margin-left:0;}

.orderConfirmList.type2 {padding-top:5px;}
.orderConfirmList.type2 .th {border-bottom:2px solid #222;}
.orderConfirmList.type2 .th.no1 {width:25px;}
.orderConfirmList.type2 .th.no2 {width:170px;}
.orderConfirmList.type2 .th.no3 {width:auto; text-align: left;}

.orderConfirmList.type2 .tbody .td {text-align: left;}
.orderConfirmList.type2 .tbody .td.mno1 {width:25px; display: inline-block; vertical-align: middle; padding:8px 0;}
.orderConfirmList.type2 .tbody .td.mno2 {display: none;}
.orderConfirmList.type2 .tbody .td.mno3 {width:auto; display:table-cell;  text-align: left; color:#222222;  padding-top:0; font-size:13px;}
.orderConfirmList.type2 .tbody .td.mno3 .mob {color:#888888; padding-top:5px;}
.orderConfirmList.type2 .tbody .td.mno4 {display: inline-block; vertical-align: middle; width:auto; padding:8px 0;}


.rsvpWrap .rvSec {position: relative; padding-bottom:100px;}
.rsvpWrap .rvSec .sec { float:none; width:100%;}
.rsvpWrap .rvSec .sec:first-child {float:none; padding:0 0 0 0;}
.rsvpWrap .rvSec .sec .grayBox {background:#f8f8f8; padding:10px 10px 10px 10px;}
.rsvpWrap .rvSec .sec .grayBox .txtColor {font-size:11px; color:#888888; font-weight:300;}
.rsvpWrap .rvSec .sec .grayBox .txtColor li {display: inline-block; vertical-align: top; margin-right:10px; letter-spacing:-0.06em; }
.rsvpWrap .rvSec .sec .grayBox .txtColor li p {position: relative; margin-bottom:8px; padding-left:10px; font-size:10px; line-height:10px; font-weight:300; color:#888888}
.rsvpWrap .rvSec .sec .grayBox .txtColor li p:after {content:''; position: absolute; left:0; top:50%; margin-top:-3px; width:6px; height:6px; border-radius:50%; background:#222;}


.rsvpWrap .rvSec .sec .grayBox .info {font-size:11px; color:#888888; font-weight:300; padding-top:10px; margin-top:5px; border-top:1px solid #f2f2f2;}

.rsvpWrap .rvSec .sec .totalCount {position: absolute; left:0; bottom:0; width:100%; margin-top:0; padding:15px 0; text-align: center; background:#f8f8f8;  font-size:13px; color:#222; font-weight:300; text-align: center;}
.rsvpWrap .rvSec .sec .totalCount em {font-weight:700; font-size:15px;}


.rsvpWrap .rvSec .sec .graphBox {margin-top:15px;}
.rsvpWrap .rvSec .sec .graphBox .totalTxt {text-align: right; font-size:12px; line-height:12px; color:#888888; font-weight:300; margin-bottom:35px;}
.rsvpWrap .rvSec .sec .graphBox .totalTxt em {color:#222222; font-weight:700; margin-left:5px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar {border-bottom:1px solid #f2f2f2; padding-bottom:10px; margin-bottom:10px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box {position: relative; float:left; width:33.3%;  height:150px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul {position: absolute;height:100%;width:100%; text-align: center; }
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li {position: relative; display: inline-block; height:150px; vertical-align: bottom;  width:12px; margin-left:5px;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li:first-child {margin-left:0;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li > div { position: absolute; left:0; bottom:0; width:100%; background:#000; border-radius:10px 10px 0 0;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box ul li > div span {position: absolute; left:50%; margin-left:-50px; top:-16px; width: 100px; text-align: center; font-size:12px; line-height:12px; color:#909090; font-weight:300; }
.rsvpWrap .rvSec .sec .graphBox .graphBar .box .name {position: absolute; left:0; width: 100%; bottom:-33px; text-align: center; font-size:12px; line-height:12px; color:#222222; font-weight:700;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box .name span {padding-left:24px; background:url('../images/ico_rv01_m.png') left center no-repeat; background-size:18px auto;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no2 .name span {padding-left:18px; color:#689ef7; background:url('../images/ico_rv02_m.png') left center no-repeat; background-size:12px auto;}
.rsvpWrap .rvSec .sec .graphBox .graphBar .box.no3 .name span {padding-left:18px;color:#f76868; background:url('../images/ico_rv03_m.png') left center no-repeat; background-size:12px auto;}


.rsvpWrap .orderListSec .rangeBox .rBox {float:none; width:100%;}
.rsvpWrap .orderListSec .rangeBox .rBox:last-child {float:none; }
.rsvpWrap .orderListSec .contWrap .prdSearch .ipBox {padding-left:0;}

.orderConfirmList.type3 {padding-top:0;}
.orderConfirmList.type3 .th {border-bottom:2px solid #222;}
.orderConfirmList.type3 .th.no1 {width:25px;}
.orderConfirmList.type3 .th.no2 {width:115px;}
.orderConfirmList.type3 .th.no3 {width:85px; }
.orderConfirmList.type3 .th.no4 {width:145px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no5 {width:115px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no6 {width:200px; padding-left:10px; text-align: left;}
.orderConfirmList.type3 .th.no7 {width:auto; text-align: left;}
.orderConfirmList.type3 .th.no8 {width:145px; }

.orderConfirmList.type3 .tbody .tr {position: relative;}
.orderConfirmList.type3 .tbody .tr .td {font-size:10px; color:#222; font-weight:300; display:table-cell; letter-spacing:-0.05em;}
.orderConfirmList.type3 .tbody .tr .td.mno1 {width:20px; text-align: left; }
.orderConfirmList.type3 .tbody .tr .td.mno2 {display: none;}
.orderConfirmList.type3 .tbody .tr .td.mno3 {width:45px; vertical-align: top; padding-top:10px; }
.orderConfirmList .tbody .tr .td.mno3  .dv {display: inline-block; font-size:10px; height:18px; width:47px; line-height:11px; color:#222222; background:#f8f8f8; padding:2px 3px; border:1px solid #f2f2f2; }
.orderConfirmList .tbody .tr .td.mno3  .dv.color1 {background:#f76868; color:#fff;}
.orderConfirmList .tbody .tr .td.mno3  .dv.color2 {background:#689ef7; color:#fff;}
.orderConfirmList.type3 .tbody .tr .td.mno4 {width:90px; padding-left:5px; text-align: left; font-size:10px; color:#222;}
.orderConfirmList.type3 .tbody .tr .td.mno4 em {font-weight:700; font-size:13px;}
.orderConfirmList.type3 .tbody .tr .td.mno5 {position: absolute; right:0; top:3px; width:auto;  padding-left:5px; text-align: left;}
.orderConfirmList.type3 .tbody .tr .td.mno5 .mob {display: inline-block; vertical-align: middle; padding-right:7px; margin-right:2px; position: relative;}
.orderConfirmList.type3 .tbody .tr .td.mno5 .mob:after {content:''; position: absolute; right:0; top:50%; height:10px; margin-top:-5px; width:1px; background:#eaeaea;}
.orderConfirmList.type3 .tbody .tr .td.mno5 .invite {color:#cccccc; font-weight:700; display: inline-block; vertical-align: middle; }
.orderConfirmList.type3 .tbody .tr .td.mno5 .invite.on {color:#222; padding-right:18px; background:url('../images/ico_rv04_m.png') right center no-repeat; background-size:12px auto;}
.orderConfirmList.type3 .tbody .tr .td.mno6 {display: none;}
.orderConfirmList.type3 .tbody .tr .td.mno7 {display: none;}
.orderConfirmList.type3 .tbody .tr .td.mno8 {display: none;}
.orderConfirmList.type3 .tbody .tr .td.mno9 {display: none;}
.orderConfirmList.type3 .tbody .tr .ico1 {padding-left: 15px; background:url('../images/ico_rv05.png') left center no-repeat; background-size:10px auto;}
.orderConfirmList.type3 .tbody .tr .ico2 {padding-left: 15px; background:url('../images/ico_rv06.png') left center no-repeat; background-size:10px auto;}
.orderConfirmList.type3 .tbody .tr .ico3 {padding-left: 15px; background:url('../images/ico_rv08.png') left center no-repeat; background-size:10px auto;}
.orderConfirmList.type3 .tbody .tr .btnTel {margin-top:10px;}
.orderConfirmList.type3 .tbody .tr .btnTel a {display: block; padding:12px 0; background:#f8f8f8; border:1px solid #f2f2f2; text-align: center; font-size:12px; font-weight:500;}
.orderConfirmList.type3 .tbody .tr .btnTel a span {padding-left: 22px; background:url('../images/ico_rv07.png') left center no-repeat; background-size:13px auto;}


.quickArea {display: none;}


.reviewSelectPop .in {padding:20px 15px 20px 15px;}
.reviewSelectPop .in .title {margin-bottom:0; border-bottom:none;}
.reviewSelectPop .in .reviewSelect {padding:15px; background:#f8f8f8; margin-bottom:20px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc {height:280px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:15px;}
.reviewSelectPop .in .reviewSelect .scrollBox .inSc.mCS_no_scrollbar .mCSB_inside>.mCSB_container {padding-right:0;}
.reviewSelectPop .in .reviewSelect .basePrd {margin-bottom:5px; cursor:pointer;}
.reviewSelectPop .in .reviewSelect .basePrd.active {border:2px solid #222; padding:14px;}


.sampleSave .in {padding:20px 15px 20px 15px;}
.sampleSave .tabSave {margin-bottom:15px; margin-top:0;}
.sampleSave .tabSave:after {content:''; display: block; clear:both;}
.sampleSave .tabSave a {width:49%; float:left; border:1px solid #eaeaea; height:40px; line-height:40px; text-align: center; font-size:11px; color:#888888; font-weight:300;}
.sampleSave .tabSave a.active {border:1px solid #222222; color:#222222; font-weight:500;}
.sampleSave .tabSave a:last-child {float:right;}
.sampleSave .sample-top {border-bottom:1px solid #f2f2f2; margin-bottom:15px;}
.sampleSave .sample-top .swiper-slide {font-size:12px; line-height:12px; padding-bottom:10px; color:#888888; font-weight:300; display: inline-block; width:auto; margin-right:17px !important;}
.sampleSave .sample-top .swiper-slide:last-child {margin-right:0 !important;}
.sampleSave .sample-top .swiper-slide.swiper-slide-thumb-active {font-weight:700; border-bottom:2px solid #222222; color:#222222;}
.sampleSave .sample-bottom {position: relative; background:#f8f8f8; margin-bottom:15px;}
.sampleSave .sample-bottom .swiper-slide  {padding:10px 0; text-align: center; position: relative; }
.sampleSave .sample-bottom .swiper-slide .img {position: relative; display: inline-block;}
.sampleSave .sample-bottom .swiper-slide .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.5);}
.sampleSave .sample-bottom .swiper-slide img {height:auto; max-height:280px; vertical-align: middle;}
.sampleSave .sample-bottom .swiper-slide .btnSave {position: absolute; left:0; bottom:15px; width:100%; text-align: center; z-index: 10; } 
.sampleSave .sample-bottom .swiper-slide .btnSave a {font-size:12px; line-height:12px; font-weight:500; color:#ffffff; padding-left:20px; background:url('../images/sub/ico_slide03_m.png') left center no-repeat; background-size:13px auto; }
.sampleSave .sample-bottom .nav a {position: absolute; top:50%; margin-top:-9px; width:11px; height:18px; text-indent:-999em; z-index: 10;}
.sampleSave .sample-bottom .nav a.prev {left:15px; background:url('../images/sub/ico_slide01_m.png') center no-repeat;  background-size:12px auto;}
.sampleSave .sample-bottom .nav a.next {right:15px; background:url('../images/sub/ico_slide02_m.png') center no-repeat;  background-size:12px auto;}

.sampleInvite .in .title {border-bottom:0; margin-bottom:0; border-bottom:none;}
.sampleInvite .imgOne {position: relative; background:#f8f8f8; margin-bottom:15px;}
.sampleInvite .imgOne .box  {padding:10px 0; text-align: center; position: relative; }
.sampleInvite .imgOne .box .img {position: relative; display: inline-block;}
.sampleInvite .imgOne .box .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.1);}
.sampleInvite .imgOne .box img {height:auto; max-height:280px; vertical-align: middle;}
.sampleInvite .imgOne .box .btnSave {position: absolute; left:0; bottom:15px; width:100%; text-align: center; z-index: 10; } 
.sampleInvite .imgOne .box .btnSave a {font-size:12px; line-height:12px; font-weight:500; color:#000; padding-left:20px; background:url('../images/sub/ico_slide04_m.png') left center no-repeat; background-size:13px auto; }
.agreeSample {text-align: center;}
.agreeSample .txt {padding-top:10px; font-size:11px; font-weight:300; color:#888888; margin-bottom:20px; }


.designSample .in {padding:20px 15px 20px 15px;}
.designSample .in .title {}
.designSample .sample-top2 {border-bottom:1px solid #f2f2f2; margin-bottom:15px;}
.designSample .sample-top2 .swiper-slide {font-size:12px; line-height:12px; padding-bottom:10px; color:#888888; font-weight:300; display: inline-block; width:auto; margin-right:17px !important;}
.designSample .sample-top2 .swiper-slide:last-child {margin-right:0 !important;}
.designSample .sample-top2 .swiper-slide.swiper-slide-thumb-active {font-weight:700; border-bottom:2px solid #222222; color:#222222;}
.designSample .sample-bottom2 {position: relative; background:#f8f8f8; margin-bottom:15px;}
.designSample .sample-bottom2 .swiper-slide  {padding:10px 0; text-align: center; position: relative; }
.designSample .sample-bottom2 .swiper-slide .img {position: relative; display: inline-block;}
.designSample .sample-bottom2 .swiper-slide .img:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:rgba(0,0,0,.1);}
.designSample .sample-bottom2 .swiper-slide img {height:auto; max-height:280px; vertical-align: middle;}
.designSample .sample-bottom2 .swiper-slide .btnSave {position: absolute; left:0; bottom:15px; width:100%; text-align: center; z-index: 10; } 
.designSample .sample-bottom2 .swiper-slide .btnSave a {font-size:12px; line-height:12px; font-weight:500; color:#222; padding-left:20px; background:url('../images/sub/ico_slide04_m.png') left center no-repeat; background-size:13px auto; }
.designSample .sample-bottom2 .nav a {position: absolute; top:50%; margin-top:-9px; width:11px; height:18px; text-indent:-999em; z-index: 10;}
.designSample .sample-bottom2 .nav a.prev {left:15px; background:url('../images/sub/ico_slide01_m.png') center no-repeat;  background-size:12px auto;}
.designSample .sample-bottom2 .nav a.next {right:15px; background:url('../images/sub/ico_slide02_m.png') center no-repeat;  background-size:12px auto;}

.quickEtc {position: fixed; right:0; top:auto;  margin-top:0; bottom:5%; z-index:10;}
.quickEtc .btn a {display: block; width:115px; height:35px; line-height:33px; border-radius:10px 0 0 10px; font-size:11px; }
.quickEtc .btn a span {padding-left:20px; background:url('../images/sub/ico_q01_m.png') left center no-repeat; background-size:15px auto;}
.quickEtc .btn.no1 a {margin-bottom:5px;}
.quickEtc .btn.no2 a {color:#fff; background:#222222;}
.quickEtc .btn.no2 a span {background:url('../images/sub/ico_q02_m.png') left center no-repeat; background-size:15px auto;}



.orderBase.type3 .orderConfirmList .imgTxt .txtWrap {position: relative; top:0; padding-bottom:0;}
.orderBase.type3 .orderConfirmList .btnOpChange {position:static; text-align: left; width:100%; margin-top:10px;}
.orderBase.type3 .orderConfirmList .btnOpChange a {display: block;font-size:12px; color:#222222; font-weight:500; height:30px; line-height:28px; text-align: center; width:100%; background:#f8f8f8; border:1px solid #f2f2f2}

.warnText.bgWhite {background:#fff; text-align: center; padding:45px 0; border:1px solid #f2f2f2; margin-bottom:30px;}

.cartChange .in {padding:20px 15px;}
.cartChange .in .title {margin-bottom:0; border-bottom:none;}

.prdBox .topPrd {position: relative; padding:10px; margin-bottom:15px;}
.prdBox .topPrd:after {content:''; display: block; clear:both;}
.prdBox .topPrd .img {float:left; width:80px; height:80px; border:1px solid #f2f2f2;}
.prdBox .topPrd .txtWrap {padding-left:90px; }
.prdBox .topPrd .txtWrap .tit01 {font-size:13px; color:#222222; font-weight:300; margin-bottom:0;}
.prdBox .topPrd .txtWrap .tit02 {font-size:12px; color:#aaaaaa; font-weight:300; margin-bottom:5px;}
.prdBox .topPrd .txtWrap .tit03 {font-size:12px; color:#222222; font-weight:300;}
.prdBox .topPrd .txtWrap .tit03 span {position: relative; margin-right:10px; padding-right:10px;}
.prdBox .topPrd .txtWrap .tit03 span:after {content:''; position: absolute; right:0; top:50%; width:1px; height:10px; margin-top:-5px; background:#eaeaea;}
.prdBox .topPrd .txtWrap .tit03 span em {font-size:13px; font-weight:700;}
.prdBox .topPrd .txtWrap .tit03 span:last-child:after {display: none;}


.opDetail { padding:0; }
.opDetail .tit {font-size:12px; color:#222222; line-height:12px; font-weight:500; margin-bottom:10px;}
.opDetail .ckList  {margin-bottom:10px;}
.opDetail .sorting {margin-bottom:15px;}

.opDetail .selBox {margin-bottom:10px}
.opDetail .selBox select {height:40px; font-size:13px; }

.opDetail .totalPrice {padding-top:15px; padding-bottom:25px; border-top:1px solid #222222;;}
.opDetail .totalPrice .txt {float:left;  font-size:14px; padding-top:5px; font-weight:500; color:#222222}
.opDetail .totalPrice .price {float:right; font-size:15px;color:#222222; font-weight:300;}
.opDetail .totalPrice .price em{font-weight:700; font-size:20px;  }

.opDetail .opList {margin:0 -15px;}
.opDetail .opList ul li {padding:15px; position: relative; border-top:1px solid #f2f2f2;;}
.opDetail .opList ul li .txtWrap .tit01 {font-size:13px; font-weight:700; color:#222222; margin-bottom:2px;}
.opDetail .opList ul li .txtWrap .tit02 {font-size:12px; font-weight:300; color:#aaaaaa;}
.opDetail .opList ul li .control {margin-top:10px; font-size: 0;}
.opDetail .opList ul li .control a {width:20px; height:20px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-indent:-999em;}
.opDetail .opList ul li .control a.min {background:#f8f8f8 url('../images/sub/ico_min_m.png') center no-repeat;  background-size:8px auto;}
.opDetail .opList ul li .control a.plus {background:#f8f8f8 url('../images/sub/ico_plus_m.png') center no-repeat;  background-size:8px auto; }
.opDetail .opList ul li .control input {font-size:12px; color:#222222; font-weight:300; width:30px; height:20px; display: inline-block; vertical-align: middle; border:1px solid #f2f2f2; text-align: center; margin:0 5px;}
.opDetail .opList ul li .price {position: absolute; right:15px; bottom:20px;font-size:13px; line-height:20px; color:#222222; font-weight:300;}
.opDetail .opList ul li .price em {font-weight:700;}
.opDetail .opList ul li .del {position: absolute; right:15px; top:15px; text-indent:-999em; width:14px; height:14px; background:url('../images/sub/ico_list_del.png') center no-repeat; background-size:10px auto;}


.prdSelPop .in .title {margin-bottom:0; border-bottom:none;}
.prdSelPop .in .basePrdList {padding:15px; background:#f8f8f8; margin-bottom:20px;}
.prdSelPop .in .basePrdList li {float:none; width:100%; margin-bottom:1.5%; cursor:pointer;}
.prdSelPop .in .basePrdList li.active {border:2px solid #222222;}
.prdSelPop .in .basePrdList li.active .basePrd {padding:13px;}
.prdSelPop .in .basePrdList li:nth-child(2n) {margin-left:0;}
.prdSelPop .in .basePrdList li .basePrd {margin-bottom:0;}
.prdSelPop .in .basePrdList li .basePrd .img {width:60px; height:60px;}
.prdSelPop .in .basePrdList li .basePrd .txtWrap {padding-left:70px;}
.prdSelPop .in .basePrdList li .basePrd .txtWrap .txt .tit01 {white-space:nowrap; overflow:hidden; text-overflow:ellipsis}

.prdSelPop .in .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:15px;}
.prdSelPop .in .btnTwo2 {text-align: center;}
.prdSelPop .in .btnTwo2 a.black {float:none; display: inline-block;}


.fileBox2 {width:100%; padding-right:0;}
.fileBox2 .fileList {border:1px solid #eaeaea; height:50px; line-height:48px;}
.fileBox2 .fileList span {display: inline-block; margin-left:10px; font-size:12px; color:#222222;}
.fileBox2 .fileList span a { margin-left:2px; background-size:10px auto; }
.fileBox2 .fakeFile {width:100%; position: relative; height:50px; margin-top:10px; }
.fileBox2 .fakeFile input {position: absolute; left:0; bottom:0;width:49%; }
.fileBox2 .fakeFile .btn {width: 49%; height: 50px; line-height:48px;position: static; display: block; background:#222; font-size:14px; }


.pwCheckPop .pwCheckTit {font-size:12px; color:#222222; font-weight:300; line-height:12px; margin-bottom:15px; text-align: center;}


.basePop .title.borderNone {border-bottom:none; padding-bottom:0;}
.basePop .grayBox {font-size:11px; color:#222222; font-weight:300; padding:15px 2px; margin-bottom:30px; letter-spacing:-0.03em; }

.progressWrap {margin-bottom:20px;}
.progressWrap .infoPro {margin-bottom:10px;}
.progressWrap .infoPro .percent {float:left; font-size:13px; line-height:13px; color:#222222;font-weight:700;}
.progressWrap .infoPro .percent span {display: inline !important}
.progressWrap .infoPro .remain {float:right; font-size:11px; line-height:11px; color:#888888;font-weight:300;}
.progressWrap .rail {background:#eaeaea; position: relative; border-radius:5px; height:6px; overflow:hidden;}
.progressWrap .rail span {position: absolute; left:0; top:0; width:0; height:100%; background:#689ef7;}

.saveLoading .btnTwo2.center a:last-child {float:none;}

.pwShow {position: relative;}
.pwShow input {padding-right:55px;}
.pwShow .btnShow {position: absolute; right:10px; margin-top:-6px;; padding-left:19px; background:url('../images/ico_show_m.png') left center no-repeat; background-size:16px auto; font-size:11px; line-height:11px; color:#888888; font-weight:300;}



.formBox.opAddType .line.first {margin-top:15px;}
.formBox.opAddType .line.first .tit {width:100%; display: block;}
.formBox.opAddType .line.first .rBox {vertical-align: middle;}
.formBox.opAddType .line .rBox .ckType1 {margin-right:10px;}
.formBox.opAddType .addOptionList {margin-top:10px; width:100%;}
.formBox.opAddType .addOptionList .list {padding-top:0; margin-top:20px; border-top:1px solid #eaeaea; }
.formBox.opAddType .addOptionList .list:first-child {padding-top:0; margin-top:0; border-top:0;}
.formBox.opAddType .line {margin-top:10px;}
.formBox.opAddType .line .tit {width: auto;    padding: 10px 0;    display: block;    vertical-align: middle;    margin-bottom: 0;}
.formBox.opAddType .line.desc .tit {color:#888888; font-weight:300;}
.formBox.opAddType .line .rBox .ipBox {width: 100%; display: block; margin-bottom:5px; vertical-align: top; margin-right:0;}
.formBox.opAddType .line .rBox .addOp {display: inline-block; vertical-align: top; border:1px solid #eaeaea; width:100%; height:50px; line-height:50px; text-align: center; }
.formBox.opAddType .line .rBox .addOp span {font-size:12px; color:#222222; font-weight:300; display: inline-block; vertical-align: middle; width:auto; height:auto; text-indent:0; padding-left:18px; background:url('../images/order/ico_plus_m.png') left center no-repeat; background-size:11px auto;}
.formBox.opAddType .line .rBox .delOp {display: inline-block; vertical-align: top; border:1px solid #eaeaea; width:100%; height:50px; line-height:50px; text-align: center; }
.formBox.opAddType .line .rBox .delOp span {font-size:12px; color:#222222; font-weight:300; display: inline-block; vertical-align: middle; width:auto; height:auto; text-indent:0; padding-left:20px; background:url('../images/order/ico_trash_m.png')  left center no-repeat; background-size:13px auto;}


.addRsvpList {padding-top:25px; margin-top:25px; border-top:1px solid #eaeaea;;}
.addRsvpList .tit span{font-size:10px; line-height:inherit; color:#888888; font-weight:300; display: block; padding-top:5px;}
.addRsvpList ul {margin-left:0;}
.addRsvpList ul li {float:left; width:49%; height:auto; margin-left:0; margin-bottom:3%; border:1px solid #eaeaea; border-radius:8px; padding:10px 0 10px 15px;}
.addRsvpList ul li:nth-child(2n) {margin-left:2%;}
.addRsvpList ul li:first-child {margin-left:0;}
.addRsvpList ul li .txt01 {font-size:12px; line-height:13px; font-weight:300; color:#222222; margin-bottom:5px;}
.addRsvpList ul li .txt02 {font-size:20px; line-height:20px; font-weight:700; color:#222222;}


.partnerSelect .partnerSelctList {text-align: center; margin-bottom:20px; font-size: 0;}
.partnerSelect .partnerSelctList ul {max-height:140px; overflow-y:auto}
.partnerSelect .partnerSelctList ul li {width:49%;display: inline-block; vertical-align: top; border:1px solid #eaeaea; height:60px; line-height:60px; margin-bottom:10px; padding:0 15px;}
.partnerSelect .partnerSelctList ul li:nth-child(2n) {margin-left:2%;}
.partnerSelect .partnerSelctList ul li img {vertical-align: middle; max-width:100%; }


.voteForm .infoPw {margin-bottom:0; padding-bottom:0; border-bottom:none;}
.voteForm .infoPw h3 em {font-size: 13px; font-weight:300; }
.voteForm .warnText {margin:25px 0 10px 0; border:1px solid #2b88fa; padding:15px; text-align: left; border-radius:7px;}
.voteForm .btnPartCheck {background:#222222; border-radius:7px; padding:15px; text-align: center; margin-bottom:15px; }
.voteForm .btnPartCheck a {font-size:13px; color:#ffffff; font-weight:300; }
.voteForm .btnPartCheck span {display: inline-block; vertical-align: top;   font-weight:300;  padding-left:23px; background:url('../images/new/part02_m.png') left center no-repeat; background-size:17px auto;}
.voteForm .btnPartCheck em {font-weight:500;}
.voteForm .ckBox2 {vertical-align: top; padding-bottom:10px !important; padding-top:0 !important;}
.voteForm .ckBox2 .oneCk {margin-bottom:10px;}

.linkWrap {padding-top:0; }
.linkWrap #iframeWrap {
    position:fixed; top:0;

    height:calc(100% - 50px);
    height: calc(100% - 50px - constant(safe-area-inset-bottom));
    height: calc(100% - 50px - env(safe-area-inset-bottom));


}
.linkWrap #iframeWrap iframe {
    position:fixed; top:0;
    height:calc(100% - 50px); 
    height: calc(100% - 50px - constant(safe-area-inset-bottom));
    height: calc(100% - 50px - env(safe-area-inset-bottom));
}
.linkWrap.type2 #iframeWrap {height:calc(100vh - 75px);
    height: calc(100vh - 75px - constant(safe-area-inset-bottom));
    height: calc(100vh - 75px - env(safe-area-inset-bottom));
}
.linkWrap.type2 #iframeWrap iframe {height:calc(100vh - 75px);}
.checkLink {position: fixed; top:auto; bottom:0; width: 100%; background:#fff; height:50px; line-height:50px; color:#222222; font-size:12px; text-align: center;}
.checkLink .txt {display: inline-block; vertical-align: middle; padding:0 20px  0 22px; background:url('../images/new/ico_confirm_m.png') left center no-repeat; background-size:15px auto;}
.checkLink .confirm {display: inline-block; vertical-align: middle; font-size:12px; color:#fff; font-weight:700; background:#689ef7; width:120px; height:30px; line-height:28px; border-radius:30px}

.linkWrap.type2 .checkLink {height:75px; line-height:inherit; padding:7px; display:flex;}
.linkWrap.type2 .checkLink .box {width:50%; position:relative;}
.linkWrap.type2 .checkLink .box:first-child {margin-right:0; padding-right:7px;}
.linkWrap.type2 .checkLink a {display:block !important; width:100% !important;}
.linkWrap.type2 .checkLink .txt {padding-right:0; margin-bottom:7px;}
.linkWrap.type2 .checkLink .confirm {border-radius:5px; width:100%; height:35px; line-height:33px;}
.linkWrap.type2 .checkLink .txt.gray {background:url('../images/port/ico_portText_m.png') left center no-repeat; background-size:15px auto; padding-left:22px;}
.linkWrap.type2 .checkLink .edit { font-size:12px; height:35px; line-height:33px; border-radius:5px;}



.blueText {margin-bottom:20px; text-align: center; font-size:12px; color:#222222; font-weight:300;}
.blueText .no2 {color:#689ef7; font-weight:400; }
.blueText .no6 {letter-spacing:-0.02em;}
.confirmLink .btnTwo {max-width:100%; margin:0 auto;}

.confirmLink .text01 {font-size: 12px; color:#222222; font-weight: 300; margin-bottom:5px; text-align: center;}
.confirmLink .text01 br {display: none;}
.confirmLink .text02 {font-size: 11px; color:#222222; font-weight: 500; margin-bottom:15px; text-align: center;}
.confirmLink .text02 br {display: none;}
.checkList {text-align: left; padding-bottom:15px; padding-top:25px; border-top:1px solid #eaeaea;}
.checkList br {display: none;}
.checkList span{display: inline-block; width:35%; vertical-align: top; font-size:12px; color:#22222; margin-right:0; margin-bottom:10px; padding-left:17px; background:url('../images/port/ico_port_check_m.png') left center no-repeat; background-size:13px auto;}
.checkList span:nth-child(1){width:60%;}
.checkList span:nth-child(3){width:60%;}
.checkList span:nth-child(6){width:65%;}



.btType03 {font-size:12px; color:#222222;  font-weight:500; border:1px solid #eaeaea; text-align: center; width:225px; height:40px; line-height:38px; }
.btType03.blue { background:#689ef7; border:none; color:#fff; }



.allOrderEnd .link:after {content:''; display: block; clear:both;}
.allOrderEnd .link a {position: relative; float:left; width:49%; margin-left:0; margin-bottom:2%; background:#f8f8f8; height:40px; line-height:38px; border:1px solid #eaeaea; font-size:11px; color:#aaaaaa; text-align: center; font-weight:300; }
.allOrderEnd .link a:nth-child(2n) {margin-left:2%;}
.allOrderEnd .link a.active {color:#fff; font-weight:500; border:none; background:#222;}
.allOrderEnd .link a .pr {transform:scale(.5); transform-origin:right bottom;}


.cartPopup {text-align: center;}
.cartPopup .cartCont .tit01 {font-size:12px; color:#222222; }
.cartPopup .cartCont .tit02 {font-size:12px; color:#888888; font-weight:300; margin-bottom:20px; }
.cartPopup .cartCont .btn a {float:left; width:48%; height:45px; line-height:43px; background:#222222; color:#fff; font-size:12px; font-weight:500;}
.cartPopup .cartCont .btn a.white {float:right; background:#fff; border:1px solid #222; color:#222222; }

.warnText.gray {background:#f8f8f8; padding:40px 0; text-align: center !important; margin:15px 15px 30px 15px;}

.mainPopup .in {position: fixed; left:15px !important; top:50% !important;  transform:translateY(-50%); width:calc(100% - 30px); }
.mainPopup .in .mainPopupCont {width:auto !important; height:auto !important;}
.mainPopup .in .mainPopupCont p {font-size:0;}
.mainPopup .in .swiper-pagination {bottom:15px; font-size:0;}
.mainPopup .in .swiper-pagination span {width:7px; height:7px; background:rgba(255,255,255,.5); opacity:1 !important}
.mainPopup .in .swiper-pagination .swiper-pagination-bullet-active {background:#fff;}
.mainPopup .in .btn {background:#fff; text-align: center;}
.mainPopup .in .btn:after {content:''; display: block; clear:both;}
.mainPopup .in .btn a {position: relative;float:left; width:50%; height:45px; line-height:43px; color:#888888; font-size:12px; font-weight:300;}
.mainPopup .in .btn a:last-child:after {content:''; position: absolute; left:0; top:50%; width:1px; height:15px; background:#eaeaea; margin-top:-7px; }


.eventImg {margin-bottom:30px; text-align: center; margin:0 -15px;}
.eventImg img{width:100%;}

.eventReply {max-width:1280px; margin:0 auto; padding:0 15px;}
.eventReply .title { margin-bottom:13px;}
.eventReply .title em{font-size:16px; line-height:16px; color:#222222;}
.eventReply .title .warnText {display: block; padding:0; border:none; margin:0; margin:10px 0 15px 0;}
.eventReply .replyWrite {border:1px solid #eaeaea; margin-bottom:20px; }
.eventReply textarea {border:none; border-bottom:1px solid #eaeaea; padding:15px; resize:none; height:130px; width:100%; font-size:13px; vertical-align: top; position: relative; z-index: 10;}
.eventReply textarea::-webkit-input-placeholder { font-size: 13px; color:#888888; }
.eventReply .info {position: relative; background:#fff;}
.eventReply .info .count {padding:15px; font-size:12px; line-height:12px; color:#222222; font-weight:300;}
.eventReply .info .count em {color:#689ef7; font-weight:700;}
.eventReply .info .rightBtn {position: absolute; right:10px; top:6px;}
.eventReply .info .rightBtn .ckType1 {display: inline-block; vertical-align: middle;}
.eventReply .info .rightBtn .up {display: inline-block; vertical-align: middle; width: 60px; height:30px; line-height:30px; text-align: center; font-size:13px; color:#fff; font-weight:500; margin-left:15px; background:#222222;}

.replyList ul li { border-bottom:1px solid #eaeaea;;}
.replyList .replyBox {position: relative; padding:20px 0;}
.replyList .name {font-size:15px; line-height:15px; color:#000000; font-weight:500; margin-bottom:5px;}
.replyList .date{font-size:13px; line-height:13px; color:#aaaaaa; font-weight:300; margin-right:15px; display: inline-block; vertical-align: top;}
.replyList .info:after {content:''; display: block; clear:both;}
.replyList .edit{float:right; vertical-align: top; }
.replyList .edit a{font-size:12px; line-height:12px; color:#515151; font-weight:300;  display: inline-block; vertical-align: top; }
.replyList .edit a:first-child {position: relative; padding-right:10px; margin-right:10px;}
.replyList .edit a:first-child:after {content:''; position: absolute; right:0;top:0; width: 1px; height:10px; background:#c2c2c2;}
.replyList .text {margin-top:15px; font-size:13px; color:#000000; font-weight:300; padding-right:0; }
.replyList .text.pw {color:#888888; padding-left: 22px; background:url('/html/images/ico_eventPw.png') left 2px no-repeat; background-size:14px auto;}
.replyList .btn {position: static; margin-top:20px; font-size:13px; color:#000000; font-weight:300; }
.replyList .btn a {font-size:13px; display: inline-block; vertical-align: top; color:#515151; padding-bottom:7px; border-bottom:1px solid #717171; margin-left:6px; }
.replyList .btn a:first-child {margin-left:0;}
.replyList .btn a.list {color:#689ef7; border-bottom:1px solid #689ef7; }
.replyList .replyWrite {position: relative; padding:20px 20px 45px 20px;background:#fafafa; display: none;  border:none; margin-bottom:0; border-top:1px solid #eaeaea;}
.replyList .replyWrite textarea { border:1px solid #eaeaea; }
.replyList .replyWrite .info { border:1px solid #eaeaea; border-top:none;}

.replyList .replyWrite .btnClose {position: absolute; left:0; bottom:0; width: 100%;   }
.replyList .replyWrite .btnClose a {display: block; height:45px; line-height:45px; text-align: center; font-size:13px; color:#222222; font-weight:500; }
.replyList .replyWrite .btnClose a span {padding-right:20px; background:url('/html/images/ico_event_m.png') right center no-repeat ; background-size:15px;}


.replyList .modifyWrite {border:1px solid #eaeaea; margin:0 0 20px 0;; background:#fff; position: relative; display: none;}


.replyList .replyContent {display: none; border-top:1px solid #eaeaea;}
.replyList .replyContent .list {position: relative; border-bottom:1px solid #eaeaea; background:#fafafa; padding:20px 30px;}
.replyList .replyContent .list .text em {font-weight:700;}
.replyList .replyContent .list .btn {right:75px;}

.openWrite .replyWrite {display: block;}
.openEdit .modifyWrite {display: block;}
.openReply .replyContent {display: block;}
.openReply.replyDepth {display: block;}

.btnPop {position: relative; margin-top:20px;}
.btnPop a {position: static; right:0; top:-100px; width:100%;}

.replyDepth {
    display:none;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    background: #fafafa;
    padding: 0px 30px;
}
.replyDepth .replyBox .info {
    background: #fafafa;
}
.replyDepth .text em {
    font-weight: 700;
}






/* 신규 주문상세 */
.pageLoca {max-width:1280px; margin:0 auto; display:flex; align-items:center; padding:13px 0 13px 20px;}
.pageLoca span {font-size:12px; color:#aaaaaa; font-weight:300; margin-left:6px; padding-left:10px; position: relative; background:url('../images/sub/subLnb02_m.png') left center no-repeat; background-size:5px auto;}
.pageLoca span.home {text-indent:-999em; background:url('../images/sub/subLnb01_m.png') center no-repeat;  background-size:15px auto; width:15px; height:11px;}


.previewWrap {display: none;}


.prdAllWrap .fixArea .btnOrder {}
.prdAllWrap .fixArea .btnOrder .mobSamLink  {display: block;}


.detailWrap.new {margin-bottom:0;}
.detailWrap.new .boxGrid {border-bottom:none;}
.detailWrap.new .boxGrid .detailSlide {width:100%}
.detailWrap.new .boxGrid .detailSlide .btnBack {display: none;}
.detailWrap.new .boxGrid .prdAllWrap {width:100%; margin-bottom:0; padding-top:70px; max-height:100%;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo {border-bottom:none;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .label {background:#b27085;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .title {font-size:18px; line-height:26px; margin-bottom:0; padding-bottom:15px; border-bottom:none;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview {margin-bottom:0; border-bottom:none;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .old {font-size:12px; line-height:12px;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info {font-size:13px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info em {font-size:18px; line-height:18px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .price .info .percent {font-size:17px; line-height:17px; margin-left:5px; }
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .review {padding-top:10px;}
.detailWrap.new .boxGrid .prdAllWrap .prdInfo .priceReview .review .link {font-size:12px;}
.detailWrap.new .boxGrid .prdAllWrap .starList li {width:14px; height:13px; background-size:14px auto;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box {border-radius:10px;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box a { height:50px; line-height:50px;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box label {font-size:15px; height:50px; line-height:50px; font-weight:500;}
.detailWrap.new .boxGrid .prdAllWrap .favoShare .box a.share span {font-size:15px; font-weight:500;}
.detailWrap.new .boxGrid .prdAllWrap .wranBox  { background:#fafafa; padding:17px; margin:0 15px 15px 15px; border-radius:10px;}
.detailWrap.new .boxGrid .prdAllWrap .wranBox span { font-size:12px;}
.detailWrap.new .detailSlide .swiper-pagination {bottom:12px;}
.detailWrap.new .detailSlide .swiper-pagination span {background:#fff;}
.detailWrap.new .detailSlide .swiper-pagination span.swiper-pagination-bullet-active {background:#000000;}
.detailWrap.new .detailSlide .gallery-top {border:none; margin-bottom:0;; }
.detailWrap.new .detailSlide .gallery-thumbs .swiper-slide {width:85px !important; border-radius:5px; overflow:hidden; margin-right:10px !important;}
.detailWrap.new .detailSlide .gallery-thumbs .previewThumb:after {content:''; position: absolute; left:0; top:0; width:100%; height:100%; background:url('../images/sub/subMouse.png') center no-repeat; z-index: 1;}
.detailWrap.new .detailSlide .gallery-thumbs .previewThumb:before {content:''; position: absolute; left:0; top:0; width:100%; height:100%;background:rgba(0,0,0,.4); }

.detailWrap.new .prdAllWrap .fixArea .border {position: relative; top:27px; padding:10px 0; z-index: 50; background:#fff; border-top-left-radius:10px; border-top-right-radius:10px; transform:none; opacity:1;}
.detailWrap.new .prdAllWrap .fixArea .border span {background:url('../images/sub/closeSam.png') center no-repeat; height:13px; background-size:auto 13px;; }
.detailWrap.new .prdAllWrap .fixArea .fixIn {border-top-left-radius:10px; border-top-right-radius:10px; padding-top:27px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .warnSel {font-size:11px; color:#000000; font-weight:300; padding-left:16px; background:url('../images/sub/warnSam1_m.png') left center no-repeat; background-size:12px auto;  margin-bottom:10px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .warnSel.type2 {color:#aaaaaa; background:url('../images/sub/warnSam2_m.png') left center no-repeat; background-size:12px auto; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .selBox select {border-radius:10px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList {margin:0;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li {background:#fafafa; border-radius:10px; margin-bottom:10px; padding:15px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit01 {font-size:13px; padding-right:20px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .txtWrap .tit02 {font-size:12px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .del {top:17px; right:15px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .price {right:15px; bottom:18px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .price em {font-size:16px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control {margin-top:15px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a {background-color:#fff; height: 25px; width: 30px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a.min {border-top-left-radius:5px; border-bottom-left-radius:5px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control a.plus {border-top-right-radius:5px; border-bottom-right-radius:5px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .opList ul li .control input {margin:0; border-left:none; border-right:none; height: 25px; width: 45px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice {border-top:none; padding:10px 0 30px 0;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .txt {font-size:14px; line-height:14px; padding-top:5px;}
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .price {font-size:15px; line-height:15px; }
.detailWrap.new .prdAllWrap .fixArea .fixIn .totalPrice .price em {font-size:20px; line-height:20px; }

.detailWrap.new .prdAllWrap .fixArea {z-index:31;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder {background:rgba(255,255,255,.9); z-index:100; padding:7px;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder a {height:45px; line-height:45px; font-size:15px; width:49%;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink {position: relative; display: block; float:left;  }
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink:after {content:''; display: block; clear:both;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink a {float:left; width:45px; height:45px; text-indent:-999em; text-align: left;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink a:first-child {margin-right:7px;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink a.url {background:url('../images/sub/sam03_m.png') center no-repeat; background-size:45px auto;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink a.kakao {background:url('../images/sub/sam04_m.png') center no-repeat; background-size:45px auto;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink .samCheck {position: absolute; left:0px; top:-25px; width: 100%; text-align: center;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink .samCheck img {width:65px;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .cartBtn {border:1px solid #f2f2f2}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink ~ .cartBtn {display: none;}
.detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink ~ .dir {width:calc(100% - 110px);}

.openOrder .detailWrap.new .prdAllWrap .fixArea .btnOrder .mobSamLink {display: none;}
.openOrder .detailWrap.new .prdAllWrap .fixArea .btnOrder .cartBtn {display: block;}
.openOrder .detailWrap.new .prdAllWrap .fixArea .btnOrder a.dir  {width:49%;}



.prdAllWrap .fixArea .fixIn .formBox .line .checkbox .rBox  {text-align:right; overflow:hidden;}
.prdAllWrap .fixArea .fixIn .formBox .line .checkbox .rBox .rightCk {padding-top:4px;}
.prdAllWrap .fixArea .fixIn .formBox.addOption {padding:0 0 15px 0; margin-bottom: 15px; border-bottom:1px solid #eaeaea;}
.prdAllWrap .fixArea .fixIn .formBox.addOption .line {margin-top:8px;}
.prdAllWrap .fixArea .fixIn .formBox.addOption .line .tit {font-size:14px; font-weight:500; color:#222222;  min-width:125px; padding:10px 0;}
.prdAllWrap .fixArea .fixIn .formBox.addOption .line .rBox .ipBox input {height:35px;}
.prdAllWrap .fixArea .fixIn .formBox.addOption .line .checkbox .tit {min-width:180px;}
.ckType1.rightCk label {padding-right: 27px; font-size: 12px; line-height: 12px;}



.samLinkArea {position: absolute; top:0; margin-bottom:0; overflow:hidden; padding-bottom:0; border-bottom:none; width:100%;}
.samLinkArea .text {display: none;  }
.samLinkArea .btnSam {float:none; width:100%; overflow:hidden; }
.samLinkArea .btnSam .link {width:50%; height:50px; float:left; }
.samLinkArea .btnSam .link:first-child {margin-right:0;}
.samLinkArea .btnSam .link.url {background:url('../images/sub/sam03.png') center no-repeat;}
.samLinkArea .btnSam .link.kakao {background:url('../images/sub/sam04.png') center no-repeat;}
.samLinkArea .btnSam .link .pop {display: block; position: static; width:100%;  }
.samLinkArea .btnSam .link .pop a {display: block; width: 100%; font-size:12px; color:#fff; text-align: center; background:#222; border-radius:0;}
.samLinkArea .btnSam .link .pop a span {display: inline-block;  height:50px; line-height:50px;}
.samLinkArea .btnSam .link.url .pop span { padding-left:25px;   background:url('../images/sub/sam05_m.png') left center no-repeat; background-size:15px auto; }
.samLinkArea .btnSam .link.kakao .pop span { padding-left:30px;   background:url('../images/sub/sam06_m.png') left center no-repeat; background-size:19px auto; }
.samLinkArea .btnSam .link:hover .pop {display: block;}


.samLinkAreaAni {position: absolute; top:0; margin-bottom:0; overflow:hidden; padding-bottom:0; border-bottom:none; width:100%;}
.samLinkAreaAni .text {display: none;  }
.samLinkAreaAni .btnSam {float:none; width:100%; overflow:hidden; }
.samLinkAreaAni .btnSam .link {width:50%; height:50px; float:left; }
.samLinkAreaAni .btnSam .link:first-child {margin-right:0;}
.samLinkAreaAni .btnSam .link.url {background:url('../images/sub/sam03.png') center no-repeat;}
.samLinkAreaAni .btnSam .link.kakao {background:url('../images/sub/sam04.png') center no-repeat;}
.samLinkAreaAni .btnSam .link .pop {display: block; position: static; width:100%; height:50px; transition:none;   border-radius:0px;  }
.samLinkAreaAni .btnSam .link .pop a {display: block; width: 100%; font-size:12px; color:#fff; text-align: center; background:#222; border-radius:0px;}
.samLinkAreaAni .btnSam .link .pop a span {display: inline-block;  height:50px; line-height:50px; width:auto !important}
.samLinkAreaAni .btnSam .link.url .pop span { padding-left:25px !important;   background:url('../images/sub/sam05_m.png') left center no-repeat; background-size:15px auto; }
.samLinkAreaAni .btnSam .link:hover .pop {width:100% !important}
.samLinkAreaAni .btnSam .link.kakao .pop span { padding-left:30px !important;   background:url('../images/sub/sam06_m.png') left center no-repeat; background-size:19px auto; }
.samLinkAreaAni .btnSam .link:hover .pop {display: block;}







.detailWrap.new .detailFolder {padding-right:0; padding-top:0;}
.detailWrap.new .detailFolder .folder {padding:0 24px 35px 24px; margin-bottom:0; border-bottom:10px solid #f8f8f8;}
.detailWrap.new .detailFolder .folder .contBox {display: block; margin-top:0;}
.detailWrap.new .detailFolder .folder.detailImg.active .contBox {border-top:none;}
.detailWrap.new .detailFolder .folder.detailImg .contBox:after {display: none;}
.detailWrap.new .detailFolder .folder.detailImg .contBox .img {margin:0 -24px;}

.detailWrap.new .detailFolder .folder.detailImg .contBox .more {display: none;}
.detailWrap.new .detailFolder .folder.detailImg .contBox .img { height:auto; background:none; border:none;}
.detailWrap.new .detailFolder .folder > .title {font-size:16px; line-height:16px; font-weight:700; padding:15px 0;}

.detailWrap.new .detailFolder .folder .title span em {position: relative; padding-left:15px; margin-left:10px; }
.detailWrap.new .detailFolder .folder .title span em:after {content:''; position: absolute; left:0; top:50%; margin-top:-5px; width:1px; height:10px; background:#cccccc; }
.detailWrap.new .detailFolder .folder .title:after {display: none;}
.detailWrap.new .detailFolder .folder .title .count {margin-left:0; border:none; padding:0; color:#689ef7; font-size: 18px; line-height:18px;  vertical-align: middle;}
.detailWrap.new .detailFolder .btnMoreList {padding:0;}
.detailWrap.new .detailFolder .btnMoreList a {max-width:100%; border:none; border-radius:10px;}
.detailWrap.new .detailFolder .folder.review .controlBox {padding-left: 0; padding-right:0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox {padding:20px 0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox .title {padding-right:0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li.photoUse .titleBox {padding-right: 70px;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto {right:0;}
.detailWrap.new .detailFolder .folder.review .rvList > ul > li .titleBox .smPhoto span {width:60px; height:60px;}
.detailWrap.new .detailFolder .folder.review .controlBox .grade {right:0;}
.detailWrap.new .detailFolder .folder.question .stateQuestion {padding-left:0;}
.detailWrap.new .detailFolder .folder.question .stateQuestion .goQuestion{right:0;}
.detailWrap.new .detailFolder .questionList > ul > li .topBox .state{width:75px; text-align: left;}
.detailWrap.new .detailFolder .questionList > ul > li .topBox .txtWrap{padding-left: 70px;}
.detailWrap.new .detailFolder .questionList > ul > li .txt {font-size: 12px;}
.detailWrap.new .detailFolder .folder.recoEvent {height: auto;}

.detailWrap.new .detailFolder .folder.warnList {padding:0;}
.detailWrap.new .detailFolder .folder.warnList .title {padding-left:24px;}
.detailWrap.new .detailFolder .folder.warnList .contBox ul li {padding:20px 24px;}
.detailWrap.new .detailFolder .folder.warnList .contBox ul li .txt01 {display: block; padding:0; width:100%; font-size:13px; margin-bottom:5px;}
.detailWrap.new .detailFolder .folder.warnList .contBox ul li .txt02 {display: block; font-size:12px; padding:0 0 0 10px; letter-spacing:-0.01em;}
.detailWrap.new .detailFolder .folder.delivery {padding:0;}
.detailWrap.new .detailFolder .folder.delivery .title {padding-left:24px;}
.detailWrap.new .detailFolder .folder.delivery .txt {padding:20px; font-size:12px; color:#222222; font-weight:300; border-top:1px solid #f2f2f2;} 
.detailWrap.new .favoSlide {margin-bottom:0;}
.detailWrap.new .favoSlide .swiper-container {margin:0;}
.detailWrap.new .favoSlide .inner {padding:0;}
.detailWrap.new .favoSlide .swiper-slide {width:180px; margin:0 15px 0 0;}
.detailWrap.new .favoSlide .swiper-slide a .txtWrap .tit01 {font-size:14px; height:auto;}
.detailWrap.new .favoSlide .control a {z-index:10; top:65px;}
.detailWrap.new .favoSlide .control a.prev {left:-25px;}
.detailWrap.new .favoSlide .control a.next {right:-25px;}


.recoEventList {padding-bottom:35px; border-bottom:1px solid #f2f2f2;}
.recoEventList:after {content:''; display: block; clear:both;}
.recoEventList li{float:left; width:23%; margin-left:2%; }
.recoEventList li:first-child {margin-left: 0;}
.recoEventList li .img { overflow:hidden; border-radius:5px;}
.recoEventList li .img img {width:100%;}
.recoEventList li .tit01 {padding:0 0; font-size:12px; line-height:16px; color:#222222; font-weight:500;}
.recoEventList li .date {font-size:10px; color:#aaaaaa; font-weight:300;}


.fixInfo {width:100%; background:#fff; padding:5px 60px 5px 45px;; border-bottom:1px solid #eaeaea; display: none;}
.fixInfo .btnSamBack {position: absolute; left:7px;; top:5px; height:40px; width:35px; text-indent:-999em; display: inline-block;background:url('../images/sub/backSam.png') center no-repeat; background-size:auto 13px;;}
.fixInfo .imgTit {}
.fixInfo .imgTit .img {float:left; width:40px; height:40px; border-radius:10px; overflow:hidden;}
.fixInfo .imgTit .tit {padding-left:10px; font-size:12px;color:#222222; font-weight:500; line-height:40px; overflow:hidden; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}

.fixInfo .cart {position: absolute; right:25px; top:12px; }
.fixInfo .cart a {display: block; background:url('/html/images/new/ico_cart_m.png') center top no-repeat; background-size:20px auto; width:20px; height:23px;}
.fixInfo .cart a span {text-indent:-999em; display: block;}
.fixInfo .cart a .count {position: absolute; right:-6px; top:3px; min-width:15px; height:15px; line-height:14px; font-size:10px;  font-weight:500;color:#fff; background:#bf94a2; text-align: center; border-radius:50%;}


.fixTabLoca { z-index:30;}
.fixTabLoca .inFix {position: relative;  max-width:1280px; margin:0 auto; background:#fff;  z-index:30;}
.fixTabLoca .rightBuyList {display: none;}

.folderTab {width:100%;  position: relative;}
.folderTab ul {display:flex; justify-content:space-between; border-bottom:1px solid #eaeaea; text-align: center; padding:0 15px;}
.folderTab ul li {width:auto}
.folderTab ul li a {position: relative; display: block; padding:0 0; line-height:45px; font-size:12px; color:#888888; font-weight:300;  }
.folderTab ul li.active a { font-weight:700; color:#222222;  }
.folderTab ul li.active a:after {content:''; position: absolute; left:0; bottom:0; width:100%; height:2px; background:#000000;}

.fixTabOn .fixTabFake {display: block; height:46px;}
.fixTabOn .fixTabLoca {position: fixed !important; top:0 !important; width: 100%; }
.fixTabOn .fixInfo {display: block;}


.miniSlide {padding:15px;}



/* 이벤트 신규 상세 */
.newEventDetail { }
.newEventDetail .eventImgLeft {max-width:100%;}
.newEventDetail .eventImgLeft img {width:100%;}
.newEventDetail .eventTop {padding:25px 0 20px 0;; margin:0 15px 25px 15px; text-align: center;  border-bottom:1px solid #000000;}
.newEventDetail .eventTop .state {font-size:11px; color:#689ef7; font-weight:500; margin-bottom:10px; }
.newEventDetail .eventTop .state span {display: inline-block;  width:45px; height:20px; line-height:17px; border:1px solid #689ef7; text-align: center;}
.newEventDetail .eventTop .title {font-size:16px; line-height:25px; color:#222222; font-weight:500; margin-bottom:5px; }
.newEventDetail .eventTop .date {font-size:13px; color:#aaaaaa; font-weight:300; }
.newEventDetail .newEventReply {position: static; right:25px; top:0; width:100%; padding:0 15px;}

.newEventDetail .newEventReply .warnText.red {border:none; padding:10px 0 0 0;  margin-bottom:0; margin-left:0;}
.newEventDetail .newEventReply .warnText.red span {font-size:12px;  padding-left:20px; background-size:13px auto;}
.newEventDetail .newEventReply .btnList {width:100%; position: static;}
.newEventDetail .newEventReply .btnList a {display: block; text-align: center; font-size:13px; color:#fff; font-weight:500; height:45px; line-height:45px; background:#222222; border-radius:10px;}

.newEventDetail .paging {padding:25px 0 10px 0;}
.newEventDetail .paging > a {width:35px;}
.newEventDetail .paging .num {margin:0 10px;}
.newEventDetail .paging .num a {margin:0;}


.fixedEvent .newEventDetail .newEventReply .fixed {position: static; top:0; max-width:100%;}

.newReplyWrite {position: relative; padding:11px 40px 0 10px;  border:1px solid #f2f2f2; border-radius:10px; background:#fff;}
.newReplyWrite textarea {width:100%; resize:none; min-height:27px; padding:0; max-height:55px; border:none; font-size:13px; color:#000000; font-weight:300; outline:none;}
.newReplyWrite textarea::-webkit-input-placeholder  {font-size:13px; font-weight:300;}
.newReplyWrite a {position: absolute; right:15px; top:15px; font-size:13px; color:#749df0; line-height:13px; font-weight:500;}

.pwReplyCheck input {position: absolute; visibility: hidden;}
.pwReplyCheck label {display: block; height:45px; line-height:40px; border-radius:10px; border:1px solid #f2f2f2; margin-bottom:10px; text-align: center; background:#fff; }
.pwReplyCheck label span {display: inline-block; vertical-align: middle; font-size:13px;  color:#888888; font-weight:300; padding-left:20px; background:url('../images/evPw.png') left center no-repeat; background-size:15px auto;}
.pwReplyCheck input:checked + label {border:1px solid #666666}
.pwReplyCheck input:checked + label span {font-size:13px;  color:#000000; font-weight:300; background:url('../images/evPwOn.png') left center no-repeat; background-size:15px auto;}
.pwReplyCheck.end label span { background-size:15px auto;}

.newEventDetail .replyList {max-height:100%; min-height:0px; overflow-y:visible; margin-top: 15px;border-top:1px solid #eaeaea; margin-bottom:20px;}
.fixedEvent .newEventDetail .replyList {max-height:100%;}
.newEventDetail .replyList .replyBox {padding:15px 0 15px 0;}
.newEventDetail .replyList .btn {position: static; bottom:35px;}
.newEventDetail .replyList .btn a {margin-left: 0; margin-right:12px; font-size:12px;}
.newEventDetail .replyList .name {display: block; margin-right:10px; font-size:16px; margin-bottom:5px;}
.newEventDetail .replyList .date {font-size:11px;}
.newEventDetail .replyList .edit {position: absolute; right:0; top:30px;}
.newEventDetail .replyList .text {padding-right: 0; margin-top:12px;}
.newEventDetail .replyList .edit a:first-child {margin-right:6px; padding-right:10px;}
.newEventDetail .replyList .edit a:first-child:after {top:2px; height:10px;}

.newEventDetail .replyList .setPwReply {padding-bottom:35px; display: none;}

.newEventDetail .replyDepth { padding:0 20px; display: block;}
.newEventDetail .replyDepth .text em {font-size:13px;  font-weight:500; margin-right:5px;}
.newEventDetail .replyDepth .text p {display: inline-block; }

.newEventDetail .modifyWrite { border:none; padding:0 0 20px 0; margin:0; background:none;}
.newEventDetail .replyList .setPwReply .newReplyWrite textarea {text-indent:63px;}
.newEventDetail .setPwReply .useId {position: absolute; left:10px; top:12px; background:#fff; height:18px; font-size:12px; color:#000000; font-weight:500;  width:60px; overflow:hidden;}


.newEventDetail .openWrite .setPwReply {display: block;}
.newEventDetail .openEdit .modifyWrite {display: block;}
.newEventDetail .openReply .replyContent {display: block;}
.newEventDetail .openReply.replyDepth {display: block;}


.loadOrder {position: relative; margin-bottom:25px;}
.loadOrder .rightBtn {position:static; right:30px; top:50%; margin-top:20px; display:flex; justify-content:space-between;	}
.loadOrder .rightBtn a {width:50%;}
.loadOrder .rightBtn a:first-child {margin-right:7px;}


.prdLoadPop .in .complete {font-size:11px; color:#222222; font-weight:300; display:flex; align-items:center; margin-bottom:15px;}
.prdLoadPop .in .complete div {display: inline-block; vertical-align: top; }
.prdLoadPop .in .complete .text {position: relative; font-weight:400; padding-right:5px; margin-right:5px; letter-spacing:-0.03em; }
.prdLoadPop .in .complete .text:after {content:''; position: absolute; right:0; top:50%; margin-top:-5px; width:1px; height:10px; background:#dddddd;}
.prdLoadPop .in .basePrd .img {position: relative; overflow:hidden; border-radius:5px;}
.prdLoadPop .in .basePrd .img .info {position: absolute; left:0; bottom:0; width: 100%;  height:20px; line-height:18px; font-size:10px; color:#fff; font-weight:500; background:#689ef7; text-align: center;}
.prdLoadPop .in .basePrd .img .info.bride {background:#f76868;}

.new1440 .in {width: calc(100% - 30px); margin-left:0;}


.prdLoadPop .in .title {margin-bottom:0; border-bottom:none;}
.prdLoadPop .in .basePrdList {padding:15px; background:#f8f8f8; margin-bottom:20px;}
.prdLoadPop .in .basePrdList li {float:none; width:100%; margin-bottom:1.5%; cursor:pointer;}
.prdLoadPop .in .basePrdList li.active {border:2px solid #222222;}
.prdLoadPop .in .basePrdList li.active .basePrd {padding:13px;}
.prdLoadPop .in .basePrdList li:nth-child(2n) {margin-left:0;}
.prdLoadPop .in .basePrdList li .basePrd {margin-bottom:0;}
.prdLoadPop .in .basePrdList li .basePrd .img {width:70px; height:70px;}
.prdLoadPop .in .basePrdList li .basePrd .txtWrap {padding-left:80px;}
.prdLoadPop .in .basePrdList li .basePrd .txtWrap .txt .tit01 {white-space:nowrap; overflow:hidden; text-overflow:ellipsis}

.prdLoadPop .in .scrollBox .inSc .mCSB_inside>.mCSB_container {padding-right:15px;}
.prdLoadPop .in .btnTwo2 {text-align: center;}
.prdLoadPop .in .btnTwo2 a.black {float:none; display: inline-block;}


.endDateWrap {background:none; min-height:100vh}
.endDateWrap .content {max-width:640px; margin:0 auto;}
.endDateWrap .content .imgBox {height:250px; background-size:cover !important;}
.endDateWrap .content .info {min-height:calc(100vh - 250px);text-align: center;}
.endDateWrap .content .info .name {padding:25px 0; max-width:300px; margin:0 auto 25px auto; background:url('../images/event/newEvent01.png') center bottom no-repeat; background-size:100% auto; }
.endDateWrap .content .info .name .box {display: inline-block; vertical-align: middle;}
.endDateWrap .content .info .name .box .en {color:#888888; font-size:14px; font-style: italic; }
.endDateWrap .content .info .name .box .tit {font-size:17px; color:#222222; font-weight:500;}
.endDateWrap .content .info .name .box.center {margin:0 6px;}
.endDateWrap .content .info .name .box.center .en {font-size:20px; font-weight:300; font-style: normal; }
.endDateWrap .content .info .bottom .title { font-size:22px; color:#000000; font-weight:300; margin-bottom:20px;}
.endDateWrap .content .info .bottom .title span { font-weight:500;}
.endDateWrap .content .info .bottom .th { font-size:15px; color:#000000; font-weight:600; margin-bottom:30px; letter-spacing:3px;}
.endDateWrap .content .info .bottom .btn { margin-bottom:25px;}
.endDateWrap .content .info .bottom .btn a {display: inline-block;  max-width:300px; height:50px; line-height:45px; background:#222222;vertical-align: top; font-size:15px; color:#fff; font-weight:500;}
.endDateWrap .content .info .bottom .btn2 a {display: inline-block; vertical-align: top; font-size:14px; line-height:14px; color:#000000; font-weight:400; padding-left:20px; background:url('../images/event/newEvent03.png') left 1px no-repeat; background-size:12px auto; padding-bottom:7px; border-bottom:1px solid #000000;}

.previewInfoPop {background:rgba(0,0,0,.5);}
.previewInfoPop .in {max-width:100%; margin-left:0;  padding:20px; letter-spacing:-0.05em;}
.previewInfoPop .in .textWrap {padding-left:30px; background:url('/html/images/infoPreview.png') left center no-repeat; background-size:20px auto;;}
.previewInfoPop .in .textWrap .tit01 {font-size:13px; color:#222222; font-weight:500;}
.previewInfoPop .in .textWrap .tit02 {font-size:12px; color:#222222; font-weight:300;}
.previewInfoPop .in .closePop {position: absolute; right:10px; top:50%; margin-top:-8px; width:12px; height:12px; background:url('/html/images/closePreivew.png') center no-repeat;  background-size:12px auto;}

.deceased {padding:6px 0 5px 0;}

.ipBox.type2 input {padding-left:15px;}
.ipBox.type2 ::-webkit-input-placeholder {font-size:13px; color:#888888; font-weight:300;}
.fileBox2 .fileList span.type2 {font-size:13px; color:#888888; font-weight:300; margin-left:15px;}



.schWrap .schBanner {position:relative; height:auto;}
.schWrap .schBanner .box {position:static; margin-left:0;  width:auto;}
.schWrap .schBanner .box img {width:100%;}
.schWrap .title {margin:90px 0 60px 0; padding:0 15px;}
.schWrap .title span {font-size:16px; line-height:16px; color:#222222; font-weight:500; padding-left:0; padding-top:30px; background:url('/html/images/sch/titcheck_m.png') left top no-repeat; background-size:150px auto;}
.schWrap .stepWrap {padding:0 15px;}
.schWrap .stepWrap .box {float:none; width:100%;  padding-left:0; height:auto; border-left:none; margin-bottom:50px;}
.schWrap .stepWrap .box.no1 {padding-left: 0; border-left:none;}
.schWrap .stepWrap .box.no2 {width:100%;}
.schWrap .stepWrap .box.no3 {padding-left:0;}
.schWrap .stepWrap .box .subTit .en{position: relative; display: block; font-size:13px; line-height:13px; color:#aaaaaa; margin-bottom:10px; background:#fff; overflow:hidden;}
.schWrap .stepWrap .box .subTit .en:after {content:''; position: absolute; left: 70px; top:50%; width:100%; height:1px; background:#f2f2f2; }
.schWrap .stepWrap .box .subTit .tit{display: block; font-size:16px; line-height:16px; color:#222222; font-weight:500; margin-bottom:20px;}
.schWrap .stepWrap .box .formBox {max-width:100%;}
.schWrap .stepWrap .box .formBox .twoBox {display:table; width:100%;}
.schWrap .stepWrap .box .formBox .twoBox .rBox {width:50%; vertical-align: top; display:table-cell;}
.schWrap .stepWrap .box .formBox .twoBox .rBox .ipBox { width:100%;}
.schWrap .stepWrap .box .formBox .twoBox .rBox .ipBox input {width:100%; height:45px; border:1px solid #dddddd; border-radius:10px; padding-left:20px; font-size:14px; color:#222222; font-weight:300;}
.schWrap .stepWrap .box .formBox .twoBox .rBox.date a {right:20px; width:17px; height:17px; background:url('/html/images/sch/ico03_m.png') center no-repeat; background-size:17px auto; margin-top:-9px;}
.schWrap .stepWrap .box .formBox .twoBox .bta {display:table-cell;width:50%; padding-left:10px;}
.schWrap .stepWrap .box .formBox .twoBox .bta .checkBtn {background:#222222; color:#fff; font-weight:500; width:100%; height:45px; line-height:45px; text-align: center; display: inline-block; vertical-align: top; border-radius:10px;}
.schWrap .stepWrap .box .warn {margin-top:20px; font-size:12px; font-weight:300; color:#aaaaaa; padding-left:20px;  background:url('/html/images/sch/ico02_m.png') left 3px no-repeat; background-size:15px auto;}
.schWrap .stepWrap .box .warn br {display: none;}
.schWrap .stepWrap .box .warn span {color:#888888; font-weight:400; display: block;}
.schWrap .stepWrap .box .dateCheck {background:#fafafa; padding:14px 20px; border:1px solid #f8f8f8; border-radius:10px; max-width:100%; text-align: center;}
.schWrap .stepWrap .box .dateCheck span {padding-left:23px;  background:url('/html/images/sch/ico01_m.png') left center no-repeat; background-size:17px auto; font-size:13px; line-height:13px; color:#222222; }
.schWrap .stepWrap .box.no3 .subTit {text-align: center;}
.schWrap .stepWrap .box.no3 .subTit .en:after { left:0; width:calc(50% - 50px);}
.schWrap .stepWrap .box.no3 .subTit .en:before {content:''; position: absolute;  top:50%; width:100%; height:1px; background:#f2f2f2; right:0; width:calc(50% - 50px);}
.schWrap .stepWrap .box .calWrap table {max-width:300px; margin:0 auto;}
.schWrap .stepWrap .box .calWrap th {font-size:14px; color:#222222; padding:0 11px 12px 11px; font-weight:300;}
.schWrap .stepWrap .box .calWrap td {font-size:14px; color:#222222; padding:2px 7px; text-align: center; min-width:30px; height:30px;}
.schWrap .stepWrap .box .calWrap tr td:last-child {color:#cccccc;}
.schWrap .stepWrap .box .calWrap tr td:first-child {color:#cccccc;}
.schWrap .stepWrap .box .calWrap tr .active {}
.schWrap .stepWrap .box .calWrap .holy {color:#cccccc;}
.schWrap .lastWarn {background:#fafafa; padding:35px; font-size:13px; color:#888888; font-weight:300; margin:50px 15px 0 15px;}
.schWrap .lastWarn .tit {font-size:13px; line-height:13px; margin-bottom:15px; font-weight:300; color:#888888; padding-left: 18px;  background:url('/html/images/sch/ico02_m.png') left center no-repeat; background-size:12px auto;}
.schWrap .lastWarn .text p {padding-left:18px; text-indent:-18px;}



.inviteWrap {background-size:cover;;}
.inviteWrap .content {width:100%; margin:0 auto;  position: relative; top:-20px; padding:0 40px;}
.inviteWrap .content .info { text-align: center;}
.inviteWrap .content .info .title {font-size:15px; color:#000000; margin-bottom:18px; letter-spacing:3px; font-weight:500;}
.inviteWrap .content .info .title2 {font-size:20px; line-height:20px; color:#000000; margin-bottom:18px; font-weight:500;}
.inviteWrap .content .info .title3 {font-size:13px;  color:#888888;  margin-bottom:25px; font-weight:300; padding-bottom:25px; background:url('../images/invite/dot_m.png') center bottom no-repeat; background-size:380px auto;}
.inviteWrap .content .info .name { max-width:100%; margin:0 auto 25px auto; }
.inviteWrap .content .info .name .box .en {color:#888888; font-size:14px; font-style: italic; }
.inviteWrap .content .info .name .box .tit {font-size:17px; color:#222222; font-weight:500;}
.inviteWrap .content .info .name .box.center {margin:0 8px;}
.inviteWrap .content .info .name .box.center .en {font-size:16px; font-style: normal; }
.inviteWrap .content .info .bottom .pw {margin-bottom:15px;}
.inviteWrap .content .info .bottom .pw input {padding-left:50px; height:65px; width:100%;  background:#fff url('../images/invite/icoPw_m.png') 30px center no-repeat; background-size:13px auto; font-size:15px; }
.inviteWrap .content .info .bottom .btn a {display: block; height:65px; line-height:65px; background:#222222;vertical-align: top; font-size:15px; color:#fff; font-weight:500;}

.inviteErrorPop .in {position: fixed; left:25px; top:50%;  transform:translateY(-50%); width:calc(100% - 50px); margin:0; z-index:10; background:#fff; padding:20px; border:1px solid #f2f2f2}
.inviteErrorPop .in .title {padding-left:30px; background:#fff url('../images/invite/icoWarn_m.png') 0 center no-repeat; background-size:20px auto;}
.inviteErrorPop .in .title .no1{position: relative; font-size:13px; line-height:13px; color:#222222; font-weight:500; margin-bottom:7px;}
.inviteErrorPop .in .title .no2{font-size:12px; line-height:12px; color:#222222; font-weight:300; }
.inviteErrorPop .in .closePop {position: absolute; right:15px; top:50%; margin-top:-6px; width:12px; height:12px; text-indent:-999em; background:url('../images/invite/close_m.png') center no-repeat; background-size:12px auto; }


.addTextarea {clear:both; margin-top: 30px; padding-top: 20px; border-top:1px solid #f2f2f2;;}
.addTextarea textarea{width: 100%; height: 100px; padding:10px; font-size: 13px; border:1px solid #eaeaea; color:#222222; resize:none;}
.addTextarea ::-webkit-input-placeholder  {font-size:13px; color:#888888; font-weight:300;}

.listType2.editType .inBox ul .size1 {width:30px;}
.listType2.editType .inBox ul .size2 {width:50px;}
.listType2.editType .inBox ul .size3 {width:auto;}
.listType2.editType .inBox ul .size4 {width:60px; }
.listType2.editType .tbodyBox ul li .pr {display:table; width:100%;border-bottom:1px solid #eaeaea; font-size:12px; line-height:auto;  color:#222222; font-weight:300; text-align: center; padding:10px 0;}
.listType2.editType .tbodyBox ul li .info {padding:0 10px;}
.listType2.editType .btnCenter {margin-top:30px; text-align: center;}
.listType2.editType .btnCenter a {display: inline-block;}
.listType2.editType .tbodyBox ul li .pr > div.size4 {display: none;   }

.boardWrap.editOrder {padding:0;}
.boardWrap.editOrder .warnText {margin:0 0 20px 0;}

.orderNewSec.editOrder {border:1px solid #f2f2f2; margin:0;}
.orderNewSec.editOrder:after {display:none;}
.orderListSec.editOrder {margin-top:20px;}
.orderListSec.editOrder .contWrap{border:none;}


}

@media all and (max-width:360px){

}

@media all and (max-width:320px){
.questionPop .in .stepList li {padding-left:20%;}
}


@media all and (min-width:2200px){
.fixTabOn .fixTabLoca .rightBuyList { height:87vh; }
}
