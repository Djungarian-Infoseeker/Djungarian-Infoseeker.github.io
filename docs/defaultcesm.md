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
                    <td>存放锁定文件的目录。XML文件被系统使用后会自动锁定，除非执行'clean'操作否则不可修改（详见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/x2017.html">第6章<em>文件锁定机制说明</em></a>），用户不得编辑此目录内容</td>
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
                    <td>设置模型构建参数，包括组件分辨率和配置选项（如CAM_CONFIG_OTPS），详见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_build.html" target="_top">env_build.xml变量</a></td>
                </tr>
                <tr>
                    <td>env_mach_pes.xml</td>
                    <td>设置组件处理器布局（见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/x715.html#case_conf_setting_pes"><em>修改PE布局</em></a>），对负载均衡至关重要（参见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/x1516.html">运行负载均衡</a>）</td>
                </tr>
                <tr>
                    <td>env_run.xml</td>
                    <td>设置运行时参数，包括运行时长、重启频率、耦合器诊断输出及短期/长期归档。完整说明参见：
                        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_run.html#run_start" target="_top">运行初始化变量</a>、
                        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_run.html#run_stop" target="_top">运行停止变量</a>、
                        <a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/modelnl/env_run.html#run_restart" target="_top">运行重启控制变量</a>
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
                    <td>长期归档输出数据的脚本（见<a href="https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/c1113.html#running_ccsm_env_output">长期归档</a>），仅当目标机器支持长期归档时创建</td>
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
    <h1 class="sect1"><a name="how_to_setup_case">案例设置与PE布局定制</a></h1>
    
    <div class="sect2">
        <h2 class="sect2"><a name="AEN717">调用<b class="command">cesm_setup</b></a></h2>
        <p><b class="command">cesm_setup</b>命令执行以下操作：</p>
        <ul>
            <li><p>若不存在则创建Macros文件。调用<b class="command">cesm_setup -clean</b>不会删除此文件。</p></li>
            <li><p>创建<tt class="filename">user_nl_xxx</tt>文件（xxx表示特定案例的组件集合）。例如对于B_组件集，xxx可能包含[cam,clm,rtm,cice,pop2,cpl]。<i class="emphasis">在CESM1.2中，这些文件是用户修改组件namelist的唯一位置。</i> <b class="command">cesm_setup -clean</b>不会删除这些文件。</p></li>
            <li><p>创建<tt class="filename">$CASEROOT/$CASE.run</tt>文件用于运行CESM模型并执行短期数据归档（参见<a href="c1113.html">运行CESM</a>）。该文件包含在指定机器上按PE布局运行模型所需的批处理指令。<i class="emphasis">必须</i>在调用<b class="command">cesm_setup</b><i class="emphasis">之前</i>完成对<tt class="filename">env_mach_pes.xml</tt>的修改。最简单情况下可不修改该文件直接使用默认设置。<b class="command">cesm_setup</b>必须在$<code class="envar">CASEROOT</code>目录执行。</p></li>
        </ul>

        <p><b class="command">cesm_setup -clean</b>会将<tt class="filename">$CASEROOT/$CASE.run</tt>和<tt class="filename">env_mach_pes.xml</tt>副本移动到<tt class="filename">MachinesHist</tt>时间戳目录。此时$<code class="envar">CASEROOT</code>目录状态等同于刚执行<b class="command">create_newcase</b>后的状态（但已创建的Macros和user_nl_xxx文件会保留，<tt class="filename">env_*.xml</tt>的本地修改也会保留）。完成对<tt class="filename">env_mach_pes.xml</tt>的进一步修改后，必须重新运行<b class="command">cesm_setup</b>才能构建和运行模型。</p>

        <p>若在调用<b class="command">cesm_setup</b>后需要修改<tt class="filename">env_mach_pes.xml</tt>变量，必须先执行<b class="command">cesm_setup -clean</b>再运行<b class="command">cesm_setup</b>。</p>

        <p>下表汇总了<b class="command">cesm_setup</b>创建的新目录和文件。更多案例目录文件说明参见<a href="x2043.html">第6章<em>案例目录结构详解</em></a>。</p>

        <div class="table">
            <a name="AEN761"></a>
            <p><b>表2-2. 调用<b class="command">cesm_setup</b>生成的内容</b></p>
            <table border="1" bgcolor="#E0E0E0" cellspacing="0" cellpadding="4" class="CALSTABLE">
                <thead>
                    <tr>
                        <th>文件/目录</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Macros</td>
                        <td>包含目标平台/编译器特定make指令的文件。<i class="emphasis">仅在首次</i>调用<b class="command">cesm_setup</b>时创建。<b class="command">cesm_setup -clean</b>不会删除已创建的Macros文件。</td>
                    </tr>
                    <tr>
                        <td>user_nl_xxx[_NNNN]文件</td>
                        <td>用户修改组件namelist的文件。xxx表示目标组件集合，NNNN范围0001到该组件的实例数（参见<a href="c1868.html">多实例</a>说明）。例如B_组件集的xxx为[cam,clm,rtm,cice,pop2,cpl]。默认单实例情况下文件名不包含NNNN。每种user_nl文件仅创建一次。<b class="command">cesm_setup -clean</b>不会删除这些文件。修改<tt class="filename">env_mach_pes.xml</tt>中的实例数只会新增user_nl文件到$<code class="envar">CASEROOT</code>。</td>
                    </tr>
                    <tr>
                        <td>$CASE.run</td>
                        <td>包含按PE布局在目标机器运行CESM模型所需的批处理指令，同时处理短期数据归档（参见<a href="c1113.html">运行CESM</a>）。</td>
                    </tr>
                    <tr>
                        <td>CaseDocs/</td>
                        <td>存放运行时所有组件namelist的目录。这些文件<i class="emphasis">仅供参考不可编辑</i>，构建和运行时会被覆盖。</td>
                    </tr>
                    <tr>
                        <td>env_derived</td>
                        <td>包含从其他设置派生的环境变量。<i class="emphasis">禁止</i>用户修改。</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="sect2">
        <h2 class="sect2"><a name="case_conf_setting_pes">修改PE布局</a></h2>
        <p><a href="../modelnl/env_mach_pes.html" target="_top"><tt class="filename">env_mach_pes.xml</tt></a>变量决定各组件的处理器数量、实例数量以及在硬件处理器上的分布方式。<a href="x1516.html">负载均衡</a>优化通常需要定制处理器(PE)布局。CESM在组件硬件分配方面具有高度灵活性，通常大气(atm)、陆地(lnd)、海洋(ocn)、海冰(ice)、冰盖(glc)、河流(rof)和耦合器(cpl)组件可运行在重叠或独立的处理器上。每个组件关联独立的MPI通信域，而驱动运行在所有处理器的合集上控制执行序列和硬件分区。组件处理器布局通过三个参数设置：MPI任务数、每个任务的OpenMP线程数、以及全局MPI任务中的起始处理器编号。</p>

        <p>例如以下<tt class="filename">env_mach_pes.xml</tt>设置：</p>
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
        <p>将使海洋组件运行在128个硬件处理器上（128个MPI任务，单线程/任务），从全局MPI任务0开始。</p>

        <p>再看以下示例：</p>
        <table border="0" bgcolor="#E0E0E0" width="100%">
            <tbody>
                <tr>
                    <td>
                        <pre class="screen">
