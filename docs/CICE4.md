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
    <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Namelist 变量</title>
</head>
<body>
    <h1>3. Namelist 变量</h1>
    <p>CICE 在耦合和非耦合模型中使用相同的 namelist。本节描述了 namelist <code>ice_nml</code> 中的变量，这些变量决定了时间管理、输出频率、模型物理和文件名。耦合模型的冰 namelist 现在位于 <code>$CASE/Buildconf</code> 中。</p>
    <p>脚本在运行时读取输入 namelist，并将 namelist 信息写入模型可执行文件所在目录中的 <code>ice_in</code> 文件。因此，即使冰模型未重新编译，namelist 也会更新。冰设置、网格、示踪剂和物理 namelist 的默认值在 <code>ice_init.F90</code> 中设置。预设冰选项以及历史 namelist 变量分别在 <code>ice_prescribed.F90</code> 和 <code>ice_history.F90</code> 中设置。如果未在脚本的 namelist 中设置，它们将采用表 1-8 中列出的默认值，这些表列出了所有可用的 namelist 参数。此处显示的默认值适用于设置为生产运行的耦合模型。只有少数变量需要在 namelist 中设置；这些值在下面的段落中注明。默认 namelist 的示例见第 3.9.1 节。</p>

    <h2 id="run-management">3.1 运行管理</h2>
    <p>表 1 显示了主要的运行管理 namelist 选项。虽然非耦合版本中提供了额外的 namelist 变量，但它们由 CESM 中的驱动程序设置。驱动程序设置的变量包括：<code>dt</code>、<code>runid</code>、<code>runtype</code>、<code>istep0</code>、<code>days_per_year</code>、<code>restart</code> 和 <code>dumpfreq</code>。这些变量应在 CESM 配置文件中更改：</p>
    <p>CESM 脚本 (<a href="http://www.cesm.ucar.edu/models/cesm1.0/cesm_doc/book1.html">CESM 用户指南</a>)。</p>

    <h3 id="changing-timestep">3.1.1 更改时间步长</h3>
    <p><code>dt</code> 是冰模型热力学的时间步长（以秒为单位）。热力学组件对于任何时间步长值都是稳定的，但不一定准确。选择的 <code>dt</code> 值取决于传输的稳定性和网格分辨率。使用逆风平流方案时，传输的保守估计为：</p>
    <pre>
