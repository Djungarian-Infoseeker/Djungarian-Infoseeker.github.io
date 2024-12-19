<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<div>
    <h1>可居住带围绕主序星：新估算</h1>
    <p>作者：Ravi Kumar Kopparapu, Ramses Ramirez, James F. Kasting, Vincent Eymet, Tyler D. Robinson, Suvrath Mahadevan, Ryan C. Terrien, Shawn Domagal-Goldman, Victoria Meadows, and Rohit Deshpande</p>
    <p>发表于：2013年2月26日 • © 2013. 美国天文学会。版权所有。</p>
    <p><strong>期刊：</strong>《The Astrophysical Journal》，第765卷，第2期</p>
    <p><strong>引用：</strong>Ravi Kumar Kopparapu et al 2013 ApJ 765 131</p>
    <p><strong>DOI：</strong>10.1088/0004-637X/765/2/131</p>
    <a href="https://iopscience.iop.org/article/10.1088/0004-637X/765/2/131">下载PDF</a>
</div>

<h2>摘要</h2>
<p>
    识别位于其他恒星可居住带（HZ）中的类地行星是正在进行的径向速度（RV）和凌星系外行星观测调查以及拟议未来空间任务的主要目标之一。目前大多数关于HZ边界的估算基于Kasting等人提出的一维（1D）无云气候模型计算。然而，这一模型使用的带模型基于较旧的HITRAN和HITEMP逐线数据库。HZ内缘在该模型中通过水的丧失决定，而外缘则由CO<sub>2</sub>大气提供的最大温室效应决定。根据该模型对太阳系的保守估算，HZ宽度为0.95–1.67 AU。
</p>
<p>
    本文使用更新的一维辐射对流无云气候模型，获得了围绕F型、G型、K型和M型恒星的新HZ宽度估算。使用源于HITRAN 2008和HITEMP 2010逐线数据库的新H<sub>2</sub>O和CO<sub>2</sub>吸收系数是对气候模型的重要改进。根据新模型，太阳系中的水丧失（内缘）和最大温室效应（外缘）限制分别位于0.99 AU和1.70 AU，表明目前的地球位于内缘附近。
</p>
<p>
    针对有效温度介于2600至7200 K的恒星进行了额外计算，结果以参数化形式展示，便于实际应用。新模型表明，在HZ的内缘附近，对于有效温度≲5000 K的恒星，失控温室效应和水丧失限制之间没有明显区分，这对围绕K型和M型恒星的行星搜索具有重要意义。
</p>
<p>
    为评估系外类地行星的潜在宜居性，我们建议使用入射在行星上的恒星通量，而非平衡温度。这消除了对行星（Bond）反照率的依赖，而后者会根据主星的光谱类型变化。我们建议对当前RV调查和Kepler任务使用HZ的保守估算（水丧失和最大温室效应限制），以获得η⊕的下限，从而确保未来旗舰任务如TPF-C和Darwin的规模不会过小。
</p>
<p>
    我们的模型未包括云的辐射效应；因此，实际的HZ边界可能比上述估算更进一步延伸。
