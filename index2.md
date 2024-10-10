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
            {name: "咸阳", coords: [34.3296, 108.7093]}
        ];
        // 循环添加每个城市的标记和弹窗
        cities.forEach(function(city) {
            var marker = L.marker(city.coords).addTo(map);
            marker.bindPopup("<b>" + city.name + "</b><br>这是 " + city.name + " 的位置。");
        });
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