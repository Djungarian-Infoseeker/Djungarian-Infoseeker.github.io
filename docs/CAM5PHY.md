<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>第四章：模型物理过程</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h1>第四章：模型物理过程</h1>
    <p>
        正如第二章所述，CAM 5.0 的总参数化包由一系列组件组成，表示为：
    </p>
    <p>
        $$ P = \{M, R, S, T\}, $$
    </p>
    <p>
        其中 \(M\) 表示（湿）降水过程，\(R\) 表示云和辐射，\(S\) 表示地表模型，\(T\) 表示湍流混合。
    </p>
    <p>
        每个组件又细分为多个部分：
        \(M\) 包括一个可选的干绝热调整（通常仅应用于平流层）、湿穿透对流、浅对流和大尺度稳定凝结；
        \(R\) 首先计算云参数化，然后计算辐射参数化；
        \(S\) 提供从陆地、海洋和海冰模型获得的地表通量，或者基于指定的地表条件（如海表温度和海冰分布）计算通量。
        这些地表通量为湍流混合 \(T\) 提供了下边界条件，\(T\) 包括行星边界层参数化、垂直扩散和重力波拖曳。
    </p>
    <p>
        上述段落中提到的变量更新（除温度外）是直接的。
        然而，温度的更新稍微复杂一些，它遵循 Boville 和 Bretherton [2003a] 描述的基于干静能的通用方法。
        每个时间分裂参数化组件更新后的状态变量是干静能 \(s_i\)。
        假设 \(i\) 是一系列时间分裂过程中的索引。
        在第 \(i\) 个过程结束时的干静能为 \(s_i\)。
        干静能通过第 \(i\) 个过程计算的加热率 \(Q\) 来更新：
    </p>
    <p>
        $$ s_i = s_{i-1} + (\Delta t) Q_i(s_{i-1}, T_{i-1}, \Phi_{i-1}, q_{i-1}, \ldots). $$
    </p>
    <p>
        （4.2）
    </p>
    <p>
        对于不基于干静能而是基于温度倾向公式化的过程，加热率由以下公式给出：
    </p>
    <p>
        $$ Q_i = \frac{T_i - T_{i-1}}{C_p \Delta t}. $$
    </p>
    <p>
        温度 \(T_i\) 和重力势能 \(\Phi_i\) 通过以下公式从干静能 \(s_i\) 中反算得到：
    </p>
    <p>
        $$ s = C_p T + gz = C_p T + \Phi, $$
    </p>
    <p>
        结合静力学方程替代 \(\Phi\)：
    </p>
    <p>
        $$ \Phi_k = \Phi_s + R \sum_{l=k}^H H_{kl} T_{vl}. $$
    </p>
    <p>
        （4.3, 4.4）
    </p>
    <p>
        每个过程的温度倾向也在整个过程中累积。
        对于基于干静能公式化的过程，温度倾向由干静能的倾向计算得到。
        假设 \(\frac{\Delta T_i}{\Delta t}\) 表示第 \(i\) 个过程结束时的总累积，则有：
    </p>
    <p>
        $$ \frac{\Delta T_i}{\Delta t} = \frac{\Delta T_{i-1}}{\Delta t} + \frac{\Delta s_i}{C_p \Delta t}, $$
    </p>
    <p>
        其中：
    </p>
    <p>
        $$ \frac{\Delta s_i}{\Delta t} = \frac{s_i - s_{i-1}}{\Delta t}. $$
    </p>
    <p>
        （4.5, 4.6）
    </p>
    <p>
        这里假设 \(\Phi\) 不变。
        注意，\(s\) 的反算会导致 \(T\) 和 \(\Phi\) 变化。
        这种变化未计入上述公式中。
        对于不基于干静能而是基于温度倾向公式化的过程，这种倾向会直接累积。
    </p>
    <p>
        在最后一个参数化完成后，最后更新的干静能会被保存下来。
        这个最终的列能量会在下一次物理计算开始时用于计算与动力核心相关的全局能量修正。
        这意味着，将上述 \(T\) 传递给有限体积（FV）动力核心而不是通过干静能反算得到的 \(T\) 所引入的能量不一致性，会包含在归因于动力学的修正中。
    </p>
    <p>
        累积的物理温度倾向也在最后一个参数化完成后可用，\(\frac{\Delta T_I}{\Delta t}\)。
        从中可以通过以下公式计算出更新后的温度：
    </p>
    <p>
        $$ T_I = T_0 + \frac{\Delta T_I}{\Delta t} \cdot \Delta t. $$
    </p>
    <p>
        （4.7）
    </p>
    <p>
        这个温度被转换为虚拟位温并传递给有限体积动力核心。
        温度倾向本身被传递给谱变换欧拉和半拉格朗日动力核心。
        上述温度和干静能使用中的不一致性在模型的未来版本中应被消除。
    </p>