</p>
<div>
    <h1>1. 引言</h1>
    <p>
        截至2012年11月，已经发现了超过800个系外行星系统，另有2000多个候选系统（来自Kepler任务）正在等待确认（Batalha et al. 2012）。当前径向速度（RV）和凌星观测调查的主要目标之一是识别位于所谓可居住带（HZ）中的类地质量行星（0.3–10 M⊕）。HZ传统上被定义为围绕恒星的区域，在该区域内，拥有CO<sub>2</sub>–H<sub>2</sub>O–N<sub>2</sub>大气的类地行星可以在其表面维持液态水的存在
        <sup>(11)</sup>（Huang 1959; Hart 1978; Kasting et al. 1993; Underwood et al. 2003; Selsis et al. 2007b; Kaltenegger & Sasselov 2011）。已经探测到一些潜在的HZ行星候选体
        （Udry et al. 2007; Pepe et al. 2011a; Borucki et al. 2011, 2012; Bonfils et al. 2011; Vogt et al. 2012; Tuomi et al. 2012），并预计这一数量将随着时间推移而大幅增加（Batalha et al. 2012）。
    </p>
    <p>
        在不久的将来，我们可能能够研究围绕附近M型恒星运行的宜居行星。这些行星与其母星距离较近，从而具有更短的轨道周期并增加凌星的概率。NASA的詹姆斯·韦伯太空望远镜（JWST）计划于2018年发射，被认为具备一定能力获取围绕晚期M矮星运行的类地行星的凌星光谱
        （Clampin et al. 2007; Kaltengger & Traub 2009; Deming et al. 2009）。此外，一些调查项目已经启动
        （Nutzman & Charbonneau 2008; MEARTH），或正在准备开展（Mahadevan et al. 2012; HPF），试图发现低质量恒星HZ中的岩质行星。
    </p>
    <p>
        许多最近发现中的HZ界限是通过Kasting等人（1993）的单维（1D）辐射–对流无云气候模型计算得出的。对于我们的太阳，这些作者估算HZ的边界为内缘0.95 AU，外缘1.67 AU。这些值分别表示“水丧失”和“最大温室效应”的界限。其他更不保守的内缘界限包括“失控温室效应”和“最近金星”界限。后者是基于推断金星至少在过去10亿年内其表面上没有液态水的经验估算
        （Solomon & Head 1991）。对于外缘，相应的“早期火星”经验估算则基于火星在38亿年前其表面存在液态水的推断
        （Kasting et al. 1993 的“首次CO<sub>2</sub>凝结”界限现在已被忽略，因为已证明CO<sub>2</sub>云通常会使行星气候变暖
        （Forget & Pierrehumbert 1997））。
    </p>
    <p>
        一些研究在1D模型中研究了云对类地行星辐射光谱的影响（Kitzmann et al. 2011a, 2011b），还有一些研究了特定系统（特别是Gl 581）的宜居性，使用了1D
        （Wordsworth et al. 2010; Von Paris et al. 2011; Kaltenegger et al. 2011）和3D模型
        （Wordsworth et al. 2011; Pierrehumbert 2011）。其他一些研究
        （Underwood et al. 2003; Selsis et al. 2007b）则参数化了这些结果，以估算不同光谱类型恒星的HZ边界与恒星参数之间的关系。
    </p>
    <p>
        尽管这些研究提供了HZ宽度的有用估算，但Kasting等人（1993）的模型由于以下几个原因已经过时。
    </p>
    <ol>
        <li>
            Kasting等人（1993）在热红外范围内使用了H<sub>2</sub>O和CO<sub>2</sub>吸收的“带模型”<sup>(12)</sup>。这些系数被认为在约700 K以下有效。
            后来，这些系数被Mischna等人（2000）通过相关-k技术替换
            （Mlawer et al. 1997; Kato et al. 1999）。一个逐线辐射传输模型（LBLRTM）
            （Clough & Iocono 1995）被用于生成不同温度和压力下H<sub>2</sub>O和CO<sub>2</sub>的详细光谱。
            然而，这些系数仅针对温度<350 K的情况，因此可能低估了温暖、潮湿温室气候中的热红外吸收。
        </li>
        <li>
            最近研究（Halevy et al. 2009; Wordsworth et al. 2010）指出，Kasting等人（1993）的模型可能显著高估了CO<sub>2</sub>碰撞诱导吸收（CIA）带的热红外辐射吸收，这可能影响HZ的外缘。
        </li>
        <li>
            Kasting等人（1993）的计算涵盖了有效温度从7200到3700 K的恒星，这大约对应于F0至M0光谱类型。
            然而，其模型未包括低于3700 K的M型恒星，而这些恒星是当前观测调查的重要候选体，因为它们的HZ更靠近恒星，轨道周期更短，凌星概率更高。
        </li>
    </ol>
    <p>
        本文旨在解决上述主要问题，并得出HZ边界的新改进估算。本文结构如下：第二部分描述了一维无云气候模型、相应的模型更新以及与其他研究的模型验证。第三部分展示了气候模型的结果，并讨论了地球的各种HZ界限。第四部分讨论围绕F型、G型、K型和M型恒星光谱类型的HZ边界，并提供了一种通用表达式用于计算HZ边界，并将这些边界与先前的研究进行比较。第五部分讨论了这些新结果对当前已知系外行星系统的意义，并在第六部分给出结论。
    </p>
