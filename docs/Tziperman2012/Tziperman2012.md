<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>雪球地球情景下的大陆约束与海洋冰盖厚度</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <h1>雪球地球情景下的大陆约束与海洋冰盖厚度</h1>
    <h2>Eli Tziperman<sup>1</sup>, Dorian S. Abbot<sup>2</sup>, Yosef Ashkenazy<sup>3</sup>, Hezi Gildor<sup>4</sup>, David Pollard<sup>5</sup>, Christian G. Schoof<sup>6</sup>, Daniel P. Schrag<sup>1</sup></h2>
    
    <p><strong>摘要</strong></p>
    <p>近年研究表明，雪球地球情景下冰流能够有效均质化全球冰层厚度。先前研究均采用局地或一维全球（仅纬度）模型，其形式难以扩展至二维全球配置。本文使用二维全球冰流模型，结合新元古代陆块重建，研究大陆约束对雪球地球冰流及冰厚的影响。通过数值模拟和尺度分析表明，一维模型未体现的多种大陆与边缘海配置会导致显著冰厚变化，包括次大陆与入口受限的边缘海之间的狭窄区域。本研究忽略了许多已知重要因素（如热力学、光学效应、尘埃及其输运），因此作为聚焦特定效应的过程研究，而非对新元古代冰厚的真实模拟。</p>

    <p>模型公式在以下几方面推广并扩展了先前结果：引入球坐标系修正项和横向几何效应。本研究为耦合雪球冰流模型与海洋-大气环流模型、实现新元古代冰厚定量模拟迈出重要一步。</p>



    <h2>1. 引言</h2>
    <p>新元古代（7.5-5.8亿年前）期间，地球经历多次冰期事件，部分冰期在赤道海域沉积冰成岩，暗示可能存在全球性冰盖（Harland, 1964; Kirschvink, 1992; Hoffman et al., 1998）。理解这些事件对气候动力学认知提出挑战，相关争议详见Pierrehumbert等（2011）的综述。</p>

    <p>雪球地球海洋冰流近年备受关注。Goodman与Pierrehumbert（2003）证明冰流能有效均质化冰厚。冰厚对光合生物在雪球事件中的存活具有潜在重要影响（Hoffman与Schrag, 2002; Pollard与Kasting, 2005; McKay, 2000; Campbell等, 2011），超过数十米的冰层可能阻碍光合作用（McKay, 2000）。</p>

    <p>已有研究涉及冰流效应（Goodman与Pierrehumbert, 2003）、冰光学特性（McKay, 2000; Warren等, 2002）、海水冻结与积雪的光学差异（Pollard与Kasting, 2005, 2006; Warren与Brandt, 2006; Goodman, 2006）、动力与热力学海冰作用（Lewis等, 2007），以及雪球冰盖尘埃沉积（Abbot与Pierrehumbert, 2010; Le Hir等, 2010）和输运（Li与Pierrehumbert, 2011）。</p>

    <p>[5] Warren等（2002）与Pollard及Kasting（2005）提出受限边缘海可能导致显著冰厚变化，因冰流入海受限于海峡侧壁摩擦，可能无法平衡海内消融/融化。Campbell等（2011）基于Nye（1965）解析解，推导了侧壁摩擦下狭长矩形边缘海的冰入侵长度公式。</p>

    <p>[6] 现有雪球冰流计算均采用一维（纬度）全球模型或理想化局地矩形边缘海。此外，一维全球模型基于冰架变形率公式（Weertman, 1957），该公式无法扩展至二维（经度-纬度）情形。</p>

    <p>[7] 本文有两大目标：<br>
    1. 研究存在大陆时球面冰流及受限海域引发的冰厚剧烈变化，展示基于新元古代陆块重建的数值解与冰厚尺度关系；<br>
    2. 建立包含双水平维度的球面冰流模型，引入冰川学中未考虑的物理过程与数学项。通过直接推导Stokes方程，构建二维水平流动问题，突破早期研究（Goodman与Pierrehumbert, 2003; Pollard与Kasting, 2005）因依赖Weertman（1957）应变率公式而受限的框架。</p>

    <p>[8] 模型创新体现在采用Morland（1987）冰架动量收支（参见MacAyeal与Barcilon, 1988; MacAyeal, 1989, 1997）及球坐标系，揭示二者即使在单维模型中亦会引入附加项。动量方程在球坐标系下的展开形式为：</p>
    <div>
        $$ \frac{\partial}{\partial \theta}\left( \nu h \frac{\partial u}{\partial \theta} \right) + \frac{1}{\sin\theta}\frac{\partial}{\partial \phi}\left( \nu h \frac{\partial u}{\partial \phi} \right) = \rho g h \frac{\partial h}{\partial \theta} $$
    </div>
    <p>其中$\theta$为余纬，$\phi$为经度，$\nu$为冰黏度，$u$为流速分量。</p>

    <p>[9] 尽管雪球地球冰厚受多重因素影响（如冰光学特性、尘埃输运等），本研究聚焦冰流与大陆配置的相互作用，暂忽略其他反馈机制。这种理想化处理虽简化了现实复杂性，但有助于深入解析流动动力学机制。需强调，本文计算结果不可直接用于验证热带无冰/薄冰假说（Chandler与Sohl, 2000; Hyde等, 2000等）。</p>

    <p>后续章节结构如下：第二节概述模型方程推导（详细推导见附录），该方程系对经典冰架方程（Morland, 1987; MacAyeal, 1997）的球坐标扩展；第三节展示模型结果；第四节推导无大陆全球轴对称情形与受限海域的冰厚尺度律；第五节总结。关键尺度律表达式为：</p>
    <div>
        全球无陆冰厚： $ H \sim \left( \frac{\mu Q}{\rho g} \right)^{1/4} $ <br>
        受限海域冰厚： $ H_{constricted} \sim \left( \frac{\tau_w L^2}{\mu} \right)^{1/3} $
    </div>
    <p>式中$\mu$为冰黏度系数，$Q$为冰通量，$\tau_w$为侧壁剪切应力，$L$为特征长度。</p>

    <h3>附录：模型方程推导要点</h3>
    <p>基于Stokes方程的三维动量平衡，通过垂直积分与浅冰近似简化，得到二维水平动量方程。球坐标系中需考虑曲率项，例如经向应力散度项包含附加曲率修正：</p>
    <div>
        $$ \frac{\partial \sigma_{\theta\theta}}{\partial \theta} + \frac{1}{\sin\theta}\frac{\partial \sigma_{\theta\phi}}{\partial \phi} + \cot\theta \, \sigma_{\theta\theta} = \rho g h \frac{\partial h}{\partial \theta} $$
    </div>
    <p>其中$\sigma_{ij}$为深度平均应力分量，$\cot\theta$项体现球面几何效应。</p>
</body>
</html>