<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Community Ice CodE (CICE) 用户指南</title>
</head>
<body>
    <h1>Community Ice CodE (CICE) 用户指南</h1>
    <h2>版本 4.0</h2>
    <p>与 CESM1.0 一起发布</p>
    <p>作者: David Bailey, Marika Holland, Elizabeth Hunke, Bill Lipscomb, Bruce Briegleb, Cecilia Bitz, Julie Schramm</p>

    <h2>目录</h2>
    <ol>
        <li><a href="#introduction">介绍</a></li>
        <li><a href="#cice-scripts">CICE 脚本</a></li>
        <li><a href="#namelist-variables">Namelist 变量</a></li>
        <li><a href="#model-input-datasets">模型输入数据集</a></li>
        <li><a href="#run-types">运行类型</a></li>
        <li><a href="#prescribed-ice-mode">预设冰模式</a></li>
        <li><a href="#prescribed-aerosol-mode">预设气溶胶模式</a></li>
        <li><a href="#changing-ice-thickness-categories">改变冰厚度类别数量</a></li>
        <li><a href="#output-data">输出数据</a></li>
        <li><a href="#troubleshooting">故障排除</a></li>
    </ol>

    <h2 id="introduction">1. 介绍</h2>
    <p>本用户指南与 CESM1 用户指南一起使用，旨在为那些希望运行 CICE 耦合模型、在支持的平台上运行并“开箱即用”的用户提供帮助。运行 CICE 完全耦合的用户应首先查看 CESM1 用户指南：<a href="http://www.cesm.ucar.edu/models/cesm1.0/cesm_doc/book1.html">CESM1 用户指南</a>。</p>
    <p>它包括一个快速入门指南，用于下载 CESM1 源代码和输入数据集，以及如何配置、构建和运行模型的信息。完全耦合模型的受支持配置和脚本也在 CESM1 用户指南中进行了描述。CICE 用户指南适用于那些希望对冰模型脚本或 namelist 进行修改或运行非耦合冰模型的用户。希望修改源代码的用户应参阅 CICE 代码参考/开发者指南。</p>
    <p>CICE4 是 Los Alamos 海冰模型的最新版本，有时也称为 Community Ice CodE。它是一个社区努力的结果，旨在开发一个可移植、高效的海冰模型，可以在全球气候模型中耦合运行，或作为独立冰模型运行。它已作为 Community Earth System Model (CESM) 的海冰组件发布，CESM 是一个完全耦合的全球气候模型，提供地球过去、现在和未来气候状态的模拟。CICE4 支持高分辨率和低分辨率的格陵兰极点和三极网格，这些网格与 Parallel Ocean Program (POP) 海洋模型使用的网格相同。高分辨率版本最适合模拟当前和未来的气候情景，而低分辨率选项用于古气候模拟和调试。</p>
    <p>非耦合版本的 CICE 可从 Los Alamos 国家实验室单独获取：<a href="http://oceans11.lanl.gov/trac/CICE">CICE 非耦合版本</a>。它提供了一种独立于其他 CESM 组件运行海冰模型的方法。它读取大气和海洋强迫数据，从而消除了对通量耦合器、大气、陆地和海洋数据模型的需求。它可以在较少的处理器上运行，或者在没有 MPI（消息传递接口）的情况下运行，适用于没有这些计算资源的研究人员。</p>
    <p>非耦合冰模型中的物理与完全耦合系统中使用的冰模型中的物理相同。CICE 是一个动态-热力学模型，包括亚网格尺度冰厚度分布（Bitz et al. (2001); Lipscomb (2001)）。它使用 Bitz 和 Lipscomb (1999) 的能量守恒热力学，每个厚度类别中有多个层，并考虑了冰盖内盐水袋的影响。冰动力学使用 Hunke 和 Dukowicz (1997) 的弹性-粘性-塑性 (EVP) 流变学。海冰脊化遵循 Rothrock (1975) 和 Thorndike et al. (1975)。还包括一个板块海洋混合层模型。可用的科学参考包含有关模型物理的更详细信息。</p>
    <p>在本文档中，我们尝试提供以下文本约定。代码中使用的变量名以打字机字体显示。子程序名以斜体显示，文件名以粗体显示。</p>

    <h3 id="whats-new">1.1 CICE4 的新特性</h3>
    <p>CICE4 是 Community Sea Ice Model (CSIM5) 的升级版本，CSIM5 基于 CICE3，于 2004 年 6 月发布。模型物理与 CSIM5 相似，但出于实际原因，决定转向 CICE，即 LANL 海冰模型。主要变化包括：</p>
    <ul>
        <li>增量重映射传输方案现在是默认方案，并在名为 <code>ice_transport_driver.F90</code> 和 <code>ice_transport_remap.F90</code> 的模块中提供。MPDATA 传输方案在 CICE4 中不再受支持。逆风平流方案是唯一的附加选项，包含在 <code>ice_transport_driver.F90</code> 中。</li>
        <li>独立冰模型现在只能通过 Los Alamos 国家实验室获取。</li>
        <li>一些物理选项已被转移到其他或新模块中。例如，<code>ice_albedo.F90</code> 的大部分内容现在在 <code>ice_shortwave.F90</code> 中。新模块包含所有短波辐射传输以及基本反照率计算。</li>
        <li>机械再分配方案已发生显著变化，并在 <code>ice_mechred.F90</code> 中提供。</li>
        <li>为特定于 CESM 的模块创建了一个新的驱动程序区域，而不是独立的 CICE 模型。新的 CESM 驱动程序包含在 <code>cpl_mct</code> 和 <code>cpl_share</code> 子目录中。ESMF 驱动程序（<code>cpl_esmf</code>）仍在开发中。<code>source</code> 子目录现在主要包含驱动程序独立的源代码。</li>
        <li>引入了一个新的 <code>bld</code> 子目录，其中包含特定于 CESM 的构建和配置脚本。这些脚本处理 namelist 生成、默认值和配置细节。</li>
    </ul>
    <p>CICE 源代码基于 Los Alamos 海冰模型 CICE 版本 4。两个版本的主要源代码非常相似，但驱动程序有显著差异。如果 CICE 文档中未涵盖某些主题，建议用户查看 CICE 文档 Hunke 和 Lipscomb (2008)。它可在 Los Alamos 国家实验室获取：<a href="http://oceans11.lanl.gov/trac/CICE">CICE 文档</a>。</p>
    <h1>2. CICE 脚本</h1>
    <p>耦合模型的设置脚本位于 <code>cesm1/scripts</code> 目录中。CICE4 在 CESM 中的目录结构如下所示：</p>
    <pre>