min(∆x, ∆y)
∆t <
4max(u, v)
    </pre>
    <p>表 2 显示了两个标准 CESM POP 网格的最大 <code>dt</code> 值，假设 <code>max(u, v) = 0.5m/s</code>。CICE 的默认时间步长为 30 分钟，必须等于 CESM 配置文件中设置的耦合间隔。</p>
    <p>偶尔，计算出的冰速度会大于选择模型时间步长时假设的速度。这会导致传输方案中的 CFL 违规。添加了一个 namelist 选项 (<code>xndt_dyn</code>) 以对动力学进行子循环，以解决长时间积分期间出现的不稳定性。此变量的默认值为 1，通常在冰模型达到不稳定性时增加到 2。当模型积分超过该点时，用户应将 namelist 中的值返回到 1。</p>

    <h2 id="writing-output">3.2 输出写入</h2>
    <p>控制模型诊断、netCDF 历史和重启文件频率的 namelist 变量如表 1 所示。默认情况下，诊断每 48 个时间步写入一次 ASCII 文件 <code>ice.log.$LID</code>（见第 9.1 节）。<code>$LID</code> 是在主脚本中设置的时间戳。</p>
    <p>namelist 变量 <code>histfreq</code> 控制 netCDF 历史文件的输出频率；默认写入月度平均值。历史文件的内容在第 9.3 节中描述。<code>hist_avg</code> 的值决定是写入瞬时值还是平均值，频率由 <code>histfreq</code> 设置。如果 <code>histfreq</code> 设置为 <code>'1'</code> 以输出瞬时值，则 <code>hist_avg</code> 在源代码中设置为 <code>.false.</code> 以避免冲突。最新版本的 CICE 允许多个历史流，当前最多设置为 5 个。namelist 变量 <code>histfreq</code> 和 <code>histfreq_n</code> 现在是数组，允许不同的历史文件集频率。更多详细信息见第 9.3 节。</p>
    <p>namelist 变量 <code>pointer_file</code> 设置为包含重启文件名的指针文件的名称，该文件将在模型执行开始时读取。指针文件位于脚本目录中，最初由冰设置脚本创建，但每次创建新的重启文件时都会被覆盖。它将包含最新的重启文件名。表 1 中显示的默认文件名 <code>ice.restart_file</code> 将不起作用，除非对冰设置脚本进行一些修改并创建具有此名称的文件，并且该文件包含有效的重启文件名；此变量必须在 namelist 中设置。有关重启指针文件的更多信息，请参阅第 9.2 节。</p>
    <p>变量 <code>dumpfreq</code> 和 <code>dumpfreq_n</code> 控制 netCDF 重启文件的输出频率；默认每年写入一个重启文件，并由 CESM 驱动程序设置。重启文件的默认格式现在是 netCDF，但可以通过 namelist 变量 <code>restart_format</code> 更改为二进制。</p>
    <p>如果 <code>print_points</code> 为 <code>.true.</code>，则会在两个网格点打印诊断数据，一个靠近北极，一个靠近威德尔海。这些点通过 namelist 变量 <code>latpnt</code> 和 <code>lonpnt</code> 设置。此选项对调试很有帮助。</p>
    <p><code>incond_dir</code>、<code>restart_dir</code> 和 <code>history_dir</code> 分别是初始条件文件、重启文件和历史文件的写入目录。这些值在设置脚本的顶部设置，并已从默认值修改以满足 CESM 文件命名约定。这允许每种类型的输出文件写入单独的目录。如果使用默认值，所有输出文件将写入可执行文件目录。</p>
    <p><code>incond_file</code>、<code>dump_file</code> 和 <code>history_file</code> 分别是初始条件文件、重启文件和历史文件的根文件名。这些字符串由 CESM 文件命名约定确定，因此默认值由 CESM 驱动程序设置。有关文件名其余部分如何创建的说明，请参阅第 9.2 和 9.3 节。</p>

    <h2 id="model-physics">3.3 模型物理</h2>
    <p>冰模型物理的 namelist 变量列于表 3 中。<code>restart</code> 几乎总是为 <code>true</code>，因为大多数运行类型从读取二进制重启文件开始。有关运行类型的描述以及使用重启文件和内部生成的模型数据作为初始条件的信息，请参阅第 5 节。<code>kcolumn</code> 是一个标志，如果设置为 1，则将模型作为单列运行。此选项尚未经过全面测试，不受支持。</p>
    <p>冰速度的计算每时间步长子循环 <code>ndte</code> 次，以便在下一次时间步长之前阻尼弹性波。子循环时间步长计算为 <code>dte = dt/ndte</code>，并且必须足够小于阻尼时间尺度 <code>T</code>，而 <code>T</code> 需要足够短于 <code>dt</code>。</p>
    <pre>
