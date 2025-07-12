<div id="head">A&A 667, A19 (2022)<h2 class="title">使用SLOPpy表征系外行星大气</h2>
<div class="article-authors"><p class="bold"><span id="aa44055-22-author-1" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=1" class="author">D. Sicilia</span><sup>1</sup><sup>,2</sup>, <span id="aa44055-22-author-2" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=2" class="author" data-hasqtip="2">L. Malavolta</span><sup>2</sup><sup>,3</sup>, <span id="aa44055-22-author-3" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=3" class="author" data-hasqtip="1">L. Pino</span><sup>4</sup>, <span id="aa44055-22-author-4" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=4" class="author" data-hasqtip="0">G. Scandariato</span><sup>1</sup>, <span id="aa44055-22-author-5" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=5" class="author" data-hasqtip="3">V. Nascimbeni</span><sup>3</sup>, <span id="aa44055-22-author-6" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=6" class="author">G. Piotto</span><sup>2</sup> 和 <span id="aa44055-22-author-7" data-url="/component/author/?dkey=10.1051/0004-6361/202244055&amp;n=7" class="author">I. Pagano</span><sup>1</sup></p><button class="btn btn-primary btn-small btn-aff">+</button></div>
<p class="aff" style="display: none;"><sup>1</sup> 
 INAF – 卡塔尼亚天体物理观测站, 
Via S. Sofia 78, 
 95123  
 卡塔尼亚,  意大利 

<br>电子邮箱: daniela.sicilia@inaf.it<br><sup>2</sup> 
帕多瓦大学物理与天文系, 
 Vicolo dell'Osservatorio 3, 
 35122  
 帕多瓦,  意大利 <br><sup>3</sup> 
 INAF – 帕多瓦天文观测站, 
 Vicolo dell'Osservatorio 5, 
 35122  
 帕多瓦,  意大利 <br><sup>4</sup> 
 INAF – 阿切特里天体物理观测站, 
Largo E. Fermi 5, 
 50125  
 佛罗伦萨,  意大利 <br></p>
