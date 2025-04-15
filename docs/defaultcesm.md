<div class="chapter">
  <h1><a name="creating_a_case"></a>第2章 创建和设置案例</h1>

  <p>创建<acronym class="acronym">CESM</acronym>实验的第一步是使用<b class="command">create_newcase</b>。</p>
  
  <div class="sect1">
    <h1 class="sect1"><a name="how_to_create_case">如何创建新案例</a></h1>
    <p>
      CESM支持开箱即用的组件集、模型网格和硬件平台。组件集（通常称为compset）既定义了特定CESM配置中将使用的具体模型组件，也定义了该配置特有的组件专属namelist或参数设置。在CESM1.2系列版本（从CESM1.2.0开始）中，组件集和分辨率已进行重大调整，以应对日益增长的模型复杂性需求。现在，组件集和模型网格都关联三个名称：新的长名称、新的短名称（向后兼容旧版CESM1.1系列的长名称）以及新的别名（向后兼容旧版CESM1.1系列的短名称）。
    </p>
    
    <div class="sect2">
      <h2 class="sect2"><a name="compset_names">新组件集命名规范</a></h2>
      <p>新的组件集（compset）长名称格式如下：</p>
      <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
          <tr>
            <td>
              <pre class="screen">
TIME_ATM[%phys]_LND[%phys]_ICE[%phys]_OCN[%phys]_ROF[%phys]_GLC[%phys]_WAV[%phys][_BGC%phys]

TIME = 模型时间段（如2000、20TR、RCP8...）   
ATM  = [CAM4, CAM5, DATM, SATM, XATM]   
LND  = [CLM40, CLM45, DLND, SLND, XLND]   
ICE  = [CICE, DICE, SICE, SICE]   
OCN  = [POP2, DOCN, SOCN, XOCN, AQUAP]   
ROF  = [RTM, DROF, SROF, XROF]   
GLC  = [CISM1, SGLC, XGLC]   
WAV  = [SWAV, XWAV]   
BGC  = 可选的BGC场景                    
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p>举例来说，新的长名称"20TR_CAM4_CLM40%CN_CICE_POP2_RTM_SGLC_SWAV"表示运行包含预报型组件CAM、CLM、RTM、CICE、POP2以及存根组件SGLC和SWAV的配置。该特定配置将采用cam5物理过程、clm4.0物理过程（含clm4.0碳氮循环）、默认预报型cice和pop2，进行1850至2000年的瞬变模拟。该组件集对应的短名称和别名分别为"B_1850-2000_CAM5_CN"和"B20TRC5CN"，这两个名称分别对应CESM1.1系列的长名称和短名称。这三个组件集名称（长名称、短名称或别名）均可作为create_newcase的输入参数。现在创建自定义组件集也变得更加简便（参见"如何创建自定义组件集？"）。所有开箱即用的CESM1.2系列组件集都列在"组件集"列表中，点击任意长名称会弹出显示该组件配置详细信息的对话框。</p>
    </div>
    
    <div class="sect2">
      <h2 class="sect2"><a name="grid_names">新模型网格命名规范</a></h2>
      <p>新的模型网格长名称格式如下：</p>
      <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
          <tr>
            <td>
              <pre class="screen">
a%name_l%name_oi%name_r%name_m%mask_g%name_w%name

