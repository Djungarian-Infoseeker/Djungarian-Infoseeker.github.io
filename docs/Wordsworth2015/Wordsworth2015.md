<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>潮汐锁定岩质行星上的大气热量再分配与坍缩</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <h1>潮汐锁定岩质行星上的大气热量再分配与坍缩</h1>
    <h2>作者：</h2>
    <p>
        Robin Wordsworth<br>
        School of Engineering and Applied Sciences, Harvard University<br>
        Cambridge, MA 02138, USA<br>
        接收日期：2014年12月11日；接受日期：2015年4月7日；出版日期：2015年6月17日
    </p>
    <footer>
        <p>原文来源：Wordsworth, R. (2015). Atmospheric Heat Redistribution and Collapse on Tidally Locked Rocky Planets. 
        <br>本文为翻译与总结，版权归原出版机构所有。</p>
    </footer>

    <h2>1 摘要</h2>
    <p>
        大气坍缩对于潮汐锁定的岩质系外行星可能具有根本的重要性，但目前尚未得到充分研究。本文报告了针对潮汐锁定类地大气在热传输与稳定性方面的一般性研究结果。首先，作者利用带有灰气辐射传输的理想化三维(3D)大气环流模型 (GCM) 对这一问题进行模拟。研究表明，在广泛的参数范围内，<strong>大气边界层</strong>（而非大尺度环流）是理解行星能量平衡的关键。通过对半球间能量输运的尺度分析，作者构建了行星昼夜温差与地表风速的理论表达式，并在无需额外调参的情况下成功复现了GCM模拟结果。
    </p>
    <p>
        接着，作者将GCM与相关-k (correlated-k) 辐射传输方法相结合，针对两种实际气体 (CO<sub>2</sub> 和 CO) 的热传输进行了研究。对于CO<sub>2</sub>，文中给出了坍缩压力随行星质量和恒星辐射通量变化的经验公式，并得出在地球所受恒星辐射通量条件下的大气坍缩临界压力约为此前灰气模型估计值的五倍（约0.14 bar）。这些结果为潮汐锁定岩质行星大气的稳定性提供了重要限制，对于未来观测数据的解释以及系外行星宜居性模型研究都具有显著意义。
    </p>

    <h2>关键词</h2>
    <p>天体生物学 – 流体动力学 – 行星及卫星：大气 – 行星及卫星：物理演化 – 行星及卫星：类地行星 – 辐射传输</p>
        <h2>1. 引言</h2>
    <p>
        M型（红矮星）恒星约占整个银河系恒星总数的75% (Reid et al. 2000)，并且由于其较低的恒星质量以及行星轨道参数与凌日概率、径向速度信号之间的已知标度关系 (Seager et al. 2010)，它们在寻找附近类地行星的研究中具有高度吸引力。过去十年里，径向速度和凌日观测的持续进行，已经在邻近恒星系统中发现了多颗低质量系外行星及候选行星 (Charbonneau et al. 2009; Mayor et al. 2009; Pepe et al. 2011; Tuomi et al. 2012)，而即将开展的专门任务如“TESS”和“Plato”则极有可能带来更多此类发现。此外，围绕M型恒星的低质量“超级地球”（super-Earth）和“迷你海王星”（mini-Neptune）在过去几年间也成为凌日光谱学研究的热点 (Bean et al. 2010; Croll et al. 2011; Demory et al. 2012; Kreidberg et al. 2013; Fraine et al. 2014)。
    </p>
    <p>
        围绕M型恒星近距离公转的高温行星，很可能会成为未来利用凌日光谱与相位曲线观测来研究岩质行星大气的首批目标 (Castan &amp; Menou 2011; Miguel et al. 2011; Selsis et al. 2011; Samuel et al. 2014)。鉴于这些行星具备理想的观测条件，也使得M型恒星系在搜寻宜居类地行星方面备受关注。然而，如果此类行星确有宜居潜质，它们也极可能表现出与地球截然不同的特性。首先，M型恒星在极紫外（XUV）辐射以及日冕物质抛射方面较G型（类太阳）恒星更为活跃且持续时间更长 (Khodachenko et al. 2007; Lammer et al. 2007; Linsky et al. 2013)。这意味着环绕M型恒星的行星大气可能在早期阶段经历更严重的流失，尤其是在它们尚缺乏磁场保护的阶段 (Lammer et al. 2007; Tian 2009; Cohen et al. 2014)。由于行星在形成和聚积过程中会迅速向大气中释放最具挥发性的气体（如H<sub>2</sub>、N<sub>2</sub>、Ar等），这些气体在早期极易散逸至太空。因此，可以预期围绕M型恒星的岩质行星在早期阶段会出现大气初始组分和总质量的广泛变化。
    </p>
    <p>
        由于M型恒星相对于太阳的光度较低，因此若一颗行星接收与地球相当或更高的恒星辐射通量，则其轨道一般比较紧密，很可能进入潮汐共振甚至完全潮汐锁定状态<sup>2</sup>。对于那些在大气早期流失阶段仍能保留一定大气的潮汐锁定岩质行星而言，大气在行星表面发生凝结并坍缩的过程 (Kasting et al. 1993) 有时是难以避免的。尽管这一过程具有根本性的重要意义，但目前对其理论研究仍相对不足。
    </p>
    <p>
        此前，有关大气坍缩的相关研究主要借助三维（3D）大气环流模型（GCM）从类地行星 (Joshi et al. 1997; Joshi 2003) 和较高质量超级地球 (Selsis et al. 2011; Wordsworth et al. 2011) 的角度进行探讨。这些研究表明，CO<sub>2</sub>大气的稳定性与以下因素密切相关：<strong>(a)</strong> 大气总质量，<strong>(b)</strong> 行星所接收的恒星辐射通量大小，以及 <strong>(c)</strong> 使用的辐射传输模型的具体形式。基于灰气辐射传输的GCM模拟表明，当恒星辐射通量与地球近似（F<sub>E</sub> ≈ 1366 W m<sup>−2</sup>）时，若行星大气中CO<sub>2</sub>的分压pCO<sub>2</sub>大于大约0.03 bar，大气便可保持稳定 (Joshi et al. 1997)。然而，Wordsworth et al. (2011) 采用了更为精细的相关-k（correlated-k）辐射传输方法，研究了一颗半径约为地球2.3倍、接收仅为地球约30%恒星辐射通量的行星后发现，即使pCO<sub>2</sub>高达10 bar，仍可能发生大气坍缩。由此可见，对于大气坍缩这一普遍性问题，尚缺乏对参数空间更全面的研究。
    </p>
    <p>
        Castan &amp; Menou (2011) 利用最初用于研究木卫一（Io）的平衡蒸汽大气模型 (Ingersoll et al. 1985)，模拟了极端高温超级地球上的蒸汽平衡大气，但并未深入探讨向不凝结大气的过渡过程。Heng &amp; Kopparla (2012) 则采用解析方法，构建了覆盖不同参数范围的稳定性图，但并未探究真实气体辐射传输或行星边界层（PBL）的影响。正如本研究将要展示的那样，这两种过程对于理解大气坍缩都至关重要。
    </p>

    <p style="font-size:0.9em;">
        <strong>注：</strong><br>
        1. 我们在此不尝试给出“类地行星”的确切定义，但通常至少指行星质量及接收恒星辐射通量与地球相当。<br>
        2. Leconte et al. (2015) 最新研究指出，大气潮汐效应可能在某些情况下导致类地行星出现类似金星的自转轨道不同步现象。不过，他们的分析主要适用于大气厚度大于1 bar、且恒星质量在0.5–0.7倍太阳质量（M☉）或更高的情形，这超出了本研究的讨论范围。
    </p>
       <p>
        近年来，对于潮汐锁定类地行星大气环流的研究也相当活跃（如 Joshi 2003；Merlis &amp; Schneider 2010；Heng &amp; Vogt 2011；Pierrehumbert 2011b；Edson et al. 2012；Leconte et al. 2013；Yang et al. 2013）。这些研究阐明了一系列动力学与气候过程，这些过程在潮汐锁定情形下可能具有重要影响（更多概述可参见 Showman et al. 2013）。不过，大多数研究仍主要关注表面气压约1 bar、成分接近地球大气的情况<sup>3</sup>。由于在挥发分递送以及大气侵蚀方面仍存在诸多不确定性，我们并无充分理由假设质量与地球相当的行星就一定拥有类似地球的大气（或海洋）。因此，探讨更广泛参数空间下的情形至关重要。
    </p>
    <p>
        大气热量再分配与大气坍缩过程的研究，对于未来对岩质行星开展的光谱观测而言尤为重要。这一重要性不仅体现在对凌日行星的观测中，对于非凌日系统（如果能够获取相位曲线信息）也同样适用 (Selsis et al. 2011)。然而，鉴于现代GCM（全球环流模型）的复杂性，若想从未来的观测中获取最大收益，就需要在提升模型精度的同时，对基础理论也进行相应完善。
    </p>
    <p>
        本文对环绕M型恒星的潮汐锁定行星大气稳定性进行了较全面的研究。首先，利用理想化的灰气辐射传输GCM模拟，探讨从昼侧到夜侧的热量再分配问题。结果表明，在一个具有重要物理意义的极限条件中——即缓慢自转且光学厚度较低的大气情况下——无需依赖GCM模拟产生的任何参数，即可通过解析方法对夜侧地表温度进行估算。随后，本文在多波段相关-k（correlated-k）模式下运行GCM，考察在不同恒星辐射通量、大气压强以及行星质量范围内的大气坍缩情况。研究重点放在纯CO<sub>2</sub>大气，但也讨论了CO为凝结气体的一个实例。之所以选择这两种气体，是因为它们是火山喷发或受小行星/彗星撞击后热化学反应的常见产物，而且与H<sub>2</sub>O或CH<sub>4</sub>不同，它们不易通过光解<sup>4</sup>被破坏，也不易散逸到太空。研究结果表明，大气边界层（PBL）的性质在很大范围内比大尺度环流细节更能影响昼夜温差。此外，凝结气体的辐射特性也是决定夜侧温度以及大气坍缩压强的关键因素。
    </p>
    <p>
        在第2节中，将详细介绍用于三维模拟的数值方法。第3节首先给出理想化灰气模拟结果，随后利用一个简单的理论模型，从第一性原理出发计算GCM所模拟的夜侧地表温度。最后，呈现多波段相关-k GCM的模拟结果，并构建简单的经验公式，用于描述CO<sub>2</sub>及CO在不同恒星辐射通量、总大气压强以及行星质量条件下发生大气坍缩的判定标准。第4节将讨论上述结果更广泛的意义，并对未来研究方向提出建议。
    </p>

    <!-- 表格开始 -->
    <h2>表1：主相关-k GCM模拟中使用的标准参数</h2>
    <table border="1" cellspacing="0" cellpadding="5">
        <thead>
            <tr>
                <th>参数</th>
                <th>取值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>恒星光度 L (L<sub>☉</sub>)</td>
                <td>0.024</td>
            </tr>
            <tr>
                <td>恒星光谱</td>
                <td>AD Leo</td>
            </tr>
            <tr>
                <td>轨道偏心率 e</td>
                <td>0.0</td>
            </tr>
            <tr>
                <td>自转轴倾角 φ</td>
                <td>0.0</td>
            </tr>
            <tr>
                <td>大气压强 p (bar)</td>
                <td>0.01 – 10.0</td>
            </tr>
            <tr>
                <td>恒星辐射通量 F (以 1366 W m<sup>−2</sup> 为基准)</td>
                <td>0.2 – 3.0</td>
            </tr>
            <tr>
                <td>行星质量 M (M<sub>⊕</sub>)</td>
                <td>1.0, 10.0</td>
            </tr>
            <tr>
                <td>行星半径 r (r<sub>⊕</sub>)</td>
                <td>1.0, 1.88</td>
            </tr>
            <tr>
                <td>表面重力加速度 g (m s<sup>−2</sup>)</td>
                <td>9.8, 27.8</td>
            </tr>
            <tr>
                <td>地表粗糙度高度 z<sub>0</sub> (m)</td>
                <td>1 × 10<sup>−2</sup></td>
            </tr>
            <tr>
                <td>地表热惯量  (tiu)</td>
                <td>250</td>
            </tr>
            <tr>
                <td>地表反照率 A</td>
                <td>0.2</td>
            </tr>
            <tr>
                <td>大气成分</td>
                <td>CO<sub>2</sub>, CO</td>
            </tr>
        </tbody>
    </table>
    <p>
        <em>注：</em>行星半径 r 与表面重力加速度 g 依据行星质量 M 利用 Sotin et al. (2007) 针对岩质行星的标度关系推得。
    </p>

    <!-- 附加脚注说明 -->
    <p style="font-size:0.9em;">
        <strong>注释：</strong><br/>
        <strong>3.</strong> 近期，Wang &amp; Read (2014) 以及 Kaspi &amp; Showman (2014) 利用GCM模拟了不同参数（包括地表气压）所引起的环流变化。不过，他们研究的行星在经向平均入射辐射分布上呈现轴对称，因而比本文讨论的潮汐锁定情形更不容易发生大气坍缩。<br/>
        <strong>4.</strong> CO<sub>2</sub> 在光解后会生成 CO 和 O，这可能导致形成混合CO/O<sub>2</sub>的大气。然而在火星和金星等行星大气中，由于存在催化循环，该过程并未大规模发生 (Yung et al. 1999)。纯O<sub>2</sub>或N<sub>2</sub>的大气在坍缩行为上与CO总体相似，只是对于这些气体而言，碰撞诱导吸收是其红外不透明度的主要来源 (Frommhold 2006)。
    </p>

    <h2>2. 方法（METHOD）</h2>
    <p>
        在三维（3D）GCM模拟中，作者使用了Laboratoire de Météorologie Dynamique（LMD）通用模型
        （Wordsworth et al. 2011, 2013；Forget et al. 2013；Charnay et al. 2013）。
        该模型的主要参数列于表1中。LMD模型基于有限差分法在球面上求解原始方程（primitive equations），
        并在辐射传输中采用相关-k（correlated-k）方法（Goody &amp; Yung 1989；Wordsworth et al. 2010a）。
    </p>
    <p>
        在所有模拟中，空间分辨率取为经度&times;纬度&times;高度 = 64 &times; 48 &times; 18，垂直方向采用
        经缩放的σ坐标系（与Wordsworth et al. 2013一致），顶层大气压强则根据地表压强的不同在2–200 Pa之间。
        这种缩放σ坐标方法在高空使用恒定的σ间隔，但在近地表提高垂直分辨率，从而提高模型稳定性，并更精细地刻画
        大气边界层（PBL）。
    </p>
    <p>
        用于相关-k模型的高分辨率谱线吸收数据由开源软件
        <em>kspectrum</em>和HITRAN谱线数据库（Rothman et al. 2013）提供。虽然也曾考虑过使用HITEMP谱线列表，
        但对比在本文所关注成分、温度及压强范围内的HITRAN与HITEMP吸收光谱后发现，即使在最高研究温度（约550 K）条件下，
        额外的不透明度对结果的影响也并不显著。CO<sub>2</sub>的碰撞诱导吸收（collision-induced absorption）采用
        GBB参数化方案（Gruszka &amp; Borysow 1998；Baranov et al. 2004；Wordsworth et al. 2010a），
        并在温度高于400 K时对相关数据进行了外插。随后，逐线（line-by-line）数据被转换为相关-k格式，
        栅格覆盖温度范围100–500 K、对数压强范围10<sup>−3</sup>–10<sup>5</sup> mbar（共14 &times; 9个温度-对数压强节点）。
        红外与可见光波段分别划分为38 &times; 36个子带，<em>g</em>-space积分使用了16个离散点。
    </p>
    <p>
        在所有模拟中，假设地表地形平坦，并假设仅含单组分理想气体。大气冷凝过程的处理方式与Wordsworth et al. (2010b)一致。
        对于CO<sub>2</sub>，其凝结温度<em>T<sub>cond,CO2</sub></em>（单位：K）与压强<em>p</em>（单位：Pa）之间的关系
        在<em>p &lt; 518000 Pa</em>（低于CO<sub>2</sub>三相点压强）时由下式给出：
    </p>
    <p style="text-align:center;">
        <em>T<sub>cond,CO2</sub></em> = 3167.8 – 23.23 &minus; ln[ 0.01 <em>p</em> ],
    </p>
    <p>
        而在<em>p &ge; 518000 Pa</em>时（即高于三相点压强），则由下式给出（Fanale et al. 1982；Wordsworth et al. 2010b）：
    </p>
    <p style="text-align:center;">
        <em>T<sub>cond,CO2</sub></em> = 684.2 &minus; 92.3 ln[ <em>p</em> ] + 4.32 (ln[ <em>p</em> ])<sup>2</sup>.
    </p>
    <p>
        对于CO，利用Clausius–Clayperon理想气体关系式并结合Lide (2000)中的参数来计算其饱和蒸汽压曲线。
        同时忽略地表水平热传输（例如海洋对热量的输运）。这两种简化都有助于减少问题复杂度，
        也使得我们在模拟中获得相对保守的<em>大气坍缩临界压强上限</em><sup>5</sup>。
    </p>
    <p>
        与Wordsworth et al. (2011)不同的是，这里忽略了云辐射强迫的影响。第4节将对云和气溶胶辐射强迫
        可能带来的影响进行讨论。地表反照率A取0.2，这是对岩质行星有代表性的一种数值。
        对于M型恒星参数（包括恒星光谱），我们使用了AD Leo（Gliese 388）相关数据（Segura et al. 2003；Wordsworth et al. 2010b）。
        AD Leo在XUV波段表现活跃且经常爆发耀斑（Shkolnik et al. 2009），但由于本文主要关注大气低层的辐射过程，
        这些高能特性对当前研究并无直接影响。瑞利散射（Rayleigh scattering）的处理方式与Wordsworth et al. (2010a)相同，
        不过在M型恒星发射谱向红端偏移的情况下，其影响相对较小。
    </p>
    <p>
        我们假设行星轨道为圆形，且自转轴倾角取零（Heller et al. 2011）。在所有模拟中，模型均运行至热平衡状态。
        假设行星处于完全潮汐锁定状态，这意味着可根据开普勒第三定律通过轨道距离来确定自转角速度
        <em>Ω</em>：
    </p>
    <p style="text-align:center;">
        \(\Omega^2 = \pi \left(\frac{M}{M_{\odot}}\right)^{\tfrac{3}{4}} \left(\frac{L}{L_{\odot}}\right)^{\tfrac{3}{4}} \left(\frac{F}{F_E}\right)^{-\tfrac{3}{4}} \times \frac{1}{\text{year}}.\)
    </p>
    <p>
        其中<em>M</em>、<em>L</em>、<em>F</em>分别表示恒星质量、恒星光度以及行星所接收的恒星辐射通量，
        <em>M<sub>⊙</sub></em>、<em>L<sub>⊙</sub></em>及<em>F<sub>E</sub></em>则分别表示太阳质量、太阳光度以及地球所接收的太阳辐射通量。
        考虑到<em>L = 0.024 L<sub>⊙</sub></em>且<em>M = 0.4 M<sub>⊙</sub></em>（Pettersen &amp; Coleman 1981；Reiners et al. 2009），
        上式可写为：
    </p>
    <p style="text-align:center;">
        \(\Omega \approx 9.2 \times 10^{-9} \, F^{\tfrac{3}{4}},\)
    </p>
    <p>
        因此，即便围绕典型M矮星运行，若行星接收的恒星辐射通量为2<em>F<sub>E</sub></em>（2732 W m<sup>−2</sup>），
        其自转速度也仅为地球的1/20。这也是为什么对于环绕M型恒星的类地行星而言，自转对大气环流的影响
        远小于地球本身的关键原因。
    </p>
    <p>
        关于大气边界层（PBL），本文采用Mellor–Yamada方案（Mellor &amp; Yamada 1982），并参考Galperin et al. (1988)中提出的修正。
        该方案已在火星大气研究中得到较好的验证（Haberle et al. 1993；Forget et al. 1999），
        其动力学特征与本文所考察的情形有一定相似性。简而言之，Mellor–Yamada/Galperin（MYG）方案通过对雷诺平均方程进行
        2.5级闭合来表示大气与地表之间的动量和热量湍流交换。湍流动能<em>q</em>以预报形式计算，
        假设其在大尺度流动的浮力驱动对流或切变引起的湍流生成，以及湍流耗散之间达到平衡。
        大气中的垂直交换系数及地表整体交换系数则由<em>q</em>、<em>∂Θ / ∂z</em>（势温梯度）、
        湍流混合长度<em>l</em>以及根据实验数据得到的无量纲经验常数计算（Mellor &amp; Yamada 1982）。
    </p>
    <p>
        湍流混合长度<em>l</em>遵循Blackadar (1962)的经验标度关系：
    </p>
    <p style="text-align:center;">
        <em>l = \(\frac{\kappa z}{1 + \frac{z}{l_0}}\)</em>,
    </p>
    <p>
        其中<em>\(\kappa\)</em> = 0.4为冯·卡门常数，<em>l<sub>0</sub></em>是边界层中最大可达的混合长度。
        在每个时间步和每个网格点上都会计算湍流交换系数，然后根据下式分别计算大气中水平动量<em>u</em>和势温<em>Θ</em>
        的垂直湍流扩散：
    </p>
    <p style="text-align:center;">
        \(\frac{\partial u}{\partial t}\bigg|_{\text{turb}} = \frac{\partial}{\partial z}\left( K_M \frac{\partial u}{\partial z} \right),\) <br/>
        \(\frac{\partial \Theta}{\partial t}\bigg|_{\text{turb}} = \frac{\partial}{\partial z}\left( K_H \frac{\partial \Theta}{\partial z} \right),\)
    </p>
    <p>
        其中<em>t</em>为时间，<em>z</em>为高度，<em>u = (u, v)</em>是水平速度矢量，<em>K<sub>M</sub></em>和<em>K<sub>H</sub></em>
        分别是动量和热量的湍流扩散系数。动量和热量的垂直交换系数可利用Monin–Obukhov相似理论（Garratt 1994），
        通过<em>q</em>、<em>l</em>以及<em>Ri</em>（梯度理查森数）来确定。理查森数定义为平均流中势能与动能之比：
    </p>
    <p style="text-align:center;">
        \(\mathrm{Ri} = \frac{g}{\Theta} \frac{\partial \Theta}{\partial z} \bigg/ \left( \frac{\partial u}{\partial z}^2 + \frac{\partial v}{\partial z}^2 \right),\)
    </p>
    <p>
        在离散形式下，可定义整体（bulk）理查森数：
    </p>
    <p style="text-align:center;">
        \(\mathrm{Ri}_B = \frac{g\,\Delta \Theta}{\Theta\,\Delta z \, \Delta u^2},\)
    </p>
    <p>
        其中<em>Δz</em>为从地表到考察大气区域的高度差，<em>ΔΘ</em>为该高度差内地表与该大气层之间的势温差。
        实际中，当理查森数较低（对流不稳定）时，湍流扩散在大范围的大气层内都很强；
        当理查森数较高（稳定分层）时，除边界层极薄的一部分外，其余区域湍流扩散都很弱。
    </p>
    <p>
        在地表处，整体交换通量<em>f</em>按照下式计算：
    </p>
    <p style="text-align:center;">
        \(\mathcal{F} = \rho_a C_D \lvert u \rvert (f_s - f_a),\)
    </p>
    <p>
        其中<em>\(\mathcal{F}\)</em>为物理量<em>f</em>（如热量、动量等）的通量，<em>C<sub>D</sub></em>为整体阻力系数（bulk drag coefficient），
        <em>\(\rho_a\)</em>和<em>\(\lvert u \rvert\)</em>分别是第一层大气的密度和风速，<em>f<sub>a</sub></em>和<em>f<sub>s</sub></em>
        分别为第一层大气和地表对应的<em>f</em>数值。对于<em>f = \(\lvert u \rvert\)</em>，<em>f<sub>s</sub> = 0</em>。
    </p>
    <p>
        最后，整体阻力系数<em>C<sub>D</sub></em>由下式给出：
    </p>
    <p style="text-align:center;">
        \(C_D = \kappa^2 \Bigg/\left[\ln\Big(\frac{z}{z_0}\Big)\right]^2,\)
    </p>
    <p>
        其中<em>z<sub>0</sub></em>为地表粗糙度高度。对于系外行星而言，<em>z<sub>0</sub></em>本质上是个自由参数，
        但若参考太阳系内对类地行星的雷达观测（例如 Downs et al. 1975；Head et al. 1985；Rosenburg et al. 2011），
        则可对其进行一定程度的限定。本文取一个典型的岩质地表数值（见表1）。需要注意的是，
        <em>C<sub>D</sub></em>对<em>z<sub>0</sub></em>的依赖关系并不敏感，因此即使粗糙度高度相差一个数量级，
        对边界层过程的影响也相对有限（Wordsworth et al. 2011）。
    </p>

    <!-- 注释5 -->
    <p style="font-size:0.9em;">
        <strong>注5：</strong><br/>
        忽略非凝结的背景气体之所以会使得到的临界坍缩压强成为保守上限，主要是因为背景气体会压力加宽活性气体的吸收谱线，
        从而提升大气对红外辐射的不透明度并增加行星的增温效应。然而，由于M型恒星的发射谱向红端偏移，瑞利散射的影响并不显著；
        因此，即便考虑背景气体，其对行星反照率的直接影响也很小（例如 von Paris et al. 2010；Wordsworth et al. 2010b）。
    </p>

    <h3>图1</h3>
    <p>
        图1显示了在0.1 bar灰气模拟中，对流层中部（<em>p ≈ 0.5 p<sub>s</sub></em>）以及地表处的时间平均温度（彩色阴影）
        和风场（黑色箭头）。为了清晰起见，部分风矢量被省略。
    </p>
    <p>
        <img src="https://content.cld.iop.org/journals/0004-637X/806/2/180/revision1/apj512977f1_lr.jpg" alt="Figure 1: Temperature and wind fields">
        <br/>
        <em>图1. 在0.1 bar灰气模拟中，<strong>p ≈ 0.5 p<sub>s</sub></strong>（上）和地表（下）的时间平均温度场（彩色）与风场（箭头）。</em>
    </p>
</body>
</html>