</div>
<div>
    <h1>2. 模型描述</h1>
    <p>
        我们基于Kasting（1988）提出的关于可居住带内缘（IHZ）以及Kasting（1991）提出的关于外缘（OHZ）的计算，使用了一维辐射–对流无云气候模型。按照Kasting等人（1993）的研究，我们假设一颗地球质量的行星，其大气分别以H<sub>2</sub>O（内缘）或CO<sub>2</sub>（外缘）为主。关于不同行星质量的敏感性研究将在以下章节中描述。
    </p>
    <p>
        内缘与外缘的计算都依赖于所谓的逆向气候建模方法，即指定表面温度，并利用模型计算维持该温度所需的太阳辐射通量。为此，大气被分为101层，并假设特定的压力–温度剖面。对于内缘，从表面到等温层（200 K）的平流层使用湿伪绝热延伸（Kasting 1988附录A中的方法）。在计算过程中，表面温度从200 K变化到2200 K。对于外缘，表面温度固定为273 K，CO<sub>2</sub>的分压从1变化到37.8 bar（该温度下的饱和CO<sub>2</sub>分压）。在低层对流层中假设湿H<sub>2</sub>O绝热，而在遇到凝结时的上层对流层中假设湿CO<sub>2</sub>绝热，这一方法来源于Kasting（1991）的附录B。
    </p>
    <p>
        模型中未考虑H<sub>2</sub>O和CO<sub>2</sub>云，但前者的影响通过增加地表反照率来处理，这在之前Kasting研究组的气候模拟中已有应用（Kasting 1991; Haqq-Misra et al. 2008）。然而，有研究认为这种方法倾向于高估稠密CO<sub>2</sub>大气的温室效应（Goldblatt & Zahnle 2011）。相比之下，我们忽略CO<sub>2</sub>云可能导致低估这类大气的温室效应（Forget & Pierrehumbert 1997）。要真实地确定云的影响，需要一个三维气候模型，因为云大多形成于一维模型中不存在的上升气流中。一些一维气候建模研究包含了部分云覆盖（Selsis et al. 2007b）和/或参数化的微物理云模型（Colaprete & Toon 2003; Zsom et al. 2012），但由于无法在我们的模型中自洽地模拟这些因素，此处未予考虑。正如后文所讨论的那样，云对内缘和外缘边界的影响在定性上是可以理解的，利用三维气候模型定量测试这些预测应该是未来研究的一个富有成果的方向。
    </p>
    <p>
        辐射传输采用Kasting研究组气候模型近期版本中的方法，但吸收系数进行了更新（见下一节）。太阳辐射的净吸收使用δ双流近似方法计算（Toon et al. 1989），针对每层的101个层级，分别对CO<sub>2</sub>和H<sub>2</sub>O使用8项相关-k系数，在0.2到4.5 μm的38个太阳光谱间隔中参数化吸收。这些项在每个光谱间隔中彼此卷积，从而在每个间隔中产生64次独立的辐射传输计算。太阳辐射通量平均于6个天顶角
        （11fdg0, 25fdg3, 39fdg6, 54°, 68fdg4, 和82fdg8），采用高斯求积计算。
    </p>
    <p>
        每层的净红外辐射使用H<sub>2</sub>O和CO<sub>2</sub>在从0到15,000 cm<sup>−1</sup>的55个光谱间隔内的独立8项相关-k系数计算。我们用双高斯求积替代了标准高斯方法（Sykes 1952; Thomas & Stamnes 2002）。在g空间区间0.95–1.00内选择一半k系数，以提高累积分布函数急剧上升部分的分辨率，从而产生更平滑的平流层温度行为。
    </p>
    <p>
        这些系数也需要像太阳辐射计算中一样相互卷积。这在气候模型的每个时间步长中产生8×8×55 = 3520次独立的热红外辐射传输计算。当将CH<sub>4</sub>纳入模型时，使用6项求和，计算次数乘以6；当包括C<sub>2</sub>H<sub>6</sub>时，再乘以6。因此，从实际操作的角度来看，随着所包含温室气体数量的增加，这种方法的实用性降低。
    </p>