<p class="history"><span class="bold">收稿日期: </span>
2022年
5月
19日
<br><span class="bold">接受日期: </span>
2022年
8月
19日
</p>
<p class="bold"><a name="abs"></a>摘要</p>
<p>透射光谱是最有效的技术之一，可用于推断凌日行星高层大气中的主要不透明度来源，并约束热层和未束缚外逸层的组成。缺乏能够自动提取高分辨率透射光谱的公开工具，造成了科学研究结果的可重复性问题。因此，很难比较不同研究小组获得的结果，也难以对系外行星大气进行同质化表征。在这项工作中，我们提出了一个标准化、公开可用、用户友好的工具SLOPpy（Spectral Lines Of Planets with python），用于尽可能准确地自动提取和分析系外行星的光学透射光谱。SLOPpy首先执行几个数据还原步骤，以校正输入光谱中的天空发射、大气色散、地球大气特征和星际线、临边昏暗效应以及Rossiter-McLaughlin效应，使其成为最先进的工具。该管道已成功应用于HARPS和HARPS-N对大气表征理想目标的数据。为了初步评估代码性能并验证其适用性，我们在此展示与先前其他工作对HD 189733 b、WASP-76 b、WASP-127 b和KELT-20 b分析结果的比较。通过比较我们与其他工作分析相同数据集的结果，我们得出结论：该工具在大多数情况下给出的结果与已发表结果在1σ范围内一致，同时使用SLOPpy提取行星信号时具有相似或更高的统计显著性。</p>
<div class="kword"><p><span class="bold">关键词: </span>行星与卫星：大气 / 技术：光谱 / 方法：数据分析</p></div>
</div><h2 class="sec">
<a name="S1"></a>1 引言</h2><p>过去二十年系外行星的发现揭示了太阳系外行星系统非常普遍，且在质量、半径、温度和轨道参数方面极其多样化。表征它们的大气对于更好地理解这些系统的形成和演化是必要的（<a name="InR55"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R55">Öberg et al. 2011</a>; <a name="InR53"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R53">Mordasini et al. 2016</a>; <a name="InR22"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R22">Cridland et al. 2019</a>）。此外，系外行星大气是研究其化学成分和全球大气动力学（如环流）的理想实验室（<a name="InR79"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R79">Snellen et al. 2010</a>; <a name="InR40"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R40">Kataria et al. 2016</a>），压力-温度（P-T）剖面中是否存在热反转（<a name="InR45"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R45">Kreidberg et al. 2018</a>; <a name="InR3"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R3">Pino et al. 2020</a>），行星物质逃逸（<a name="InR80"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R80">Spake et al. 2018</a>; <a name="InR56"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R56">Owen 2019</a>）以及云的形成（<a name="InR74"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R74">Sing et al. 2015</a>; <a name="InR36"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R36">Helling 2019</a>）。</p><p>通过使用各种空间和地面设施的测光和光谱方法，在探测系外行星大气特征方面取得了进展（<a name="InR24"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R24">Deming &amp; Seager 2017</a>）。由<a name="InR19"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R19">Charbonneau et al. (2002)</a>开创的透射光谱是最有效的技术之一，可用于推断凌日行星大气中的主要不透明度来源，并从热行星的深层（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R40">Sing et al. 2016</a>）到热层（<a name="InR66"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R66">Redfield et al. 2008</a>; <a name="InR91"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach et al. 2015</a>）乃至未束缚的外逸层（<a name="InR87"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R87">Vidal-Madjar et al. 2003</a>; <a name="InR28"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R28">Ehrenreich et al. 2015</a>）约束其组成。</p><p>对于大多数目标，地面仪器的低光谱分辨率（R ~ 10<sup>2</sup>）不适合稳健地检测元素或分子吸收特征，因为（1）地球大气污染难以或无法处理，（2）低分辨率透射光谱只能探测大气的最深层，因为最外层的信息编码在谱线的窄核中。另一方面，高分辨率（R ~ 10<sup>5</sup>）、超稳定光谱仪，如ESO望远镜上的HARPS（高精度径向速度行星搜索仪）（<a name="InR52"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R52">Mayor et al. 2003</a>），北半球的对应仪器TNG上的HARPS-N（<a name="InR21"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R21">Cosentino et al. 2012</a>）以及8米VLT上的ESPRESSO（<a name="InR59"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R59">Pepe et al. 2014</a>），可以到达系外行星大气的上层，为这一研究领域提供了极其有趣的机会。</p><p>借助高分辨率光谱（HRS），可以唯一识别宽分子带，如H<sub>2</sub>O、CO、TiO和CH<sub>4</sub>的分子带（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R79">Snellen et al. 2010</a>; <a name="InR10"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R10">Brogi et al. 2016</a>; <a name="InR2"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R2">Allart et al. 2017</a>），而Na和K等单原子线可以光谱解析，其形状和速度分量可以详细分析（<a name="InR9"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R9">Brogi et al. 2014</a>; <a name="InR42"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R42">Keles et al. 2019</a>）。这也允许通过它们不同的径向速度位移来区分恒星、行星、星际和地球大气信号，并以高保真度检测行星大气中的特定分子，这在低分辨率数据中是不可能明确看到的。雾霾或云的存在可能会掩盖透射光谱中的分子特征；HRS有可能探测云层以上的更高高度，从而约束多云系外行星的大气丰度（例如，<a name="InR32"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R32">Gandhi et al. 2020</a>; <a name="InR38"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R38">Hood et al. 2020</a>）。然而，气溶胶的存在可能会在检索值中引入一些退化，例如物种丰度、参考压力和大气温度之间的退化（<a name="InR8"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R8">Brogi &amp; Line 2019</a>）。</p><p>HRS还使我们能够获得关于行星大气的重要运动学信息。通过分析谱线的精细形状，可以追踪P-T剖面；通过谱线轮廓的加宽，可以检测大气的超旋转；通过谱线的多普勒位移，我们可以了解是否存在高海拔风（例如，<a name="InR93"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R93">Wyttenbach et al. 2020</a>; <a name="InR17"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R17">Cauley et al. 2021</a>; <a name="InR57"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R57">Pai Asnodkar et al. 2022</a>）。此外，HRS消除了对参考恒星的需求，该恒星需要同时满足在天空中靠近目标且亮度相似的条件——这两个很少同时满足的条件限制了低分辨率分光光度研究。相比之下，HRS数据在分析过程中本身被归一化到恒星连续谱，因此只需要准确的地球大气校正和对恒星-行星系统径向速度的仔细分析。然而，归一化地面高分辨率光谱的连续谱（这是数据还原的强制性步骤）会丢失关于连续谱本身的信息。因此，结合空间低至中分辨率光谱（包括最近发射的JWST）和地面HRS检索的透射光谱具有高度协同作用，可以打破这些退化并正确解释复杂的透射特征（<a name="InR11"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R11">Brogi et al. 2017</a>; <a name="InR61"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R61">Pino et al. 2018b</a>; <a name="InR43"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R43">Khalafinejad et al. 2021</a>），为它们的全球建模添加关键信息。</p><p>最后，有大量为其他目的（如测量Rossiter-McLaughlin效应及其波长依赖性）在凌日期间获得的高分辨率光谱档案可用于进一步分析（<a name="InR77"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R77">Snellen 2004</a>; <a name="InR18"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R18">Cegla et al. 2016</a>; <a name="InR29"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R29">Esposito et al. 2017</a>; <a name="InR51"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R51">Mancini et al. 2018</a>）。这可以确定行星轨道平面和恒星赤道之间的天空投影角。</p><p>缺乏能够自动提取行星大气高分辨率透射光谱的公开工具，造成了科学研究结果的可重复性问题，因为算法实现中的许多细节可能为了可读性而未在论文中报告。使用不同的算法使得比较不同工作组获得的结果相当困难。</p><p>在本文中，我们介绍了SLOPpy（Spectral Lines Of Planets with python），一个用户友好、公开可用的工具，用于同质地提取和分析由高分辨率、超稳定光谱仪获得的透射光谱。最初需要几个还原步骤以获得最可靠的透射光谱。SLOPpy是第一个公开的工具，除了使用当前最先进的技术外，还考虑了恒星效应（如临边昏暗和Rossiter-McLaughlin效应）的处理，这些效应对分析目的非常重要。该管道是模块化和通用的，足以支持新的高分辨率设施，尽管目前仅支持HARPS和HARPS-N。此外，代码架构提供了简单的修改和扩展手段。</p><p>本文组织如下：<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S2">第2节</a>提供了软件描述和管道阶段的概述；<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S3">第3节</a>说明了管道中实现的两种不同方法来计算光谱特征的吸收深度；在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S4">第4节</a>中，我们报告了将SLOPpy应用于已被其他工作分析过的不同目标（HD 189733 b（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach et al. 2015</a>; <a name="InR13"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R13">Casasayas-Barris et al. 2017</a>）、WASP-76 b（<a name="InR70"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R70">Seidel et al. 2019</a>）、WASP-127 b（<a name="InR39"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R39">Žák et al. 2019</a>; <a name="InR72"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R72">Seidel et al. 2020b</a>）和KELT-20 b（<a name="InR15"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R15">Casasayas-Barris et al. 2019</a>））获得的结果；最后，在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S5">第5节</a>中可以找到关于管道的总结和未来展望。</p>
<h2 class="sec">
<a name="S2"></a>2 软件描述</h2><h3 class="sec2">
<a name="S21"></a>2.1 目标与架构</h3><p>该管道的科学目标是通过检测光学透射光谱中的谱线来表征系外行星的大气。基本上，为了提取透射光谱，管道所做的是比较在凌日期间获取的光谱（包含行星信号）与凌日外获取的光谱（在行星进入前和离开后）。为了获得尽可能准确的透射光谱，SLOPpy首先应用几个还原步骤来校正输入光谱中的天空发射、大气色散、地球大气特征和星际线、临边昏暗效应（CLV）以及Rossiter-McLaughlin（RM）效应。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S24">第2.4节</a>详细解释了每个还原步骤。</p><p>该管道的主要特点之一是其"模块化"：分析中的每个独立步骤都由一个独立的子程序执行，用户可以通过在配置文件中简单地添加或删除相关关键字来决定是否应用它。得益于管道的模块化，用户可以检查每个独立步骤对最终透射光谱的影响；还可以看到如果不应用特定校正，结果会如何变化。通过这种方式，用户可以轻松理解和分析每个数据还原步骤对输入数据的科学影响。将代码分为独立的"计算"和"绘图"模块，允许在大型数据集或服务器机器上批量执行。SLOPpy的其他非常重要的特点是"可重复性"（例如，对于给定的配置文件，用户总是得到相同的结果）和"数据持久性"（例如，用户可以提取和分析中间产物和给定步骤的输出，而无需重新运行分析）。</p>
<p>我们尝试尽可能通用地开发代码：所有仪器属性（如光谱分辨率或阶梯光栅级数）都硬编码在Python字典中，每个支持的仪器对应一个字典，而一个特定的子程序负责将仪器数据还原软件输出的数据适配到SLOPpy使用的内部标准。尽管在撰写本文时管道仅支持HARPS和HARPS-N，但我们的方法确保与其他高分辨率光谱仪（如PEPSI（<a name="InR83"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R83">Strassmeier et al. 2015</a>）、CARMENES（<a name="InR65"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R65">Quirrenbach et al. 2016</a>）和ESPRESSO（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R59">Pepe et al. 2014</a>））或任何其他光谱仪（在任何波长范围内，只要能保证良好的夜间稳定性）具有更广泛的兼容性。</p>
<p>SLOPpy管道完全用Python 3编写。它在Github上公开可用<sup><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FN2">1</a></sup>（附有简要手册和一些示例数据），我们进一步鼓励天文学界使用它。</p>
<h3 class="sec2">
<a name="S22"></a>2.2 数据集准备</h3><p><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F1">图1</a>展示了SLOPpy执行的数据集准备流程图。为了成功提取透射光谱，SLOPpy需要高分辨率二维光谱和两种必须手动输入的文件。第一种是用YAML<sup><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FN3">2</a></sup>编写的单一配置文件，这是一种适合编写复杂配置文件的人类可读结构化数据格式。</p>
<p>关于配置文件整体结构的概述及其背后理念的简要描述可以在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S23">第2.3节</a>找到。SLOPpy需要的第二种文件是要分析的观测列表，包括凌日内和凌日外的观测，每个夜晚需要自己的列表。首次启动SLOPpy时，对于每个夜晚，将根据配置文件中提供的行星第一次和第四次接触之间的凌日持续时间、第二次和第三次接触之间的凌日持续时间（当已知时）、曝光时间和凌日中点时间，自动创建另外三个文件，分别列出"凌日内"和"完全凌日内"光谱以及"凌日外"光谱。</p>
<p>在读取相关文件列表并检索仪器特性后，管道计算并保存pickle文件中从一个参考系统移动到另一个参考系统所需的径向速度（RV）位移。例如，要将光谱从观测者参考系（ORF）移动到恒星参考系（SRF），我们需要考虑系统速度（<i>v</i><sub>sys</sub>），以及由于行星存在引起的RV变化和每次曝光时的地球重心径向速度（BERV）。虽然后者通常由天文台和/或标准数据还原软件在FITS文件头中提供，但其他贡献可以直接通过拟合观测光谱上的径向速度得出。然而，Rossiter-McLaughlin异常在将凌日内光谱移动到SRF时不会干扰。因此，在缺乏已知轨道参数的情况下，我们建议仅使用凌日外光谱来线性拟合恒星RVs。</p>
<p>最后，在对所有可用夜晚重复上述步骤后，管道定义并保存所有夜晚的共享数组（例如波长数组）。这些对于构建合并光谱和主凌日外光谱（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S245">第2.4.5节</a>）是必要的。</p>
<a name="F1"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F1.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig1_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F1.html" target="_blank"><span class="bold">图1</span></a><p>SLOPpy的流程示意图：数据集准备。顶部区域表示用户输入（橙色区分必须手动输入的数据）。粉色框表示存储的数据。</p>
</td>
</tr></tbody></table></div>
<h3 class="sec2">
<a name="S23"></a>2.3 配置文件</h3>
<p>配置文件被视为记录和存储所有可能最终影响最终透射光谱的参数的地方，因此用户可以立即访问数据还原和分析的详细信息，而无需深入研究代码。在这种情况下，我们尽可能避免使用硬编码参数，更喜欢可以在配置参数中明确指定的关键字——在易于访问的默认字典中声明回退值。配置文件主要分为四个部分：</p>
<h4 class="sec3">
<a name=""></a>管道和绘图</h4>
<p>在这里，用户可以列出需要执行的分析模块和要显示的图表。每个数据还原步骤都附带一个同名的绘图模块，因此检查每个还原步骤的结果很简单。重要的是要记住，分析和绘图是独立执行的，也就是说，用户可以随时修改绘图列表，而无需再次执行耗时的分析，即使是中间步骤。</p>
<h4 class="sec3">
<a name=""></a>夜晚和仪器</h4>
<p>假设在一个夜晚只能观测一个给定目标的一次凌日，本节详细说明每个夜晚收集的数据集的特征，例如所有光谱、凌日内光谱、完全凌日内光谱和凌日外光谱的列表，凌日中点时间（<i>T</i><sub>c</sub>），以及用于收集观测的仪器。为了提高可读性，仪器属性（如分辨率和波长范围）在单独的部分中详细说明，因此如果多个数据集是用同一仪器获得的，不需要重复相同的信息。</p>
<a name="F2"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F2.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig2_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F2.html" target="_blank"><span class="bold">图2</span></a><p>SLOPpy的流程示意图：数据还原。橙色框表示用户可以打开/关闭的模块。</p>
</td>
</tr></tbody></table></div>
<h4 class="sec3">
<a name=""></a>还原步骤</h4>
<p>配置文件的以下部分专门用于还原过程的特定步骤，并包含可能最终影响最终透射光谱的重要参数。例如，差分折射校正（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S242">第2.4.2节</a>）可以逐阶计算或一次性计算整个光谱，可以用多项式或样条执行，迭代地并通过sigma-clipping去除异常值。所有相关参数可以由用户指定；此外，如果特定数据集需要不同的处理，某些部分可以在特定数据集或仪器下复制。用于参考系统变化和CLV计算的恒星和行星参数也在配置文件的这一部分中列出。</p>
<h4 class="sec3">
<a name=""></a>谱线</h4>
<p>本节列出了要分析的谱线。对于每条线，用户可以指定：计算透射光谱的光谱范围，必须足够宽以包含恒星线和连续谱；用于计算相对吸收深度的左右参考带和中心通带（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S3">第3节</a>）；用于拟合最终透射光谱的马尔可夫链蒙特卡洛（MCMC）分析的拟合参数（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S248">第2.4.8节</a>）；用于光谱和模型归一化的多项式次数。</p>
<a name="F3"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F3.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig3_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F3.html" target="_blank"><span class="bold">图3</span></a><p>SLOPpy应用于HD 209458 b光谱Na <span class="smallcaps">i</span>双线区域的天空校正示例。<i>上图：</i>来自光纤A的输入光谱；<i>中图：</i>来自光纤B的天空发射光谱；<i>下图：</i>校正后的光谱。所有光谱都根据时间进行颜色编码。</p>
</td>
</tr></tbody></table></div>
<h3 class="sec2">
<a name="S24"></a>2.4 数据还原步骤</h3>
<p>标准数据还原已由天文台数据还原软件（DRS，ESO版本3.5-3.8和TNG版本3.7）执行。DRS生成二维光谱（e2ds）和一维光谱（sld）。第一种是浮点二维数组，其中每行包含一个光谱级的提取通量，单位为光电子。第二种是浮点数组，包含重新分箱和合并的光谱级，以相对通量校正仪器响应。虽然e2ds光谱参考ORF，但sld光谱校正了BERV，即sld光谱参考太阳系重心（BRF）。我们决定使用e2ds光谱而不是sld光谱，因为后者已经经过第一次重新分箱步骤和参考系统的变化（从ORF到BRF），而每次重新分箱不可避免地会引入相关噪声。</p>
<p>在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F1">图1</a>所示的数据集准备之后，为了提取透射光谱，SLOPpy执行一系列还原步骤，这些步骤在以下部分中描述并在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F2">图2</a>中示意。为了避免引入不必要相关噪声，我们尽量避免改变观测光谱的参考系统，宁愿增加计算成本也不降低整体分析精度（见例如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S246">第2.4.6节</a>和<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S247">第2.4.7节</a>）。</p>
<h4 class="sec3">
<a name="S241"></a>2.4.1 天空校正</h4>
<p>有时观测会受到天空发射特征的影响。这些特征在夜间和季节中的演变方式与地球大气吸收线不同。天空亮度的主要贡献是气辉和黄道光；特别是气辉，来自地球的高层大气（海拔90至200公里之间），在可见光区域产生主导线，即中性氧的半禁线5577 Å，其双线6300和6363 Å以及钠双线5890和5896 Å。这些发射线在整个夜间持续存在，有时变化不可预测。</p>
<p>使用HARPS/HARPS-N，可以借助专用光纤（称为光纤B）同时检索天空光谱，该光纤指向目标恒星周围约10角秒的固定位置，确保两种光谱中的大气条件完全相同<sup><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FN4">3</a></sup>。管道通过从恒星光谱中减去天空光谱来校正这些特征，同时考虑光纤的不同透射率。为此，天空光谱首先乘以两个光纤的灯通量比。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F3">图3</a>展示了一个示例。</p>
<p>从档案光谱的分析中，我们无法确定天空光谱与季节、观测时间、天空位置或天气条件的任何相关性。因此，强烈建议始终收集具有同步天空观测的透射光谱数据。</p>
<a name="F4"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F4.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig4_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F4.html" target="_blank"><span class="bold">图4</span></a><p>SLOPpy应用于2018-07-20夜间用HARPS-N检索的KELT-9 b输入光谱的差分折射校正示例。</p>
</td>
</tr></tbody></table></div>
<h4 class="sec3">
<a name="S242"></a>2.4.2 差分折射</h4>
<p>地面观测受到由空气折射率随波长变化引起的大气色散的影响。由于差分折射，恒星在望远镜焦平面中的位置因波长而异，随着空气质量的增加，这种影响变得更严重。如果不校正，它会影响地球大气校正，进而影响透射光谱。</p>
<p>为了计算作为波长函数的校正因子，管道首先将每个观测与通过合并所有凌日外观测获得的参考光谱相除，在SRF中考虑恒星线在夜间的位移。然后，代码根据用户的选择，用低阶多项式或样条对此比率建模。然后通过将此模型多普勒位移到ORF后除以每个观测来应用校正。用户可以选择对所有数据集使用相同的参考光谱或独立校正每个夜晚，并且可以在校正地球大气吸收后更新模型（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S243">第2.4.3节</a>）。这种方法即使在望远镜的大气色散校正器（ADC）在观测凌日期间未能更新其位置的少数情况下也能很好地工作（<a name="InR6"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R6">Borsa et al. 2019</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R3">Pino et al. 2020</a>），导致每次曝光在连续谱的蓝色和红色部分都有相当大的通量损失（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F4">图4</a>）。</p>
<h4 class="sec3">
<h4 class="sec3">
<a name="S243"></a>2.4.3 地球大气校正</h4>
<p>地面观测的主要困难之一是处理来自地球大气的地球大气印记。在光学波段，水蒸气和分子氧是地球大气吸收的主要贡献者。其去除是一项困难的任务，因为吸收线的强度和位置随时间变化，取决于恒星在地平线上的高度和夜间天气条件（空气质量、水汽柱、视宁度等）。用于地球大气校正的经典技术需要使用专用建模工具对大气进行建模，或获取参考光谱来创建地球大气模板。</p>
<p>在SLOPpy中，已经测试并实现了不同的方法：（1）基于空气质量和BERV的地球大气吸收经验计算，（2）使用预生成的地球透射光谱模板，以及（3）通过大气透射代码Molecfit进行地球大气建模（<a name="InR76"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R76">Smette et al. 2015</a>）。前两种方法的更详细解释可以在<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#APP1">附录A</a>中找到。在本节中，我们仅讨论第三种方法，这无疑是最稳健的方法，并且在应用于不同夜晚、大气条件变化的数据时能产生一致的结果（<a name="InR47"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R47">Langeveld et al. 2021</a>）。</p>
<p>由ESO提供的Molecfit使用HITRAN数据库和逐线辐射传输模型（LBLRTM）计算非常高分辨率（<i>R</i> ~ 4000000）的地球大气光谱，将地球大气线校正到噪声水平。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R2">Allart et al. (2017)</a>首次将其用于HARPS数据，通过结合600-900条单独谱线的信号的互相关技术，在HD 189733 b的透射光谱中搜索水蒸气。随后，Molecfit被用于高分辨率透射光谱，在近红外波段搜索氦（<a name="InR54"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R54">Salz et al. 2018</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R54">Nortmann et al. 2018</a>），在可见光波段搜索钠特征（<a name="InR37"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R37">Hoeijmakers et al. 2019</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R70">Seidel et al. 2019</a>）。<a name="InR69"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R69">Scandariato et al. (2021)</a>在SLOPpy中使用Molecfit覆盖HARPS和HARPS-N的整个光谱范围，排除了波长长于~6700 Å的区域，该区域被饱和的O<sub>2</sub>线严重污染。</p>
<p>Molecfit分两步计算参考地球大气光谱。第一步，通过调整连续谱、波长尺度和仪器分辨率，将ORF中的LBLRTM拟合到观测光谱的几个用户定义区域。此外，分子特征被独立重新缩放，以考虑大气模型与实际天气之间的微小差异。第二步，使用第一阶段的输出参数为观测的整个波长区间构建地球大气吸收光谱。</p>
<p>使用此工具优化地球大气校正需要仔细选择仅包含单一分子（H<sub>2</sub>O或O<sub>2</sub>）的强地球大气线的光谱区域，具有平坦的连续谱，并且其中没有恒星特征，因为Molecfit不拟合恒星光谱。在光谱的可见光区域，这项任务并不简单，因为我们处于与Molecfit理想情况相反的情况。</p>
<p>为了执行Molecfit拟合，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R2">Allart et al. (2017)</a>为每个观测夜晚提供了不同的光谱区间。为了将此技术应用于更广泛的目标，我们选择了两类或列表的光谱区域。第一个包括所有具有强地球大气特征的波长区间，其中波长在ORF中列出。第二个列表包括所有没有恒星线的光谱区域，在SRF中选择并使用HD 189733光谱作为模板。第二个列表根据恒星的系统RV和夜晚的平均BERV从SRF移动到ORF进行更新，并假设区间范围的几十分之一埃的变化不会显著影响Molecfit拟合。SLOPpy传递给Molecfit的最终波长区间列表由两个列表的交集给出，结果是具有强地球大气特征且几乎没有恒星特征的光谱区域列表。</p>
<p>对于较暗的目标，其观测具有较低的信噪比（S/N），拟合可能变得不可靠。为了防止这个问题，SLOPpy自动合并连续曝光；然后在合并的光谱上执行Molecfit分析，假设天气条件在合并的时间窗口内没有显著变化，而分析的第二阶段（即在整个波长范围内计算参考地球大气光谱）分别应用于每个观测。</p>
<p>与任何基于光谱夜间随空气质量变化的经验方法不同，Molecfit也可以安全地应用于凌日期间的观测，因为用于表征地球大气模型的区域应该没有行星信号。如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F5">图5</a>所示，Molecfit是一个非常强大的工具，能够将地球大气特征校正到噪声水平，唯一的要求是仔细选择拟合的光谱区域，尽管与其他算法相比它非常慢。</p>
<p>如果在地球大气校正后仍然存在一些残差，管道的用户可以决定执行额外的校正。遵循与<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R79">Snellen et al. (2010)</a>类似的程序，当将每个光谱除以主凌日外光谱时（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S245">第2.4.5节</a>），SLOPpy可以通过使用线性样条将每个像素值按其随时间变化的方差归一化来去除剩余的地球大气残差。</p>
<a name="F5"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F5.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig5_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F5.html" target="_blank"><span class="bold">图5</span></a><p>使用Molecfit应用于WASP-127 b光谱的地球大气校正示例。<i>上图：</i>未校正和校正光谱的比较。<i>下图：</i>地球大气光谱。所有光谱都根据时间进行颜色编码。</p>
</td>
</tr></tbody></table></div>
<h4 class="sec3">
<a name="S244"></a>2.4.4 星际谱线</h4>
<p>根据恒星的距离及其在天空中的位置，光谱中可能存在星际吸收线。由于星际谱线相对于系外行星系统的质心是静止的，而恒星的径向速度因行星的存在而变化，对于慢速自转恒星（<i>v</i> sin <i>i</i> &lt; 10 km s<sup>−1</sup>），我们验证了如果不校正它们的存在会干扰最终透射光谱，特别是在钠双线区域。对于每个数据集，SLOPpy通过在BRF中叠加光谱并归一化局部连续谱后，用样条拟合星际吸收线来建立模型。然后通过这个经验模型校正每个观测。从这个步骤获得的结果仍然不是最优的，我们正在尝试改进程序。无论如何，在迄今为止分析的数据中，还没有必要使用这个模块。</p>