cesm1 (主目录)
|
|
models--------+--------- scripts
| |
| * * * * *|* * * * *
bld------+------ice *构建脚本*
| | * 耦合模型 *
(Makefile | * * * * * * * * * *
macros) |
cice (活跃的冰组件)
|
bld ---------- docs -------+------- src
| |
(CICE |
文档) |
|
|
drivers --- mpi ---+--- serial --- source
|
|
|
cice4 ---- cpl_esmf --+-- cpl_mct ---- cpl_share
    </pre>

    <h2 id="coupled-model-scripts">2.1 耦合模型脚本</h2>
    <p>CESM1 脚本从 CCSM3 中进行了显著升级，并基于完全不同的设计理念。新脚本将为用户确定的特定配置生成一组“解析脚本”。配置包括组件、分辨率、运行类型和机器。以前在 CCSM3 的 <code>/scripts</code> 目录中的运行和设置脚本现在会自动生成。</p>
    <p>有关如何使用新脚本的信息，请参阅 CESM1 用户指南：<a href="http://www.cesm.ucar.edu/models/cesm1.0/cesm_doc/book1.html">CESM1 用户指南</a>。</p>
    <p>包含冰模型 namelist 的文件现在位于 <code>$CASE/Buildconf</code> 中。用于构建冰模型可执行文件的环境变量脚本也位于 <code>$CASE/Buildconf</code> 中。冰模型 namelist 的内容在第 3 节中描述。</p>

    <h2 id="build-environment">2.2 构建环境</h2>
    <p>构建和配置环境与之前版本的 CESM 相比发生了显著变化。构建 namelist 和配置工具基于 CAM 脚本。</p>
    <p>配置工具包括设置编译时参数，例如水平网格、海冰模式（预测或预设）、示踪剂等。可以使用配置工具设置其他选项，例如分解和任务数量，但这些通常通过 CESM 环境变量设置。然而，CAM 脚本通过配置命令行显式设置其中一些选项。例如，CESM 脚本中的一条配置行如下：</p>
    <pre>
