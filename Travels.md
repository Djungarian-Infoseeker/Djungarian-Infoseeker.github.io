## Travels
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多个地点的 Leaflet 地图</title>
    <!-- 引入 Leaflet CSS 文件 -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
    <style>
        #map { 
            height: 600px; 
            width: 100%; 
        }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script>
        // 将地图视角设置为覆盖东亚和日本的区域
        var map = L.map('map').setView([34.5, 125.0], 5);
        // 添加 OpenStreetMap 瓦片层
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // 定义多个城市的坐标
        var cities = [
            {name: "北京", coords: [39.9042, 116.4074]},
            {name: "上海", coords: [31.2304, 121.4737]},
            {name: "阳泉", coords: [37.8567, 113.5805]},
            {name: "太原", coords: [37.8706, 112.5489]},
            {name: "石家庄", coords: [38.0428, 114.5149]},
            {name: "首尔", coords: [37.5665, 126.9780]},
            {name: "东京", coords: [35.6762, 139.6503]},
            {name: "苏州", coords: [31.2983, 120.5832]},
            {name: "成都", coords: [30.5728, 104.0668]},
            {name: "广州", coords: [23.1291, 113.2644]},
            {name: "济州", coords: [33.4996, 126.5312]}, 
            {name: "横滨", coords: [35.4437, 139.6380]},
            {name: "忻州", coords: [38.4167, 112.7342]},
            {name: "运城", coords: [35.0263, 111.0075]},
            {name: "南京", coords: [32.0603, 118.7969]},
            {name: "青岛", coords: [36.0671, 120.3826]},
            {name: "济南", coords: [36.6512, 117.1201]},
            {name: "天津", coords: [39.3434, 117.3616]},
            {name: "合肥", coords: [31.8206, 117.2290]},
            {name: "长沙", coords: [28.2282, 112.9388]},
            {name: "武汉", coords: [30.5928, 114.3055]},
            {name: "西归浦", coords: [33.2520, 126.5616]},
            {name: "阿坝", coords: [32.9024, 101.7452]},
            {name: "仁川", coords: [37.4563, 126.7052]},
            {name: "坡州", coords: [37.7600, 126.7747]},
            {name: "杭州", coords: [30.2741, 120.1551]},
            {name: "晋中", coords: [37.6934, 112.7335]},
            {name: "临汾", coords: [36.0882, 111.5184]},
            {name: "西安", coords: [34.3416, 108.9398]},
            {name: "舟山", coords: [29.9853, 122.2072]},
            {name: "长治", coords: [36.1954, 113.1163]},
            {name: "晋城", coords: [35.4907, 112.8513]},
            {name: "巢湖", coords: [31.6005, 117.8742]},
            {name: "焦作", coords: [35.2159, 113.2418]},
            {name: "开封", coords: [34.7972, 114.3075]},
            {name: "潍坊", coords: [36.7069, 119.1618]},
            {name: "泰安", coords: [36.1999, 117.0887]},
            {name: "衡水", coords: [37.7389, 115.6705]},
            {name: "保定", coords: [38.8739, 115.4646]},
            {name: "千叶", coords: [35.6073, 140.1063]},
            {name: "渭南", coords: [34.4997, 109.5083]},
            {name: "千叶", coords: [35.6073, 140.1063]},
            {name: "渭南", coords: [34.4997, 109.5083]},
            {name: "咸阳", coords: [34.3296, 108.7093]},
            {name: "名古屋", coords: [35.1814, 136.9066]},
            {name: "大阪", coords: [34.6937, 135.5023]},
            {name: "京都", coords: [35.0116, 135.7681]},
            {name: "神户", coords: [34.6901, 135.1955]},
            {name: "奈良", coords: [34.6851, 135.8048]},
            {name: "阳曲", coords: [38.0583, 112.6727]},
            {name: "盂县", coords: [38.0861, 113.4128]},
            {name: "井陉", coords: [38.0326, 114.1445]},
            {name: "太谷", coords: [37.4249, 112.5513]},
            {name: "祁县", coords: [37.3598, 112.3302]},
            {name: "平遥", coords: [37.1898, 112.1748]},
            {name: "洪洞", coords: [36.2557, 111.6747]},
            {name: "稷山", coords: [35.6004, 110.9839]},
            {name: "新绛", coords: [35.6138, 111.2247]},
            {name: "九寨沟", coords: [33.2636, 103.9182]},
            {name: "松潘", coords: [32.6383, 103.5806]},
            {name: "昆山", coords: [31.3856, 120.9807]},
            {name: "嘉定", coords: [31.3857, 121.2503]},
            {name: "昔阳", coords: [37.6179, 113.7065]},
            {name: "坡州", coords: [37.7606, 126.7749]},
            {name: "常熟", coords: [31.6538, 120.7524]},
            {name: "平定", coords: [37.7859, 113.6520]},
            {name: "松江", coords: [31.0322, 121.2277]},
            {name: "宝山", coords: [31.3986, 121.4894]},
            {name: "五寨", coords: [38.9122, 111.8410]},
            {name: "岢岚", coords: [38.7055, 111.5738]},
            {name: "神池", coords: [39.0883, 112.2114]},
            {name: "宁武", coords: [39.0017, 112.3025]},
            {name: "寿阳", coords: [37.8957, 113.1764]},
            {name: "绵阳", coords: [31.4675, 104.6796]},
            {name: "都江堰", coords: [30.9983, 103.6372]},
            {name: "汶川", coords: [31.4740, 103.5809]}

        ];
        // 循环添加每个城市的标记和弹窗
        cities.forEach(function(city) {
            var marker = L.marker(city.coords).addTo(map);
            marker.bindPopup("<b>" + city.name + "</b><br>这是 " + city.name + " 的位置。");
        });
    </script>
</body>
</html>
我爱旅游！
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slideshow with Captions</title>
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
        <div class="numbertext">1 / 4</div>
        <img src="/Travels/yangquan.jpg" style="width:100%">
        <div class="text">阳泉/Yangquan</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">2 / 4</div>
        <img src="/Travels/Xinzhou.jpg" style="width:100%">
        <div class="text">忻州/Xinzhou</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">3 / 4</div>
        <img src="/Travels/Taiyuan.jpg" style="width:100%">
        <div class="text">太原/Taiyuan</div>
    </div>

    <div class="slides fade">
        <div class="numbertext">4 / 4</div>
        <img src="/Travels/Shijiazhuang.jpg" style="width:100%">
        <div class="text">石家庄/Shijiazhuang</div>
    </div>
    
</div>

<div class="thumbnail-container">
    <img src="/Travels/yangquan.jpg" onclick="currentSlide(1)">
    <img src="/Travels/Xinzhou.jpg" onclick="currentSlide(2)">
    <img src="/Travels/Taiyuan.jpg" onclick="currentSlide(3)">
    <img src="/Travels/Shijiazhuang.jpg" onclick="currentSlide(4)">
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

