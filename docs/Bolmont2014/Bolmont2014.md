
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kepler-186 系统的形成、潮汐演化及宜居性</title>
    <script type="text/javascript" async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>Kepler-186 系统的形成、潮汐演化及宜居性</h2>
    <p><strong>作者：</strong>Emeline Bolmont, Sean N. Raymond, Philip von Paris, Franck Selsis, Franck Hersant, Elisa V. Quintana, Thomas Barclay</p>
    <p><strong>发布时间：</strong>2014年8月27日 • © 2014 美国天文学会。保留所有权利。</p>
    <p><strong>期刊：</strong>《天体物理学杂志》，第 793 卷，第 1 期</p>
    <p><strong>引用：</strong>Emeline Bolmont et al 2014 ApJ 793 3</p>
    <p><strong>DOI：</strong> <a href="https://doi.org/10.1088/0004-637X/793/1/3">10.1088/0004-637X/793/1/3</a></p>
    

    
    <h2>摘要</h2>
    <p>Kepler-186 系统由五颗围绕早期 M 型矮星运行的行星组成。这些行星的物理半径介于 1.0–1.50 R⊕ 之间，公转周期为 4–130 天。其中，直径约 1.1 R⊕，周期为 130 天的 Kepler-186f 特别值得关注。其太阳常数约为 0.32 S⊕，使其处于表面液态水宜居带 (HZ) 内。</p>
    
    <p>我们对 Kepler-186 系统进行了多方面研究，采用了两个与观测数据一致且自洽的参数集。首先，我们展示了如果这些行星是从一个高表面密度的原行星盘中聚集形成的（可能是由早期迁移阶段塑造的），那么行星质量的分布可以大致再现。然而，我们的模拟预测在行星 e 和 f 之间可能存在一到两颗尚未被发现的行星。</p>
    
    <p>接下来，我们分析了系统的动力学，包括潮汐效应的影响。潮汐演化的时间尺度足够短，以至于四颗内行星必须具有较小的自转倾角，并接近同步自转。Kepler-186f 的潮汐演化较慢，其当前自转状态取决于初始自转状态、耗散率及恒星年龄的综合作用。</p>
    
    <p>最后，我们使用一维气候模型研究了 Kepler-186f 的宜居性。其表面温度可以在 CO<sub>2</sub> 压力为 0.5–5 巴（取决于 N<sub>2</sub> 的含量）时升高至 273 K 以上。Kepler-186f 作为一颗处于冷星宜居带较冷区域的地球大小行星，为我们提供了一个重要的研究案例。</p>
    
  <h1>1. 介绍</h1>
  <p>
    开普勒任务（Borucki 等, 2010）在寻找类地行星的道路上取得了关键性发现（例如, Batalha 等, 2011；Borucki 等, 2012；Fressin 等, 2012；Borucki 等, 2013）。最近在一颗 M 型恒星的适居带中发现了一颗类地行星（即开普勒-186系统, Quintana 等, 2014），这使我们离找到真正的“地球双胞胎”更近了一步。
  </p>
  <p>
    开普勒-186行星系统包含已知的五颗行星，其中包括位于适居带内的一颗类地行星——开普勒-186f（Selsis 等, 2007b；Kopparapu 等, 2013）。图 1 展示了开普勒-186系统、太阳系以及另外两个可能拥有适居行星的系统之间的比较：开普勒-62（Borucki 等, 2013）和 GJ 581（Udry 等, 2007；Mayor 等, 2009）。气候模型表明，靠近其宿主 M 型恒星适居带外侧的超级地球 GJ 581d 能够维持表面液态水（例如, Wordsworth 等, 2010）。开普勒-186f 接收到的恒星辐射与 GJ 581 相当，甚至略高，使其更为舒适地处于适居带内。
  </p>
    <h1>图 1. 开普勒-186系统的轨道构型</h1>
  <div class="figure">
    <img src="https://content.cld.iop.org/journals/0004-637X/793/1/3/revision1/apj499317f1_lr.jpg" alt="开普勒-186系统轨道构型">
    <div class="caption">
      上部分展示了该系统的俯视图（假设采用某一参数集的轨道数据）。适居带边界取自 Kopparapu 等（2013）：内部边界为潮湿/失控温室极限，外部边界为最大温室效应及早期火星的极限。<br>
      下部分展示了四个包含适居带行星的不同行星系统之间的比较：太阳系、开普勒-62（Borucki 等, 2013）、开普勒-186（Quintana 等, 2014）以及 GJ 581（Udry 等, 2007；Mayor 等, 2009）。<br>
      注意，开普勒-62、开普勒-186 和 GJ 581 的适居带内部潮湿和失控温室极限是相同的。考虑到入射辐射的统一标度，x 轴在轨道距离上呈线性，但每个系统的尺度各不相同。行星的相对尺寸是正确的，尽管对于 GJ 581，行星半径是按照公式
      $$ R = [M\sin(i)]^{2.06} $$
      （遵循 Lissauer 等, 2011）计算得到的。
    </div>
  </div>
  <p>
    这里，我们采用经典适居带的定义（例如, Dole 1964；Hart 1978；Kasting 等, 1993；Selsis 等, 2007b；Kopparapu 等, 2013）。鉴于所有陆生生命均需要液态水，适居带被定义为围绕恒星的一片区域，在这一区域内，一个类地行星的表面可以存在液态水。适居带的范围自然依赖于大气条件（成分、压力）以及中心恒星的性质。还有许多其他因素影响适居带的宽度，例如地质活动（例如, Lammer 等, 2010）、生物圈本身（例如, Grenfell 等, 2010），或行星系统的动力学环境（例如, Menou & Tabachnik 2003；Barnes & Raymond 2004；Jones 等, 2006；Sándor 等, 2007；Kopparapu & Barnes 2010）。
  </p>
  <p>
    我们对开普勒-186系统进行了三方面的研究。首先，我们尝试使用简单的吸积模拟（见第 3 节）来重现该系统的轨道构型。我们表明，该系统的某些特征——例如行星 e 与行星 f 之间的大间隙——很难解释。接下来，我们简要讨论了系统的长期动力学稳定性（见第 4 节）。在第 5 节中，我们研究了该系统的长期动力学、潮汐和自转演化。我们既使用了简单的潮汐模型，也进行了包括潮汐和广义相对论效应的 N 体模拟。随后，在第 6 节中，我们研究了使开普勒-186f 表面温度达到液态水范围所需的大气条件。最后，我们在第 7 节中讨论了研究发现并进行了总结。
  </p>
    <h1>2. 模型输入参数</h1>
  <p>
    Quintana 等 (2014) 中给出的恒星属性和行星参数是各自概率密度的中位值。然而，这些中位值并不要求自洽（例如，恒星的密度、半径和质量之间的关系并未得到遵循）。为了研究该系统的动力学演化及其宜居性，我们需要一组自洽的参数。有两种方法可以获得一组自洽的恒星和行星参数，这两种方法分别定义为参数集 <strong>A</strong> 和 参数集 <strong>B</strong>：
  </p>
  <ol>
    <li>
      参数集 <strong>A</strong>：选择恒星属性使其与通过执行马尔可夫链蒙特卡罗（MCMC）方法获得的点估计凌日模型相匹配（例如，Barclay 等, 2013）；
    </li>
    <li>
      参数集 <strong>B</strong>：选择凌日模型使其与通过执行 MCMC 获得的点估计恒星属性相匹配。该参数集的恒星属性与 Quintana 等 (2014) 中表 S1 的数据相对应。
    </li>
  </ol>
  <p>
    参数集 <strong>A</strong> 和 <strong>B</strong> 都是有效的参数集，意味着它们既符合观测数据，又是自洽的。
  </p>
  <p>
    在参数集 <strong>A</strong> 中，恒星质量为 0.5359 $M_\odot$，而在参数集 <strong>B</strong> 中为 0.478 $M_\odot$（参见表 1 及 Quintana 等, 2014）。这导致行星的半长轴和入射辐射（insolation）的数值有所不同（参见表 2）。行星半径亦如此，因为它们是通过检测到的凌日深度和恒星半径推导出来的。各参数集之间参数值的这种差异，反映了我们对该系统了解的有限性。我们预计系统的真实参数将在参数集 <strong>A</strong> 和 <strong>B</strong> 的范围内，因此我们对这两组参数都进行了动力学模拟。然而，取参数集 <strong>A</strong> 和 <strong>B</strong> 的平均值并非可行，因为那样做将失去自洽性（正如 Quintana 等, 2014 中所述）。这也是为何我们选择了一种不同于 Quintana 等 (2014) 的方法，即半长轴不再根据推导的恒星属性选取，而仅由凌日模型确定。
  </p>
  
  <h2>表 1. 恒星属性</h2>
  <table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <th></th>
      <th>质量 ($M_\odot$)</th>
      <th>半径 ($R_\odot$)</th>
      <th>$T_{\mathrm{eff}}$ (K)</th>
      <th>$L_\star/L_\odot$</th>
    </tr>
    <tr>
      <td>参数集 A</td>
      <td>0.536</td>
      <td>0.5138</td>
      <td>3747</td>
      <td>0.0468</td>
    </tr>
    <tr>
      <td>参数集 B</td>
      <td>0.478</td>
      <td>0.4720</td>
      <td>3788</td>
      <td>0.0412</td>
    </tr>
  </table>
  <p><em>注：</em>数据来自 Quintana 等 (2014) 的表 S1。</p>
  <p>下载表格：ASCIITypeset image</p>
  
  <h2>表 2. 行星物理参数</h2>
  <table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <th></th>
      <th>Kepler-186b</th>
      <th>Kepler-186c</th>
      <th>Kepler-186d</th>
      <th>Kepler-186e</th>
      <th>Kepler-186f</th>
    </tr>
    <tr>
      <td>周期 (天)<sup>a</sup></td>
      <td>3.887</td>
      <td>7.267</td>
      <td>13.34</td>
      <td>22.41</td>
      <td>129.9</td>
    </tr>
    <tr>
      <td>半长轴 (AU) – 参数集 A</td>
      <td>0.0393</td>
      <td>0.0596</td>
      <td>0.0894</td>
      <td>0.1264</td>
      <td>0.4078</td>
    </tr>
    <tr>
      <td>半长轴 (AU) – 参数集 B</td>
      <td>0.0378</td>
      <td>0.0574</td>
      <td>0.0861</td>
      <td>0.1216</td>
      <td>0.3926</td>
    </tr>
    <tr>
      <td>半径 ($R_\oplus$) – 参数集 A</td>
      <td>1.16</td>
      <td>1.33</td>
      <td>1.50</td>
      <td>1.36</td>
      <td>1.17</td>
    </tr>
    <tr>
      <td>半径 ($R_\oplus$) – 参数集 B</td>
      <td>1.08</td>
      <td>1.25</td>
      <td>1.39</td>
      <td>1.33</td>
      <td>1.13</td>
    </tr>
    <tr>
      <td>入射辐射 ($S_\oplus$) – 参数集 A</td>
      <td>30.2</td>
      <td>13.1</td>
      <td>5.8</td>
      <td>2.9</td>
      <td>0.28</td>
    </tr>
    <tr>
      <td>入射辐射 ($S_\oplus$) – 参数集 B</td>
      <td>28.7</td>
      <td>12.5</td>
      <td>5.5</td>
      <td>2.8</td>
      <td>0.27</td>
    </tr>
  </table>
  <p><em>注：</em>数据来自 Quintana 等 (2014) 的表 S2，数据经过四舍五入。</p>
  <p>下载表格：ASCIITypeset image</p>
  
  <p>
    开普勒-186系统中的所有五颗行星在两个参数集中其半径均介于 1.0 和 1.5 $R_\oplus$ 之间。考虑到低密度、气体主导的行星往往大于 1.5–2 $R_\oplus$（Weiss 等, 2013；Weiss & Marcy, 2014；Lopez & Fortney, 2013；Jontof-Hutter 等, 2014；Marcy 等, 2014a, 2014b），因此所有开普勒-186的行星很可能是岩石质或至少是固态的。行星的质量尚未通过径向速度或凌日时变测量得到约束（Quintana 等, 2014）。表 3 显示了在不同组成假设下的可能行星质量范围：100% 冰、50% 冰/50% 岩、类似地球组成以及 100% 铁（依据 Fortney 等, 2007）。
  </p>
  
  <h2>表 3. 可能的行星质量范围（单位：$M_\oplus$）</h2>
  <p><em>注：</em>使用 Fortney 等 (2007) 的公式针对参数集 B 计算</p>
  <table border="1" cellspacing="0" cellpadding="5">
    <tr>
      <th></th>
      <th>纯冰</th>
      <th>50% 冰-岩</th>
      <th>类似地球</th>
      <th>纯铁</th>
    </tr>
    <tr>
      <td>Planet b</td>
      <td>0.29</td>
      <td>0.48</td>
      <td>1.32</td>
      <td>3.36</td>
    </tr>
    <tr>
      <td>Planet c</td>
      <td>0.46</td>
      <td>0.77</td>
      <td>2.27</td>
      <td>6.30</td>
    </tr>
    <tr>
      <td>Planet d</td>
      <td>0.65</td>
      <td>1.10</td>
      <td>3.45</td>
      <td>10.2</td>
    </tr>
    <tr>
      <td>Planet e</td>
      <td>0.56</td>
      <td>0.95</td>
      <td>2.89</td>
      <td>8.32</td>
    </tr>
    <tr>
      <td>Planet f</td>
      <td>0.33</td>
      <td>0.55</td>
      <td>1.55</td>
      <td>4.06</td>
    </tr>
  </table>

</html>