&lt;entry id="NTASKS_ATM" value="16" /&gt;
&lt;entry id="NTHRDS_ATM" value="4" /&gt;
&lt;entry id="ROOTPE_ATM" value="32" /&gt;
                        </pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>大气组件将使用64个硬件处理器（16个MPI任务，每个任务4线程），从全局MPI任务32开始。<tt class="filename">env_mach_pes.xml</tt>中每个组件都有NTASKS、NTHRDS和ROOTPE参数，需注意：</p>
        <ul>
            <li><p>NTASKS必须≥1（即使对于非活跃的存根组件）</p></li>
            <li><p>NTHRDS必须≥1。设为1通常表示关闭该组件的线程并行。绝对不可设为0</p></li>
            <li><p>组件占用的硬件处理器总数=NTASKS * NTHRDS</p></li>
            <li><p>耦合器参数指定用于映射、合并、诊断和通量计算的处理器，与运行在所有处理器上管理并发和序列的驱动不同</p></li>
            <li><p>起始处理器编号是相对于全局MPI通信域而非硬件处理器计数（见下例）</p></li>
            <li><p>处理器布局不影响科学计算。执行序列由驱动固定，改变布局不会改变内在耦合延迟或序列。<i class="emphasis">重要提示</i>：全活跃配置中大气组件永远不会与陆地/海冰组件并发运行，因此没有理由不让大气与陆地/海冰组件重叠。在此约束之外，陆地、海冰、耦合器和海洋模型可以并发运行，海洋也可与大气并发</p></li>
            <li><p>若所有组件的NTASKS、NTHRDS和ROOTPE相同，则所有组件将顺序运行在相同硬件处理器上</p></li>
        </ul>

        <p>起始处理器编号是相对于全局MPI通信域而非硬件处理器计数。例如：</p>
        <table border="0" bgcolor="#E0E0E0" width="100%">
            <tbody>
                <tr>
                    <td>
                        <pre class="screen">
