###SVG
#####什么是SVG?
*  SVG指可伸缩矢量图形(Scalable Vector Graphics)
*  SVG用来定义用于网络的基于矢量的图形
*  SVG使用XML格式定义图形
*  SVG图像在方法或改变尺寸的情况下其图形质量不会有所损失
*  SVG是万维网联盟的标准
*  SVG与诸如DOM和XSL之类的W3C标准是一个整体    

#####SVG的优势
> 与其他图像格式相比，使用SVG的优势在于：
- SVG可被非常多的工具读取和修改(比如记事本)
- SVG与JPEG和GIF图像比起来，尺寸更小，且可压缩性更强
- SVG是可伸缩的
- SVG图像可在任何的分辨率下被高质量地打印
- SVG可在图像质量不下降的情况下被方法
- SVG图像中的文本是可选的，同时也是可搜索的（很适合制作地图）    

#####SVG实例
```
  <?xml version="1.0" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "HTTP://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg width="100%" height="100%" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="100" cy="50" r="40" stroke="black"
  stroke-width="2" fill="red"/>
  </svg>
```
* [演示地址：click me！](http://white-xia.github.io/learn/svg/case/circle1.svg)     




####SVG形状    
>SVG有一些预定义的形状元素，可被开发者使用和操作：     


* 矩形`<rect>`
* 圆形`<circle>`
* 椭圆`<ellipse>`
* 线`<line>`
* 折线`<polyline>`
* 多边形`<polygon>`
* 路径`<path>`

###### `<rect>`标签--矩形
>`<rect>`标签可用来创建矩形，以及矩形的变种   

```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect width="300" height="100"
style="fill:rgb(0,0,255);stroke-width:1;
stroke:rgb(0,0,0)"/>
</svg>
```
>######代码解释：
>* rect元素的width和height属性可定义矩形的高度和宽度
>* style属性用来定义css属性
>* css的fill属性定义矩形的填充颜色(rgb值、颜色名或者十六进制值)
>* css的stroke-width属性定义矩形边框的高度
>* css的stroke属性定义矩形边框的颜色    

[查看此例：click me!](http://white-xia.github.io/learn/svg/case/rect1.html)
让我们看一下另外一个包含新属性的例子：
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect x="20" y="20" width="250" height="250"
style="fill:blue;stroke:pink;stroke-width:5;
fill-opacity:0.1;stroke-opacity:0.9"/>
</svg>
```
>######例子解释：
>* x属性定义矩形的左侧位置（例如，x="0"定义矩形到浏览器窗口左侧的距离是0px）
>* y 属性定义矩形的顶端位置（例如，y="0" 定义矩形到浏览器窗口顶端的距离是 0px）
>* css的fill-opacity属性定义填充颜色透明度（范围0-1）
>* css的stroke-opacity属性定义笔触颜色的透明度（范围0-1）

[查看此例：click me!](http://white-xia.github.io/learn/svg/case/rect2.html)    

为整个元素定义透明度
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect x="20" y="20" width="250" height="250"
style="fill:bule;stroke:pink;stroke-width:5;opacity:0.9" />
</svg>
```
[查看此例：click me!](http://white-xia.github.io/learn/svg/case/rect3.html)

创建带有圆角的矩形：
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect x="20" y="20" rx="20" ry="20" width="250" height="100" style="fill:red;stroke:black;stroke-width:5;opacity:0.5;"/>
</svg>
```
代码解释：
>rx和ry属性可使矩形产生圆角    

[查看此例子：click me！](http://white-xia.github.io/learn/svg/case/rect4.html)    

##### `<circle>`标签--圆形
>`<circle>`标签可以用来创建一个圆    

```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<circle width="100" height="50" r="40" 
style="stroke:black;stroke-width:5;fill:red;"/>
</svg>
```
代码解释：
>* cx和cy属性定义圆点的x和y坐标。如果省略cx和cy，圆的中心会被设置为(0,0),
>* r属性定义圆的半径。    

[查看此例：click me！](http://white-xia.github.io/learn/svg/case/circle2.html)

##### `<ellipse>`标签--椭圆
>`<ellipse>`标签可用来创建椭圆。椭圆和圆很相似。不同之处在与椭圆有**不同的x和y半径**，而圆的**x和y的半径是相同的**    

```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<ellipse cx="300" cy="150" rx="200" ry="80"
 style="fill:rgb(200,100,50);stroke:rgb(0,0,100);stroke-width:2;"/>
</svg>
```
代码解释：
* cx属性定义圆点的x坐标
* cy属性定义圆点的y坐标
* rx属性定义水平半径
* ry属性定义垂直半径

[查看此例：click me！](http://white-xia.github.io/learn/svg/case/ellipse1.html)

创建三个累叠而上的椭圆
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<ellipse cx="240" cy="100" rx="220" ry="30"
style="fill:purple;"/>
<ellipse cx="230" cy="120" rx="190" ry="20"
style="fill:lime" />
<ellipse cx="220" cy="140" rx="170" ry="15"
style="fill:yellow" />
</svg>
```

[查看此例：click me！](http://white-xia.github.io/learn/svg/case/ellipse2.html)
下面例子组合了两个椭圆
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<ellipse cx="200" cy="150" rx="220" ry="30"
style="fill:purple"/>
<ellipse cx="200" cy="150" rx="200" ry="20"
style="yellow"/>
</svg>
```
[查看此例：click me！](http://white-xia.github.io/learn/svg/case/ellipse3.html)
#####`<line>`标签--线条
>`<line>`标签用来创建线条
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<line x1="10" y1="10" x2="100" y2="10" 
style="stroke:red;stroke-width:5"/>
</svg>
```
代码解释：
* x1属性在x轴定义线条的开始
* y1属性在y轴定义线条的开始
* x2属性在x轴定义线条的结束
* y2属性在y轴定义线条的结束
[查看此例：click me！](http://white-xia.github.io/learn/svg/case/line1.html)
#####`<polygon>`标签--多边形
>`<polygon>`标签用来创建含有不少于三个边的图形
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<polygon points="10,10 80,10 80,100"
style="stroke:red;stroke-width:5;"/>
</svg>
```
代码解释：
> * points属性定义多边形每个角的x和y坐标

[查看此例：click me！](http://white-xia.github.io/learn/svg/case/polygon2.html)

创建一个四边形：
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<polygon points="10,10 100,10 100,100 10,100"
style="fill:#fff;stroke:red;stroke-width:1;"/>
</svg>
```
[查看此例：click me！](http://white-xia.github.io/learn/svg/case/polygon1.html)
#####`<polyline>`标签--折线
>`<polyline>`标签用来创建仅包含直线的形状、
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<polyline points="0,0 0,20 20,20 20,40 40,40 40,60"
style="fill:white;stroke:red;stroke-width:2"/>

</svg>
```
[查看此例：click me！](http://white-xia.github.io/learn/svg/case/polyline1.html)
#####`<path>`标签--路径
>`<path>`标签用来定义路径。    

下面的命令可用于路径数据：
* M = moveto
* L = lineto
* H = horizontal lineto
* V = vertical lineto
* C = curveto
* S = smooth curveto
* Q = quadratic Belzier curve
* T = smooth quadratic Belzier curveto
* A = elliptical Arc
* Z = closepath    

| 命令		 |	名称 	 | 参数  	  |
| :--------: | :--------:| :--------: |
| M  | moveto 移动到 |  (x y)+   |
| Z  | closepath 关闭路径 |  (none)   |
| L  | lineto 画线到 |  (x y)+   |
| H  | horizontal lineto 水平线到 |  x+   |
| V  | vertical lineto 垂直线到 |  y+   |
| C  | curveto 三次贝赛尔曲线到 |  (x1 y1 x2 y2 x3 y3)+   |
| S  | smooth curveto 光滑三次贝赛尔曲线到 |  (x2 y2 x y)+   |
| Q  | quadratic Bézier  curveto 二次贝赛尔曲线到 |  (x1 y1 x y)+   |
| T  | smooth quadratic Bézier curveto  光滑二次贝塞尔曲线到 |  (x y)+   |
| A  | elliptical arc 椭圆弧 |  (rx ry x-axis-rotation large-arc-flag sweep-flag x y)   |
| R  | catmull-rom curveto catmull-rom曲线 |  x1 y1 (x y)+   |
**注释：**以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位。
```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<path d="M250 150 L150 350 L350 350 Z"/>
</svg>
```

```
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" 
"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<path d="M100 100 L500 100 L500 500 L100 500 Z" style="fill:red;stroke:blue;stroke-width:2;"/>
</svg>
```

