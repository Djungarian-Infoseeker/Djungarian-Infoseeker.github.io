<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>类地行星的宜居性与多稳定性</title>
    <script type="text/javascript" async
      src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js">
    </script>
</head>
<body>
    <h1>类地行星的宜居性与多稳定性</h1>
    <h2>V. Lucarini<sup>1,2</sup>, S. Pascale<sup>1</sup>, R. Boschi<sup>1</sup>, E. Kirk<sup>1</sup>, and N. Iro<sup>1</sup></h2>
    <p>
        <sup>1</sup>德国汉堡大学气候校园气象研究所<br>
        <sup>2</sup>英国雷丁大学数学与统计系<br>
        接收日期：2013年4月17日，接受日期：2013年4月18日<br>
        在线发表日期：2013年7月1日
    </p>
    <h2>关键词</h2>
    <p>地球 – 流体动力学 – 数值方法 – 行星系统 – 湍流</p>

    <h2>摘要</h2>
    <p>
        本文探讨了围绕宜居区的行星气候可能的多稳定性。我们关注类似于地球系统的条件，但我们的研究具有更广泛的意义，旨在提出一种处理系外行星的通用方法。我们描述了一种能够全面分析气候系统非平衡热力学性质的形式化方法，并利用灵活的气候模型探讨这些性质如何依赖于母星的能量输入、大气的红外光学厚度以及行星的自转速率。
    </p>
    <p>
        首先，我们证明了可以再现与古气候相关的“雪球（SB）–暖（W）”条件的多稳定性特性。随后，我们对模拟的暖状态（W）和雪球状态（SB）的热力学进行了表征，明确了水文循环在塑造暖状态不可逆性和效率中的核心作用，并强调了干燥条件下雪球状态的极端多样性。
    </p>
    <p>
        热力学为研究系统的临界点提供了线索，并促使我们构建了经验参数化方法，这种方法允许将主要热力学性质表示为行星发射温度的函数。结果表明，当行星的自转速率从目前的地球值变化到其一半时，这些经验函数具有相当的鲁棒性。
    </p>
    <p>
        此外，我们探讨了行星自转周期和公转周期相近的动力学范围。我们清楚地发现，存在一个临界自转速率，低于该速率时，多稳定性特性消失，导致雪球与暖状态存在的冰-反照率反馈被抑制。系统的分叉图表明行星系统中可能存在相变。这种临界自转速率大致对应于2:1的同步锁定条件。因此，如果类地行星与母星以1:1同步锁定，对于给定的一组天文和天体物理参数，只有一种气候状态是可能的。
    </p>
    <p>
        这些结果对于行星环流的普遍理论以及宜居性必要和充分条件的定义具有重要意义。
    </p>

    <h1>1. 引言</h1>
    <p>
        对系外行星的研究是天体物理学中最活跃的研究领域之一。自20世纪90年代中期首次发现系外行星以来，观测数据集和数据分析技术的改进使得可以对围绕非太阳母恒星运行的数百颗行星进行分类和研究。这些行星展现了极大的物理、化学和轨道特性多样性。重要的影响因素包括是否存在岩石核、大气成分、母恒星辐射的颜色强度、轨道参数以及是否存在潮汐锁定条件。
    </p>
    <p>
        对岩石行星（所谓的“超级地球”）来说，尤其重要的问题是确定在什么条件下可以预期行星表面存在液态水，因为液态水被认为是生命存在的必要条件。我们推荐读者参阅一些近期出版的相关书籍（Dvorak 2008；Kastings 2009；Seager 2010；Perryman 2011）。
    </p>
    <p>
        行星条件的巨大多样性一方面显然是科学研究的“金矿”，另一方面也是一个让人容易迷失的“迷宫”。研究数量快速增长的新发现天体的个体特性是非常吸引人的，尤其是考虑到技术进步和即将到来的天体物理“大科学”计划，预计未来短期和中期内将会涌现出更多的信息。然而，长期来看，仅仅对遥远行星的特性进行“林奈式”分类以及开发用于描述其大气辐射和动力学性质的辐射模型或广义环流模型，其科学价值可能值得质疑。
    </p>
    <p>
        即便是对我们熟知的行星，例如太阳系中的行星，开发与观测相符的准确数值模型来解释行星大气的动力学和热力学仍然是一个极具挑战性的任务。回到地球，我们知道，目前并没有一个令人满意的气候动力学理论能够解释辐射强迫、动力学不稳定性、正负反馈以及轨道和地质条件的缓慢调制之间的复杂、多尺度相互作用。
    </p>
    <p>
        开发一个完整的气候理论实际上是当代科学的重大挑战之一，同时开发能够在大范围时间和空间尺度上解释地球流体行为的无缝模型仍然是一个遥不可及的目标。对地球历史上许多具有充分记录的事件——例如冰期的起源与衰退——的理论解释仍然远未解决，更不用说构建能够令人满意地模拟这些事件的模型了。
    </p>
    <p>
        从还原论的角度出发，一个引人深思的问题是：如果我们对地球自身的性质了解还相对有限，那么研究遥远行星大气性质的意义何在？
    </p>
    <p>
        我们在此论证，实际上，研究系外行星为跨越天体物理和地球物理的跨学科研究创造了一个非凡的科学前景。地球物理科学可以为研究非地球天体做出重要贡献；另一方面，通过研究其他行星，我们可以以更广阔的科学视角来更好地理解地球，而不仅仅是专注于预测和解释对人类直接相关的地球流体某些特性的变化。
    </p>
    <p>
        挑战在于尝试开发用于研究各种行星大气的通用物理和数学理论方法以及诊断工具，并在更实用的层面上构建灵活的数值模型，这些模型能够在给定一些基本输入参数后模拟多种不同的行星大气。
    </p>
    <p>
        从这一视角出发，可以参考Read（2011）的近期论文，他提出应沿用流体力学中的传统方法，构造若干无量纲数并以此对行星类型的环流机制进行分类。
    </p>
    <p>
        本文旨在为建立地球物理和天体物理学之间的联系做出有限但初步的三重贡献。我们引用了一些近期发表的研究材料（Lucarini 2009；Lucarini, Fraedrich & Lunkeit 2010a, 2010b；Boschi et al. 2013），并补充了一些具有独特天文学特色的新结果。
    </p>
    <p>
        首先，我们从宏观热力学的基本结果中引入一些思想和方法，这些结果可以用来以严格的方式定义描述行星大气基本非平衡特性的指标，例如将可用势能转化为动能的能力（如热机），以及通过不可逆过程产生的熵。这些概念可以在紧凑的理论框架中得到解释。
    </p>
    <p>
        然后，我们使用这些热力学指标为古气候学的一个经典问题——“雪球地球”现象的起源与衰退——提供了新的描述，并基于Hoffman等（1998）和Hoffman & Schrag（2002）的研究证据，讨论地球如何可能支持多种稳态。
    </p>
      <h1>2. 气候的非平衡热力学</h1>
    <p>
        本节简要介绍了本研究中用于分析类地行星多稳定性特性的热力学诊断工具。有关这种形式化方法及其在研究非平衡系统全局特性中的应用的详细讨论，可以参考其他文献（Fraedrich & Lunkeit 2008; Lucarini 2009; Lucarini et al. 2010, 2010b）。
    </p>
    <p>
        大气的总能量预算可以写为 \(E = P + K\)，其中 \(K = \int_V \frac{1}{2} \rho v^2 \, dV\) 表示总动能，\(P = \int_V (c_p T + gz + Lq) \rho \, dV\) 表示湿静态势能（即显热、势能和潜热的总和），\(V\) 为大气域。可以证明（Peixoto & Oort 1992）：
    </p>
    <p>
        \[
        \dot{K} = -D + W,
        \]
        \[
        \dot{P} = \dot{\Psi} + D - W,
        \]
    </p>
    <p>
        其中 \(D = \int_V \rho \, \zeta^2 \, dV\) 表示由于摩擦导致的动能耗散（\(\zeta^2 > 0\) 是与动能耗散相关的局部加热速率），\(W = -\int_V \rho \, v \cdot \nabla p \, dV\) 表示系统完成的瞬时功，\(\dot{\Psi} = \int_V (-\nabla \cdot H) \, dV\) 表示由显热、潜热和辐射通量收敛引起的总加热。
    </p>
    <p>
        根据公式 (1) 和 (2) 可以推导出 \(\dot{E} = \dot{\Psi}\)，因此摩擦加热 \(\zeta^2\) 并不会增加总能量，因为它只是动能和势能之间的内部转化。将气候视为非平衡稳态系统（NESS，参见 Gallavotti 2006），在长期尺度上有 \(\dot{E} = \dot{P} = \dot{K} = 0\)（以下用上划线表示长期平均值），因此 \(\dot{\Psi} = 0\)。如果定义总绝热加热为 \(\dot{Q} = \rho \zeta^2 - \nabla \cdot H\)，并将区域 \(V\) 分为子区域 \(V^+\) 和 \(V^-\)，分别满足 \(\dot{Q}^+ > 0\) 和 \(\dot{Q}^- < 0\)，根据公式 (2) 可得：
    </p>
    <p>
        \[
        \dot{\Psi} + D = \dot{P} + W = \int_{V^+} \rho Q^+ \, dV + \int_{V^-} \rho Q^- \, dV = \dot{\Phi}^+ + \dot{\Phi}^-,
        \]
    </p>
    <p>
        其中根据定义有 \(\dot{\Phi}^+ > 0\) 和 \(\dot{\Phi}^- < 0\)。根据公式 (1)、(2) 和 (3) 可以进一步证明：
    </p>
    <p>
        \[
        D = W = \dot{\Phi}^+ + \dot{\Phi}^- > 0,
        \]
    </p>
    <p>
        这概括了 Lorenz（1967）的能量循环。因此，大气可以被解释为一个热机，其中 \(\dot{\Phi}^+\) 和 \(\dot{\Phi}^-\) 是产生机械功 \(W\) 所需的净热吸收和释放。大气热机的效率，即在给定热输入下生成机械功的能力，可以定义为：
    </p>
    <p>
        \[
        \eta = \frac{\dot{\Phi}^+ + \dot{\Phi}^-}{\dot{\Phi}^+} = \frac{W}{\dot{\Phi}^+}.
        \]
    </p>
    <p>
        如果引入系统总熵变化速率 \(\dot{S} = \int_V \frac{\dot{Q}}{T} \rho \, dV\)，并使用 \(V^+\) 和 \(V^-\) 的区域划分，可以表示为：
    </p>
    <p>
        \[
        \dot{S} = \int_{V^+} \frac{\dot{Q}^+}{T} \rho \, dV + \int_{V^-} \frac{\dot{Q}^-}{T} \rho \, dV = \dot{\Sigma}^+ + \dot{\Sigma}^-,
        \]
    </p>
    <p>
        其中任何时刻都有 \(\dot{\Sigma}^+ > 0\) 和 \(\dot{\Sigma}^- < 0\)。在稳态条件下，\(\dot{\Sigma}^+ = -\dot{\Sigma}^-\)，因此满足：
    </p>
    <p>
        \[
        \dot{\Phi}^+ \Theta^+ + \dot{\Phi}^- \Theta^- = 0,
        \]
    </p>
    <p>
        其中：
    </p>
    <p>
        \[
        \dot{\Phi}^\pm = \dot{\Sigma}^\pm \Theta^\pm,
        \]
    </p>
    <p>
        \(\Theta^+\) 和 \(\Theta^-\) 分别是区域 \(V^+\) 和 \(V^-\) 的时间和空间平均温度。由 \(|\dot{\Sigma}^+| = |\dot{\Sigma}^-|\) 且 \(|\Phi^+| > |\Phi^-|\) 可知 \(\Theta^+ > \Theta^-\)，即吸热通常发生在比放热更高的温度下（Peixoto & Oort 1992；Johnson 1997）。由公式 (4)、(6) 和 (7) 推导得：
    </p>
    <p>
        \[
        \eta = \frac{\Theta^+ - \Theta^-}{\Theta^+},
        \]
    </p>
    <p>
        这一表达与实际卡诺效率的定义类似（Fermi 1956）。
    </p>
</body>
</html>