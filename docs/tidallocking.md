本文摘选自王玉玮老师（中国海洋大学海洋与大气学院副教授）的博士毕业论文-《轨道参数对红矮星周围 行星气候与宜居性的影响》

修改行星轨道参数需要在CAM4上运行

# 附录1 将CAM移植到同步自转的系外行星上

## 1. 修改轨道参数
### 文件路径：`shr_orb_mod.F90`
<pre class="highlight-fortran">
shr_orb_cosz = sin(lat)*sin(declin) - cos(lat)*cos(declin)*cos(lon)
! 原始公式：cos(lat)*cos(declin)*cos(jday*2.0*pi + lon)
</pre>

**修改说明**：
- 功能：计算格点太阳高度角
- 参数说明：
  - `jday` 表示年积日（1-365/366）
- 修改效果：星下点固定于特定经度（同步自转）

## 2. 修改常数
### 文件路径：`shr_const_mod.F90`
<pre class="highlight-fortran">
! 恒星日时长（秒）
real(SHR_KIND_R8), parameter :: SHR_CONST_SDAY = 86164.0_SHR_KIND_R8

! 行星半径（1.5倍地球半径）
real(SHR_KIND_R8), parameter :: SHR_CONST_REARTH = 1.5_SHR_KIND_R8*6.37122e6_SHR_KIND_R8

! 重力加速度（m/s²）
real(SHR_KIND_R8), parameter :: SHR_CONST_G = 9.80616_SHR_KIND_R8

! 干燥空气分子量（g/mol）
real(SHR_KIND_R8), parameter :: SHR_CONST_MWDAIR = 28.966_SHR_KIND_R8

! 干燥空气比热（J/kg/K）
real(SHR_KIND_R8), parameter :: SHR_CONST_CPDAIR = 1.0395e3_SHR_KIND_R8
</pre>

## 3. 修改恒星光谱
### 文件路径：`radsw.F90`
<pre class="highlight-fortran">
data frcsol / .001488, .001389, .001290, .001686, .002877, &
.003869, .026336, .360739, .065392, .526861, &
.526861, .526861, .526861, .526861, .526861, &
.526861, .006239, .001834, .001834/
</pre>

**参数说明**：
- 该数组定义红外波段太阳辐射比例
- 恒星温度变化时需要重新校准
- 注意波段存在重叠现象（波段起始位置可在同文件中查询）