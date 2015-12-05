$(document).ready(function(){
  $('#fullpage').fullpage({
    sectionsColor:['green','orange','gray','red','blue'],//配置section的背景颜色
    controlArrows:true,                                 //配置是否显示左右切换的箭头
    verticalCentered:false,                              //配置文字内容是否垂直居中
    anchors:['page1','page2','page3','page4','page5'],   //配置页面的锚链接
    css3:true,                                           //配置是否使用css3 transforms属性，默认为true
    loopTop:false,                                       //配置滚动到顶部是否接着回到最后一页，默认为false
    loopBottom:false,                                    //配置滚动到底部是否接着回到第一页，默认为false
    autoScrolling:true,                                  //配置是否使用插件的滚动方式(按页滚动)，false，浏览器默认的方式
    scrollBar:false,
    menu:'#fullpageMenu',
    navigation:true,
    navigationPosition:'left',
    navigationTooltips:['1','2','3','4','5'],
    showActiveTooltip:true,
    slidesNavigation:true,
    slidesNavPosition:'top',
    afterLoad:function(anchorLink,index){
      console.log(anchorLink+","+index);
    },
    onLeave:function(index,nextIndex,direction){
      console.log(index+','+nextIndex+','+direction);
    },
    afterRender:function(){
      console.log('afterRender');
    },
    afterResize:function(){
      console.log('afterResize');
      console.log($('body').width())
    }
  });
})