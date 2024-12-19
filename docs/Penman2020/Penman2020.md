<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<div>
    <h1>硅酸盐风化在地球气候与碳循环中的反馈与作用</h1>
    <p>
        作者：Donald E. Penman<sup>a,b</sup>，Jeremy K. Caves Rugenstein<sup>c</sup>，Daniel E. Ibarra<sup>d</sup>，Matthew J. Winnick<sup>e</sup>
    </p>
    <p>
        <em>a</em> 犹他州立大学地球科学系，美国犹他州洛根<br>
        <em>b</em> 耶鲁大学地质与地球物理系，美国康涅狄格州纽黑文<br>
        <em>c</em> 瑞士苏黎世联邦理工学院地球科学系，瑞士苏黎世<br>
        <em>d</em> 斯坦福大学地质科学系，美国加利福尼亚州斯坦福<br>
        <em>e</em> 马萨诸塞大学地球科学系，美国马萨诸塞州阿默斯特
    </p>

    <h2>文章信息</h2>
    <p>
        关键词：硅酸盐风化、碳循环、地球系统建模、古气候学、碳排放、大气二氧化碳
    </p>

    <h2>摘要</h2>
    <p>
        当前关于长期碳循环的理解认为，地球气候通过硅酸盐矿物化学风化消耗CO<sub>2</sub>的负反馈得以稳定。
        这一理论指出硅酸盐风化对气候的响应：当大气CO<sub>2</sub>分压（pCO<sub>2</sub>）和地表温度升高时，
        化学风化加速，消耗更多的大气CO<sub>2</sub>，从而冷却全球气候；而当pCO<sub>2</sub>下降时，
        风化通量减少，允许CO<sub>2</sub>积累并导致气候变暖。
    </p>
    <p>
        然而，全球风化速率对大气pCO<sub>2</sub>的函数依赖性（即“风化曲线”）仍存在高度不确定性，
        文献中提出了多种数学形式来描述这一关系。我们探讨了影响这一关系的因素，以及这些因素如何在地球历史中发生变化。
        随后，我们重新审视了经典的碳循环模型实验，展示了选择不同风化曲线对地球系统应对多种气候和碳循环扰动类型的深远影响。
    </p>
    <p>
        首先，风化曲线的斜率决定了碳释放事件后pCO<sub>2</sub>恢复的时间尺度以及pCO<sub>2</sub>升高的“长尾”效应。
        其次，地球风化曲线的性质决定了pCO<sub>2</sub>对火山CO<sub>2</sub>脱气变化的响应，而火山脱气速率在地质时间尺度上显著变化。
        最后，我们展示了随着时间推移，构造或进化过程等因素驱动的风化曲线变化如何作为一种作用力，
        除了作为反馈机制外，也在碳循环和气候中发挥作用。
    </p>
    <p>
        这些实例强调了约束地球风化曲线的重要性，这对于改进我们对过去碳循环扰动的理解以及预测人为碳排放对长时间尺度的影响至关重要。
    </p>

    <h2>公式</h2>
    <p>
        硅酸盐风化的一个经典化学反应式如下：
    </p>
    <p>
        <span>
        \[
        \text{CaSiO}_3(s) + 2\text{CO}_2(g) + 3\text{H}_2\text{O} \rightarrow \text{Ca}^{2+} + 2\text{HCO}_3^- + \text{H}_4\text{SiO}_4
        \]
        </span>
    </p>
    <p>
        该反应生成的产物包括硅酸（H<sub>4</sub>SiO<sub>4</sub>）、溶解无机碳（HCO<sub>3</sub><sup>-</sup>）和阳离子（如Ca<sup>2+</sup>）。
        这些产物可溶于水，通过大陆径流进入海洋。
    </p>
    <p>
        长时间尺度（> 10<sup>4</sup>年）内，这些物质通过以下反应平衡海洋的碱度和溶解硅含量：
    </p>
    <p>
        <span>
        \[
        \text{Ca}^{2+} + 2\text{HCO}_3^- \rightarrow \text{CaCO}_3(s) + \text{CO}_2 + \text{H}_2\text{O}
        \]
        </span>
    </p>
    <p>
        同时，释放的硅酸促进了生物硅藻土的沉积与埋藏：
    </p>
    <p>
        <span>
        \[
        \text{H}_4\text{SiO}_4 \rightarrow \text{SiO}_2(s) + 2\text{H}_2\text{O}
        \]
        </span>
    </p>
    <p>
        最终，这些反应可以用以下净反应表示：
    </p>
    <p>
        <span>
        \[
        \text{CaSiO}_3(s) + \text{CO}_2(g) \rightarrow \text{CaCO}_3(s) + \text{SiO}_2(s)
        \]
        </span>
    </p>
    <p>
        该净反应体现了CO<sub>2</sub>的净消耗。
    </p>
