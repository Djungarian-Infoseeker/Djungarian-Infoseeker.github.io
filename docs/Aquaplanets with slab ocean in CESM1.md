
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aquaplanets with Slab Ocean in CESM1</title>
</head>
<body>

    <h1>Aquaplanets with Slab Ocean in CESM1</h1>
    <p><strong>Brian Medeiros</strong><br>
    <strong>November 13, 2013</strong></p>
    <h2>0. 翻译者注</h2>
    <p>本文由于个人利用需要翻译为中文，从而更为直观的去实现这个内容,但我也修改了很多与我使用情况不太一样的内容。比如将原作者使用的计算机的一些配置更改为我所使用的sugon计算机的配置，撰写本文以便日后重新检查利用。另外由于作者在模式中所用的forcing文件、topo文件、domain文件在ucar的超级计算机服务器当中，我们没有ucar账户的人是获取不到的，所以用ExoCAM当中的initial_file代替<a href="https://github.com/storyofthewolf/ExoCAM/tree/main/cesm1.2.1/initial_files/cam_aqua_fv">ExoCAM中的initial_file</a>
    <a href="https://www2.cesm.ucar.edu/models/simpler-models/files/CAM_aqua_som_description.pdf" download>Aquaplanets with slab ocean in CESM1</a>
    <h2>1. 描述</h2>
    <p>本文档概述了如何在CESM1中配置水星球（Aquaplanet）与平板海洋（slab ocean）模型。本文将介绍所需的边界条件以及如何处理不同选择的选项，如季节变化和海冰的处理方式。当使用CAM5作为大气物理包时，还提供了气溶胶的几种选择，我会简要介绍这些选项。然而，最重要的部分是运行此配置所需的设置步骤。</p>

    <h3>1.1 假设</h3>
    <p>在设置以下示例时，我们做出了一些基本假设。首先，所使用的代码示例是CESM1.2.1。我已经验证了这些修改在使用FV动力核心的此版本代码中能够正常工作，这些修改应该也适用于类似版本以及SE动力核心。尽管如此，这些修改后的案例并没有经过严格的审查，可能存在一些遗漏。如果您发现任何重要细节，请告诉我，我会将其添加到这份伪文档中。</p>

    <p>以下所有内容都使用了CESM的标准脚本工作流，该工作流在CESM教程中有介绍。在接下来的两步中，我做了一些修改，要求在模型代码中具有写入权限，因此，如果您按照这个例子进行操作，需要将模型代码检出到您的个人沙箱中。</p>

    <h2>2. 基本水星球配置</h2>
    <p>在这个示例中，我们将设置一个没有海冰的水星球配置，并使用平板海洋模型。使用的是1.9°网格上的FV动力核心与CAM5物理模块，且使用了指定的气溶胶模型。</p>
    <h3>2.1 网格定义</h3>
  <p>我选择将网格设置硬编码到模型（CESM1.2）中，虽然也有其他方法可以实现相同的效果。在此案例中，我修改了 <code>config_grid.xml</code> 文件，以包含新的配置：</p>

<pre><code>
<GRID 
  sname="1.9x2.5_gx1v6_r01" 
  alias="f19_g16_r01" 
  compset="(DOCN|XOCN|SOCN|AQUAP)">a%1.9x2.5_l%1.9x2.5_oi%gx1v6_r%r01_m%gx1v6_g%null_w%null
</GRID>

</code></pre>


    <p>在这里，关键的操作是将海洋网格与大气网格设置为相同的网格。此外，已将掩膜网格设置为 <code>null</code>。在 <code>config_grid.xml</code> 文件的进一步配置中，我还取消了域文件的设置，稍后我们可以通过命名列表来设置这些值。</p>

    <pre><code>&lt;griddom grid="1.9x2.5" mask="custom"&gt;
    &lt;ICE_DOMAIN_FILE&gt;UNSET&lt;/ICE_DOMAIN_FILE&gt;
    &lt;OCN_DOMAIN_FILE&gt;UNSET&lt;/OCN_DOMAIN_FILE&gt;
&lt;/griddom&gt;</code></pre>

    <p>（<code>config_grid.xml</code> 文件位于 <code>ccsm_utils/Case.template 目录下。）</p>

    <h3>2.2 新的使用案例</h3>
    <p>目前已有一些适用于水星球的CAM用例，它们在大多数情况下运行良好。然而，当应用平板海洋时，这些用例不能直接使用，因为 <code>aqua_planet</code> 命名列表参数会触发海洋组件使用分析SST代码。为了解决这个问题，可以将水星球的用例复制到一个新的用例文件，并删除 <code>aqua_planet</code> 选项（或将其设置为 <code>false</code>）。这些用例只是存储在模型目录 <code>cesm1_2_1/models/atm/cam/bld/namelist_files/use_cases</code> 中的命名列表参数。</p>


    <h3>2.3 设置案例</h3>
    <p>第一步是创建案例，和往常一样。我们可以使用CESM的选项来即时创建一个包含大气和平板海洋模型的配置集，同时为所有其他组件提供存根。这样就排除了海冰，但稍后我们会讨论如何处理海冰。</p>

    <pre><code>./create_newcase -case /work/home/yinjiewang/slab_ocean/slab_aquaplanet_case -user_compset 2000_CAM5_SLND_SICE_DOCN%SOM_SROF_SGLC_SWAV -res f19_f19_AQUA -mach sugon</code></pre>

    <p>到此为止，我们已经准备好设置案例：</p>

    <pre><code>cd /work/home/yinjiewang/slab_ocean/slab_aquaplanet_case