</body>
</html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>气溶胶 - 章节 4.8</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.8 气溶胶</h2>
    <p>
        在 CAM5 中实现了两种不同的气溶胶模式表示法。一个是具有 7 模式的气溶胶模式模型 (MAM-7)，作为进一步简化的基准。它包括艾肯模式、积聚模式、初级碳模式、细尘模式、海盐模式，以及粗尘和粗海盐模式（见图 4.3）。在单一模式中，例如积聚模式，内部混合的硫酸盐、铵盐、二次有机气溶胶（SOA）、由初级碳模式老化形成的初级有机物（POM）、由初级碳模式老化形成的黑碳（BC）、海盐的质量混合比以及积聚模式颗粒的数量混合比都是被预测的。初级碳颗粒（有机物和黑碳）会首先以初级碳模式排放，然后通过H₂SO₄、NH₃和SOA（气相）的凝结以及与艾肯模式和积聚模式的颗粒的凝聚作用逐渐老化并转变为积聚模式（详见下文）。
    </p>
    <p>
        气溶胶粒子存在于不同的附着状态中。我们通常认为悬浮在空气中的气溶胶粒子（清洁或云空气），这些被称为“间质气溶胶粒子”。气溶胶粒子还可以附着在或包含于不同的水成物（如云滴）中。在 CAM5 中，“间质气溶胶粒子”以及层状云中的气溶胶粒子（称为云携带气溶胶粒子）都被明确预测（Easter et al., 2004）。间质气溶胶物种存储在状态变量的 <code>q</code> 数组中，并在三维空间中传输；而云携带气溶胶物种存储在物理缓冲区的 <code>qqcw</code> 数组中，且不进行三维传输（除了垂直湍流混合），以节省计算时间，同时对其预测值影响较小（Ghan 和 Easter, 2006）。
    </p>
    <p>
        每种模式与间质气溶胶相关的气溶胶水混合比根据 Kohler 理论诊断得出（参见以下章节中的吸湿性），假设与环境相对湿度处于平衡状态。这些混合比同样不进行三维传输，存储在物理缓冲区的 <code>qaerwat</code> 数组中。
    </p>
    <p>
        每种模式的粒径分布假定为对数正态分布，模式干或湿半径随粒子数量和总干或湿体积的变化而变化，标准偏差按照图 4.3 所示设定。对于 MAM-7 模式，总共传输的气溶胶种类为 31 种，而传输的气态物种包括 SO<sub>2</sub>、H<sub>2</sub>O<sub>2</sub>、DMS、H<sub>2</sub>SO<sub>4</sub>、NH<sub>3</sub> 和 SOA（气态）。
    </p>
    <figure>
        <img src="docs/CAM5PHYDOC/4.3.png" alt="Figure 4.3: Predicted species for interstitial and cloud-borne component of each aerosol mode in MAM-7">
        <figcaption>图 4.3: MAM-7 模式中每种气溶胶模式下的间质和云生成分的预测物种。每种模式的标准偏差分别为 1.6（艾肯模式）、1.8（积聚模式）、1.6（初级碳模式）、1.8（细尘和粗尘）、2.0（细海盐和粗海盐）。</figcaption>
    </figure>
    <p>
        对于 i-th 物种和 j-th 模式的间质气溶胶质量 (\(M_a^{i,j}\)) 和数量 (\(N_a^j\)) 的时间演化如下：
    </p>
    <p>
        $$
        \begin{aligned}
        \frac{\partial M_a^{i,j}}{\partial t} &+ \frac{1}{\rho} \nabla \cdot (\rho u M_a^{i,j}) = 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{conv}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{diffus}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{nuc}} \\
        &+ \frac{\partial M_a^{i,j}}{\partial t}_{\text{cond}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{activ}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{resus}} \\
        &+ \frac{\partial M_a^{i,j}}{\partial t}_{\text{emis}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{sedime}} + 
        \frac{\partial M_a^{i,j}}{\partial t}_{\text{drydep}} \\
        &+ \frac{\partial M_a^{i,j}}{\partial t}_{\text{impscav}}
        \end{aligned}
        $$
    </p>
    <p>
        $$
        \begin{aligned}
        \frac{\partial N_a^j}{\partial t} &+ \frac{1}{\rho} \nabla \cdot (\rho u N_a^j) = 
        \frac{\partial N_a^j}{\partial t}_{\text{conv}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{diffus}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{nuc}} \\
        &+ \frac{\partial N_a^j}{\partial t}_{\text{coag}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{activ}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{resus}} \\
        &+ \frac{\partial N_a^j}{\partial t}_{\text{emis}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{sedime}} + 
        \frac{\partial N_a^j}{\partial t}_{\text{drydep}} \\
        &+ \frac{\partial N_a^j}{\partial t}_{\text{impscav}}
        \end{aligned}
        $$
    </p>
    <p>
        类似地，云携带气溶胶质量 (\(M_c^{i,j}\)) 和数量 (\(N_c^j\)) 的时间演化如下：
    </p>
    <p>
        $$
        \begin{aligned}
        \frac{\partial M_c^{i,j}}{\partial t} &= 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{conv}} + 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{diffus}} + 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{chem}} \\
        &+ \frac{\partial M_c^{i,j}}{\partial t}_{\text{activ}} + 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{resus}} + 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{sedime}} \\
        &+ \frac{\partial M_c^{i,j}}{\partial t}_{\text{drydep}} + 
        \frac{\partial M_c^{i,j}}{\partial t}_{\text{nucscav}}
        \end{aligned}
        $$
    </p>
    <p>
        $$
        \begin{aligned}
        \frac{\partial N_c^j}{\partial t} &= 
        \frac{\partial N_c^j}{\partial t}_{\text{conv}} + 
        \frac{\partial N_c^j}{\partial t}_{\text{diffus}} + 
        \frac{\partial N_c^j}{\partial t}_{\text{activ}} \\
        &+ \frac{\partial N_c^j}{\partial t}_{\text{resus}} + 
        \frac{\partial N_c^j}{\partial t}_{\text{sedime}} + 
        \frac{\partial N_c^j}{\partial t}_{\text{drydep}} \\
        &+ \frac{\partial N_c^j}{\partial t}_{\text{nucscav}}
        \end{aligned}
        $$
    </p>
    <p>
        其中 \(t\) 表示时间，\(u\) 是三维风速向量，\(\rho\) 是空气密度。右侧符号项表示质量和数量的源/汇项。
    </p>
