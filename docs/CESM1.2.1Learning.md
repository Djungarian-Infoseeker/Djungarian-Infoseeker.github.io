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
## 安装
如果是租用的大公司服务机器可以拜托运维工程师进行安装，也可以自己进行安装。
### 安装依赖文件

#### 操作系统
- **要求**：UNIX 操作系统，如 CNL、AIX 和 Linux 等。

#### 脚本语言
- **要求**：必需安装 `csh`、`bash` 和 `perl` 脚本语言来处理各类脚本。

#### Subversion (svn)
- **要求**：`subversion` 客户端版本 **1.4.2** 或更高，用于下载 CESM 源代码。
- **安装示例**：
  ```bash
  sudo apt-get install subversion

### 安装CESM

# 下载 CESM1.2.1 源代码

通过 Subversion (`svn`) 工具从官方代码库中下载 CESM1.2.1 的代码：

<div>
  <pre>
    <code id="codeBlock">
      # 运行以下命令下载 CESM1.2.1 源代码
      svn co https://svn-ccsm-models.cgd.ucar.edu/cesm1/release_tags/cesm1_2_1 cesm1_2_1
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