dte < T < dt
    </pre>
    <p>此关系在 Hunke (2001) 中讨论；另见 Hunke 和 Lipscomb (2008) 第 4.4 节。<code>[dte : T : dt]</code> 的最佳比例为 <code>[1 : 40 : 120]</code>。<code>dt</code> 和 <code>ndte</code> 的典型组合为 <code>(3600., 120)</code>、<code>(7200., 240)</code> 和 <code>(10800., 120)</code>。<code>ndte</code> 的默认值为 120，在 <code>ice_init.F90</code> 中设置。</p>
    <p><code>kitd</code> 确定用于在冰厚度分布 (ITD) 中重新分配海冰的方案，随着冰的生长和融化。线性重映射方案是默认方案，并将每个类别中的厚度分布近似为线性函数（Lipscomb (2001)）。Delta 函数方法将每个类别中的 <code>g(h)</code> 表示为 delta 函数（Bitz et al. (2001)）。此方法可能会在某些类别中留下大部分为空，并导致 <code>g(h)</code> 属性的跳跃。</p>
    <p><code>kdyn</code> 确定模型中使用的冰动力学。默认是弹性-粘性-塑性 (EVP) 动力学（Hunke 和 Dukowicz (1997)）。如果 <code>kdyn</code> 设置为 0，则冰动力学不活动。在这种情况下，不计算冰速度，也不传输冰。由于初始冰速度是从重启文件中读取的，因此写入日志文件的最大和最小速度在这种情况下将不为零，但它们不用于任何计算。</p>
    <p><code>kstrength</code> 的值确定用于计算冰盖强度的公式。Hibler (1979) 的计算取决于平均冰厚度和开放水域分数。Rothrock (1975) 的计算基于能量学，如果参与脊化的冰未得到很好解析，则不应使用。</p>
    <p><code>evp_damping</code> 用于控制冰动力学中弹性波的阻尼。通常在高分辨率模拟中设置为 <code>.true.</code>，其中弹性波在没有大量子循环的小时间步长中未充分阻尼。此过程通过减少动力学使用的有效冰强度来工作，并且不是受支持的选项。</p>
    <p><code>advection</code> 确定使用的水平传输方案。默认方案是增量重映射方法（Lipscomb 和 Hunke (2004)）。此方法扩散较少，并且在大量类别或示踪剂时计算效率高。逆风方案也可用。逆风方案仅为一阶精度。</p>
    <p>CESM3 短波选项的雪和冰反照率的基础值在 namelist 中设置。冰反照率是厚度大于 <code>ahmax</code> 的冰的反照率，当前设置为 0.5 米。此厚度是可以在 <code>ice_shortwave.F90</code> 中更改的参数。雪反照率适用于冷雪。</p>
    <p>对于新的 delta-Eddington 短波辐射传输方案（Briegleb 和 Light (2007)），基础反照率基于雪、海冰和融池的固有光学特性计算。这些反照率可通过调整雪粒半径 <code>R_snw</code>、过渡到融雪的温度和最大雪粒半径进行调整。</p>

    <h2 id="tracer-namelist">3.4 示踪剂 Namelist</h2>
    <p>表 4 中列出的 namelist 参数用于添加示踪剂。详见示踪剂部分。</p>

    <h2 id="prescribed-ice-namelist">3.5 预设冰 Namelist</h2>
    <p>表 5 中列出的 namelist 参数用于预设冰选项，如 AMIP 和 F compset（独立 CAM）运行中使用的选项。</p>

    <h2 id="grid-namelist">3.6 网格 Namelist</h2>
    <p>表 6 中列出的 namelist 参数用于网格和掩码信息。在执行期间，冰模型从应位于可执行目录中的文件 <code>grid_file</code> 和 <code>kmt_file</code> 读取网格和陆地掩码信息。脚本中有命令将这些文件从输入数据目录复制并重命名为 <code>global_$ICE_GRID.grid</code> 和 <code>global_$ICE_GRID.kmt</code> 到表 6 中显示的默认文件名。</p>
    <p>对于耦合运行，支持的网格包括“位移极点”网格（<code>gx3v7</code> 和 <code>gx1v6</code>）和“三极”网格。</p>

    <h2 id="domain-namelist">3.7 域 Namelist</h2>
    <p>表 7 中列出的 namelist 参数用于计算域分解信息。这些通常根据处理器数量在构建配置脚本中设置。请参阅 CESM 脚本文档。</p>

    <h2 id="pio-namelist">3.8 PIO Namelist</h2>
    <p>表 8 中列出的 namelist 参数用于控制并行输入/输出。此处仅提供简要概述，但有关并行输入/输出的更多信息可在以下网址找到：</p>
    <p><a href="http://web.ncar.teragrid.org/~dennis/pio_doc/html">PIO 文档</a>。</p>

    <h2 id="example-namelists">3.9 Namelist 示例</h2>
    <p>本节展示了耦合冰模型中的几个 namelist 示例。这些示例直接取自耦合模型的 <code>cice.buildnml.csh</code>。namelist 中的大多数变量由脚本中其他地方设置的环境变量确定。由于耦合模型的 namelist 由脚本“解析”，意味着大多数 shell 脚本变量的值直接放入 namelist 中，因此显示了最常用配置的示例。通常在 namelist 中直接更改的变量是时间步长 <code>dt</code> 和冰动力学中每个时间步长的子循环次数 <code>ndte</code>。</p>

    <h3 id="example-1-cesm-fully-coupled">3.9.1 示例 1：CESM 完全耦合</h3>
    <p>以下示例是用于 CESM 完全耦合（或 B 配置）的 namelist。仍设置为 shell 脚本变量的变量已在 <code>cice.buildnml.csh</code> 或其他脚本的顶部设置。完全解析的 namelist 版本将写入可执行目录中的 <code>ice_in</code>。</p>
    <pre>
