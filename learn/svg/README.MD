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
``` SVG
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
