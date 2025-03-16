<body bgcolor="white" link="BLUE" vlink="PURPLE">

<a name="tex2html226" href="node12.html">
<img width="37" height="24" align="BOTTOM" border="0" alt="next" src="next.png"></a> 
<a name="tex2html222" href="node8.html">
<img width="26" height="24" align="BOTTOM" border="0" alt="up" src="up.png"></a> 
<a name="tex2html216" href="node10.html">
<img width="63" height="24" align="BOTTOM" border="0" alt="previous" src="prev.png"></a> 
<a name="tex2html224" href="node1.html">
<img width="65" height="24" align="BOTTOM" border="0" alt="contents" src="contents.png"></a>  <br>
<b> 下一页:</b> <a name="tex2html227" href="node12.html">示踪剂 Namelist</a>
<b>向上:</b> <a name="tex2html223" href="node8.html">Namelist 变量</a>
<b>上一页:</b> <a name="tex2html217" href="node10.html">写入输出</a>
<br> <p>

<!-- 导航面板结束 -->
</p><h2><a name="SECTION00043000000000000000">
模型物理</a>
</h2>

<p>
冰模型物理的 namelist 变量列在表 <a href="#ice_nml">3</a> 中。
<tt>restart</tt> 变量通常设置为 true，因为大多数运行类型都会读取二进制重启文件。
请参阅 <a href="node21.html#runtypes">第 5 章</a> 了解运行类型以及如何使用重启文件和内部生成的模型数据作为初始条件。

<tt>kcolumn</tt> 是一个标志，若设为 1，则模型以单列模式运行。
该选项未经充分测试，且不受支持。
</p><p>
冰速的计算在每个时间步长内被子循环 <tt>ndte</tt> 次，以便在下一时间步长之前阻尼弹性波。
子循环时间步长计算方式如下：
<tt>dte = dt/ndte</tt>，
它必须足够小，以确保阻尼时间尺度 <tt>T</tt> 足够短于 <tt>dt</tt>。
</p><p>
<div align="CENTER">
<table width="100%" align="CENTER">
<tbody><tr valign="MIDDLE"><td align="CENTER" nowrap="">
<i>dte</i> &lt; <i>T</i> &lt; <i>dt</i>
</td>
<td width="10" align="RIGHT">
(2)</td></tr>
</tbody></table>
</div>

<p>
这个关系在 (<a href="node40.html#hunk01">Hunke(2001)</a>) 中讨论过；也可参见 (<a href="node40.html#cice08">Hunke 和 Lipscomb(2008)</a>) 的第 4.4 节。
[dte : T : dt] 的最佳比例为 [1 : 40 : 120]。
常见的 <tt>dt</tt> 和 <tt>ndte</tt> 组合包括 (3600., 120)、(7200., 240)、(10800., 120)。
默认情况下，ndte 在 <b>ice_init.F90</b> 文件中设置为 120。
</p><p>

<tt>kitd</tt> 变量决定了冰厚度分布 (ITD) 变化时使用的方案。
默认的线性重映射方案将每个类别的厚度分布近似为线性函数 ((<a href="node40.html#lips01">Lipscomb(2001)</a>))。
而 Delta 函数方法将 <i>g(h)</i> 表示为 Delta 函数 ((<a href="node40.html#bitz01">Bitz 等(2001)</a>))，
这种方法可能会导致某些类别在特定时间点几乎为空，并导致 <i>g(h)</i> 的特性发生突变。
</p><p>

<tt>kdyn</tt> 变量决定了模型中的冰动力学方案。
默认情况下采用弹性-粘性-塑性 (EVP) 动力学模型 (<a href="node40.html#hunk97">Hunke 和 Dukowicz(1997)</a>)。
如果 <tt>kdyn</tt> 设为 0，则冰动力学不活跃。
在这种情况下，冰速不会被计算，冰也不会被运输。
由于初始冰速是从重启文件中读取的，因此在日志文件中记录的最大和最小速度可能不为零，
但这些值不会用于任何计算。
</p><p>
<tt>kstrength</tt> 变量决定了用于计算冰强度的公式。
(<a href="node40.html#hibl79">Hibler(1979)</a>) 的计算依赖于平均冰厚和开阔水面积。
(<a href="node40.html#roth75b">Rothrock(1975)</a>) 的计算基于能量学原理，不建议在未能很好解析成堆过程的情况下使用。
</p><p>
<tt>evp_damping</tt> 变量用于控制 EVP 动力学中的弹性波阻尼。
通常在高分辨率模拟中设为 <tt>.true.</tt>，
此时弹性波无法在短时间步内被充分阻尼，
但这并不是一个受支持的选项。
</p><p>
<tt>advection</tt> 变量决定了水平传输方案。
默认方法是增量重映射法 ((<a href="node40.html#lipshunke04">Lipscomb 和 Hunke(2004)</a>))，
该方法的扩散性较小，并且对于大量类别或示踪剂来说计算效率较高。
另外，还提供了一阶迎风方案，但它仅具有一阶精度。
</p><p>
CCSM3 短波选项的雪和冰反照率基准值可在 namelist 中设置。
冰的反照率适用于厚度大于 <tt>ahmax</tt>（目前设为 0.5 m）的冰层。
该厚度是可在 <b>ice_shortwave.F90</b> 文件中调整的参数。
雪的反照率适用于冷雪。
</p><p>
在新的 Delta-Eddington 短波辐射传输方案 (<a href="node40.html#Briegleb07">Briegleb 和 Light(2007)</a>) 中，
基准反照率是基于雪、海冰和融化池的固有光学特性计算的。
这些反照率可通过调整雪粒半径 <tt>R_snw</tt>、
融化雪的温度转换阈值以及最大雪粒半径进行调节。
</p><p>
</p><hr>
<a name="tex2html226" href="node12.html">
<img width="37" height="24" align="BOTTOM" border="0" alt="next" src="next.png"></a> 
<a name="tex2html222" href="node8.html">
<img width="26" height="24" align="BOTTOM" border="0" alt="up" src="up.png"></a> 
<a name="tex2html216" href="node10.html">
<img width="63" height="24" align="BOTTOM" border="0" alt="previous" src="prev.png"></a> 
<a name="tex2html224" href="node1.html">
<img width="65" height="24" align="BOTTOM" border="0" alt="contents" src="contents.png"></a>
</body>