</body>
</html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.8.1 排放 (Emissions)</h2>
    <p><strong>人类活动排放</strong>（这里定义为来源于工业、家庭和农业活动部门的排放）基于 <strong>Lamarque et al. [2010a]</strong> 的 IPCC 第五次评估报告（AR5）排放数据集。黑碳 (BC) 和有机碳 (OC) 的排放数据是对 <strong>Bond et al. [2007]</strong> 和 <strong>Junker and Liousse [2008]</strong> 的更新，二氧化硫 (SO₂) 的排放数据是对 <strong>Smith et al. [2001, 2004]</strong> 的更新。</p>
    <p>IPCC AR5 排放数据集包括以下人类活动产生的气溶胶及其前体气体的排放：SO₂、初级有机物 (POM) 和黑碳 (BC)。然而，该数据集并未提供主要排放粒子及其前体气体的注入高度和粒径分布，因此我们采用了 <strong>AEROCOM</strong> 协议 [<strong>Dentener et al., 2006a</strong>]。我们假设硫排放中有 2.5%（以摩尔计算）直接以初级硫酸盐气溶胶的形式排放，其余以 SO₂ 的形式排放 [<strong>Dentener et al., 2006a</strong>]。</p>
    <ul>
        <li><strong>硫排放来源：</strong>
            <ul>
                <li>农业、家庭、交通、废弃物和航运部门的硫排放发生在地表。</li>
                <li>能源和工业部门的硫排放发生在地表以上 100-300 m。</li>
                <li>森林火灾和草原火灾的硫排放发生在更高的海拔（0-6 km）。</li>
            </ul>
        </li>
        <li><strong>硫酸盐粒子分布：</strong>
            <ul>
                <li>农业、废弃物和航运（地表来源）以及能源、工业、森林火灾和草原火灾（高空来源）的硫酸盐粒子分布在累积模式中。</li>
                <li>来自家庭和交通的硫酸盐粒子分布在艾肯模式中。</li>
            </ul>
        </li>
    </ul>
    <p>森林火灾和草原火灾产生的 POM 和 BC 被排放到 0-6 km 高度，而其他来源（家庭、能源、工业、交通、废弃物和航运）的 POM 和 BC 则排放到地表。火灾排放的注入高度分布基于相应的 AEROCOM 数据，具有空间和时间变化。硫酸盐、POM 和 BC 的质量排放通量被转换为基于 AEROCOM 规定对数正态粒径分布的数量排放通量，具体如表 4.1 所示。</p>
    <h3>自然气溶胶和前体气体排放</h3>
    <p>自然气溶胶和前体气体排放（如火山硫、DMS、NH₃ 和生物挥发性有机化合物 VOCs）不包括在 IPCC AR5 数据集中。因此，使用了 <strong>AEROCOM</strong> 数据中关于火山 SO₂ 和硫酸盐的排放通量、注入高度和粒径分布，以及表面 DMS 的通量。NH₃ 的排放通量基于 <strong>MOZART-4</strong> 数据集 [<strong>Emmons, 2010</strong>]。</p>
    <p>用于推导 SOA（气体）排放的异戊二烯、单萜、甲苯、大烯烃和大烷烃的排放通量基于 <strong>MOZART-2</strong> 数据集 [<strong>Horowitz, 2003</strong>]。这些排放数据代表了 1990 年代末的条件。</p>
    <p>对于 2000 年之前的年份，我们使用 IPCC AR5 数据集中的人为非甲烷挥发性有机化合物（NMVOC）排放数据，并按目标年份 NMVOC 排放与 2000 年 NMVOC 排放的比例调整 MOZART 中的甲苯、大烯烃和大烷烃的排放。</p>
    <h3>海盐气溶胶排放</h3>
    <p>海盐气溶胶排放来源于海洋，遵循 <strong>Martensson et al. [2003]</strong> 的参数化方法，用于几何直径小于 2.8 μm 的气溶胶。总粒子通量 \( F_0 \) 表达为：</p>
    <p>\[
        \frac{dF_0}{d\log D_p} = \Phi W = (A_k T_w + B_k) W
    \]</p>
    <p>其中：</p>
    <ul>
        <li>\( D_p \)：粒子直径</li>
        <li>\( T_w \)：水温</li>
        <li>\( A_k \) 和 \( B_k \)：与粒径范围相关的系数</li>
        <li>\( W \)：白浪面积，定义为：  
            \[
            W = 3.84 \times 10^{-4} U_{10}^{3.41}
            \]
            其中，\( U_{10} \) 是 10 m 高度处的风速。
        </li>
    </ul>
    <!-- 其余内容省略，根据要求扩展 -->