&amp;setup_nml
diagfreq = 24
hist_avg = .true.
histfreq = 'm','x','x','x','x'
histfreq_n = 1,1,1,1,1
ice_ic = 'b40.1850.track1.1deg.006.cice.r.0301-01-01-00000.nc'
lcdf64 = .false.
pointer_file = 'rpointer.ice'
xndt_dyn = 1.0
/
&amp;grid_nml
grid_file = '/fis/cgd/cseg/csm/inputdata/ice/cice/global_gx1v6_20010402.grid'
grid_format = 'bin'
grid_type = 'displaced_pole'
kcatbound = 0
kmt_file = '/fis/cgd/cseg/csm/inputdata/ice/cice/global_gx1v6_20090204.kmt'
/
&amp;ice_nml
advection = 'remap'
albedo_type = 'default'
albicei = 0.45
albicev = 0.75
albsnowi = 0.73
albsnowv = 0.98
evp_damping = .false.
kdyn = 1
kitd = 1
krdg_partic = 1
krdg_redist = 1
kstrength = 1
ndte = 120
r_snw = 1.5
shortwave = 'dEdd'
/
&amp;tracer_nml
tr_aero = .true.
tr_FY = .true.
tr_iage = .true.
tr_pond = .true.
/
&amp;domain_nml
distribution_type = 'cartesian'
ew_boundary_type = 'cyclic'
ns_boundary_type = 'open'
processor_shape = 'square-pop'
/
&amp;ice_prescribed_nml
prescribed_ice = .false.
/
    </pre>

    <h3 id="example-2-history-file-namelist">3.9.2 示例 2：历史文件 Namelist</h3>
    <p>第二个 namelist 控制写入历史文件的变量。默认情况下，所有文件都写入历史文件。未输出的变量在 namelist <code>icefields_nml</code> 中设置。以下某些字段未写入历史文件，因为它们可以从海洋历史文件中检索。融化和冻结开始字段未使用，因为如果模型在年中重新启动，它们包含的信息可能不正确。第六到第十类别的冰面积和体积未使用，因为默认厚度分布由五个冰类别组成。</p>
    <pre>
