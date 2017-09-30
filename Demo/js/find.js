$(function(){
	var mask = $('.mask'),
		contentMask = $('.mask-content'),
		closeMask = $('.mask-close img');

	mask.on('click',function(){
		hideMask(mask);
	})
	closeMask.on('click',function(e){
		e.stopPropagation();
		hideMask(mask);
	})
	contentMask.on('click',function(e){
		e.stopPropagation();
	})

	/*顶部nav*/
	var swiper = new Swiper('.nav-container', {
		slidesPerView: 'auto',
		paginationClickable: true
	});
	$(".nav-ul .swiper-slide").click(function() {
		$(this).addClass("active-li").siblings().removeClass("active-li");
	});

	var $grid;
	$(".am-gallery-con img").lazyload({
		placeholder:null,
		threshold:500,
		event: 'scroll',
		failurelimit : 10,
		no_fake_img_loader:false,
		load:function(){
			var _this = $(this);
			$grid = $('.grid').masonry();
			_this.removeClass('loading');
			$grid.imagesLoaded().progress( function() {
				$grid.masonry('layout');
			});
		}
	});
	/* 隐藏遮罩层 */
	function hideMask(ele){
		ele.hide();
	}
});