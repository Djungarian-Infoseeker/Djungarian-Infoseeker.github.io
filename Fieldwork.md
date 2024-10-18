## 由于专业方向可能野外工作只存在于我的本科阶段了
## 2023 年夏季海洋地质国重室 KPP-YEC 科考航次
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Carousel</title>
    <style>
        * {box-sizing: border-box}
        body {font-family: Verdana, sans-serif; margin:0}
        .slideshow-container {
          max-width: 1000px;
          position: relative;
          margin: auto;
        }
        .slides {
          display: none;
        }
        img {
          vertical-align: middle;
          width: 100%;
        }
        .text {
          color: #f2f2f2;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          bottom: 8px;
          width: 100%;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        }
        .numbertext {
          color: #f2f2f2;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }
        .fade {
          animation-name: fade;
          animation-duration: 1.5s;
        }
        @keyframes fade {
          from {opacity: .4} 
          to {opacity: 1}
        }
        .thumbnail-container {
          text-align: center;
        }
        .thumbnail-container img {
          width: 80px;
          height: 60px;
          cursor: pointer;
          margin: 5px;
          transition: 0.3s;
        }
        .thumbnail-container img:hover {
          opacity: 0.7;
        }
    </style>
</head>
<body>

<div class="slideshow-container">

    <div class="slides fade">
        <div class="numbertext">1 / 12</div>
        <img src="/Fieldwork/IMG_20230817_072323.jpg" style="width:100%">
        <div class="text">一张标注了航行路线和目标区域的海图</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">2 / 12</div>
        <img src="/Fieldwork/IMG_20230817_175726.jpg" style="width:100%">
        <div class="text">夕阳下的海面，风平浪静，色彩瑰丽</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">3 / 12</div>
        <img src="/Fieldwork/IMG_20230817_185001.jpg" style="width:100%">
        <div class="text">实验室里的操作，科学研究的现场工作</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">4 / 12</div>
        <img src="/Fieldwork/IMG_20230817_195324.jpg" style="width:100%">
        <div class="text">仪器设备显示着实验结果的实时数据</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">5 / 12</div>
        <img src="/Fieldwork/IMG_20230817_203817.jpg" style="width:100%">
        <div class="text">夜间海上观测设备的显示屏</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">6 / 12</div>
        <img src="/Fieldwork/IMG_20230818_175617.jpg" style="width:100%">
        <div class="text">船后卷起的白色海浪，象征着船的前进</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">7 / 12</div>
        <img src="/Fieldwork/IMG_20230818_185526.jpg" style="width:100%">
        <div class="text">夜晚船尾的科研设备布置，准备进行深海测量</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">8 / 12</div>
        <img src="/Fieldwork/IMG_20230819_050125.jpg" style="width:100%">
        <div class="text">黎明前的海平面，天空微微泛蓝</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">9 / 12</div>
        <img src="/Fieldwork/IMG_20230819_193717.jpg" style="width:100%">
        <div class="text">夜晚满天繁星，点缀了静谧的夜空</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">10 / 12</div>
        <img src="/Fieldwork/IMG_20230819_195916.jpg" style="width:100%">
        <div class="text">朦胧夜色中的大海与天空</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">11 / 12</div>
        <img src="/Fieldwork/IMG_20230819_205708.jpg" style="width:100%">
        <div class="text">夜晚拍摄的银河，璀璨星河映入眼帘</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">12 / 12</div>
        <img src="/Fieldwork/IMG_20230820_120403.jpg" style="width:100%">
        <div class="text">白天的海面与远处的船只，科研任务中的一幕</div>
    </div>

</div>

<div class="thumbnail-container">
    <img src="/Fieldwork/IMG_20230817_072323.jpg" onclick="currentSlide(1)" alt="海图">
    <img src="/Fieldwork/IMG_20230817_175726.jpg" onclick="currentSlide(2)" alt="夕阳">
    <img src="/Fieldwork/IMG_20230817_185001.jpg" onclick="currentSlide(3)" alt="实验操作">
    <img src="/Fieldwork/IMG_20230817_195324.jpg" onclick="currentSlide(4)" alt="实验数据">
    <img src="/Fieldwork/IMG_20230817_203817.jpg" onclick="currentSlide(5)" alt="夜间观测">
    <img src="/Fieldwork/IMG_20230818_175617.jpg" onclick="currentSlide(6)" alt="海浪">
    <img src="/Fieldwork/IMG_20230818_185526.jpg" onclick="currentSlide(7)" alt="深海设备">
    <img src="/Fieldwork/IMG_20230819_050125.jpg" onclick="currentSlide(8)" alt="黎明">
    <img src="/Fieldwork/IMG_20230819_193717.jpg" onclick="currentSlide(9)" alt="繁星">
    <img src="/Fieldwork/IMG_20230819_195916.jpg" onclick="currentSlide(10)" alt="夜色">
    <img src="/Fieldwork/IMG_20230819_205708.jpg" onclick="currentSlide(11)" alt="银河">
    <img src="/Fieldwork/IMG_20230820_120403.jpg" onclick="currentSlide(12)" alt="科研船">
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
</script>

</body>
</html>
