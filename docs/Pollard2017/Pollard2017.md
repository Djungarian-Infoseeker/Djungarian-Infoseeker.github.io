
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>地球物理研究杂志：大气层</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <style>
        body {
            font-family: "SimSun", serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #0066cc;
        }
        .article-info {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 20px;
        }
        .key-points {
            background-color: #f5f5f5;
            padding: 15px;
            border-left: 4px solid #0066cc;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <h1>地球物理研究杂志：大气层</h1>
    
    <h2>研究文章</h2>
    
    <div class="article-info">
        <p>DOI: 10.1002/2017JD026621</p>
    </div>
    
    <div class="key-points">
        <h3>关键点：</h3>
        <ul>
            <li>描述了一种将海冰川模型与全球气候模型异步耦合的方法</li>
            <li>在冰雪地球状态下未发现Jormungand或热带薄冰状态</li>
            <li>部分雪覆盖和小尺度动力学可能影响冰雪地球的结果</li>
        </ul>
    </div>
    
    <div class="article-info">
        <p><strong>通讯作者：</strong> D. Pollard, pollard@essc.psu.edu</p>
        <p><strong>引用：</strong> Pollard, D., J. F. Kasting, 和 M. E. Zugger (2017), 冰雪地球：海冰川流动与全球气候模型的异步耦合, J. Geophys. Res. Atmos., 122, 5157-5171, doi:10.1002/2017JD026621.</p>
        <p><strong>收稿日期：</strong> 2017年2月7日</p>
        <p><strong>接受日期：</strong> 2017年4月29日</p>
        <p><strong>在线发表：</strong> 2017年5月4日</p>
        <p><strong>正式出版：</strong> 2017年5月20日</p>
    </div>
    
    <h2>冰雪地球：海冰川流动与全球气候模型的异步耦合</h2>
    
    <p><strong>D. Pollard<sup>1</sup> <sup>iD</sup>, J. F. Kasting<sup>1,2</sup> <sup>iD</sup>, 和 M. E. Zugger<sup>3</sup> <sup>iD</sup></strong></p>
    
    <p><sup>1</sup> 地球与环境系统研究所，宾夕法尼亚州立大学，大学公园，宾夕法尼亚州，美国</p>
    <p><sup>2</sup> 地球科学系，宾夕法尼亚州立大学，大学公园，宾夕法尼亚州，美国</p>
    <p><sup>3</sup> 应用研究实验室，宾夕法尼亚州立大学，州立学院，宾夕法尼亚州，美国</p>
    
    <h3>摘要</h3>
    <p>在新元古代和古元古代的冰雪地球事件期间，有限的热带开放海洋（Jormungand）或覆盖薄冰的热带海洋将有助于解释：(1) 低纬度地区强烈的冰川活动，(2) 光合生物的生存，以及(3) 无需过度积累大气CO<sub>2</sub>的解冻恢复。一些先前的模型表明热带开放海洋或薄冰覆盖是可能的；然而，在存在从高纬度地区流动的千米厚海冰川的情况下，其可行性尚未得到明确证实。在这里，我们描述了一种将带状海冰川模型与三维全球气候模型异步耦合的新方法，并将其应用于冰雪地球。我们绘制了冰线与CO<sub>2</sub>的平衡曲线，以及它们对海洋热传输效率、海冰川流动和其他模型参数的依赖性。在我们的任何模型运行中，包括那些有海冰川的情况，都没有发现有限热带开放海洋或薄冰的气候状态。如果这个结果是正确的，那么生命要生存就需要其他避难所，如冰尘凹坑。然而，首先应该解决我们的结果与其他研究结果之间存在差异的原因。我们提出，影响低纬度部分雪覆盖的小尺度对流动力学可能是解释这些差异的关键因素。</p>
    <h1>1. 引言</h1>

<p>关于新元古代[Hoffman et al., 1998]和古元古代[Evans et al., 1997]假说的"冰雪地球"时期实际发生的情况，对于理解地球复杂生命的演化以及系外行星上可能存在的生命演化具有重要意义。这一争论的核心是<strong>避难所（refugia）</strong>问题，即在行星几乎完全被冰川覆盖的数百万年间，光合生物得以生存的地方。我们知道新元古代存在避难所，因为藻类和蓝藻都在这些冰川事件中存活了下来[Hoffman and Schrag, 2002]。这些避难所是仅限于像现代冰岛这样的空间孤立的火山热点地区[Hoffman and Schrag, 2002]，还是热带大部分地区保持无冰状态[Hyde et al., 2000; Abbot et al., 2011]，或者被足够薄的冰层覆盖以允许阳光穿透[McKay, 2000; Pollard and Kasting, 2005]？Hoffman[2016]最近提出低纬度广泛分布的<strong>冰尘凹坑（cryoconite pans）</strong>作为硬冰雪地球的替代避难所，我们将在文末回到这个观点。</p>

<p>大型热带避难所的吸引力至少有三个原因：</p>

<ol>
    <li><strong>地质证据</strong>如坠石（dropstones）和擦痕表明，当时大陆冰川曾流入热带开阔海域[Kirschvink, 1992; Hoffman et al., 1998; Evans and Raub, 2011]。在硬冰雪地球状态下，整个海洋被厚冰覆盖，由于水分供应急剧减少，大陆冰盖的移动速度将比现代冰盖和冰川慢得多，可能慢到无法产生坠石[Pollard and Kasting, 2004，但参见Donnadieu et al., 2003; Benn et al., 2015]。坠石和其他冰川移动证据可能是在厚热带海冰形成或融化时沉积的，但这种解释与热带海洋缺乏厚冰的观点相比显得牵强。</li>
    
    <li><strong>光合生物的限制</strong>将比硬冰雪地球模型宽松，这与藻类和蓝藻系统发育记录中缺乏限制的证据一致[McKay, 2000]。</li>
    
    <li><strong>解冻所需的CO<sub>2</sub>积累量</strong>会低得多[Pollard and Kasting, 2005; 参见Abbot and Pierrehumbert, 2010; Hu et al., 2011]，这与氧三同位素对冰期后CO<sub>2</sub>积累的独立估计一致[Bao et al., 2008]，但需考虑云的可能影响[Abbot et al., 2012; Abbot, 2014]。</li>
</ol>

<p>基于这些原因，进一步研究热带保持无冰或被薄冰（约米厚）覆盖的模型似乎是有益的。Rodehacke et al.[2013]指出了此类模型的额外限制。CO<sub>2</sub>积累的证据[Bao et al., 2008]与盖帽碳酸盐岩的存在[Hoffman et al., 1998]表明，像Hyde et al.[2000]这样冰线位于30°极向的模型不可行，因为它们没有表现出显著的滞后现象；即它们解冻过于容易，不需要大量CO<sub>2</sub>积累。Rodehacke et al.进一步发现，在他们的模型中，只有当冰线位于20°赤道方向时，大陆冰川才能在热带生长。（Hyde et al.能够在澳大利亚形成冰盖，但他们的模型假设存在高山，而地质证据不支持这一点。）因此，新元古代地球的首选气候解决方案是某种开放水域，即"Jormungand"[Abbot et al., 2011]，或薄冰状态，两者冰线都位于相对较低的纬度。</p>

<p>这些解决方案也面临自身的问题，其中一些问题尚未得到充分解决。Goodman和Pierrehumbert[2003]提出，<strong>海冰川流动（sea-glacier flow）</strong>可能显著改变新元古代冰雪地球事件中海洋冰盖的纬度范围，有向赤道推进的趋势。他们的模型由气候模型驱动，但未与之交互耦合。Pollard和Kasting[2005]（以下简称PK05）创建了这样一个耦合模型，但他们的气候模型是一个简单的能量平衡模型（EBM）。他们发现某些冰特性（特别是低气泡含量）下存在稳定的中间厚冰线状态，热带地区有薄冰，但气候模型的简单性值得怀疑。关于从高纬度输送的海冰是否可以完全无气泡[Warren and Brandt, 2006; Goodman, 2006; Pollard and Kasting, 2006]，目前仍有争议。总体而言，论证真正的开放水域（Jormungand）状态可能更容易。</p>

<p>Li和Pierrehumbert[2011]考虑了海冰川模型中的尘埃输送，Goodman和Strom[2013]在耦合的EBM-海冰川模型中加入了尘埃，发现了新的长期周期，主要是100%冰覆盖，但也有热带极薄冰的情况。同样，他们的EBM气候的简单性值得商榷。这里我们将尘埃问题留给未来研究，包括硬冰雪地球中广泛分布的冰尘凹坑的影响[Hoffman, 2016]。</p>

<p>多项研究使用全球气候模型（GCMs）或中等复杂度的地球模型，广泛探索了冰线空间，发现了中间冰线，但没有考虑厚海冰川流动——只有相对较薄的风驱海冰，如现代GCMs中那样。这些研究包括Donnadieu et al.[2004], Poulsen和Jacob[2004], Yang et al.[2012a, 2012b], Abbot et al.[2011, 2013], Rose[2015], Liu et al.[2013, 2016], Voight和Marotzke[2010], Voight et al.[2011], 以及Voight和Abbot[2012]。其中一些研究使用了耦合的大气和海洋GCMs，三维海洋动力学和深海环流对冰雪地球状态转变的重要性是一个持续的研究问题；这里我们使用50米混合层海洋和扩散热传输。</p>

<p>Abbot et al.[2013]确实用GCM气候的输出驱动了海冰川流动模型，但不是交互式的。他们还加入了穿透性太阳辐射，允许低纬度存在薄冰区域（几米或更薄），如PK05和McKay[2000]所述。在他们的案例中，冰覆盖了100%的海洋。他们进一步讨论了在狭窄海湾的陆地末端可能存在无冰海洋绿洲，基于Campbell et al.[2011]的参数化，但没有明确建模，因为他们的海冰川流动模型是纬向对称的。</p>

<p>Tziperman et al.[2012]使用了一个完全二维（经度和纬度）的海冰川流动模型，但同样由先前计算的非交互式气候驱动。他们的模型基于100%厚海洋冰覆盖的假设开发，平均冰厚度作为输入参数。他们研究了海冰川在新元古代陆地之间的流动方式。Ashkenazy et al.[2013, 2014]将这个二维海冰川模型与海洋GCM耦合，主要研究100%冰覆盖下的海洋环流，Ashkenazy和Tziperman[2016]以及Jansen[2016]也做了类似工作。遗憾的是，这个冰流模型不能用于模拟薄冰或Jormungand状态，因为其公式假设100%冰覆盖，没有冰-海洋边界。</p>

<p>总之，以前没有模型将海冰川流动与大气GCM交互耦合；因此，对于冰雪地球，"运行曲线"（平衡冰线纬度与大气CO<sub>2</sub>水平的关系）的形式仍然是一个悬而未决的问题，稳定的中间冰线是否可能也是如此。我们在这里用我们所知的第一个此类耦合模型来解决这个问题。直接同步耦合由于GCM在约千米厚海冰川所需的10<sup>3</sup>至10<sup>6</sup>年时间尺度上的CPU时间需求而成本过高。我们使用<strong>异步耦合</strong>，即GCM每次运行约十年，穿插更长时间间隔，期间计算成本较低的海冰川模型使用先前GCM周期的地表强迫运行。</p>

<p>在这里，我们探索平衡曲线（平衡冰线与大气CO<sub>2</sub>的关系）以及海洋热传输（GENESIS混合层海洋中的扩散系数）、现代型海冰动力学（仅对相对薄冰的风驱）、海冰川流动（还包括导致无雪冰内部融化的双流穿透太阳辐射；海冰川流动需要与GCM异步耦合，如下所述）以及冰雪反照率范围的影响。</p>

<p>正如我们将解释的，我们的模型没有发现Jormungand或薄冰状态，原因将在后面讨论。这里的重点是确定GENESIS气候模型中导致其行为与PK05 EBM和Abbot et al.[2011]的社区大气模型（CAM）不同的关键参数，并为未来耦合GCM/海冰川流动模型制定方法。</p>
<h1>2. 模型描述</h1>

<h2>2.1 GENESIS全球气候模型</h2>

<p>使用的GCM是GENESIS（全球环境与生态交互系统模拟）3.0版全球气候模型[Thompson and Pollard, 1997; Alder et al., 2011]。它已广泛应用于古气候研究，包括冰雪地球研究[Pollard and Kasting, 2004; Abbot et al., 2013]。本文所有模拟中，大气和地表网格均采用T31谱分辨率（3.75°经纬度），18层垂直大气层。GENESIS v3采用美国国家大气研究中心社区气候模型第三版（NCAR CCM3）的太阳和红外辐射代码[Kiehl et al., 1998]。使用50米混合层海洋，海洋热传输通过线性扩散表示。海冰动力学采用空穴流体模型[Flato and Hibler, 1990, 1992]，适用于类似现代的薄海冰（几米厚，风驱），不含海冰川流动。</p>

<p>为简化并保持与前述研究一致，模拟采用<strong>水行星（aquaplanet）</strong>设定，即所有表面被海洋覆盖。这些新元古代通用模拟中，太阳常数降至现代的94%，并设定一系列大气CO<sub>2</sub>浓度。现代全球年平均臭氧量均匀分配至各大气层（避免现代地理影响），不考虑其他温室气体（CH<sub>4</sub>和N<sub>2</sub>O）和背景气溶胶。冰雪反照率对本研究至关重要，将在下文讨论。</p>

<p>GCM中的海冰模块用于表示海冰川。对于海冰川流动，冰层数增至20层（标准为3层），垂直等距分布，但顶层保持0.05米厚度，以适应总冰厚变化。</p>

<p>可选地，在GCM中加入<strong>穿透性太阳辐射</strong>及相关冰内融化过程，如PK05所述。该机制对热带薄冰区形成至关重要。只有部分入射太阳辐射能穿透冰层：可见光波段、仅限无雪冰面区域、且表层冰温低于熔点时才发生。如PK05所述，穿透太阳辐射通量采用双流δ-Eddington算法计算，冰的单次散射反照率设为0.994（相对无气泡，允许更大穿透深度，在PK05中产生薄冰解）。GCM每0.5小时时间步长分别计算直射和漫射太阳辐射（由GCM提供）的双流穿透。穿透辐射吸收导致的冰层内部加热纳入GCM垂直冰温方程（含冰的热惯性）。任何冰层温度超过熔点时重置为熔点，相应冰量融化并立即排入海洋（同PK05）。</p>

<p>大多数模拟采用60 mW m<sup>-2</sup>的均匀地热通量。部分测试使用90 mW m<sup>-2</sup>，耦合模拟中海冰川变薄但结果差异微小（对比其他冰雪地球研究的80-100 mW m<sup>-2</sup>[Ashkenazy et al., 2014; Ashkenazy and Tziperman, 2016]）。未考虑三维海洋环流，忽略了洋中脊地热异常通过海洋传递至海冰川底部的动力效应，这留待未来研究。</p>

<p>冰盖下的混合层海洋受水平热扩散、地热通量及穿透冰层的太阳辐射加热。加热量根据海洋温度垂直传递至冰底。部分模拟设定冰下水平海洋热扩散为零，结果差异不大，但涉及海冰川耦合问题（见下文讨论）。</p>

<p>针对冰雪地球对现代GCM的其他修改如下：</p>

<ol>
    <li><strong>风驱海冰动力学</strong>[Flato and Hibler, 1990, 1992]可选保留，但仅适用于薄冰。冰强度设定完全阻止厚度>6 m的冰体平流，该效应在4-6 m厚度区间渐变增强。</li>
    <li>对于无海冰川流动的GCM模拟（即未耦合下文所述海冰川模型），极地海冰需缓慢增厚至数千米才能达到基底净融化（地热通量减去传导通量）与表面降水减蒸发间的局部平衡。这需要GCM积分长达~10<sup>6</sup>年。为在合理时间内达到准平衡，采用临时措施：当冰厚增至8-10 m以上时，基底向上的垂直热传导降为零。这使得预设地热通量的基底融化仅需数年GCM积分即可平衡表面积累。近地表气候解未受显著影响。</li>
    <li>简化小冰量下海冰覆盖率与厚度的关系：设定最小厚度1 m，超过则覆盖率恒为1，不足则保持1 m厚度但降低覆盖率，保持冰体积守恒。</li>
    <li>雪覆盖率与深度关系采用与海冰相同的简化方法。冰雪地球模拟中雪覆盖率开始下降的最小厚度为0.015 m（现代为0.15 m）。修改理由见下节。</li>
</ol>

<h2>2.2 海冰川流动及其与GCM的异步耦合</h2>

<p><strong>海冰川流动</strong>（即厚浮冰在重力应力下的变形）可选采用PK05的纬向对称流动模型[Goodman and Pierrehumbert, 2003原开发]。南北向流速可达数百米/年，但仅限厚冰，对薄于数百米的冰可忽略。如Tziperman et al.[2012]所示，这种纬向对称动力学处理虽不严格且忽略某些项，但仍近似有效。我们采用纬向对称动力学而非Tziperman et al.[2012]的完全二维模型，因为二维模型中尚未实现冰-海洋开放边界的处理。</p>

<p>冰层增长至典型冰雪地球厚度（~1 km或更厚）的时间尺度可达~10<sup>6</sup>年（PK05），这对GCM与海冰川模型的同步耦合计算不可行。我们首次采用<strong>异步耦合</strong>方法：GCM每次单独运行5年（见上节），随后海冰川模型利用GCM输出的地表强迫场单独运行100万年（计算成本低得多）。</p>

<p>这与GCM-陆地冰盖模型的异步耦合类似（Pollard[2010]综述）。但非冰雪地球的陆地冰盖模拟更简单，因其表面融化可通过正积温（PDD）方案和递减率修正与季节气温参数化关联。而冰雪地球中蒸发和穿透辐射的影响使异步期间缺乏简单参数化方法（冰体扩展至先前无冰纬度时尤其如此）。我们采用从冰缘赤道方向最近冰覆盖网格点的强迫场值进行外推。</p>

<p>长期异步模拟的具体步骤如下：</p>

<h3>(A) GCM运行阶段（5年）</h3>
<p>无海冰川动力学，初始化大气、无冰海洋温度、雪盖和地表强迫场。为海冰川模型累积年均局地物质平衡强迫场：</p>
<ul>
    <li>雪-冰转化率（见下文）</li>
    <li>无雪冰面蒸发</li>
    <li>表面冰融化</li>
    <li>穿透辐射导致的内部冰融化</li>
    <li>地表太阳辐射通量（直射/漫射）</li>
    <li>地表气温</li>
    <li>海洋混合层温度</li>
</ul>
<p>每年末将超过1 m的雪转化为冰，雪厚重置为1 m（粗略模拟雪压实为冰的过程）。实际现代冰川中该过程发生在顶部数十至100 m，但冰雪地球极低降雪率下1 m上限更实用。年均雪-冰转化率作为海冰川模型的表面冰质量输入。雪盖本身在海冰川模型中保持不变，视为耦合中的GCM组分。</p>

<h3>(B) 数据处理阶段</h3>
<p>第五年末，将年均强迫场纬向平均，半球对称化（取南北同纬度平均值），并从冰缘向赤道外推。GCM的冰/雪覆盖率和厚度同样处理。</p>

<h3>(C) 海冰川模型运行阶段（100万年）</h3>
<p>以对称化冰/雪状态和强迫场启动。仅改变冰覆盖率和厚度（雪盖保持GCM状态，除非冰消失则雪设为零）。扩展至新无冰纬度时使用外推强迫场。</p>
<p>与GCM类似，海冰川模型也执行穿透辐射和内部融化的双流计算（使用对称化的入射太阳辐射）。假设各冰柱瞬时温度剖面满足垂直热传导与穿透辐射吸收的平衡（忽略GCM中包含的冰热惯性）。当某层温度超过熔点（通常发生在表层1-2 m内），重新计算受熔点约束的温度剖面及相应内部融化量。融水假定立即排至冰底进入海洋（同PK05）。同时计算基底冻结或融化。</p>
<p>温度剖面计算的边界条件需：</p>
<ol type="i">
    <li>冰面温度</li>
    <li>冰底海洋热通量（取决于海洋温度）</li>
</ol>
<p>二者均来自GCM前期解的年均值，海洋温度从最后无冰网格点外推。</p>

<p>通过上述步骤，海冰川模型捕捉了决定高纬度千米级冰厚的基本物理平衡（局地表面/内部/基底物质收支与海冰川流动散度的平衡），可运行至~10<sup>6</sup>年接近平衡态。但若全球冰区变化超过赤道4°纬度带对应面积（显著反馈气候时），则中止异步积分。</p>

<p>100万年积分结束后，用新的对称化冰/雪状态重置GCM相应变量。海冰川模型末期垂直冰温剖面（忽略热惯性计算）也用于更新GCM冰温。随后GCM再运行5年，循环(A)-(C)步骤。敏感性测试表明结果对时间间隔选择不敏感（同步期5-10年，异步期10,000-1,000,000年均测试）。</p>
    <h2 class="article-section__title section__title section1" id="jgrd53826-sec-0005-title">3 结果</h2>
    
    <section class="article-section__sub-content" id="jgrd53826-sec-0006">
        <h3 class="article-section__sub-title section2" id="jgrd53826-sec-0006-title">3.1 平衡曲线</h3>
        
        <p>首先，气候模型在无冰流情况下单独运行，以绘制不同海洋热传输假设下的冰线范围。图<a href="#jgrd53826-fig-0001">1</a>中的曲线显示了在平衡模型运行中，给定大气CO<sub>2</sub>值对应的冰缘纬度。x轴是CO<sub>2</sub>体积混合比的对数，因此CO<sub>2</sub>浓度向右增加（例如，现代值400 ppmv（4×10<sup>−4</sup> ppv）对应这些单位中的-3.4）。曲线通过运行GCM生成，初始条件为：(i) 无冰且初始海洋混合层温度=10°C；或(ii) 100%冰覆盖，初始冰厚度=5米（无海冰川流动）或200米（有海冰川流动）。</p>
        
        <section class="article-section__inline-figure">
            <figure class="figure" id="jgrd53826-fig-0001">
                <a target="_blank" href="/cms/asset/ba84c28e-8925-4132-97e5-9b2e583adeec/jgrd53826-fig-0001-m.jpg">
                    <picture>
                        <source srcset="/cms/asset/ba84c28e-8925-4132-97e5-9b2e583adeec/jgrd53826-fig-0001-m.jpg" media="(min-width: 1650px)">
                        <img class="figure__image" src="/cms/asset/0f896ea2-2d04-4412-8a5a-b6016f6551c6/jgrd53826-fig-0001-m.png" data-lg-src="/cms/asset/ba84c28e-8925-4132-97e5-9b2e583adeec/jgrd53826-fig-0001-m.jpg" alt="详情见图片后说明" title="详情见图片后说明" loading="lazy">
                    </picture>
                </a>
                <figcaption class="figure__caption">
                    <div class="figure__caption__header">
                        <strong class="figure__title">图1</strong>
                        <div class="figure-extra">
                            <a href="#" class="open-figure-link">在图表查看器中打开</a>
                            <a href="/action/downloadFigures?id=jgrd53826-fig-0001&amp;partId=&amp;doi=10.1002%2F2017JD026621" class="ppt-figure-link">
                                <i aria-hidden="true" class="icon-Icon_Download"></i>
                                <span>PowerPoint</span>
                            </a>
                        </div>
                    </div>
                    <div class="figure__caption figure__caption-text">
                        冰纬度与大气CO<sub>2</sub>的平衡曲线，针对不同海洋热传输因子（<i>QF</i>）。在平衡运行中，冰缘纬度与大气CO<sub>2</sub>浓度的关系。CO<sub>2</sub>轴值为log<sub>10</sub>(ppv)，其中ppv为体积混合比（每体积份数）；例如现代浓度400 ppmv对应轴值-3.4。稳定模型状态显示为方块，由实线直线段连接。推断的不稳定平衡分支用虚线示意（见正文）。所有模拟均无风驱海冰动力学和无海冰川流动。红色：海洋热传输因子<i>QF</i>=1，乘以GCM混合层海洋中的标称水平扩散系数。绿色：<i>QF</i>=0.5。蓝色：<i>QF</i>=0.25。品红色：<i>QF</i>=0。
                    </div>
                </figcaption>
            </figure>
        </section>
        
        <p>对于(i)，模型运行直到冰缘停止向赤道扩展（如果存在冰）或到达赤道。如果在赤道前停止，这是平衡曲线稳定分支上的一个点。实际GCM运行的最终冰纬度在图中显示为方块符号，由实线直线段连接。这些均位于上轴（90°）或中纬度。在某些情况下，当CO<sub>2</sub>低于特定值时，最终冰纬度突然降至赤道，赤道解未显示。在其他不利于冰扩展的情况下，冰线在CO<sub>2</sub>降至零时仍保持在中纬度。</p>
        
        <p>对于(ii)，如果冰开始从赤道退缩，预计（且总是如此）会一直退缩到极地，即无冰状态。这些显示为图中右侧上轴或下轴（90或0°纬度）的方块。</p>
        
        <p>冰线通过中纬度然后突然跳至100%冰覆盖的运行定义了中间稳定分支的低CO<sub>2</sub>极限。从100%突然跳至0%的运行定义了100%雪球稳定分支的高CO<sub>2</sub>极限。必须连接这两者的不稳定分支在图中手工绘制（虚线）。这些受限于从最低CO<sub>2</sub>运行的冰缘纬度开始，该运行未推进至赤道，在上述"(i)"运行中；不跨越（即保持在右侧）下一个最低CO<sub>2</sub>，其中冰确实推进至赤道（在运行之间使用0.2至0.5 log(ppv)的增量生成这些图）；并在0°纬度和最高CO<sub>2</sub>值处结束，该值在上述"(ii)"运行中仍允许100%冰覆盖。</p>
        
        <p>在初步工作（未显示）中，我们进行了许多额外运行，针对中纬度初始冰线和各种CO<sub>2</sub>值的多种组合，试图找到Jormungand状态并完全映射出CO<sub>2</sub>和冰线的整个二维空间行为，包括不稳定和稳定分支。<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980033e2" data-tab="pane-pcw-references">2011</a>]表明，从中纬度冰线开始对于GCM找到大多数Jormungand状态是必要的，这些状态被分岔曲线隐藏，无法从0或100%冰覆盖的初始状态访问（其图1和12）。我们进行了许多此类运行，初始冰线在约5至25°纬度范围内，但未找到任何Jormungand最终状态。尽管我们对此结论有信心，但我们也发现这些运行中冰退缩或推进的早期方向，甚至最终状态，有时取决于其他初始条件，如海洋温度梯度和冰厚度。因此，我们将后续探索限制在上述类型(i)和(ii)运行中，仅从0%或100%冰覆盖开始，并继续映射出CO<sub>2</sub>-冰线空间中稳定平衡分支的更广泛方面，如下所述。</p>
        
        <p>图<a href="#jgrd53826-fig-0001">1</a>显示平衡线（EL）强烈依赖于GCM混合层海洋中的海洋热传输。这通过将标准热传输系数乘以效率因子<i>QF</i>（在0至1之间变化）来参数化。较高的<i>QF</i>使冰更难推进（从热带获得更多海洋热量），因此曲线向左（更低CO<sub>2</sub>）移动，与<i>Donnadieu et al.</i> [<a href="#jgrd53826-bib-0017" class="bibLink tab-link" id="jgrd53826-bib-0017_R_d23980036e2" data-tab="pane-pcw-references">2004</a>]讨论的添加海洋动力学效应一致。对于<i>QF</i>≥0.5，没有崩溃至100%冰覆盖，且冰线在CO<sub>2</sub>一直降至零时收敛到中纬度的某个值。</p>
        
        <p>上述模拟无冰流，既无风驱薄冰动力学，也无海冰川变形。添加风驱动力学（图<a href="#jgrd53826-fig-0002">2</a>，绿色曲线）对低至约55°纬度的冰线影响非常小；对于更低CO<sub>2</sub>值，动态冰更容易扩展至赤道，阻止任何中间冰状态，类似于<i>Voight and Abbot</i> [<a href="#jgrd53826-bib-0049" class="bibLink tab-link" id="jgrd53826-bib-0049_R_d23980039e2" data-tab="pane-pcw-references">2012</a>]。</p>
        
        <section class="article-section__inline-figure">
            <figure class="figure" id="jgrd53826-fig-0002">
                <a target="_blank" href="/cms/asset/27d9f418-fbe2-4cc2-b4d7-03b8a468106d/jgrd53826-fig-0002-m.jpg">
                    <picture>
                        <source srcset="/cms/asset/27d9f418-fbe2-4cc2-b4d7-03b8a468106d/jgrd53826-fig-0002-m.jpg" media="(min-width: 1650px)">
                        <img class="figure__image" src="/cms/asset/c09e4725-d0f7-4918-b694-c7721a1bfcda/jgrd53826-fig-0002-m.png" data-lg-src="/cms/asset/27d9f418-fbe2-4cc2-b4d7-03b8a468106d/jgrd53826-fig-0002-m.jpg" alt="详情见图片后说明" title="详情见图片后说明" loading="lazy">
                    </picture>
                </a>
                <figcaption class="figure__caption">
                    <div class="figure__caption__header">
                        <strong class="figure__title">图2</strong>
                        <div class="figure-extra">
                            <a href="#" class="open-figure-link">在图表查看器中打开</a>
                            <a href="/action/downloadFigures?id=jgrd53826-fig-0002&amp;partId=&amp;doi=10.1002%2F2017JD026621" class="ppt-figure-link">
                                <i aria-hidden="true" class="icon-Icon_Download"></i>
                                <span>PowerPoint</span>
                            </a>
                        </div>
                    </div>
                    <div class="figure__caption figure__caption-text">
                        冰纬度与大气CO<sub>2</sub>的平衡曲线，针对动态海冰和海冰川流动。蓝色：无海冰动力学或海冰川流动（<i>QF</i>=0.25，如图<a href="#jgrd53826-fig-0001">1</a>蓝色曲线）。绿色：与蓝色相同，但有风驱动态海冰。红色：与蓝色相同，但有海冰川流动，且标称耦合系数决定冰基底海洋加热（<i>k</i>=70 W m<sup>−2</sup> K<sup>−1</sup>）。品红色：与红色相同，但<i>k</i>=2。棕色：与红色相同，但<i>k</i>=0。
                    </div>
                </figcaption>
            </figure>
        </section>
        
        <p>相比之下，添加海冰川流动的影响可能显著，但对涉及海洋温度的异步耦合方法敏感。在我们的标称模型中，在长期异步海冰川积分期间，从冰缘外推的GCM海洋温度无论海冰川如何推进都保持温暖，产生不合理的大垂直热通量进入冰基底并抑制推进。这在图<a href="#jgrd53826-fig-0002">2</a>红色曲线中显示，产生与无海冰川流动几乎相同的结果。</p>
        
        <p>我们可以粗略补偿这种偏差，通过减少系数<i>k</i>，该系数线性关联冰基底海洋加热与高于冻结的海洋温度（标称GCM值70 W m<sup>−2</sup>每°K）。如果<i>k</i>大幅减少，海冰川流动产生扩展的冰覆盖，要么在中纬度有稳定冰线（<i>k</i>=2，品红色曲线），要么对于零加热完全无稳定中间状态（<i>k</i>=0，棕色曲线）。（对于<i>k</i>=0的稳定状态，冰缘附近相对较小的大气融化必须平衡流动，等于所有上游降雪和基底冻结的面积积分。这在PK05中通过穿透性太阳辐射和低纬度内部融化实现，但这里内部融化被部分雪覆盖抑制，如下所述。）耦合GCM-海冰川流动的正确行为可能介于图中极端红色和棕色曲线之间，需要进一步工作确认；重要的是，对于本文，这些结果均未展示Jormungand类状态。</p>
        
        <p>接下来，我们考察对雪和冰反照率做不同假设的影响。如<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980049e2" data-tab="pane-pcw-references">2011</a>]强调，这些反照率是关键参数，因为Jormungand状态的存在依赖于裸冰和雪覆盖冰之间的反照率差异。（裸冰反照率可能低得多，特别是如果冰薄。）图<a href="#jgrd53826-fig-0003">3</a>青色曲线显示使用接近<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980052e2" data-tab="pane-pcw-references">2011</a>]的雪和冰反照率的效果。其他GCM海冰设置与其模型相同，即无风驱海冰动力学，无海冰川流动或穿透性太阳辐射导致内部冰融化。</p>
        
        <section class="article-section__inline-figure">
            <figure class="figure" id="jgrd53826-fig-0003">
                <a target="_blank" href="/cms/asset/db0d1d5d-70f1-482d-8d47-706a44a4e6b6/jgrd53826-fig-0003-m.jpg">
                    <picture>
                        <source srcset="/cms/asset/db0d1d5d-70f1-482d-8d47-706a44a4e6b6/jgrd53826-fig-0003-m.jpg" media="(min-width: 1650px)">
                        <img class="figure__image" src="/cms/asset/411fe209-80ca-40dc-8e41-a537123b807c/jgrd53826-fig-0003-m.png" data-lg-src="/cms/asset/db0d1d5d-70f1-482d-8d47-706a44a4e6b6/jgrd53826-fig-0003-m.jpg" alt="详情见图片后说明" title="详情见图片后说明" loading="lazy">
                    </picture>
                </a>
                <figcaption class="figure__caption">
                    <div class="figure__caption__header">
                        <strong class="figure__title">图3</strong>
                        <div class="figure-extra">
                            <a href="#" class="open-figure-link">在图表查看器中打开</a>
                            <a href="/action/downloadFigures?id=jgrd53826-fig-0003&amp;partId=&amp;doi=10.1002%2F2017JD026621" class="ppt-figure-link">
                                <i aria-hidden="true" class="icon-Icon_Download"></i>
                                <span>PowerPoint</span>
                            </a>
                        </div>
                    </div>
                    <div class="figure__caption figure__caption-text">
                        冰纬度与大气CO<sub>2</sub>的平衡曲线，针对不同冰和雪反照率。蓝色：GENESIS v3 GCM中的海冰和雪反照率（<i>QF</i>=0.25，如图<a href="#jgrd53826-fig-0001">1</a>蓝色曲线）。青色：与蓝色相同，但海冰和雪反照率接近<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980060e2" data-tab="pane-pcw-references">2011</a>]（见正文）。
                    </div>
                </figcaption>
            </figure>
        </section>
        
        <p>与GENESIS相比，<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980062e2" data-tab="pane-pcw-references">2011</a>]中（裸）海冰反照率更低，但雪反照率更高，平均GENESIS的两个波段（可见光和近红外，波长小于或大于0.7 μm），如表<a class="tableLink scrollableLink" title="Link to table" href="#jgrd53826-tbl-0001">1</a>所示。</p>
        
        <div class="article-table-content" id="jgrd53826-tbl-0001">
            <header class="article-table-caption">
                <span class="table-caption__label">表1.</span>
                GENESIS GCM中及修改为与<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980067e2" data-tab="pane-pcw-references">2011</a>]密切对应的海冰和雪反照率
            </header>
            
            <div class="article-table-content-wrapper" tabindex="0">
                <table class="table article-section__table">
                    <thead>
                        <tr>
                            <td class="bottom-bordered-cell right-bordered-cell center-aligned"></td>
                            <th class="bottom-bordered-cell center-aligned">海冰，低<a class="noteLink scrollableLink" data-noteid="jgrd53826-note-0001" title="Link to note" id="jgrd53826-note-0001_90-controller" href="#jgrd53826-note-0001_90" aria-haspopup="false" aria-expanded="true" aria-label="Note">a</a></th>
                            <th class="bottom-bordered-cell center-aligned">海冰，高<a class="noteLink scrollableLink" data-noteid="jgrd53826-note-0001" title="Link to note" id="jgrd53826-note-0001_91-controller" href="#jgrd53826-note-0001_91" aria-haspopup="false" aria-expanded="true" aria-label="Note">a</a></th>
                            <th class="bottom-bordered-cell center-aligned">雪，低</th>
                            <th class="bottom-bordered-cell center-aligned">雪，高</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="right-bordered-cell left-aligned">GENESIS</td>
                            <td class="center-aligned">0.70<a class="noteLink scrollableLink" data-noteid="jgrd53826-note-0002" title="Link to note" id="jgrd53826-note-0002_92-controller" href="#jgrd53826-note-0002_92" aria-haspopup="false" aria-expanded="true" aria-label="Note">b</a></td>
                            <td class="center-aligned">0.65</td>
                            <td class="center-aligned">0.75</td>
                            <td class="center-aligned">0.45</td>
                        </tr>
                        <tr>
                            <td class="right-bordered-cell left-aligned"><i>Abbot et al</i>.</td>
                            <td class="center-aligned">0.45<a class="noteLink scrollableLink" data-noteid="jgrd53826-note-0002" title="Link to note" id="jgrd53826-note-0002_93-controller" href="#jgrd53826-note-0002_93" aria-haspopup="false" aria-expanded="true" aria-label="Note">b</a></td>
                            <td class="center-aligned">0.38</td>
                            <td class="center-aligned">0.79</td>
                            <td class="center-aligned">0.66</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="article-section__table-footnotes">
                <ul>
                    <li id="jgrd53826-note-0001" class="footNotePopup__item" title="Footnote 1"><span><sup><i>a</i></sup> </span>“低”值是针对海冰或雪表面低于指定温度的情况，线性上升至“高”值在0°C，粗略考虑了在或接近熔点时液态水的存在。指定温度为GENESIS的-5°C和<i>Abbot et al.</i> [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980118e2" data-tab="pane-pcw-references">2011</a>]的-1°C。</li>
                    <li id="jgrd53826-note-0002" class="footNotePopup__item" title="Footnote 2"><span><sup><i>b</i></sup> </span>如果在GCM中启用穿透性太阳辐射的两流处理，海冰的低温值被修改：近红外波段：GENESIS中0.55，<i>Abbot et al</i>.中0.30；可见光波段：来自两流计算。</li>
                </ul>
            </div>
            <div class="article-section__table-source"></div>
        </div>
        
        <p>在我们的运行中，雪覆盖几乎无处不在（与<i>Abbot et al</i>.不同），如下一节所示。这可能至少部分解释了为什么我们找不到Jormungand状态。雪反照率差异占主导（<i>Abbot et al</i>.中更亮，对相同CO<sub>2</sub>水平产生更低温度），因此<i>Abbot et al</i>.反照率的EL曲线（图<a href="#jgrd53826-fig-0003">3</a>青色）略微向右（更高CO<sub>2</sub>）移动。这条曲线形式与<i>Abbot et al</i>.非常不同，后者稳定分支曲率更大（也有Jormungand状态）。我们将此归因于我们GCM中雪覆盖的行为，海冰几乎100%被雪覆盖，在冰缘附近仍部分被雪覆盖，基本无100%无雪冰。这与<i>Abbot et al</i>. [<a href="#jgrd53826-bib-0003" class="bibLink tab-link" id="jgrd53826-bib-0003_R_d23980168e2" data-tab="pane-pcw-references">2011</a>]和<i>Voight and Abbot</i> [<a href="#jgrd53826-bib-0049" class="bibLink tab-link" id="jgrd53826-bib-0049_R_d23980170e2" data-tab="pane-pcw-references">2012</a>]模型中冰缘附近无雪冰带非常不同。</p>
        
</body>
</html>