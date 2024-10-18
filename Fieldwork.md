## 由于专业方向可能野外工作只存在于我的本科阶段了
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
        <div class="numbertext">1 / 3</div>
        <img src="/photos/albert.jpg" style="width:100%">
        <div class="text">Caption Text 1</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">2 / 3</div>
        <img src="/photos/atrans.jpg" style="width:100%">
        <div class="text">Caption Text 2</div>
    </div>
    
</div>

<div class="thumbnail-container">
    <img src="/photos/albert.jpg" onclick="currentSlide(1)">
    <img src="/photos/atrans.jpg" onclick="currentSlide(2)">
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
