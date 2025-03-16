<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>冰模型物理参数</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>冰模型物理参数</h1>
    <p>冰模型物理的namelist变量列于表3中。通常情况下，restart 变量为 true，因为大多数运行类型都会从二进制重启文件开始读取数据。有关运行类型及使用重启文件和内部生成的模型数据作为初始条件的详细信息，请参阅第5节。</p>
    <p>如果将 kcolumn 设为 1，则模型将以单列模式运行。然而，此选项尚未经过彻底测试，因此不受支持。</p>
    <p>冰速计算每个时间步长会循环 ndte 次，以确保弹性波在下一个时间步长前得到充分阻尼。子循环时间步长计算公式为：dte = dt/ndte，并且必须足够小以确保阻尼时间尺度 T 满足以下关系：</p>
    <pre>dte < T < dt</pre>
    <p>有关详细信息，请参阅 (Hunke, 2001) 和 (Hunke & Lipscomb, 2008) 的第4.4节。</p>
    <h2>namelist 变量表 (ice_nml)</h2>
    <table>
        <tr>
            <th>变量名</th>
            <th>类型</th>
            <th>CESM-CAM4 gx3</th>
            <th>CESM-CAM4 gx1</th>
            <th>CESM-CAM5 gx1</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>ndte</td>
            <td>整数</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>EVP 动力学的子循环次数</td>
        </tr>
        <tr>
            <td>kcolumn</td>
            <td>整数</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>单列模式标志（0 = 关闭，1 = 开启，未测试）</td>
        </tr>
        <tr>
            <td>kitd</td>
            <td>整数</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>确定ITD转换方式（0 = delta 方法, 1 = 线性重映射）</td>
        </tr>
        <tr>
            <td>kdyn</td>
            <td>整数</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>冰动力学选择（0 = 无冰动力学, 1 = EVP 动力学）</td>
        </tr>
        <tr>
            <td>kstrength</td>
            <td>整数</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>压力计算方法（0 = Hibler (1979)，1 = Rothrock (1975)）</td>
        </tr>
        <tr>
            <td>evp_damping</td>
            <td>逻辑</td>
            <td>false</td>
            <td>false</td>
            <td>false</td>
            <td>EVP 阻尼（true = 使用阻尼, 但不受支持）</td>
        </tr>
        <tr>
            <td>advection</td>
            <td>字符</td>
            <td>remap</td>
            <td>remap</td>
            <td>remap</td>
            <td>水平平流方案（'remap' = 递增重映射, 'upwind' = 迎风）</td>
        </tr>
        <tr>
            <td>shortwave</td>
            <td>字符</td>
            <td>dEdd</td>
            <td>dEdd</td>
            <td>dEdd</td>
            <td>短波辐射传输方案（'default' = CCSM3 短波, 'dEdd' = delta-Eddington 短波）</td>
        </tr>
    </table>
    <p>有关更多变量的信息，请参考完整的 CESM 文档。</p>
</body>
</html>
