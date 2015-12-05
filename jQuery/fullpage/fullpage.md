#fullpage
####一、首先引入文件
    引入fullpage.css,jQuery,fullpage.js
    下面是cdn引用文件
    https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.css
    https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js
    https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.js
    https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/vendors/jquery.slimscroll.js  //当页面内容过多的时候
    可以用到
####二、页面基本布局
    <div id="fullpage">
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
    </div>
######可以在每一个子页面再添加页面
    <div class="section">
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
      <div class="slide"></div>
    </div>
####三、调用方法fullpage()
    $(document).ready(function(){
      $('#fullpage').fullpage();  
    })
####四、fullpage API
    1，sectionsColor:
      可以为每一个section设置background-color属性
    2，controlArrows:
      定义是否通过箭头来控制slide幻灯片,默认为true.
      当我们设置false,则幻灯片左右两侧的箭头就会消失,
      在移动设备中，我们可以通过滑动来操作幻灯片
    3,verticalCentered:
      每一页的内容是够垂直居中，默认为true
    4,resize:
      字体是否随着窗口缩放而缩放，默认为false
    5,scrollingSpeed：
      滚动速度，单位为毫秒，默认为700.
    6,anchors：
      定义锚链接,默认为[]，有了锚链接，用户就可以快速打开定位
      到某一页
      注意定义锚链接的时候，值不要和页面中任意的id或name相同，
      尤其是在IE浏览器下，而且定义时不需要加#
      可以在section中添加active属性来默认显示哪一个页面
    7,lockAnchors：
      是否锁定锚链接，默认为false，如果定义为true，那么定义
      的锚链接，也就是anchors属性则没有效果，这个配置项使用的
      比较少
    8,easing:
      定义页面section滚动的动画方式，默认为easeInOutCubic，如果要
      修改此项，需要引入jquery.easing插件，或者jquery ui
    9,css3:
      是否使用css3 transforms来实现滚动效果,默认为true。
      这个配置项可以提高支持css3的浏览器,比如移动设备等的
      速度,如果浏览器不支持css3,则会使用jQuery来替代css3实现
      滚动效果
    10,loopTop:
      滚动到最顶部后是否连续滚动到底部，默认为false
    11,loopBottom:
      滚动到最底部后是否连续滚动回顶部,默认为false
    12,loophorizontal:
      横向slider幻灯片是否循环滚动，默认为true
    13,autoScrolling:
      是否使用插件的滚动方式，默认为true，如果选择false，则会出现浏览器自带的滚动条，
      将不会按页滚动，而是按照滚动条的默认行为来滚动
    14,scrollBar:
      是否包含滚动条，默认为false，如果设置true，则出现浏览器自带的滚动条，页面滚动
      时还是按页滚动，但是滚动条的默认行为也有效
    15,paddingTop/paddingBottom:
      设置每一个section顶部和底部的padding,默认为0。一般如果我们需要设置一个固定在顶
      部或者底部的菜单、导航、元素等，可以使用这两个配置项
    16,fixedElements:
      固定的元素，默认为null,需要配置一个jquery选择器，在页面滚动的时候
      fixedElements设置的元素固定不动 fixedElements:'#header'
    17,keyboardScrolling
      是否可以使用键盘方向键导航，默认为true
    18,touchSensitivity:
      在移动设备中滑动页面的敏感性，默认为5，是按百分比来衡量的
      最高为100，越大越难滑动
    19,continuousVertical:
      是否循环滚动，默认为false，如果设置为true，则页面会循环滚动，
      而不像loopTop/loopBottom那样出现跳动，很平滑的过渡
      这个属性和loopTop/loopBottom不兼容，不要同时设置
    20,animateAnchor:
      锚链接是否可以控制滚动动画，默认为true，如果设置为false
      则通过锚链接定位到某个页面显示不再有动画效果
    21,recordHistory：
      是否记录滚动历史，默认为true，可以通过浏览器的前进后退来导航
      注意如果设置autoScroling:false,那么这个配置也将被关闭，即
      设置为false
    22,menu：
      绑定菜单，设定的相关属性与anchors的值对应后，菜单可以
      控制滚动，默认为false，可以设置为菜单的jquery选择器
    23,navigation:
      是否显示导航，默认为false,如果设置为true,会显示小圆点，作为导航
    24,navigationPostion:
      导航小圆点的位置，可以设置为left或者right,navigationPosition:'left'
    25,navigationTooltips:
      导航小圆点的tooltips设置，默认为[]，注意按照顺序设置
    26,showActiveTooltip:
      是否显示当前页面的导航的tooltip信息，默认为false
    27,slidesNavigation:
      是否显示横向幻灯片的导航,默认为false
    28,slidesNavPosition:
      横向幻灯片导航的位置，默认为bottom,可以设置为top或bottom
    29,scrollOverflow:
      内容超过满屏后是否显示滚动条，默认为false,如果设置为true
      则hi显示滚动条，如果要滚动查看内容，还需要jquery.slimscroll插件
      的配合。slimscroll插件主要用于模拟传统的浏览器滚动条
    30,sectionSelector:
      section的选择器，默认为.section
    31,slideSelector:
      slide的选择器，默认为.slide
        $('#fullpage').fullpage({
          sectionsColoe:['green','orange','gray','red','blue'],   //配置各个页面的背景颜色  
          controlArrows:false,                                    //配置是否通过箭头左右切换slide
          verticalCentered:false,                                 //配置页面中内容是否垂直居中
          scrollingSpeed:1000,                                    //配置页面切换速度
          anchors:['page1','page2','page3','page4','page5']
        })