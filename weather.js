async function getWeather(cityName, elementId, displayName) {
    const apiKey = 'YOUR_API_KEY'; // 将 YOUR_API_KEY 替换为你实际的 API 密钥
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
            <p>温度: ${data.main.temp}°C</p>
            <p>天气: ${data.weather[0].description}</p>
            <p>湿度: ${data.main.humidity}%</p>
            <p>风速: ${data.wind.speed} m/s</p>
            <p>气压: ${data.main.pressure} hPa</p>
            <p>能见度: ${(data.visibility / 1000).toFixed(1)} km</p>
            <p>日出: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString('zh-CN')}</p>
            <p>日落: ${new Date(data.sys.sunset * 1000).toLocaleTimeString('zh-CN')}</p>
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