&lt;entry id="NTASKS_ATM" value="16" /&gt;
&lt;entry id="NTHRDS_ATM" value="4" /&gt;
&lt;entry id="ROOTPE_ATM" value="0" /&gt;
&lt;entry id="NTASKS_OCN" value="64" /&gt;
&lt;entry id="NTHRDS_OCN" value="1" /&gt;
&lt;entry id="ROOTPE_OCN" value="16" /&gt;
                        </pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>大气和海洋并发运行，各占64个处理器：大气运行在MPI任务0-15（前64个硬件处理器，16×4分布），海洋运行在MPI任务16-79（后续64个处理器）。批处理脚本($CASE.run)会自动申请128个硬件处理器。</p>

        <p>若将ROOTPE_OCN设为64，则会申请176个处理器：大气占用前64个（MPI任务0-15），海洋占用113-176（MPI任务64-127），而65-112号处理器处于空闲状态。</p>

        <div class="note">
            <blockquote class="note">
                <p><b>注意：</b>调用"./cesm_setup"后<i class="emphasis">不可</i>直接修改<tt class="filename">env_mach_pes.xml</tt>，必须先执行"cesm_setup -clean"。修改PE布局示例参见<a href="x1927.html">第6章<em>如何修改处理器数量和组件布局？</em></a></p>
            </blockquote>
        </div>
    </div>
</div>
<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">
<div class="NAVHEADER">
<table summary="Header navigation table" width="100%" border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr><th colspan="3" align="center">CESM用户指南（CESM1.2发行系列用户指南）（<a href="ug.pdf" target="_top">PDF</a>）</th></tr>
<tr>
<td width="10%" align="left" valign="bottom"><a href="x715.html" accesskey="P">上一页</a></td>
<td width="80%" align="center" valign="bottom">第二章 创建与设置案例</td>
<td width="10%" align="right" valign="bottom"><a href="x886.html" accesskey="N">下一页</a></td>
</tr>
</tbody>
</table>
<hr align="LEFT" width="100%">
</div>

<div class="sect1">
<h1 class="sect1"><a name="multiinst">多实例组件功能</a></h1>

<p>与CESM1.1系列相同，CESM1.2系列也新增了在单一模型可执行文件下运行多个组件实例的能力。唯一需要注意的是：如果某个活跃组件需要运行N个实例，则所有活跃组件都必须运行N个实例。下文将详细讨论该功能。此功能最初是为实现集合卡尔曼滤波（用于数据同化和参数估计，如不确定性量化）而开发，同时也支持用户在单个CESM可执行文件中运行多组实验，每个实例可使用不同的namelist配置，并将所有输出集中到同一目录。</p>

<p>以下以F组件集为例说明多实例功能的使用步骤：</p>

<ol type="1">
<li>
<p>创建案例</p>
<table border="0" bgcolor="#E0E0E0" width="100%">
<tbody>
<tr><td><pre class="screen">
&gt; create_newcase -case Fmulti -compset F -res ne30_g16 -mach hopper
&gt; cd Fmulti
</pre></td></tr>
</tbody>
</table>
</li>

