
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLANETARY WEATHERING BEHAVIOR AND HABITABLE ZONE</title>
    <script type="text/javascript" async 
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
</head>
<body>
    <h1>行星风化行为与可居住带对地表陆地比例的敏感性指示</h1>
    <p><strong>作者：</strong>Dorian S. Abbot<sup>1</sup>，Nicolas B. Cowan<sup>2</sup> 和 Fred J. Ciesla<sup>1</sup></p>
    <p><sup>1</sup>美国芝加哥大学地球物理科学系，5734 South Ellis Avenue, Chicago, IL 60637, USA; abbot@uchicago.edu</p>
    <p><sup>2</sup>美国诺斯韦斯特大学天体物理学跨学科探索与研究中心（CIERA）和物理与天文学系，2131 Tech Drive, Evanston, IL 60208, USA</p>
    <p>收稿日期：2012年2月16日；接受日期：2012年7月8日；出版日期：2012年8月24日</p>

    <h2>摘要</h2>
    <p>很可能，带有未知水分含量的明确可居住带类地行星将很快被发现。
    水分含量有助于决定地表陆地比例，而陆地比例又会影响行星的风化行为。
    这一点非常重要，因为硅酸盐风化反馈作用决定了可居住带在空间和时间上的宽度。
    在此，我们开发了一个低阶的风化与气候模型，旨在为不同陆地-海洋比例的行星气候演化提供定性理解。
    我们指出，如果海底风化与地表温度无直接关系，那么在水世界上就不存在风化-气候反馈机制。
    这将大大缩小水世界的可居住带。我们的模型结果表明，对于部分被海洋覆盖的行星，风化行为不强烈依赖于陆地比例。
    这一结果十分重要，因为它表明，之前的可居住带理论在陆地比例发生变化的情况下仍然保持稳健，只要行星上有一定的陆地。
    最后，我们提出了一个机制，说明水世界可以通过快速风化暴露的大陆来防止在潮湿温室效应阶段完全失水。
    这个过程被称为“水世界自我制约”，意味着水世界可以经历一个潮湿温室阶段，并最终成为像地球一样的部分海洋覆盖行星。
    这项研究强调了地表与地质效应的重要性，除了通常的恒星辐射外，它们在行星可居住性中的作用。</p>

    <h2>1. 引言</h2>
    <p>传统上，可居住带被定义为围绕恒星的区域，在该区域内，行星表面可以存在液态水（Kasting et al. 1993）。
    由于气候系统包含正反馈和负反馈，行星的表面温度与入射的恒星辐射流之间存在非平凡的关系。
    可居住带的内边界由“潮湿温室”效应定义，若行星温度过高（大约340 K），大量水分会通过光解作用在平流层中被分解，氢气逃逸到太空。
    这时行星可能会失去大部分水分，进入潮湿温室状态。
    外边界则发生在二氧化碳达到足够高的压力时，它无法继续提供加热效果，原因可能是增强的瑞利散射或二氧化碳在表面凝结，从而导致行星表面出现永久的全球冰冻。
    这些极限并不一定是所有类型生命的硬性界限。
    例如，地球上在大约6-7亿年前曾经历过“雪球地球”时期，生命在全球冰冻的情况下依然存活（Kirschvink 1992；Hoffman et al. 1998）。
    此外，如果考虑除二氧化碳之外的温室气体（如氢气）（Pierrehumbert & Gaidos 2011；Wordsworth 2012），可居住带的外限可以超越二氧化碳凝结的限制。
    也有提出替代性的可居住性限制。例如，若大气中二氧化碳的部分压力降到低于10<sup>-5</sup>巴，可能会抑制C4光合作用，这将限制复杂生物圈的形成（Caldeira & Kasting 1992；Bloh et al. 2005），尽管这不会限制大多数类型的生命。</p>

    <p>随着发现和表征位于可居住带附近的类地行星能力的提高，行星宜居性的研究变得越来越相关。
    例如，行星GJ581d（Udry et al. 2007；Mayor et al. 2009；Vogt et al. 2010；Wordsworth et al. 2011）、HD85512b（Pepe et al. 2011；Kaltenegger et al. 2011）、Kepler-22b（Borucki et al. 2011）和GJ 677c（Anglada-Escudé et al. 2012）最近被发现并确定可能位于可居住带内。
    随着开普勒任务、地面过境观测、径向速度观测和引力微透镜研究的继续进行，探测到的新行星系统将增加可居住行星候选的数量。</p>

    <p>地球科学文献中讨论的“昏暗的年轻太阳问题”与可居住带的概念类似。
    围绕主序星的行星随着恒星的老化，会接收到越来越多的入射辐射（即辐照度）。
    这将导致行星快速穿越可居住带，除非行星的反照率或热光学厚度（温室效应）随着系统的老化而调整。
    正如Sagan & Mullen（1972）指出的那样，地质证据表明地球早期曾有液态水，这表明地球上的这种调整必然发生。
    虽然关于细节问题存在一些争议（Kasting 2010），但普遍接受的观点是，硅酸盐风化反馈（Walker et al. 1981）在维持地球温和气候条件中发挥了重要作用（Feulner 2012）。
    通过这一负反馈机制，大陆上硅酸盐岩石的温度依赖性风化，作为去除大气中二氧化碳的主要过程，当温度降低时风化作用减弱，从而对温度变化提供缓冲作用，因为二氧化碳是一种强烈的红外吸收气体。
    硅酸盐风化反馈还大大扩展了围绕恒星的可居住带范围（Kasting et al. 1993），因为行星距离恒星越远，其所接收的辐照度越少，正如时光倒流时所发生的那样。
    如果使用辐照度边界来划定可居住带，那么这个概念既可以作为行星在特定时间的位置与恒星的关系，也可以作为行星在恒星面前处于固定距离的时间函数来考虑其可居住性。</p>

    <p>除了大陆的硅酸盐风化作用，风化还可能在海底的基性海洋岩石层中的热液系统中发生。
    海底风化在地球上的约束尚不清楚；然而，研究认为它弱于大陆风化，并且主要依赖于海洋化学、pH值和海水通过基性岩石的循环，而非直接与地表气候相关（Caldeira 1995；Sleep & Zahnle 2001；Le Hir et al. 2008）。
    如果这一点成立，那么在低陆地比例的行星上，二氧化碳从大气中去除的效率较低，这将导致二氧化碳浓度较高，气候也会变暖。
    此外，低陆地比例的行星可能会比高陆地比例的行星有较弱的对辐照度变化的缓冲作用，这将导致其可居住带变窄。</p>
