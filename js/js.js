// document.addEventListener("DOMContentLoaded",function(){
// 	var a = 10;

// 	(a == 10) ? (a++): (a--);

// 	console.log(a);
// },false)

$(function() {	
	
	slide_box();
	Tabs();
	loadtop();
	// fixed_menu();
	control_menu();
	control_search();
	child_menu_reponsive();

});

// ấn thả xuống
	function slide_box(){
		let box = $('.top .header-top .left .btn-left .language');
		let btn_box = $(".top .header-top .left .btn-left ");		
		box.slideUp();
		// nut language	
		btn_box.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$('.top .header-top .left .btn-left .language ').slideToggle();
		});
	}
//tab
	function Tabs(){
		let tab_btn = $(".content-1 .tabs ul li"); 
		let tab = $(".content-1 .tabs ._1tab");
		// Hiệu ứng tab
		tab_btn.on('click', function(event) {
			event.preventDefault();
			tab.removeClass('active');
			tab_btn.removeClass("hover");
			$(this).addClass('hover');
			vitritab = $(this).index();
			tab.eq(vitritab).addClass('active');
			// console.log(tab.eq(vitritab));
		});	
	}
// btn-load top
	function loadtop(){
		let up_btn = $("body .up");
		let body = $('body,html');
		// Hiệu ứng cuộn chuột cho menu
		up_btn.click(function() {
			/* Act on the event */
			$('html,body').animate({scrollTop: 0}, 1000);
		});
		// hien nut load dau trang khi cuộn
		$(window).scroll(function(event){
			let startpage = body.scrollTop();
			if(startpage > 200)
			{
				up_btn.addClass('up-active');		
			}
			else if(startpage < 200){
				up_btn.removeClass('up-active');	
			}
			console.log(startpage);
		});
	}
// Menu cuon cungf trang
	function fixed_menu (){
		let body = $('body,html');
		let menu = $('header .main-menu');//ther chwa menu 
		// Hiệu ứng cuộn chuột cho menu
		$(window).scroll(function(event) {
			let startpage = body.scrollTop(); //ther body			 
			if(startpage > 10)
			{
				menu.addClass('fixed');
			}
			else{
				menu.removeClass('fixed');
			}
			console.log(startpage);
		});
	}
// control menu reponsive
	function control_menu(){
		let control = $('header .main-menu .icon-menu i'); //nuts ddk
		let menu = $('header .main-menu .menu');//ther chwa menu 
		let nen = $('header .nen');
		control.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			menu.addClass('play');
			nen.addClass('nen-play');
		});
		nen.click(function(event) {
			/* Act on the event */
			menu.removeClass('play');
			nen.removeClass('nen-play');
		});
	}
// control search
	function control_search(){
		let nen = $('header .nen');
		let search_box = $("header .main-menu .menu");
		let control_search_box = $("header .main-menu .icon-search"); //nut hien o search
		control_search_box.on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			search_box.addClass("search-play");
			nen.addClass('nen-play');
		});
		nen.click(function(event) {
			/* Act on the event */
			search_box.removeClass("search-play");
			nen.removeClass('nen-play');
		});
	}
// menu respon
	function child_menu_reponsive(){
		let icon_menu = $("header .menu ul i");
		let child_menu = $("header .menu ul .child-menu");
		let nen = $('header .nen');	
		var click = 1;	
		icon_menu.on('click', function(event) {
			event.preventDefault();
			let vitri = $(this).index();
			if(click == 1){				
				child_menu/*.eq(vitri)*/.addClass('play-child-menu');
				click = 2;
			}
			else{
				child_menu/*.eq(vitri)*/.removeClass('play-child-menu');
				click = 1;
			}			
		});
		nen.click(function(event) {
			child_menu/*.eq(vitri)*/.removeClass('play-child-menu');
		});
	}