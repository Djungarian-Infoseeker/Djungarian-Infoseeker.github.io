2024年11月21日
因为在跑模型的过程中总是出现“参数化”这个名词，由于我之前没接触过这部分内容，看过很多简单的名词解释只是在强调说“由于一些现象比网格尺度要小，所以需要用参数进行表示”，让人看得云里雾里。而且这部分中文内容在网上不好找，所以准备自己汇总一下使得理解更深刻一点。
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>什么是参数化？</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h1>什么是参数化？</h1>
    <p>参数化（Parameterization）是指通过简化的数学公式来描述那些无法直接解析的小尺度物理过程。它广泛应用于科学计算和数值建模中，特别是在气候模型和天气预报模型中。其具体的工作原理为通过将小尺度的过程表示为大尺度变量的函数关系来实现。</p>

    <h2>为什么需要参数化？</h2>
    <p>参数化的必要性主要体现在以下几个方面：</p>
    <ol>
        <li><strong>数值模型的分辨率有限：</strong> 模型的网格通常在几十公里甚至更大，小尺度的物理过程（如对流、湍流）无法直接模拟。</li>
        <li><strong>计算资源有限：</strong> 显式模拟所有的小尺度过程会耗费巨大的计算资源。</li>
        <li><strong>物理过程的复杂性：</strong> 许多自然现象（如辐射传输、云微物理）难以通过完整的公式化精确描述。</li>
    </ol>

    <h2>参数化的应用场景</h2>
    <p>在气候和天气建模中，参数化用于以下关键场景：</p>
    <ul>
        <li><strong>云和降水：</strong> 描述云滴凝结、碰并和雨滴形成等复杂过程。</li>
        <li><strong>湍流混合：</strong> 模拟行星边界层中热量、动量和湿度的垂直传输。</li>
        <li><strong>辐射传输：</strong> 简化计算大气对太阳辐射（短波）和地球辐射（长波）的吸收和散射。</li>
        <li><strong>地表过程：</strong> 计算地表与大气之间的热量和动量交换。</li>
    </ul>
    <h1>参数化的原因：离散化</h1>
    <h2>离散化的概念</h2>
    <p>离散化是将连续的物理过程分解为模型网格中可处理的离散单元（如图中的 3D 网格框）。</p>
</body>
</html>