<li>
<p>假设hopper平台的默认PE布局如下：</p>
<table border="0" bgcolor="#E0E0E0" width="100%">
<tbody>
<tr><td><pre class="screen">
&lt;entry id="NTASKS_ATM"   value="128" /&gt;    
&lt;entry id="NTHRDS_ATM"   value="1" /&gt;    
&lt;entry id="ROOTPE_ATM"   value="0" /&gt;    
&lt;entry id="NINST_ATM"   value="1" /&gt;    
&lt;entry id="NINST_ATM_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_LND"   value="128" /&gt;    
&lt;entry id="NTHRDS_LND"   value="1" /&gt;    
&lt;entry id="ROOTPE_LND"   value="0" /&gt;    
&lt;entry id="NINST_LND"   value="1" /&gt;    
&lt;entry id="NINST_LND_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_ICE"   value="128" /&gt;    
&lt;entry id="NTHRDS_ICE"   value="1" /&gt;    
&lt;entry id="ROOTPE_ICE"   value="0" /&gt;    
&lt;entry id="NINST_ICE"   value="1" /&gt;    
&lt;entry id="NINST_ICE_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_OCN"   value="128" /&gt;    
&lt;entry id="NTHRDS_OCN"   value="1" /&gt;    
&lt;entry id="ROOTPE_OCN"   value="0" /&gt;    
&lt;entry id="NINST_OCN"   value="1" /&gt;    
&lt;entry id="NINST_OCN_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_GLC"   value="128" /&gt;    
&lt;entry id="NTHRDS_GLC"   value="1" /&gt;    
&lt;entry id="ROOTPE_GLC"   value="0" /&gt;    
&lt;entry id="NINST_GLC"   value="1" /&gt;    
&lt;entry id="NINST_GLC_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_WAV"   value="128" /&gt;    
&lt;entry id="NTHRDS_WAV"   value="1" /&gt;    
&lt;entry id="ROOTPE_WAV"   value="0" /&gt;    
&lt;entry id="NINST_WAV"   value="1" /&gt;    
&lt;entry id="NINST_WAV_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_CPL"   value="128" /&gt;    
&lt;entry id="NTHRDS_CPL"   value="1" /&gt;    
&lt;entry id="ROOTPE_CPL"   value="0" /&gt;    
</pre></td></tr>
</tbody>
</table>

<p>在F组件集中，只有大气（atm）、陆地（lnd）、径流（rof）是完全预报组件。海洋（ocn）是预设数据组件，海冰（cice）是混合预设/预报组件（冰覆盖率由预设数据决定），而冰川（glc）和海浪（wav）是存根组件。</p>

<p>假设需要运行2个CAM实例。当前实现要求必须同时运行2个CLM、CICE和RTM实例，但DOCN组件可选择运行1或2个实例（glc和wav组件在此配置中无实际作用）。要实现该配置，只需将env_mach_pes.xml中的NINST_ATM、NINST_LND、NINST_ICE、NINST_ROF和NINST_DOCN值从1改为2，修改后文件如下：</p>

