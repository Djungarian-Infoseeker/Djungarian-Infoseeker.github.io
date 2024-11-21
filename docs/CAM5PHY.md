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
        在 CAM5 中实现了两种不同的气溶胶模式表示法。一个是具有 7 模式的气溶胶模式模型 (MAM-7)，作为进一步简化的基准。它包括艾肯模式、积聚模式、初级碳模式、细尘模式、海盐模式，以及粗尘和粗海盐模式（见图 4.3）。在单个模式中，例如积聚模式，内部混合的硫酸盐、铵盐、次生有机气溶胶 (SOA)、从初级碳模式中老化的初级有机物质 (POM) 和黑碳 (BC)、海盐的质量混合比，以及积聚模式粒子的数量混合比都被预测。
    </p>
    <p>
        初级碳 (OM 和 BC) 粒子被排放到初级碳模式，并通过硫酸 (H<sub>2</sub>SO<sub>4</sub>)、氨 (NH<sub>3</sub>) 和次生有机气溶胶 (SOA) 凝结以及与艾肯和积聚模式的凝并而老化（详见以下章节）。
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
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>4.8 气溶胶排放、化学和次生有机气溶胶</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h2>4.8.1 排放 (Emissions)</h2>
    <p>
        人为排放（此处定义为来源于工业、家庭和农业活动领域）使用的是 Lamarque 等人 [2010a] 提供的 IPCC AR5 排放数据集。
        黑碳 (BC) 和有机碳 (OC) 的排放基于 Bond 等人 [2007] 和 Junker 和 Liousse [2008] 的更新版本。
        二氧化硫 (SO<sub>2</sub>) 的排放更新自 Smith 等人 [2001, 2004] 的研究。
    </p>
    <p>
        IPCC AR5 排放数据集包括人为气溶胶和前体气体（SO<sub>2</sub>、初级有机物 (POM) 和 BC）的排放，
        但未提供一次排放粒子和前体气体的注入高度和粒径分布。
        我们根据 AEROCOM 协议 [Dentener 等人, 2006a] 假定 2.5% 的硫排放以一次硫酸盐气溶胶形式直接排放，其余以 SO<sub>2</sub> 形式排放。
    </p>
    <p>
        不同排放源的硫排放高度不同：农业、家庭、交通、废物和航运部门的硫在地表排放；
        能源和工业部门的硫在距地表 100-300 米高度排放；
        森林火灾和草原火灾的硫排放在较高的高度（0-6 公里）。
        硫酸盐颗粒根据排放源的不同分配到积聚模式（accumulation mode）或艾肯模式（Aitken mode）。
    </p>

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
