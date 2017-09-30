$(function(){
	var mask = $('.mask'),
		contentMask = $('.mask-content'),
		closeMask = $('.mask-close img'),
		_imgArr = [],
		_pureviewArr = [];



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

	var $grid
	$(".am-gallery-con img").lazyload({
		placeholder:null,
		threshold:1000,
		event: 'scroll',
		load:function(){
			var _this = $(this);
			_this.removeClass('loading');
			$grid = $('.grid').masonry();
			$grid.imagesLoaded().done(function() {
				$grid.masonry('layout');
			});
		}
	});
	
	lockImg('.am-gallery-item', 10, 'lock-con');

	$('.grid').on('click','.lock-con',function(event){
		var _this = $(this);
		
	})

	/* 隐藏遮罩层 */
	function hideMask(ele){
		ele.hide();
	}

	/* lock 
		box:容器class,id,
		limit:能够显示的数量
		cls:不显示的样式的className
	*/
	function lockImg(box, limit, cls){
		var _box = $(box),
			box = Array.prototype.slice.call(_box),
			len = box.length,
			i = limit - 1;
		// 显示大图的框
		var pureview = $('.am-pureview'),
			pureviewUl = pureview.find('ul'),
			_pureviewLi = pureviewUl.find('li'),
			pureviewLi = Array.prototype.slice.call(_pureviewLi);
			console.log(pureviewLi);
		if(i < len){
			$.each(box, function(index, value){
				var $ele = $(value),
					$img = $ele.find('img'),
					dataOriginal = $img.attr('data-original'),
					alt = $img.attr('alt') || '';
				if(index > i){
					var _this = $(this);
					_this.addClass(cls);
					_imgArr.push(dataOriginal);
					// 操作大图,保存图片的src与alt
					_pureviewArr.push({
						'data-original': dataOriginal,
						'alt':alt
					});
					_pureviewLi.eq(index).data('src','');
					// _pureviewLi.eq(index).data('title','');
				}
			});
		}
	}
});