</div>
<div>
    <p>
        硅酸盐风化与碳酸盐埋藏的平衡导致了CO<sub>2</sub>的净消耗。
        在稳态条件下（即没有碳释放事件等扰动，且碳输入与输出基本平衡以维持地球长期宜居性），
        硅酸盐风化和碳酸盐埋藏消耗的CO<sub>2</sub>必须平衡火山CO<sub>2</sub>的排放，
        以及来自暴露沉积岩的有机碳氧化总量减去作为沉积埋藏移除的碳量，从而闭合外源碳循环的通量预算（Berner and Caldeira, 1997; Broecker and Sanyal, 1998; Caves et al., 2016; Zeebe and Caldeira, 2008）。
    </p>
    <p>
        在碳释放事件期间和之后，硅酸盐风化（见公式1）加速，导致长期内碳酸盐埋藏的增加（见公式2），
        并作为CO<sub>2</sub>的净汇（见公式4），直到多余的大气CO<sub>2</sub>被移除且碳通量恢复到稳态。
    </p>
    <p>
        多种独立的沉积和地球化学证据表明，在地球历史中的碳循环扰动后，风化反馈起到了作用。
        例如，在新元古代“雪球地球”事件后广泛分布的盖帽碳酸盐的沉积（Hoffman et al., 1998）需要显著增加向海洋输送的碱度。
        这一增加被认为与极端温室气候下的高风化通量有关，这种气候条件是终止“雪球地球”冰川的必要条件（Higgins and Schrag, 2002; Penman and Rooney, 2019）。
    </p>
    <p>
        在古新世-始新世极热事件（PETM，约5600万年前）之后，碳酸盐沉积速率升高（Kelly et al., 2010），
        方解石补偿深度（CCD）加深（Penman et al., 2016），表明在事件期间大气pCO<sub>2</sub>升高和快速碳输入的情况下，向海洋输送的碱度增加。
        此外，在三叠纪-侏罗纪灭绝事件（Ritterbush et al., 2015）、PETM（Penman, 2016）以及随后始新世极热事件（Penman et al., 2019）之后，海洋SiO<sub>2</sub>埋藏量增加，
        反映出溶解Si向海洋输送的增强。
    </p>
    <p>
        多种地球化学代理指标（如海水中锶、锇、钙和锂同位素组成，记录于海洋碳酸盐中）显示出与显生宙大多数已知的碳循环和气候扰动一致的大幅偏移，
        包括赫南特冰期（Pogge von Strandmann et al., 2017）、二叠纪-三叠纪灭绝事件（Korte et al., 2003）、三叠纪-侏罗纪灭绝事件（Kuroda et al., 2010）、
        中生代海洋缺氧事件（OAEs）（Pogge Von Strandmann et al., 2013; Turgeon and Creaser, 2008）以及PETM（Dickson et al., 2015; Ravizza et al., 2001）。
    </p>
    <p>
        在没有扰动的情况下，外源碳输入与输出通量之间的长期（即约100万年）不平衡很小（<2%），
        冰芯pCO<sub>2</sub>数据（Zeebe and Caldeira, 2008）和新生代的pCO<sub>2</sub>代理与碳循环数据（Caves et al., 2016）都证明了这一点，表明负反馈的存在。
        虽然外源碳预算中的其他通量（如有机碳的净埋藏（France-Lanord and Derry, 1997; Hilton, 2017）或硫化物的氧化（Torres et al., 2014））可能随着时间发生显著变化，
        但这些过程对气候的负反馈响应的证据相对较少。
    </p>
    <p>
        尽管普遍认为风化反馈存在，但对全球风化速率对气候和pCO<sub>2</sub>变化敏感性的估计差异很大。
        这种关系可以理解为全球综合硅酸盐风化速率（以每年消耗的碳摩尔数表示，通过平衡的硅酸盐风化与碳酸盐埋藏反应[公式4]）与大气pCO<sub>2</sub>的函数，
        我们称之为地球的“风化曲线”。
    </p>
    <p>
        多项研究尝试用不同的函数形式描述这一关系，导致所提出的风化曲线的形状和斜率差异很大（见图1）。
        这种差异源于对控制风化速率的气候因素以及这些气候因素如何对pCO<sub>2</sub>变化作出响应的不确定性。
    </p>
    <figure>
        <img src="https://ars.els-cdn.com/content/image/1-s2.0-S0012825220303445-gr1.jpg" alt="风化曲线图">
        <figcaption>
            图1. 
            <br>
            A) 已发表的地球风化曲线函数形式，展示大气pCO<sub>2</sub>与全球硅酸盐风化通量（以每年消耗的CO<sub>2</sub>摩尔数表示，通过平衡硅酸盐风化和随后的碳酸盐埋藏[公式4]）的关系（Walker et al., 1981; Walker and Kasting, 1992）。
            多条建议曲线的共同点（280 ppm，5 × 10<sup>12</sup>摩尔/年）表示硅酸盐风化与火山脱气的工业化前平衡（例外情况包括（Caves et al., 2016）提出的始新世案例，以及GEOCARB（Berner and Kothavala, 2001），其使用了稍不同的火山脱气速率估计值）（参见Payne和Kump, 2007中GEOCARB方程的表述）。
            n<sub>Si</sub> = 0.6 和 n<sub>Si</sub> = 0.2 分别表示在我们的碳循环模拟中使用的“强”风化曲线和“弱”风化曲线，
            它们遵循先前许多研究中采用的广义幂律形式（公式6）（例如，Zeebe, 2012; Uchikawa和Zeebe, 2008; Walker和Kasting, 1992），
            并被选择用于大致涵盖先前风化曲线公式所考虑的硅酸盐风化反馈强度范围。
            <br>
            B) 来自现代硅酸盐流域和全球河流的风化关系，用于硅酸盐风化通量（HCO<sub>3</sub><sup>-</sup>通量）研究（von Blanckenburg et al., 2015后的归一化）。
            蓝线表示花岗岩流域，红线表示玄武岩流域，黑线表示全球河流。
            此处显示的关系包括：由Bluth和Kump（1994）以及Hartmann等人（2009）校准的幂律关系；
            由Maher和Chamberlain（2014）根据现代全球河流和单一岩性流域的数据（Gaillardet et al., 1999；Ibarra et al., 2016）校准的反应传输方程；
            以及由Dessert等人（2003）提出的Arrhenius方程（Li et al., 2016a）。
            黑色细线（从上到下）分别对应于克拉通、全球平均值和假设花岗岩岩性的山地环境（详见Maher和Chamberlain（2014））。
            所有关系均被归一化为在现代平均径流条件下的风化通量值（见图B）。
            上方的RCO<sub>2</sub>轴（RCO<sub>2</sub> = pCO<sub>2</sub> / 工业化前pCO<sub>2</sub>）对应于二氧化碳浓度翻倍时最大径流敏感性为10%（Manabe et al., 2004；Ibarra et al., 2016）。
            <br>
            C) 图B中显示的相同风化曲线在HCO<sub>3</sub><sup>-</sup>通量（t/km<sup>2</sup>/年）对径流（m/年）空间中绘制，
            并与单一岩性流域（玄武岩和花岗岩）的HCO<sub>3</sub><sup>-</sup>通量平均值（编自Ibarra et al., 2016）以及全球河流的硅酸盐HCO<sub>3</sub><sup>-</sup>通量反演模型校正值（Gaillardet et al., 1999；Moon et al., 2014）对比。
            灰色竖线表示在图B中用于归一化的全球平均值。（关于此图例中颜色的解释，请参阅本文网络版）。
        </figcaption>
    </figure>
    <p>
        在本文中，我们重新审视了地球风化曲线可能的控制因素，并使用碳循环模型详细阐述了风化曲线形状和斜率的不确定性如何显著影响我们对地球系统应对短期和长期碳循环扰动的理解。
        我们扩展了以往的碳循环实验，并展示了几个实例，说明地球风化曲线的不确定性如何限制我们对显生宙期间气候长期变化驱动因素和短期碳循环（<10<sup>6</sup>年）扰动恢复过程的理解。
    </p>
    <p>
        此外，我们提出了可能的研究路径，并对风化曲线形状的潜在约束条件进行了探讨。
    </p>
</div>

