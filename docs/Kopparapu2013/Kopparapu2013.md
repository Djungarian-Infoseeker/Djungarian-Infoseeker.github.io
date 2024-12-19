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
