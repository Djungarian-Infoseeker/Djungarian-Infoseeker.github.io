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
- [《CESM1.2.2 移植》 ——by 盖世女侠“边边”](http://bbs.06climate.com/forum.php?mod=viewthread&tid=49077&highlight=CESM%2b1.2.2) <a href="{{site.baseurl}}/assets/css/CESM1.2.2移植(包括ESMF库安装).pdf" download>CESM1.2.2 移植 PDF文件下载</a>
## 安装
如果是租用的大公司服务机器可以拜托运维工程师进行安装，也可以自己进行安装。
### 安装所需文件