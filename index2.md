## Travels
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多个地点的 Leaflet 地图</title>
    <!-- 引入 Leaflet CSS 文件 -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
    <style>
        /* 设置地图的高度 */
        #map { 
            height: 400px; 
            width: 100%; 
        }
    </style>
</head>
<body>
    <!-- 地图容器 -->
    <div id="map"></div>
    <!-- 引入 Leaflet JS 文件 -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script>
        // 初始化地图，设置视角为亚洲中心
        var map = L.map('map').setView([35.8617, 104.1954], 5); // 设置为中国的中心
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
            {name: "东京", coords: [35.6762, 139.6503]}
        ];
        // 循环添加每个城市的标记和弹窗
        cities.forEach(function(city) {
            var marker = L.marker(city.coords).addTo(map);
            marker.bindPopup("<b>" + city.name + "</b><br>这是 " + city.name + " 的位置。");
        });
    </script>
</body>
</html>
</html>

<div class="gallery" id="gallery-1">
  <a href="Durham_clouds.jpg" data-lightbox="mygallery" data-title="Noctilucent clouds over the Durham Cathedral"><img src="Durham_clouds.jpg" alt="Noctilucent clouds" width="1200"></a>
<!-- blank line -->
<figure class="video_container">
  <video controls="true" width="600" allowfullscreen="true" poster="path/to/poster_image.png">
    <source src="0501night_UT4_1080p.mov" type="video/mp4">
  </video>
</figure>
*Wonderful night at the VLT (UT4) in Paranal, Chile.*