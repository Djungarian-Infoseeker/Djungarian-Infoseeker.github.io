<div class="chapter">
  <h1><a name="creating_a_case"></a>第2章 创建和设置案例</h1>
  <div class="TOC">
    <dl>
      <dt><b>目录</b></dt>
      <dt><a href="c513.html#how_to_create_case">如何创建新案例</a></dt>
      <dt><a href="x715.html">如何设置案例并自定义PE布局</a></dt>
      <dt><a href="x836.html">多实例组件功能</a></dt>
      <dt><a href="x886.html">修改xml文件</a></dt>
      <dt><a href="x928.html">克隆案例（仅限专家）</a></dt>
    </dl>
  </div>
  <p>创建<acronym class="acronym">CESM</acronym>实验的第一步是使用<b class="command">create_newcase</b>。</p>
  
  <div class="sect1">
    <h1 class="sect1"><a name="how_to_create_case">如何创建新案例</a></h1>
    <p>
      CESM支持开箱即用的<a href="../modelnl/compsets.html" target="_top">组件集</a>、<a href="../modelnl/grid.html" target="_top">模型网格</a>和<a href="../modelnl/machines.html" target="_top">硬件平台</a>。组件集（通常称为compsets）既定义了特定CESM配置中使用的模型组件，<i class="emphasis">也</i>定义了该配置特有的组件特定namelist或配置设置。
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
      <p>例如，长名称20TR_CAM4_CLM40%CN_CICE_POP2_RTM_SGLC_SWAV表示运行CAM、CLM、RTM、CICE、POP2等预报组件，以及SGLC和SWAV存根组件。</p>
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
    
    <div class="sect2">
      <h2 class="sect2"><a name="using_create_newcase">使用create_newcase</a></h2>
      <p>创建案例的基本命令格式：</p>
      <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
          <tr>
            <td>
              <pre class="screen">
create_newcase \     
     -case <i class="emphasis">案例名称</i> \        
     -compset <i class="emphasis">组件集</i> \      
     -res <i class="emphasis">分辨率</i> \         
     -mach <i class="emphasis">机器名称</i>
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
      <p>示例：</p>
      <table border="0" bgcolor="#E0E0E0" width="100%">
        <tbody>
          <tr>
            <td>
              <pre class="screen"> 
&gt; cd $CCSMROOT/scripts 
&gt; create_newcase -case ~/cesm/example1 \ 
  -compset B_1850_CAM5_CN \ 
  -res ne30np4_gx1v6 \
  -mach yellowstone
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">
  <div class="NAVHEADER">
    <table summary="Header navigation table" width="100%" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th colspan="3" align="center">CESM用户指南(CESM1.2发布系列用户指南)(<a href="ug.pdf" target="_top">PDF</a>)</th>
        </tr>
        <tr>
          <td width="10%" align="left" valign="bottom"><a href="c513.html" accesskey="P">上一页</a></td>
          <td width="80%" align="center" valign="bottom">第2章 创建和设置案例</td>
          <td width="10%" align="right" valign="bottom"><a href="x836.html" accesskey="N">下一页</a></td>
        </tr>
      </tbody>
    </table>
    <hr align="LEFT" width="100%">
  </div>
  
  <div class="sect1">
    <h1 class="sect1"><a name="how_to_setup_case">如何设置案例并自定义PE布局</a></h1>
    
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
  
  <div class="NAVFOOTER">
    <hr align="LEFT" width="100%">
    <table summary="Footer navigation table" width="100%" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <td width="33%" align="left" valign="top"><a href="c513.html" accesskey="P">上一页</a></td>
          <td width="34%" align="center" valign="top"><a href="book1.html" accesskey="H">首页</a></td>
          <td width="33%" align="right" valign="top"><a href="x836.html" accesskey="N">下一页</a></td>
        </tr>
        <tr>
          <td width="33%" align="left" valign="top">创建和设置案例</td>
          <td width="34%" align="center" valign="top"><a href="c513.html" accesskey="U">向上</a></td>
          <td width="33%" align="right" valign="top">多实例组件功能</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
<body class="sect1" bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#840084" alink="#0000FF">
  <div class="NAVHEADER">
    <table summary="Header navigation table" width="100%" border="0" cellpadding="0" cellspacing="0">
      <tbody>
        <tr>
          <th colspan="3" align="center">CESM用户指南(CESM1.2发布系列用户指南)(<a href="ug.pdf" target="_top">PDF</a>)</th>
        </tr>
        <tr>
          <td width="10%" align="left" valign="bottom"><a href="x715.html" accesskey="P">上一页</a></td>
          <td width="80%" align="center" valign="bottom">第2章 创建和设置案例</td>
          <td width="10%" align="right" valign="bottom"><a href="x886.html" accesskey="N">下一页</a></td>
        </tr>
      </tbody>
    </table>
    <hr align="LEFT" width="100%">
  </div>

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
          <td width="33%" align="left" valign="top">如何设置案例并自定义PE布局</td>
          <td width="34%" align="center" valign="top"><a href="c513.html" accesskey="U">向上</a></td>
          <td width="33%" align="right" valign="top">修改xml文件</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>