f_aero = 'mxxxx'
f_aicen = 'mxxxx'
f_aisnap = 'mdxxx'
f_apondn = 'mxxxx'
f_congel = 'mxxxx'
f_daidtd = 'mxxxx'
f_daidtt = 'mxxxx'
f_divu = 'mxxxx'
f_dvidtd = 'mxxxx'
f_dvidtt = 'mxxxx'
f_faero_atm = ’mxxxx’
12
f_faero_ocn = ’mxxxx’
f_fhocn = ’mxxxx’
f_fhocn_ai = ’mxxxx’
f_frazil = ’mxxxx’
f_fresh = ’mxxxx’
f_fresh_ai = ’mxxxx’
f_frz_onset = ’xxxxx’
f_frzmlt = ’xxxxx’
f_fsalt = ’mxxxx’
f_fsalt_ai = ’mxxxx’
f_fy = ’mdxxx’
f_hisnap = ’mdxxx’
f_icepresent = ’mxxxx’
f_meltb = ’mxxxx’
f_meltl = ’mxxxx’
f_meltt = ’mxxxx’
f_mlt_onset = ’xxxxx’
f_opening = ’mxxxx’
f_shear = ’mxxxx’
f_sig1 = ’mxxxx’
f_sig2 = ’mxxxx’
f_snoice = ’mxxxx’
f_sss = ’xxxxx’
f_sst = ’xxxxx’
f_strairx = ’mxxxx’
f_strairy = ’mxxxx’
f_strcorx = ’mxxxx’
f_strcory = ’mxxxx’
f_strength = ’mxxxx’
f_strintx = ’mxxxx’
f_strinty = ’mxxxx’
f_strocnx = ’mxxxx’
f_strocny = ’mxxxx’
f_strtltx = ’xxxxx’
f_strtlty = ’xxxxx’
f_uocn = ’xxxxx’
f_uvel = ’mxxxx’
f_vicen = ’mxxxx’
f_vocn = ’xxxxx’
f_vvel = ’mxxxx’
/
</pre>

<h1>4 模型输入数据集</h1>
<p>耦合的 CICE 模型至少需要三个文件才能运行：</p>
<ul>
    <li>global ${ICE GRID}.grid：一个包含网格信息的二进制文件</li>
    <li>global ${ICE GRID}.kmt：一个包含陆地掩膜信息的二进制文件</li>
    <li>iced.0001-01-01.${ICE GRID}.20lay：包含初始条件信息的二进制文件，适用于 gx1v6 和 gx3v7 网格。此重启文件中的冰层分布包含 5 个类别，每个类别有 4 个层。</li>
</ul>
<p>根据脚本中选择的网格，将使用适当的 global* 和 iced* 文件。在可执行目录中直接读取这些文件，而不是将它们复制到可执行目录。目前，仅支持 gx3v7、gx1v6、tx1v1 和 tx0.1v2 网格的冰和海洋模型。请注意，这些文件现在可以以 netCDF 格式使用。</p>

<h1>5 运行类型</h1>
<p>耦合模型的运行类型在 CESM 用户手册中有描述：<a href="http://www.cesm.ucar.edu/models/cesm1.0/cesm_doc/book1.html">CESM 用户手册</a></p>

<h1>6 指定冰模式</h1>
<p>指定冰模式是某些独立运行 CAM（大气模式比较项目）所需的功能。在此模式下，海冰浓度将从文件中读取，并替换模型中计算出的预报浓度。此模式下的海冰动力学被关闭，海冰厚度在每个时间步重新设置为北半球 2 米，南半球 1 米。此模式的主要目的是使用冰模型中的一维热力学计算表面通量、积雪深度、反照率和冰面温度。此模式不是能量守恒的，主要用于大气灵敏度实验的测试。</p>

<p>此模式所需的输入 netCDF 文件名称可通过 CESM 脚本或 CICE 构建命名列表进行设置，具体命令如下：</p>
<pre>
$CODEROOT/ice/cice/bld/build-namelist -config config_cache.xml \
-csmdata \$DIN_LOC_ROOT -infile ccsm_namelist \
-inputdata $CASEBUILD/cice.input_data_list \
-namelist "&cice $CICE_NAMELIST_OPTS \
stream_fldfilename=’$CESMSSTFN’ \
stream_domfilename=’$CESMSSTFN’ \
stream_year_first=$DOCN_SSTDATA_YEAR_START \
stream_year_last=$DOCN_SSTDATA_YEAR_END \
model_year_align=$DOCN_SSTDATA_YEAR_START \
stream_fldvarname=’ice_cov’ /" || exit -1
</pre>
<p>大写字母的变量在 CESM 配置步骤中设置，并传递给 CICE 命名列表。冰浓度变量假定为 "ice_cov"。netCDF 文件中还需要有一个可识别的时间轴（如 "days since 0001-01-01"），以便在冰模型中处理时间插值。</p>

