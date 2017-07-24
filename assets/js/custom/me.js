$(function(){
//	console.log(window.location.pathname)
	if(window.location.pathname=="/context-hot.html"){
		$(".hot").css({
			"background":"#64d985",
			"color":"white"
		})
		$(".fous").css({
			"background":"#3dd067",
			"color":"#a3e9b7"
		})
	}
	$(".fous").on("click", function(){
		location="context-fous.html"
	})
	$(".index").on("click",function(){
		location="context-hot.html"
	})
	$(".search").on("click",function(){
		location="search.html"
	})
	$(".me").on("click",function(){
		location="me.html"
	})
//	$(".esc").on("click",function(){
//		location="me.html"
//	})
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		bulletClass:'bullet',
		bulletActiveClass:'active',
		paginationBulletRender: function (swiper, index, className) {
			var arr = ['照片','关注','粉丝'];
		     return '<span class="' + className + '">' + arr[index] + "("+1+")"+'</span>';
		}
	})
	
	
})