a%  = 大气网格 
l%  = 陆地网格 
oi% = 海洋/海冰网格（必须相同） 
r%  = 河流网格 
m%  = 陆地掩膜网格 
g%  = 内部陆地冰（CISM）网格
w%  = 波浪组件网格（CESM1.2系列中不相关） 
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <body>
    <p>例如，新的长名称<strong>a%ne30np4_l%ne30np4_oi%gx1v6_r%r05_m%gx1v6_g%null_w%null</strong>，表示运行以下配置：</p>
    
    <ul>
        <li>大气和陆地网格：ne30np4谱元1度网格</li>
        <li>海洋/海冰网格：gx1v6格陵兰极地1度网格</li>
        <li>河流路由网格：1/2度网格</li>
        <li>波浪和内部冰盖(CISM)网格：空值(null)</li>
        <li>海陆掩膜：由gx1v6海洋掩膜确定</li>
    </ul>

    <p>该网格的短名称和别名分别为<strong>ne30np4_gx1v6</strong>和<strong>ne30_g16</strong>，对应CESM1.1系列的长名称和短名称。这三种网格名称（长名称、短名称或别名）均可作为create_newcase的输入参数。</p>

    <p>现在用户可以更简单地定义新网格（参见"添加用户自定义网格"章节）。所有开箱即用的CESM1.2系列模型网格都列在<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/compsets.html">网格列表</a>中。点击任意长名称将弹出显示该模型网格详细信息的对话框。</p>

    <h3>组件网格命名规范</h3>
    <p>（如大气网格或海洋网格）采用以下命名约定：</p>

    <dl>
        <dt>"[dlat]x[dlon]"</dt>
        <dd>规则经纬度有限体积网格，其中dlat和dlon表示近似网格间距。缩写形式为"fnn"，其中nn通常是表示分辨率的一对数字。例如1.9x2.5或f19表示约"2度"的有限体积网格。注意CAM内部对此类网格使用[nlat]x[nlon]的命名约定。</dd>

        <dt>"Tnn"</dt>
        <dd>谱变换经纬度网格，其中nn表示分辨率的谱截断值。缩写名称相同。例如T85。</dd>

        <dt>"ne[X]np[Y]"</dt>
        <dd>立方球面网格，其中X和Y为整数。缩写通常为ne[X]。例如ne30np4或ne30。</dd>

        <dt>"pt1"</dt>
        <dd>单点网格。</dd>

        <dt>"gx[D]v[n]"</dt>
        <dd>偏移极地网格，其中D表示近似分辨率（度），n表示网格版本。缩写通常为g[D][n]。例如gx1v6或g16表示约1度分辨率的网格。</dd>

        <dt>"tx[D]v[n]"</dt>
        <dd>三极网格，其中D表示近似分辨率（度），n表示网格版本。</dd>
    </dl>
</body>
<div class="sect2">
    <h2 class="sect2"><a name="using_create_newcase">使用create_newcase</a></h2>
    <p>
        首先应使用<b class="command">create_newcase</b>的-h选项查看输入参数说明。此外，
        <b class="command">create_newcase</b> -list [compsets,grids,machine]选项可查看支持的
        组件集、模型网格和机器配置。但前述链接提供的信息更为完整。
        <b class="command">create_newcase</b>可通过以下参数调用：
    </p>
    <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
            <tr>
                <td>
                    <pre class="screen">
