<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>实时天气信息展示</title>
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
            width: 200px;
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
            background-color: transparent; /* 改成透明，以适应深色背景 */
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h1>实时天气信息</h1>
    <div class="weather-container" id="weather-container">
        <!-- 每个城市天气数据和温度图表将插入这里 -->
    </div>

    <!-- JavaScript 用于获取天气数据 -->
    <script>
        async function getWeatherForecast(cityName, displayName) {
            const apiKey = '1550ebde7dead2d2c42f69c899d81984'; // 将 YOUR_API_KEY 替换为你实际的 API 密钥
            const proxyUrl = 'https://corsproxy.io/?';
            const apiUrl = `${proxyUrl}https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=zh_cn&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('无法获取天气数据');
                }

                const data = await response.json();
                const currentWeather = data.list[0]; // 获取第一个时间段的天气数据
                const weatherInfo = `
                    <div class="weather-title">${displayName}</div>
                    <div class="weather-details">
                        <p>温度: ${currentWeather.main.temp}°C</p>
                        <p>天气: ${currentWeather.weather[0].description}</p>
                        <p>湿度: ${currentWeather.main.humidity}%</p>
                        <p>风速: ${currentWeather.wind.speed} m/s</p>
                        <p>气压: ${currentWeather.main.pressure} hPa</p>
                        <p>能见度: ${(currentWeather.visibility / 1000).toFixed(1)} km</p>
                        <p>日出: ${new Date(data.city.sunrise * 1000).toLocaleTimeString('zh-CN')}</p>
                        <p>日落: ${new Date(data.city.sunset * 1000).toLocaleTimeString('zh-CN')}</p>
                    </div>
                    <canvas id="chart-${cityName}" width="180" height="120"></canvas>
                `;

                const container = document.createElement('div');
                container.className = 'weather-box';
                container.innerHTML = weatherInfo;
                document.getElementById('weather-container').appendChild(container);

                // 绘制温度变化图表
                drawTemperatureChart(data.list, `chart-${cityName}`);
            } catch (error) {
                console.error('获取天气数据失败:', error);
                const container = document.createElement('div');
                container.className = 'weather-box';
                container.innerText = `${displayName}天气信息获取失败`;
                document.getElementById('weather-container').appendChild(container);
            }
        }

        function drawTemperatureChart(forecastData, canvasId) {
            const ctx = document.getElementById(canvasId).getContext('2d');

            // 获取当前时间
            const currentTime = new Date();

            // 只保留当天的预测数据
            const filteredData = forecastData.filter(item => {
                const forecastTime = new Date(item.dt * 1000);
                return forecastTime.getDate() === currentTime.getDate() &&
                       forecastTime.getMonth() === currentTime.getMonth() &&
                       forecastTime.getFullYear() === currentTime.getFullYear() &&
                       forecastTime <= currentTime;
            });

            const labels = filteredData.map(item => new Date(item.dt * 1000).getHours() + ':00');
            const temperatures = filteredData.map(item => item.main.temp);

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '温度变化',
                        data: temperatures,
                        borderColor: '#ffcc00',
                        backgroundColor: 'rgba(255, 204, 0, 0.2)',
                        borderWidth: 2,
                        pointRadius: 3,
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: '时间 (小时)',
                                color: '#ffffff',
                            },
                            ticks: {
                                color: '#ffffff',
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: '温度 (°C)',
                                color: '#ffffff',
                            },
                            ticks: {
                                color: '#ffffff',
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff',
                            }
                        }
                    }
                }
            });
        }

        // 使用 window.onload 确保页面加载完毕后再执行
        window.onload = function () {
            getWeatherForecast('Yangquan', '阳泉');  // 阳泉
            getWeatherForecast('Beijing', '北京');    // 北京
            getWeatherForecast('Shanghai', '上海');  // 上海
            getWeatherForecast('Tokyo', '东京');     // 东京
        };
    </script>
</body>
</html>





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