</body>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.8.2 化学 (Chemistry)</h2>
    <p>
        简单的气相化学被用于硫酸盐气溶胶的模拟，具体包括以下过程：
        (1) DMS 与 OH 和 NO<sub>3</sub> 的氧化反应生成 SO<sub>2</sub>；
        (2) SO<sub>2</sub> 与 OH 的氧化反应生成 H<sub>2</sub>SO<sub>4</sub>（气态）；
        (3) H<sub>2</sub>O<sub>2</sub> 的生成反应（HO<sub>2</sub> + HO<sub>2</sub>）；
        (4) H<sub>2</sub>O<sub>2</sub> 的损失反应（包括 H<sub>2</sub>O<sub>2</sub> 光解和 H<sub>2</sub>O<sub>2</sub> + OH）。
    </p>
    <p>
        氧化剂浓度（O<sub>3</sub>、OH、HO<sub>2</sub> 和 NO<sub>3</sub>）从 MOZART 模型 [Emmons, 2010] 提供的月平均值进行时间插值。
        SO<sub>2</sub> 在云水中的氧化基于 MOZART 模型中的处理方法 [Tie 等人, 2001]。
        云水的 pH 值根据电中性方程计算，该方程考虑了云中硫酸根和铵根离子浓度以及溶解和解离的微量气体。
    </p>

    <h2>4.8.3 次生有机气溶胶 (Secondary Organic Aerosol)</h2>
    <p>
        次生有机气溶胶 (SOA) 的简单处理方法通常假设人为和生物源挥发性有机化合物 (VOC) 的固定质量产率，
        然后直接将这些质量作为一次气溶胶粒子排放。
    </p>
    <p>
        MAM 模式增加了一个额外的复杂步骤，即模拟单一汇总的气相 SOA 物种。
        根据 MOZART-4 化学机制的 5 种 VOC 类别，假定固定的质量产率，具体如下：
    </p>
    <p>
        $$
        P^*_m = \left( \frac{A^{\text{SOA}}_m}{A^{\text{SOA}}_m + 0.1 A^{\text{POA}}_m} \right) P^0_m
        $$
    </p>
    <p>
        其中：
        \(A^{\text{SOA}}_m\) 表示模式 \(m\) 中的 SOA 质量浓度，
        \(A^{\text{POA}}_m\) 表示模式 \(m\) 中的一次有机气溶胶 (POA) 质量浓度（10% 被假设为氧化状态），
        \(P^0_m\) 是 SOA 的饱和蒸汽压，其温度依赖性如下：
    </p>
    <p>
        $$
        P^0(T) = P^0(298K) \times \exp \left[ -\frac{\Delta H_{\text{vap}}}{R} \left( \frac{1}{T} - \frac{1}{298} \right) \right]
        $$
    </p>
    <p>
        其中 \(P^0(298K) = 1 \times 10^{-10}\ \text{atm}\)，
        \(\Delta H_{\text{vap}}\) 表示蒸发焓，取值为 156 kJ/mol。
    </p>
    <p>
        此处理方法提供了以下优点：
        (1) 计算 SOA 在不同模式间分布的现实方法；
        (2) 提供了气体/气溶胶分配的温度依赖性。
    </p>
</body>
</html>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.8 气溶胶 - 生成、凝结、混合与垂直输送</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.8.4 生成 (Nucleation)</h2>
    <p>
        新粒子的生成通过二元 (H<sub>2</sub>SO<sub>4</sub>-H<sub>2</sub>O) 和三元 (H<sub>2</sub>SO<sub>4</sub>-NH<sub>3</sub>-H<sub>2</sub>O) 均相核化，
        以及边界层核化的参数化来计算。
    </p>
    <p>
        MAM-3 中采用了二元核化的参数化 [Vehkamaki 等人, 2002]，因为该模式不预测 NH<sub>3</sub>；
        而在 MAM-7 中采用了三元核化的参数化 [Merikanto 等人, 2007]。
        边界层核化的参数化在两种模式中均使用，参考 Sihto 等人 [2006]，H<sub>2</sub>SO<sub>4</sub> 的一级核化速率系数为 \(1.0 \times 10^{-6}\ s^{-1}\) [Wang 等人, 2009]。
        新生成的粒子被加入到艾肯模式中，并使用 Kerminen 和 Kulmala [2002] 的参数化来计算粒子在从临界簇大小生长到艾肯模式大小期间因凝并导致的损失。
    </p>

    <h2>4.8.5 凝结 (Condensation)</h2>
    <p>
        H<sub>2</sub>SO<sub>4</sub> 蒸汽、NH<sub>3</sub>（仅 MAM-7）和 SOA（气相）对不同模式的凝结以动态方式处理，
        使用标准的质量传输表达式 [Seinfeld 和 Pandis, 1998]，并在每种模式的粒径分布上积分 [Binkowski 和 Shankar, 1995]。
    </p>
    <p>
        对于 H<sub>2</sub>SO<sub>4</sub> 和其他物种，假设吸附系数为 0.65 [Poschl 等人, 1998]。
        H<sub>2</sub>SO<sub>4</sub> 和 NH<sub>3</sub> 的凝结被视为不可逆，NH<sub>3</sub> 的吸收在模式的 NH<sub>4</sub>/SO<sub>4</sub> 摩尔比达到 2 时停止。
        SOA（气相）的凝结是可逆的，其平衡蒸汽压通过以下公式计算：
    </p>
    <p>
        $$
        P^*_m = \left( \frac{A^{\text{SOA}}_m}{A^{\text{SOA}}_m + 0.1 A^{\text{POA}}_m} \right) P^0_m
        $$
    </p>
    <p>
        其中 \(P^0(T)\) 的温度依赖性为：
    </p>
    <p>
        $$
        P^0(T) = P^0(298K) \times \exp \left[ -\frac{\Delta H_{\text{vap}}}{R} \left( \frac{1}{T} - \frac{1}{298} \right) \right]
        $$
    </p>
    <p>
        在 MAM-7 中，凝结到初级碳模式上的硫酸盐会使颗粒发生老化。使用的老化标准是 3 个硫酸盐分子层厚度。
        这种老化过程会将颗粒从初级碳模式转移到积聚模式。
    </p>

    <h2>4.8.6 凝并 (Coagulation)</h2>
    <p>
        MAM 模式中处理了艾肯模式、积聚模式和初级碳模式的凝并。模式内部的凝并只会减少粒子数量，而不会改变总质量。
        对于艾肯模式和积聚模式之间，以及初级碳模式和积聚模式之间的凝并，质量从艾肯或初级碳模式转移到积聚模式。
        凝并速率使用 CMAQ 模型的快速近似算法计算 [Binkowski 和 Roselle, 2003]。
    </p>

    <h2>4.8.7 水分吸收 (Water Uptake)</h2>
    <p>
        水分吸收基于平衡 Kohler 理论 [Ghan 和 Zaveri, 2007]，使用相对湿度和模式的体积平均吸湿性来诊断湿体积平均半径。
        每种成分的吸湿性列于表 4.3 中，这些吸湿性等价于 Petters 和 Kreidenweis [2007] 的 κ 参数。
    </p>
    <p>
        注意：尘埃的溶解度测量值范围较宽，从 0.03 到 0.26 [Koehler 等人, 2009a]。
    </p>

    <h2>4.8.8 亚网格垂直输送与激活/再悬浮</h2>
    <p>
        通过深对流云的上升和下降气流质量通量对气溶胶和痕量气体的垂直输送基于 Zhang-McFarlane 参数化 [Collins 等人, 2004a]。
        这种垂直输送目前与湿清除分开计算，但未来计划整合处理。
    </p>
    <p>
        气溶胶的激活使粒子从气溶胶态转变为云载态。激活与云滴成核一致，并通过 Abdul-Razzak 和 Ghan [2000b] 的参数化处理，
        使用上升速度和所有气溶胶模式的属性进行估算。假设上升速度为湍流动能的平方根，最小值为 0.2 m/s。
    </p>
