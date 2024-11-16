async function getWeather(lat, lon, cityName, elementId) {
    const apiKey = 'YOUR_API_KEY'; // 替换为你实际的 API 密钥
    const proxyUrl = 'https://corsproxy.io/?';
    const apiUrl = `${proxyUrl}https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=zh_cn&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('无法获取天气数据');
        }

        const data = await response.json();
        const currentWeather = data.current;
        const weatherInfo = `
            ${cityName}：
            温度: ${currentWeather.temp}°C,
            天气: ${currentWeather.weather[0].description},
            湿度: ${currentWeather.humidity}%,
            风速: ${currentWeather.wind_speed} m/s
        `;
        document.getElementById(elementId).innerText = weatherInfo;
    } catch (error) {
        console.error('获取天气数据失败:', error);
        document.getElementById(elementId).innerText = '天气信息获取失败';
    }
}

// 使用 window.onload 确保页面加载完毕后再执行
window.onload = function() {
    getWeather(37.85, 113.57, '阳泉', 'weather-yangquan');  // 阳泉
    getWeather(39.90, 116.40, '北京', 'weather-beijing');   // 北京
    getWeather(31.23, 121.47, '上海', 'weather-shanghai');  // 上海
    getWeather(35.68, 139.69, '东京', 'weather-tokyo');     // 东京
};