<p>在某些情况下，可以忽略星际谱线校正。如果宿主恒星是快速自转恒星（<i>v</i> sin <i>i</i> &gt; 15-20 km s<sup>−1</sup>，<a name="InR82"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R82">Stauffer et al. 1997</a>），如早期型恒星通常的情况，即使波长位移约为一个像素（在HARPS/HARPS-N的情况下对应于~0.8 km s<sup>−1</sup>的径向速度变化，即~8 <i>M</i><sub>J</sub>的行星引起的径向速度变化），光谱形状的变化也不明显。实际上，谱线如此宽且浅，以至于作为波长函数（在静止参考系中）的通量变化与光子噪声相比可以忽略不计。在这种情况下，可以不加考虑行星引起的反射运动而合并凌日外观谱。在这个假设下，当将每个光谱除以主凌日外光谱时，星际谱线会自动删除（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S245">第2.4.5节</a>）。<a name="InR14"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Casasayas-Barris et al. (2018)</a>为分析MASCARA-2 b/KELT-20 b提供了这种方法的一个例子，我们在此确认其有效性。</p>

<h4 class="sec3">
<a name="S245"></a>2.4.5 构建主凌日外光谱</h4>
<p>所有观测（凌日内和凌日外）都包含恒星光和地球大气吸收，而凌日内观测还包含印在恒星通量中的系外行星大气吸收。为了隔离它并去除恒星贡献，管道计算一个"主凌日外"光谱（<i>M</i><sub>OUT</sub>），它由在凌日前和凌日后获得的曝光积分给出。</p>

