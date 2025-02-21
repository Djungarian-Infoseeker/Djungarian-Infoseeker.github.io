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
    <p>近年来的研究表明，雪球地球上的冰流能够非常有效地使全球冰层厚度均质化。以往的研究均采用局部模型或仅考虑纬度变化的一维全球模型，其建模方式难以推广到二维的全球配置。本文利用重构的新元古代陆块配置，采用二维全球冰流模型研究大陆收缩对雪球地球情景下冰流和冰层厚度的影响。数值模拟和尺度分析表明，各种大陆和边缘海的构型（这些构型在一维模型中无法体现）会导致冰层厚度出现较大变化，包括在次大陆与边缘海之间出现入口受限的狭窄区域。由于本研究忽略了热力学、光学效应、尘埃及尘埃输送等许多已知的重要因素，因此仅作为针对某一特定效应的过程研究，而非对新元古代冰层厚度进行逼真模拟。本文所开发的模型公式在多个方面推广和扩展了先前的成果，包括引入了球面坐标和横向几何的修正，因此，这项研究是向将雪球冰流模型与一般环流海洋和大气模型耦合、实现对新元古代雪球冰层厚度更定量模拟迈出的一步。</p>

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
    <h2>2. 模型：球面二维冰架流动</h2>
    <h3>2.1 控制方程推导</h3>
    <p>模型推导概要如下（详见附录A）。设球坐标系（经度φ, 余纬θ, 垂向z）对应速度场(u, v, w)，动量方程为：</p>
    <div>
        $$
        \begin{aligned}
        0 &= \frac{1}{r \sin\theta} \partial_\phi p + (\nabla \cdot \tau) \cdot \hat{e}_\phi \\
        0 &= \frac{1}{r} \partial_\theta p + (\nabla \cdot \tau) \cdot \hat{e}_\theta \\
        0 &= \partial_z p - \rho_I g + (\nabla \cdot \tau) \cdot \hat{e}_z
        \end{aligned}
        $$
    </div>
    <p>其中$r$为地球半径，$p$为压力，$\tau = \{\tau_{ij}\}$为应力张量。采用Glen流动律（Glen, 1955）建立应力与应变率关系：</p>
    <div>
        $$
        \tau_{ij} = A(T) \left( \frac{\dot{\varepsilon}_{ij}}{\dot{\varepsilon}^{1/3}} \right), \quad 
        \dot{\varepsilon}^2 = \frac{1}{2}\dot{\varepsilon}_{mn}\dot{\varepsilon}_{mn}
        $$
    </div>
    <p>温度$T$沿深度线性分布，表面温度采用NCAR CAM模型拟合的"暖"（高CO₂）与"冷"（低CO₂）廓线（Abbot等, 2012待发表）。边界条件为：</p>
    <div>
        $$
        (\tau - p\mathbf{I}) \cdot \hat{n}_s = 0 \quad (\text{冰面}) \\
        (\tau - p\mathbf{I}) \cdot \hat{n}_b = \hat{n}_b p_w \quad (\text{冰底})
        $$
    </div>

    <h3>2.2 浅冰近似与球坐标修正</h3>
    <p>基于水平流速不随深度变化假设（Weertman, 1957）及薄壳近似，应变率张量在球坐标系中表示为：</p>
    <div>
        $$
        \dot{\varepsilon} \approx 
        \begin{pmatrix}
        \frac{1}{r \sin\theta} (\partial_\phi u + v \cos\theta) & \frac{1}{2r} \left[ \frac{1}{\sin\theta}\partial_\phi v + \sin\theta \partial_\theta\left(\frac{u}{\sin\theta}\right) \right] & 0 \\
        \cdot & \frac{1}{r} \partial_\theta v & 0 \\
        0 & 0 & \partial_z w
        \end{pmatrix}
        $$
    </div>
    <p>通过垂直积分动量方程并应用边界条件，得到球坐标下的冰架控制方程组：</p>
    <div>
        $$
        \begin{aligned}
        0 &= \frac{1}{\sin\theta} \partial_\phi \left[ B \left( \frac{2}{\sin\theta} (\partial_\phi u + v \cos\theta) + \partial_\theta v \right) \right] \\
        &\quad + \frac{1}{\sin\theta} \partial_\theta \left[ B \sin\theta \partial_\theta v \right] - \rho_I g (1 - m) h \partial_\theta h \\
        B &= \frac{1}{r} h \left\langle A(T)^{-1/3} \dot{\varepsilon}^{-2/3} \right\rangle \\
        \dot{\varepsilon}^2 &= \frac{1}{2} \left( \dot{\varepsilon}_{\phi\phi}^2 + \dot{\varepsilon}_{\theta\theta}^2 + 2\dot{\varepsilon}_{\phi\theta}^2 \right)
        \end{aligned}
        $$
    </div>

    <h3>2.3 数值方法与边界条件</h3>
    <p>采用有限差分法在近全球域（80°S-80°N）进行离散：</p>
    <ul>
        <li>空间分辨率：二维176×176网格，一维89网格</li>
        <li>A网格布局（变量同位布置）</li>
        <li>动量方程通过三对角矩阵迭代求解（MacAyeal, 1997）</li>
        <li>厚度方程显式时间步进</li>
    </ul>
    <p>边界条件设置：</p>
    <div>
        $$
        \begin{cases}
        \text{南北边界无穿透} & v=0 \\
        \text{大陆边界无滑移} & u=v=0 \\
        \text{厚度方程零梯度} & \partial_n h = 0
        \end{cases}
        $$
    </div>

    <h3>2.4 模型实验设计</h3>
    <p>表1总结了模型实验配置：</p>
    <table border="1">
        <caption>表1. 模型实验参数表</caption>
        <tr>
            <th>实验</th><th>模型</th><th>表面温度</th><th>陆块</th><th>对应图示</th>
        </tr>
        <tr>
            <td>3</td><td>1-D</td><td>暖</td><td>-</td><td>图1</td>
        </tr>
        <tr>
            <td>5</td><td>2-D</td><td>暖</td><td>630Myr</td><td>图8</td>
        </tr>
        <!-- 其他行省略 -->
    </table>

    <h3>2.5 模型限制与扩展</h3>
    <p>:reference[]{#20} 当前模型未考虑的关键过程：</p>
    <div>
        $$
        \begin{cases}
        \text{冰光学特性反馈} & \text{(Pollard与Kasting, 2005)} \\
        \text{基底融化-厚度耦合} & \text{(需耦合海洋环流模型)} \\
        \text{尘埃传输效应} & \text{(Abbot与Pierrehumbert, 2010)}
        \end{cases}
        $$
    </div>
    <p>模型代码（Matlab）获取地址：<a href="http://www.seas.harvard.edu/climate/eli/Downloads">代码库链接</a></p>

    <h3>附录B：球坐标张量散度修正</h3>
    <p>二阶张量在曲线坐标系中的散度包含几何修正项，以经向动量方程为例：</p>
    <div>
        $$
        (\nabla \cdot \tau)_\theta = \frac{1}{r \sin\theta} \partial_\phi \tau_{\phi\theta} + \frac{1}{r} \partial_\theta \tau_{\theta\theta} + \frac{\cot\theta}{r} (\tau_{\phi\phi} - \tau_{\theta\theta})
        $$
    </div>
    <p>其中末项为球面曲率引起的附加应力耦合项。</p>
    <h2>3. 数值模拟结果</h2>
    
    <h3>3.1 一维轴对称模型</h3>
    <p>:reference[]{#22} 表1所列实验的稳态结果显示（运行至少10万年）：</p>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/a602b446-a2ff-4082-afd1-dc306df29205/jgrc12409-fig-0001.png" alt="图1 一维模型稳态结果">
        <p class="caption">图1. 一维模型稳态结果（方程(9)-(13)）<br>
        (a,c,e) "暖"工况（实验3），(b,d,f) "冷"工况（实验4）<br>
        冰厚与经向速度分布（a,b）、表面温度廓线（c,d）、连续性方程项平衡（e,f）</p>
    </div>
    <p>关键结论：</p>
    <ul>
        <li>赤道-极地冰厚差异：冷工况约100米，暖工况仅40米</li>
        <li>温度升高导致冰体软化，进一步削弱厚度梯度</li>
        <li>与Pollard与Kasting（2005）含气泡冰结果一致（虚线）</li>
    </ul>

    <h3>3.2 二维大陆配置模型</h3>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/b7e8359d-c667-44f0-92c8-8fe8f5c3d2bd/jgrc12409-fig-0002.png" alt="图2 二维模型结果">
        <p class="caption">图2. 新元古代（630Myr）陆块配置下的二维模拟结果<br>
        (a,b) 冰厚（色阶，米）与流速场（箭头，米/年，1/4采样）<br>
        (c,d) 方程(14)定义的有效黏度对数分布</p>
    </div>
    <p>主要特征：</p>
    <table class="observations">
        <tr>
            <th>区域</th>
            <th>现象</th>
            <th>物理机制</th>
        </tr>
        <tr>
            <td>主大陆东/西侧</td>
            <td>冰流加速通道</td>
            <td>狭窄海峡限制冰通量，需平衡局地消融</td>
        </tr>
        <tr>
            <td>主大陆中部边缘海</td>
            <td>显著厚度梯度</td>
            <td>冰流通过海峡需补偿蒸发/融化损失</td>
        </tr>
        <tr>
            <td>主大陆南侧</td>
            <td>人工边界效应</td>
            <td>80°N边界条件引入的数值伪影</td>
        </tr>
    </table>

    <h3>3.3 温度平流效应评估</h3>
    <div class="equation">
        <span>佩克莱数定义：</span>
        $$ \mathcal{P} = \frac{v(r \sin\theta)^{-1} \partial(\sin\theta T)/\partial\theta}{\kappa_i (T_{\text{surf}} - T_{\text{freeze}})/h^2} $$
    </div>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/831e5fc6-f5ac-4363-9423-6f1e701faa1c/jgrc12409-fig-0003.png" alt="图3 佩克莱数分布">
        <p class="caption">图3. 温度平流与扩散效应比值（方程15）<br>
        高值区（>1）出现在狭窄海峡等高速流动区域</p>
    </div>

    <h3>3.4 网格敏感性分析</h3>
    <p>:reference[]{#27} 分辨率对比（176×176 vs 89×89网格）：</p>
    <ul>
        <li>受限海域冰厚差异约50米，反映数值收敛性未完全达成</li>
        <li>海峡分辨率不足导致通量计算偏差，与海洋模型中直布罗陀海峡等经典问题类似</li>
        <li>未来改进方向：局部网格加密或参数化海峡流动</li>
    </ul>

    <h3>表格数据重构</h3>
    <table class="model-experiments">
        <caption>表1. 模型实验参数表（更新）</caption>
        <thead>
            <tr>
                <th>实验编号</th>
                <th>模型维度</th>
                <th>温度廓线</th>
                <th>陆块年代</th>
                <th>对应图示</th>
                <th>网格分辨率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9</td>
                <td>2-D</td>
                <td>暖</td>
                <td>630Myr</td>
                <td>图2a,c</td>
                <td>176×176</td>
            </tr>
            <tr>
                <td>10</td>
                <td>2-D</td>
                <td>冷</td>
                <td>630Myr</td>
                <td>图2b,d</td>
                <td>176×176</td>
            </tr>
            <!-- 其他行省略 -->
        </tbody>
    </table>
<!-- 接续前文 -->
    <h2>4. 冰厚变化的尺度估计</h2>
    
    <h3>4.1 受限海域冰厚梯度</h3>
    <div class="scenario">
        <div class="geom-params">
            <p>考虑面积$A$的受限海域，通过长$L$、宽$W$的通道与开放海洋连接（$L \gg W$）：</p>
            <ul>
                <li>海域内冰厚$h_s$（均匀分布）</li>
                <li>外海冰厚$h_o$</li>
                <li>通道流速$V$，海域净消融率$b$</li>
            </ul>
        </div>

        <div class="equation-group">
            <div class="equation">
                <span>质量守恒方程：</span>
                $$ V h_o W \sim A b \tag{16} $$
            </div>
            <div class="equation">
                <span>动量方程尺度分析：</span>
                $$ \frac{B V}{2(W/2)^2} \sim \rho_I g (1 - m) h_o \frac{h_o - h_s}{L} \tag{17} $$
            </div>
        </div>

        <div class="derivation">
            <p>其中有效黏度$B$的尺度为：</p>
            $$ B \sim h_o \left\langle A(T)^{-1/n} \right\rangle \left( \frac{V}{W/2} \right)^{1/(n-1)} \tag{18} $$
            <p>联立方程(16)-(18)得厚度差估计式：</p>
            $$ h_o - h_s \sim \frac{2L \left\langle A(T)^{-1/n} \right\rangle}{W \rho_I g (1 - \rho_I/\rho_w)} \left( \frac{A b}{h_o W^2} \right)^{1/n} \tag{19} $$
        </div>

        <div class="parameter-table">
            <table>
                <caption>表2. 典型参数取值（暖工况）</caption>
                <tr><th>参数</th><th>取值</th><th>物理意义</th></tr>
                <tr><td>$A$</td><td>$(4000\ \text{km})^2$</td><td>受限海域面积</td></tr>
                <tr><td>$b$</td><td>$6 \times 10^{-3}\ \text{m/yr}$</td><td>净消融率</td></tr>
                <tr><td>$L$</td><td>2500 km</td><td>通道长度</td></tr>
                <tr><td>$W$</td><td>1000 km</td><td>通道宽度</td></tr>
                <tr><td>$h_o$</td><td>1000 m</td><td>外海冰厚</td></tr>
            </table>
            <p>代入得$h_o - h_s \approx 108\ \text{m}$，与图2a数值结果量级一致</p>
        </div>

        <div class="key-factors">
            <h4>关键影响因素：</h4>
            <ul>
                <li>通道几何：$L \uparrow$或$W \downarrow$ ⇒ 厚度差$\uparrow$</li>
                <li>热力学：温度$T \downarrow$（$A(T) \downarrow$）⇒ 冰体刚度$\uparrow$ ⇒ 厚度差$\uparrow$</li>
                <li>质量平衡：海域面积$A \uparrow$或消融率$b \uparrow$ ⇒ 厚度差$\uparrow$</li>
            </ul>
        </div>
    </h3>

    <h3>4.2 全球无大陆情形</h3>
    <div class="global-scaling">
        <div class="equation-system">
            <p>一维动量方程与质量守恒方程尺度分析：</p>
            $$ \begin{aligned}
            \frac{2}{r} h \left\langle A(T)^{-1/3} \right\rangle \frac{v}{r} &\sim \rho_I g (1 - m) h \frac{\Delta h}{r} \\
            \frac{v h}{r} &\sim \Delta S
            \end{aligned} $$
        </div>

        <div class="result">
            <p>联立得赤道-极地冰厚差估计：</p>
            $$ \Delta h \sim \frac{2 \left\langle A(T)^{-1/3} \right\rangle (\Delta S / h)^{1/3}}{\rho_I g (1 - \rho_I/\rho_w)} \tag{20} $$
            <p>代入$\Delta S = 12\ \text{m/yr}$得$\Delta h \approx 34\ \text{m}$，与图1暖工况数值解吻合</p>
        </div>

        <div class="comparison">
            <h4>与受限海域对比：</h4>
            <table>
                <tr><th>场景</th><th>厚度差量级</th><th>主导机制</th></tr>
                <tr><td>受限海域</td><td>$\sim 100\ \text{m}$</td><td>几何约束下的质量平衡</td></tr>
                <tr><td>全球无大陆</td><td>$\sim 30\ \text{m}$</td><td>纬度相关消融率驱动</td></tr>
            </table>
        </div>
    </div>
</body>
</html>