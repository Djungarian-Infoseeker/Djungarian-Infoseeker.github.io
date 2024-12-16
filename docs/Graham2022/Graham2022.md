<html>
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
</head>
<body>
    <h1>CO<sub>2</sub> Ocean Bistability on Terrestrial Exoplanets</h1>
    <p><strong>R. J. Graham, Tim Lichtenberg, Raymond T. Pierrehumbert</strong></p>
    <p>首次发表日期: 2022年10月5日 <a href="https://doi.org/10.1029/2022JE007456">https://doi.org/10.1029/2022JE007456</a></p>
    <p>引用次数: 1</p>

    <h2>Abstract 摘要</h2>
    <p>
        岩石行星的大气和内部之间的二氧化碳循环可以稳定全球气候，并使行星表面温度在地质时间尺度内保持在冰点以上。然而，全球碳预算的变化和行星子系统之间的不稳定反馈循环可能会使岩石系外行星的气候趋向于太阳系中未知的状态。本研究通过晴空大气辐射传输和表面风化模拟，探讨了位于恒星宜居带外缘的岩石行星上气候平衡状态的稳定性。
    </p>
    <p>
        我们的模拟表明，围绕G型和F型恒星（但不是M型恒星）运行的行星可能会在地球类似气候状态（具有高效碳封存能力）与一种替代稳定气候平衡之间表现出双稳态。这种替代状态会导致二氧化碳在表面冷凝，形成笼形水合物或液态CO<sub>2</sub>覆盖层。
    </p>
    <p>
        在增加的恒星辐射和低效风化的情况下，这种状态会在冷凉的表面CO<sub>2</sub>冷凝和炽热的非冷凝气候之间振荡。CO<sub>2</sub>双稳态气候可能在行星历史早期出现，并保持稳定数十亿年。二氧化碳冷凝气候在 \(p_{CO_2}\) 和辐射量之间的趋势与通过风化稳定的行星种群相反，表明可能通过观测区分这些不同的气候类别。
    </p>

    <h2>Key Points 关键点</h2>
    <ul>
        <li>在恒星宜居带内较低的恒星辐射条件下，拥有H<sub>2</sub>O海洋的岩石行星可能也会发展出液态CO<sub>2</sub>海洋。</li>
        <li>CO<sub>2</sub>海洋气候状态在只有水冷凝于行星表面的传统地球类似气候与其他状态之间表现出双稳态。</li>
        <li>即使存在硅酸盐风化提供的负反馈，CO<sub>2</sub>海洋仍可能形成。</li>
    </ul>

    <h2>Plain Language Summary 通俗语言摘要</h2>
    <p>
        在地球上，水是唯一一种能够以气相和凝结相大量存在的分子，但并非所有行星都如此。我们模拟了接收的恒星光照少于地球的岩石系外行星。
    </p>
    <p>
        我们发现，CO<sub>2</sub>可能累积到足够高的水平，以至于它在行星表面冷凝，从而形成液态CO<sub>2</sub>的海洋和/或CO<sub>2</sub>笼形水合物层。取决于CO<sub>2</sub>的喷发速率、行星表面存在的硅酸盐岩石类型以及行星从其母恒星接收到的辐射水平，这些海洋可以在地质时间尺度内保持稳定，或者行星可能在地球类似的非CO<sub>2</sub>冷凝状态与一种奇异的CO<sub>2</sub>冷凝状态之间来回振荡。
    </p>
    <p>
        拥有液态（或固态）CO<sub>2</sub>表面的行星可能会经历与地球完全不同的演化，对其生命存在的潜力有重要意义。
    </p>
     <h2>1. Introduction 引言</h2>
    <p>
        地球表面主要由与岩石圈直接接触的液态水海洋组成。这种状态似乎对地球长期的气候稳定性和宜居性至关重要，因为碳酸盐-硅酸盐循环通过在大陆和海底进行的一系列水-岩化学反应来调节和稳定地球大气中的CO<sub>2</sub>储量 (Berner et al., 1983; Coogan & Gillis, 2013; Penman et al., 2020; Walker et al., 1981)。
    </p>
    <p>
        当CO<sub>2</sub>是净温室气体时，碳酸盐-硅酸盐循环充当了“温控器”；然而，当CO<sub>2</sub>积累到足够高的水平时，它会增加行星的瑞利散射效应并表现为冷却剂，从而将碳酸盐-硅酸盐循环转变为不稳定的正反馈。
    </p>
    <p>
        这表明其他类地行星如果具有足够大的碳储量，可能会支持具有足够高的 \(p_{CO_2}\) 气候配置，例如在高恒星辐照下形成炙热、超临界的类似金星的大气，或在低恒星辐照下形成一种异类、亚临界的大气状态，其表面液态CO<sub>2</sub>凝结与液态水海洋共存。
    </p>
    <p>
        后一种类型的行星可能很难通过远程方式与缺乏表面CO<sub>2</sub>凝结的传统“地球类”行星区分开，但即使表面气候温和，这些世界的地球化学特性和潜在宜居性将与地球截然不同。
    </p>
    <p>
        以往对岩石（系外）行星表面CO<sub>2</sub>凝结的研究主要集中在冷凉的冰川气候中，在这种情况下，CO<sub>2</sub>仅以固态形式凝结 (Bonati & Ramirez, 2021; Kadoya & Tajika, 2019; Turbet et al., 2017)；或高压冰层的水世界 (Marounina & Rogers, 2020; Ramirez & Levi, 2018)；以及在火星远古时期CO<sub>2</sub>凝结的可能性 (Forget et al., 2013; Kasting, 1991; Soto et al., 2015)。
    </p>
    <p>
        在本研究中，我们重点关注具有温和气候的岩石系外行星表面CO<sub>2</sub>凝结，并研究不同极端风化状态下的情形。
    </p>
        <h2>2. Methods 方法</h2>
    <p>
        在本研究中，我们结合了全球平均、晴空气候计算和硅酸盐风化计算，以研究辐射反馈与地球化学反馈在高 \\(p_{CO_2}\\) 、有海洋的行星（位于经典宜居带的外缘）上的相互作用。以下是我们所采用的程序和用于辐射与风化计算的模型简要概述。
    </p>
    <h3>2.1. Radiative Transfer 辐射传输</h3>
    <p>
        我们使用 <em>socrates</em> 代码（Edwards & Slingo, 1996）进行辐射传输计算，解决包含散射的平行平面、双流近似辐射传输方程（详见 Lichtenberg et al., 2021，需注意该论文中未包含散射的实现）。
    </p>
    <p>
        不透明系数从 HITRAN 数据库中提取，利用逐线和碰撞诱导吸收系数来处理 H<sub>2</sub>O（Gordon et al., 2017）、CO<sub>2</sub>（Gordon et al., 2017; Gruszka & Borysow, 1997）、N<sub>2</sub>（Gordon et al., 2017; Karman et al., 2015）以及 H<sub>2</sub>O 连续谱（Mlawer et al., 2012）。我们注意到，高温高压条件下CO<sub>2</sub>连续谱的不确定性可能引入显著的误差来源（例如，Halevy et al., 2009; Wordsworth, Forget, & Eymet, 2010）。
    </p>
    <p>
        CO<sub>2</sub> 和 N<sub>2</sub> 的瑞利散射截面按 Vardavas 和 Carver (1984) 的方法计算：
    </p>
    <p>
        \\[
        \\sigma_{R,i} = 0.2756 \\frac{\\mu_i \\left(6 + 3\\Delta \\right)}{\\lambda^4 \\left(6 - 7\\Delta \\right)} \\left[ A \\left( 1 + \\frac{B}{\\lambda^2} \\right) \\right]^2
        \\]
    </p>
    <p>
        其中，下标 \\(i\\) 表示存在的物质种类，\\(\\sigma_{R,i}\\) 是瑞利散射截面（单位：\\(m^2 \\ kg^{-1}\\)），\\(\\mu_i\\) 是物质种类 \\(i\\) 的摩尔质量（单位：\\(kg \\ mol^{-1}\\)），\\(\\lambda\\) 是波长（单位：\\(\\mu m\\)），系数 \\(A\\) 和 \\(B\\) 取自 Cox (2015)，\\(\\Delta\\) 是去极化因子，其数值如表 1 所示。
    </p>
    <p>
        对于 H<sub>2</sub>O，据我们所知，相关波长范围内的 \\(A\\) 和 \\(B\\) 值尚未发布。因此：
    </p>
    <p>
        \\[
        \\sigma_{R,H2O} = \\sigma_{R,0} \\frac{\\lambda_0^4}{\\lambda^4}
        \\]
    </p>
    <p>
        其中 \\(\\sigma_{R,0} = 9.32 \\times 10^{-7} \\ m^2 \\ kg^{-1}\\)（Pierrehumbert, 2010），\\(\\lambda_0 = 1 \\ \\mu m\\)。
    </p>
    <p>
        我们特别指出，一些早期文献（Kopparapu et al., 2013; Pluriel et al., 2019）错误地使用了从液态 H<sub>2</sub>O 散射性质（Marshall & Smith, 1990）中推导出的去极化比来计算气态 H<sub>2</sub>O 的瑞利散射系数。
    </p>
    <p>
        总瑞利散射截面通过对各组分的散射截面按体积混合比加权求和计算：
    </p>
    <p>
        \\[
        \\sigma_{R,tot} = \\sum_{i} x_i \\sigma_{R,i}
        \\]
    </p>
    <p>
        其中 \\(x_i\\) 是某种物质的体积混合比（\\(\\sum x_i = 1\\)）。由于 <em>socrates</em> 不允许垂直变化的瑞利散射系数，我们取表面混合比来计算总散射截面。
    </p>
    <p>
        我们的主要恒星光谱基于太阳的光谱辐照度测量值（Kurucz, 1995），代表来自 G2V 型恒星的辐照。为了展示所识别气候行为如何依赖于恒星类型和年龄，我们还提供了一些使用 M3.5V 型星（AD Leonis，Segura et al., 2005）和 F2V 型星（Sigma Boötis，Segura et al., 2003）光谱的模拟结果。
    </p>
    <p>
        不同光谱导致了不同大气成分和气候下的行星反照率值。我们还测试了太阳光谱随时间的变化效果：在距今 4.5 亿年前和 3.8 亿年前（Claire et al., 2012），我们的模拟结果与现代情况基本一致。
    </p>
        <h3>表1 瑞利散射数据表</h3>
    <p><em>本研究中使用的瑞利散射数据</em></p>
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>分子</th>
            <th>A (单位：10<sup>−6</sup>)</th>
            <th>B (单位：10<sup>−3</sup>)</th>
            <th>Δ</th>
            <th>\( \sigma_0 \) (10<sup>−7</sup> m<sup>2</sup> kg<sup>−1</sup>)</th>
        </tr>
        <tr>
            <td>CO<sub>2</sub></td>
            <td>4.39</td>
            <td>6.4</td>
            <td>0.0805</td>
            <td>–</td>
        </tr>
        <tr>
            <td>N<sub>2</sub></td>
            <td>2.906</td>
            <td>7.7</td>
            <td>0.0305</td>
            <td>–</td>
        </tr>
        <tr>
            <td>H<sub>2</sub>O</td>
            <td>–</td>
            <td>–</td>
            <td>–</td>
            <td>9.32</td>
        </tr>
    </table>
    <p><em>注：</em> A 和 B 的数值来源于 Cox (2015)。H<sub>2</sub>O 的 \( \sigma_0 \) 数值取自 Pierrehumbert (2010)。Δ 的数值来源于 Vardavas 和 Carver (1984)。</p>

    <h3>表2 本研究中使用的模型参数</h3>
    <p><em>本研究中使用的模型参数、单位、定义及默认值</em></p>
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>参数</th>
            <th>单位</th>
            <th>定义</th>
            <th>默认值</th>
        </tr>
        <tr>
            <td>\( \gamma \)</td>
            <td>–</td>
            <td>陆地比例</td>
            <td>0.3</td>
        </tr>
        <tr>
            <td>\( a_g \)</td>
            <td>–</td>
            <td>地表反照率</td>
            <td>0.0</td>
        </tr>
        <tr>
            <td>\( R_{\text{planet}} \)</td>
            <td>米</td>
            <td>行星半径</td>
            <td>\( 6.37 \times 10^6 \)</td>
        </tr>
        <tr>
            <td>\( T_{\text{ref}} \)</td>
            <td>开尔文 (K)</td>
            <td>参考全球平均温度</td>
            <td>288</td>
        </tr>
        <tr>
            <td>\( p_{\text{CO2,ref}} \)</td>
            <td>巴</td>
            <td>参考 CO<sub>2</sub> 分压</td>
            <td>\( 280 \times 10^{-6} \)</td>
        </tr>
        <tr>
            <td>\( q_{\text{ref}} \)</td>
            <td>米/年</td>
            <td>现代全球平均径流</td>
            <td>0.20 (Oki et al., 2001)</td>
        </tr>
        <tr>
            <td>\( c \)</td>
            <td>1/K</td>
            <td>每开尔文温度变化引起的降水比例变化</td>
            <td>0.03</td>
        </tr>
        <tr>
            <td>\( V_{\text{ref}} \)</td>
            <td>摩尔/年</td>
            <td>现代全球 CO<sub>2</sub> 喷发</td>
            <td>\( 7.5 \times 10^{12} \) (Gerlach, 2011; Haqq-Misra et al., 2016)</td>
        </tr>
        <tr>
            <td>\( \nu \)</td>
            <td>摩尔/m<sup>2</sup>/年</td>
            <td>单位面积的现代 CO<sub>2</sub> 喷发速率</td>
            <td>0.0147</td>
        </tr>
        <tr>
            <td>\( \Lambda \)</td>
            <td>可变</td>
            <td>热力学系数 (C<sub>eq</sub>)</td>
            <td>\( 1.4 \times 10^{-3} \)</td>
        </tr>
        <tr>
            <td>\( n \)</td>
            <td>–</td>
            <td>热力学 \( p_{\text{CO2}} \) 依赖性</td>
            <td>0.316</td>
        </tr>
        <tr>
            <td>\( \alpha^* \)</td>
            <td>–</td>
            <td>\( L_4 \rho_{sf} AX_{\mu} \) (参见 2.2 节)</td>
            <td>\( 3.39 \times 10^5 \)</td>
        </tr>
        <tr>
            <td>\( k_{\text{eff,ref}}^* \)</td>
            <td>摩尔/m<sup>2</sup>/年</td>
            <td>参考反应速率常数</td>
            <td>\( 8.7 \times 10^{-6} \)</td>
        </tr>
        <tr>
            <td>\( \beta \)</td>
            <td>–</td>
            <td>动力风化 \( p_{\text{CO2}} \) 依赖性</td>
            <td>0.2 (Rimstidt et al., 2012)</td>
        </tr>
        <tr>
            <td>\( T_c \)</td>
            <td>开尔文</td>
            <td>动力风化温度依赖性</td>
            <td>11.1 (Berner, 1994)</td>
        </tr>
    </table>
    <p><em>注：</em> 该表列出了我们的计算中使用的参数、单位、定义以及默认值。单星号 (*) 表示默认参数值来自 Maher 和 Chamberlain (2014) 的补充表 S1。对于从其他来源获得的默认参数，相关引用见“默认值”列。</p>
        <h3>2.2. 快速模拟方法</h3>
    <p>
        为了快速模拟各种表面条件，我们采用了“反向气候建模”方法 (Kasting, 1991)。该方法包括选择一个 \\( p_{CO_2} \\) 和一个表面温度（通过克劳修斯-克拉佩龙关系进一步指定 \\( p_{H_2O} \\)），将这些值作为边界条件，将伪绝热线从地表积分到 150 K 等温平流层，并运行辐射传输代码以获得该特定大气温度/压力/成分组合下的 \\( OLR \\) 和反照率。
    </p>
    <p>
        利用这些值，我们可以计算维持全球平均能量平衡所需的入射辐射 \\( S \\)：  
        \\[
        S (1 - \\alpha(T, p_{CO_2})) / 4 = F_{\\text{out}}(T, p_{CO_2}),
        \\]
    </p>
    <p>
        其中，\\( S \\) 是大气顶的入射辐射，\\( S_{\\text{Earth}} = 1368 \\ W \\ m^{-2} \\) 是地球当前的入射辐射，\\( S_{\\text{eff}} \\) 是地球当前入射辐射的分数（例如，\\( S_{\\text{eff}} = 0.3 \\) 相当于当前地球入射辐射的30%），\\( F_{\\text{out}} \\) 是向外的长波辐射 (OLR)，\\( \\alpha \\) 是全球平均行星反照率。
    </p>
    <p>
        在所有计算中，我们假设恒星天顶角的余弦为入射辐射加权全球平均值 \\( \\frac{2}{3} \\) (Cronin, 2014)。我们还将地表反照率设置为0.0，类似于无云海面反照率在所选恒星天顶角下的2%-4% (Li et al., 2006)。
    </p>
    <p>
        低层海洋层积云可能会将近地表反照率提高到高于海面的水平，但在本研究评估的最低 \\( p_{CO_2} \\) 为 1 bar 时，CO<sub>2</sub> 水平远低于1 bar，就会抑制云顶辐射冷却，从而关闭维持云层的对流 (Schneider et al., 2019)。当然，其他过程仍可能导致低云或薄雾，影响这些行星的近地表反照率。
    </p>
    <p>
        我们对 \\( p_{CO_2} \\) 从 1 到 73 bar（步长为1 bar）和地表温度 \\( T_{\\text{surf}} \\) 从 250 到 365 K（步长为5 K）的网格进行了反向气候计算。下图展示了平衡 \\( S_{\\text{eff}} \\)（面板a）、OLR（面板b）和反照率（面板c），它们都是 \\( T_{\\text{surf}} \\) 和 \\( p_{CO_2} \\) 的函数。
    </p>
    <p>
        通过对网格点之间的温度和 \\( p_{CO_2} \\) 进行线性插值，我们可以快速进行气候计算，研究各种不同的情景。
    </p>
    <h4>图1：低入射辐照条件下类地行星气候的能量特性</h4>
    <p>
        作为表面温度 \\( T_{\\text{surf}} \\)（y轴）和CO<sub>2</sub>分压 \\( p_{CO_2} \\)（x轴）的函数。
        <ul>
            <li>黑线表示 CO<sub>2</sub> 饱和蒸气压曲线；CO<sub>2</sub> 超出该曲线的气候在其表面处于过饱和状态（灰色区域）。</li>
            <li>白色虚线表示区分 CO<sub>2</sub> 双稳态气候与可能在冷凝和非冷凝状态之间循环的气候的 \\( S_{\\text{eff}} \\) 等值线。</li>
            <li>黑色虚线标记了 CO<sub>2</sub> 笼形水合物可能稳定的温度。</li>
            <li>面板a：保持给定表面温度和 \\( p_{CO_2} \\) 的气候所需的大气顶恒星辐射（归一化为地球轨道处的入射辐射 \\( S/S_{\\text{Earth}} = S_{\\text{eff}} \\)）。</li>
            <li>面板b：全球平均向外长波辐射 (OLR)。</li>
            <li>面板c：全球平均行星反照率。</li>
        </ul>
    </p>
    <p>
        <a href="https://agupubs.onlinelibrary.wiley.com/cms/asset/4f2e6798-06f5-4d2a-8f21-7916a7209bd3/jgre22010-fig-0001-m.jpg">
            <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/4f2e6798-06f5-4d2a-8f21-7916a7209bd3/jgre22010-fig-0001-m.jpg" alt="pAHkdvn.jpg" border="0" />
        </a>
    </p>
</body>
</html>