<p>由于行星凌日期间恒星的径向速度变化，所有光谱的恒星线都在波长上移动。因此，在构建<i>M</i><sub>OUT</sub>之前，管道将光谱移动到SRF以将所有恒星线对齐到相同位置。</p>

<h4 class="sec3">
<a name="S246"></a>2.4.6 透射光谱准备</h4>
<p>在应用上述校正后，每个凌日内观测（<i>F</i><sub><i>i</i>,in</sub>）除以重新缩放为1的<i>M</i><sub>OUT</sub>（<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$M_{{\rm{OUT}}}^\~$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="46.515625" data-resized_width="45.515625" data-natural_height="25" data-resized_height="25" style="display: inline-block; width: 45.515625px; height: 25px;"><span class="mathml mathml-inline" data-natural_width="46.515625" data-resized_width="45.515625" data-natural_height="25" data-resized_height="25" style="display: inline-block;"><math display="inline" id="mml_eq1"><mrow><msubsup><mi>M</mi><mrow><mtext>OUT</mtext></mrow><mo>~</mo></msubsup></mrow></math></span><span class="img img-block" data-natural_width="49" data-resized_width="48" data-natural_height="28" data-resized_height="28" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq1.png" id="img_eq1" alt="$M_{{\rm{OUT}}}^\~$"></span><span class="latex" data-latex="$M_{{\rm{OUT}}}^\~$" style="display: none;" data-natural_width="217.734375" data-resized_width="216.734375" data-natural_height="25" data-resized_height="25"><pre><code><span class="hljs-built_in">$</span>M<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{OUT}}}<span class="hljs-built_in">^</span><span class="hljs-keyword">\~</span><span class="hljs-built_in">$</span></code></pre></span></span></span>）相对于用户提供的参考波长范围，以获得该曝光的透射光谱：
<a name="FD1"></a><span class="img-equation ressouce-equation ressouce-equation-block resizable" data-latex="${\tilde R_{\rm{i}}}{|_{{\rm{ORF}}}} = = {{{F_{i,{\rm{in}}}}} \over {{{\tilde M}_{{\rm{OUT}}}}{{\rm{|}}_{{\rm{ORF}}}}}}$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="178.578125" data-resized_width="177.578125" data-natural_height="59" data-resized_height="59" style="display: inline-block; width: 177.578125px; height: 59px;"><span class="mathml mathml-block" data-natural_width="178.578125" data-resized_width="177.578125" data-natural_height="57.78125" data-resized_height="57.78125" style="display: inline-block;"><math display="block" id="mml_eq2"><mrow><msub><mover accent="true"><mi>R</mi><mo>˜</mo></mover><mtext>i</mtext></msub><msub><mo>|</mo><mrow><mtext>ORF</mtext></mrow></msub><mo>=</mo><mo>=</mo><mfrac><mrow><msub><mi>F</mi><mrow><mi>i</mi><mo>,</mo><mtext>in</mtext></mrow></msub></mrow><mrow><msubsup><mi>M</mi><mrow><mtext>OUT</mtext></mrow><mo>~</mo></msubsup><msub><mtext>|</mtext><mrow><mtext>ORF</mtext></mrow></msub></mrow></mfrac></mrow></math></span><span class="img img-block" data-natural_width="170" data-resized_width="169" data-natural_height="56" data-resized_height="56" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq2.png" id="img_eq2" alt="${\tilde R_{\rm{i}}}{|_{{\rm{ORF}}}} = = {{{F_{i,{\rm{in}}}}} \over {{{\tilde M}_{{\rm{OUT}}}}{{\rm{|}}_{{\rm{ORF}}}}}}$"></span><span class="latex" data-latex="${\tilde R_{\rm{i}}}{|_{{\rm{ORF}}}} = = {{{F_{i,{\rm{in}}}}} \over {{{\tilde M}_{{\rm{OUT}}}}{{\rm{|}}_{{\rm{ORF}}}}}}$" style="display: none;" data-natural_width="728.765625" data-resized_width="600" data-natural_height="50" data-resized_height="75"><pre><code><span class="hljs-built_in">$</span>{<span class="hljs-keyword">\tilde</span> R<span class="hljs-built_in">_</span>{<span class="hljs-keyword">\rm</span>{i}}}{|<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{ORF}}}} = = {{{F<span class="hljs-built_in">_</span>{i,{<span class="hljs-keyword">\rm</span>{in}}}}} <span class="hljs-keyword">\over</span> {{{<span class="hljs-keyword">\tilde</span> M}<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{OUT}}}}{{<span class="hljs-keyword">\rm</span>{|}}<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{ORF}}}}}}<span class="hljs-built_in">$</span></code></pre></span></span><span class="label-eq">(1)</span></span></p>

<p>称为光谱比。计算在ORF中进行，意味着将（高信噪比）<i>M</i><sub>OUT</sub>从SRF移回，以避免在噪声大得多的单个凌日内观测上进行不必要的重新分箱步骤。</p>

<p>管道在配置文件中指定的感兴趣的原子种类周围的光谱范围内提取透射光谱。实际上，透射光谱是在仪器的整个光谱范围内计算的，便于将来采用其他方法搜索原子或分子种类，如互相关函数（<a name="InR60"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R60">Pino et al. 2018a</a>；<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R37">Hoeijmakers et al. 2019</a>），而限制在特定波长范围内允许在合理的时间内执行计算昂贵的分析。共振钠双线（在5889.95 Å和5895.92 Å），由于其大的吸收截面，是被研究最多的大气特征之一（例如，<a name="InR78"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen et al. 2008</a>；<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach et al. 2015</a>；<a name="InR16"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R16">Casasayas-Barris et al. 2020</a>）。</p>

<h4 class="sec3">
<a name="S247"></a>2.4.7 临边变化和Rossiter-McLaughlin效应</h4>
<p>当行星从恒星盘面前经过时，它会阻挡部分恒星光。根据行星覆盖的恒星表面特定位置的光谱特性，积分恒星光谱可能与凌日外观测获得的光谱不同，导致系外行星透射光谱变形。改变透射光谱的两个主要效应是临边变化（CLV）和Rossiter-McLaughlin（RM）效应。</p>

<p>RM效应是恒星自转的结果。行星阻挡的恒星光可能红移或蓝移，取决于行星覆盖恒星的哪一侧，从而导致每条谱线变形（例如，<a name="InR49"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R49">Louden &amp; Wheatley 2015</a>）。</p>

<p>另一方面，CLV效应是归一化恒星线从中心到边缘在恒星盘面上的轮廓变化，因为当我们向边缘移动时，我们观测到更外层、更冷的光球层，类似于光度学中的临边昏暗。对于更强的吸收线，CLV可以变化相当显著，在检测系外行星大气种类时变得至关重要（<a name="InR95"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. 2017</a>）。对于慢速自转恒星，吸收线上变形的大小大致与（<i>R</i><sub>p</sub>/<i>R</i><sub>s</sub>）<sup>2</sup>成比例。除了行星与恒星半径比之外，还有多种参数影响CLV特征，包括恒星参数和行星轨道参数。特别是，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. (2017)</a>表明，对于Na <span class="smallcaps">i</span> D线，CLV效应对于较低有效温度<i>T</i><sub>eff</sub>和接近<i>b</i> = 0.84的撞击参数的恒星更强。此外，建模的CLV特征还取决于恒星大气模型；通常非LTE和三维模型可以产生更真实的结果（<a name="InR48"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R48">Leenaarts et al. 2012</a>；<a name="InR7"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R7">Borsa et al. 2021</a>）。</p>

<p>在分析透射光谱时，重要的是同时考虑这两种效应，因为从行星覆盖的恒星表面每个元素出现的光谱将在波长上移动（对于RM效应）并在不同的光球层深度形成（对于CLV效应）。这导致特定临边昏暗部分的恒星光损失和特定的径向速度。</p>

