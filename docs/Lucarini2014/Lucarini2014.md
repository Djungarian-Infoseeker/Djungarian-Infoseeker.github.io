<html>
<head>
    <meta charset="UTF-8">
    <title>气候科学的数学和物理思想</title>
    <script type="text/javascript" async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS_CHTML">
    </script>
</head>
<body>
    <h1>气候科学的数学和物理思想</h1>
    <h2>Valerio Lucarini<sup>1,2,3</sup>, Richard Blender<sup>1</sup>, Corentin Herbert<sup>4</sup>, Francesco Ragone<sup>1,5</sup>, Salvatore Pascale<sup>1</sup>, Jeroen Wouters<sup>1,6</sup></h2>
    
    <p><strong>1</strong> 德国汉堡大学气象研究所气候校园，德国汉堡</p>
    <p><strong>2</strong> 英国雷丁大学数学与统计学院，英国雷丁</p>
    <p><strong>3</strong> 雷丁大学气候系统研究沃克研究所，英国雷丁</p>
    <p><strong>4</strong> 美国科罗拉多州博尔德国家大气研究中心</p>
    <p><strong>5</strong> 德国汉堡大学海洋学研究所气候校园，德国汉堡</p>
    <p><strong>6</strong> 法国里昂高等师范学校物理实验室，法国里昂</p>
    
    <h2>摘要</h2>
    <p>气候是一个受外界强迫和耗散的非线性系统，表现出跨越广泛空间和时间尺度的复杂动力学特性。理解气候的结构性和多尺度特性对于全面把握其动力学特征，以及实现精确高效的数值模型至关重要。</p>
    <p>我们介绍了一些气候科学、数学和物理学交叉领域的最新进展，这些进展有望在构建更全面的气候动力学理论方面有所突破。我们首先描述了流体动力学的 Nambu 表述及其在构建复杂地球流体数值模型中的潜力。</p>
    <p>接着，我们关注于旋转环境下准平衡流体的统计力学，这对于构建地球物理湍流的稳健理论显得尤为关键。随后，我们讨论了一些直接应对气候系统非平衡性质的思想和方法。</p>
    <p>首先，我们描述了气候热力学方面的一些最新发现，分析了气候系统的能量和熵收支，并讨论了相关方法，这些方法可用于气候模型的对比分析以及气候系统临界点的研究。这些思想还可以为地球物理学和天体物理学提供共同的研究工具，有助于研究系外行星大气。</p>
    <p>最后，我们聚焦于非平衡统计力学，它为处理气候对外部强迫的响应、边界条件变化的影响、地球物理流体间的耦合效应以及数值模型参数化的推导提供了统一的框架。</p>
    
    <h2>1. 引言</h2>
    <p>地球气候是一个高维度的受外界强迫和耗散的复杂系统。这种系统的动力学是混沌的，因此只有有限的时间范围可以进行有技能的预测。此外，由于气候系统不同组成部分的物理和化学特性及其相互耦合机制，其动力学特征在广泛的空间和时间尺度上表现得极其复杂。</p>
    <p>因此，构建令人满意的气候动力学理论极具挑战性，几乎不可能开发出能够在所有尺度上准确描述气候过程的数值模型。通常，不同类别的模型和不同的现象学理论会集中在特定尺度的运动上进行开发，并且简化参数化被用来至少大致地描述那些无法直接表示的过程。</p>
    <p>由于我们对气候系统动力学的理解有限，难以准确预测其对外部扰动（例如大气不透明度、太阳辐照度、大陆位置和轨道参数变化）的响应。这些扰动在地球各个时代都存在。我们对于缓慢和快速发生的气候极端事件（如干旱和洪水事件）及其背后导致气候系统多稳态的临界点过程的理解，仍然远未完善。</p>
    
    <p>这些局限性对古气候学问题（如冰川期或雪球地球状态的形成和消退）以及当前问题（如人为引起的全球变暖）都具有极其重要的现实意义。此外，它们也与全面理解行星大气动力学和热力学密切相关，尤其是在当前我们观测系外行星的能力显著提高的背景下，这一挑战显得尤为紧迫。</p>
    
    <p>气候科学一直积极吸收数学和物理学的最新进展，并在此基础上推动新问题的提出。例如，随机和混沌动力系统、时间序列分析、极值理论、辐射传输和流体动力学等领域的进展为气候科学的发展提供了重要支持。</p>
    
    <p>本文旨在展示一些气候科学、物理学和数学交叉领域的重要研究方向，这些方向有望推动我们对气候动力学的理解和建模能力。与此同时，这些主题还为更广泛的科学问题提供了新的研究思路。</p>
    
    <p>我们将首先集中探讨无黏性和无强迫地球流体动力学的特性。接着，我们将从 Onsager 的经典研究出发，展示如何为地球物理流体动力学的湍流现象构建一个平衡统计力学理论，并探讨其在解释观测到的气候现象中的重要性。</p>
    
    <p>平衡方法允许我们研究地球流体动力学（GFD）流动的许多特性。然而，此时我们不能再忽略一个显而易见的事实：<mark>气候系统的动力学无法简单地被视为无粘性和无外力的地球流体动力学流动，因为强迫和耗散过程具有极其重要的意义。</mark></p>
    
    <p>因此，我们转向非平衡系统的范式。在第4节中，借鉴Prigogine（1961）和Lorenz（1967）的观点，我们探讨如何通过经典非平衡热力学构建工具来评估气候系统的能量收支和传输，定义和估算气候机器的效率，并通过评估气候物质熵的产生来研究不可逆过程。这使我们能够表征气候的大尺度特性，开发气候模型审计工具，收集有关临界点的信息，并探索一般行星大气的性质。</p>
    
    <p>在第5节中，我们探讨气候动力学的非平衡统计力学表述，研究响应理论的形式主义如何在严格的框架下解决气候对扰动的响应，灵感来自Ruelle（1997）的研究。我们将展示如何构建有助于从集合意义上预测气候变化的算符。</p>
    
    <p>地球流体动力学（GFD）统计力学的最后一个方面是参数化的推导，提供对难以在数值模型中明确表示的小尺度快速变量对大尺度缓慢变量影响的替代描述。因此，在第6节中，我们介绍平均化和均质化技术，描述由Mori（1965）和Zwanzig（1961）提出的投影算符方法，这些方法为参数化的推导提供了有力工具，并为随机项和记忆效应的引入提供了坚实基础。同时，我们讨论如何使用响应理论来推导类似的结果。</p>
    
    <p>最后，在第7节中，我们总结全文并展望未来的研究方向。</p>
    
    <h2>2.超越哈密顿范式：地球物理流体动力学的南部表述</h2>
    
    <p>哈密顿形式主义构成了大多数物理理论的基础。在离散自治系统的情况下，其基本思想是通过定义一组正则变量 \( q \) 和相关动量 \( p \) （\( q, p ∈ \mathbb{R}^N \)，即它们是N维向量）来全面描述自由度，并将时间演化识别为相空间中的流动，使得正则哈密顿函数 \( \mathcal{H} \) 充当流函数：</p>
    
    <p>
    \[
    \dot{q} = \nabla_p \mathcal{H}, \quad \dot{p} = -\nabla_q \mathcal{H}
    \]
    </p>
    
    <p>其中，\( \mathcal{H}(q, p) \) 对应于系统的能量，其值在时间上保持恒定。该流动本质上是无散的（旋量流动），因此相空间既不收缩也不扩展，这由刘维尔定理（Liouville Theorem）所隐含。</p>
    
    <p>任何函数 \( X(q, p) \) 的时间演化可以表示为：</p>
    
    <p>
    \[
    \frac{d}{dt} X = \dot{X} = \{X, \mathcal{H}\}_P = \nabla_q X \cdot \nabla_p \mathcal{H} - \nabla_p X \cdot \nabla_q \mathcal{H}
    \]
    </p>
    
    <p>这里，\( \{,\}_P \) 是所谓的泊松括号（Poisson brackets），\( \cdot \) 表示通常的标量积。</p>
    
    <p>根据诺特定理（Noether's Theorem），系统的对称性意味着存在所谓的物理守恒量 \( X_i \)，使得：</p>
    
    <p>
    \[
    \dot{X_i} = 0 = \{X_i, \mathcal{H}\}_P
    \]
    </p>
    
    <p>自主系统具有时间不变性，因此其能量保持恒定。而在具有平移不变性的系统中，总动量 \( M \) 也保持不变。系统可以具有许多守恒常数，称为Casimir不变量，除了能量之外。但哈密顿量在系统演化定义中具有特殊地位，因为它是唯一显式出现在演化方程中的相空间函数。</p>
    
    <p>南部（Nambu, 1973）为离散系统提出了哈密顿理论的推广。这些动力学方程旨在满足刘维尔定理，并以两个或多个守恒量的形式书写。</p>
    
    <p>南部方法在数学和物理的各个领域中具有深远影响，并且可以扩展到连续的情况，从而转化为场论。在地球物理流体动力学中构建南部场论经历了两个决定性步骤。首先是发现了二维和三维不可压缩流体动力学的南部表述（Névir 和 Blender, 1993）。其次，发现南部表述可以用来在地球物理模型中设计保守的数值算法，并且Arakawa为构建精确数值模型而设计的经典启发式方法，实际上反映了来自流动基础动力学的南部结构的深层对称性（Salmon, 2005）。</p>
    
    <p>南部理论在描述和模拟保守地球物理流体动力学中的重要性来自于除了能量之外，还存在其他相关的守恒量。这种特性在许多与地球物理流动相关的模型中存在，适用于二维和三维流体动力学、Rayleigh-Bénard对流、准地转流和浅水模型，并扩展到完全正压三维大气中。</p>
    <h2>2.1 二维与三维的流体动力学</h2>
    <p>在不可压缩的流体动力学中，除能量外，二维的涡度守恒和三维的螺旋度是已知的积分守恒量 [Kuroda, 1991]。Névir 和 Blender [1993] 采用南部的形式主义，将其应用于不可压缩、无粘性流体动力学，利用涡度和螺旋度引入到动力学方程中。</p>
    
    <h3>2.1.1. 二维流体动力学</h3>
    <p>由速度场 \( u \) 描述的二维不可压缩、无粘性、无外力流动的演化由涡度方程控制：</p>
    <p>
    \[
    \frac{\partial \omega}{\partial t} = -u \cdot \nabla \omega,
    \]
    </p>
    <p>在这里，常规符号用于表示偏导数。涡度 \( \omega \) 在笛卡尔坐标系 \((x,y)\) 中可以表示为：</p>
    <p>
    \[
    \omega = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y},
    \]
    </p>
    <p>不可压缩性由方程 \( \nabla \cdot u = 0 \) 描述，其中：</p>
    <p>
    \[
    \nabla \cdot u = \frac{\partial u_x}{\partial x} + \frac{\partial u_y}{\partial y},
    \]
    </p>
    <p>表示向量场 \( U \) 的散度。因此，我们可以将速度场表示为：</p>
    <p>
    \[
    u = S \nabla \psi = \left(-\frac{\partial \psi}{\partial y}, \frac{\partial \psi}{\partial x}\right),
    \]
    </p>
    <p>其中，\( S \) 是辛矩阵：</p>
    <p>
    \[
    S = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix},
    \]
    </p>
    <p>\( \psi \) 是流函数，\( \nabla \phi = \left(\frac{\partial \phi}{\partial x}, \frac{\partial \phi}{\partial y}\right) \) 是函数 \( \phi \) 的梯度。注意到：</p>
    <p>
    \[
    \omega = \nabla^2 \psi.
    \]
    </p>
    <p>在本节中，我们考虑一个紧致区域（例如边长为 \( L \) 的正方形），并设定周期性边界条件。</p>
    
    <p>哈密顿量 \( \mathcal{H} \) 是速度的动能泛函，定义如下：</p>
    <p>
    \[
    \mathcal{H} = \frac{1}{2} \int u^2 dA = \frac{1}{2} \int \nabla \psi \cdot \nabla \psi dA = -\frac{1}{2} \int \omega \psi dA,
    \]
    </p>
    <p>这里我们使用了分部积分。</p>
    
    <p>一般来说，泛函 \( \mathcal{F}[\phi] \) 将相空间函数 \( \phi \) 映射到一个数值上。泛函导数 \( \frac{\delta \mathcal{F}}{\delta \phi} \) 表示泛函 \( \mathcal{F} \) 对函数 \( \phi \) 变化的敏感性。泛函导数可以通过以下展开定义：</p>
    <p>
    \[
    \mathcal{F}[\phi + \delta \phi] - \mathcal{F}[\phi] = \int \frac{\delta \mathcal{F}}{\delta \phi(x)} \delta \phi(x) dx + \cdots
    \]
    </p>
    
    <p>对于哈密顿量泛函 (3)，其泛函导数可以显式计算为：</p>
    <p>
    \[
    \delta \mathcal{H} = \int \nabla \psi \cdot \delta \nabla \psi dA = \int \nabla \cdot (\psi \delta \nabla \psi) dA - \int \psi \delta \omega dA.
    \]
    </p>
    
    <p>由于第一个积分在边界条件下为零，且因为 \( \omega = \nabla^2 \psi \)，我们得到：</p>
    <p>
    \[
    \frac{\delta \mathcal{H}}{\delta \omega} = -\psi.
    \]
    </p>
    
    <p>因此，涡度方程表明涡度由无散流动在区域内传输。</p>
    
    <p>可以证明，任何关于涡度的泛函都是守恒的，其形式为：</p>
    <p>
    \[
    \mathcal{C} = \int s(\omega) dA,
    \]
    </p>
    <p>其中积分在整个系统区域上进行。最常见的这种泛函是流动的总涡度能量：</p>
    <p>
    \[
    \mathcal{E} = \frac{1}{2} \int \omega^2 dA.
    \]
    </p>
    
    <p>涡度能量的泛函导数简单为：</p>
    <p>
    \[
    \frac{\delta \mathcal{E}}{\delta \omega} = \omega.
    \]
    </p>
    
    <p>最终，二维涡度方程可重新表达为：</p>
    <p>
    \[
    \frac{\partial \omega}{\partial t} = -\mathcal{J}(\psi, \omega) = \mathcal{J}(\omega, \psi) = -\mathcal{J},
    \]
    </p>
    <p>其中，反对称雅可比算子定义为：</p>
    <p>
    \[
    \mathcal{J}(a, b) = \frac{\partial a}{\partial x} \frac{\partial b}{\partial y} - \frac{\partial a}{\partial y} \frac{\partial b}{\partial x}.
    \]
    </p>
    <h2>2.1.2. 三维不可压缩流体动力学</h2>
    <p>三维不可压缩、无外力、无粘性流体流动的动力学由涡度方程控制：</p>
    <p>
    \[
    \frac{\partial \boldsymbol{\omega}}{\partial t} = \boldsymbol{\omega} \cdot \nabla \boldsymbol{u} - \boldsymbol{u} \cdot \nabla \boldsymbol{\omega},
    \]
    </p>
    <p>其中，\( \boldsymbol{u} \) 是速度场，且满足不可压缩性条件：</p>
    <p>
    \[
    \nabla \cdot \boldsymbol{u} = 0.
    \]
    </p>
    <p>在笛卡尔坐标系中，速度场的旋度（curl）可以表示为：</p>
    <p>
    \[
    (\nabla \times \boldsymbol{u})_i = \epsilon_{ijk} \frac{\partial u_k}{\partial x_j},
    \]
    </p>
    <p>其中，\( \epsilon_{ijk} \) 是完全反对称的Levi-Civita符号，\( \nabla \cdot \boldsymbol{u} = \frac{\partial u_x}{\partial x} + \frac{\partial u_y}{\partial y} + \frac{\partial u_z}{\partial z} \) 是三维空间中的散度。</p>
    
    <p>与二维情况类似，总能量守恒，其形式为：</p>
    <p>
    \[
    \mathcal{H} = \frac{1}{2} \int u^2 dV = -\frac{1}{2} \int \boldsymbol{\omega} \cdot \boldsymbol{A} dV,
    \]
    </p>
    <p>其中，\( \boldsymbol{A} \) 是矢量势，使得：</p>
    <p>
    \[
    \boldsymbol{u} = -\nabla \times \boldsymbol{A}.
    \]
    </p>
    <p>在推导第二个等式时，我们使用了分部积分，并假设周期性边界条件。</p>
    
    <p>重要的是，总螺旋度也被守恒，其形式为：</p>
    <p>
    \[
    h = \frac{1}{2} \int \boldsymbol{\omega} \cdot \boldsymbol{u} dV.
    \]
    </p>
    <p>然而，例如，涡度能量却不是守恒量。按照方程 (4) 的过程，我们可以推导出能量关于涡度的泛函导数为：</p>
    <p>
    \[
    \frac{\delta \mathcal{H}}{\delta \boldsymbol{\omega}} = -\boldsymbol{A},
    \]
    </p>
    <p>对于螺旋度，有：</p>
    <p>
    \[
    \frac{\delta h}{\delta \boldsymbol{\omega}} = \boldsymbol{u}.
    \]
    </p>
    
    <p>涡度方程的南部形式为：</p>
    <p>
    \[
    \frac{\partial \boldsymbol{\omega}}{\partial t} = K \left(\frac{\delta h}{\delta \boldsymbol{\omega}}, \frac{\delta \mathcal{H}}{\delta \boldsymbol{\omega}}\right) = -K(\boldsymbol{u}, \boldsymbol{A}),
    \]
    </p>
    <p>其中：</p>
    <p>
    \[
    K(\boldsymbol{u}, \boldsymbol{v}) = -\nabla \times \left[(\nabla \times \boldsymbol{u}) \times (\nabla \times \boldsymbol{v})\right].
    \]
    </p>
    <p>考虑到 \( \boldsymbol{\omega} = \nabla \times \boldsymbol{u} \)，并使用一些标准的向量微积分恒等式，我们可以验证方程 (16) 与方程 (13) 一致。</p>
    
    <p>任意涡度泛函 \( \mathcal{F} = \mathcal{F}[\boldsymbol{\omega}] \) 的演化可以表示为：</p>
    <p>
    \[
    \frac{d \mathcal{F}}{dt} = -\int \nabla \times \frac{\delta \mathcal{F}}{\delta \boldsymbol{\omega}} \cdot \left[\nabla \times \frac{\delta h}{\delta \boldsymbol{\omega}} \times \nabla \times \frac{\delta \mathcal{H}}{\delta \boldsymbol{\omega}}\right] dV = \{\mathcal{F}, h, \mathcal{H}\}.
    \]
    </p>
    
    <p>该方程定义了基于涡度方程的三维不可压缩流体动力学的南部括号。螺旋度不再是一个隐藏的守恒量，而是在动力学中与哈密顿量具有同等地位。因此，南部力学能够明确地反映系统的守恒定律及其对应的对称性。</p>
    
    <h2>2.2. 地球物理流体动力学</h2>
    <p>南部表述还可以用于一些在大尺度地球物理流体动力学中非常重要的数学模型，例如准地转位涡方程 [Névir 和 Sommer, 2009]，浅水模型 [Salmon, 2005; Sommer 和 Névir, 2009]，以及正压分层大气模型 [Névir 和 Sommer, 2009]。</p>
    <p>其他具有地球物理相关性的模型也可以通过这种方式进行处理，其中最显著的是二维对流的 Rayleigh-Bénard 方程，这一模型已被 Bihlo [2008] 和 Salazar 与 Kurgansky [2010] 详细研究。然而，我们在本综述中不会涉及这一案例。</p>
    <h3>2.2.1. 准地转近似</h3>
    <p>准地转（QG）理论是地球物理流体动力学中最重要且被广泛研究的部分之一，对于研究地球大气和海洋的大尺度动力学，以及近年来的行星大气动力学至关重要 [Holton, 2004; Pedlosky, 1987; Klein, 2010]。</p>
    <p>当流体运动满足以下两个条件时，QG 动力学是有效的近似：</p>
    <ul>
        <li>(1) 流体运动是静力平衡的；</li>
        <li>(2) 科里奥利加速度与水平压力梯度相平衡。</li>
    </ul>
    <p>这种情况通常出现在大气的中纬度地区。在没有耗散过程和外部强迫的情况下，QG 动力学由 QG 位涡的物质守恒描述。</p>
    
    <p>我们采用笛卡尔坐标系和时间 \( (x, y, z, t) \)，其中 \( x \) 表示纬向方向，\( y \) 表示经向方向，\( z \) 表示由重力定义的垂直方向 [Holton, 2004]。演化方程如下所示：</p>
    <p>
    \[
    \frac{\partial Q}{\partial t} + \frac{1}{f_0} \mathcal{J}(\Phi, Q) = 0,
    \]
    </p>
    <p>其中，\( \mathcal{J} \) 是雅可比算子，\( Q \) 是埃尔泰位涡的 QG 近似，表达为：</p>
    <p>
    \[
    Q = \omega_g + f_0 \frac{1}{N^2} \frac{\partial^2 \Phi}{\partial z^2} + f,
    \]
    </p>
    <p>其中：</p>
    <ul>
        <li>\( \omega_g = \frac{1}{f_0} \nabla_h^2 \Phi \) 是地转涡度；</li>
        <li>\( \Phi \) 是重力势；</li>
        <li>\( \nabla_h^2 \) 是限制在 \( x \) 和 \( y \) 方向上的拉普拉斯算子；</li>
        <li>\( N \) 是布朗-瓦西拉频率；</li>
        <li>\( f = f_0 + \beta y \) 是科里奥利参数，包含了纬度依赖的行星涡度效应（β 效应）。</li>
    </ul>
    
    <p>地转速度 \( u_g \) 只有在 \( x \) 和 \( y \) 方向上有非零分量，因此我们可以写成：</p>
    <p>
    \[
    u_g = (u_h^g, 0),
    \]
    </p>
    <p>其中：</p>
    <p>
    \[
    u_h^g = \frac{1}{f_0} S \nabla_h \Phi = \frac{1}{f_0} \left(-\frac{\partial \Phi}{\partial y}, \frac{\partial \Phi}{\partial x}\right),
    \]
    </p>
    <p>这里 \( \nabla_h \) 是限制在 \( x \) 和 \( y \) 方向的梯度算子。</p>
    
    <p>第一个守恒积分是系统的总能量，表达为：</p>
    <p>
    \[
    \mathcal{H} = \frac{1}{2} \int \left[\left(\nabla_h \Phi\right)^2 + \frac{1}{N^2} \left(\frac{\partial \Phi}{\partial z}\right)^2\right] dV,
    \]
    </p>
    <p>其中，第一个项是动能密度，第二项是势能密度。</p>
    <p>在每个高度 \( z \) 上，重力势充当定义地转速度场的流函数，而重力势的垂直导数与系统的温度波动成正比 [Holton, 2004]。</p>
    
    <p>第二个守恒积分是位涡能量，定义为：</p>
    <p>
    \[
    \mathcal{E} = \frac{1}{2} \int Q^2 dV,
    \]
    </p>
    <p>这个定义类似于方程 (6) 中的涡度能量。</p>
    
    <p>可以证明，QG 动力学可以以南部形式写成：</p>
    <p>
    \[
    \frac{\partial Q}{\partial t} = -\mathcal{J}\left(\frac{\delta \mathcal{E}}{\delta Q}, \frac{\delta \mathcal{H}}{\delta Q}\right),
    \]
    </p>
    <p>其中，数学结构类似于二维涡度方程 (9)。</p>
    
    <p>此外，我们可以定义任意泛函 \( \mathcal{F}[Q] \) 的演化方程，使用以下南部括号：</p>
    <p>
    \[
    \frac{d \mathcal{F}}{dt} = -\int \frac{\delta \mathcal{F}}{\delta Q} \mathcal{J}\left(\frac{\delta \mathcal{E}}{\delta Q}, \frac{\delta \mathcal{H}}{\delta Q}\right) dV = \{\mathcal{F}, \mathcal{E}, \mathcal{H}\},
    \]
    </p>
    <p>其中：</p>
    <ul>
        <li>\( \frac{\delta \mathcal{E}}{\delta Q} = Q \)</li>
        <li>\( \frac{\delta \mathcal{H}}{\delta Q} = -\frac{\Phi}{f_0} \)</li>
    </ul>
    
    <p>这个南部括号定义了 QG 理论的数学框架，并与二维涡度方程密切相关。</p>
</body>
</html>