</body>
</html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.9.4 冰云光学特性到 4.10 辐射传输</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.9.4 冰云光学特性 (Ice Cloud Optics)</h2>
    <p>
        CAM 5.0 指定了云中的冰水路径、冰云分数和冰粒子的有效直径。
        冰云的光学特性通过查找表的方式表示，作为辐射代码中短波和长波波段的有效直径的函数。
    </p>
    <p>
        冰云光学特性可以通过两种方法得到：
    </p>
    <ol>
        <li>基于电动力学理论计算单个冰晶的散射特性，然后将其应用于假定的冰粒子尺寸分布 (PSD)，并通过 PSD 的有效直径 (\( D_e \)) 表示 PSD 的光学特性。</li>
        <li>通过参数化冰粒子形状和尺寸的散射/吸收过程，并将这些表达式在 PSD 上积分，得到 PSD 光学特性的解析表达式。</li>
    </ol>
    <p>
        第二种方法的基础是修改后的异常衍射近似 (MADA)。MADA 明确将冰云的光学特性与冰粒子的 PSD 和形状参数相关联，
        因为 PSD 的光学特性无法仅通过 \( D_e \) 唯一定义 [Mitchell, 2002]。
    </p>
    <p>
        MADA 是基于 van de Hulst 的异常衍射理论 (ADT) [van de Hulst, 1957] 发展而来的，通过一系列物理见解进行了扩展：
    </p>
    <ol>
        <li>粒子散射特性由粒子投影面积与粒子体积的比值决定，体积定义为粒子质量/冰的体密度 (0.917 g/cm³) [Bryant and Latimer, 1969; Mitchell and Arnott, 1994]。</li>
        <li>内部反射和折射的过程可以看作是光子路径的延伸，并可通过 MADA 框架参数化 [Mitchell et al., 1996b]。</li>
        <li>波共振或光子隧穿对吸收和消光的最大贡献可以作为折射率实部的线性函数估算 [Mitchell, 2000]。</li>
        <li>表面波现象的边缘效应仅与消光相关，可用尺寸参数 \( x \) 表示 [Wu, 1956; Mitchell, 2000]。</li>
    </ol>
    <p>
        这些见解简化了 ADT 并使其解析化，最终得到 PSD 的消光和吸收系数的公式 [Mitchell 和 Arnott, 1994]。
        MADA 的基本公式可以在 [Mitchell, 2002] 的附录中找到。
    </p>
    <p>
        不对称因子 \( g \) 的计算基于 [Mitchell et al., 1996b] 的光线追踪方法，考虑了冰粒子的形状和尺寸。
        对于地球辐射，\( g \) 的值基于 [Yang et al., 2005] 提供的参数化方案。
    </p>
    <h3>冰云光学特性在 CAM 5.0 中的应用</h3>
    <p>
        MADA 的理论没有直接用于 CAM 5.0，而是用于生成一个光学特性查找表，以有效直径 \( D_e \) 为函数。
        光学特性包括质量归一化的消光系数、单次散射反照率和非对称因子，涵盖所有太阳和地球波段。
    </p>
    <p>
        有效直径定义如下：
    </p>
    <p>
        $$
        D_e = \frac{3}{2} \frac{\text{IWC}}{\rho_i A}
        $$
    </p>
    <p>
        其中，IWC 是冰水含量，\(\rho_i = 0.917\) g/cm³ 是冰的体密度，\(A\) 是 PSD 的总投影面积。
    </p>

    <h2>4.9.5 雪云光学特性 (Snow Cloud Optics)</h2>
    <p>
        CAM 5.0 中雪云的参数包括雪云分数、雪的有效直径和云内雪的质量混合比。
        雪云的光学特性与冰云的光学特性相同。
    </p>

    <h2>4.10 辐射传输 (Radiative Transfer)</h2>
    <p>
        长波和短波的辐射传输计算由 RRTMG 辐射代码提供 [Iacono et al., 2008; Mlawer et al., 1997]。
        RRTMG 是加速版和修订版的相关 \(k\)-分布模型 (RRTM)。
    </p>
    <h3>4.10.1 气溶胶辐射特性组合 (Combination of Aerosol Radiative Properties)</h3>
    <p>
        气溶胶的辐射特性在输入辐射传输求解器之前进行组合。假设某波段 \(b\) 的气溶胶光学参数包括：
    </p>
    <p>
        $$
        \tau_b = \sum_{i=1}^N \tau_{i,b}, \quad
        \omega_b = \frac{\sum_{i=1}^N \tau_{i,b} \omega_{i,b}}{\tau_b}, \quad
        g_b = \frac{\sum_{i=1}^N \tau_{i,b} \omega_{i,b} g_{i,b}}{\tau_b \omega_b}
        $$
    </p>
    <p>
        其中，\(\tau_b\) 是波段 \(b\) 的总消光光学深度，\(\omega_b\) 是单次散射反照率，\(g_b\) 是非对称因子。
    </p>

    <h3>4.10.2 云光学特性组合 (Combination of Cloud Optics)</h3>
    <p>
        CAM 5.0 定义了三种不同类型的云：冰云、液态云和雪云。每种云类型有单独的云分数 \(C_{\text{liq}}, C_{\text{ice}}, C_{\text{snow}}\) 和光学特性。
        总的云辐射参数组合为：
    </p>
    <p>
        $$
        C = \max \{C_{\text{liq}}, C_{\text{ice}}, C_{\text{snow}}\}
        $$
    </p>
    <p>
        $$
        \tau_c = \sum_{t \in \text{type}} \frac{\tau_t C_t}{C}, \quad
        \omega_c = \frac{\sum_{t \in \text{type}} \tau_t \omega_t C_t}{\tau_c C}, \quad
        g_c = \frac{\sum_{t \in \text{type}} \tau_t \omega_t g_t C_t}{\tau_c \omega_c C}
        $$
    </p>
