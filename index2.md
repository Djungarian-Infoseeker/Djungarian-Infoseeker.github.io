## Travels
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Pages 上的 Leaflet 地图</title>
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
        // 初始化地图，设置视角为伦敦中心
        var map = L.map('map').setView([51.505, -0.09], 13);
        // 添加 OpenStreetMap 瓦片层
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // 添加一个标记
        var marker = L.marker([51.5, -0.09]).addTo(map);
        // 为标记添加弹窗
        marker.bindPopup("<b>你好，世界！</b><br>这是一个弹窗。");
    </script>
    
</body>
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