<p>为了校正这两种效应，遵循<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. (2017)</a>，我们首先在21个不同的<i>μ</i>值（从零到一步长为0.05）模拟合成恒星光谱，其中<i>μ</i> = cos <i>θ</i><b>,</b>，<i>θ</i>是恒星表面法线与视线之间的角度（"临边角"）。在恒星边缘，我们假设<i>μ</i> = 0.001而不是<i>μ</i> = 0以避免数值问题（<a name="InR23"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">Czesla et al. 2015</a>）。使用Spectroscopy Made Easy（SME，<a name="InR63"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R63">Piskunov &amp; Valenti 2017</a>）和VALD数据库（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">Ryabchikova et al. 2015</a>）的线表以及MARCS（<a name="InR35"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R35">Gustafsson et al. 2008</a>）或Kurucz ATLAS9（<a name="InR46"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R46">Kurucz 2005</a>）模型获得恒星光谱。这些光谱计算时不包含恒星的自转加宽，因为它们旨在表示从恒星给定位置出现的光谱。SME还计算盘面积分、加宽的光谱。随后，我们将恒星盘面划分为大小为0.01 <i>R</i><sub>s</sub> <i>×</i> 0.01 <i>R</i><sub>s</sub>的元素；每个这些元素有一个<i>μ</i>值，因此其光谱从先前计算的合成光谱线性插值。为了考虑RM效应，如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Yan &amp; Henning (2018)</a>，每个光谱也根据元素在盘面上的位置、系统几何、恒星自转速度和微分自转的存在，多普勒位移到元素的投影速度（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F6">图6</a>）。</p>

<p>非常重要的是要注意，不同轨道相位建模的恒星光谱是针对一个行星半径（<i>R</i><sub>p</sub>），而实际有效半径大于<i>R</i><sub>p</sub>，因为行星吸收是波长依赖的。为了考虑这个半径变化，用户可以在拟合数据时决定引入一个因子r（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S248">第2.4.8节</a>），假设相应的线轮廓变化是半径1 <i>R</i><sub>p</sub>时结果的r倍；在这种情况下，管道计算r值网格的建模恒星光谱，例如，r在0.5到2.5之间，步长为0.1。</p>

<p>最后，我们通过积分被行星遮蔽的所有表面元素，并从盘面积分恒星光谱中减去结果，来模拟凌日期间每次观测的恒星光谱。作为波长函数的校正因子通过将每个模拟光谱除以凌日外盘面积分模型获得。然后通过将每个观测的透射光谱（见方程<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FD1">(1)</a>）除以相应的校正因子来校正CLV和RM效应。</p>

<p>这种校正在原始参考系中的单个透射光谱上进行，通过重新分箱校正模型，即使它需要更大的计算努力和更复杂的算法结构。最后，唯一在观测光谱上进行的重新分箱步骤是在移动到行星参考系（PRF）以构建平均透射光谱时进行的（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S249">第2.4.9节</a>）。</p>
<a name="F6"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F6.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig6_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F6.html" target="_blank"><span class="bold">图6</span></a><p>系外行星系统中恒星盘面上不同<i>μ</i>角（<i>左图</i>）和径向速度（<i>右图</i>）的分布，该系统参数为<i>λ</i> = (−22.1 ± 6.0)°和<i>v</i> sin <i>i</i> = (19.6 ± 0.5) km s<sup>−1</sup>。</p>
</td>
</tr></tbody></table></div>

<h4 class="sec3">
<a name="S248"></a>2.4.8 MCMC分析</h4>
<p>如果残差中存在光谱吸收线，用户可以决定对其进行建模并评估检测显著性。如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Yan & Henning (2018)</a>所示，SLOPpy使用emcee工具（<a name="InR31"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R31">Foreman-Mackey et al. 2013</a>）进行马尔可夫链蒙特卡洛（MCMC）分析。该模型假设吸收线具有高斯轮廓，在其他情况下为平坦光谱（<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="${{\tilde \Re }_{\rm{i}}} = 1$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="54.046875" data-resized_width="53.046875" data-natural_height="25" data-resized_height="25" style="display: inline-block; width: 53.046875px; height: 25px;"><span class="mathml mathml-inline" data-natural_width="54.046875" data-resized_width="53.046875" data-natural_height="25" data-resized_height="25" style="display: inline-block;"><math display="inline" id="mml_eq3"><mrow><msub><mover accent="true"><mi>ℜ</mi><mo>˜</mo></mover><mtext>i</mtext></msub><mo>=</mo><mn>1</mn></mrow></math></span><span class="img img-block" data-natural_width="48" data-resized_width="47" data-natural_height="29" data-resized_height="29" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq3.png" id="img_eq3" alt="${{\tilde \Re }_{\rm{i}}} = 1$"></span><span class="latex" data-latex="${{\tilde \Re }_{\rm{i}}} = 1$" style="display: none;" data-natural_width="343.203125" data-resized_width="342.203125" data-natural_height="25" data-resized_height="25"><pre><code><span class="hljs-built_in">$</span>{{<span class="hljs-keyword">\tilde</span> <span class="hljs-keyword">\Re</span> }<span class="hljs-built_in">_</span>{<span class="hljs-keyword">\rm</span>{i}}} = 1<span class="hljs-built_in">$</span></code></pre></span></span></span>）。CLV和RM建模包含一个因子<i>r</i>，用于考虑分析波长范围内行星半径与凌日光度测量获得值（可能在不同波长范围获得）之间的可能差异。</p>

<p>模型的自由参数包括：行星的RV半振幅（<i>K</i><sub>p</sub>），用于在PRF中建模大气吸收线；描述行星吸收的高斯轮廓的对比度（<i>h</i>）和半高全宽（FWHM）；相对于PRF过渡的大气风RV（<i>v</i><sub>wind</sub>）；有效行星半径比例因子（r）。对于每次观测，透射模型的谱线根据行星的瞬时RV（从<i>K</i><sub>p</sub>和观测时的轨道相位计算）移动到PRF。</p>

<p>需要注意的是，MCMC分析仅应用于完全凌日内的数据（即排除进入和退出阶段），因为在进入和退出阶段的行星吸收光谱与完全凌日内不同，此时RM效应最约束r因子。虽然原则上可以建模这种差异，但此功能尚未在SLOPpy中实现。</p>

<p>为了减少计算时间，分析在SRF中对用户选择步长（例如0.05 Å，如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R15">Casasayas-Barris et al. 2019</a>所用）分箱的单个透射光谱上进行。这个选择主要出于保持计算机内存使用和MCMC每一步执行时间在可接受水平的考虑。这也是分析数据上进行的唯一重新分箱步骤，从而最小化重新分箱过程对低信噪比光谱引入的系统噪声的影响。我们探索了在未分箱光谱（即在原始参考系中）进行分析的可能性以避免任何重新分箱过程，但与之前方法相比，极长的计算时间和更高的内存需求（主要由于光谱不再在共同波长网格上）阻止了我们完全开发此选项，尽管我们不排除将其作为未来功能。</p>

<p>这里报告的不确定性表示自由参数后验分布的第15到第84百分位的置信区间。误差从光子噪声传播，但经常被低估；因此我们在拟合过程中允许自由抖动参数。这个参数被平方添加到误差中以考虑任何额外的系统误差（例如不良视宁度）。</p>

<p>对于同一目标有多个夜晚数据的情况，首先对单个夜晚进行MCMC，然后执行包含所有夜晚的全局拟合。管道还返回用户固定参数的透射光谱（此时行星半径不是自由参数）和仅使用凌日外光谱构建的所谓"平均外"透射光谱。预期平坦的平均外透射光谱用于检查任何非行星来源的残差。</p>

<p>在配置文件中，用户可以设置步数和行走者数量、计算拟合的范围、分箱步长和参数先验。此外，有一个标志决定是否释放参数<i>r</i>和<i>v</i><sub>wind</sub>。如果MCMC分析要同时对多条谱线进行（例如钠双线的两条线或镁三重线），用户还可以决定这些线是否应共享相同的FWHM或相同的风引起的径向速度位移。</p>

<h4 class="sec3">
<a name="S249"></a>2.4.9 最终透射光谱</h4>
<p>最终透射光谱通过在PRF中求和方程<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FD1">(1)</a>的所有光谱比获得：
<a name="FD2"></a><span class="img-equation ressouce-equation ressouce-equation-block resizable" data-latex="$\tilde R{|_{{\rm{PRF}}}} = \sum\limits_{i = 0}^N {\left( {{{\tilde R}_i}{|_{{\rm{PRF}}}}} \right)}$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="165.5" data-resized_width="164.5" data-natural_height="57.25" data-resized_height="57.25" style="display: inline-block; width: 164.5px; height: 57.25px;"><span class="mathml mathml-block" data-natural_width="165.5" data-resized_width="164.5" data-natural_height="57.25" data-resized_height="57.25" style="display: inline-block;"><math display="block" id="mml_eq4"><mrow><mover accent="true"><mi>R</mi><mo>˜</mo></mover><msub><mo>|</mo><mrow><mtext>PRF</mtext></mrow></msub><mo>=</mo><mstyle displaystyle="true"><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mrow><mrow><mo>(</mo><mrow><msub><mover accent="true"><mi>R</mi><mo>˜</mo></mover><mi>i</mi></msub><msub><mo>|</mo><mrow><mtext>PRF</mtext></mrow></msub></mrow><mo>)</mo></mrow></mrow></mstyle></mrow></math></span><span class="img img-block" data-natural_width="174" data-resized_width="173" data-natural_height="67" data-resized_height="67" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq4.png" id="img_eq4" alt="$\tilde R{|_{{\rm{PRF}}}} = \sum\limits_{i = 0}^N {\left( {{{\tilde R}_i}{|_{{\rm{PRF}}}}} \right)}$"></span><span class="latex" data-latex="$\tilde R{|_{{\rm{PRF}}}} = \sum\limits_{i = 0}^N {\left( {{{\tilde R}_i}{|_{{\rm{PRF}}}}} \right)}$" style="display: none;" data-natural_width="728.765625" data-resized_width="600" data-natural_height="50" data-resized_height="50"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\tilde</span> R{|<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{PRF}}}} = <span class="hljs-keyword">\sum</span><span class="hljs-keyword">\limits</span><span class="hljs-built_in">_</span>{i = 0}<span class="hljs-built_in">^</span>N {<span class="hljs-keyword">\left</span>( {{{<span class="hljs-keyword">\tilde</span> R}<span class="hljs-built_in">_</span>i}{|<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{PRF}}}}} <span class="hljs-keyword">\right</span>)}<span class="hljs-built_in">$</span></code></pre></span></span><span class="label-eq">(2)</span></span></p>

