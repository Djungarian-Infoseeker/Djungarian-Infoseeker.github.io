
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>实时天气信息展示</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1a1a1a;
            color: #ffffff; /* 字体颜色为白色 */
            text-align: center;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #ffcc00;
            margin-bottom: 20px; /* 缩小标题的底部间距 */
        }

        .weather-container {
            display: flex;
            justify-content: space-around; /* 使每个方框之间有合适的空间 */
            align-items: center;
            gap: 10px;
            flex-wrap: wrap; /* 允许在较小的屏幕上自动换行 */
        }

        .weather-box {
            background-color: #333;
            border-radius: 10px;
            padding: 15px;
            width: 150px; /* 方框缩小 */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s;
            flex: 0 1 auto; /* 宽度保持合适比例，允许换行 */
        }

        .weather-box:hover {
            transform: translateY(-5px); /* 缩小浮动高度 */
        }

        .weather-title {
            font-size: 1.2em; /* 缩小标题字体大小 */
            margin-bottom: 8px;
            color: #ffcc00; /* 保持黄色标题 */
        }

        .weather-details {
            font-size: 0.9em; /* 缩小详情字体大小 */
        }
    </style>
</head>
<body>
    <h1>实时天气信息</h1>
    <div class="weather-container">
        <div id="weather-yangquan" class="weather-box">阳泉天气加载中...</div>
        <div id="weather-beijing" class="weather-box">北京天气加载中...</div>
        <div id="weather-shanghai" class="weather-box">上海天气加载中...</div>
        <div id="weather-tokyo" class="weather-box">东京天气加载中...</div>
    </div>

    <!-- JavaScript 用于获取天气数据 -->
    <script>
        async function getWeather(cityName, elementId, displayName) {
            const apiKey = '1550ebde7dead2d2c42f69c899d81984'; // 将 YOUR_API_KEY 替换为你实际的 API 密钥
            const proxyUrl = 'https://corsproxy.io/?'; // 使用 CORS 代理绕过跨域问题
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
                `;
                document.getElementById(elementId).innerHTML = weatherInfo;
            } catch (error) {
                console.error('获取天气数据失败:', error);
                document.getElementById(elementId).innerText = '天气信息获取失败';
            }
        }

        // 使用 window.onload 确保页面加载完毕后再执行
        window.onload = function() {
            getWeather('Yangquan', 'weather-yangquan', '阳泉');  // 阳泉
            getWeather('Beijing', 'weather-beijing', '北京');    // 北京
            getWeather('Shanghai', 'weather-shanghai', '上海');  // 上海
            getWeather('Tokyo', 'weather-tokyo', '东京');        // 东京
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
