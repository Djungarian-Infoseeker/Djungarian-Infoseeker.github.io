本文摘选自王玉玮老师（中国海洋大学海洋与大气学院副教授）的博士毕业论文-《轨道参数对红矮星周围 行星气候与宜居性的影响》

修改行星轨道参数需要在CAM4上运行

```fortran
## 1. 修改轨道参数

文件：`shr_orb_mod.F90`

shr_orb_cosz = sin(lat)*sin(declin) - cos(lat)*cos(declin)*cos(lon) 
! cos(lat)*cos(declin)*cos(jday*2.0*pi + lon)

该公式用于计算每个格点上的太阳高度角。`Jday` 表示一年中的某一天。上述修改的结果是使星下点不再随着时间变化，只固定于某个经度上。

---

## 2. 修改常数

文件：`shr_const_mod.F90`

### 修改自转速度

real(SHR_KIND_R8),parameter :: SHR_CONST_SDAY = 86164.0_SHR_KIND_R8 ! sec in siderial day

该参数用于修改自转速度，即一天有多少秒。直接影响科氏力的计算，与模式的时间系统无关。

### 修改行星半径

real(SHR_KIND_R8),parameter :: SHR_CONST_REARTH = 1.5_SHR_KIND_R8*6.37122e6_SHR_KIND_R8 ! radius of earth ~ m

该参数用于描述行星的半径，比如上述写法是 1.5 个地球半径。

### 修改重力加速度

real(SHR_KIND_R8),parameter :: SHR_CONST_G = 9.80616_SHR_KIND_R8 ! acceleration of gravity ~ m/s^2

该参数用于描述重力加速度。

### 修改空气分子的平均分子量

real(SHR_KIND_R8),parameter :: SHR_CONST_MWDAIR = 28.966_SHR_KIND_R8 ! molecular weight dry air

该参数用于设置空气分子的平均分子量。

### 修改空气分子的比热

real(SHR_KIND_R8),parameter :: SHR_CONST_CPDAIR = 1.0395e3_SHR_KIND_R8 !1.00464e3_SHR_KIND_R8 ! specific heat of dry air ~ J/kg/K

该参数用于设置空气分子的比热。

---

## 3. 修改恒星光谱

文件：`radsw.F90`

data frcsol / 
  .001488, .001389, .001290, .001686, .002877, &
  .003869, .026336, .360739, .065392, .526861, &
  .526861, .526861, .526861, .526861, .526861, &
  .526861, .006239, .001834, .001834 /

该变量给出了红外每个波段的太阳辐射比例。如果恒星温度有变化，需要重新设置每个波段的比例。需要注意，这些波段是有重叠的，波段的起始位置可以在同一个文件中找到。