<table border="0" bgcolor="#E0E0E0" width="100%">
<tbody>
<tr><td><pre class="screen">
&lt;entry id="NTASKS_ATM"   value="128" /&gt;    
&lt;entry id="NTHRDS_ATM"   value="1" /&gt;    
&lt;entry id="ROOTPE_ATM"   value="0" /&gt;    
&lt;entry id="NINST_ATM"   value="2" /&gt;    
&lt;entry id="NINST_ATM_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_LND"   value="128" /&gt;    
&lt;entry id="NTHRDS_LND"   value="1" /&gt;    
&lt;entry id="ROOTPE_LND"   value="0" /&gt;    
&lt;entry id="NINST_LND"   value="2" /&gt;    
&lt;entry id="NINST_LND_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_ICE"   value="128" /&gt;    
&lt;entry id="NTHRDS_ICE"   value="1" /&gt;    
&lt;entry id="ROOTPE_ICE"   value="0" /&gt;    
&lt;entry id="NINST_ICE"   value="2" /&gt;    
&lt;entry id="NINST_ICE_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_ROF"   value="128" /&gt;    
&lt;entry id="NTHRDS_ROF"   value="1" /&gt;    
&lt;entry id="ROOTPE_ROF"   value="0" /&gt;    
&lt;entry id="NINST_ROF"   value="2" /&gt;    
&lt;entry id="NINST_ROF_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_OCN"   value="128" /&gt;    
&lt;entry id="NTHRDS_OCN"   value="1" /&gt;    
&lt;entry id="ROOTPE_OCN"   value="0" /&gt;    
&lt;entry id="NINST_OCN"   value="2" /&gt;    
&lt;entry id="NINST_OCN_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_GLC"   value="128" /&gt;    
&lt;entry id="NTHRDS_GLC"   value="1" /&gt;    
&lt;entry id="ROOTPE_GLC"   value="0" /&gt;    
&lt;entry id="NINST_GLC"   value="1" /&gt;    
&lt;entry id="NINST_GLC_LAYOUT"   value="concurrent" /&gt;    

&lt;entry id="NTASKS_CPL"   value="128" /&gt;    
&lt;entry id="NTHRDS_CPL"   value="1" /&gt;    
&lt;entry id="ROOTPE_CPL"   value="0" /&gt;    
</pre></td></tr>
</tbody>
</table>

<p>此配置将生成：2个CAM、CLM、CICE（预设模式）和RTM实例，每个实例并发运行于64个MPI任务上；DOCN组件保持单实例运行。</p>
</li>

<li>
<p>运行<b class="command">cesm_setup</b>时会生成对应的user_nl_xxx_NNNN文件（NNNN表示组件实例编号）。以上述env_mach_pes.xml配置为例，将在$CASEROOT目录生成以下文件：</p>
<table border="0" bgcolor="#E0E0E0" width="100%">
<tbody>
<tr><td><pre class="screen">
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
</pre></td></tr>
</tbody>
</table>

<p>同时在$CASEROOT/CaseDocs目录生成以下输入文件和流文件：</p>
<table border="0" bgcolor="#E0E0E0" width="100%">
<tbody>
<tr><td><pre class="screen">
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
</pre></td></tr>
</tbody>
</table>

<p>通过修改对应的user_nl_xxx_NNNN文件可定制各组件实例的namelist。例如修改user_nl_cam_0002将仅影响CAM的第2个实例。若要修改DOCN第2个实例的流文件，需将docn.streams.txt.prescribed_0002复制到$CASEROOT并重命名为user_docn.streams.txt.prescribed_0002后进行编辑。</p>
</li>
</ol>

<p>需要重点强调以下几点：</p>
<ol type="1">
<li><b class="command">不同组件实例只能通过namelist设置区分——它们共享同一模型可执行文件</b></li>
<li>CESM1.2系列多实例实现仅支持单个耦合器组件</li>
<li><tt class="filename">user_nl_*</tt>文件一旦被<b class="command">cesm_setup</b>创建后，调用<b class="command">cesm_setup -clean</b>时<i class="emphasis">不会被删除</i>，Macros文件同理</li>
<li>通常应保持并发运行多实例（env_mach_pes.xml中的默认设置），串行模式仅适用于后续开发代码的专家用户</li>
</ol>
</div>

<div class="NAVFOOTER">
<hr align="LEFT" width="100%">
<table summary="Footer navigation table" width="100%" border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<td width="33%" align="left" valign="top"><a href="x715.html" accesskey="P">上一页</a></td>
<td width="34%" align="center" valign="top"><a href="book1.html" accesskey="H">首页</a></td>
<td width="33%" align="right" valign="top"><a href="x886.html" accesskey="N">下一页</a></td>
</tr>
<tr>
<td width="33%" align="left" valign="top">案例设置与PE布局定制</td>
<td width="34%" align="center" valign="top"><a href="c513.html" accesskey="U">向上</a></td>
<td width="33%" align="right" valign="top">修改xml文件</td>
</tr>
</tbody>
</table>
</div>
</body>
<div class="sect1"><h1 class="sect1"><a name="modifying_xml">修改xml文件</a></h1><p>
您可以直接编辑xml文件来修改变量值。但建议使用<b class="command">xmlchange</b>工具在$<code class="envar">CASEROOT</code>目录下操作，因为该工具会在修改xml文件值时执行变量错误检查。调用<b class="command">xmlchange</b>的方式如下：
</p><table border="0" bgcolor="#E0E0E0" width="100%"><tbody><tr><td><pre class="screen">
xmlchange &lt;条目id&gt;=&lt;值&gt;
-- 或 --
xmlchange -id &lt;条目id&gt; -val &lt;名称&gt; -file &lt;文件名&gt;
          [-help] [-silent] [-verbose] [-warn] [-append] [-file]
