
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
    <p>本文由于个人利用需要翻译为中文，从而更为直观的去实现这个内容。与此同时将原作者使用的计算机的一些配置更改为我所使用的sugon计算机的配置，撰写本文以便日后重新检查利用。原文链接：- [Aquaplanets with slab ocean in CESM1](https://www2.cesm.ucar.edu/models/simpler-models/files/CAM_aqua_som_description.pdf)</p>

    <h2>1. 描述</h2>
    <p>本文档概述了如何在CESM1中配置水星球（Aquaplanet）与平板海洋（slab ocean）模型。本文将介绍所需的边界条件以及如何处理不同选择的选项，如季节变化和海冰的处理方式。当使用CAM5作为大气物理包时，还提供了气溶胶的几种选择，我会简要介绍这些选项。然而，最重要的部分是运行此配置所需的设置步骤。</p>

    <h3>1.1 假设</h3>
    <p>在设置以下示例时，我们做出了一些基本假设。首先，所使用的代码示例是CESM1.2.0，这是写作时的最新版本。我已经验证了这些修改在使用FV动力核心的此版本代码中能够正常工作，这些修改应该也适用于类似版本以及SE动力核心。尽管如此，这些修改后的案例并没有经过严格的审查，可能存在一些遗漏。如果您发现任何重要细节，请告诉我，我会将其添加到这份伪文档中。</p>

    <p>以下所有内容都使用了CESM的标准脚本工作流，该工作流在CESM教程中有介绍。在接下来的两步中，我做了一些修改，要求在模型代码中具有写入权限，因此，如果您按照这个例子进行操作，需要将模型代码检出到您的个人沙箱中。</p>

    <h2>2. 基本水星球配置</h2>
    <p>在这个示例中，我们将设置一个没有海冰的水星球配置，并使用平板海洋模型。使用的是2°网格上的FV动力核心与CAM5物理模块，且使用了指定的气溶胶模型。</p>

    <h3>2.1 网格定义</h3>
  <p>我选择将网格设置硬编码到模型（CESM1.2）中，虽然也有其他方法可以实现相同的效果。在此案例中，我修改了 <code>config_grid.xml</code> 文件，以包含新的配置：</p>

    <pre><code>&lt;GRID sname="1.9x2.5_1.9x2.5_AQUA" alias="f19_f19_AQUA" compset="(DOCN|XOCN|SOCN|AQUAP)"&gt;
    a%1.9x2.5_l%1.9x2.5_oi%1.9x2.5_r%r05_m%null_g%null_w%null
&lt;/GRID&gt;</code></pre>

    <p>在这里，关键的操作是将海洋网格与大气网格设置为相同的网格。此外，已将掩膜网格设置为 <code>null</code>。在 <code>config_grid.xml</code> 文件的进一步配置中，我还取消了域文件的设置，稍后我们可以通过命名列表来设置这些值。</p>

    <pre><code>&lt;griddom grid="1.9x2.5" mask="custom"&gt;
    &lt;ICE_DOMAIN_FILE&gt;UNSET&lt;/ICE_DOMAIN_FILE&gt;
    &lt;OCN_DOMAIN_FILE&gt;UNSET&lt;/OCN_DOMAIN_FILE&gt;
&lt;/griddom&gt;</code></pre>

    <p>（<code>config_grid.xml</code> 文件位于 <code>cesm1_2_1/scripts/ccsm_utils/Case.template</code> 目录下。）</p>

    <h3>2.2 新的使用案例</h3>
    <p>目前已有一些适用于水星球的CAM用例，它们在大多数情况下运行良好。然而，当应用平板海洋时，这些用例不能直接使用，因为 <code>aqua_planet</code> 命名列表参数会触发海洋组件使用分析SST代码。为了解决这个问题，可以将水星球的用例复制到一个新的用例文件，并删除 <code>aqua_planet</code> 选项（或将其设置为 <code>false</code>）。这些用例只是存储在模型目录 <code>cesm1_2_0/models/atm/cam/bld/namelist_files/use_cases</code> 中的命名列表参数。</p>


    <h3>2.3 设置案例</h3>
    <p>第一步是创建案例，和往常一样。我们可以使用CESM的选项来即时创建一个包含大气和平板海洋模型的配置集，同时为所有其他组件提供存根。这样就排除了海冰，但稍后我们会讨论如何处理海冰。</p>

    <pre><code>create_newcase -case /glade/p/work/brianpm/my_cases/CAM5AquaSOM_noice -user_compset 2000_CAM5_SLND_SICE_DOCN%SOM_SROF_SGLC_SWAV -res f19_f19_AQUA -mach yellowstone</code></pre>

    <p>到此为止，我们已经准备好设置案例：</p>

    <pre><code>cd /glade/p/work/brianpm/my_cases/CAM5AquaSOM_noice
./cesm_setup</code></pre>

    <p>在没有海冰的示例配置中，我还希望使用“传统”的水星球设置，即常年春分的轨道参数。这是通过在 <code>user_nl_cpl</code> 命名列表中设置以下值来实现的：</p>

    <pre><code>user_nl_cpl
orb_eccen = 0.
orb_obliq = 0.
orb_mvelp = 0.
orb_mode = ‘fixed_parameters’</code></pre>

    <p>我们还需要对CAM的命名列表进行一些更改。首先，由于没有激活 <code>aqua_planet</code> 命名列表参数，因此在编译时不会触发一些便利代码。最重要的变化是没有设置表面重力势为零。我们可以通过提供一个修改后的地形边界条件文件来避免修改代码，将其设置为零。</p>

    <p>此外，由于示例中使用的是CAM5物理模块，我们还需要决定如何处理气溶胶。一个选择是使用“整体气溶胶”模型。我们可以在 <code>user_nl_cam</code> 命名列表中做如下更改：</p>

    <pre><code>user_nl_cam
prescribed_aero_model = ‘bulk’
bnd_topo = ‘/glade/scratch/brianpm/AQUA_TOPO.nc’</code></pre>

    <p>在继续之前，我们还需要确保在模型配置期间识别气溶胶选择，并在 <code>env_build.xml</code> 文件中提供：</p>

    <pre><code>env_build.xml
&lt;entry id="CAM_CONFIG_OPTS" value="-phys cam5-chem none" /&gt;</code></pre>

    <p>要运行平板海洋模型，还需要两个文件。第一个是域文件，在数据海洋命名列表中指定，该文件指定哪些网格点为海洋和陆地。为了构建水星球版本，修改了现有文件以去除陆地。第二个是“强迫”文件，指定海洋层的深度和温度以及“qflux”。在这个示例中，我提供了一个版本，其中混合层深度为50米，温度为288K，并且没有qflux。</p>

    <pre><code>user_nl_docn
domainfile = ‘/glade/scratch/brianpm/domain.ocn.1.9x2.5_AQUAPLANET.nc’</code></pre>

    <p>强迫文件在名为 <code>user_docn.streams.txt.som</code> 的文件中指定。该文件的内容可以从以前的平板海洋案例中复制。在这个示例中，文件内容如下：</p>

    <pre><code>user_docn.streams.txt.som
<dataSource>GENERIC</dataSource>
<domainInfo>
<variableNames>
time time xc yc area mask lon lat area mask
</variableNames>
<filePath>/glade/scratch/brianpm</filePath>
<fileNames>
cam5.som.forcing.aquaplanet.Q0h50m.fv19.nc
</fileNames>
</domainInfo>
<fieldInfo>
<variableNames>
T S U V t s u v dhdx dhdx dhdy dhdy hblt h qdp qbot
</variableNames>
<filePath>/glade/scratch/brianpm</filePath>
<fileNames>
cam5.som.forcing.aquaplanet.Q0h50m.fv19.nc
</fileNames>
<offset>0</offset>
</fieldInfo></code></pre>

    <p>我们还需要在 <code>env_run.xml</code> 中指定我们的新用例：</p>

    <pre><code>env_run.xml
&lt;entry id="CAM_NML_USE_CASE" value="SOM_aquaplanet_cam5" /&gt;
&lt;entry id="DOCN_SOM_FILENAME" value="/glade/scratch/brianpm/som.forcing.aquaplanet.Q0h50m.fv19.nc" /&gt;</code></pre>

    <p>到这一步，模型可以编译并运行。记得调整账户号码、运行时设置等。</p>

    <pre><code>./slab_aquaplanet_case.build
./slab_aquaplanet_case.submit</code></pre>

</body>
</html>