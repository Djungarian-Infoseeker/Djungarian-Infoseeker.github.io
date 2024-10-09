## Travels
<div id="map"></div>

<div class="gallery" id="gallery-1">
  <a href="Durham_clouds.jpg" data-lightbox="mygallery" data-title="Noctilucent clouds over the Durham Cathedral"><img src="Durham_clouds.jpg" alt="Noctilucent clouds" width="1200"></a>
<!-- blank line -->
<figure class="video_container">
  <video controls="true" width="600" allowfullscreen="true" poster="path/to/poster_image.png">
    <source src="0501night_UT4_1080p.mov" type="video/mp4">
  </video>
</figure>
*Wonderful night at the VLT (UT4) in Paranal, Chile.*
<script>
  function initMap() {
    // 地图初始化时的中心位置
    var location = {lat: -34.397, lng: 150.644};
    // 创建地图并放置在页面上的地图容器中
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: location
    });
    // 添加标记
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
</script>
