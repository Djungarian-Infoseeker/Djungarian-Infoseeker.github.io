<div id="head">A&A 667, A19 (2022)<h2 class="title">使用SLOPpy表征系外行星大气</h2>




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

<p>为了执行Molecfit拟合，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R2">Allart等人(2017)</a>为每个观测夜晚提供了不同的特定光谱区间。为了将这项技术应用于更广泛的目标，我们选择了两种不同类别或列表的光谱区域。第一个列表包含所有具有强烈大气特征的波长区间，这些波长在观测参考框架(ORF)中列出。第二个列表包含所有没有恒星谱线的光谱区域，这些区域在恒星参考框架(SRF)中选择，并使用HD 189733光谱作为模板。</p>

<p>对于信噪比(S/N)较低的较暗目标观测，拟合可能会变得不可靠。为了防止这个问题，SLOPpy会自动对连续曝光进行叠加；然后在假设天气条件在叠加时间窗口内没有显著变化的情况下，对叠加后的光谱进行Molecfit分析，而分析的第二阶段(即在整个波长范围内计算参考大气光谱)则单独应用于每个观测。</p>

<p>与任何基于夜间光谱随大气质量变化的经验方法不同，Molecfit也可以安全地应用于凌星期间的观测，因为用于表征大气模型的区域理论上不受行星信号的影响。如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F5">图5</a>所示，Molecfit是一个非常强大的工具，能够将大气特征校正到噪声水平，唯一的要求是仔细选择拟合的光谱区域，尽管与其他算法相比它极其缓慢。</p>

<p>如果在校正大气吸收后仍然存在一些残余，管道用户可以决定执行额外的校正。遵循与<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R79">Snellen等人(2010)</a>类似的程序，当将每个光谱除以主出光谱时(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S245">第2.4.5节</a>)，SLOPpy可以通过使用线性样条将每个像素值按其时间方差归一化来去除剩余的大气残余。</p>

<h4 class="sec3">
    <a name="S244"></a>2.4.4 星际谱线
</h4>

<p>根据恒星的距离和其在天空中的位置，星际吸收线可能存在于光谱中。由于星际线相对于系外行星系统的质心是静止的，而恒星的视向速度由于行星的存在而变化，对于慢速自转体(<i>v</i> sin <i>i</i> &lt; 10 km s<sup>−1</sup>)，我们验证了不校正它们的存在会干扰最终的透射光谱，特别是在钠双线区域。对于每个数据集，SLOPpy通过在BRF中叠加光谱并归一化局部连续谱后，用样条拟合星际吸收线来建立模型。然后通过这个经验模型校正每个观测。从这一步获得的结果仍然不是最优的，我们正在尝试改进程序。无论如何，在迄今为止分析的数据中，还没有必要使用这个模块。</p>

<p>在某些情况下，可以忽略星际线校正。如果宿主恒星是快速自转体(<i>v</i> sin <i>i</i> &gt; 15-20 km s<sup>−1</sup>, <a name="InR82"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R82">Stauffer等人1997</a>)，如早期型恒星通常的情况，即使是一个像素量级的波长偏移(对应于HARPS/HARPS-N情况下约0.8 km s<sup>−1</sup>的视向速度变化，即约8<i>M</i><sub>J</sub>行星引起的视向速度变化)也不会明显改变光谱形状。事实上，谱线变得如此宽而浅，以至于作为波长函数(在静止参考系中)的通量变化与光子噪声相比可以忽略不计。在这种情况下，可以不必考虑行星引起的反射运动而将凌星外光谱叠加。有了这个假设，当将每个光谱除以主出光谱时(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S245">第2.4.5节</a>)，星际线会自动删除。<a name="InR14"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Casasayas-Barris等人(2018)</a>在分析MASCARA-2 b/KELT-20 b时提供了这种方法的一个例子，我们在此确认其有效性。</p>

<h4 class="sec3">
    <a name="S245"></a>2.4.5 构建主出光谱
</h4>