</body>
</html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.10.3 辐射通量与加热率</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.10.3 辐射通量与加热率 (Radiative Fluxes and Heating Rates)</h2>
    <p>
        CAM 5.0 使用 RRTMG[Iacono et al., 2008] 计算辐射通量与加热率。该模型利用相关 \( k \)-分布技术，在宽光谱区间内高效地计算辐射率和加热率，同时保持与测量值和高分辨率逐线模型的高精度一致性。
    </p>
    <p>
        RRTMG 在长波和短波光谱区使用基于最大随机云重叠假设的 Monte-Carlo 独立列近似 (McICA) [Pincus and Morcrette, 2003] 来处理次网格云的特性。
    </p>
    <p>
        热力学状态、气体浓度、云分数、凝结相光学特性以及气溶胶特性在其他部分定义。CAM 5.0 表面模型提供输入辐射计算的表面反照率（针对每个大气柱的面积平均值）和向上的长波表面通量（包含表面发射率）。
    </p>
    <p>
        RRTMG 在模型顶部添加一个额外层，扩展至 \(10^{-4}\) hPa，以提供顶层辐射通量。这一层复制了最高 CAM 层的组成，但不处理非局部热力学平衡（non-LTE）效应。
        RRTMG 在 0.1 hPa 以下能提供高精度的通量与加热率，但在更高层次非 LTE 效应变得显著。
    </p>

    <h3>短波辐射传输 (Shortwave Radiative Transfer)</h3>
    <p>
        RRTMG 将太阳光谱划分为 14 个短波波段，覆盖 0.2 µm 到 12.2 µm 的光谱范围（820 cm\(^{-1}\) 到 50000 cm\(^{-1}\)）。
        吸收和散射的源包括 \( \text{H}_2\text{O} \)、\( \text{O}_3 \)、\( \text{CO}_2 \)、\( \text{O}_2 \)、\( \text{CH}_4 \)、\( \text{N}_2 \)、云、气溶胶和瑞利散射。
    </p>
    <p>
        模型使用两流 \( \delta\)-Eddington 近似假设层均匀混合，同时考虑吸收和散射来计算反射率与透射率。
        散射相位函数通过 Henyey-Greenstein 近似参数化，表示为不对称因子的前向散射分量。此 δ 缩放方法应用于总辐射率以及直射和漫射辐射分量。
    </p>
    <p>
        CAM5 使用的 RRTMG 短波模型基于 RRTM SW[Clough et al., 2005]。该版本使用 112 个 \( g \)-点（比标准 RRTM SW 的 224 个 \( g \)-点减少一半）以提高计算性能，同时对精度的影响极小。
    </p>
    <p>
        对于清空和气溶胶存在的情况下，总通量的精度在 1-2 W/m\(^2\) 范围内，与覆盖天空下的精度差距在 6 W/m\(^2\) 以内。
        输入的吸收系数数据来自逐线辐射模型 LBLRTM [Clough et al., 2005]。
    </p>
    <table>
        <caption>RRTMG SW 波段边界与太阳辐射通量 (单位：W/m²)</caption>
        <thead>
            <tr>
                <th>波段索引</th>
                <th>波长最小值 (µm)</th>
                <th>波长最大值 (µm)</th>
                <th>波数最小值 (cm\(^{-1}\))</th>
                <th>波数最大值 (cm\(^{-1}\))</th>
                <th>太阳辐射</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>3.077</td><td>3.846</td><td>2600</td><td>3250</td><td>12.11</td></tr>
            <tr><td>2</td><td>2.500</td><td>3.077</td><td>3250</td><td>4000</td><td>20.36</td></tr>
            <tr><td>3</td><td>2.150</td><td>2.500</td><td>4000</td><td>4650</td><td>23.73</td></tr>
            <tr><td>4</td><td>1.942</td><td>2.150</td><td>4650</td><td>5150</td><td>22.43</td></tr>
            <tr><td>...</td><td colspan="5">表格略，请参见原文档</td></tr>
        </tbody>
    </table>

    <h3>长波辐射传输 (Longwave Radiative Transfer)</h3>
    <p>
        长波光谱划分为 16 个波段，覆盖 3.1 µm 到 1000 µm 范围（10 cm\(^{-1}\) 到 3250 cm\(^{-1}\)）。
        吸收与发射的分子来源包括 \( \text{H}_2\text{O} \)、\( \text{CO}_2 \)、\( \text{O}_3 \)、\( \text{N}_2\text{O} \)、\( \text{CH}_4 \)、\( \text{O}_2 \)、\( \text{N}_2 \) 和卤代烃如 \( \text{CFC-11} \) 和 \( \text{CFC-12} \)。
    </p>
    <p>
        CAM 5 使用 RRTMG 的长波版本，具有较高计算效率，精度损失极小。整体辐射通量的精度在 1.0 W/m\(^2\) 范围内，冷却率在对流层的误差为 0.1 K/day，在平流层误差为 0.3 K/day。
    </p>
    <table>
        <caption>RRTMG LW 波段边界 (单位：µm 与 cm\(^{-1}\))</caption>
        <thead>
            <tr>
                <th>波段索引</th>
                <th>波长最小值 (µm)</th>
                <th>波长最大值 (µm)</th>
                <th>波数最小值 (cm\(^{-1}\))</th>
                <th>波数最大值 (cm\(^{-1}\))</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>28.57</td><td>1000.0</td><td>10</td><td>350</td></tr>
            <tr><td>2</td><td>20.00</td><td>28.57</td><td>350</td><td>500</td></tr>
            <tr><td>3</td><td>15.87</td><td>20.00</td><td>500</td><td>630</td></tr>
            <tr><td>...</td><td colspan="4">表格略，请参见原文档</td></tr>
        </tbody>
    </table>
