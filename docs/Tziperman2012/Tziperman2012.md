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

  <h2>3. 数值结果</h2>
  <p>
    [22] 表 1 列出了我们所进行的不同模型实验。所有展示的结果均代表稳态模型解，这些解均通过运行模型至少十万年获得。忽略陆地影响的一维模型结果展示于图 1 中。与以往研究及第四节 2 部分给出的尺度分析一致，当不考虑光学/尘埃效应时，该模型预测极地与赤道之间的冰层厚度差异非常小（与 Pollard 和 Kasting [2005, 图 4f] 中虚线所表示的含气泡冰情况相当；另请参见 Li 和 Pierrehumbert [2011] 关于 Goodman 和 Pierrehumbert [2003] 中发现较大厚度差异的讨论）。模型结果表明，在冷型情况下赤道与极地之间的冰厚差约为 100 米，而在暖型情况下仅为 40 米。正如预期，较高温度使冰更柔软，从而导致更小的厚度梯度。两种情形下子午向冰厚梯度较小，证明了冰流在有效均质化冰层厚度方面的作用（参见 Goodman 和 Pierrehumbert, 2003）。如此均匀的冰层阻碍了光线穿透海洋，对光合作用产生了影响，如引言所述。当不包含大陆时（实验 5，见表 1），我们的二维模型与一维模型的结果完全一致。
  </p>
  
  <h3>表 1. 模型实验列表<small>a</small></h3>
  <table>
    <thead>
      <tr>
        <th>实验</th>
        <th>模型</th>
        <th>T<sub>surf</sub></th>
        <th>陆地</th>
        <th>图示</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3</td>
        <td>1-D</td>
        <td>warm</td>
        <td>-</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>1-D</td>
        <td>cold</td>
        <td>-</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>2-D</td>
        <td>warm</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>7</td>
        <td>2-D</td>
        <td>warm</td>
        <td>630 Myr</td>
        <td>-</td>
      </tr>
      <tr>
        <td>8</td>
        <td>2-D</td>
        <td>cold</td>
        <td>630 Myr</td>
        <td>-</td>
      </tr>
      <tr>
        <td>9</td>
        <td>2-D X2</td>
        <td>warm</td>
        <td>630 Myr</td>
        <td>2</td>
      </tr>
      <tr>
        <td>10</td>
        <td>2-D X2</td>
        <td>cold</td>
        <td>630 Myr</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
  <p>
    注：X2 表示采用 176 个网格点的分辨率，否则使用 89 个网格点。“warm”指图 1c 中所给的预定表面温度，而“cold”指图 1d 所示温度。
  </p>
  
  <p>
    图 1 显示了 1-D 模型的稳态结果（参见方程 (9)–(13)）。其中，图 1a 和 1b 显示了冰厚和子午向速度随纬度的变化；图 1c 和 1d 显示了预定的表面温度；图 1e 和 1f 则展示了连续性方程 (13) 中各项（图例中 “rhs” 表示平流和扩散项之和，应在稳态下精确平衡强迫项 \(S\)）。
  </p>
  
  <p>
    [23] 图 2 显示了基于约 630 Myr 的新元古代重构大陆配置的二维模型结果（参见 Li et al., 2008）。陆地配置经过修改以消除诸如仅有单个网格点的地形开口等可能导致数值问题的特征。图中展示了流场、冰厚以及对应于方程 (14) 的有效粘度 \( \log_{10} \, \nu_{\mathrm{eff}} = \bigl(A(T)\bigr)^{-1/3} DE^{-1/3} \)（对于 “warm” 表面温度，即高 CO₂ 近熔融情况，以及对于 “cold” 低 CO₂ 情况）。
  </p>
  
  <p>
    [24] 与轴对称模型相比，冰厚变化明显更大。由于受限海域面积较小，沿经向平均的冰厚和速度场可能与一维模型相差不大，但局部冰厚差异却明显增大。这在主大陆与其东西两侧小陆块之间，以及在全球海洋与位于主大陆中部的边缘（受限）海之间尤为明显。在后者情形中，通过狭窄通道的冰流需要平衡边缘海内的总融冰和蒸发。因此，海域面积越大且海峡越窄，预期冰流速度越快。这些结果与 Campbell 等人 [2011]（参见 Warren 等人, 2002）的总体观点一致，即当流动受大陆几何限制时，会产生显著的冰厚差异。此外，图 2 还显示，在主大陆以南（尤其在 “cold” 情形下，见图 2b）也存在显著的冰厚变化；该处冰厚变化可能受为避免极点奇点而在北界设定 80°N 人为边界的影响，但这表明几何与流动相互作用导致的冰厚变化情形比以往讨论的更为广泛。
  </p>
  
  <p>
    [25] 在冷型情况下，由于冰更硬，需要更大的压力（冰厚梯度）来驱动冰流以平衡边缘海内的净融冰/融化，因此冰厚变化再次更大。下一节将给出描述这种效应以及全球轴对称情形下冰厚变化的尺度表达式。值得注意的是，暖型和冷型情况下速度场差异不大（见图 2 中所示的最大速度），这可以解释为：预定的源/汇函数 \(S(\phi,\theta)\) 必须通过冰流收敛（即 \(\nabla\cdot(u\,h)\)）来平衡；若源函数在数值上保持不变，且冰厚场在零级近似下差异不大，则速度场基本由源函数决定。冰厚变化会引起由源函数决定的速度变化，而驱动该速度场所需的冰厚梯度又依赖于冰的粘度，从而依赖于温度（如图 1 与图 2 所示）。利用我们的模型结果可以识别并分析流场对温度的微弱依赖性，因为模型中不包含许多可能掩盖这一结果的其他过程。这是忽略冰基融化/冻结对冰厚影响以及非气泡冰对辐射吸收效应的一个优势。
  </p>
  
  <p>
    [26] 我们模型所隐含的温度场是由预定的子午向表面温度剖面（见图 1c 与 1d）与假定的沿深度线性温度剖面（从预定表面温度到冰基处的恒定熔融温度）组合而成的三维温度分布。冰流场将平流该温度场，原则上会形成复杂的三维温度分布。但在本研究中，我们忽略了这一平流效应、冰内产生的应变热以及水平扩散。只有当垂直扩散（决定线性温度剖面）的时间尺度短于子午向平流引起的温度变化时间尺度时，忽略平流才是合理的。为此，我们在图 3 中绘制了下面的无量纲比值（实质上是一个 Peclet 数）：
  </p>
  <div class="equation">
    $$\mathrm{Pe} = \frac{v\, (r\sin q)^{-1}\, \partial(\sin q\,T)/\partial q}{\kappa_i\, \partial^2 T/\partial z^2}
    \approx \frac{v\, (r\sin q)^{-1}\, \partial(\sin q\,T)/\partial q}{\kappa_i\, \left(\dfrac{T_{\mathrm{surface}}-T_{\mathrm{freezing}}}{h^2}\right)}.
    \tag{15}$$
  </div>
  <p>
    其中 \(\kappa_i\) 是冰中的分子热扩散率，与质量守恒/冰厚方程中出现的（主要为数值上的）水平扩散项不同。图 3 表明，在大部分区域（当该比值远小于 1 时）可以忽略温度平流，但在一些关键区域，尤其是具有较快流速的狭窄通道中，该比值可能接近甚至大于 1，因此不能忽略温度平流效应。
  </p>
    <div class="figure">
        <img src="https://agupubs.onlinelibrary.wiley.com/cms/asset/831e5fc6-f5ac-4363-9423-6f1e701faa1c/jgrc12409-fig-0003.png" alt="图3 佩克莱数分布">
        <p class="caption">图3. 温度平流与扩散效应比值（方程15）<br>
        高值区（>1）出现在狭窄海峡等高速流动区域</p>
    </div>

  <h2>[27] 数值分辨率影响及网格敏感性</h2>
  <p>
    将基于 176×176 网格的二维结果与基于 89×89 网格的解（实验 7、8 与实验 9、10，见表 1，图中未显示）进行比较表明，二者差异不大。在粗网格模拟中，受限海域内的冰厚大约比精细网格模拟薄 50 米，这表明解随模型分辨率变化的数值收敛尚未完全达到（这在全球气候模型中常见）。这很可能归因于导向受限海域通道的分辨率不足。此问题在那些无法分辨关键狭窄水道和暗礁（例如直布罗陀海峡）的海洋模型中经常出现，未来可通过局部网格加密或对通道流进行参数化（以替代试图显式求解该处流动）来解决，但这些方案均超出了本研究的范围。
  </p>
  
  <h2>4. 冰层厚度变化的尺度估计</h2>
  <p>
    [28] 本节中，我们考虑两种情形下冰层厚度变化的尺度估计：一种是由一条长而窄的通道供给的受限海域，另一种是全球轴对称海洋情形。
  </p>
  
  <h3>4.1 受限海域</h3>
  <p>
    [29] 设有一个面积为 \(A\) 的海域，通过一条长为 \(L\) 、宽为 \(W\) 的通道与海洋相连，其中 \(L \gg W\)。由于冰流高效均衡，受限海域内的冰厚 \(h_s\) 可近似看作均匀，而我们将通道外开放海洋的冰厚记为 \(h_o\)。记通道内冰流速度为 \(V\) ，海域内的平均升华/融化率为 \(b\) ，则该海域冰盖的质量守恒尺度关系可写为：
  </p>
  <div class="equation">
    $$V\,h_o\,W \sim A\,b. \tag{16}$$
  </div>
  <p>
    [30] 另一个关系可以从冰架动量平衡方程中获得 [Morland, 1987; MacAyeal, 1997]。令 \(y\) 为沿通道方向坐标，并假设 \(u=0\)；同时令 Glen 流变定律中的常数在本模型中取 \(n=3\)。冰架沿通道（\(v\)）动量方程为
  </p>
  <div class="equation">
    $$0 = \frac{\partial}{\partial x}\Bigl(B^{1/2}\,u_y + v_x\Bigr)
    + \frac{\partial}{\partial y}\Bigl(B\,u_x + 2\,v_y\Bigr)
    - g\,\rho_I\,(1-m)\,h_h^y,
    $$
  </div>
  <p>
    其中定义
  </p>
  <div class="equation">
    $$B \equiv h\,A(T)^{-1/n}\,DE^{-1/n}
    \approx \frac{1}{2}\,u_x^2 + v_y^2 + (u_x+v_y)^2 + \frac{1}{2}\,(u_y+v_x)^2.
    $$
  </div>
  <p>
    简化后可得：
  </p>
  <div class="equation">
    $$0 = \frac{\partial}{\partial x}\Bigl(B^{1/2}\,v_x\Bigr)
    + \frac{\partial}{\partial y}\Bigl(B^2\,v_y\Bigr)
    - g\,\rho_I\,(1-m)\,h_h^y,
    $$
  </div>
  <p>
    其中
  </p>
  <div class="equation">
    $$B \equiv h\,A(T)^{-1/n}\,DE^{-1/n}
    \approx \frac{1}{2}\Bigl(2\,v_y^2 + v_x^2\Bigr)
    \approx \frac{1}{4}\,v_x^2.
    $$
  </div>
  <p>
    假定通道长宽比 \(L/W \gg 1\) 导致在上式中可近似取横向剪切 \(v_x\) 的量级为 \(v_x/2\)。此外，由于沿通道方向的第二项在尺度上与 \(L^2\) 成正比，而第一项与 \(W^2\) 成正比，故当 \(L \gg W\) 时可忽略第二项。假设通道侧边速度为零而中心速度最大，我们可按 \(v_x \sim \frac{V}{W/2}\) 对横向剪切进行量级估计，从而动量方程尺度关系为：
  </p>
  <div class="equation">
    $$B\,V^2\left(\frac{W}{2}\right)^2 \sim \frac{g\,\rho_I\,h_o\,(h_o - h_s)}{L}. \tag{17}$$
  </div>
  <p>
    [31] 将有效粘度的尺度设定为
  </p>
  <div class="equation">
    $$B \sim h_o\,A(T)^{-1/n}\,DE\,\left(\frac{V}{W/2}\right)^{1/n}, \tag{18}$$
  </div>
  <p>
    并代入质量守恒方程中得到的速度量级，我们得到沿通道的冰厚差估计为
  </p>
  <div class="equation">
    $$h_o - h_s \sim \frac{2L\,A(T)^{-1/n}\,DE}{W\,g\,\rho_I\left(1-\frac{\rho_I}{\rho_w}\right)}
    \left(\frac{A\,b}{h_o\,W^2}\right)^{1/n}. \tag{19}$$
  </div>
  <p>
    这种尺度估计可与 Campbell 等人 [2011]（参照 Nye [1965] 所用的矩形（类似红海）边缘海冰入侵长度公式）进行比较。后者的优势在于基于精确公式，而这里则采用粗略的尺度估计。然而，此处的尺度估计考虑了受限海并非矩形，而是由窄通道供给较大面积的情况，这正是新元古代陆块重构（见图 2）所激发的情形。该尺度估计清楚地表明，位于低纬度且存在净冰升华和融化的受限海，如果通道更长（大 \(L\)）、更窄（小 \(W\)）、或海域本身面积更大（\(A\)）、融冰率更大（\(b\)）或冰温较低（通过 \(A(T)\) 的依赖性，注意 \(A(T)\) 随温度增大而增大，从而 \(A(T)^{-1/n}DE\) 变小；即温暖的温度使冰更软，导致冰厚差减小），则会产生更大的冰厚变化（受限海中的冰更薄）。
  </p>
  <p>
    [32] 根据新元古代陆块构型下“暖型”受限海情形（见图 2），代入数量级参数：\(A = (4000 \times 10^3)^2 \, \text{m}^2\)；\(b = 6 \times 10^{-3}/(365 \times 24 \times 3600) \, \text{m/s}\)；\(L = 2500 \times 10^3 \, \text{m}\)；\(W = 1000 \times 10^3 \, \text{m}\)；\(h_o = 1000 \, \text{m}\)；\(g = 9.8 \, \text{m/s}^2\)；\(\rho_I = 900 \, \text{kg/m}^3\)；\(\rho_w = 1024 \, \text{kg/m}^3\)；\(T_f = 273.16 \, \text{K}\)；\(T_s = T_f - 30 \, \text{K}\)；\(n = 3\)。其中我们选择的表面温度代表图 2a 中通向受限海的主通道位置。由此得到
  </p>
  <div class="equation">
    $$h_o - h_s \sim 10^8 \, \text{m}.$$
    \tag{Derived}
  </div>
  <p>
    此估计与数值解计算得到的数量级相同，但略小（可与图 2a 和 2c 中“暖型”解比较）。注意，我们的 \(L \gg W\) 假设并非严格成立。我们在单一通道情形下计算了沿通道的冰厚差，而实际上上述陆块构型中存在两个此类通道，因此比较结果存在一定模糊性。可能由于通向受限海的狭窄通道中网格分辨率不足而产生偏差，且尺度估计本身不可能给出精确结果，但该估计清楚表明，相较于忽略边缘海（即忽略大陆）的情形，受限边缘海将产生显著更大的冰厚差异。
  </p>

  <h2>4.2 全球海洋，无大陆</h2>
  
  <p>
    [33] 将一维动量方程 (方程 (9)) 和稳态质量守恒方程 (方程 (13)) 分别做尺度分析，可以得到：
  </p>
  <div class="equation">
    $$\frac{2}{r\,h\,A(T)^{-1/3}\,DE}\;v \sim \frac{1}{n}\,g\,\rho_I\Bigl(1-\frac{\rho_I}{\rho_w}\Bigr)
    \frac{h_D}{r}\;v = DS,$$
  </div>
  <p>
    其中，动量方程左侧系数 2 考虑了方程 (9) 中前两项，而 \(DS = S_{\text{max}} - S_{\text{min}}\) 表示强迫函数的幅度。综合这两个尺度关系，可得赤道与极地冰厚差 \(h_D\) 的尺度估计为
  </p>
  <div class="equation">
    $$h_D \sim 2\,A(T)^{-1/3}\,DE\left(\frac{DS}{\frac{1}{2}\,h}\right)^{1/n}\frac{1}{g\,\rho_I\Bigl(1-\frac{\rho_I}{\rho_w}\Bigr)}.
    \tag{20}$$
  </div>
  <p>
    代入数量级参数：\(DS = 1.2\times10^{-2}\) (m/s)，\( [h]=1000\) m，\(g=9.8\) m/s²，\(\rho_I=900\) kg/m³，\(\rho_w=1024\) kg/m³，\(T_f=273.16\) K，\(T_s=T_f-30\) K，\(n=3\)，得到 \(h_D\approx 34\) m。这一估计与图 1 中“暖型”一维模型的数值解十分接近。与前述规定冰厚尺度的方法不同，还可以通过平衡冰中的扩散热通量与地热通量 \(F_{\text{geo}}\) 来确定冰厚尺度，即 \([h]=\kappa_{DT}/F_{\text{geo}}\)。总体来看，这一及前几节的尺度估计均预示：若忽略大陆，则冰厚差异将大大减弱，与数值解结果相一致。
  </p>
    <h2>5 结论</h2>
  <p>
    [34] 研究表明，雪球海洋上的冰流在确定海洋冰厚方面起着重要作用 [Goodman and Pierrehumbert, 2003]，近年来这一问题受到广泛关注 [Warren et al., 2002; Pollard and Kasting, 2005; Goodman, 2006; Warren and Brandt, 2006; Pollard and Kasting, 2006; Campbell et al., 2011; Li and Pierrehumbert, 2011]。这些研究均采用局部模型或仅依赖纬度的一维全球模型，且难以推广至同时包含经度与纬度的二维模型。本文一方面利用重构的新元古代陆块配置的全球模型，探讨了大陆收缩对冰流及冰厚的影响；另一方面，提出了一种在球面上处理冰流问题的二维模型公式，从而为将此类冰流模型与海洋及大气一般环流模型耦合提供了可能。该公式可看作是冰川学中广为人知的冰架方程 [例如，Morland, 1987; MacAyeal, 1997] 向球面坐标的简单推广。
  </p>
  
  <p>
    [35] Campbell 等人 [2011] 利用 Nye [1965] 推导的公式表明，在理想化的矩形边缘海（类似红海）中，冰流入侵受侧壁摩擦限制，会导致在净升华区域产生显著的冰厚变化。我们的数值模拟显示，与 Campbell 等人 [2011] 的原始观点一致，大陆收缩确实在其它情形下引起了冰厚变化，包括次大陆之间的相对狭窄区域，以及边缘海入口因陆块几何形状受限的区域。除数值解外，我们还对无大陆全球海洋以及由狭窄通道供给的边缘海情形下的冰厚变化做了尺度估计，这些尺度估计虽略低于数值解，但数量级吻合。
  </p>
  
  <p>
    [36] 我们从运动方程（Stokes 方程）出发而非 Weertman [1957] 关于冰架变形速率的估计，构建了冰流问题的模型，从而使得二维推广成为可能。此外，我们展示了对于仅依赖纬度的模型，采用 Morland [1987]、MacAyeal 和 Barcilon [1988] 以及 MacAyeal [1989, 1997] 对侧向几何和边界条件的精细描述，以及球面坐标效应，会在模型方程中引入此前未曾包含的附加项。具体而言，我们的模型需要对动量方程积分两次以求解冰流速度，其积分常数起到了类似于 Goodman 和 Pierrehumbert [2003] 引入“体力”的作用，使得在关于赤道对称的模型中子午向冰流速度在赤道处消失。 
  </p>
  
  <p>
    [37] 尽管我们在多个方面取得了显著进展，但许多相关的重要问题仍未解决。我们的模型忽略了陆冰向受限海的流动。我们预期，在全球海洋中模拟流入边缘海且海口较小时，将会面临数值分辨率不足的问题。与其提高全球分辨率，不如采用局部网格加密或对狭窄水道内冰流进行参数化（正如粗分辨率海洋模型中常做的那样，用于替代无法分辨关键狭窄水道和暗礁的直接求解，如直布罗陀海峡）。极地在标准球面坐标下也会给数值求解带来问题，这时可以考虑采用将极点移至陆地上方的替代网格 [例如，Voigt et al. 2011]，或将地球表面映射到立方体上的方法 [Adcroft et al., 2004]。
  </p>
  
  <p>
    [38] 本研究仅聚焦于冰流效应，因此忽略了所有热力学、尘埃和光学效应，而这些效应被认为是决定雪球情景下冰厚的重要过程 [Warren et al., 2002; Goodman and Pierrehumbert, 2003; McKay, 2000; Pollard and Kasting, 2005, 2006; Warren and Brandt, 2006; Goodman, 2006; Abbot and Pierrehumbert, 2010; Li and Pierrehumbert, 2011; Pierrehumbert et al., 2011]。相反，我们根据 Pollard 和 Kasting [2005] 的数值计算，规定了积累、冻结、融化和升华所引起的冰净强迫场（时间不变）。这种做法虽然使我们能够单独研究冰流效应，但忽略的其它因素可能使冰厚变化显著增大，甚至可能导致边缘海和低纬度地区出现薄冰层，从而对生命存活产生影响（参见 Campbell 等人 [2011] 的讨论）。由于我们忽略了这些重要因素，故不在本文中讨论其可能影响。
  </p>
  
  <p>
    [39] 值得注意的是，冰架的动力学、崩塌、裂缝产生和通道流过程中断裂的存在等问题，在冰川学文献中已有大量讨论 [例如，Doake et al., 1998; Doake and Vaughan, 1991; MacAyeal et al., 2003; Rott et al., 1996; Vieli et al., 2006; Weis et al., 1999; van der Veen, 1999]。这些经验教训对于理解雪球海洋上冰流的动力学及冰架裂缝中可能存在的避难所均具有明显的参考意义。
  </p>
  
  <p>
    [40] 鉴于以上众多理想化假设，我们强调，本研究仅作为针对某一特定动力因素的过程研究，而非对新元古代冰厚进行逼真模拟。同时，我们假定冰厚在所有区域均很大；若未来出现薄冰或无冰海洋，或者研究瞬态雪球启动及厚冰入侵海洋的问题，则需要对本公式进行扩展。
  </p>
  
  <p>
    [41] 尽管存在明显局限性，本研究仍是将雪球冰流模型与海洋及大气一般环流模型耦合的第一步。这将有助于改进对冰基及冰面融化、冻结、升华和降雪积累的描述，并使这些模型更加准确。
  </p>

  <h2>附录 A：模型方程的推导</h2>
  
  <h3>A1. 冰表与冰底边界条件</h3>
  <p>
    [42] 冰顶和冰底的动量边界条件可写为 [MacAyeal, 1997]：
  </p>
  <div class="equation">
    $$ s\cdot \hat{n}_s = 0; \qquad s\cdot \hat{n}_b = \hat{n}_b\, p_w, \tag{A1} $$
  </div>
  <p>
    其中，\(\hat{n}_s\) 与 \(\hat{n}_b\) 分别是指向外侧的冰表面和冰底法向量。应力张量元 \(s_{ij}\) 表示作用于垂直于 \(j\) 方向的面的 \(i\) 方向力，因此 \(s_{ij}n_j\) 表示作用于冰表面单位面积上的总力。该力在冰表面处为零，而在冰底处等于静水压力 \(p_w\)。
  </p>
  <p>
    定义偏应力为
  </p>
  <div class="equation">
    $$ t_{ij} = s_{ij} - d_{ij}\frac{1}{3}\,s_{kk} = s_{ij} + p\,d_{ij}, $$
  </div>
  <p>
    （其中 \(d_{ij}\) 是 Kronecker δ，且压力定义为 \(p = \frac{1}{3}\,s_{kk}\)），这就得到边界条件的等效形式：
  </p>
  <div class="equation">
    $$ (t - pI)\cdot \hat{n}_s = 0; \qquad (t - pI)\cdot \hat{n}_b = \hat{n}_b\, p_w. \tag{A2} $$
  </div>
  <p>
    冰表面海拔 \(s(f,q)\) 的法向量由函数
    $$ f(f,q,z) = z - s(f,q) $$
    的梯度给出，即
  </p>
  <div class="equation">
    $$ \hat{n} = \frac{\nabla f}{\|\nabla f\|} = \frac{\Bigl(\frac{1}{r\sin q}\,s_f,\;\frac{1}{r}\,s_q,\;1\Bigr)}{\left\|\Bigl(\frac{1}{r\sin q}\,s_f,\;\frac{1}{r}\,s_q,\;1\Bigr)\right\|}. \tag{A3} $$
  </div>
  <p>
    则，球面坐标下边界条件 (2) 与 (A2) 可写为
  </p>
  <div class="equation">
    $$ 
    \begin{aligned}
      \Bigl(t_{ff}-p\Bigr)\frac{1}{r\sin q}\,s_f + t_{fq}\frac{1}{r}\,s_q - t_{fz} &= 0 \quad \text{在 } z=s,\\[1mm]
      t_{qf}\frac{1}{r\sin q}\,s_f + \Bigl(t_{qq}-p\Bigr)\frac{1}{r}\,s_q - t_{qz} &= 0 \quad \text{在 } z=s,\\[1mm]
      t_{zf}\frac{1}{r\sin q}\,s_f + t_{zq}\frac{1}{r}\,s_q + \Bigl(t_{zz}-p\Bigr) &= 0 \quad \text{在 } z=s.
    \end{aligned}
    \tag{A4}
    $$
  </div>
  <p>
    类似地，在冰底处，将 \(s\) 替换为 \(b\) 并加入相应的静水压力项即可。其中，\(m=\frac{\rho_I}{\rho_w}\)。
  </p>
  
  <h3>A2. 球面坐标下冰架方程</h3>
  <p>
    [43] 本推导遵循 Morland [1987] 与 MacAyeal [1997]，但这里使用了球面坐标（或者也可从 Schoof [2006] 的不变量公式出发，利用球面坐标下的协变导数表达式得到相同结果）。令坐标（经度、副纬度、垂直）记作 \((f,q,r)\)，对应速度为 \((u,v,w)\)。在采用“薄壳”近似时，我们转换为坐标 \((f,q,z)\)，并将 \(r\) 视为常数（即地球半径）。
  </p>
  <p>
    向量的梯度、散度与拉普拉斯算子分别为：
  </p>
  <div class="equation">
    $$ \nabla f = \left(\frac{1}{r\sin q}\frac{\partial f}{\partial f},\; \frac{1}{r}\frac{\partial f}{\partial q},\; \frac{\partial f}{\partial r}\right), $$
  </div>
  <div class="equation">
    $$ 
    \nabla\cdot \mathbf{v} = \frac{1}{r\sin q}\frac{\partial u}{\partial f} 
    + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,v\Bigr)
    + \frac{1}{r^2}\frac{\partial}{\partial r}\Bigl(r^2\,w\Bigr)
    \approx \frac{1}{r\sin q}\frac{\partial u}{\partial f} 
    + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,v\Bigr)
    + \frac{\partial w}{\partial z},
    \tag{A5}
    $$
  </div>
  <p>
    其中，我们作了薄壳近似，即冰厚远小于地球半径，将 \(r\) 的导数替换为关于局部垂直坐标 \(z\) 的导数，并令 \(r\) 为常数（即地球半径）。
  </p>
  <p>
    对称应变率张量为
  </p>
  <div class="equation">
    $$ 
    \dot{\varepsilon} = 
    \begin{pmatrix}
      \dot{\varepsilon}_{ff} & \dot{\varepsilon}_{fq} & \dot{\varepsilon}_{fr}\\[1mm]
      \dot{\varepsilon}_{qf} & \dot{\varepsilon}_{qq} & \dot{\varepsilon}_{qr}\\[1mm]
      \dot{\varepsilon}_{rf} & \dot{\varepsilon}_{rq} & \dot{\varepsilon}_{rr}
    \end{pmatrix},
    \tag{A6}
    $$
  </div>
  <p>
    （以上对角线上方的分量省略，因其与下方相等）。
  </p>
  <p>
    [44] 利用薄壳近似（例如，\(\frac{1}{r^2}\frac{\partial}{\partial r}(r^2w)\approx \frac{\partial w}{\partial z}\) 且忽略 \(wq/r\)）以及冰架近似（忽略 \(\dot{\varepsilon}_{qz}\) 与 \(\dot{\varepsilon}_{fz}\)，且假定水平速度 \(u, v\) 不随 \(z\) 变化且远大于垂直速度 \(w\)），可得近似形式：
  </p>
  <div class="equation">
    $$ 
    \dot{\varepsilon} \approx 
    \begin{pmatrix}
      \frac{1}{r\sin q}\frac{\partial u}{\partial f} + \frac{v\cos q}{r\sin q} & \frac{1}{2r}\left(\frac{1}{\sin q}\frac{\partial v}{\partial f} + \sin q\,\frac{\partial u}{\partial q}\right) & 0\\[2mm]
      \frac{1}{2r}\left(\frac{1}{\sin q}\frac{\partial v}{\partial f} + \sin q\,\frac{\partial u}{\partial q}\right) & \frac{1}{r}\frac{\partial v}{\partial q} & 0\\[2mm]
      0 & 0 & \frac{\partial w}{\partial z}
    \end{pmatrix}.
    \tag{A7}
    $$
  </div>
  <p>
    球面坐标下，动量方程的矢量形式 (1) 显式写为分量形式：
  </p>
  <div class="equation">
    $$ 
    \begin{aligned}
    0 &= \frac{1}{r\sin q}\frac{\partial p}{\partial f} + \frac{1}{r\sin q}\frac{\partial t_{ff}}{\partial f} + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,t_{qf}\Bigr) + \frac{1}{r^2}\frac{\partial}{\partial r}\Bigl(r^2\,t_{rf}\Bigr) + \frac{t_{rf}}{r} + \cot q\,\frac{t_{qf}}{r},\\[2mm]
    0 &= \frac{1}{r}\frac{\partial p}{\partial q} + \frac{1}{r\sin q}\frac{\partial t_{tfq}}{\partial f} + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,t_{qq}\Bigr) + \frac{1}{r^2}\frac{\partial}{\partial r}\Bigl(r^2\,t_{rq}\Bigr) + \frac{t_{rq}}{r} + \cot q\,\frac{t_{ff}}{r},\\[2mm]
    0 &= \frac{\partial p}{\partial r} - g\,\rho_I + \frac{1}{r\sin q}\frac{\partial}{\partial f}\Bigl(t_{rf}\Bigr) + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,t_{rq}\Bigr) + \frac{1}{r^2}\frac{\partial}{\partial r}\Bigl(r^2\,t_{rr}\Bigr) - t_{qq} - \frac{t_{ff}}{r}.
    \end{aligned}
    \tag{A8}
    $$
  </div>
  <p>
    注意，在曲线坐标中二阶张量的散度除了包含矢量散度的项外，还包含一系列度量修正项（详见附录 B 的数学证明概要，以及本文中方程 (9)–(13) 后的启发式讨论）。这些修正项出现在两个水平动量方程的最后两项以及垂直动量方程的最后一项。利用薄壳近似和冰架近似 \(t_{qz}\approx 0,\;t_{fz}\approx 0\)，我们得到
  </p>
  <div class="equation">
    $$ \frac{1}{r\sin q}\frac{\partial p}{\partial f} + \frac{1}{r\sin q}\frac{\partial t_{ff}}{\partial f} + \frac{1}{r\sin q}\frac{\partial}{\partial q}\Bigl(\sin q\,t_{qf}\Bigr) + \cot q\,\frac{t_{qf}}{r} = 0. \tag{A9} $$
  </div>
  
  <h2>附录 B：张量的散度</h2>
  
  <p>
    [46] 写出散度算符为
  </p>
  <div class="equation">
    $$ r\cdot = \hat{e}_f\,\frac{1}{r\sin q}\,\partial_f + \hat{e}_q\,\frac{1}{r}\,\partial_q + \hat{e}_r\,\partial_r, \tag{B1} $$
  </div>
  <p>
    并注意，在球面坐标中单位向量并非常数，例如有
    $$ \partial_q \hat{e}_q = \hat{e}_r \quad \text{[Greenberg, 1998]}. $$
  </p>
  
  <p>
    [47] 将上述散度算符作用于向量 \(\mathbf{v}\)，即
  </p>
  <div class="equation">
    $$ r\cdot \mathbf{v} = \left(\hat{e}_f\,\frac{1}{r\sin q}\,\partial_f + \hat{e}_q\,\frac{1}{r}\,\partial_q + \hat{e}_r\,\partial_r\right) \cdot \left(\hat{e}_f\,u + \hat{e}_q\,v + \hat{e}_r\,w\right), \tag{B2} $$
  </div>
  <p>
    我们发现单位向量的导数引入了一系列修正项，这是由于非笛卡尔坐标系的缘故。为了推导张量的散度（其结果为一个向量），可以写为
  </p>
  <div class="equation">
    $$ r\cdot t = \left(\hat{e}_f\,\frac{1}{r\sin q}\,\partial_f + \hat{e}_q\,\frac{1}{r}\,\partial_q + \hat{e}_r\,\partial_r\right) \cdot \left(\hat{e}_f\,\hat{e}_f\,t_{ff} + \hat{e}_f\,\hat{e}_q\,t_{fq} + \cdots \right), \tag{B3} $$
  </div>
  <p>
    其中，例如 \(\hat{e}_f\,\hat{e}_q\) 是一个仅在 \((f,q)=(1,2)\) 位置非零的张量。利用单位向量导数的表达式，我们发现导数项现在不仅包括张量分量（例如 \(t_{fq}\)）的导数，还包括乘在每个张量分量两侧的单位向量的导数。因此，我们预期由于单位向量的导数而产生两项修正项，而不是像向量散度中仅有一项修正。正是这些额外的修正项导致了文中讨论的动量方程中附加的项。
  </p>
  
  <p>
    [48] 致谢。我们感谢 Adam Campbell 以及两位匿名审稿人提出的极具建设性和帮助性的意见；同时感谢 Adam Campbell、Dawei Li 和 Ray Pierrehumbert 对早期草稿的评论。本研究得到了 NSF P2C2 气候动力学项目（资助号 ATM-0902844，支持人：ET 和 YA）的资助。ET 感谢魏茨曼研究所对本研究部分工作的热情接待。
  </p>
</body>
</html>