<p>所有观测(包括凌星中和凌星外)都包含恒星光和大气吸收，而凌星中观测还额外包含印在恒星通量中的系外行星大气吸收。为了分离它并去除恒星贡献，管道计算一个"主出"光谱(<i>M</i><sub>OUT</sub>)，它由凌星前后获得的曝光积分给出。</p>

<p>由于行星凌星期间恒星的视向速度变化，所有光谱的恒星谱线在波长上发生了偏移。因此，在构建<i>M</i><sub>OUT</sub>之前，管道将光谱移动到SRF，使所有恒星谱线对齐到相同位置。</p>

<h4 class="sec3">
    <a name="S246"></a>2.4.6 透射光谱准备
</h4>

<p>在应用上述校正后，每个凌星中观测(<i>F</i><sub><i>i</i>,in</sub>)除以重新归一化到1的<i>M</i><sub>OUT</sub>(<span>$M_{{\rm{OUT}}}^\~$</span>)，以获得该曝光的透射光谱：

称为光谱比。计算在ORF中进行，意味着将(高S/N的)<i>M</i><sub>OUT</sub>从SRF移回，以避免在噪声大得多的单个凌星中观测上进行任何不必要的重分箱步骤。</p>

<p>管道在配置文件中指定的感兴趣的原子种类周围的光谱范围内提取透射光谱。实际上，透射光谱是在仪器的整个光谱范围内计算的，这很容易允许未来采用其他方法来搜索原子或分子种类，如交叉相关函数(<a name="InR60"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R60">Pino等人2018a</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R37">Hoeijmakers等人2019</a>)，而限制在特定波长范围内允许在合理的时间内执行计算昂贵的分析。共振钠双线(在5889.95 Å和5895.92 Å处)，由于其大的吸收截面，是被研究最多的大气特征之一(例如，<a name="InR78"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen等人2008</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach等人2015</a>; <a name="InR16"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R16">Casasayas-Barris等人2020</a>)。</p>

<h4 class="sec3">
    <a name="S247"></a>2.4.7 中心到边缘变化和Rossiter-McLaughlin效应
</h4>

<p>当行星从恒星盘面前经过时，它会阻挡部分恒星光。根据行星覆盖的恒星表面特定位置的光谱特性，积分恒星光谱可能与从凌星外观测获得的光谱不同，导致系外行星透射光谱变形。改变透射光谱的两个主要效应是中心到边缘变化(CLV)和Rossiter-McLaughlin(RM)效应。</p>

<p>RM效应是恒星自转的结果。被行星阻挡的恒星光可能会红移或蓝移，这取决于行星覆盖的是恒星的哪一侧，从而导致每条谱线变形(例如，<a name="InR49"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R49">Louden &amp; Wheatley 2015</a>)。</p>

<p>另一方面，CLV效应是归一化恒星谱线从中心到边缘穿过恒星盘面的轮廓变化，因为当我们向边缘移动时观察到的是更外层、更冷的光球层，类似于光度学中的边缘变暗。对于更强的吸收线，CLV可能会有相当大的变化，在检测系外行星大气种类时变得至关重要(<a name="InR95"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan等人2017</a>)。对于慢速自转恒星，吸收线上变形的大小大致按(<i>R</i><sub>p</sub>/<i>R</i><sub>s</sub>)<sup>2</sup>比例缩放。除了行星与恒星半径比之外，还有多种参数会影响CLV特征，包括恒星参数和行星轨道参数。特别是，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan等人(2017)</a>表明，对于Na <span class="smallcaps">i</span> D线，CLV效应在较低<i>T</i><sub>eff</sub>的恒星和接近<i>b</i> = 0.84的撞击参数下更强。此外，建模的CLV特征还取决于恒星大气模型；通常非LTE和三维模型可以产生更真实的结果(<a name="InR48"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R48">Leenaarts等人2012</a>; <a name="InR7"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R7">Borsa等人2021</a>)。</p>

<p>在分析透射光谱时，重要的是要同时考虑这两种效应，因为从被行星覆盖的恒星表面每个元素发出的光谱将在波长上偏移(对于RM效应)并在不同的光球深度形成(对于CLV效应)。这导致特定边缘变暗部分的恒星光损失和特定的视向速度。</p>

<p>为了校正这两种效应，遵循<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan等人(2017)</a>，我们首先在21个不同的<i>μ</i>值(从零到一步长为0.05)下模拟合成恒星光谱，其中<i>μ</i> = cos <i>θ</i><b>,</b>，<i>θ</i>是恒星表面法线与视线之间的角度("边缘角")。在恒星边缘，我们假设<i>μ</i> = 0.001而不是<i>μ</i> = 0以避免数值问题(<a name="InR23"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">Czesla等人2015</a>)。恒星光谱是使用Spectroscopy Made Easy(SME, <a name="InR63"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R63">Piskunov &amp; Valenti 2017</a>)获得的，使用VALD数据库<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">(Ryabchikova等人2015</a>)的谱线列表和MARCS(<a name="InR35"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R35">Gustafsson等人2008</a>)或Kurucz ATLAS9(<a name="InR46"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R46">Kurucz 2005</a>)模型。这些光谱计算时不包括恒星的自转加宽，因为它们旨在表示从恒星给定位置发出的光谱。盘面积分、加宽的光谱也由SME计算。随后，我们将恒星盘面划分为大小为0.01 <i>R</i><sub>s</sub> <i>×</i> 0.01 <i>R</i><sub>s</sub>的元素；每个这些元素都有一个<i>μ</i>值，因此它的光谱是从先前计算的合成光谱中线性插值得到的。为了考虑RM效应，如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Yan &amp; Henning (2018)</a>中所述，每个光谱也根据元素在盘面上的位置、系统几何形状、恒星自转速度和微分自转的存在(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F6">图6</a>)进行多普勒偏移到元素的投影速度。</p>

<p>非常重要的是要注意，不同轨道相位建模的恒星光谱是针对一个行星半径(<i>R</i><sub>p</sub>)的，而实际有效半径大于<i>R</i><sub>p</sub>，因为行星吸收是波长依赖的。为了考虑这个半径变化，用户可以在拟合数据时决定引入一个因子r(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S248">第2.4.8节</a>)，假设相应的谱线变化是当半径为1 <i>R</i><sub>p</sub>时结果的r倍；在这种情况下，管道计算r值网格的建模恒星光谱，例如，r在0.5到2.5之间，步长为0.1。</p>

<p>最后，我们通过积分被行星遮挡的所有表面元素，并从盘面积分恒星光谱中减去结果，来模拟凌星期间每次观测的恒星光谱。作为波长函数的校正因子是通过将每个模拟光谱除以凌星外盘面积分模型获得的。然后通过将其除以相应的校正因子，对每次观测的透射光谱(见方程<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FD1">(1)</a>)进行CLV和RM效应校正。</p>

<p>这种校正在原始参考框架中的单个透射光谱上执行，通过重新分箱校正模型，即使它需要更大的计算努力和更复杂的算法结构。最后，在移动到行星参考框架(PRF)构建平均透射光谱时，对观测光谱进行的唯一重分箱步骤(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S249">第2.4.9节</a>)。</p>
  <p>当行星从恒星盘面前经过时，它会阻挡部分恒星光。根据行星覆盖的恒星表面特定位置的光谱特性，积分恒星光谱可能与凌日外观测获得的光谱不同，导致系外行星透射光谱变形。改变透射光谱的两个主要效应是临边变化(CLV)和Rossiter-McLaughlin(RM)效应。</p>

  <p>RM效应是恒星自转的结果。被行星阻挡的恒星光可能发生红移或蓝移，取决于行星覆盖恒星的哪一侧，从而导致每条谱线变形(例如<a name="InR49"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R49">Louden &amp; Wheatley 2015</a>)。</p>

  <p>另一方面，CLV效应是归一化恒星谱线从中心到边缘在恒星盘面上的轮廓变化，因为当我们向边缘移动时，我们观测到更外层、更冷的光球层，类似于光度学中的临边昏暗。对于更强的吸收线，CLV可以变化相当显著，在检测系外行星大气种类时变得至关重要(<a name="InR95"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. 2017</a>)。对于慢速自转恒星，吸收线上变形的大小大致与(R<sub>p</sub>/R<sub>s</sub>)<sup>2</sup>成比例。除了行星与恒星半径比之外，还有多种参数影响CLV特征，包括恒星参数和行星轨道参数。特别是，<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. (2017)</a>表明，对于Na <span class="smallcaps">i</span> D线，CLV效应对于较低有效温度T<sub>eff</sub>和接近b = 0.84的撞击参数的恒星更强。此外，建模的CLV特征还取决于恒星大气模型；通常非LTE和三维模型可以产生更真实的结果(<a name="InR48"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R48">Leenaarts et al. 2012</a>; <a name="InR7"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R7">Borsa et al. 2021</a>)。</p>

  <p>在分析透射光谱时，重要的是同时考虑这两种效应，因为从行星覆盖的恒星表面每个元素出现的光谱将在波长上移动(对于RM效应)并在不同的光球层深度形成(对于CLV效应)。这导致特定临边昏暗部分的恒星光损失和特定的径向速度。</p>

  <p>为了校正这两种效应，遵循<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R95">Yan et al. (2017)</a>，我们首先在21个不同的μ值(从零到一步长为0.05)模拟合成恒星光谱，其中μ = cosθ，θ是恒星表面法线与视线之间的角度("临边角")。在恒星边缘，我们假设μ = 0.001而不是μ = 0以避免数值问题(<a name="InR23"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">Czesla et al. 2015</a>)。使用Spectroscopy Made Easy(SME, <a name="InR63"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R63">Piskunov &amp; Valenti 2017</a>)和VALD数据库(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R23">Ryabchikova et al. 2015</a>)的线表以及MARCS(<a name="InR35"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R35">Gustafsson et al. 2008</a>)或Kurucz ATLAS9(<a name="InR46"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R46">Kurucz 2005</a>)模型获得恒星光谱。这些光谱计算时不包含恒星的自转加宽，因为它们旨在表示从恒星给定位置出现的光谱。SME还计算盘面积分、加宽的光谱。随后，我们将恒星盘面划分为大小为0.01 R<sub>s</sub> × 0.01 R<sub>s</sub>的元素；每个这些元素有一个μ值，因此其光谱从先前计算的合成光谱线性插值。为了考虑RM效应，如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Yan &amp; Henning (2018)</a>，每个光谱也根据元素在盘面上的位置、系统几何、恒星自转速度和微分自转的存在，多普勒位移到元素的投影速度(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F6">图6</a>)。</p>

  <a name="F6"></a>
  <div class="figure-container">
    <table>
      <tbody>
        <tr>
          <td valign="middle">
            <a href="/articles/aa/full_html/2022/11/aa44055-22/F6.html" target="_blank">
              <img alt="恒星盘面上不同μ角和径向速度分布" src="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22-fig6_small.jpg">
            </a>
          </td>
          <td class="figure-caption">
            <a href="/articles/aa/full_html/2022/11/aa44055-22/F6.html" target="_blank"><span class="bold">图6</span></a>
            <p>系外行星系统中恒星盘面上不同μ角(<i>左图</i>)和径向速度(<i>右图</i>)的分布，该系统参数为λ = (−22.1 ± 6.0)°和v sin i = (19.6 ± 0.5) km s<sup>−1</sup>。</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h4 class="section-subtitle">
    <a name="S248"></a>2.4.8 MCMC分析
  </h4>

  <p>如果残差中存在光谱吸收线，用户可以决定对其进行建模并评估检测显著性。如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R14">Yan &amp; Henning (2018)</a>所示，SLOPpy使用emcee工具(<a name="InR31"></a><a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R31">Foreman-Mackey et al. 2013</a>)进行马尔可夫链蒙特卡洛(MCMC)分析。该模型假设吸收线具有高斯轮廓，在其他情况下为平坦光谱(<span class="math-inline">${{\tilde \Re }_{\rm{i}}} = 1$</span>)。CLV和RM建模包含一个因子r，用于考虑分析波长范围内行星半径与凌日光度测量获得值(可能在不同波长范围获得)之间的可能差异。</p>

  <p>模型的自由参数包括：行星的RV半振幅(K<sub>p</sub>)，用于在PRF中建模大气吸收线；描述行星吸收的高斯轮廓的对比度(h)和半高全宽(FWHM)；相对于PRF过渡的大气风RV(v<sub>wind</sub>)；有效行星半径比例因子(r)。对于每次观测，透射模型的谱线根据行星的瞬时RV(从K<sub>p</sub>和观测时的轨道相位计算)移动到PRF。</p>

  <p>需要注意的是，MCMC分析仅应用于完全凌日内的数据(即排除进入和退出阶段)，因为在进入和退出阶段的行星吸收光谱与完全凌日内不同，此时RM效应最约束r因子。虽然原则上可以建模这种差异，但此功能尚未在SLOPpy中实现。</p>

  <p>为了减少计算时间，分析在SRF中对用户选择步长(例如0.05 Å，如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R15">Casasayas-Barris et al. 2019</a>所用)分箱的单个透射光谱上进行。这个选择主要出于保持计算机内存使用和MCMC每一步执行时间在可接受水平的考虑。这也是分析数据上进行的唯一重新分箱步骤，从而最小化重新分箱过程对低信噪比光谱引入的系统噪声的影响。我们探索了在未分箱光谱(即在原始参考系中)进行分析的可能性以避免任何重新分箱过程，但与之前方法相比，极长的计算时间和更高的内存需求(主要由于光谱不再在共同波长网格上)阻止了我们完全开发此选项，尽管我们不排除将其作为未来功能。</p>

  <p>这里报告的不确定性表示自由参数后验分布的第15到第84百分位的置信区间。误差从光子噪声传播，但经常被低估；因此我们在拟合过程中允许自由抖动参数。这个参数被平方添加到误差中以考虑任何额外的系统误差(例如不良视宁度)。</p>

  <p>对于同一目标有多个夜晚数据的情况，首先对单个夜晚进行MCMC，然后执行包含所有夜晚的全局拟合。管道还返回用户固定参数的透射光谱(此时行星半径不是自由参数)和仅使用凌日外光谱构建的所谓"平均外"透射光谱。预期平坦的平均外透射光谱用于检查任何非行星来源的残差。</p>

  <p>在配置文件中，用户可以设置步数和行走者数量、计算拟合的范围、分箱步长和参数先验。此外，有一个标志决定是否释放参数r和v<sub>wind</sub>。如果MCMC分析要同时对多条谱线进行(例如钠双线的两条线或镁三重线)，用户还可以决定这些线是否应共享相同的FWHM或相同的风引起的径向速度位移。</p>

  <h4 class="section-subtitle">
    <a name="S249"></a>2.4.9 最终透射光谱
  </h4>

  <p>最终透射光谱通过在PRF中求和方程<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#FD1">(1)</a>的所有光谱比获得：
  <a name="FD2"></a><span class="math-block">$\tilde R{|_{{\rm{PRF}}}} = \sum\limits_{i = 0}^N {\left( {{{\tilde R}_i}{|_{{\rm{PRF}}}}} \right)}$</span><span class="equation-label">(2)</span></p>

  <p>其中N是凌日内光谱的数量。这避免了在恒星或观测者参考系中执行此步骤将导致的行星大气吸收线的剪切。如果同一目标有多个可用数据集(例如在不同夜晚或用不同仪器观测的目标)，管道可以组合所有数据集计算平均透射光谱。</p>

  <p>主外光谱必须始终在SRF中构建。另一方面，透射光谱可以在PRF中构建(这是检测行星信号必须的)，如果怀疑信号可能有恒星来源(例如恒星活动)则在SRF中构建，或如果怀疑信号可能有局部来源(例如地球大气吸收去除不正确)则在ORF中构建。</p>

  <h3 class="section-title">
    <a name="S3"></a>3 吸收深度提取
  </h3>

  <p>为了表征检测到的行星信号，我们通过积分以分析中的大气物种波长为中心的窄通带内的通量，并将其与连续谱中参考通带内的通量比较，计算相对吸收深度(δ)。对于钠双线，包含信号的中央通带(C)被分成两个较小的通带，双线的每条线一个，D<sub>2</sub>和D<sub>1</sub>，我们感兴趣测量其中的过量吸收。由于每个中央通带仅包含一条线，两条Na <span class="smallcaps">i</span>双线的吸收深度经常取平均。为了将我们的结果与文献中其他工作(例如<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R91">Wyttenbach et al. 2015</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R70">Seidel et al. 2019</a>)比较，我们选择相同的带宽(例如2 × 0.75 Å、2 × 1.50 Å、2 × 3.00 Å)用于中央通带，以及相同的参考通带(例如[5874.89-5886.89] Å和[5898.89-5910.89] Å)用于连续谱，取自中央通带的蓝色和红色侧(见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#F7">图7</a>)。</p>

  <p>SLOPpy可以遵循两种不同方法提取吸收深度：分析"透射光变曲线"(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen et al. 2008</a>，见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S31">第3.1节</a>)，或分析最终透射光谱(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R66">Redfield et al. 2008</a>，见<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#S32">第3.2节</a>)。</p>

  <h4 class="section-subtitle">
    <a name="S31"></a>3.1 透射光变曲线分析
  </h4>

  <p>系外行星大气中吸收物种的存在可以看作是凌日期间的相对通量下降。这可以通过构建透射光变曲线来推断，即在特定通带内相对通量随时间的变化(<a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R19">Charbonneau et al. 2002</a>; <a href="/articles/aa/full_html/2022/11/aa44055-22/aa44055-22.html#R78">Snellen et al. 2008</a>)。SLOPpy对每次曝光(t)和给定用户定义通带(Δλ)推导相对通量为：
  <a name="FD3"></a><span class="math-block">${F_{{\rm{rel}}}}\left( {t,\Delta \lambda } \right) = {{\overline {F\left( C \right)} } \over {\overline {F\left( B \right)} + \overline {F\left( R \right)} }}$</span><span class="equation-label">(3)</span></p>

  <p>其中<span class="math-inline">$\overline {F\left( C \right)} $</span>是感兴趣原子物种中心通带内的加权平均通量，而<span class="math-inline">$\overline {F\left( B \right)} $</span>和<span class="math-inline">$\overline {F\left( R \right)} $</span>是光谱特征蓝色和红色侧两个参考通带内的加权平均通量。虽然F(B)和F(R)在行星凌日期间应保持不变(因为它们仅包含恒星光)，F(C)根据行星大气的额外吸收而变化。</p>

  <p>每个通带和每条谱线的光变曲线的相对吸收深度由下式给出：
  <a name="FD4"></a><span class="math-block">$\delta \left( {\Delta \lambda } \right) = {{\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} } \over {\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} }} - 1,$</span><span class="equation-label">(4)</span></p>

  <p>其中<span class="math-inline">$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{in}}}}} \right)} $</span>和<span class="math-inline">$\overline {{F_{{\rm{rel}}}}\left( {{t_{{\rm{out}}}}} \right)} $</span>分别是凌日内和凌日外的加权平均相对通量。我们注意到这个计算在SRF中进行。在凌日期间，行星信号将根据行星的RV(对于圆形轨道，在凌日中心时间理想为零)在光谱上移动。如果中央通带太窄，可能无法捕获凌日开始和结束部分的行星信号，从而导致透射光变曲线中的凌日持续时间缩短。</p>