#--------------------------------------------------------------------
# 调用 cice 配置
#--------------------------------------------------------------------
set hgrid = "-hgrid $ICE_GRID"
if ($ICE_GRID =~ *T*) set hgrid = "-hgrid ${ICE_NX}x${ICE_NY}"
set mode = "-cice_mode $CICE_MODE"
cd $CASEBUILD/ciceconf || exit -1
$CODEROOT/ice/cice/bld/configure $hgrid $mode -nodecomp $CICE_CONFIG_OPTS || exit -1
    </pre>
    <p>此示例设置了水平网格和模式（预测或预设）。构建 namelist 工具设置了控制 CICE 模型运行时选项的 namelist。此工具根据配置的编译时设置和一些基于水平网格和其他选项的标准默认值设置 namelist 标志。CESM 配置期间的典型执行如下：</p>
    <pre>
$CODEROOT/ice/cice/bld/build-namelist -config config_cache.xml \
-csmdata \$DIN_LOC_ROOT -infile ccsm_namelist \
-inputdata $CASEBUILD/cice.input_data_list \
-namelist "&cice $CICE_NAMELIST_OPTS /" || exit -1
    </pre>
    <p>同样，构建 namelist 工具的典型用法是通过 CESM 脚本，但也可以通过命令行界面调用。</p>

    <h3 id="cice-preprocessor-flags">2.2.1 CICE 预处理器标志</h3>
    <p>预处理器标志以 <code>-Doption</code> 的形式在 <code>cice.buildexe.csh</code> 脚本中激活。只有高级用户应更改这些选项。有关这些选项的更多信息，请参阅 CESM 用户指南或 CICE 参考指南。特定于冰模型的标志包括：</p>
    <pre>
CPPDEFS := $(CPPDEFS) -DCESMCOUPLED -Dcoupled -Dncdf -DNCAT=5 -DNXGLOB=$()
-DNYGLOB=$() -DNTR_AERO=3 -DBLCKX=$() -DBLCKY=$() -DMXBLCKS=$()
    </pre>
    <p>选项 <code>-DCESMCOUPLED</code> 和 <code>-Dcoupled</code> 用于激活耦合接口。这将包括例如 <code>ice_comp_mct.F90</code> 中的源代码。在耦合运行中，CESM 耦合器将通量乘以冰面积，因此在 CICE 中将其除以冰面积以获得正确的通量。</p>
    <p>选项 <code>-DBLCKX=$(CICE_BLCKX)</code> 和 <code>-DBLCKY=$(CICE_BLCKY)</code> 设置每个网格方向中使用的块大小。这些值在耦合模型的脚本中自动设置。请注意，<code>BLCKX</code> 和 <code>BLCKY</code> 必须能整除网格，并且仅用于 MPI 网格分解。如果 <code>BLCKX</code> 或 <code>BLCKY</code> 不能整除网格（这决定了每个方向的块数），模型设置将从设置脚本中退出，并将错误消息打印到 <code>ice.bldlog*</code>（构建日志）文件中。</p>
    <p>标志 <code>-DMXBLCKS</code> 本质上是线程选项。这控制了每个处理器的“块”数量。这可以描述 MPI 任务上的 OpenMP 线程数量，或者可以简单地是单个 MPI 任务处理多个块。</p>
    <p>标志 <code>-DNTR_AERO=n</code> 用于在海冰中启用气溶胶沉积物理，其中 <code>n</code> 是示踪剂种类的数量，<code>0</code> 表示关闭示踪剂。有关此内容的更多详细信息，请参阅示踪剂部分。</p>
    <p>标志 <code>-D MPI</code> 用于设置消息传递接口。在使用并行环境运行时必须设置此标志。要更好地了解在编译时包含或排除了哪些代码，请在源代码中搜索 <code>ifdef</code> 和 <code>ifndef</code>，或查看 <code>/obj</code> 目录中的 <code>*.f90</code> 文件。</p>
</body>
</html>