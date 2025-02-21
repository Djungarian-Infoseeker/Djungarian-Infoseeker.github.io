<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>雪球地球情景下的大陆约束与海洋冰盖厚度</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <h1>雪球地球情景下的大陆约束与海洋冰盖厚度</h1>
    <h2>Eli Tziperman<sup>1</sup>, Dorian S. Abbot<sup>2</sup>, Yosef Ashkenazy<sup>3</sup>, Hezi Gildor<sup>4</sup>, David Pollard<sup>5</sup>, Christian G. Schoof<sup>6</sup>, Daniel P. Schrag<sup>1</sup></h2>
    
    <p><strong>摘要</strong></p>
    <p>近年来的研究表明，雪球地球上的冰流能够非常有效地使全球冰层厚度均质化。以往的研究均采用局部模型或仅考虑纬度变化的一维全球模型，其建模方式难以推广到二维的全球配置。本文利用重构的新元古代陆块配置，采用二维全球冰流模型研究大陆收缩对雪球地球情景下冰流和冰层厚度的影响。数值模拟和尺度分析表明，各种大陆和边缘海的构型（这些构型在一维模型中无法体现）会导致冰层厚度出现较大变化，包括在次大陆与边缘海之间出现入口受限的狭窄区域。由于本研究忽略了热力学、光学效应、尘埃及尘埃输送等许多已知的重要因素，因此仅作为针对某一特定效应的过程研究，而非对新元古代冰层厚度进行逼真模拟。本文所开发的模型公式在多个方面推广和扩展了先前的成果，包括引入了球面坐标和横向几何的修正，因此，这项研究是向将雪球冰流模型与一般环流海洋和大气模型耦合、实现对新元古代雪球冰层厚度更定量模拟迈出的一步。</p>

    <h2>1. 引言</h2>
    <p>在大约7.5亿年至5.8亿年前的新元古代时期，地球经历了多次冰期，其中一些冰期在赤道海域沉积了冰成沉积物，表明可能存在全球冰盖 [Harland, 1964; Kirschvink, 1992; Hoffman et al., 1998]。理解这些事件对于我们认识气候动力学构成了一个有趣的挑战。有关这些相关问题和争议，可参见 Pierrehumbert 等人 [2011] 的最新综述。</p>

    <p>近年来，雪球地球情景下冰在海洋上的流动受到广泛关注。Goodman 和 Pierrehumbert [2003] 表明，冰流能够在雪球地球情景下有效地均质化冰层厚度。而冰层厚度反过来可能在雪球事件期间光合生物的存活问题上发挥重要作用 [Hoffman and Schrag, 2002; Pollard and Kasting, 2005; McKay, 2000; Campbell et al., 2011]；超过数十米厚的冰盖甚至可能过于厚重，使光合作用无法进行 [McKay, 2000]。</p>

    <p>迄今为止，相关工作主要探讨了冰流的影响 [Goodman and Pierrehumbert, 2003]、冰的光学特性 [McKay, 2000; Warren et al., 2002]、冻结海水与积雪在光学性质上的差异效应 [Pollard and Kasting, 2005, 2006; Warren and Brandt, 2006; Goodman, 2006]、动力海冰与热力海冰的作用 [Lewis et al., 2007]，以及雪球冰盖上尘埃的积累 [Abbot and Pierrehumbert, 2010; Le Hir et al., 2010]与尘埃输送 [Li and Pierrehumbert, 2011]。</p>

    <p>[5] Warren 等人 [2002] 和 Pollard & Kasting [2005] 指出，由于冰流进入海域受到引导通道侧壁摩擦的限制，可能无法平衡海内的消融或融化，因而导致冰层厚度出现较大变化。近期的一项与本工作密切相关的研究中，Campbell 等人 [2011] 考虑了冰流在侧壁摩擦作用下对一个狭长矩形边缘海的入侵过程，并基于 Nye [1965] 的解析解推导出了入侵长度的公式。</p>

    <p>[6] 迄今为止，所有关于雪球冰流的计算均采用了一维（仅考虑纬度变化）的全球模型，或者理想化的局部矩形边缘海模型。此外，构建全球一维（仅纬度方向）模型的基础是一个冰架变形速率公式 [Weertman, 1957]，但遗憾的是，该公式无法推广到包含经度和纬度的二维情形。</p>

    <p>[7] 本文有两大目标：<br>
    1. 第一个目标是研究在大陆存在条件下球面上的冰流，以及由于狭窄海域存在而可能导致大幅冰层厚度变化的情形。我们展示了基于新元古代重构大陆构型的数值解及冰层厚度变化的尺度关系，并分别推导了无大陆全球海洋与通过一条通道与海洋相连的狭窄海域的尺度关系。<br>
    2. 建立一个涵盖水平两个维度的球面冰流模型。为此，我们引入了几个新颖的方面，并将迄今在雪球研究文献中被忽略的物理过程和数学项纳入其中。重要的是，我们直接从斯托克斯方程推导出模型方程，从而使得构建二维水平流动问题成为可能，而这一点是早期雪球冰流研究（如 Goodman & Pierrehumbert [2003] 和 Pollard & Kasting [2005]）所无法实现的，因为它们都是从 Weertman [1957] 的冰架应变率公式出发。特别地，我们采用了 Morland [1987] 的冰架动量预算（参见 MacAyeal & Barcilon, 1988; MacAyeal, 1989, 1997）以及球面坐标，并证明这两者即使在一维模型中也会引入额外的项。</p>

    <p>现已知许多因素在决定雪球地球冰层厚度中起着作用，其中一些因素（如冰的光学特性、不同的冰来源、尘埃及尘埃输送）已在上述论文中有所探讨。本文聚焦于冰流及其与大陆构型相互作用的效应，暂时忽略其他所有反馈。这种方法的优点在于使我们能够隔离并仔细研究相关流动动力学，但必然使本研究显得理想化且过于简化。我们认为这是一种有用的方法，但必须强调，因此本文计算得到的冰层厚度数值不应被视为对雪球冰层厚度的可靠定量预测。故此，本工作应被看作是一个过程研究，而非试图进行逼真的雪球模拟。特别地，我们假设海洋完全被厚冰覆盖（Warren 等人 [2002] 称之为“海冰川”），因此我们的结果无法用于确认或否定之前某些研究所提出的热带地区可能出现无冰或薄冰的可能性 [例如 Chandler & Sohl, 2000; Hyde et al., 2000; Pollard & Kasting, 2005; Liu & Peltier, 2010; Abbot et al., 2011]。</p>

    <p>接下来的各节中，我们首先给出模型方程的概要推导（第二节）。这些方程是在冰川学中长期使用的著名冰架方程向球面坐标的简单扩展 [Morland, 1987; MacAyeal, 1997]。随后，我们展示模型结果（第三节）、推导无大陆轴对称全球情况以及狭窄海域情况下冰层厚度的尺度定律（第四节），并在第五节进行总结。附录中则给出了模型方程的详细推导。</p>
  <h2>2. 模型：球面上二维冰架流动</h2>
  <p>
    [11] 在此我们给出模型推导的概要，完整细节请参见附录 A。令坐标（经度、副纬度、垂直）分别记作 
    <code>(f, q, z)</code>，对应的速度为 <code>(u, v, w)</code>。动量方程为：
  </p>
  <div class="equation">
    $$\begin{aligned}
    0 &= \frac{1}{r\,\sin q}\frac{\partial p}{\partial f} + \Bigl(r\cdot t\Bigr)\cdot \hat{e}_f,\\[1mm]
    0 &= \frac{1}{r}\frac{\partial p}{\partial q} + \Bigl(r\cdot t\Bigr)\cdot \hat{e}_q,\\[1mm]
    0 &= \frac{\partial p}{\partial z} - g\,\rho_I + \Bigl(r\cdot t\Bigr)\cdot \hat{e}_z.
    \end{aligned}
    \tag{1}$$
  </div>
  <p>
    其中，\(r\) 为取定为常数的地球半径；\(p\) 为压力；\(g\) 为重力加速度；\(\rho_I\) 为冰密度；\(t=\{t_{ij}\}\) 为应力张量。需要注意的是，在曲线坐标中，二阶张量的散度 \(r\cdot\) 除了包含矢量散度中的项之外，还包含一些度量项（参见附录 B）。三个坐标方向的单位向量分别记作 \(\hat{e}_f\)、\(\hat{e}_q\) 和 \(\hat{e}_z\)。
  </p>
  <p>
    我们采用 Glen 流变定律 [Glen, 1955] 将应力与应变率 \(\dot{\varepsilon}_{ij}\) 联系起来，公式为：
  </p>
  <div class="equation">
    $$\begin{aligned}
    t_{ij} &= \Bigl(A(T)\Bigr)^{-1/3}\,\dot{\varepsilon}_{ij}^{1/3},\\[1mm]
    \dot{\varepsilon}^2 &= \frac{1}{2}\,\dot{\varepsilon}_{mn}\,\dot{\varepsilon}_{mn}.
    \end{aligned}
    \tag{2}$$
  </div>
  <p>
    其中，\(T\) 为冰温，\(A(T)\) 为冰粘度的温度依赖性，我们采用 Goodman 和 Pierrehumbert [2003] 中所用的 \(A(T)\)。我们假设温度沿深度线性变化，从预定的表面温度到冰基处的冻结温度（此处假定为常数）。另外，我们使用两种不同的预定表面温度纬度分布，分别称为“暖型”和“冷型”。这些表面温度是对 NCAR 社区大气模式计算结果的平滑拟合，计算时假定高 CO₂（105 ppm）和低 CO₂（100 ppm）条件下表面反照率均为 0.6。
  </p>
  <p>
    边界条件为：冰顶处应力与法向量的点积为零，而冰底处等于垂直于冰底的静水压力 [MacAyeal, 1997]，即：
  </p>
  <div class="equation">
    $$ (t - pI)\cdot \hat{n}_s = 0;\qquad (t - pI)\cdot \hat{n}_b = \hat{n}_b\,p_w. \tag{3} $$
  </div>
  <p>
    其中，\(\hat{n}_s\) 和 \(\hat{n}_b\) 分别为冰表面和冰底的法向量，\(I\) 为单位张量（矩阵）。由于冰顶和冰底处平行于冰表面的应力分量均为零（海洋和大气的摩擦可忽略不计），故一个很好的近似是假设水平冰速度与深度无关 [例如，Weertman, 1957; MacAyeal 和 Barcilon, 1988]。此外，漂浮冰的垂直尺度远小于地球半径 \(r\)，因此我们采用“薄壳”近似，即将 \(r\) 视为常数。巨大的长宽比（水平尺寸达数千公里，而垂直仅数百米）意味着垂直速度可以近似为远小于水平速度。这些假设导出了在球面坐标下对称应变率张量的近似表达式（参见附录 A），即：
  </p>
  <div class="equation">
    $$ 
    \dot{\varepsilon} \approx 
    \begin{pmatrix}
      \dfrac{1}{r\,\sin q}\dfrac{\partial u}{\partial f} + \dfrac{v\,\cos q}{r\,\sin q} & \dfrac{1}{2r}\left(\dfrac{1}{\sin q}\dfrac{\partial v}{\partial f} + \sin q\,\dfrac{\partial u}{\partial q}\right) & 0 \\[2mm]
      \dfrac{1}{2r}\left(\dfrac{1}{\sin q}\dfrac{\partial v}{\partial f} + \sin q\,\dfrac{\partial u}{\partial q}\right) & \dfrac{1}{r}\dfrac{\partial v}{\partial q} & 0 \\[2mm]
      0 & 0 & \dfrac{\partial w}{\partial z}
    \end{pmatrix}.
    \tag{3}
    $$ 
  </div>
  <p>
    其中，对角线上方的元素与下方的对称元素相等。特别地，有 \(\dot{\varepsilon}_{qz} = \dot{\varepsilon}_{fz} \approx 0\)，因此 \(t_{qz} \approx 0\) 且 \(t_{fz} \approx 0\)。
  </p>
    <h2>[12] 垂直积分与球面冰架方程</h2>
  <p>
    按照 Morland [1987] 和 MacAyeal [1997] 的方法，我们将上述动量方程从冰顶到冰底进行积分，并利用边界条件 (2) 得到球面坐标下冰架方程的最终形式（参见附录 A2）：
  </p>
  <div class="equation">
    $$\begin{aligned}
    0 =\ & \frac{1}{r\sin q}\frac{\partial}{\partial f}\Bigl(B^{1/2}\Bigr)
    + \frac{1}{r\sin q}\frac{\partial u}{\partial f}
    + v\cos q + \frac{\partial v}{\partial q}\\[1mm]
    & + \frac{1}{\sin q}\frac{\partial}{\partial q}\Bigl(B^{1/2}\frac{\partial v}{\partial f}
    + \sin^2q\,\frac{\partial u}{\partial q}\Bigr)
    + \cot q\,B^{1/2}\Bigl(\frac{1}{\sin q}\frac{\partial v}{\partial f}
    + \sin q\,\frac{\partial u}{\partial q}\Bigr)\\[1mm]
    & - \frac{1}{\sin q}\,g\,\rho_I\,(1-m)\,h_h^f.
    \end{aligned}
    \tag{4}$$
  </div>
  <div class="equation">
    $$\begin{aligned}
    0 =\ & \frac{1}{r\sin q}\frac{\partial}{\partial f}\Bigl(B^{1/2}\Bigr)
    + \frac{1}{r\sin q}\frac{\partial v}{\partial f}
    + \frac{1}{\sin q}\frac{\partial}{\partial q}\Bigl(B\sin q\,\frac{\partial v}{\partial q}\Bigr)\\[1mm]
    & + \frac{\partial}{\partial q}\Bigl(B^{1/2}\frac{\partial}{\partial q}(v\sin q)\Bigr)
    + \frac{\partial}{\partial q}\Bigl(B^{1/2}\frac{\partial u}{\partial f}\cot q\Bigr)
    + v\cos q\\[1mm]
    & - \frac{1}{\sin q}\,g\,\rho_I\,(1-m)\,h_h^q.
    \end{aligned}
    \tag{5}$$
  </div>
  <div class="equation">
    $$B^{1/4} = \frac{1}{r\,h\,A(T)^{1/3}\,DE^{1/3}}.
    \tag{6}$$
  </div>
  <div class="equation">
    $$\dot{\varepsilon}^2 = \dot{\varepsilon}_{ff}^2 + \dot{\varepsilon}_{qq}^2
    + \Bigl(\dot{\varepsilon}_{ff}+\dot{\varepsilon}_{qq}\Bigr)^2 + 2\,\dot{\varepsilon}_{fq}^2.
    \tag{7}$$
  </div>
  <div class="equation">
    $$h_t + \frac{1}{r\sin q}\frac{\partial}{\partial f}(u\,h)
    + \frac{1}{r\sin q}\frac{\partial}{\partial q}(\sin q\,v\,h)
    = k\,r^2\,h + S(f,q).
    \tag{8}$$
  </div>
  <p>
    其中 \(m=\frac{\rho_I}{\rho_w}\)，〈〉 表示沿垂直方向的平均（温度沿深度线性变化，如前所述 [Goodman and Pierrehumbert, 2003]）。Campbell 等人 [2011] 对垂直平均过程给出了更一致的处理方法。上述冰层厚度方程表达了质量守恒，并引入了扩散项以确保数值解平滑。虽然扩散项仅作为数值辅助，但它也可粗略地代表表面雪漂效应，从而平滑冰厚变化（尽管在雪球情景中降雪率应极低）。我们将扩散系数保持在数值允许的最小值，因此扩散项相对于冰厚平流在整个区域内可忽略。强迫项 \(S(f,q)\) 表示了表面及内部融化、升华，以及冰基冻结和融化的累积效应。
  </p>
  <h2>[13] 边界条件</h2>
  <p>
    上述方程的边界条件为：北界和南界无法向流入，东西方向采用周期边界条件；此外，在大陆边界处对速度场规定无法向流和无滑移条件，这相当于假设海岸边界垂直；同时，在北界、南界及大陆边界处，对冰厚的法向导数均规定为零。
  </p>
  <h2>[14] 一维轴对称模型（忽略大陆）</h2>
  <p>
    对于忽略大陆影响的一维轴对称模型，此时方程不依赖于 \(f\) 且假定经向速度 \(u=0\)，其方程为：
  </p>
  <div class="equation">
    $$\begin{aligned}
    0 =\ & \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(B\sin q\,\frac{\partial v}{\partial q}\Bigr)
    + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(v\sin q\Bigr)\cot^2q\,B\,v\\[1mm]
    & + g\,\rho_I\,(1-m)\,h_h^q.
    \end{aligned}
    \tag{9}$$
  </div>
  <div class="equation">
    $$B^{1/4} = \frac{1}{r\,h\,A(T)^{1/3}\,DE^{1/3}}.
    \tag{10}$$
  </div>
  <div class="equation">
    $$\dot{\varepsilon}^2 = \dot{\varepsilon}_{ff}^2 + \dot{\varepsilon}_{qq}^2 + \dot{\varepsilon}_{zz}^2 = 2.
    \tag{11}$$
  </div>
  <div class="equation">
    $$\dot{\varepsilon}_{zz} = \dot{\varepsilon}_{ff} + \dot{\varepsilon}_{qq}.
    \tag{12}$$
  </div>
  <div class="equation">
    $$h_t + \frac{1}{r\sin q}\frac{\partial}{\partial q}(\sin q\,v\,h)
    = k\,r^2\,h + S(q).
    \tag{13}$$
  </div>
  <p>
    上述为忽略大陆影响的一维轴对称模型方程，其中 \(h_t\) 表示冰厚随时间的变化，其他符号含义同前。
  </p>

  <h2>[15] 模型续：一维模型的差异及数值求解</h2>
  <p>
    该一维模型与之前的研究中使用的模型不同（例如，Goodman 和 Pierrehumbert, 2003; Goodman, 2006; Pollard 和 Kasting, 2005, 2006）。首先，它更准确地考虑了侧向几何，即遵循 Morland [1987] 和 MacAyeal [1997] 的公式，从而在上面的动量方程中引入了第二项。其次，它包含了球面坐标对应力张量散度的修正（动量方程中的第三项）。这一球面坐标修正项在数学上来源于与矢量散度相比，二阶张量散度表达式中附加的一组几何修正项（参见附录 B）。
  </p>
  <p>
    从物理上讲，该修正项归因于在子午（q）方向动量平衡中出现的应力元 \(t_{ff}\)（参见方程 (A10) 中包含 \(t_{ff}\) 的项）。该应力元表示作用于与 f 方向垂直的单位面积上 f 方向的单位力。即使在轴对称情况下，该项也不为零，因为如下面所述，\(t_{ff}\) 在此情形下不会消失。为说明为何表示 f 方向力的应力元会出现在 q 方向的动量方程中，可以考虑在球面坐标中一个小体积元 \((df, dq, dr)\)。注意，该体积元中垂直于 f 方向的面在经度 \(f\) 与 \(f+df\) 处具有略微不同的向北坡度，从而使得这些面上 \(t_{ff}\) 之和产生的 f 方向净力具有一个 q 方向分量，导致上述项的出现。
  </p>
  <p>
    最后，该方程还包括了由于球面坐标所产生的非零 \(t_{ff}\) 对有效粘度的贡献（如方程 (3) 后所述）。Goodman 和 Pierrehumbert [2003] 以及 Li 和 Pierrehumbert [2011] 均注意到这一效应，但认为与温度对冰流变性更大影响及冰流变系数较大不确定性相比，该效应可以忽略。在笛卡尔坐标下，\(t_{ff}\) 在轴对称情况下（即不依赖于 f 且 \(u=0\)）会消失；而在此情形下，\(t_{ff}\) 等于 \(v\,\cot q / r\)，这反映了这样一个事实：一个沿东西方向定向且被均匀向北流驱动的流线元，由于经线收敛会发生收缩，从而修改了如方程 (10) 和 (11) 中所示的有效粘度。
  </p>
  <p>
    [16] 对球面坐标更全面的处理使得速度方程无法直接积分，也就无法导出单一的冰层厚度方程，而这是以前研究中使用较简化方程时能够实现的。然而，更完整的方程（方程 (9)–(13)）可以通过结合使用三对角求解器（对动量方程进行迭代以考虑非线性有效粘度 [MacAyeal, 1997]）和冰层厚度方程的时间步进法来方便地数值求解。
  </p>
  <p>
    [17] 如果消除球面修正以及对冰底与冰面斜率和边界条件更精确的处理（相当于在这些边界上做小斜率近似），我们的 1-D 方程就会简化为一个更简单的形式，在动量方程 (9) 的方括号中仅保留第一项，加上压力梯度项。若同时忽略 \(t_{ff}\) 对应变率的贡献，则可得到一个可以在副纬度上积分一次的简单方程，从而导出 Goodman 和 Pierrehumbert [2003] 的方程。第一次积分得到的积分常数起到了类似于那些作者引入的“体力”的作用，该体力用以表示南北半球冰块碰撞产生的压力力，并使得在相对于赤道对称的强迫条件下速度消失。我们不是预先假设该体力，而是利用积分常数满足域北端与南端速度为零的边界条件；当强迫 \(S(q)\) 在纬度上对称时，赤道处的速度也如预期般消失。使用积分常数代替预设体力的做法也在 Li 和 Pierrehumbert [2011] 的补充材料中有所讨论。
  </p>
  <p>
    [18] 我们利用有限差分法在近全球区域（从南纬 80° 到北纬 80°）内对二维和一维模型方程进行数值求解，规定北端和南端无法向流。在二维情形中，我们使用 176×176 网格，而一维情形中则使用 89 个网格点。有限差分格式基于 A 格网（所有变量均定义在相同网格点）和中心差分法。在靠近陆地的网格点，我们采用单侧有限差分近似来估计压力梯度项和有效粘度。动量方程则按照标准程序求解，通过对有效粘度进行迭代（参见 MacAyeal, 1997）。
  </p>
  <p>
    [19] 所预定的、时间不变且依赖于纬度的净融化/冻结/升华率取自 Pollard 和 Kasting [2005, 图 4c] 的模型，该模型针对含气泡冰（虚线，本文使用前经过平滑处理）。我们不区分表面与冰基的融化/冻结，因此也不包含冰盖内热扩散和平衡地热通量之间反馈对冰厚的影响。预定强迫函数的全局积分为零，因此流动和强迫函数仅能在域内重新分布冰厚。正如在无冰厚依赖冰基融化情况下预期的那样，域平均冰厚由初始条件决定，因此不由模型参数唯一确定。我们以平均冰厚 1000 米初始化积分。
  </p>
  <p>
    [20] 由于我们的强迫对应于 Pollard 和 Kasting [2005] 中的含气泡（反射）冰情形，因此我们计算的冰厚变化可能低估了如果考虑冰的光学性质等附加效应时所可能得到的变化。忽略其他反馈（例如冰基融化/冻结对冰厚的依赖）也可能显著影响我们的解。要较好地处理这些附加效应，需要一个完整的海洋一般环流模型，以计算海洋热输送和温度场，进而求解冰基的融化与冻结问题，此问题留待未来研究。
  </p>
  <p>
    [21] 模型代码使用 Matlab 编写，可在
    <a href="http://www.seas.harvard.edu/climate/eli/Downloads" target="_blank">www.seas.harvard.edu/climate/eli/Downloads</a> 获取。
  </p>
    <h2>3. 数值模拟结果</h2>
    
    <h3>3.1 一维轴对称模型</h3>
    <p>:reference[]{#22} 表1所列实验的稳态结果显示（运行至少10万年）：</p>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/a602b446-a2ff-4082-afd1-dc306df29205/jgrc12409-fig-0001.png" alt="图1 一维模型稳态结果">
        <p class="caption">图1. 一维模型稳态结果（方程(9)-(13)）<br>
        (a,c,e) "暖"工况（实验3），(b,d,f) "冷"工况（实验4）<br>
        冰厚与经向速度分布（a,b）、表面温度廓线（c,d）、连续性方程项平衡（e,f）</p>
    </div>
    <p>关键结论：</p>
    <ul>
        <li>赤道-极地冰厚差异：冷工况约100米，暖工况仅40米</li>
        <li>温度升高导致冰体软化，进一步削弱厚度梯度</li>
        <li>与Pollard与Kasting（2005）含气泡冰结果一致（虚线）</li>
    </ul>

    <h3>3.2 二维大陆配置模型</h3>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/b7e8359d-c667-44f0-92c8-8fe8f5c3d2bd/jgrc12409-fig-0002.png" alt="图2 二维模型结果">
        <p class="caption">图2. 新元古代（630Myr）陆块配置下的二维模拟结果<br>
        (a,b) 冰厚（色阶，米）与流速场（箭头，米/年，1/4采样）<br>
        (c,d) 方程(14)定义的有效黏度对数分布</p>
    </div>
    <p>主要特征：</p>
    <table class="observations">
        <tr>
            <th>区域</th>
            <th>现象</th>
            <th>物理机制</th>
        </tr>
        <tr>
            <td>主大陆东/西侧</td>
            <td>冰流加速通道</td>
            <td>狭窄海峡限制冰通量，需平衡局地消融</td>
        </tr>
        <tr>
            <td>主大陆中部边缘海</td>
            <td>显著厚度梯度</td>
            <td>冰流通过海峡需补偿蒸发/融化损失</td>
        </tr>
        <tr>
            <td>主大陆南侧</td>
            <td>人工边界效应</td>
            <td>80°N边界条件引入的数值伪影</td>
        </tr>
    </table>

    <h3>3.3 温度平流效应评估</h3>
    <div class="equation">
        <span>佩克莱数定义：</span>
        $$ \mathcal{P} = \frac{v(r \sin\theta)^{-1} \partial(\sin\theta T)/\partial\theta}{\kappa_i (T_{\text{surf}} - T_{\text{freeze}})/h^2} $$
    </div>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/831e5fc6-f5ac-4363-9423-6f1e701faa1c/jgrc12409-fig-0003.png" alt="图3 佩克莱数分布">
        <p class="caption">图3. 温度平流与扩散效应比值（方程15）<br>
        高值区（>1）出现在狭窄海峡等高速流动区域</p>
    </div>

    <h3>3.4 网格敏感性分析</h3>
    <p>:reference[]{#27} 分辨率对比（176×176 vs 89×89网格）：</p>
    <ul>
        <li>受限海域冰厚差异约50米，反映数值收敛性未完全达成</li>
        <li>海峡分辨率不足导致通量计算偏差，与海洋模型中直布罗陀海峡等经典问题类似</li>
        <li>未来改进方向：局部网格加密或参数化海峡流动</li>
    </ul>

    <h3>表格数据重构</h3>
    <table class="model-experiments">
        <caption>表1. 模型实验参数表（更新）</caption>
        <thead>
            <tr>
                <th>实验编号</th>
                <th>模型维度</th>
                <th>温度廓线</th>
                <th>陆块年代</th>
                <th>对应图示</th>
                <th>网格分辨率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>9</td>
                <td>2-D</td>
                <td>暖</td>
                <td>630Myr</td>
                <td>图2a,c</td>
                <td>176×176</td>
            </tr>
            <tr>
                <td>10</td>
                <td>2-D</td>
                <td>冷</td>
                <td>630Myr</td>
                <td>图2b,d</td>
                <td>176×176</td>
            </tr>
            <!-- 其他行省略 -->
        </tbody>
    </table>
<!-- 接续前文 -->
    <h2>4. 冰厚变化的尺度估计</h2>
    
    <h3>4.1 受限海域冰厚梯度</h3>
    <div class="scenario">
        <div class="geom-params">
            <p>考虑面积$A$的受限海域，通过长$L$、宽$W$的通道与开放海洋连接（$L \gg W$）：</p>
            <ul>
                <li>海域内冰厚$h_s$（均匀分布）</li>
                <li>外海冰厚$h_o$</li>
                <li>通道流速$V$，海域净消融率$b$</li>
            </ul>
        </div>

        <div class="equation-group">
            <div class="equation">
                <span>质量守恒方程：</span>
                $$ V h_o W \sim A b \tag{16} $$
            </div>
            <div class="equation">
                <span>动量方程尺度分析：</span>
                $$ \frac{B V}{2(W/2)^2} \sim \rho_I g (1 - m) h_o \frac{h_o - h_s}{L} \tag{17} $$
            </div>
        </div>

        <div class="derivation">
            <p>其中有效黏度$B$的尺度为：</p>
            $$ B \sim h_o \left\langle A(T)^{-1/n} \right\rangle \left( \frac{V}{W/2} \right)^{1/(n-1)} \tag{18} $$
            <p>联立方程(16)-(18)得厚度差估计式：</p>
            $$ h_o - h_s \sim \frac{2L \left\langle A(T)^{-1/n} \right\rangle}{W \rho_I g (1 - \rho_I/\rho_w)} \left( \frac{A b}{h_o W^2} \right)^{1/n} \tag{19} $$
        </div>

        <div class="parameter-table">
            <table>
                <caption>表2. 典型参数取值（暖工况）</caption>
                <tr><th>参数</th><th>取值</th><th>物理意义</th></tr>
                <tr><td>$A$</td><td>$(4000\ \text{km})^2$</td><td>受限海域面积</td></tr>
                <tr><td>$b$</td><td>$6 \times 10^{-3}\ \text{m/yr}$</td><td>净消融率</td></tr>
                <tr><td>$L$</td><td>2500 km</td><td>通道长度</td></tr>
                <tr><td>$W$</td><td>1000 km</td><td>通道宽度</td></tr>
                <tr><td>$h_o$</td><td>1000 m</td><td>外海冰厚</td></tr>
            </table>
            <p>代入得$h_o - h_s \approx 108\ \text{m}$，与图2a数值结果量级一致</p>
        </div>

        <div class="key-factors">
            <h4>关键影响因素：</h4>
            <ul>
                <li>通道几何：$L \uparrow$或$W \downarrow$ ⇒ 厚度差$\uparrow$</li>
                <li>热力学：温度$T \downarrow$（$A(T) \downarrow$）⇒ 冰体刚度$\uparrow$ ⇒ 厚度差$\uparrow$</li>
                <li>质量平衡：海域面积$A \uparrow$或消融率$b \uparrow$ ⇒ 厚度差$\uparrow$</li>
            </ul>
        </div>
    </h3>

    <h3>4.2 全球无大陆情形</h3>
    <div class="global-scaling">
        <div class="equation-system">
            <p>一维动量方程与质量守恒方程尺度分析：</p>
            $$ \begin{aligned}
            \frac{2}{r} h \left\langle A(T)^{-1/3} \right\rangle \frac{v}{r} &\sim \rho_I g (1 - m) h \frac{\Delta h}{r} \\
            \frac{v h}{r} &\sim \Delta S
            \end{aligned} $$
        </div>

        <div class="result">
            <p>联立得赤道-极地冰厚差估计：</p>
            $$ \Delta h \sim \frac{2 \left\langle A(T)^{-1/3} \right\rangle (\Delta S / h)^{1/3}}{\rho_I g (1 - \rho_I/\rho_w)} \tag{20} $$
            <p>代入$\Delta S = 12\ \text{m/yr}$得$\Delta h \approx 34\ \text{m}$，与图1暖工况数值解吻合</p>
        </div>

        <div class="comparison">
            <h4>与受限海域对比：</h4>
            <table>
                <tr><th>场景</th><th>厚度差量级</th><th>主导机制</th></tr>
                <tr><td>受限海域</td><td>$\sim 100\ \text{m}$</td><td>几何约束下的质量平衡</td></tr>
                <tr><td>全球无大陆</td><td>$\sim 30\ \text{m}$</td><td>纬度相关消融率驱动</td></tr>
            </table>
        </div>
    </div>
<!-- 接续前文 -->
    <h2>附录A：模型方程推导</h2>
    
    <h3>A1. 表面与底部边界条件</h3>
    <div class="boundary-conditions">
        <div class="equation-group">
            <p>:reference[]{#42} 冰盖上下边界动量条件可表述为：</p>
            $$ \begin{cases}
            \boldsymbol{\sigma} \cdot \mathbf{\hat{n}_s} = 0 & \text{(表面)} \\
            \boldsymbol{\sigma} \cdot \mathbf{\hat{n}_b} = \mathbf{\hat{n}_b} p_w & \text{(底部)}
            \end{cases} \tag{A1} $$
            <p>其中偏应力张量分解为：</p>
            $$ \boldsymbol{\sigma} = \boldsymbol{\tau} - p\mathbf{I} $$
        </div>

        <div class="normal-vector">
            <p>表面高程$ s(\phi, \theta) $的法向量由梯度给出：</p>
            $$ \mathbf{\hat{n}} = \frac{\nabla f}{\|\nabla f\|} = \frac{\left( -\frac{1}{r\sin\theta}\frac{\partial s}{\partial\phi}, -\frac{1}{r}\frac{\partial s}{\partial\theta}, 1 \right)}{\left\| \left( -\frac{1}{r\sin\theta}\frac{\partial s}{\partial\phi}, -\frac{1}{r}\frac{\partial s}{\partial\theta}, 1 \right) \right\|} \tag{A3} $$
        </div>

        <div class="spherical-coordinates">
            <p>球坐标系下边界条件展开式：</p>
            <div class="equation-table">
                <table>
                    <tr><th>表面条件（z = s）</th><th>底部条件（z = b）</th></tr>
                    <tr>
                        <td>
                            $$ \begin{aligned}
                            (\tau_{\phi\phi}-p)\frac{\partial s}{r\sin\theta\partial\phi} + \tau_{\phi\theta}\frac{\partial s}{r\partial\theta} - \tau_{\phi z} &= 0 \\
                            \tau_{\theta\phi}\frac{\partial s}{r\sin\theta\partial\phi} + (\tau_{\theta\theta}-p)\frac{\partial s}{r\partial\theta} - \tau_{\theta z} &= 0 \\
                            \tau_{z\phi}\frac{\partial s}{r\sin\theta\partial\phi} + \tau_{z\theta}\frac{\partial s}{r\partial\theta} - (\tau_{zz}-p) &= 0
                            \end{aligned} $$
                        </td>
                        <td>
                            $$ \begin{aligned}
                            (\tau_{\phi\phi}-p)\frac{\partial b}{r\sin\theta\partial\phi} + \tau_{\phi\theta}\frac{\partial b}{r\partial\theta} - \tau_{\phi z} &= \frac{\rho_w g h}{r\sin\theta}\frac{\partial b}{\partial\phi} \\
                            \tau_{\theta\phi}\frac{\partial b}{r\sin\theta\partial\phi} + (\tau_{\theta\theta}-p)\frac{\partial b}{r\partial\theta} - \tau_{\theta z} &= \frac{\rho_w g h}{r}\frac{\partial b}{\partial\theta} \\
                            \tau_{z\phi}\frac{\partial b}{r\sin\theta\partial\phi} + \tau_{z\theta}\frac{\partial b}{r\partial\theta} - (\tau_{zz}-p) &= \rho_w g h
                            \end{aligned} $$
                        </td>
                    </tr>
                </table>
            </div>
            <p class="equation-label">(A4)</p>
        </div>
    </h3>

    <h3>A2. 球坐标系冰架方程</h3>
    <div class="ice-shelf-equations">
        <div class="coordinates">
            <p>:reference[]{#43} 采用球坐标系$ (\phi, \theta, r) $，薄壳近似下转为$ (\phi, \theta, z) $，主要微分算子：</p>
            $$ \begin{aligned}
            \nabla &\approx \left( \frac{1}{r\sin\theta}\partial_\phi, \frac{1}{r}\partial_\theta, \partial_z \right) \\
            \nabla \cdot \mathbf{v} &\approx \frac{1}{r\sin\theta}\partial_\phi u + \frac{1}{r\sin\theta}\partial_\theta (v\sin\theta) + \partial_z w \\
            \nabla^2 f &\approx \partial_z^2 f + \frac{1}{r^2\sin\theta}\partial_\theta (\sin\theta \partial_\theta f) + \frac{1}{r^2\sin^2\theta}\partial_\phi^2 f
            \end{aligned} \tag{A5} $$
        </div>

        <div class="strain-rate">
            <p>应变率张量在薄壳近似下的简化形式：</p>
            $$ \dot{\boldsymbol{\epsilon}} \approx \begin{pmatrix}
            \frac{\partial u}{r\sin\theta\partial\phi} + \frac{v\cos\theta}{r} & \frac{1}{2}\left( \frac{\partial v}{r\sin\theta\partial\phi} + \frac{\partial u}{r\partial\theta} - \frac{u\cot\theta}{r} \right) & 0 \\
            \cdots & \frac{\partial v}{r\partial\theta} + \frac{w}{r} & 0 \\
            0 & 0 & \partial_z w
            \end{pmatrix} \tag{A7} $$
        </div>

        <div class="momentum-equations">
            <p>动量方程在球坐标系下的展开式（薄壳近似）：</p>
            $$ \begin{aligned}
            0 &= \frac{1}{r\sin\theta}\partial_\phi p + \nabla \cdot \boldsymbol{\tau}_{\phi} + \frac{\cot\theta}{r}\tau_{\phi\theta} \\
            0 &= \frac{1}{r}\partial_\theta p + \nabla \cdot \boldsymbol{\tau}_{\theta} - \frac{\cot\theta}{r}\tau_{\phi\phi} \\
            0 &= \partial_z p - \rho_I g + \nabla \cdot \boldsymbol{\tau}_z - \frac{\tau_{\theta\theta} + \tau_{\phi\phi}}{r}
            \end{aligned} \tag{A8} $$
        </div>
    </div>
</body>
</html>