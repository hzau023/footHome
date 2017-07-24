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


	var upNum=1
	var numx=0;
	var mySwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		bulletClass:'bullet',
		bulletActiveClass:'active',
		paginationBulletRender: function (swiper, index, className) {
			var arr = ['足球现场','足球生活','足球美女'];
		     return '<span class="' + className + '">' + arr[index] + '</span>';
		},
		onSlideChangeStart: function(swiper){
			$(".swiper-slide").each(function(index,element){
				if($(element).hasClass("wrapper")){
					$(element).removeClass("wrapper")
				}
			})
//			$($(".swiper-slide")[numx]).children().children(".upTag").siblings().remove()
//			console.log()
	    	numx=swiper.activeIndex;
	    	$($(".swiper-slide")[numx]).addClass("wrapper");
	    	upNum=1
	    	addData();
	    }
	})
	
	function addData(){
		var prop={
	    	index:numx
    	}
    	var arr=[];
    	var alert_msg=0
    	$.post("/context-hot/swiper",prop,function(data){
    		for(var i=(upNum-1)*6;i<6*upNum;i++){
    			arr.push(data.doc[i])
    		};
    		$(arr).each(function(index,element){
    			datax={
    				context:[element]
    			}
//  			console.log(datax.context[0]==null)
    			if(datax.context[0]==null){
    				alert_msg=1
    				return;
    			}else{
    				var html=template("context_tmp",datax);
    				$($(".swiper-slide")[numx]).children().children(".upTag").before(html);
    			}
    		})
    		if(alert_msg==1){
    			alert("数据加载完啦！！！！")
    		}
    	})
    	setTimeout(function(){
    		up();
    	},300)
	}
	
	function up(){
		var winHeight=window.innerHeight;
		var upTagHeight=$(".upTag").css("height").slice(0,2);
		var num=0;
		var myScroll = new IScroll('.wrapper',{
			probeType: 2
		});
		maxScrollY = myScroll.maxScrollY ;
		myScroll.on("scroll",function(){
			//上拉
			if(this.y<maxScrollY-upTagHeight){
				$(".upTag").text("释放加载");
			}	
			if(this.y>maxScrollY-upTagHeight){
				$(".upTag").text("上拉加载");
			}
			num=this.y
		})
		myScroll.on("scrollEnd",function(){
			//上拉
			if(num<maxScrollY-upTagHeight){
				$(".upTag").text("加载中..");
				if(this.y==maxScrollY){
					addData();
					upNum++;
//					myScroll.refresh();
//					maxScrollY=myScroll.maxScrollY ;
				}
			}
		})
	}
	addData();
})
