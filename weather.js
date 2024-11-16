async function getWeather(cityName, elementId) {
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
            ${cityName}：
            温度: ${data.main.temp}°C,
            天气: ${data.weather[0].description},
            湿度: ${data.main.humidity}%,
            风速: ${data.wind.speed} m/s
        `;
        document.getElementById(elementId).innerText = weatherInfo;
    } catch (error) {
        console.error('获取天气数据失败:', error);
        document.getElementById(elementId).innerText = '天气信息获取失败';
    }
}

// 使用 window.onload 确保页面加载完毕后再执行
window.onload = function() {
    getWeather('Yangquan', 'weather-yangquan');  // 阳泉
    getWeather('Beijing', 'weather-beijing');    // 北京
    getWeather('Shanghai', 'weather-shanghai');  // 上海
    getWeather('Tokyo', 'weather-tokyo');        // 东京
};