</body>
<body>
    <p>尽管行星的风化行为可能取决于地表陆地比例，但位于可居住带的行星的水分成分应该会有显著变化。
    其原因在于，可居住带通常位于比雪线更靠近恒星的位置，雪线是原行星盘内，水冰会存在并能够被结合成固体的区域。
    例如，在太阳系中，当前的可居住带范围大约为0.8到1.7天文单位（AU）（Kasting et al. 1993），如果忽略二氧化碳云的影响。
    如果假设二氧化碳云能产生强烈的温暖效应（Forget & Pierrehumbert 1997），可居住带的外限可能会扩展到大约2.4 AU（Mischna et al. 2000；Selsis et al. 2007；Kaltenegger & Sasselov 2011），尽管最近的三维模拟包括大气二氧化碳凝结的研究表明，温暖效应可能相对温和（Wordsworth et al. 2011；Forget et al. 2012；Wordsworth et al. 2012）。
    雪线的定位大约在2.5 AU（Morbidelli et al. 2000）；在这个距离之外，冰或水合矿物的形式出现在小行星和行星中。
    地球的水源供给的一般图景是，来自雪线以外的天体的轨道因行星胚胎和年轻木星的引力散射而被激发至高离心率。
    这些高离心率会将含水的行星胚胎和小行星推向穿越地球轨道的路径。
    一部分这样的天体会被地球吸积，随机地将挥发物送到年轻的地球（Morbidelli et al. 2000；O’Brien et al. 2006；Raymond et al. 2009）。</p>

    <p>为了将这一分析扩展到其他恒星周围的行星系统，已经做出了努力。
    预计会发生相同的动力学效应，送到潜在可居住行星的水量将强烈依赖于巨行星的存在或轨道（O’Brien et al. 2006；Raymond 2006；Raymond et al. 2009）。
    由于低质量恒星预计拥有较小质量的盘，因此也有较少的大质量天体来产生引力散射，低质量恒星可能更容易拥有挥发物贫乏的可居住带行星（Raymond et al. 2007）。
    另一方面，质量大约为1 M<sub>⊙</sub>或更高的恒星，则可能容易拥有与地球相似或更多的水分的可居住带行星（Raymond et al. 2007）。</p>

    <p>如上所述，当前的研究主要关注水合小行星作为可居住行星水源的主要来源；然而，也存在其他动力学机制，可以使得可居住行星积累大量水和挥发物。
    彗星体相对于小行星在给定撞击体质量下能送来更多的水。如果这些天体在行星形成过程中被散射，这可能允许积累比原预测更多的水。
    此外，Kuchner（2003）认为，形成于雪线外的行星可能会由于原行星盘的引力力矩或与其他行星的散射而向内迁移。
    这些天体在雪线外形成时自然会积累大量的水冰，随后在较温暖的轨道上融化和升华，为靠近恒星的行星提供丰富的挥发物质。</p>

    <p>因此，可居住带行星可能拥有各种各样的水质量分数，这将导致不同的陆地比例。
    此外，即使水的质量分数保持恒定，尺度关系表明陆地比例也依赖于行星的大小。
    同时，地表陆地比例可能对行星的碳循环产生强烈的控制作用，而碳循环又会显著影响行星的可居住性。
    这就需要对不同陆地比例的行星进行风化行为的普遍考量。</p>

    <p>本文的主要目标是研究陆地比例对可居住带内类地行星碳循环和风化行为的影响。
    我们将概述并使用一个简单的风化和全球气候的分析模型，该模型必然对真实的物理过程进行了重大简化。
    例如，我们将使用现有的海底风化参数化，尽管我们承认对这些参数化的观测和实验约束非常有限。
    然而，我们仅将此模型用于提出那些不强烈依赖于参数化不确定性方面的结论。
    这个模型应当用于直观地理解系统的定性行为，而不是进行定量估计。该模型的一个主要优点是，它容易推导和理解，但应当能够捕捉到最重要的物理过程。
    这种建模方法适用于系外行星的研究，因为对于这些行星，关于地球化学模型的相关数据十分有限。</p>

    <p>我们将考虑一个类地行星，具有硅酸盐岩石、大量的碳酸盐岩石储量，并且至少有一些表面海洋。
    我们将使用风化的平衡关系，这对于主序星所经历的辐照度变化来说是合理的。
    我们使用的气候模型是零维模型的线性化。尽管这是一个严重的简化，它允许我们进行我们认为对理解问题有帮助的分析性进展。
    我们将考虑从部分海洋覆盖到完全水世界的行星地表陆地比例。
    在这种情况下，如果一个行星的最高陆地被至少1米的水覆盖，则它被视为水世界，尽管更多的水也可以使其被归类为水世界。
    然而，我们假设该行星的地球物理背景是具有相当大的岩石地幔，并且水的质量分数最多为地球的约10倍（0.02%-0.1%；Hirschmann & Kohlstedt 2012），而不是潜在的水世界，其水的质量分数可能达到O(10%)或更高（Fu et al. 2010），这些行星的挥发物循环可能截然不同。
    尽管近年来部分海洋覆盖的行星被称为“水星”（Abe et al. 2011），我们不采纳这一术语，因为“水星”这个词在气候与大气动力学领域已有很长时间的历史，用于表示完全海洋覆盖的行星。</p>

    <p>我们发现，对于部分海洋覆盖的行星，风化行为对陆地比例的变化相当不敏感。
    例如，我们发现，如果一个行星的陆地比例为0.3（如现代地球）或0.01（相当于格陵兰岛和墨西哥的合并面积），风化反馈作用的功能相似，从而导致可居住带宽度类似。
    相比之下，我们发现水世界的风化行为与部分海洋覆盖的行星截然不同。如果海底风化主要依赖于海洋酸度，而非行星表面温度，那么水世界上不会有风化反馈，它的可居住带应该非常窄，并且随着恒星的老化而迅速穿过可居住带。
    最后，我们认为水世界可以通过暴露大陆并通过大量风化降低二氧化碳浓度来停止正在进行的潮湿温室效应，从而将行星保持在一个温和状态并具有部分海洋覆盖。我们将这一可能性称为“水世界自我制约”。</p>

    <p>本文在两方面补充了Abe et al.（2011）最近的工作，Abe等人发现，几乎干涸的行星比具有一些水的行星有更宽的可居住带。
    首先，Abe et al.（2011）做出的计算主要集中在气候建模上，而不是风化，尽管他们对干燥行星的风化影响因素进行了定性描述。其次，我们考虑了各种陆地比例，直到水世界的极限情况。</p>

    <p>本文的框架如下：我们在第2节描述我们的模型，在第3节使用它，在第4节进行灵敏度分析，在第5节讨论水世界自我制约的可能性，在第6节概述我们的工作在观测上的影响及确认或证伪的前景，在第7节进一步讨论我们的结果，包括考虑我们各种假设的局限性，最后在第8节得出结论。</p>
