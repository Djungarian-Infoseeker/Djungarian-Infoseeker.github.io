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

在安装和运行 CESM 1.2.1 之前，请确保以下系统依赖和外部软件已安装：

- **操作系统**: 支持 UNIX 类操作系统，如 CNL、AIX 或 Linux。
- **脚本语言**: 支持 `csh`、`bash` 和 `perl` 脚本语言。
- **版本控制**: Subversion 客户端，版本 1.4.2 或更高。
- **编译器**: 需要 Fortran 和 C 编译器，本文档使用 GNU 7.3.0。
- **MPI 库**: 支持 OpenMPI（2.1.6 及以上版本）或 MPICH（1.0 及以上版本）。
- **NetCDF**: 必需，版本 4.2.0 或更新，且需支持 `curl`。
- **耦合器**: 可选，支持 ESMF 5.2.0 或更新版本；默认使用 MCT 耦合器。
- **并行 NetCDF (pNetCDF)**: 必需，推荐版本 1.3.1 或更高。
- **LAPACK**: 可选，某些模拟可能会用到。
- **CMake**: 必需，版本 2.8.6 或更新。

### 安装提示

在中科曙光的服务机器上，相关依赖已预先安装，并位于公用文件夹中。你可以通过以下命令检查所需模块：

```bash
module av