./cesm_setup</code></pre>

    <p>在没有海冰的示例配置中，我还希望使用“传统”的水星球设置，即常年春分的轨道参数。这是通过在 <code>user_nl_cpl</code> 命名列表中设置以下值来实现的：</p>

    <pre><code>
orb_eccen = 0.
orb_obliq = 0.
orb_mvelp = 0.
orb_mode = 'fixed_parameters'
</code></pre>

    <p>我们还需要对CAM的命名列表进行一些更改。首先，由于没有激活 <code>aqua_planet</code> 命名列表参数，因此在编译时不会触发一些便利代码。最重要的变化是没有设置表面重力势为零。我们可以通过提供一个修改后的地形边界条件文件来避免修改代码，将其设置为零。</p>

    <p>此外，由于示例中使用的是CAM5物理模块，我们还需要决定如何处理气溶胶。一个选择是使用“整体气溶胶”模型。我们可以在 <code>user_nl_cam</code> 命名列表中做如下更改：</p>

    <pre><code>
prescribed_aero_model = ‘bulk’
bnd_topo = ‘/work/home/yinjiewang/ExoCAM/cesm1.2.1/initial_files/cam_aqua_fv/USGS-gtopo_aquaplanet_1.9x2.5.nc’</code></pre>

    <p>在继续之前，我们还需要确保在模型配置期间识别气溶胶选择，并在 <code>env_build.xml</code> 文件中提供：</p>

    <pre><code>env_build.xml
&lt;entry id="CAM_CONFIG_OPTS" value="-phys cam5-chem none" /&gt;</code></pre>

    <p>要运行平板海洋模型，还需要两个文件。第一个是域文件，在数据海洋命名列表中指定，该文件指定哪些网格点为海洋和陆地。为了构建水星球版本，修改了现有文件以去除陆地。第二个是“强迫”文件，指定海洋层的深度和温度以及“qflux”。在这个示例中，我提供了一个版本，其中混合层深度为50米，温度为288K，并且没有qflux。</p>

    <pre><code>
domainfile = ‘/work/home/yinjiewang/ExoCAM/cesm1.2.1/initial_files/cam_aqua_fv/domain.ocn.1.9x2.5_aquaplanet.nc’</code></pre>

    <p>强迫文件在名为 <code>user_docn.streams.txt.som</code> 的文件中指定。该文件的内容可以从以前的平板海洋案例中复制。在这个示例中，文件内容如下：</p>
<pre><code>&lt;dataSource&gt;
  GENERIC
&lt;/dataSource&gt;
&lt;domainInfo&gt;
  &lt;variableNames&gt;
    time    time
    xc      lon
    yc      lat
    area    area
    mask    mask
  &lt;/variableNames&gt;
  &lt;filePath&gt;
    /glade/scratch/brianpm
  &lt;/filePath&gt;
  &lt;fileNames&gt;
    cam5.som.forcing.aquaplanet.Q0h50m.fv19.nc
  &lt;/fileNames&gt;
&lt;/domainInfo&gt;
&lt;fieldInfo&gt;
  &lt;variableNames&gt;
    T       t
    S       s
    U       u
    V       v
    dhdx    dhdx
    dhdy    dhdy
    hblt    h
    qdp     qbot
  &lt;/variableNames&gt;
  &lt;filePath&gt;
    /glade/scratch/brianpm
  &lt;/filePath&gt;
  &lt;fileNames&gt;
    cam5.som.forcing.aquaplanet.Q0h50m.fv19.nc
  &lt;/fileNames&gt;
  &lt;offset&gt;
    0
  &lt;/offset&gt;
&lt;/fieldInfo&gt;</code></pre>


    <p>我们还需要在 <code>env_run.xml</code> 中指定我们的新用例：</p>

    <pre><code>
&lt;entry id="CAM_NML_USE_CASE" value="SOM_aquaplanet_cam5" /&gt;
&lt;entry id="DOCN_SOM_FILENAME" value="/work/home/yinjiewang/ExoCAM/cesm1.2.1/initial_files/cam_aqua_fv/pop_frc.1.9x2.5d.090130_aquaplanet_0OHT_Earth.nc" /&gt;</code></pre>

    <p>到这一步，模型可以编译并运行。记得调整账户号码、运行时设置等。</p>

    <pre><code>./slab_aquaplanet_case.build