</body>
</html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.10.7 太阳光谱辐照度与4.11 地表交换公式</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.10.7 太阳光谱辐照度 (Solar Spectral Irradiance)</h2>
    <p>
        RRTMG 假设的参考光谱为 Kurucz 光谱。CAM 5.0 使用基于 Lean 数据 [Wang et al., 2005] 的文件指定太阳光谱辐照度。
        Kurucz 光谱见图 4.5，Lean 数据见图 4.6，后者是一个太阳周期内的平均值。这两种光谱对总太阳辐照度的假设值有所不同，其相对差异如图 4.7 所示。
    </p>
    <h3>光谱与辐照度比较</h3>
    <p>
        表 4.8 显示了 Kurucz 和 Lean 光谱在 RRTMG 不同波段下的辐照度比。Lean 光谱是随时间变化的，而表中值为一个太阳周期内的平均值。
        Lean(t) 表示时间相关的 Lean 辐照度，Lean(t)<sub>14</sub> 包括了超过 12195 nm 的远红外辐照度。
    </p>
    <table>
        <caption>表 4.8：RRTMG 不同波段下太阳辐照度的比例 (W/m²)</caption>
        <thead>
            <tr>
                <th>波段索引</th>
                <th>波长范围 (nm)</th>
                <th>Kurucz 辐照度</th>
                <th>Lean 辐照度</th>
                <th>相对差异 (%)</th>
                <th>最大变化</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>14</td><td>12195-3846</td><td>12.79</td><td>12.78</td><td>-0.01</td><td>0.16</td></tr>
            <tr><td>1</td><td>3846-3077</td><td>12.11</td><td>11.99</td><td>-1.00</td><td>0.02</td></tr>
            <tr><td>...</td><td colspan="5">更多波段请参考原文</td></tr>
        </tbody>
    </table>
    <h3>图示</h3>
    <p>
        图 4.5 Kurucz 光谱：单位为 W/m²/nm，光谱范围 [20, 20000] nm。<br>
        图 4.6 Lean 光谱：单位为 W/m²/nm，光谱范围 [120, 99975] nm。<br>
        图 4.7 相对差异：\((\text{Lean} - \text{Kurucz}) / (0.5 \times (\text{Lean} + \text{Kurucz}))\)。
    </p>

    <h2>4.11 地表交换公式 (Surface Exchange Formulations)</h2>
    <p>
        在 CAM 5.0 中，地表与大气之间的热量、湿度和动量交换采用整体交换公式处理。本文将分别描述不同表面（陆地、海洋、冰）的交换过程。
        尽管公式的功能形式一致，但在不同子模块中的实现可能有所不同，主要差异体现在粗糙度长度和交换系数的定义上。
    </p>

    <h3>4.11.1 陆地</h3>
    <p>
        CAM 5.0 使用社区陆地模型 CLM2 [Bonan et al., 2002] 代替 NCAR 陆地表面模型 (LSM) [Bonan, 1996]。该模型包括水文、生物地球化学过程、动态植被和生物物理过程。
        因模型的复杂性完整描述请参考 <a href="http://www.cgd.ucar.edu/tss/clm/">CLM 文档</a>。
    </p>
    <p>
        地表动量、感热和潜热通量由 Monin-Obukhov 相似理论计算，应用于地表常通量层。具体公式如下：
    </p>
    <div>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mtable>
                <mtr>
                    <mtd>
                        <mi>τ<sub>x</sub></mi> = -ρ₁ (u’w’) = -ρ₁ u²<sub>*</sub>(u₁/Vₐ)
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mi>τ<sub>y</sub></mi> = -ρ₁ (v’w’) = -ρ₁ u²<sub>*</sub>(v₁/Vₐ)
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mi>H</mi> = ρ₁ cp (w’θ’) = -ρ₁ cp u<sub>*</sub>θ<sub>*</sub>
                    </mtd>
                </mtr>
                <mtr>
                    <mtd>
                        <mi>E</mi> = ρ₁ (w’q’) = -ρ₁ u<sub>*</sub>q<sub>*</sub>
                    </mtd>
                </mtr>
            </mtable>
        </math>
    </div>
    <p>
        其中 \( \rho₁, u₁, v₁, θ₁, q₁ \) 分别为密度 (kg/m³)、纬向风速 (m/s)、经向风速 (m/s)、位温 (K)、比湿 (kg/kg)；表面风速 \( u_s = 0, v_s = 0 \)。
    </p>

    <h3>Monin-Obukhov 相似理论</h3>
    <p>
        稳定参数：
        \[
        ζ = \frac{z₁ - d}{L}
        \]
        式中：
        \( L \) 为 Monin-Obukhov 长度，用于确定稳定状态。
    </p>
    <p>
        完整的地表交换公式请参考 [Zeng et al., 1998]。
    </p>
