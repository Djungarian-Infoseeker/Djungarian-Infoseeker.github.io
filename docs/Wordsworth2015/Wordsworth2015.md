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
</body>
</html>