<h1>7 指定气溶胶模式</h1>
<p>从 CESM 版本 1 开始，指定气溶胶现在由 CAM 或 DATM 处理。</p>

<h1>8 改变冰厚度类别数量</h1>
<p>冰厚度类别的数量会影响冰模型输入文件的三个地方：</p>
<ul>
    <li>$NCAT 在运行脚本中</li>
    <li>源代码模块 ice_model_size.F90</li>
    <li>初始条件（重启）文件中的冰层分布</li>
</ul>
<p>冰厚度类别的数量可以通过在 $CASE/Buildconf/cice.buildexe.csh 中设置 $NCAT 来确定。默认值是 5 个类别。$NCAT 用于确定冰模型大小设置中的 CPP 变量设置（NCAT）。$RES 是网格的分辨率，低分辨率网格为 100x116（gx3v7），中等分辨率网格为 320x384（gx1v6）。</p>
<p>注意：若要使用一个冰厚度类别，需要在命名列表中进行以下更改：</p>
<ul>
    <li>kitd = 0</li>
    <li>kstrength = 0</li>
</ul>
<p>使用这些设置时，模型将使用增量方案，而不是线性重映射，并根据开水面积和平均冰厚度设置强度参数化。</p>
<p>初始重启文件中的信息依赖于冰厚度类别的数量以及冰层分布中的总层数。对于默认的 5 个冰厚度类别（每个类别 4 个层），已存在一个初始条件文件。要为不同数量的类别或层创建初始条件文件，可以按照以下步骤操作：</p>
<ul>
    <li>在 $CASE/Buildconf/cice.buildexe.csh 中将 $NCAT 设置为所需的类别数量。</li>
    <li>在 $CASE/Buildconf/cice.buildnml.csh 中设置 namelist 变量 dumpfreq = 'm'，以便每月打印出重启文件。</li>
    <li>在 $CASE/Buildconf/cice.buildnml.csh 中设置 namelist 变量 restart = .false.，以便使用冰模型中的初始条件。</li>
    <li>运行模型直到达到平衡状态。</li>
    <li>最后一个重启文件可以作为初始条件文件。</li>
    <li>将最后一个重启文件的名称更改为 iced.0001-01-01.$GRID。</li>
    <li>将文件复制到输入数据目录或直接复制到可执行目录。</li>
</ul>
<p>请注意，二进制重启文件中的日期不会与 0001-01-01 相同。对于耦合运行，$BASEDATE 将是启动日期，文件中的日期不会被使用。</p>

<h1>9 输出数据</h1>
<p>冰模型会生成三种类型的输出数据。每次运行时都会创建一个包含 ASCII 文本的文件，即日志文件，记录运行如何设置以及运行进展。还会生成一系列二进制重启文件，用于继续运行。模型在运行过程中也会生成一系列 netCDF 历史文件，包含网格的瞬时或时间平均输出。</p>

<h2>9.1 标准输出</h2>
<p>冰模型的诊断信息会写入一个 ASCII 文件，包含关于编译的信息、输入参数的记录，以及在集成过程中经常进行的经度平均、最大值和最小值的变化。模型设置或冰模型中检测到的某些错误条件也会出现在此文件中。运行完成后，某些计时信息会出现在文件底部。文件名为 ice.log.$LID，其中 $LID 是文件 ID 的时间戳，位于可执行目录中。诊断信息的频率由 namelist 参数 diagfreq 决定。其他诊断信息将出现在 ccsm.log.$LID 或 cpl.log.$LID 文件中。</p>

<h2>9.2 重启文件</h2>
<p>重启文件包含继续运行所需的所有初始条件信息。这些文件采用标准的 netCDF 64 位二进制格式。初次运行时不需要重启文件，但强烈建议使用它。初始条件来自重启文件，提供更真实的信息，特别是在与活动海洋模型耦合时。重启文件的创建频率由 namelist 参数 dumpfreq 控制。重启文件名的形式为：</p>
<pre>
$CASE.cice.r.yyyy-mm-dd-sssss.nc
</pre>
<p>例如，文件 $CASE.cice.r.0002-01-01-00000.nc 会在第 1 年结束时写出。重启文件的名称包含在一个名为 rpointer.ice 的指针文件中，该文件包含最新重启文件的路径和文件名。指针文件通常由冰模型设置脚本创建，每次写出重启文件时，现有的指针文件会被覆盖。</p>