<p>其中<i>N</i>是凌日内光谱的数量。这避免了在恒星或观测者参考系中执行此步骤将导致的行星大气吸收线的剪切。如果同一目标有多个可用数据集（例如在不同夜晚或用不同仪器观测的目标），管道可以组合所有数据集计算平均透射光谱。</p>

<p>主外光谱必须始终在SRF中构建。另一方面，透射光谱可以在PRF中构建（这是检测行星信号必须的），如果怀疑信号可能有恒星来源（例如恒星活动）则在SRF中构建，或如果怀疑信号可能有局部来源（例如地球大气吸收去除不正确）则在ORF中构建。</p>

<h2 class="sec">
<a name="S3"></a>3 吸收深度的提取</h2>
<p>为了表征检测到的行星信号，我们通过积分以分析中的大气物种波长为中心的窄通带内的通量，并将其与连续谱中参考通带内的通量比较，计算相对吸收深度（<i>δ</i>）。对于钠双线，包含信号的中央通带（<i>C</i>）被分成两个较小的通带，双线的每条线一个，D<sub>2</sub>和D<sub>1</sub>，我们感兴趣测量其中的过量吸收。由于每个中央通带仅包含一条线，两条Na <span class="smallcaps">i</span>双线的吸收深度经常取平均。为了将我们的结果与文献中其他工作（例如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach et al. 2015</a>；<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R70">Seidel et al. 2019</a>）比较，我们选择相同的带宽（例如2 × 0.75 Å、2 × 1.50 Å、2 × 3.00 Å）用于中央通带，以及相同的参考通带（例如[5874.89–5886.89] Å和[5898.89–5910.89] Å）用于连续谱，取自中央通带的蓝色和红色侧（见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F7">图7</a>）。</p>

<p>SLOPpy可以遵循两种不同方法提取吸收深度：分析"透射光变曲线"（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen et al. 2008</a>，见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S31">第3.1节</a>），或分析最终透射光谱（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R66">Redfield et al. 2008</a>，见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S32">第3.2节</a>）。</p>

<h3 class="sec2">
<a name="S31"></a>3.1 透射光变曲线分析</h3>
<p>系外行星大气中吸收物种的存在可以看作是凌日期间的相对通量下降。这可以通过构建透射光变曲线来推断，即在特定通带内相对通量随时间的变化（<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R19">Charbonneau et al. 2002</a>；<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen et al. 2008</a>）。SLOPpy对每次曝光（t）和给定用户定义通带（∆<i>λ</i>）推导相对通量为：
<a name="FD3"></a><span class="img-equation ressouce-equation ressouce-equation-block resizable" data-latex="${F_{{\rm{rel}}}}\left( {t,\Delta \lambda } \right) = {{\overline {F\left( C \right)} } \over {\overline {F\left( B \right)} + \overline {F\left( R \right)} }}$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="229.890625" data-resized_width="228.890625" data-natural_height="56.5" data-resized_height="56.5" style="display: inline-block; width: 228.890625px; height: 56.5px;"><span class="mathml mathml-block" data-natural_width="229.890625" data-resized_width="228.890625" data-natural_height="56.5" data-resized_height="56.5" style="display: inline-block;"><math display="block" id="mml_eq5"><mrow><msub><mi>F</mi><mrow><mtext>rel</mtext></mrow></msub><mrow><mo>(</mo><mrow><mi>t</mi><mo>,</mo><mi>Δ</mi><mi>λ</mi></mrow><mo>)</mo></mrow><mo>=</mo><mfrac><mrow><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>C</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></mrow><mrow><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>B</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover><mo>+</mo><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>R</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></mrow></mfrac></mrow></math></span><span class="img img-block" data-natural_width="216" data-resized_width="215" data-natural_height="62" data-resized_height="62" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq5.png" id="img_eq5" alt="${F_{{\rm{rel}}}}\left( {t,\Delta \lambda } \right) = {{\overline {F\left( C \right)} } \over {\overline {F\left( B \right)} + \overline {F\left( R \right)} }}$"></span><span class="latex" data-latex="${F_{{\rm{rel}}}}\left( {t,\Delta \lambda } \right) = {{\overline {F\left( C \right)} } \over {\overline {F\left( B \right)} + \overline {F\left( R \right)} }}$" style="display: none;" data-natural_width="728.765625" data-resized_width="600" data-natural_height="75" data-resized_height="100"><pre><code><span class="hljs-built_in">$</span>{F<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{rel}}}}<span class="hljs-keyword">\left</span>( {t,<span class="hljs-keyword">\Delta</span> <span class="hljs-keyword">\lambda</span> } <span class="hljs-keyword">\right</span>) = {{<span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( C <span class="hljs-keyword">\right</span>)} } <span class="hljs-keyword">\over</span> {<span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( B <span class="hljs-keyword">\right</span>)} + <span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( R <span class="hljs-keyword">\right</span>)} }}<span class="hljs-built_in">$</span></code></pre></span></span><span class="label-eq">(3)</span></span></p>

<p>其中<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$\overline {F\left( C \right)} $"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="48.609375" data-resized_width="47.609375" data-natural_height="26" data-resized_height="26" style="display: inline-block; width: 47.609375px; height: 26px;"><span class="mathml mathml-inline" data-natural_width="48.609375" data-resized_width="47.609375" data-natural_height="26" data-resized_height="26" style="display: inline-block;"><math display="inline" id="mml_eq6"><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>C</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></math></span><span class="img img-block" data-natural_width="44" data-resized_width="43" data-natural_height="30" data-resized_height="30" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq6.png" id="img_eq6" alt="$\overline {F\left( C \right)} $"></span><span class="latex" data-latex="$\overline {F\left( C \right)} $" style="display: none;" data-natural_width="366.015625" data-resized_width="365.015625" data-natural_height="25" data-resized_height="25"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( C <span class="hljs-keyword">\right</span>)} <span class="hljs-built_in">$</span></code></pre></span></span></span>是感兴趣原子物种中心通带内的加权平均通量，而<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$\overline {F\left( B \right)} $"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="47.40625" data-resized_width="46.40625" data-natural_height="27" data-resized_height="27" style="display: inline-block; width: 46.40625px; height: 27px;"><span class="mathml mathml-inline" data-natural_width="47.40625" data-resized_width="46.40625" data-natural_height="27" data-resized_height="27" style="display: inline-block;"><math display="inline" id="mml_eq7"><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>B</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></math></span><span class="img img-block" data-natural_width="44" data-resized_width="43" data-natural_height="31" data-resized_height="31" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq7.png" id="img_eq7" alt="$\overline {F\left( B \right)} $"></span><span class="latex" data-latex="$\overline {F\left( B \right)} $" style="display: none;" data-natural_width="366.015625" data-resized_width="365.015625" data-natural_height="25" data-resized_height="25"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( B <span class="hljs-keyword">\right</span>)} <span class="hljs-built_in">$</span></code></pre></span></span></span>和<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$\overline {F\left( R \right)} $"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="47.921875" data-resized_width="46.921875" data-natural_height="27" data-resized_height="27" style="display: inline-block; width: 46.921875px; height: 27px;"><span class="mathml mathml-inline" data-natural_width="47.921875" data-resized_width="46.921875" data-natural_height="27" data-resized_height="27" style="display: inline-block;"><math display="inline" id="mml_eq8"><mover accent="true"><mrow><mi>F</mi><mrow><mo>(</mo><mi>R</mi><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></math></span><span class="img img-block" data-natural_width="43" data-resized_width="42" data-natural_height="31" data-resized_height="31" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq8.png" id="img_eq8" alt="$\overline {F\left( R \right)} $"></span><span class="latex" data-latex="$\overline {F\left( R \right)} $" style="display: none;" data-natural_width="366.015625" data-resized_width="365.015625" data-natural_height="25" data-resized_height="25"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\overline</span> {F<span class="hljs-keyword">\left</span>( R <span class="hljs-keyword">\right</span>)} <span class="hljs-built_in">$</span></code></pre></span></span></span>是光谱特征蓝色和红色侧两个参考通带内的加权平均通量。虽然<i>F</i>(<i>B</i>)和<i>F</i>(<i>R</i>)在行星凌日期间应保持不变（因为它们仅包含恒星光），但<i>F</i>(<i>C</i>)根据行星大气的额外吸收而变化。</p>

<p>每个通带和每条谱线的光变曲线的相对吸收深度由下式给出：
<a name="FD4"></a><span class="img-equation ressouce-equation ressouce-equation-block resizable" data-latex="$\delta \left( {\Delta \lambda } \right) = {{\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} } \over {\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} }} - 1,$"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="199.53125" data-resized_width="198.53125" data-natural_height="82.59375" data-resized_height="82.59375" style="display: inline-block; width: 198.53125px; height: 82.59375px;"><span class="mathml mathml-block" data-natural_width="199.53125" data-resized_width="198.53125" data-natural_height="82.59375" data-resized_height="82.59375" style="display: inline-block;"><math display="block" id="mml_eq9"><mrow><mi>δ</mi><mrow><mo>(</mo><mrow><mi>Δ</mi><mi>λ</mi></mrow><mo>)</mo></mrow><mo>=</mo><mfrac><mrow><mover accent="true"><mrow><msub><mi>F</mi><mrow><mtext>rel</mtext></mrow></msub><mrow><mo>(</mo><mrow><msub><mi>t</mi><mrow><mtext>in</mtext></mrow></msub></mrow><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></mrow><mrow><mover accent="true"><mrow><msub><mi>F</mi><mrow><mtext>rel</mtext></mrow></msub><mrow><mo>(</mo><mrow><msub><mi>t</mi><mrow><mtext>out</mtext></mrow></msub></mrow><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></mrow></mfrac><mo>−</mo><mn>1</mn><mo>,</mo></mrow></math></span><span class="img img-block" data-natural_width="185" data-resized_width="184" data-natural_height="63" data-resized_height="63" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq9.png" id="img_eq9" alt="$\delta \left( {\Delta \lambda } \right) = {{\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} } \over {\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} }} - 1,$"></span><span class="latex" data-latex="$\delta \left( {\Delta \lambda } \right) = {{\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} } \over {\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} }} - 1,$" style="display: none;" data-natural_width="728.765625" data-resized_width="600" data-natural_height="100" data-resized_height="125"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\delta</span> <span class="hljs-keyword">\left</span>( {<span class="hljs-keyword">\Delta</span> <span class="hljs-keyword">\lambda</span> } <span class="hljs-keyword">\right</span>) = {{<span class="hljs-keyword">\overline</span> {{F<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{rel}}}}<span class="hljs-keyword">\left</span>( {{t<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{in}}}}} <span class="hljs-keyword">\right</span>)} } <span class="hljs-keyword">\over</span> {<span class="hljs-keyword">\overline</span> {{F<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{rel}}}}<span class="hljs-keyword">\left</span>( {{t<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{out}}}}} <span class="hljs-keyword">\right</span>)} }} - 1,<span class="hljs-built_in">$</span></code></pre></span></span><span class="label-eq">(4)</span></span></p>