create_newcase \     
     -case <i class="emphasis">案例名称</i> \        
     -compset <i class="emphasis">组件集</i> \      
     -res <i class="emphasis">分辨率</i> \         
     -mach <i class="emphasis">机器名称</i> \
     [-compiler <i class="emphasis">编译器名称&gt;</i> \
     [-mpilib <i class="emphasis">MPI库名称</i>] \
     [-mach_dir <i class="emphasis">Machines目录替代路径</i>] \
     [-confopts [_AOA],[AOE],[_D],[_E],[_N],[_P],[_R]] \
     [-pecount [S,M,L,X1,X2]] \
     [-pes_file <i class="emphasis">完整路径名</i>] \
     [-user_compset <i class="emphasis">用户自定义组件集长名称</i>] \
     [-user_grid_file <i class="emphasis">用户XML网格文件完整路径</i>] \
     [-help [或 -h]] |
     [-list <i class="emphasis">[compsets,grids,machines]</i>  \         
     [-silent [或 -s]] \
     [-verbose [或 -v]] \
     [-xmlmode [normal, expert]] \
     [-nowarning]      
                    </pre>
                </td>
            </tr>
        </tbody>
    </table>
    <p>
        <b class="command">create_newcase</b>的必需参数为-case、-mach、-compset和-res。
        如需使用自定义PE布局文件，可通过可选参数-pes_file指定该文件的完整路径。
        所需PE布局文件格式参见<tt class="filename">$CCSMROOT/scripts/sample_pes_file.xml</tt>。
    </p>
    <p> 
        以下是<b class="command">create_newcase</b>的简单示例（其中$<code class="envar">CCSMROOT</code>
        表示CESM发行版的根目录完整路径）：
    </p>
    <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
            <tr>
                <td>
                    <pre class="screen"> 
> cd $<code class="envar">CCSMROOT</code>/scripts 
> create_newcase -case /work/home/yinjiewang/underthesis/default_cesm \ 
  -compset B_1850_CAM5_CN \ 
  -res ne30np4_gx1v6 \
  -mach sugon
                    </pre>
                </td>
            </tr>
        </tbody>
    </table>
    <p>
        此示例创建$<code class="envar">CASEROOT</code>目录<tt class="filename">~/work/home/yinjiewang/underthesis/default_cesm</tt>
        （案例名"default_cesm"），模型分辨率为0.9x1.25_gx1v6（1度大气/陆地网格配合1度海洋/海冰网格，
        使用gx1v6海洋掩膜）。组件集B_1850_CN采用全活跃组件配置模拟现代气候。
        完整示例参见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/c1868.html#use_case_basic">基础案例</a>。
        案例名可包含字母、数字、"."和"_"。注意：若目录已存在，<b class="command">create_newcase</b>
        将显示警告并中止。
    </p>
    <p>
        概括来说，<b class="command">create_newcase</b>会创建由-case参数指定的$<code class="envar">CASEROOT</code>
        目录，其中包含模型构建、运行及长期归档所需的文件。同时创建<tt class="filename">$CASEROOT/Buildconf/</tt>
        目录用于存放生成组件namelist和构建组件库的脚本。下表列出<b class="command">create_newcase</b>
        创建的主要文件和目录：
    </p>
    <div class="table">
        <a name="AEN600"></a>
        <p><b>表2-1. 调用<b class="command">create_newcase</b>生成的内容</b></p>
        <table border="1" bgcolor="#E0E0E0" cellspacing="0" cellpadding="4" class="CALSTABLE">
            <thead>
                <tr>
                    <th>目录/文件名</th>
                    <th>说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>README.case</td>
                    <td>记录<b class="command">create_newcase</b>使用详情的文件，建议用于跟踪运行时问题和修改记录</td>
                </tr>
                <tr>
                    <td>CaseStatus</td>
                    <td>记录当前案例操作历史的文件</td>
                </tr>
                <tr>
                    <td>Buildconf/</td>
                    <td>包含生成组件namelist和构建组件/工具库（如PIO、MCT）脚本的目录，用户无需修改内容（与CESM1.0.5不同）</td>
                </tr>
                <tr>
                    <td>SourceMods/</td>
                    <td>存放修改后源代码的目录</td>
                </tr>
                <tr>
                    <td>LockedFiles/</td>
                    <td>存放锁定文件的目录。XML文件被系统使用后会自动锁定，除非执行'clean'操作否则不可修改（详见<a href="x2017.html">第6章<em>文件锁定机制说明</em></a>），用户不得编辑此目录内容</td>
                </tr>
                <tr>
                    <td>Tools/</td>
                    <td>存放支持工具脚本的目录，用户无需修改内容</td>
                </tr>
                <tr>
                    <td>env_mach_specific</td>
                    <td>设置机器特定环境变量的文件。构建启动后不应再编辑其中的构建环境变量</td>
                </tr>
                <tr>
                    <td>env_case.xml</td>
                    <td>设置案例特定变量（如模型组件、根目录等），案例创建后<i class="emphasis">不可修改</i>，需重新运行<b class="command">create_newcase</b>变更配置</td>
                </tr>
                <tr>
                    <td>env_build.xml</td>
                    <td>设置模型构建参数，包括组件分辨率和配置选项（如CAM_CONFIG_OTPS），详见<a href="../modelnl/env_build.html" target="_top">env_build.xml变量</a></td>
                </tr>
                <tr>
                    <td>env_mach_pes.xml</td>
                    <td>设置组件处理器布局（见<a href="x715.html#case_conf_setting_pes"><em>修改PE布局</em></a>），对负载均衡至关重要（参见<a href="x1516.html">运行负载均衡</a>）</td>
                </tr>
                <tr>
                    <td>env_run.xml</td>
                    <td>设置运行时参数，包括运行时长、重启频率、耦合器诊断输出及短期/长期归档。完整说明参见：
                        <a href="../modelnl/env_run.html#run_start" target="_top">运行初始化变量</a>、
                        <a href="../modelnl/env_run.html#run_stop" target="_top">运行停止变量</a>、
                        <a href="../modelnl/env_run.html#run_restart" target="_top">运行重启控制变量</a>
                    </td>
                </tr>
                <tr>
                    <td><i class="emphasis">cesm_setup</i></td>
                    <td>用于创建$CASE.run脚本和user_nl_xxx文件的案例设置脚本</td>
                </tr>
                <tr>
                    <td><i class="emphasis">$<code class="envar">CASE</code>.$<code class="envar">MACH</code><tt class="filename">.build</tt></i></td>
                    <td>构建组件库和模型可执行文件的脚本</td>
                </tr>
                <tr>
                    <td><i class="emphasis">$<code class="envar">CASE</code>.$<code class="envar">MACH</code><tt class="filename">.clean_build</tt></i></td>
                    <td>清除所有目标文件和库的脚本，同时解锁<tt class="filename">Macros</tt>和<tt class="filename">env_build.xml</tt>，完整重建系统前必须执行</td>
                </tr>
                <tr>
                    <td><i class="emphasis">$<code class="envar">CASE</code>.$<code class="envar">MACH</code><tt class="filename">.l_archive</tt></i></td>
                    <td>长期归档输出数据的脚本（见<a href="c1113.html#running_ccsm_env_output">长期归档</a>），仅当目标机器支持长期归档时创建</td>
                </tr>
                <tr>
                    <td><i class="emphasis">xmlchange</i></td>
                    <td>修改XML文件值的工具</td>
                </tr>
                <tr>
                    <td><i class="emphasis">preview_namelists</i></td>
                    <td>预览组件namelist的工具（生成于$<code class="envar">CASEROOT</code><tt class="filename">/CaseDocs</tt>），注意：用户不得直接编辑CaseDocs中的namelist文件</td>
                </tr>
                <tr>
                    <td><i class="emphasis">check_input_data</i></td>
                    <td>检查并获取输入数据的工具</td>
                </tr>
                <tr>
                    <td><i class="emphasis">create_production_test</i></td>
                    <td>创建案例测试的工具</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>
        关于案例目录结构的完整说明，参见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/x2043.html">第6章<em>案例目录结构详解</em></a>
    </p>
    <p>
        <tt class="filename">env_*.xml</tt>文件中的XML变量会通过<b class="command">$<code class="envar">CASEROOT</code>/Tools/ccsm_getenv</b>
        脚本转换为同名csh环境变量。该转换由多个脚本工具在构建和运行过程中自动完成，用户不可见。
    </p>
    <div class="note">
        <blockquote class="note">
            <p><b>注意：</b>用户只能修改XML变量，不可直接修改csh环境变量。</p>
        </blockquote>
    </div>
    <p>
        $<code class="envar">CASEROOT</code>中XML文件的完整变量列表参见：
        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_case.html" target="_top">案例变量</a>、
        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_mach_pes.html" target="_top">PE布局变量</a>、
        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_build.html" target="_top">构建时变量</a>、
        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_run.html" target="_top">运行时变量</a>
    </p>
</div>
  
  <div class="sect1">
    <h1 class="sect1"><a name="how_to_setup_case">如何设置案例并自定义PE布局</a></h1>
    PE布局（Processor Element Layout）​ 指的是如何将不同的模型组件（如大气、海洋、陆面、海冰等）分配到计算节点的处理器（CPU/GPU）上，以优化计算效率和负载均衡。
    <div class="sect2">
      <h2 class="sect2"><a name="AEN717">调用<b class="command">cesm_setup</b></a></h2>
      <p><b class="command">cesm_setup</b>命令执行以下操作：</p>
      <ul>
        <li><p>如果不存在则创建Macros文件。调用<b class="command">cesm_setup -clean</b>不会删除此文件。</p></li>
        <li><p>创建<tt class="filename">user_nl_xxx</tt>文件(其中xxx表示针对特定案例的组件集合)。<i class="emphasis">在CESM1.2中，这些文件现在是所有用户组件namelist修改的地方。</i></p></li>
        <li><p>创建<tt class="filename">$CASEROOT/$CASE.run</tt>文件，该文件运行<acronym class="acronym">CESM</acronym>模型并执行输出数据的短期归档。</p></li>
      </ul>
      
      <p><b class="command">cesm_setup -clean</b>会将<tt class="filename">$CASEROOT/$CASE.run</tt>和<tt class="filename">env_mach_pes.xml</tt>的副本移动到<tt class="filename">MachinesHist</tt>中的时间戳目录。</p>
      
      <div class="table">
        <p><b>表2-2. 调用<b class="command">cesm_setup</b>的结果</b></p>
        <table border="1" bgcolor="#E0E0E0" cellspacing="0" cellpadding="4" class="CALSTABLE">
          <thead>
            <tr>
              <th>文件或目录</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Macros</td>
              <td>包含目标平台/编译器的机器特定makefile指令的文件</td>
            </tr>
            <tr>
              <td>user_nl_xxx[_NNNN]文件</td>
              <td>用于所有用户对组件namelist修改的文件</td>
            </tr>
            <tr>
              <td>$CASE.run</td>
              <td>包含在所需机器上运行模型的必要批处理指令的文件</td>
            </tr>
            <tr>
              <td>CaseDocs/</td>
              <td>包含运行的所有组件namelist的目录(仅供参考)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="sect2">
      <h2 class="sect2"><a name="case_conf_setting_pes">更改PE布局</a></h2>
      <p><a href="../modelnl/env_mach_pes.html" target="_top"><tt class="filename">env_mach_pes.xml</tt></a>变量确定每个组件的处理器数量、每个组件的实例数量以及组件在硬件处理器上的布局。</p>
      
      <p>示例设置：</p>
      <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
          <tr>
            <td>
              <pre class="screen">
&lt;entry id="NTASKS_OCN" value="128" /&gt;
&lt;entry id="NTHRDS_OCN" value="1" /&gt;
&lt;entry id="ROOTPE_OCN" value="0" /&gt;
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
      
      <p>重要注意事项：</p>
      <ul>
        <li><p>NTASKS必须大于或等于1(即使对于非活动组件)</p></li>
        <li><p>NTHRDS必须大于或等于1</p></li>
        <li><p>分配给组件的硬件处理器总数为NTASKS * NTHRDS</p></li>
        <li><p>耦合器处理器输入指定用于耦合器计算的pes</p></li>
      </ul>
      
      <div class="note">
        <blockquote class="note">
          <p><b>注意：</b>在调用"./cesm_setup"后，<i class="emphasis">不能</i>修改<tt class="filename">env_mach_pes.xml</tt>，除非先调用"cesm_setup -clean"。</p>
        </blockquote>
      </div>
    </div>
  </div>
  


<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">


  <div class="sect1">
    <h1 class="sect1"><a name="multiinst">多实例组件功能</a></h1>
    
    <p>与CESM1.1系列类似，CESM1.2系列也具备在一个模型可执行文件下运行多个组件实例的新功能。使用此功能的唯一注意事项是：如果对任何一个活动组件使用N个多实例，那么所有活动组件都需要使用N个多实例。更多细节将在下文讨论。开发此功能的主要动机是为了能够运行集合卡尔曼滤波器进行数据同化和参数估计（例如不确定性量化）。同时，它也提供了在一个CESM可执行文件中运行一组实验的能力，其中每个实例可以有不同的namelist，并将所有输出定向到一个目录。</p>
    
    <p>以下将以F组件集作为示例说明。使用多实例代码涉及以下步骤：</p>
    
    <ol type="1">
      <li>
        <p>创建案例</p>
        <table border="0" bgcolor="#E0E0E0" width="100%">
          <tbody>
            <tr>
              <td>
                <pre class="screen">
&gt; create_newcase -case Fmulti -compset F -res ne30_g16 -mach hopper
&gt; cd Fmulti
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      
      <li>
        <p>假设hopper的默认PE布局如下：</p>
        <table border="0" bgcolor="#E0E0E0" width="100%">
          <tbody>
            <tr>
              <td>
                <pre class="screen">
&lt;entry id="NTASKS_ATM" value="128" /&gt;    
&lt;entry id="NTHRDS_ATM" value="1" /&gt;    
&lt;entry id="ROOTPE_ATM" value="0" /&gt;    
&lt;entry id="NINST_ATM" value="1" /&gt;    
&lt;entry id="NINST_ATM_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_LND" value="128" /&gt;    
&lt;entry id="NTHRDS_LND" value="1" /&gt;    
&lt;entry id="ROOTPE_LND" value="0" /&gt;    
&lt;entry id="NINST_LND" value="1" /&gt;    
&lt;entry id="NINST_LND_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_ICE" value="128" /&gt;    
&lt;entry id="NTHRDS_ICE" value="1" /&gt;    
&lt;entry id="ROOTPE_ICE" value="0" /&gt;    
&lt;entry id="NINST_ICE" value="1" /&gt;    
&lt;entry id="NINST_ICE_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_OCN" value="128" /&gt;    
&lt;entry id="NTHRDS_OCN" value="1" /&gt;    
&lt;entry id="ROOTPE_OCN" value="0" /&gt;    
&lt;entry id="NINST_OCN" value="1" /&gt;    
&lt;entry id="NINST_OCN_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_GLC" value="128" /&gt;    
&lt;entry id="NTHRDS_GLC" value="1" /&gt;    
&lt;entry id="ROOTPE_GLC" value="0" /&gt;    
&lt;entry id="NINST_GLC" value="1" /&gt;    
&lt;entry id="NINST_GLC_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_WAV" value="128" /&gt;    
&lt;entry id="NTHRDS_WAV" value="1" /&gt;    
&lt;entry id="ROOTPE_WAV" value="0" /&gt;    
&lt;entry id="NINST_WAV" value="1" /&gt;    
&lt;entry id="NINST_WAV_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_CPL" value="128" /&gt;    
&lt;entry id="NTHRDS_CPL" value="1" /&gt;    
&lt;entry id="ROOTPE_CPL" value="0" /&gt;    
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p>对于F组件集，只有atm、lnd、rof是完全预报组件。ocn是规定的数据组件，cice是混合规定/预报组件（冰覆盖率是规定的），glc和wav是存根组件。</p>
        
        <p>假设我们想在这个实验中运行2个CAM实例。当前多实例的实现还要求您运行2个CLM、CICE和RTM实例。但是，您可以选择运行1个或2个DOCN实例（我们可以忽略glc和wav，因为它们在此组件集中不做任何操作）。要运行2个CAM、CLM、CICE、RTM和DOCN实例，您只需将上述NINST_ATM、NINST_LND、NINST_ICE、NINST_ROF和NINST_DOCN从1改为2。这将生成以下<tt class="filename">env_mach_pes.xml</tt>文件：</p>
        
        <table border="0" bgcolor="#E0E0E0" width="100%">
          <tbody>
            <tr>
              <td>
                <pre class="screen">
&lt;entry id="NTASKS_ATM" value="128" /&gt;    
&lt;entry id="NTHRDS_ATM" value="1" /&gt;    
&lt;entry id="ROOTPE_ATM" value="0" /&gt;    
&lt;entry id="NINST_ATM" value="2" /&gt;    
&lt;entry id="NINST_ATM_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_LND" value="128" /&gt;    
&lt;entry id="NTHRDS_LND" value="1" /&gt;    
&lt;entry id="ROOTPE_LND" value="0" /&gt;    
&lt;entry id="NINST_LND" value="2" /&gt;    
&lt;entry id="NINST_LND_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_ICE" value="128" /&gt;    
&lt;entry id="NTHRDS_ICE" value="1" /&gt;    
&lt;entry id="ROOTPE_ICE" value="0" /&gt;    
&lt;entry id="NINST_ICE" value="2" /&gt;    
&lt;entry id="NINST_ICE_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_ROF" value="128" /&gt;    
&lt;entry id="NTHRDS_ROF" value="1" /&gt;    
&lt;entry id="ROOTPE_ROF" value="0" /&gt;    
&lt;entry id="NINST_ROF" value="2" /&gt;    
&lt;entry id="NINST_ROF_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_OCN" value="128" /&gt;    
&lt;entry id="NTHRDS_OCN" value="1" /&gt;    
&lt;entry id="ROOTPE_OCN" value="0" /&gt;    
&lt;entry id="NINST_OCN" value="2" /&gt;    
&lt;entry id="NINST_OCN_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_GLC" value="128" /&gt;    
&lt;entry id="NTHRDS_GLC" value="1" /&gt;    
&lt;entry id="ROOTPE_GLC" value="0" /&gt;    
&lt;entry id="NINST_GLC" value="1" /&gt;    
&lt;entry id="NINST_GLC_LAYOUT" value="concurrent" /&gt;    

&lt;entry id="NTASKS_CPL" value="128" /&gt;    
&lt;entry id="NTHRDS_CPL" value="1" /&gt;    
&lt;entry id="ROOTPE_CPL" value="0" /&gt;    
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p>这样做的结果是，您将有2个CAM、CLM和CICE（规定的）以及RTM实例，每个实例在64个MPI任务上并发运行，而DOCN只有1个实例。</p>
      </li>
      
      <li>
        <p>当调用<b class="command">cesm_setup</b>时，将为每个组件实例生成单独的user_nl_xxx_NNNN文件（其中NNNN是组件实例编号）。特别是，使用上述<tt class="filename">env_mach_pes.xml</tt>文件调用<b class="command">cesm_setup</b>将在$<code class="envar">CASEROOT</code>中生成以下<tt class="filename">user_nl_*</tt>文件：</p>
        
        <table border="0" bgcolor="#E0E0E0" width="100%">
          <tbody>
            <tr>
              <td>
                <pre class="screen">
user_nl_cam_0001
user_nl_cam_0002
user_nl_cice_0001
user_nl_cice_0002
user_nl_clm_0001
user_nl_clm_0002
user_nl_cpl
user_nl_docn_0001
user_nl_docn_0002
user_nl_rtm_0001
user_nl_rtm_0002
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p>以及$CASEROOT/CaseDocs中的以下<tt class="filename">*_in_*</tt>文件和<tt class="filename">*txt*</tt>文件：</p>
        
        <table border="0" bgcolor="#E0E0E0" width="100%">
          <tbody>
            <tr>
              <td>
                <pre class="screen">
atm_in_0001
atm_in_0002
docn.streams.txt.prescribed_0001
docn.streams.txt.prescribed_0002
docn_in_0001
docn_in_0002
docn_ocn_in_0001
docn_ocn_in_0002
drv_flds_in
drv_in
ice_in_0001
ice_in_0002
lnd_in_0001
lnd_in_0002
rof_in_0001
rof_in_0002
                </pre>
              </td>
            </tr>
          </tbody>
        </table>
        
        <p>每个组件实例的namelist可以通过修改相应的user_nl_xxx_NNNN文件来更改。修改user_nl_cam_0002将导致您所做的更改仅对CAM的实例2生效。要更改DOCN流文本文件实例0002，您应将<tt class="filename">docn.streams.txt.prescribed_0002</tt>的副本放在$<code class="envar">CASEROOT</code>中，命名为<tt class="filename">user_docn.streams.txt.prescribed_0002</tt>并进行相应修改。</p>
      </li>
    </ol>
    
    <p>还需要强调以下几点：</p>
    
    <ol type="1">
      <li><p><b class="command">不同的组件实例只能通过namelist设置的差异来区分——它们都使用相同的模型可执行文件。</b></p></li>
      <li><p>CESM1.2系列多实例实现中仅支持1个耦合器组件。</p></li>
      <li><p>由<b class="command">cesm_setup</b>创建的<tt class="filename">user_nl_*</tt>文件在调用<b class="command">cesm_setup -clean</b>时<i class="emphasis">不会被</i>删除。<tt class="filename">Macros</tt>文件也是如此。</p></li>
      <li><p>通常，您应该并发运行多个实例（<tt class="filename">env_mach_pes.xml</tt>中的默认设置）。串行设置仅适用于即将开发的代码实现中的专家用户。</p></li>
    </ol>
  </div>

</body>
<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">


  <div class="sect1">
    <h1 class="sect1"><a name="modifying_xml">修改xml文件</a></h1>
    
    <p>
      您可以直接编辑xml文件来更改变量值。然而，最好使用$<code class="envar">CASEROOT</code>目录中的<b class="command">xmlchange</b>来修改xml变量，因为它在更改xml文件中的值时会执行变量错误检查。要调用<b class="command">xmlchange</b>：
    </p>
    
    <table border="0" bgcolor="#E0E0E0" width="100%">
      <tbody>
        <tr>
          <td>
            <pre class="screen">
xmlchange &lt;entry id&gt;=&lt;value&gt;
-- 或者 --
xmlchange -id &lt;entry id&gt; -val &lt;name&gt; -file &lt;filename&gt;
          [-help] [-silent] [-verbose] [-warn] [-append] [-file]
            </pre>
          </td>
        </tr>
      </tbody>
    </table>
    
    <div class="variablelist">
      <dl>
        <dt><code class="option">-id</code></dt>
        <dd><p>要更改的xml变量名称（必需）</p></dd>
        
        <dt><code class="option">-val</code></dt>
        <dd>
          <p>与-id参数关联的变量的预期值（必需）</p>
          <div class="note">
            <blockquote class="note">
              <p><b>注意：</b>如果您想在-val选项提供的字符串中包含单引号（"'"，也称为撇号），必须将其指定为"&amp;apos;"。</p>
            </blockquote>
          </div>
        </dd>
        
        <dt><code class="option">-file</code></dt>
        <dd><p>要编辑的xml文件（可选）</p></dd>
        
        <dt><code class="option">-silent</code></dt>
        <dd><p>启用静默模式。仅会发出致命消息（可选）</p></dd>
        
        <dt><code class="option">-verbose</code></dt>
        <dd><p>回显<b class="command">create_newcase</b>和<b class="command">cesm_setup</b>所做的所有设置（可选）</p></dd>
        
        <dt><code class="option">-help</code></dt>
        <dd><p>将用法信息打印到STDOUT（可选）</p></dd>
      </dl>
    </div>
  </div>


</body>
<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">


  <div class="sect1">
    <h1 class="sect1"><a name="cloning_case">克隆案例（仅限专家）</a></h1>
    
    <p>这是一个为专家用户提供的高级功能。如果您是新用户，请跳过本节。</p>
    
    <p>如果您有权访问要克隆的运行，<b class="command">create_clone</b>命令将创建一个新案例，同时保留您要克隆案例的本地修改。您可以在$<code class="envar">CCSMROOT</code>或要创建新案例的目录中运行<b class="command">create_clone</b>实用程序。它具有以下参数：</p>
    
    <div class="variablelist">
      <dl>
        <dt><code class="option">-case</code></dt>
        <dd><p>新案例的名称或路径</p></dd>
        
        <dt><code class="option">-clone</code></dt>
        <dd><p>要克隆案例的完整路径名</p></dd>
        
        <dt><code class="option">-silent</code></dt>
        <dd><p>启用静默模式。仅会发出致命消息</p></dd>
        
        <dt><code class="option">-verbose</code></dt>
        <dd><p>回显所有设置</p></dd>
        
        <dt><code class="option">-help</code></dt>
        <dd><p>打印使用说明</p></dd>
      </dl>
    </div>
    
    <p>以下是使用<b class="command">create_clone</b>的最简单示例：</p>
    
    <table border="0" bgcolor="#E0E0E0" width="100%">
      <tbody>
        <tr>
          <td>
            <pre class="screen">
&gt; cd $CCSMROOT/scripts
&gt; create_clone -case $CASEROOT -clone $CLONEROOT 
            </pre>
          </td>
        </tr>
      </tbody>
    </table>
    
    <p><b class="command">create_clone</b>将保留在user_nl_xxxx文件中所做的任何本地namelist修改以及SourceMods树中的任何源代码修改。请注意，新案例目录将与克隆案例目录<i class="emphasis">完全相同</i>，除了原始克隆脚本$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.build、$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.clean_build、$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.run和$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.l_archive将在新案例中具有新名称。</p>
    
    <div class="note">
      <blockquote class="note">
        <p><b>重要提示：</b>不要更改<tt class="filename">env_case.xml</tt>文件中的任何内容。$<code class="envar">CASEROOT</code>/目录现在将显示为刚刚运行<b class="command">create_newcase</b>的状态——除了保留对env_*文件的本地修改。</p>
      </blockquote>
    </div>
    
    <p>另一种复制案例的方法是使用该案例的README.case文件中的信息创建新案例。请注意，这种方法<i class="emphasis">不会</i>保留对原始案例所做的任何本地修改，例如源代码或构建脚本修改；您需要手动导入这些更改。</p>
  </div>


</body>