#fullpage
####一、首先引入文件
    引入fullpage.css,jQuery,fullpage.js
    下面是cdn引用文件
    https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.css
    https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js
    https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.5/jquery.fullPage.js
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