<h2>9.3 历史文件</h2>
<p>历史文件包含在模型运行过程中按指定时间写入的网格数据值。默认情况下，历史文件将写入 namelist 中定义的目录。netCDF 文件名以历史文件字符串（如 "iceh"）开头。如果历史文件未在 namelist 中设置，则使用默认字符串 "iceh"。用户可以指定数据写入的频率，并选择记录时间平均或瞬时数据。</p>

<h2>9.3.1 平均字段的注意事项</h2>
<p>计算历史文件的月平均值时，大多数数组会在填充数据前被清零。在没有冰的地方，这些零会被包括在月平均值中。对于某些字段，这不是问题，例如冰厚度和冰面积，但对于其他字段，会导致这些值在没有冰的地方不具有代表性。</p>

<h2>9.3.2 更改频率和平均</h2>
<p>数据写入历史文件的频率以及进行时间平均的间隔由 namelist 变量 histfreq 控制。数据平均由 namelist 变量 hist_avg 启动。通过累积运行中所有变量的运行总和来构建平均值。</p>

<h2>9.3.3 更改内容</h2>
<p>设置脚本中的第二个 namelist 控制写入历史文件的变量内容。要从列表中移除某个字段，可以将该字段的字符变量名称添加到 cice.buildnml.csh 中的 &icefields_nml namelist，并将其值设置为 'xxxxx'。</p>

<h1>10 故障排除</h1>

<h2>10.1 代码无法编译或运行</h2>
<p>检查可执行目录中的 ice.log.* 或 ice.bldlog.* 文件，或者检查标准输出和错误文件以获取信息。还可以尝试以下操作：</p>
<ul>
    <li>删除可执行目录并重新构建模型。</li>
    <li>删除可执行目录并重新构建模型。</li>
    <li>确保为您的平台存在一个 Macros.<OS> 文件。修改库的目录路径。</li>
    <li>确保脚本中的所有路径和文件名都设置正确。</li>
    <li>如果对源代码目录中的 ice_model_size.F90 文件进行了更改，它们将被输入模板中的文件覆盖。</li>
</ul>

<h2>10.2 水平重映射中的负冰面积</h2>
<p>当冰模型在检查负冰面积时，会从 ice transport remap.F90 中写出此错误。如果发生在模型集成的较晚阶段，这可能表示 CFL 违规。输出如下所示：</p>
<pre>
60: 新面积 < 0，istep = 119588
60: (my_task, i, j, n) = 4 21 380 1
60: 旧面积 = 0.960675000975677174E-05
60: 新面积 = -0.161808948357841311E-06
60: 净通量 = -0.976855895811461324E-05
60:(shr_sys_abort) 错误：重映射传输：负面积
60:(shr_sys_abort) 警告：调用 shr_mpi_abort() 并停止
60:(shr_mpi_abort)：重映射传输：负面积 0
</pre>
<p>应将动力学时间步长减小，以便通过该问题。请在 namelist 中设置 <code>xndt_dyn = 2</code> 并重新启动模型。当作业完成后，再将该值设置回 1。</p>

<h2>10.3 热力学迭代错误</h2>
<p>此错误由 ice therm vertical.F90 写出，表示冰模型的温度迭代在热力学中未能收敛。通常这是由于强迫问题，但有时也可能是冰的时间步问题。</p>
<p>热力学迭代未收敛</p>
<pre>
istep1, my_task, i, j:
</pre>