</body>
</html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.11 海洋和干绝热调整公式</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.11.2 海洋 (Ocean)</h2>
    <p>
        海洋表面与大气之间的湍流通量，包括动量（应力）、水分（蒸发或潜热）以及感热通量，按如下整体公式计算：
    </p>
    <div>
        \[
        (\tau, E, H) = \rho_A |\Delta v| (C_D \Delta v, C_E \Delta q, C_p C_H \Delta \theta),
        \]
    </div>
    <p>
        其中 \( \rho_A \) 是大气表面密度，\( C_p \) 是比热容。由于 CAM 5.0 不允许海洋表面运动，因此表面与大气之间的速度差为
        \( \Delta v = v_A \)，即最低模型层的速度。势温差 \( \Delta \theta = \theta_A - T_s \)，
        \( \Delta q = q_A - q_s(T_s) \)，其中 \( q_s(T_s) \) 是海表温度 \( T_s \) 下的饱和比湿。
    </p>
    <p>
        在 (4.277) 式中，海洋表面与大气之间的传输系数 \( C(D,E,H) \) 按以下公式计算：
    </p>
    <div>
        \[
        C(D,E,H) = \frac{\kappa^2}{\left(\ln\frac{Z_A}{Z_{0m}} - \psi_m\right)\left(\ln\frac{Z_A}{Z_{0(m,e,h)}} - \psi_s\right)},
        \]
    </div>
    <p>
        其中 \( \kappa = 0.4 \) 是 von Kármán 常数，\( Z_0(m,e,h) \) 是动量、蒸发或热量的粗糙度长度。稳定条件下 (\( \zeta > 0 \)) 的通量剖面为：
    </p>
    <div>
        \[
        \psi_m(\zeta) = \psi_s(\zeta) = -5\zeta.
        \]
    </div>
    <p>
        不稳定条件下 (\( \zeta < 0 \)) 的通量剖面为：
    </p>
    <div>
        \[
        \psi_m(\zeta) = 2\ln\left[0.5(1 + X)\right] + \ln\left[0.5(1 + X^2)\right] - 2\arctan X + 0.5\pi,
        \]
        \[
        \psi_s(\zeta) = 2\ln\left[0.5(1 + X^2)\right],
        \]
        \[
        X = (1 - 16\zeta)^{1/4}.
        \]
    </div>
    <p>
        稳定参数 \( \zeta \) 为：
    </p>
    <div>
        \[
        \zeta = \frac{\kappa g Z_A}{u_*^2 \theta^* \theta_v},
        \]
    </div>
    <p>
        其中虚拟势温 \( \theta_v = \theta_A(1 + \epsilon q_A) \)，\( q_A \) 和 \( \theta_A \) 分别为最低层的大气比湿和势温。
    </p>

    <h2>4.12 干绝热调整 (Dry Adiabatic Adjustment)</h2>
    <p>
        如果某层的层结不稳定，即相对于干绝热直减率满足：
    </p>
    <div>
        \[
        \frac{\partial T}{\partial p} < \kappa \frac{T}{p},
        \]
    </div>
    <p>
        则需进行干绝热调整。在有限差分形式下，此条件表示为：
    </p>
    <div>
        \[
        T_{k+1} - T_k < C_{1,k+1}(T_{k+1} + T_k) + \delta,
        \]
    </div>
    <p>
        其中 \( C_{1,k+1} = \frac{\kappa(p_{k+1} - p_k)}{2p_{k+1/2}} \)。
    </p>
    <p>
        若在模型顶部的前三层中存在不稳定层，则调整温度以满足上述条件，同时保持感热守恒：
    </p>
    <div>
        \[
        c_p(\hat{T}_k\Delta p_k + \hat{T}_{k+1}\Delta p_{k+1}) = c_p(T_k\Delta p_k + T_{k+1}\Delta p_{k+1}),
        \]
    </div>
    <p>
        并使该层达到中性稳定性：
    </p>
    <div>
        \[
        \hat{T}_{k+1} - \hat{T}_k = C_{1,k+1}(\hat{T}_{k+1} + \hat{T}_k).
        \]
    </div>

    <h2>4.13 预测温室气体 (Prognostic Greenhouse Gases)</h2>
    <p>
        CAM 5.0 包括的主要温室气体的长波辐射效应有 H<sub>2</sub>O、CO<sub>2</sub>、O<sub>3</sub>、CH<sub>4</sub>、N<sub>2</sub>O、CFC11 和 CFC12。
        水汽的预测在本章其他部分描述，CO<sub>2</sub> 假设为充分混合状态，臭氧按月场输入。
    </p>
    <p>
        对于 CH<sub>4</sub> 和其他气体，其传输由 Boville et al. [2001] 描述，丧失由 Garcia 和 Solomon [1994] 的模型参数化。
    </p>
</body>
</html>
