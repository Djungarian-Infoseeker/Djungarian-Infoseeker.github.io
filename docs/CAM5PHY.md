<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model Physics Chapter</title>
    <script type="text/javascript" async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
    </script>
</head>
<body>
    <h1>第四章 模型物理过程</h1>
    <p>正如第二章所述，CAM 5.0 的总参数化包由一系列组件组成，表示为：</p>
    <p>
      $$ P = \{M, R, S, T\} $$
    </p>
    <p>
      其中：
      <ul>
          <li>\(M\) 代表（湿）降水过程</li>
          <li>\(R\) 代表云和辐射</li>
          <li>\(S\) 代表地表模型</li>
          <li>\(T\) 代表湍流混合</li>
      </ul>
    </p>
    <p>每个组件又细分为多个部分：</p>
    <ul>
        <li>\(M\) 包括一个可选的干绝热调整（通常仅应用于平流层）、湿穿透对流、浅对流以及大尺度稳定凝结</li>
        <li>\(R\) 首先计算云参数化，然后是辐射参数化</li>
        <li>\(S\) 提供从陆地、海洋和海冰模型获得的地表通量，或基于指定的地表条件（如海表温度和海冰分布）计算地表通量</li>
        <li>\(T\) 包括行星边界层参数化、垂直扩散和重力波拖曳</li>
    </ul>
    <hr>
    <p>状态变量在每次时间分裂参数化组件后更新为干静能 \(s_i\)。假设第 \(i\) 个过程在一系列时间分裂过程 \(I\) 中的索引为 \(i\)。在第 \(i\) 个过程结束时的干静能为 \(s_i\)。干静能通过第 \(i\) 个过程计算的加热率 \(Q\) 来更新：</p>
    <p>
      $$ s_i = s_{i-1} + (\Delta t) Q_i(s_{i-1}, T_{i-1}, \Phi_{i-1}, q_{i-1}, \ldots) $$
    </p>
    <p>对于不基于干静能而是基于温度倾向公式化的过程，加热率由以下公式给出：</p>
    <p>
      $$ Q_i = \frac{T_i - T_{i-1}}{C_p \Delta t} $$
    </p>
    <hr>
    <p>温度 \(T_i\) 和重力势能 \(\Phi_i\) 通过以下公式从干静能 \(s_i\) 中反算得到：</p>
    <p>
      $$ s = C_p T + gz = C_p T + \Phi $$
    </p>
    <p>结合静力学方程得到：</p>
    <p>
      $$ \Phi_k = \Phi_s + R \sum_{l=k}^H H_{kl} T_{vl} $$
    </p>
    <hr>
    <h2>温度倾向的累积</h2>
    <p>各过程的温度倾向也在整个过程累积。对于基于干静能公式化的过程，温度倾向由干静能的倾向计算得到：</p>
    <p>
      $$ \frac{\Delta T_i}{\Delta t} = \frac{\Delta T_{i-1}}{\Delta t} + \frac{\Delta s_i}{C_p \Delta t} $$
    </p>
    <p>其中：</p>
    <p>
      $$ \frac{\Delta s_i}{\Delta t} = \frac{s_i - s_{i-1}}{\Delta t} $$
    </p>
    <hr>
    <p>累积的物理温度倾向也在最后一个参数化完成后可用：</p>
    <p>
      $$ T_I = T_0 + \frac{\Delta T_I}{\Delta t} \cdot \Delta t $$
    </p>
</body>
</html>