<h2>10.4 守恒错误</h2>
<p>此错误由 ice itd.F 写出，表示冰模型在检查守恒场的初始值和最终值时，它们之间的差异超过了一个小值。输出如下所示：</p>
<pre>
守恒错误：vice, add_new_ice
11 : 14 185
初始值 = 1362442.600400560
最终值 = 1362442.600400561
差异 = 2.328306436538696D-10
(shr_sys_abort) 错误：冰模型：守恒错误
(shr_sys_abort) 警告：调用 shr_mpi_abort() 并停止
(shr_mpi_abort)：冰模型：守恒错误 0
</pre>
<p>如果冰模型接收到非常差的强迫，并且无法处理这些问题，就会发生非守恒情况。这种情况通常发生在海洋中的 CFL 违规之后。可以减少海洋中的时间步长，以绕过该问题。</p>

<h2>10.5 NX 无法均匀地划分网格</h2>
<p>如果您修改了冰模型使用的任务数量，模型可能会因以下错误而停止：</p>
<pre>
错误：NX 必须能均匀地划分网格，100,8
</pre>
<p>冰模型使用的 MPI 处理器数量必须能均匀地划分网格的维度。例如，在 gx3v7 网格上使用 8 个任务会导致错误，因为 8 无法均匀地划分 100 个经度点。要修复此错误，请更改主脚本中未耦合冰模型的 <code>$NTASKS</code> 值。在这种情况下，值为 4 会起作用，同时也需要更改任务几何。</p>

<h2>10.6 启用调试器</h2>
<p>本节解释如何设置一些编译器选项以进行调试。对于耦合模型，请在 <code>env_run.xml</code> 脚本中将 <code>DEBUG</code> 设置为 TRUE。在运行模型之前，请务必删除目标文件，以便重新编译源代码。如果生成了核心文件，它将位于可执行目录中。可以使用 <code>dbx</code> 查看核心文件。标准错误和输出文件中也可能会出现有用的信息。</p>

<h1>参考文献</h1>
<ul>
    <li>Bitz, C. M., M. Holland, M. Eby 和 A. J. Weaver, 2001: 在耦合气候模型中模拟冰厚度分布。J. Geophys. Res., 106, 2441–2463。</li>
    <li>Bitz, C. M. 和 W. H. Lipscomb, 1999: 一个能量守恒的海冰热力学模型。J. Geophys. Res., 104, 15,669–15,677。</li>
    <li>Briegleb, B. P. 和 B. Light, 2007: 一个 Delta-Eddington 多重散射参数化模型，用于海冰组件中的太阳辐射。NCAR 技术报告 NCAR/TN-472+STR，国家大气研究中心，科罗拉多州博尔德。</li>
    <li>Hibler, W. D., 1979: 一个动态热力学海冰模型。J. Phys. Oceanogr., 9, 815–846。</li>
    <li>Hunke, E. C., 2001: 使用 evp 模型的粘性-塑性海冰动力学：线性化问题。J. Comp. Phys., 170, 18–38。</li>
    <li>Hunke, E. C. 和 J. K. Dukowicz, 1997: 一个弹性-粘性-塑性海冰动力学模型。J. Phys. Oceanogr., 27, 1849–1867。</li>
    <li>Hunke, E. C. 和 W. H. Lipscomb, 2008: CICE：洛斯阿拉莫斯海冰模型。文档和软件用户手册。版本 4.0。T-3 流体动力学小组，洛斯阿拉莫斯国家实验室，技术报告 LA-CC-06-012。</li>
    <li>Lipscomb, W. H., 2001: 在海冰模型中重新映射厚度分布。J. Geophys. Res., 106, 13,989–14,000。</li>
    <li>Lipscomb, W. H. 和 E. C. Hunke, 2004: 使用增量重映射模型海冰传输。Mon. Wea. Rev., 132, 1341–1354。</li>
    <li>Rothrock, D. A., 1975: 塑性变形过程中的冰包冰能量学分析。J. Geophys. Res., 80, 4514–4519。</li>
    <li>Thorndike, A. S., D. S. Rothrock, G. A. Maykut 和 R. Colony, 1975: 海冰厚度分布。J. Geophys. Res., 80, 4501–4513。</li>
</ul>

</body>
</html>