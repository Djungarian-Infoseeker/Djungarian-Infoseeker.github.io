
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- 引入 Chart.js -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #ffffff;
            text-align: center;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #ffcc00;
            margin-bottom: 20px;
        }

        .weather-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .weather-box {
            background-color: #333;
            border-radius: 10px;
            padding: 10px;
            width: 180px; /* 方框宽度 */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
            flex: 0 1 auto;
        }

        .weather-box:hover {
            transform: translateY(-5px);
        }

        .weather-title {
            font-size: 1.2em;
            margin-bottom: 8px;
            color: #ffcc00;
        }

        .weather-details {
            font-size: 0.8em;
            margin-bottom: 10px;
        }

        canvas {
            margin: 10px auto; /* 居中对齐 */
            display: block;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="weather-container" id="weather-container">
        <!-- 每个城市天气数据和温度图表将插入这里 -->
    </div>

    <!-- JavaScript 用于获取天气数据 -->
    <script>
        const cityNames = [
            { cityName: 'Yangquan', displayName: '阳泉' },
            { cityName: 'Beijing', displayName: '北京' },
            { cityName: 'Shanghai', displayName: '上海' },
            { cityName: 'Tokyo', displayName: '东京' }
        ];

        const apiKey = '1550ebde7dead2d2c42f69c899d81984'; // 您的 API 密钥
        const proxyUrl = 'https://corsproxy.io/?';
        let minTemp = Infinity; // 记录所有城市中最低温度
        let maxTemp = -Infinity; // 记录所有城市中最高温度

        async function getWeather(cityName, displayName) {
            const apiUrl = `${proxyUrl}https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=zh_cn&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('无法获取天气数据');
                }

                const data = await response.json();
                const weatherInfo = `
                    <div class="weather-title">${displayName}</div>
                    <div class="weather-details">
                        <p>温度: ${data.main.temp}°C</p>
                        <p>天气: ${data.weather[0].description}</p>
                        <p>湿度: ${data.main.humidity}%</p>
                        <p>风速: ${data.wind.speed} m/s</p>
                        <p>气压: ${data.main.pressure} hPa</p>
                        <p>能见度: ${(data.visibility / 1000).toFixed(1)} km</p>
                        <p>日出: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('zh-CN')}</p>
                        <p>日落: ${new Date(data.sys.sunset * 1000).toLocaleTimeString('zh-CN')}</p>
                    </div>
                    <canvas id="chart-${cityName}" width="150" height="100"></canvas>
                `;

                const container = document.createElement('div');
                container.className = 'weather-box';
                container.innerHTML = weatherInfo;
                document.getElementById('weather-container').appendChild(container);

                // 绘制温度变化图表
                await drawTemperatureChart(cityName);
            } catch (error) {
                console.error('获取天气数据失败:', error);
                const container = document.createElement('div');
                container.className = 'weather-box';
                container.innerText = `${displayName}天气信息获取失败`;
                document.getElementById('weather-container').appendChild(container);
            }
        }

        async function drawTemperatureChart(cityName) {
            const apiUrl = `${proxyUrl}https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=zh_cn&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('无法获取天气数据');
                }

                const data = await response.json();
                const forecastData = data.list;

                const temperatures = forecastData.slice(0, 8).map(item => item.main.temp);
                temperatures.forEach(temp => {
                    if (temp < minTemp) minTemp = temp;
                    if (temp > maxTemp) maxTemp = temp;
                });

                // 当所有城市的数据都获取完之后再绘制图表
                if (--pendingRequests === 0) {
                    cityNames.forEach(({ cityName }) => drawChart(cityName));
                }
            } catch (error) {
                console.error('获取温度曲线数据失败:', error);
            }
        }

        function drawChart(cityName) {
            const ctx = document.getElementById(`chart-${cityName}`).getContext('2d');
            const apiUrl = `${proxyUrl}https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=zh_cn&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const labels = data.list.slice(0, 8).map(item => new Date(item.dt * 1000).getHours() + ':00');
                    const temperatures = data.list.slice(0, 8).map(item => item.main.temp);

                    new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                data: temperatures,
                                borderColor: '#ffcc00',
                                borderWidth: 2,
                                pointRadius: 3,
                                backgroundColor: 'rgba(255, 204, 0, 0)', // 设置背景为透明
                            }]
                        },
                        options: {
                            responsive: false,
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    display: true,
                                    ticks: {
                                        color: '#ffffff',
                                    },
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    display: true,
                                    ticks: {
                                        color: '#ffffff',
                                        stepSize: (maxTemp - minTemp) / 3, // 确保 Y 轴有 4 个刻度值
                                    },
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.2)'
                                    },
                                    min: minTemp,
                                    max: maxTemp
                                }
                            },
                            plugins: {
                                legend: {
                                    display: false // 隐藏图例
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            return `${context.raw}°C`;
                                        }
                                    }
                                }
                            },
                            layout: {
                                padding: {
                                    left: 10,
                                    right: 10,
                                    top: 10,
                                    bottom: 10
                                }
                            }
                        }
                    });
                });
        }

        let pendingRequests = cityNames.length;

        // 使用 window.onload 确保页面加载完毕后再执行
        window.onload = function () {
            cityNames.forEach(({ cityName, displayName }) => getWeather(cityName, displayName));
        };
    </script>
</body>
</html>

<div class="row clear_both">
<div class="col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0">
<div class="Figure-wrapper">

<h3 class="Figure-title">
天空转晴的机率
</h3>
<div class="Figure-crosslinks">
<div>
<a href="#Figures-CloudCover" class="permalink">
<span class="glyphicon glyphicon-link"> </span><span class="hidden-xs hidden-sm">链接</span>
</a>
</div>
<div>
<a data-target="YearCompare$CloudSection$1#Figures-CloudCover" href="#" class="Download-link">
<span class="glyphicon glyphicon-download-alt"> </span><span class="hidden-xs hidden-sm">下载</span>
</a>
</div>
<div>
<a style="color: #592f93;" href="/y/131055/%E4%B8%AD%E5%9B%BD%E3%80%81%E5%8C%97%E4%BA%AC%E5%B8%82%E7%9A%84%E5%85%A8%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94#Figures-CloudCover">北京市</a>
</div>
<div>
<a style="color: #03a45e;" href="/y/137446/%E4%B8%AD%E5%9B%BD%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E7%9A%84%E5%85%A8%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94#Figures-CloudCover">中国上海</a>
</div>
<div>
<a style="color: #ee1c25;" href="/y/149405/%E6%97%A5%E6%9C%AC%E3%80%81Tokyo%E7%9A%84%E5%85%A8%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94#Figures-CloudCover">Tokyo</a>
</div>
<div>
<a style="color: #0465ff;" href="/y/127419/%E4%B8%AD%E5%9B%BD%E3%80%81Yangquan%E7%9A%84%E5%85%A8%E5%B9%B4%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94#Figures-CloudCover">Yangquan</a>
</div>
</div>

<div class="Figure-chart">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 753 362" font-weight="normal" text-decoration="none" width="100%" xmlns:xlink="http://www.w3.org/1999/xlink" font-size="15" font-family="sans-serif" font-style="normal" version="1.1"><title>比较北京市、中国上海、Tokyo和Yangquan更晴朗天空的机率</title><defs><clipPath id="plot-sample-bounds-1"><rect x="75.8" width="601.4" y="0" height="340"></rect></clipPath><clipPath id="plot-sample-bounds-scaled-1"><rect x="758.2" width="6013.5" y="0" height="3400"></rect></clipPath></defs><g transform="scale(0.1)" font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal"><g clip-path="url(#plot-sample-bounds-scaled-1)"><path stroke-opacity="1.0" d="M758,878l17,-1l16,-2l17,6l16,2l17,7l16,3l17,-4l16,2l17,-5l16,-8l16,5l17,0l16,12l17,4l16,5l17,-4l16,-2l17,2l16,4l17,-5l16,6l17,5l16,2l17,8l16,-1l17,6l16,17l17,10l16,5l17,3l16,5l16,19l17,8l16,-3l17,1l16,10l17,15l16,16l17,22l16,11l17,19l16,13l17,1l16,2l17,11l16,10l17,17l16,12l17,-1l16,5l16,6l17,-6l16,0l17,11l16,10l17,12l16,10l17,2l16,5l17,8l16,9l17,6l16,1l17,10l16,24l17,25l16,-10l17,-8l16,-11l17,-11l16,-6l16,2l17,-10l16,14l17,-1l16,2l17,-4l16,-2l17,4l16,18l17,-2l16,0l17,11l16,18l17,7l16,1l17,-6l16,-8l17,-6l16,-10l17,6l16,6l16,0l17,4l16,-9l17,-13l16,-29l17,6l16,6l17,14l16,7l17,10l16,-1l17,-2l16,-4l17,5l16,1l17,9l16,-1l17,2l16,-4l16,17l17,28l16,6l17,7l16,5l17,2l16,12l17,17l16,9l17,4l16,-9l17,-13l16,-6l17,-9l16,-1l17,9l16,20l17,1l16,6l17,4l16,-6l16,-5l17,-2l16,12l17,-6l16,-2l17,10l16,13l17,12l16,7l17,16l16,-7l17,-12l16,-11l17,-12l16,-10l17,-3l16,-6l17,2l16,9l17,8l16,5l16,9l17,6l16,9l17,8l16,-4l17,3l16,11l17,-9l16,4l17,15l2,3" stroke-width="20" fill="none" stroke="#592f93" class="stroke_0"></path><path stroke-opacity="1.0" d="M3596,1441l12,-12l17,-4l16,0l17,12l16,-4l17,-1l16,5l17,-5l16,-12l17,-6l16,-1l17,3l16,-6l17,-6l16,-18l17,-12l16,-3l17,-17l16,-2l17,9l16,-11l16,-2l17,-21l16,2l17,-5l16,-5l17,0l16,3l17,9l16,1l17,-10l16,-13l17,-7l16,-11l17,-1l16,4l17,12l16,-6l17,-1l16,7l17,-4l16,3l16,-13l17,-1l16,-3l17,2l16,9l17,-8l16,6l17,-3l16,-10l17,3l16,-15l17,-2l16,-6l17,-4l16,0l17,0l16,-12l17,-21l16,2l16,11l17,4l16,3l17,-3l16,-14l17,-11l16,-11l17,-6l16,-2l17,-2l16,-5l17,-1l16,8l17,-8l16,-14l17,0l16,-12l17,-1l16,-3l17,-2l16,1l16,-7l17,-10l16,-2l17,-2l16,-2l17,-11l16,-17l17,-6l16,4l17,-5l16,-15l17,3l16,2l17,9l16,12l17,4l16,-12l17,-12l16,1l17,-11l16,-5l16,-9l17,-9l16,1l17,4l16,-4l17,-1l16,-2l17,-7l16,-8l17,-15l16,-8l17,11l16,-3l17,-6l16,-17l17,-7l16,8l17,4l16,3l16,3l17,10l16,-4l17,-1l16,-9l17,-13l16,-5l17,-1l16,6l17,-5l16,-4l17,-3l16,-6l17,-1l16,-2l17,3l16,-3l17,-8l16,3l17,-3l16,-8l16,0l17,-4l16,-14l17,-13l16,-3l17,8l16,13l17,-11l16,-5l17,-5l16,-3l17,-4l16,-3l17,-23l16,-1l17,-6l16,-9l17,-2l16,-2l17,-9l16,3l16,2l17,-4l16,1l17,-5l2,-2" stroke-width="20" fill="none" stroke="#592f93" class="stroke_0"></path><path stroke-opacity="1.0" d="M6522,870l3,1l16,-2l17,2l16,-9l17,5l16,3l2,0" stroke-width="20" fill="none" stroke="#592f93" class="stroke_0"></path><path stroke-opacity="1.0" d="M6769,866l3,0" stroke-width="20" fill="none" stroke="#592f93" class="stroke_0"></path></g><g clip-path="url(#plot-sample-bounds-scaled-1)"><path stroke-opacity="1.0" d="M758,1145l17,18l16,22l17,2l16,11l17,12l16,10l17,8l16,11l17,-3l16,7l16,3l17,4l16,1l17,7l16,31l17,7l16,9l17,5l16,-5l17,4l16,7l17,-2l16,-2l17,0l16,-5l17,-9l16,-4l17,14l16,14l17,12l16,22l16,13l17,3l16,4l17,-11l16,14l17,6l16,22l17,5l16,19l17,21l16,20l17,23l16,14l17,-1l16,7l17,9l16,7l17,3l16,8l16,11l17,-1l16,11l17,19l16,13l17,19l16,22l17,19l16,6l17,4l16,10l17,9l16,1l17,2l16,20l17,33l16,5l17,6l16,3l17,16l16,9l16,5l17,2l16,-1l17,13l16,18l17,8l16,10l17,3l16,15l17,9l16,19l17,22l16,19l17,11l16,13l17,10l16,0l17,-8l16,-3l17,0l16,-4l16,0l17,6l16,9l17,-5l16,-8l17,-2l16,6l17,-12l16,-6l17,0l16,8l17,6l16,-1l17,0l16,-3l17,10l16,14l17,7l16,-11l16,6l17,-4l16,-7l17,-17l16,-1l17,-2l16,-9l17,10l16,9l17,-2l16,-4l17,4l16,-1l17,-5l16,-2l17,-7l16,-5l17,-3l16,4l17,10l16,2l16,-1l17,-14l16,-3l17,12l16,-5l17,-2l16,-18l17,-27l16,2l17,21l16,0l17,3l16,10l17,14l16,13l17,6l16,8l17,-7l16,10l17,18l16,10l16,8l17,23l16,21l17,14l16,27l17,32l16,28l17,20l16,26l17,26l16,28l17,37l16,23l17,8l16,16l17,33l16,33l17,44l16,20l2,0" stroke-width="20" fill="none" stroke="#03a45e" class="stroke_1"></path><path stroke-opacity="1.0" d="M3730,2553l-4,-7" stroke-width="20" fill="none" stroke="#03a45e" class="stroke_1"></path><path stroke-opacity="1.0" d="M3877,2533l12,-10l16,-14l17,-23l16,-26l16,-23l17,-31l16,-39l17,-29l16,-19l17,-20l16,-31l17,-31l16,-36l17,-19l16,-8l17,-8l16,-17l17,-28l16,-19l17,-8l16,-25l17,-27l16,-30l17,-29l16,-10l16,-12l17,-14l16,-5l17,-5l16,0l17,-5l16,-7l17,-7l16,-10l17,-1l16,-10l17,-5l16,1l17,-7l16,-11l17,-2l16,1l17,6l16,-5l16,-5l17,-11l16,-10l17,-14l16,1l17,-12l16,-9l17,-8l16,-12l17,-12l16,-9l17,-29l16,-24l17,-28l16,-23l17,-26l16,-29l17,-24l16,-32l17,-20l16,-9l16,-17l17,-6l16,-20l17,-25l16,-16l17,-12l16,-13l17,-25l16,-15l17,-2l16,-19l17,-15l16,-21l17,-30l16,-39l17,-25l16,-26l17,-24l16,-19l17,-9l16,-7l16,7l17,0l16,4l17,-1l16,-2l17,-8l16,-12l17,-6l16,-10l17,-14l16,-12l17,-11l16,1l17,4l16,3l17,-9l16,-1l17,-3l16,-20l16,-14l17,13l16,2l17,6l16,12l17,24l16,9l17,9l16,22l17,19l16,1l17,-4l16,-10l17,8l16,-5l17,-9l16,-7l17,2l16,-2l17,12l16,8l16,-2l17,-5l16,-10l17,1l16,-6l17,-15l16,0l17,1l16,-7l17,1l16,2l17,-19l16,-10l17,-10l16,-1l17,-19l16,-8l17,-5l16,-12l17,-18l16,-10l16,-1l17,10l16,-12l17,0l16,4l3,-1" stroke-width="20" fill="none" stroke="#03a45e" class="stroke_1"></path><path stroke-opacity="1.0" d="M6539,1003l2,0l17,10l16,10l17,6l16,14l16,9l17,7l16,8l17,9l16,13l17,10l16,17l17,10l16,6l17,6" stroke-width="20" fill="none" stroke="#03a45e" class="stroke_1"></path></g><g clip-path="url(#plot-sample-bounds-scaled-1)"><path stroke-opacity="1.0" d="M758,932l17,-3l16,11l17,8l16,2l17,7l16,12l17,19l16,3l17,3l16,8l16,6l17,8l16,7l17,6l16,1l17,10l16,3l17,-1l16,4l17,-2l16,5l17,7l16,9l17,5l16,8l17,-1l16,-3l17,11l16,12l17,7l16,6l16,27l17,11l16,6l17,4l16,-15l17,-3l16,7l17,12l16,18l17,20l16,12l17,27l16,33l17,16l16,18l17,8l16,15l17,16l16,14l16,10l17,10l16,11l17,3l16,16l17,14l16,14l17,17l16,5l17,2l16,3l17,13l16,0l17,3l16,11l17,15l16,29l17,15l16,4l17,7l16,4l16,0l17,13l16,-6l17,-10l16,12l17,3l16,14l17,6l16,10l17,9l16,9l17,5l16,16l17,22l16,4l17,7l16,15l17,12l16,11l17,10l16,16l16,-1l17,15l16,16l17,11l16,5l17,0l16,-4l17,1l16,5l17,0l16,-1l17,2l16,12l17,8l16,4l17,-1l16,4l17,12l16,-2l16,-4l17,8l16,23l17,10l16,6l17,13l16,17l17,4l16,9l17,4l16,12l17,1l16,9l17,-5l16,-12l17,4l16,9l17,-4l16,11l17,5l16,11l16,18l17,11l16,3l17,0l16,4l17,13l16,16l17,0l16,-10l17,9l16,25l17,19l16,7l17,-1l16,14l17,24l16,6l17,9l16,-1l17,19l16,18l16,25l17,14l16,21l17,27l16,15l17,14l16,29l17,27l16,16l17,19l16,2l17,25l16,16l17,12l16,13l17,-2l16,6l17,21l16,18l2,2" stroke-width="20" fill="none" stroke="#ee1c25" class="stroke_2"></path><path stroke-opacity="1.0" d="M3754,2493l3,2l16,-7l17,-12l16,-10l17,-9l16,-12l17,-12l16,-17l17,-8l16,-19l17,-24l16,-9l16,-20l17,-6l16,-27l17,-17l16,-16l17,-23l16,-18l17,-17l16,-26l17,-26l16,-21l17,-13l16,-20l17,-18l16,-14l17,-20l16,-16l17,-25l16,-26l17,-23l16,-22l16,-23l17,-22l16,-11l17,-17l16,-20l17,-18l16,-13l17,-8l16,-5l17,-16l16,-8l17,5l16,-4l17,-8l16,10l17,4l16,-10l17,-1l16,13l16,27l17,2l16,-8l17,-1l16,0l17,-10l16,1l17,3l16,15l17,10l16,0l17,5l16,6l17,-4l16,2l17,4l16,7l17,14l16,-2l17,2l16,4l16,1l17,4l16,-6l17,1l16,-15l17,-17l16,-4l17,19l16,7l17,-6l16,-17l17,-8l16,-8l17,-1l16,-21l17,-16l16,-13l17,-11l16,-26l17,-16l16,-11l16,-4l17,-13l16,-3l17,-20l16,-21l17,-21l16,-27l17,-11l16,-37l17,-25l16,-3l17,-15l16,-31l17,-13l16,4l17,-5l16,-29l17,-21l16,-16l16,-26l17,-20l16,-2l17,-8l16,-12l17,-3l16,1l17,-2l16,-15l17,2l16,0l17,-6l16,-14l17,-4l16,-8l17,-3l16,1l17,-7l16,4l17,-12l16,14l16,10l17,-8l16,-8l17,2l16,-13l17,-13l16,-21l17,5l16,-10l17,-21l16,-12l17,-15l16,-18l17,-1l16,-21l17,2l16,-9l17,-10l16,-9l17,-21l16,-20l16,-13l17,-9l16,-5l17,-1l16,-8l3,-2" stroke-width="20" fill="none" stroke="#ee1c25" class="stroke_2"></path><path stroke-opacity="1.0" d="M6621,917l-12,-3" stroke-width="20" fill="none" stroke="#ee1c25" class="stroke_2"></path><path stroke-opacity="1.0" d="M6769,917l3,2" stroke-width="20" fill="none" stroke="#ee1c25" class="stroke_2"></path></g><g clip-path="url(#plot-sample-bounds-scaled-1)"><path stroke-opacity="1.0" d="M758,971l17,11l16,11l17,7l16,4l17,8l16,8l17,1l16,6l17,-10l16,-3l16,1l17,3l16,23l17,18l16,14l17,6l16,-4l17,4l16,-2l17,3l16,5l17,-3l16,10l17,6l16,2l17,9l16,18l17,18l16,1l17,11l16,9l16,7l17,2l16,-5l17,-2l16,5l17,7l16,15l17,16l16,18l17,18l16,11l17,5l16,-4l17,-4l16,13l17,13l16,8l17,1l16,17l16,10l17,-6l16,9l17,8l16,12l17,10l16,8l17,0l16,6l17,9l16,2l17,2l16,11l17,11l16,22l17,25l16,6l17,0l16,-11l17,-3l16,-3l16,3l17,-4l16,11l17,5l16,9l17,-7l16,5l17,7l16,6l17,-4l16,-9l17,18l16,9l17,9l16,1l17,-6l16,-5l17,-13l16,-8l17,-5l16,10l16,-3l17,3l16,-11l17,-24l16,-24l17,-4l16,0l17,7l16,-3l17,-3l16,-8l17,0l16,-8l17,-2l16,0l17,13l16,-6l17,0l16,6l16,12l17,21l16,-6l17,6l16,2l17,4l16,10l17,6l16,5l17,-10l16,-1l17,-19l16,-1l17,-9l16,5l17,14l16,11l17,7l16,-1l17,-2l16,0l16,4l17,5l16,9l17,-2l16,3l17,8l16,-9l17,14l16,7l17,2l16,4l17,-7l16,-7l17,-9l16,-16l17,-3l16,-7l17,3l16,13l17,14l16,0l16,16l17,5l16,-1l17,-5l16,-2l17,7l16,0l17,3l16,3l17,2l2,0" stroke-width="20" fill="none" stroke="#0465ff" class="stroke_3"></path><path stroke-opacity="1.0" d="M3606,1490l2,-1l17,-12l16,3l17,14l16,6l17,6l16,-2l17,-4l16,-14l17,-11l16,-2l17,6l16,-13l17,-14l16,-11l17,0l16,-10l17,-16l16,-7l17,-2l16,-1l16,1l17,-11l16,-1l17,-4l16,-11l17,-11l16,-4l17,-8l16,-6l17,-14l16,-8l17,-9l16,-11l17,-8l16,-7l17,2l16,-2l17,3l16,13l17,6l16,7l16,-9l17,-7l16,0l17,-5l16,1l17,-5l16,-2l17,0l16,-8l17,-3l16,-6l17,1l16,-12l17,-1l16,1l17,6l16,-4l17,-3l16,4l16,19l17,9l16,9l17,4l16,-4l17,-11l16,-4l17,-8l16,-8l17,-7l16,-2l17,-3l16,12l17,2l16,-4l17,3l16,-7l17,9l16,9l17,0l16,19l16,2l17,-12l16,1l17,9l16,4l17,1l16,-12l17,-5l16,1l17,-7l16,-13l17,-10l16,-4l17,3l16,2l17,15l16,-10l17,-8l16,11l17,-6l16,-8l16,-8l17,-9l16,12l17,0l16,-4l17,-5l16,-11l17,-10l16,-10l17,-24l16,-13l17,3l16,-8l17,-10l16,-19l17,-14l16,-4l17,-2l16,5l16,12l17,-1l16,-7l17,-3l16,-16l17,-16l16,-12l17,2l16,9l17,-16l16,-6l17,-3l16,-10l17,-9l16,-18l17,-1l16,10l17,-3l16,3l17,1l16,-8l16,-6l17,-4l16,-7l17,-4l16,-3l17,9l16,3l17,-4l16,0l17,-15l16,-17l17,-3l16,-1l17,-8l16,1l17,-3l16,0l17,-5l16,-11l17,-4l16,0l16,-2l17,7l16,2l17,1l16,-7l3,-1" stroke-width="20" fill="none" stroke="#0465ff" class="stroke_3"></path><path stroke-opacity="1.0" d="M6621,953l2,1l17,1l16,-3l17,1l16,6l17,-2l16,1l17,-5l16,8l17,2" stroke-width="20" fill="none" stroke="#0465ff" class="stroke_3"></path></g></g><g transform="scale(0.1)"><line stroke-opacity="0.5019607843137255" y1="100" x1="6038.8" y2="3400" x2="6038.8" stroke-width="10" fill="none" stroke="#f00" class="now"></line></g><g stroke-opacity="0.072" stroke-width="1" fill="none" stroke="#000" class="pointer_events_none" pointer-events="none"><line stroke-opacity="0.12" y1="10" x1="126.1" y2="345" x2="126.1" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="173.9" y2="345" x2="173.9" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="224.9" y2="345" x2="224.9" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="274.4" y2="345" x2="274.4" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="325.4" y2="345" x2="325.4" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="374.9" y2="345" x2="374.9" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="425.9" y2="345" x2="425.9" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="477" y2="345" x2="477" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="526.4" y2="345" x2="526.4" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="577.5" y2="345" x2="577.5" class="pointer_events_none" pointer-events="none"></line><line stroke-opacity="0.12" y1="10" x1="626.9" y2="345" x2="626.9" class="pointer_events_none" pointer-events="none"></line><line y1="340" x1="72" y2="340" x2="681" pointer-events="none"></line><line y1="307" x1="72" y2="307" x2="681" pointer-events="none"></line><line y1="274" x1="72" y2="274" x2="681" pointer-events="none"></line><line y1="241" x1="72" y2="241" x2="681" pointer-events="none"></line><line y1="208" x1="72" y2="208" x2="681" pointer-events="none"></line><line y1="175" x1="72" y2="175" x2="681" pointer-events="none"></line><line y1="142" x1="72" y2="142" x2="681" pointer-events="none"></line><line y1="109" x1="72" y2="109" x2="681" pointer-events="none"></line><line y1="76" x1="72" y2="76" x2="681" pointer-events="none"></line><line y1="43" x1="72" y2="43" x2="681" pointer-events="none"></line><line y1="10" x1="72" y2="10" x2="681" pointer-events="none"></line></g><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/3/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%86%AC%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="75" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="100.5" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">1月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/3/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%86%AC%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="126.1" width="47.8" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="150" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">2月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/0/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E6%98%A5%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="173.9" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="199.4" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">3月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/0/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E6%98%A5%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="224.9" width="49.4" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="249.6" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">4月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/0/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E6%98%A5%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="274.4" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="299.9" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">5月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/1/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%A4%8F%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="325.4" width="49.4" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="350.1" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">6月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/1/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%A4%8F%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="374.9" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="400.4" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">7月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/1/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%A4%8F%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="425.9" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="451.5" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">8月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/2/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E7%A7%8B%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="477" width="49.4" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="501.7" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">9月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/2/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E7%A7%8B%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="526.4" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="552" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">10月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/2/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E7%A7%8B%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="577.5" width="49.4" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="602.2" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">11月</text></a><a class="Figure-HorizontalAxis-group" xlink:href="/compare/s/3/131055~137446~149405~127419/%E5%8C%97%E4%BA%AC%E5%B8%82%E3%80%81%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E3%80%81Tokyo%E5%92%8CYangquan%E5%86%AC%E5%AD%A3%E5%B9%B3%E5%9D%87%E5%A4%A9%E6%B0%94%E6%AF%94%E8%BE%83#Figures-CloudCover"><rect x="626.9" width="51.1" y="10" fill="#fff" fill-opacity="0.004" class="Figure-hoverRect" height="330"></rect><text text-anchor="middle" x="652.5" y="355.7" stroke="none" class="Figure-HorizontalAxis-label">12月</text></a><g fill="#666" stroke="none"><text text-anchor="end" x="71" y="345">0%</text><text x="682" y="345">0%</text><text text-anchor="end" x="71" y="312">10%</text><text x="682" y="312">10%</text><text text-anchor="end" x="71" y="279">20%</text><text x="682" y="279">20%</text><text text-anchor="end" x="71" y="246">30%</text><text x="682" y="246">30%</text><text text-anchor="end" x="71" y="213">40%</text><text x="682" y="213">40%</text><text text-anchor="end" x="71" y="180">50%</text><text x="682" y="180">50%</text><text text-anchor="end" x="71" y="147">60%</text><text x="682" y="147">60%</text><text text-anchor="end" x="71" y="114">70%</text><text x="682" y="114">70%</text><text text-anchor="end" x="71" y="81">80%</text><text x="682" y="81">80%</text><text text-anchor="end" x="71" y="48">90%</text><text x="682" y="48">90%</text><text text-anchor="end" x="71" y="15">100%</text><text x="682" y="15">100%</text></g><g font-weight="normal" text-decoration="none" font-size="10" font-family="sans-serif" font-style="normal" pointer-events="none"><text font-weight="normal" text-decoration="none" text-anchor="middle" x="644.2" font-size="10" y="88" font-family="sans-serif" font-style="normal" opacity="1" fill="#592f93" stroke="none">77</text></g><g font-weight="normal" text-decoration="none" font-size="10" font-family="sans-serif" font-style="normal" pointer-events="none"><text font-weight="normal" text-decoration="none" text-anchor="middle" x="352.6" font-size="10" y="152.7" font-family="sans-serif" font-style="normal" opacity="1" fill="#592f93" stroke="none">58</text></g><g font-weight="normal" text-decoration="none" font-size="10" font-family="sans-serif" font-style="normal" pointer-events="none"><text font-weight="normal" text-decoration="none" text-anchor="middle" x="645.9" font-size="10" y="102.2" font-family="sans-serif" font-style="normal" opacity="1" fill="#03a45e" stroke="none">73</text></g><g font-weight="normal" text-decoration="none" font-size="10" font-family="sans-serif" font-style="normal" pointer-events="none"><text font-weight="normal" text-decoration="none" text-anchor="middle" x="380.6" font-size="10" y="261.9" font-family="sans-serif" font-style="normal" opacity="1" fill="#03a45e" stroke="none">25</text></g><g font-weight="normal" text-decoration="none" font-size="10" font-family="sans-serif" font-style="normal" pointer-events="none"><text font-weight="normal" text-decoration="none" text-anchor="middle" x="668.9" font-size="10" y="93" font-family="sans-serif" font-style="normal" opacity="1" fill="#ee1c25" stroke="none">76</text></g><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" class="now" pointer-events="none"><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" opacity="0.5" fill="#f00" stroke="none"><g opacity="0.4"><text x="607.9" y="331.7" stroke-linejoin="bevel" stroke-width="4" fill="#fff" stroke="#fff">现在</text></g><text x="607.9" y="331.7">现在</text></g></g><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" pointer-events="none"><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" opacity="1" fill="#592f93" stroke="none"><g opacity="0.6"><text x="95.6" y="86" stroke-linejoin="bevel" stroke-width="4" fill="#fff" stroke="#fff">北京市</text></g><text x="95.6" y="86">北京市</text></g></g><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" pointer-events="none"><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" opacity="1" fill="#ee1c25" stroke="none"><g opacity="0.6"><text text-anchor="middle" x="451.5" y="175.1" stroke-linejoin="bevel" stroke-width="4" fill="#fff" stroke="#fff">Tokyo</text></g><text text-anchor="middle" x="451.5" y="175.1">Tokyo</text></g></g><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" pointer-events="none"><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" opacity="1" fill="#0465ff" stroke="none"><g opacity="0.6"><text text-anchor="end" x="306.5" y="160.9" stroke-linejoin="bevel" stroke-width="4" fill="#fff" stroke="#fff">Yangquan</text></g><text text-anchor="end" x="306.5" y="160.9">Yangquan</text></g></g><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" pointer-events="none"><g font-weight="normal" text-decoration="none" font-size="15" font-family="sans-serif" font-style="normal" opacity="1" fill="#03a45e" stroke="none"><g opacity="0.6"><text x="319.7" y="192.2" stroke-linejoin="bevel" stroke-width="4" fill="#fff" stroke="#fff">中国上海</text></g><text x="319.7" y="192.2">中国上海</text></g></g></svg></div>
<div class="Figure-caption charts_only_do_hide">
天空<em>晴朗</em>、<em>大部分晴朗</em>或<em>部分多云</em>（即不到<em>60%</em>的天空被云彩覆盖）的时间百分比。 
</div>
</div>
</div>
</div>


<img src="{{site.baseurl}}/evolution.jpg" alt="Evolution Image">
## 个人/For Me
[我](https://infoseeker.cn/CV)目前是[同济大学](https://www.tongji.edu.cn/)[海洋与地球科学学院](https://mgg.tongji.edu.cn/)海洋科学系的本科生。2025年9月，我将开始在[北京大学](https://www.pku.edu.cn/)[物理学院](https://www.phy.pku.edu.cn/)[大气与海洋科学系](https://www.atmos.pku.edu.cn/index.htm)攻读博士学位，在那里我将进行行星气候学研究。我目前还在日本东京的[东京科学大学](https://www.isct.ac.jp/en)（前身为[东京工业大学](https://www.titech.ac.jp/english)作为访问学生进行交流。

I am currently an undergraduate student in the Department of Marine Science at the [College of Ocean and Earth Sciences](https://mgg.tongji.edu.cn/), [Tongji University](https://www.tongji.edu.cn/). In September 2025, I will begin my PHD studies at the [Department of Atmospheric and Oceanic Sciences](https://www.atmos.pku.edu.cn/index.htm), [School of Physics](https://www.phy.pku.edu.cn/), [Peking University](https://www.pku.edu.cn/), where I will be conducting research in planetary climatology. I am also currently participating in an exchange program at [Institute of Science Tokyo](https://www.isct.ac.jp/en) (formerly known as [Tokyo Institute of Technology](https://www.titech.ac.jp/english)) in Tokyo, Japan.

我在华北山西省的一个工矿城市阳泉出生长大，这里曾在上世纪后半叶繁极一时。多年来，我曾在太原、北京、上海和东京长期生活过。我毕业于阳泉市第一中学校，该校以培养科幻作家刘慈欣和百度首席执行官李彦宏等杰出人物而闻名。在同济大学的本科生涯中，我经过深思熟虑，选择将深造重点放在气候动力学上，并对行星气候学尤为感兴趣。这是一个交叉学科而且是蕴含着复杂系统理论的领域，我因此而入迷。欢迎与我联系：<a href="mailto:wangyinjie@tongji.edu.cn">wangyinjie@tongji.edu.cn</a>

I was born and raised in Yangquan, an industrial and mining city in Shanxi Province, northern China, which flourished during the latter half of the 20th century. Over the years, I have also lived for extended periods in Taiyuan, Beijing, Shanghai, and Tokyo. I graduated from Yangquan No. 1 High School, which is known for having nurtured prominent figures such as the science fiction writer Liu Cixin and Baidu's CEO Robin Li. At Tongji University, after thoughtful deliberation, I chose to focus my advanced studies on climate dynamics, with a particular passion for planetary climatology. I am fascinated by this interdisciplinary field, which is rich with the complexities of systems theory.Feel free to contact me: <a href="mailto:wangyinjie@tongji.edu.cn">wangyinjie@tongji.edu.cn</a>.

在我的幼年和青少年时期，我的兴趣非常广泛，我也因此受益至今。在网络空间中，我以“加卡利亚”（英文名：Djungarian）的名义，活跃于睡莲、音mad、天文、清朝历史、宠物以及古玩收藏等多个网络社团。之所以选择这个网名，是因为在2010年我注册QQ账号时，正痴迷于养仓鼠。当时各个仓鼠属种的学名中，只有“加卡利亚”（后人已经规范学名为短尾侏儒仓鼠（Phodopus sungorus））长度适中，不像其他名字那么怪异，因此这个名字便沿用了下来。虽然期间我曾尝试更改网名，但这是最早的名称，胳膊拗不过大腿，一直用到现在。

During my childhood and teenage years, I had a wide range of interests, which have continued to benefit me to this day. In the online community, I have been active under the name "Djungarian" in various groups related to water lilies, YTPMVs（OtoMAD）, astronomy, Qing dynasty history, pets, and antique collecting. I chose this username because, when I registered for QQ in 2010, I was fascinated by raising hamsters. Among the scientific names of various hamster species, only "Djungarian" (later standardized as Phodopus sungorus, the short-tailed dwarf hamster) had a suitable length and didn't sound as odd as the others. Though I attempted to change my username several times over the years, this was my very first name, and I ultimately kept it—sometimes, you just can't fight the inevitable!
### 研究领域/Research Areas
- **行星宜居带外侧气候研究/Outer boundary of the habitable zone of planetary climate**
