<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Slab Ocean Model Forcing 中文翻译</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <h1>Slab Ocean Model Forcing</h1>
    <p><em>David Bailey, Cecile Hannay, Marika Holland, and Richard Neale, NCAR</em></p>
    
    <p>本文档旨在简要描述CCSM4中Slab Ocean Model（混合层海洋模型）的构建方法。</p>
    
    <h2>1. CAM-SOM（即"传统"方法）</h2>
    <p>在CAM-SOM框架下进行SOM模拟的方法涉及从已有的CAM模拟中计算海洋热输送（Q通量），该CAM模拟使用了预设的海表温度(SST)、海冰范围和厚度。与CAM模拟类似，其目的是重现观测到的气候状态，但加入了混合层海洋的时间尺度阻尼效应。所谓的Q通量被创建并用于SOM模拟中，以重现CAM模拟中看到的表面通量不平衡，从而使表面温度的年循环遵循CAM模拟中的预设条件。</p>
    
    <p>Q通量是基于对混合层深度的假设生成的，形式如下：</p>
    <p>$$Q_{f l x}=F_{n e t}-\rho c_{p} h_{m i x}\frac{d S S T}{d t}.\qquad(1)$$</p>
    
    <p>其中，$h_{\text{mix}}$是对观测到的年平均混合层海洋深度的估计，$d S S T/ d t$是海表温度(SST)的变化，$F_{n e t}$是从控制CAM模拟中获得的表面净能量平衡（$F_{\text{net}}=S W-L W-L H-S H$）。</p>
    
    <p>多年来，这一方法一直是运行SOM和进行气候敏感性实验的标准流程。然而，随着我们将海冰模型从CSIM过渡到CICE，这种方法存在若干缺陷促使我们转向新方法。上述方程中最大的困难在于缺乏关于冰与海洋之间通量大小的模型信息。基于对观测到的冰分数月变化的估计，我们向$F_{n e t}$添加了额外的通量以提供稳定的冰模拟。这一困难源于CAM运行中缺乏此类信息，因为CAM使用的是预设的SST、冰厚度和冰面积覆盖率。这些额外的通量具有一定随意性，非守恒性，并且高度依赖于用于确定CAM中冰热力学演化的海冰模型。CAM-SOM运行中通常使用的海冰模型仅为热力学模型，对极地研究作用有限。基于这些原因，我们选择转向不同的SOM范式。</p>
    
    <h2>2. CCSM-SOM（即"新"方法）</h2>
    <p>虽然上述方法旨在重现观测到的气候混合层海洋，但Q通量明显受到模型气候偏差的主导。使用CCSM-SOM方法可以说是更有效的方法。在CCSM-SOM框架下进行SOM模拟与上述方法有三个显著不同：首先，其目标是重现模型的耦合气候而非观测气候；其次，SOM集成设计使用完整海冰模型(CICE)；第三，获取Q通量（以及如果需要，冰倾斜项和洋流）所需的关于冰-海洋通量的完全守恒信息来自耦合实验。</p>
    
    <p>在这种情况下，模型中求解混合层温度的方程为：</p>
    <p>$$\rho c_{p} h_{mix}\frac{dT_{mix}}{dt}=F_{net}-Q_{flx},\qquad(2)$$</p>
    
    <p>其中$h_{\text{mix}}$是混合层深度，$T_{\text{mix}}$是混合层温度，$F_{\text{net}}$是包括冰-海洋热交换在内的净表面热通量，$Q_{f l x}$是进出局部混合层柱的隐含水平和垂直热通量。这本质上与CAM-SOM公式中求解的方程相同，但Q通量是基于完全耦合模拟中的$h_{\text{mix}}, T_{\text{mix}}$和$F_{\text{net}}$计算的，而不是基于观测估计的混合层深度。从技术上讲，该方程仅对年平均或时间不变的混合层深度有效。假设海洋温度是"充分混合"的，且SST与$T_{\text{mix}}$相同。强烈建议$h_{\text{mix}}$和$T_{\text{mix}}$保持一致，即它们都代表垂直方向上假设的充分混合层。年平均（但仍具有空间变化）的混合层厚度是可取的，因为在固定层中更容易平衡热的年循环。</p>
    
    <p>从海洋模型输出中，我们能够计算方程(2)左边的项以及$F_{\text{net}}$。然后我们可以用这些来求解$Q_{f l x}$，类似于方程(1)。通常海洋模型输出保存在月平均历史文件中，因此该方程求解的是月平均值，忽略月内变化。此外，为了表示平衡模拟的气候学周期，通常会创建二十年或更长时间的月平均气候学。有关CAM-SOM方法以及使用SOM进行平衡气候敏感性研究的更多信息，请参阅Kiehl等人2006年和Danabasoglu与Gent 2009年的研究。</p>
    
    <h2>参考文献</h2>
    <p>Danabasoglu, G., and P. R. Gent, 2009: Equilibrium Climate Sensitivity: Is It Accurate to Use a Slab Ocean Model? J. Climate, 22, 2494-2499.</p>
    <p>Kiehl, J. T., C. A. Shields, J. J. Hack, and W. D. Collins, 2006: The Climate Sensitivity of the Community Climate System Model Version 3(CCSM3). J. Climate, 19, 2584-2596.</p>
</body>
</html>