</body>
<body>
    <h1>模型描述</h1>

    <p>在此，我们将简要回顾硅酸盐风化和碳循环，然后开发我们的模型。对更详细内容感兴趣的读者应参阅Berner（2004）和Pierrehumbert（2010）的第8章。
    类地行星上的碳循环可以描述为火山气体释放二氧化碳（CO2）与碳酸盐埋藏之间的长期平衡，这一过程通过硅酸盐的化学风化介导。硅酸盐矿物通过如下反应发生风化：</p>

    <p><mathjax>
    CaSiO₃(s) + CO₂(g) ⇌ CaCO₃(s) + SiO₂(s),
    </mathjax></p>

    <p>其中我们使用了CaSiO₃作为示例硅酸盐矿物，但MgSiO₃、FeSiO₃以及更复杂的矿物也能参与类似的风化反应。反应产物CaCO₃是碳酸盐的一个例子，而二氧化硅（SiO₂）通常被称为硅土。这些反应发生在水溶液中，如果最终生成的CaCO₃被埋藏在海洋沉积物中并最终被俯冲到地幔中，它将导致大气中CO₂的净减少。CaCO₃通常通过生物沉淀在海洋中生成，但如果没有生物作用，海洋中的风化通量将推动碳酸盐的饱和度增加，直到可能发生非生物的CaCO₃沉淀。地幔中的碳可以从碳酸盐矿物中释放出来，若温度足够高，导致火山气体释放并完成碳循环。地幔中的碳储量足够大，因此CO₂的释放不依赖于进入地幔的碳的量。</p>

    <p>风化反应可以发生在大陆或海底，而风化速率是每年将CO₂转化为碳酸盐的总量，并且被如方程（1）所示的反应所俯冲。风化速率通常以“每年千克碳”（kg C yr⁻¹）为单位测量。接下来我们将使用无量纲的风化速率：</p>

    <p>
        \(\frac{\tilde{W}_l}{W_{l0}} = \left( \frac{\tilde{P}}{P_0} \right)^a \left( \frac{\tilde{\phi}}{\phi_0} \right)^b e^{\frac{\tilde{T} - T_0}{T_u}}\)
    </p>


    <p>其中P是降水率，φ是CO₂的分压，T是表面温度（参见表1列出的重要模型变量），而T₀ = 10°C、a = 0.65和b = 0.5是常数。下标0表示当前值，波浪符号表示具有量纲的量。大陆风化的降水依赖性a是通过实验测量河流中Ca²⁺和Mg²⁺溶质浓度并与年径流进行回归得到的。Berner（1994）和Pierrehumbert（2010）基于在肯尼亚的研究得出a = 0.65，而在美国的研究则得出a = 0.6（Dunne 1978）和a = 0.7（Peters 1984）。我们将使用a = 0.65作为标准值，但在第4节中我们发现，如果a值在0到2之间变化，我们的主要结果仍然具有鲁棒性。</p>

    <p>大陆风化的CO₂依赖性b，如果没有地面植物来消除CO₂对风化的影响，b值可以低至0（Pierrehumbert 2010），其最大值为1（Berner 1994）。Berner（1994）和Pierrehumbert（2010）都采用了中间值0.5，我们在此也采用这个值。如果b变得非常小，风化行为才会对其变化敏感（第4节）。文献中对风化的e-折温度Tₑ有不同的估算值，包括Tₑ = 10.0 K（Pierrehumbert 2010）、Tₑ = 11.1 K（Berner 1994）、Tₑ = 21.7 K（Marshall et al. 1988）和Tₑ = 17.7 K（Walker et al. 1981）。我们选择Tₑ = 10.0 K，并在第4节中展示了我们的主要结论对Tₑ = 5–25 K的变化是有效的。</p>

    <p>方程（2）可以无量纲化，得到如下形式：</p>

    <p>
        \( W_l = P^a \phi^b e^T \)
    </p>

    <p>
        其中 \( W_l = \frac{W_{\tilde{l}}}{W_{l0}} \)，
        \( P = \frac{P}{\tilde{P_0}} \)，
        \( \phi = \frac{\phi}{\tilde{\phi_0}} \)，
        \( T = \frac{\tilde{T} - T_0}{T_u} \)。
    </p>

    <p>我们将降水量参数化为温度的函数：</p>

    <p>
        \( \frac{\tilde{P}}{P_0} = 1 + \tilde{\alpha}_p (\tilde{T} - T_0) \)
    </p>

    <p>其中\(\tilde{\alpha}_p\)表示每升高1K温度时降水量的百分比增加。各种全球气候模型的气候变化模拟表明，当\(\tilde{T} \approx T_0\)时，\(\tilde{\alpha}_p = 0.02–0.03\)是一个合适的值，对应每升高1K全球平均温度时全球平均降水量增加2%–3%（Schneider et al. 2010）。然而，理想化的全球气候模型中的模拟表明，降水量随着大气光学厚度的增加，在温度大约为300–310 K时渐近趋向一个能量决定的常数极限（O’Gorman & Schneider 2008）。然而，降水量的能量限制会发生变化，如果辐照度变化，这也是我们将要考虑的情况。为了简化，我们将在以下假设\(\tilde{\alpha}_p = 0.025\)。由于大陆风化对T的指数依赖性，方程（3）中，我们的结果对\(\tilde{\alpha}_p\)的影响极小，因此即使我们通过设定\(\tilde{\alpha}_p = 0\)来消除降水量对温度的依赖，我们的结果也不会发生实质性改变（第4节）。我们将定义\(\alpha_p = \tilde{\alpha}_p T_u = 0.25\)，并可以无量纲化方程（4）以得到：</p>
</body>
</html>