</pre></td></tr></tbody></table><p></p><div class="variablelist"><dl><dt><code class="option">-id</code></dt><dd><p>
需要修改的xml变量名称（必填项）
</p></dd><dt><code class="option">-val</code></dt><dd><p>
与-id参数关联的变量目标值（必填项）
</p><div class="note"><blockquote class="note"><p><b>注意： </b>若要在-val选项提供的字符串中包含单引号（"'"，又称撇号），必须将其指定为"&amp;apos;"。
</p></blockquote></div></dd><dt><code class="option">-file</code></dt><dd><p>
待编辑的xml文件（可选项）
</p></dd><dt><code class="option">-silent</code></dt><dd><p>
启用静默模式，仅显示致命错误信息（可选项）
</p></dd><dt><code class="option">-verbose</code></dt><dd><p>
回显<b class="command">create_newcase</b>和<b class="command">cesm_setup</b>的所有设置（可选项）
</p></dd><dt><code class="option">-help</code></dt><dd><p>
打印使用信息到标准输出（可选项）
</p></dd></dl></div></div>
<div class="sect1"><h1 class="sect1"><a name="cloning_case">克隆案例（仅限专家用户）</a></h1><p>
此为面向专家用户的高级功能，新用户请跳过本节。</p><p>若您拥有待克隆案例的运行权限，
<b class="command">create_clone</b>命令可在创建新案例的同时保留原案例的本地修改。该工具可在
$<code class="envar">CCSMROOT</code>目录或目标创建目录下运行，参数如下：</p><p></p><div class="variablelist"><dl><dt><code class="option">-case</code></dt><dd><p>
新案例名称或路径
</p></dd><dt><code class="option">-clone</code></dt><dd><p>
待克隆案例的完整路径
</p></dd><dt><code class="option">-silent</code></dt><dd><p>
静默模式，仅显示致命错误信息
</p></dd><dt><code class="option">-verbose</code></dt><dd><p>
显示所有配置信息
</p></dd><dt><code class="option">-help</code></dt><dd><p>
打印使用说明
</p></dd></dl></div><p>
基础使用示例：
</p><table border="0" bgcolor="#E0E0E0" width="100%"><tbody><tr><td><pre class="screen">
&gt; cd $<code class="envar">CCSMROOT</code>/scripts
&gt; create_clone -case $<code class="envar">CASEROOT</code> -clone $<code class="envar">CLONEROOT</code> 
</pre></td></tr></tbody></table><p>
<b class="command">create_clone</b>会保留user_nl_xxxx文件中的本地namelist修改及SourceMods目录下的源码变更。
需注意新案例目录将<b>完全复制</b>原案例目录，但以下脚本会重新生成：
$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.build, 
$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.clean_build,
$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.run, 
$<code class="envar">CASEROOT</code>.$<code class="envar">MACH</code>.l_archive。
</p><div class="note"><blockquote class="note"><p><b>重要提示：</b>禁止修改<tt class="filename">env_case.xml</tt>文件。
此时$<code class="envar">CASEROOT</code>/目录状态等同于刚执行完<b class="command">create_newcase</b>命令，
但会保留env_*文件的本地修改。
</p></blockquote></div><p>
另一种复制方案是通过原案例README.case文件创建新案例。
但此方法<b>不会保留</b>原案例的本地修改（如源码或编译脚本变更），
需手动迁移这些变更。</p></div>


</body>