<p>其中<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} $"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="70.765625" data-resized_width="69.765625" data-natural_height="39" data-resized_height="39" style="display: inline-block; width: 69.765625px; height: 39px;"><span class="mathml mathml-inline" data-natural_width="70.765625" data-resized_width="69.765625" data-natural_height="39" data-resized_height="39" style="display: inline-block;"><math display="inline" id="mml_eq10"><mover accent="true"><mrow><msub><mi>F</mi><mrow><mtext>rel</mtext></mrow></msub><mrow><mo>(</mo><mrow><msub><mi>t</mi><mrow><mtext>in</mtext></mrow></msub></mrow><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></math></span><span class="img img-block" data-natural_width="64" data-resized_width="63" data-natural_height="30" data-resized_height="30" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq10.png" id="img_eq10" alt="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} $"></span><span class="latex" data-latex="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} $" style="display: none;" data-natural_width="719.625" data-resized_width="600" data-natural_height="25" data-resized_height="50"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\overline</span> {{F<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{rel}}}}<span class="hljs-keyword">\left</span>( {{t<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{in}}}}} <span class="hljs-keyword">\right</span>)} <span class="hljs-built_in">$</span></code></pre></span></span></span>和<span class="img-inline ressouce-equation ressouce-equation-inline resizable" data-latex="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} $"><span class="ressouce-equation-container d-mathml fullsize-init cursor-zoom-in" data-elt-selected=".mathml" data-natural_width="78.03125" data-resized_width="77.03125" data-natural_height="38" data-resized_height="38" style="display: inline-block; width: 77.03125px; height: 38px;"><span class="mathml mathml-inline" data-natural_width="78.03125" data-resized_width="77.03125" data-natural_height="38" data-resized_height="38" style="display: inline-block;"><math display="inline" id="mml_eq11"><mover accent="true"><mrow><msub><mi>F</mi><mrow><mtext>rel</mtext></mrow></msub><mrow><mo>(</mo><mrow><msub><mi>t</mi><mrow><mtext>out</mtext></mrow></msub></mrow><mo>)</mo></mrow></mrow><mo stretchy="true">¯</mo></mover></math></span><span class="img img-block" data-natural_width="71" data-resized_width="70" data-natural_height="30" data-resized_height="30" style="display: none;"><img src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-eq11.png" id="img_eq11" alt="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} $"></span><span class="latex" data-latex="$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} $" style="display: none;" data-natural_width="728.765625" data-resized_width="600" data-natural_height="50" data-resized_height="50"><pre><code><span class="hljs-built_in">$</span><span class="hljs-keyword">\overline</span> {{F<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{rel}}}}<span class="hljs-keyword">\left</span>( {{t<span class="hljs-built_in">_</span>{{<span class="hljs-keyword">\rm</span>{out}}}}} <span class="hljs-keyword">\right</span>)} <span class="hljs-built_in">$</span></code></pre></span></span></span>分别是凌日内和凌日外的加权平均相对通量。我们注意到这个计算在SRF中进行。在凌日期间，行星信号将根据行星的RV（对于圆形轨道，在凌日中心时间理想为零）在光谱上移动。如果中央通带太窄，可能无法捕获凌日开始和结束部分的行星信号，从而导致透射光变曲线中的凌日持续时间缩短。</p>
<a name="T4"></a>
<div class="inset"><div class="ligne">
<a href="/articles/aa/full_html/2022/11/aa44055-22/T4.html" target="_blank"><span class="bold">表4</span></a><p>通过MCMC拟合程序获得的WASP-76 b最佳拟合参数及1-<i>σ</i>误差范围汇总</p>
</div></div>

<a name="T5"></a>
<div class="inset"><div class="ligne">
<a href="/articles/aa/full_html/2022/11/aa44055-22/T5.html" target="_blank"><span class="bold">表5</span></a><p>从透射光谱(TS)和透射光变曲线(TLC)中提取的WASP-76 b大气钠相对吸收深度(%)测量结果汇总</p>
</div></div>