</div>
<div>
    <h1>2.1 模型更新</h1>
    <p>以下是对气候模型的主要更新：</p>
    <h2>1. 新的 k 系数生成</h2>
    <p>
        我们使用名为 KSPECTRUM 的工具（由 C. Goldblatt 于 2011 年私下建议）生成了新的 k 系数。KSPECTRUM 是一款可从 LBL 数据库（如 HITRAN 2008 和 HITEMP 2010）生成任何气体混合物在任何热力学条件下的高分辨率光谱的程序。其目标是生成可靠的光谱，可用于计算 k 分布数据集，供后续辐射传输分析使用。程序的源代码及详细说明可从 <a href="http://code.google.com/p/kspectrum/" target="_blank">此处</a>获取。
    </p>
    <p>
        我们生成了两组系数，一组使用 HITRAN 2008 数据库，另一组使用 HITEMP 2010 数据库。对于 HITRAN 数据库，我们利用 KSPECTRUM 为 H<sub>2</sub>O 和 CO<sub>2</sub> 生成了八项吸收系数矩阵，压力范围为 \(p(\text{bar}) = [10^{-5}, 10^{-4}, 10^{-3}, 10^{-2}, 10^{-1}, 1, 10, 10^2]\)，温度范围为 \(T(\text{K}) = [100, 150, 200, 250, 300, 350, 400, 600]\)。对于 HITEMP 数据库，仅为 H<sub>2</sub>O 推导了八项吸收系数，因为在高温（≥300 K）下，IHZ 以 H<sub>2</sub>O 为主，CO<sub>2</sub> 的含量很低（330 ppm）。用于 HITEMP 系数的网格为 \(p(\text{bar}) = [10^{-1}, 1, 10, 10^2]\)，\(T(\text{K}) = [350, 400, 600]\)。由于 HITEMP 数据库中的线过渡数量较多，完整的压力和温度范围的系数计算所需资源过大，因此选择了压缩网格。
    </p>
    <p>
        在生成 k 系数时，我们对 CO<sub>2</sub> 和 H<sub>2</sub>O 使用了不同的方法。对于 CO<sub>2</sub>，我们在距离线中心 500 cm<sup>−1</sup> 处截断谱线，使用 Perrin 和 Hartmann（1989）提出的“亚洛伦兹”吸收公式处理谱线远翼的吸收。对于 H<sub>2</sub>O，我们在 25 cm<sup>−1</sup> 截断谱线，并叠加了半经验“连续吸收”，采用 Paynter 和 Ramaswamy（2011）提出的 BPS 参数化吸收公式。
    </p>
    <h2>2. 水蒸气瑞利散射</h2>
    <p>
        我们引入了水蒸气的瑞利散射，因为它在波长达 1 μm 时可能变得重要（低质量恒星的维恩峰处于该范围内）。之前的研究（Kasting 1988；Kasting 等 1993）因未掌握 H<sub>2</sub>O 的散射系数，而使用空气的散射系数。我们采用以下散射截面公式（Allen 1976；Vardavas & Carver 1984；Von Paris 等 2010）：
    </p>
    <pre>
    \[
    \sigma _\mathrm{R,\rm {H_{2}O}} (\lambda) = 4.577 \times 10^{-28} \left(\frac{6+3D}{6-7D} \right) \left(\frac{r}{\lambda }\right)^4 \, \mathrm{cm^{2}}
    \]
    </pre>
    <p>
        其中 \(D\) 为去偏因子（H<sub>2</sub>O 为 0.17；Marshall & Smith 1990）；\(r\) 为波长 \(\lambda\) 相关的折射率，由 \(r = 0.85r_\text{dryair}\) 计算（Edlén 1996）；\(r_\text{dryair}\) 来自 Bucholtz（1995）方程（4）。注意 Von Paris 等（2010）给出的瑞利散射截面的系数应比上式小七个数量级。
    </p>
    <h2>3. 碰撞诱导吸收（CIA）更新</h2>
    <p>
        我们更新了 CO<sub>2</sub>-CIA 的参数化公式，采用了 Gruszka & Borysow（1997）、Baranov 等（2004）和 Halevy 等（2009）提出的公式。这一过程是类型密集 CO<sub>2</sub> 大气热红外不透明的重要来源。
    </p>
    <h2>4. 热容关系更新</h2>
    <p>
        我们使用 Shomate 方程计算了新的 CO<sub>2</sub> 和 H<sub>2</sub>O 的比热关系。在低温下，CO<sub>2</sub> 的比热相较之前模型的值下降了约 30%，这提高了干绝热层结率 \(g/c_p\)（其中 \(g\) 为重力加速度），但对计算的表面温度影响较小。这是因为对流层顶部高度的下降基本抵消了对流层上部更陡的层结率。
    </p>
</div>