./slab_aquaplanet_case.submit</code></pre>
    <h2>3. 海冰（SEA-ICE）</h2>
    <p>在水星球使用平板海洋模型时，主要问题是动态海冰模型。本质上，海冰动力学只能在位移极点网格（如 gx1v6）上运行。当移除陆地后，极点暴露，海冰模型因此失效。在上述示例中，我们在与大气相同的网格上运行了平板海洋模型，但未包含海冰模型。</p>
    <p>如果在水星球设置中需要海冰，目前唯一可行的选项是以热力模式运行海冰。实现这一目标的一种方法是设置一个类似 AMIP 的案例，然后修改海冰以使用热力学代码。</p>

    <pre><code>create_newcase -case /glade/scratch/[case] -compset F_2000 -res f19_f19 -mach yellowstone</code></pre>

    <p>接下来编辑 <code>user_nl_cice</code> 文件：</p>

    <pre><code>user_nl_cice
kitd = 1
prescribed_ice = .false.
tr_aero = .true.
tr_fy = .true.
tr_iage = .true.</code></pre>

    <p>参数 <code>kitd</code> 控制是否使用海冰热力学。我们也可以包含 <code>kdyn = 0</code> 来明确指定不使用海冰动力学（虽然在这个配置集中它已经默认被设为 0）。</p>

    <p>将模式更改为平板海洋模式，通过修改 <code>env_run.xml</code>：</p>

    <pre><code>&lt;!-- DOCN mode, valid values: prescribed, som, copyall, null (char) --&gt;
&lt;entry id="DOCN_MODE" value="som" /&gt;
&lt;!-- Sets SOM forcing data filename for pres runs, only used in D and E compset (char) --&gt;
&lt;entry id="DOCN_SOM_FILENAME" value="[forcing file]" /&gt;</code></pre>

    <p>然后按照正常步骤继续操作。</p>
    <p>这种方法对包含热力海冰的水星球-SOM模式不完全适用。问题在于配置集假设存在陆地区域，即使指定了域文件，模型仍可能崩溃。</p>
    <p>要运行包含热力海冰的水星球-SOM模式，可以采取类似的路径，但需要更复杂的 <code>create_newcase</code> 调用。以下是一个示例：</p>

    <pre><code>./create_newcase -case /glade/scratch/brianpm/AquaSOM_CICE -user_compset 2000_CAM5_SLND_CICE_DOCN%SOM_SROF_SGLC_SWAV -res f19_f19_AQUA -mach yellowstone</code></pre>

    <p>请注意，我使用了与上述无海冰案例相同的网格规范。唯一的变化是指定了一个海冰模型。</p>

    <p>新的 <code>user_nl_cice</code> 文件应包含以下内容：</p>

    <pre><code>user_nl_cice
kdyn = 0
kitd = 1
prescribed_ice = .false.
tr_aero = .true.
tr_fy = .true.
tr_iage = .true.
grid_file = ‘/glade/scratch/brianpm/domain.ocn.1.9x2.5_AQUAPLANET.nc’
kmt_file = ‘/glade/scratch/brianpm/domain.ocn.1.9x2.5_AQUAPLANET.nc’
grid_type = ‘latlon’
grid_format = ‘nc’
kstrength = 0</code></pre>

    <p>与上述相比，这是更广泛的设置。现在需要指定 <code>grid_file</code> 和 <code>kmt_file</code> 为域文件。添加 <code>kdyn</code> 参数只是为了明确说明。此外，<code>grid_type</code>、<code>grid_format</code> 和 <code>kstrength</code> 参数是通过试验和错误确定为必要的。</p>
    <p>其他更改遵循之前的描述：</p>
    <ul>
        <li>修改 <code>env_run.xml</code>，包括 <code>DOCN_MODE</code>、<code>DOCN_SOM_FILENAME</code>，以及（可选的）<code>CAM_NML_USE_CASE</code>。</li>
        <li><code>user_nl_cam</code> 应指定地形边界条件，以及任何其他 CAM 选项（如气溶胶）。</li>
        <li><code>user_nl_docn</code> 应指定域文件。</li>
        <li><code>user_docn.streams.txt.som</code> 应包含上述相同的信息。</li>
        <li><code>user_nl_cpl</code> 应指定任何必要的轨道参数更改。</li>
        <li><code>env_build.xml</code> 应与此处的选择保持一致。</li>
        <li>根据需要修改 <code>[case].run</code> 文件的项目编号和运行时设置。</li>
    </ul>

    <h2>4. 气溶胶（AEROSOL）</h2>
    <p>在水星球的大气中应使用哪种气溶胶？这一选择是任意的，但可能会影响模拟的某些方面。对于 CAM4 物理模块，有一个更明确的约定，即气溶胶不与辐射相互作用；同时，在 CAM4 中气溶胶也不与云相互作用，因此结果是一个“无气溶胶”的水星球。这是 CFMIP2 水星球实验的推荐做法，遵循 APE。</p>
    <p>对于 CAM5，气溶胶对云有间接影响，但没有标准方法可以“关闭”气溶胶效应。以下是一些可在 CAM5 水星球配置中应用的选项：</p>

    <pre><code>env_build.xml
&lt;entry id="CAM_CONFIG_OPTS" value="-phys cam5-chem OPTION" /&gt;</code></pre>

    <p>其中，<code>OPTION</code> 可以填充多个值，但这里需要考虑的只有 <code>none</code> 和 <code>trop_mam3</code>。</p>

</body>
</html>