<h3 class="sec2">
<a name="S43"></a>4.3 WASP-127 b</h3>
<p>WASP-127 b是目前发现的密度最低的极度膨胀气态系外行星之一。这个亚土星质量(<i>M</i><sub>p</sub> = 0.18 ± 0.02 <i>M</i><sub>J</sub>)和超木星半径(<i>R</i><sub>p</sub> = 1.37 ± 0.04 <i>R</i><sub>J</sub>)的行星围绕一颗即将离开主序带的明亮G5恒星(<i>V</i> = 10.2)运行。其大气标高高达2500 ± 400 km(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R13">Pallé et al. 2017</a>)，这使其成为透射光谱研究的理想目标。</p>

<p>我们分析了HEARTS巡天(ESO项目号：098.C-0304，100.C-0750；PI：Ehrenreich)公开的三组HARPS凌星观测数据。第一晚没有凌星后观测，第二和第三晚的凌星后观测时段很短，这是由于目标可见性限制及其长达4小时以上的凌星持续时间所致。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R39">Žák et al. (2019)</a>基于前两晚数据报告了WASP-127 b大气中钠的4-8<i>σ</i>显著性检测，验证了早期低分辨率光谱研究结果(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R13">Pallé et al. 2017</a>; <a name="InR20"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R20">Chen et al. 2018</a>)。然而<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R72">Seidel et al. (2020b</a>，以下简称S2020)指出该钠信号实际源于地球大气钠发射线污染和深恒星钠线核心的低信噪比。而<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R3">Allart et al. (2020)</a>使用ESPRESSO观测的另外两次凌星数据，在9<i>σ</i>置信度水平确认了钠线核心的存在。</p>

<p>为排除恒星活动导致的假阳性信号，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R39">Žák et al. (2019)</a>监测了Mg <span class="smallcaps">i</span>和Ca <span class="smallcaps">i</span>线均未发现特征(尽管这些测量包含可能掩盖信号的高噪声光谱)。此外，S2020展示的同步EulerCam光变曲线也未显示光度变化。</p>

<p>WASP-127的RM效应无法测量——作为慢速自转星(<i>v</i> sin <i>i</i> = 0.3 ± 0.2 km s<sup>−1</sup>)，其约2 m s<sup>−1</sup>的径向速度变化对Na <span class="smallcaps">i</span> D线深度影响可忽略(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R54">Nortmann et al. 2018</a>)。因此我们与S2020一致，未应用CLV和RM效应校正。</p>

<p>我们采用S2020相同参数设置配置文件。排除了第一晚部分曝光的最后一帧和第三晚天顶距过高(~2.7)的最后一帧。与S2020不同，我们保留了行星信号与低信噪比恒星线核心重叠的光谱。通过计算各光谱与凌日外主光谱的比值去除地球大气残差(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S246">第2.4.6节</a>)。</p>

<p>三晚合并的最终透射光谱如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F12">图12</a>所示，MCMC最佳拟合参数列于<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#T6">表6</a>。钠特征未显著突出于连续谱，且贝叶斯信息准则(BIC)显示线性模型优于高斯模型。S2020仅在D<sub>2</sub>线发现0.73 ± 0.45%(1.6<i>σ</i>)吸收，与我们误差范围内的结果一致。</p>

<p>如S2020指出，第二晚D<sub>2</sub>线最强检测中，主外光谱的钠线核心存在地球大气钠发射特征(见S2020的<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F4">图4</a>)。S2020通过在SRF掩蔽发射波段处理，而我们应用SLOPpy的天空校正(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S241">第2.4.1节</a>)。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F13">图13</a>显示天空校正后恒星钠双线轮廓得到恢复。我们的方法无需特殊筛选凌日内光谱，但可能仍存在残余污染。</p>

<p>使用0.375 Å和0.188 Å窄通带计算TS吸收深度，分别得到0.248 ± 0.082%和0.421 ± 0.137%(~3<i>σ</i>)。S2020报告的0.456 ± 0.198%测量使用比原文12 Å更窄的通带(J. Seidel，私人通信)。</p>

<p>综上，我们确认S2020结论：HARPS数据既不能确认也无法排除WASP-127 b大气中钠的存在。</p>

<a name="F11"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F11.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig11_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F11.html" target="_blank"><span class="bold">图11</span></a><p>同<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F9">图9</a>，但为WASP-76 b数据</p>
</td>
</tr></tbody></table></div>

<a name="T6"></a>
<div class="inset"><div class="ligne">
<a href="/articles/aa/full_html/2022/11/aa44055-22/T6.html" target="_blank"><span class="bold">表6</span></a><p>WASP-127 b的MCMC拟合最佳参数及1-<i>σ</i>误差范围汇总</p>
</div></div>

<a name="F12"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F12.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig12_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F12.html" target="_blank"><span class="bold">图12</span></a><p>同<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F10">图10</a>，但为WASP-127 b数据。线性拟合(黄线)显著优于高斯拟合(红线)</p>
</td>
</tr></tbody></table></div>

<a name="F13"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F13.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig13_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F13.html" target="_blank"><span class="bold">图13</span></a><p>WASP-127 b主外光谱在钠双线区域(第二晚)的天空校正前后对比(黑色：校正前，红色：校正后)。插图显示钠D线核心区域的放大视图</p>
</td>
</tr></tbody></table></div>

<h3 class="sec2">
<a name="S44"></a>4.4 KELT-20 b</h3>
<p>KELT-20 b(<a name="InR50"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R50">Lund et al. 2017</a>)，亦称MASCARA-2 b(<a name="InR85"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R85">Talens et al. 2018</a>)，是颗热木星(<i>R</i><sub>p</sub> = 1.83 ± 0.07 <i>R</i><sub>J</sub><i>, M</i><sub>p</sub> &lt; 3.510 <i>M</i><sub>J</sub>)，绕快速自转(<i>v</i> sin <i>i</i> = 115.9 ± 3.4 km s<sup>−1</sup>)的A型恒星运行，轨道周期约3.5天。其接收宿主恒星(<i>T</i><sub>eff</sub> ~ 9000 K)的强烈辐射，平衡温度达~2260 K，属于超热木星。</p>

<p>我们分析了HARPS-N(TNG档案项目：CAT17A_38和CAT18A_34)的三次凌星数据，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R15">Casasayas-Barris et al. (2019</a>，下称CB2019)曾用这些数据研究Ca <span class="smallcaps">ii</span>、Fe <span class="smallcaps">ii</span>、Na <span class="smallcaps">i</span>和H巴耳默线系。第一、二晚曝光时间200秒，第三晚增至300秒以提高信噪比。如CB2019，我们剔除了第二晚8帧低信噪比凌日外光谱和1帧类似质量的凌日内光谱。其中两晚数据因望远镜ADC控制软件故障导致连续谱变化，CB2019使用宽中值滤波校正，而我们采用SLOPpy的"差分折射"模块处理(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S242">第2.4.2节</a>和<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F14">图14</a>)。</p>

<p>虽然光纤B采集了天空光谱，但我们与CB2019一致未应用天空校正(各晚均无发射特征)，并忽略恒星反射运动(因宿主星快速自转)。星际钠线在SRF中除以主外光谱时自动校正(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S244">第2.4.4节</a>)。Molecfit地球大气校正后仍有残差，我们使用线性样条归一化最终透射光谱(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S243">第2.4.3节</a>)。</p>

<p>该目标受CLV和RM效应影响。参照CB2019，我们采用LTE Kurucz ATLAS9模型模拟恒星光谱，氢线太阳丰度，[Na/H] = 0.98。</p>

<p>钠双线最终透射光谱见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F15">图15</a>。为更好对比结果(列于<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#T7">表7</a>)，本次对钠D线分别进行MCMC拟合，获得独立的<i>K</i><sub>p</sub><i>, r</i>和<i>v</i><sub>wind</sub>值。H<sub><i>α</i></sub>线透射光谱见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F16">图16</a>，MCMC相关图见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F26">图B.3</a>-<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F28">B.5</a>。</p>

<p>多数参数与CB2019一致。所有钠线的<i>K</i><sub>p</sub>, <i>r</i>和<i>v</i><sub>wind</sub>均在误差范围内相符，但第二、三晚的对比度和FWHM存在差异。合并数据后结果与CB2019一致，<i>K</i><sub>p</sub>值(~173 km s<sup>−1</sup>)与理论预测相符。</p>

<p>H<sub><i>α</i></sub>线拟合参数除第二晚的<i>v</i><sub>wind</sub>(我们发现过度蓝移)和<i>r</i>因子(高于CB2019)外均一致。<i>r</i>因子差异导致合并数据后不兼容。</p>

<p>钠双线和H<sub><i>α</i></sub>的TLC见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F17">图17</a>。3 Å通带的TLC中CLV和RM效应可忽略，尤其对钠双线。<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#T8">表8</a>显示TS和TLC提取的AD值相符。除第二晚我们测得更高AD值外，钠线结果与CB2019一致。合并三晚数据后，仅TLC提取的AD与CB2019兼容。0.75 Å通带的最佳检测结果为0.18 ± 0.01(~18<i>σ</i>)。H<sub><i>α</i></sub>线蓝侧参考通带[6558.0-6561.0]Å，红侧[6564.0-6567.0]Å，0.75 Å通带检测值0.55 ± 0.05(~11<i>σ</i>)与CB2019完全一致。</p>

<a name="T7"></a>
<div class="inset"><div class="ligne">
<a href="/articles/aa/full_html/2022/11/aa44055-22/T7.html" target="_blank"><span class="bold">表7</span></a><p>KELT-20 b的MCMC拟合最佳参数及1-<i>σ</i>误差范围汇总</p>
</div></div>

<a name="F14"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F14.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig14_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F14.html" target="_blank"><span class="bold">图14</span></a><p>SLOPpy对KELT-20 b第二晚数据应用的差分折射校正</p>
</td>
</tr></tbody></table></div>

<a name="F15"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F15.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig15_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F15.html" target="_blank"><span class="bold">图15</span></a><p>同<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F10">图10</a>，但为KELT-20 b数据</p>
</td>
</tr></tbody></table></div>

<a name="F16"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F16.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig16_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F16.html" target="_blank"><span class="bold">图16</span></a><p>同<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F15">图15</a>，但为H<sub><i>α</i></sub>线数据</p>
</td>
</tr></tbody></table></div>

<a name="F17"></a>
<div class="inset"><table><tbody><tr>
<td valign="middle"><a href="/articles/aa/full_html/2022/11/aa44055-22/F17.html" target="_blank"><img alt="缩略图" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig17_small.jpg"></a></td>
<td class="img-txt">
<a href="/articles/aa/full_html/2022/11/aa44055-22/F17.html" target="_blank"><span class="bold">图17</span></a><p>同<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F9">图9</a>，但为KELT-20 b数据。<i>上图：</i>Na <span class="smallcaps">i</span>双线。<i>下图：</i>H<sub><i>α</i></sub>线</p>
</td>
</tr></tbody></table></div>
<h2 class="sec">
<a name="S5"></a>5 总结与展望</h2>
<p>本文介绍了SLOPpy(Spectral Lines Of Planets with python)——一个标准化、用户友好的工具，用于自动提取和分析系外行星的光学透射光谱。SLOPpy的科学目标是通过地基高分辨率透射光谱表征系外行星大气，这是约束凌日行星大气组成的最可靠技术之一。</p>

<p>提取高可靠性透射光谱需要一系列还原步骤，如去除天空发射、校正差分折射等。这些步骤的细节不仅在本论文中详述，也可在GitHub开源代码库中查阅。</p>

<p>地基观测的主要难点是处理随时间变化的地球大气印记。SLOPpy实现了三种校正方法，本文统一采用最强大的Molecfit工具进行地球大气校正(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S243">第2.4.3节</a>)。</p>

<p>我们还重新实现了临边变化(CLV)和Rossiter-McLaughlin(RM)效应的校正模块。对于强吸收线(如Na <span class="smallcaps">i</span>双线)，这些效应的处理对系外行星大气成分检测至关重要。</p>

<p>最终吸收信号可解释为等效相对高度。管道已优化用于计算这些高度并提取相对吸收深度。</p>

<p>为验证管道在HARPS和HARPS-N数据上的有效性，我们将其应用于HD 189733 b、WASP-76 b、WASP-127 b和KELT-20 b四个大气表征理想目标，重点研究具有大吸收截面的钠双线。与独立分析相同数据的其他研究组相比，我们的结果多数时候在1<i>σ</i>内相符，且SLOPpy能获得相当或更高的显著性。</p>

<p>唯一与其他物理参数(如行星RV半振幅)存在矛盾的是HD 189733 b。鉴于这是唯一出现此情况的目标，我们有信心整体方法正确，但仍不排除输入参数或数据处理中存在未识别的错误。差异更可能源于不同的地球大气校正和/或用于CLV和RM效应校正的恒星模型。这强调了SLOPpy等公开标准工具的必要性——代码发布是实现开放独立比较的第一步，有助于发现分析或模型中的潜在错误。</p>

<p>SLOPpy的计算和绘图模块分离，用户可以检查每个步骤对最终透射光谱的影响。例如我们展示了WASP-127 b的天空发射校正对主外光谱提取的关键作用。代码设计尽可能通用和用户友好，所有可能影响最终结果的参数都记录在用户可配置的文件中。</p>

<p>得益于模块化设计，SLOPpy可随时进行改进和扩展。当前版本支持HARPS和HARPS-N，但可适配其他高分辨率设备如LBT的PEPSI(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R83">Strassmeier et al. 2015</a>)、Calar Alto天文台的CARMENES(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R65">Quirrenbach et al. 2016</a>)和VLT的ESPRESSO<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R9">(Pepe et al. 2014</a>)。虽然本文聚焦钠双线和H<sub><i>α</i></sub>，SLOPpy完全适用于整个可见光波段。</p>

<p>其他分析技术如多普勒层析成像(<a name="InR89"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R89">Watson et al. 2019</a>)和互相关技术(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R60">Pino et al. 2018a</a>)也常用于检测原子和分子物种。虽然SLOPpy初期专注于单线和简单线系(如钠双线和镁三重线)，但这些新方法正在开发中，将通过公共代码库发布。</p>

<p>长期计划是将SLOPpy的灵活性、可移植性和可重复性理念扩展到其他工具，用于比较透射光谱与大气模型(如<a name="InR34"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R34">Guillot 2010</a>; <a name="InR41"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R41">Kawashima &amp; Ikoma 2018</a>)。未来SLOPpy及其后继者不仅能检测大气成分，还能表征系外行星大气的物理条件。</p>