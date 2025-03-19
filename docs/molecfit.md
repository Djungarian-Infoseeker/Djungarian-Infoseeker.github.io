<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Molecfit 和 EsoReflex 介绍</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Molecfit 和 EsoReflex 介绍</h1>
        
        <h2>1. Molecfit 简介</h2>
        <p>Molecfit 是由欧洲南方天文台 (ESO) 开发的一款用于去除地球大气吸收影响的软件工具。它可以根据大气模型计算大气透射率，并对天文光谱进行校正。</p>
        
        <h3>1.1 功能特点</h3>
        <ul>
            <li>基于 LBLRTM 辐射传输模型进行大气拟合</li>
            <li>支持 ASCII 和 FITS 格式光谱数据</li>
            <li>支持 GUI 界面和命令行操作</li>
        </ul>
        
        <h3>1.2 安装步骤</h3>
        <p>安装 Molecfit 需要满足以下要求：</p>
        <ul>
            <li>Linux 或 macOS 系统</li>
            <li>Python 2.6/2.7（不支持 Python 3）</li>
            <li>wxPython、matplotlib、PyFITS</li>
        </ul>
        <p>安装步骤：</p>
        <pre>
chmod +x molecfit_installer.run
./molecfit_installer.run
        </pre>
        
        <h2>2. EsoReflex 简介</h2>
        <p>EsoReflex 是 ESO 开发的一个数据处理工作流管理系统，主要用于处理 ESO 望远镜的数据管线 (pipelines)。</p>
        
        <h3>2.1 功能特点</h3>
        <ul>
            <li>提供图形化用户界面 (GUI)</li>
            <li>支持自动化数据处理</li>
            <li>可用于 VLT/X-Shooter、FORS2 等 ESO 设备的数据处理</li>
        </ul>
        
        <h3>2.2 安装步骤</h3>
        <p>推荐使用 MacPorts 进行安装：</p>
        <pre>
sudo port install eso-reflex
        </pre>
        <p>安装完成后，运行：</p>
        <pre>
esoreflex
        </pre>
        
        <h2>3. 参考文档</h2>
        <p>更多详细信息，请参考 ESO 官方文档：</p>
        <ul>
            <li><a href="https://www.eso.org/sci/software/pipelines/">ESO Pipelines 官网</a></li>
            <li><a href="https://www.eso.org/sci/software/tools/molecfit">Molecfit 官网</a></li>
        </ul>
    </div>
</body>
</html>