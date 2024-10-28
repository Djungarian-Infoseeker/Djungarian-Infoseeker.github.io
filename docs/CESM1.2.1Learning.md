<div id="toc">
  <ul>
    <li><a href="#section1">0. CESM是什么？EXOCAM是什么？它们之间有什么联系？</a></li>
    <li><a href="#section2">1. 个人概况</a></li>
    <li><a href="#section3">2. 安装</a></li>
  </ul>
</div>

## CESM是什么？EXOCAM是什么？它们之间有什么联系？
CESM（Community Earth System Model，社区地球系统模型）是一个用于模拟地球气候系统的耦合气候模型。它集成了多个独立的模块来模拟地球系统的主要组成部分，包括大气、海洋、陆地、海冰、陆冰等。CESM允许科学家通过这些模块进行气候模拟，研究过去、现在和未来的气候变化。它支持多个分辨率、不同物理过程的配置，并且能够在不同的计算平台上运行​​。

ExoCAM是一个基于CESM的模型分支，专门用于模拟系外行星（Exoplanets）的大气气候。ExoCAM是在CESM的基础上开发的，继承了CESM的许多核心功能，并进行了定制化，以适应对系外行星大气的研究需求​。ExoCAM主要关注不同恒星环境下的类地行星大气模拟，尤其是围绕M型矮星（如TRAPPIST-1系统）的行星气候。ExoCAM是基于CESM1.2.1上运行。

本文主要记录我从2024年8月开始的CESM1.2.1模型的学习。
## 个人概况
我在组里租用的国家超算互联网的“乌镇之光”超级计算机上运行CESM，选择版本为CESM1.2.1.<br>
主要参考资料有：
- [2020 CESM Tutorial Coursework](https://www2.cesm.ucar.edu/events/tutorials/2020/coursework.html)
- [CESM User's Guide (CESM1.2 Release Series User's Guide) ](https://www2.cesm.ucar.edu/models/cesm1.2/cesm/doc/usersguide/book1.html)
- [《CESM1.2.2 移植》 ——by 盖世女侠“边边”](http://bbs.06climate.com/forum.php?mod=viewthread&tid=49077&highlight=CESM%2b1.2.2) <a href="{{site.baseurl}}/assets/css/CESM1.2.2移植(包括ESMF库安装).pdf" download>PDF文件下载</a>
- [兰州大学CESM1.2.0学习笔记](https://trop-strat.lzu.edu.cn/static/upload/file/20230823/1692756798144593.pdf) <a href="{{site.baseurl}}/assets/css/兰州大学CESM.pdf" download>PDF文件下载</a>
## CESM 1.2.1 安装和系统要求

安装和运行 CESM 1.2.1 前，请确保以下系统依赖和外部软件已安装：

- **操作系统**: 支持UNIX类操作系统，如 CNL、AIX 或 Linux。
- **脚本语言**: 支持 `csh`、`bash` 和 `perl` 脚本语言。
- **版本控制**: Subversion 客户端，版本1.4.2或更高。
- **编译器**: 需要Fortran和C编译器，本文档使用 GNU 7.3.0。
- **MPI库**: 支持 OpenMPI（2.1.6及以上版本）或 MPICH（1.0及以上版本）。
- **NetCDF**: 必需，版本4.2.0或更新，且需支持 `curl`。
- **耦合器**: 可选，支持ESMF 5.2.0或更新版本；默认使用 MCT 耦合器。
- **并行NetCDF (pNetCDF)**: 必需，推荐版本1.3.1或更高。
- **LAPACK**: 可选，某些模拟可能会用到。
- **CMake**: 必需，版本2.8.6或更新。

确保所有依赖项正确配置，以顺利安装和运行 CESM。

如果是租用的大公司服务机器可以拜托运维工程师进行安装，也可以自己进行安装。

## 2. 安装 Intel OneAPI 和 IntelMPI
要安装 ICC 支持的 Intel OneAPI 旧版本真是个坎坷的过程！在2024年后，Intel 不再为新版本的 OneAPI 提供 ICC 编译器支持，这对 CESM 等依赖 ICC 的软件带来不小麻烦。为了找到旧版本，我一度尝试通过 Intel 官方渠道，但无奈旧版资源的下载被设置为会员专享，且在论坛中多次碰壁。

经过了一顿折腾，终于在 https://get.hpc.dev/vault/intel/ 站点找到了解决之道！这个网站收录了所有旧版的 Intel OneAPI BaseToolkit 和 HPC 附件，终于让我下载到可用的安装包。真是就我狗命！
### 安装Intel BaseKit (2022.1.2)
此版本包含并行计算开发的基础工具和库。我们将安装路径设为`/work/home/yinjiewang/intel`。

<div>
  <pre>
    <code id="codeBlock">
      # 下载 Intel BaseKit 2022.1.2 安装包
      wget https://get.hpc.dev/vault/intel/l_BaseKit_p_2022.2.0.262_offline.sh

      # 赋予安装文件可执行权限
      chmod +x l_BaseKit_p_2022.1.2.146_offline.sh

      # 使用 -a 选项传递 --install-dir 参数
      ./l_BaseKit_p_2022.1.2.146_offline.sh -a --install-dir /work/home/yinjiewang/intel

      # 安装完成后修改环境变量
      vim ~/.bashrc

      # 在 .bashrc 文件末尾添加
      export PATH=/work/home/yinjiewang/intel/basekit/bin:$PATH
      export LD_LIBRARY_PATH=/work/home/yinjiewang/intel/basekit/lib:$LD_LIBRARY_PATH

      # 激活新环境变量
      source ~/.bashrc
    </code>
  </pre>
  <button onclick="copyCode()">点击复制</button>
</div>

### 安装Intel HPC Kit (2022.2)
HPC Kit 包含高性能计算支持库，包括 ICC 编译器和 Intel MPI。

<div>
  <pre>
    <code id="codeBlock">
      # 下载 Intel HPC Kit 2022.2 安装包
      wget https://registrationcenter-download.intel.com/akdlm/irc_nas/18679/l_HPCKit_p_2022.2.0.191.sh

      # 赋予安装文件可执行权限
      chmod +x l_HPCKit_p_2022.2.0.191.sh

      # 启动安装程序
      ./l_HPCKit_p_2022.2.0.191.sh -a --install-dir /work/home/yinjiewang/intel

      # 修改环境变量
      vim ~/.bashrc

      # 在 .bashrc 文件末尾添加
      export PATH=/work/home/yinjiewang/intel/hpckit/bin:$PATH
      export LD_LIBRARY_PATH=/work/home/yinjiewang/intel/hpckit/lib:$LD_LIBRARY_PATH

      # 激活新环境变量
      source ~/.bashrc
    </code>
  </pre>
  <button onclick="copyCode()">点击复制</button>
</div>

<script>
  function copyCode() {
    var code = document.getElementById("codeBlock").innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("代码已复制到剪贴板！");
  }
</script>

<style>
  pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    position: relative;
  }

  button {
    background-color: #008cba;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background-color: #005f5f;
  }
</style>