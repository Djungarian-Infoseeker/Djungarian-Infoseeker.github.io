<h1>修改 TSI（总太阳辐照度）教程</h1>

<h2>1. 背景和原理</h2>
<p>
<strong>TSI（Total Solar Irradiance，单位 W/m²）</strong> 是描述太阳辐射强度的关键参数。在气候模拟中，TSI 决定了行星表面接收到的能量，进而影响大气和海洋的热力过程。TSI 的改变不仅适用于研究地球气候，还对其他行星的宜居性研究具有重要意义。例如，由于行星距恒星的距离不同，以及恒星在其演化过程中光度的变化，不同的 TSI 水平可能决定一颗行星是否处于宜居带内。通过模拟 TSI 的变化，研究人员可以探索不同条件下的气候稳定性与宜居性特征。
</p>
<ul>
  <li><strong>CAM4:</strong> 可以直接通过命名列表参数 <code>solar_const</code> 修改 TSI，无需额外准备输入文件。</li>
  <li><strong>CAM5:</strong> 由于 RRTMG 辐射方案的限制，<code>solar_const</code> 不再适用，必须通过修改光谱辐照度文件（<code>solar spectral irradiance file</code>）来实现 TSI 的调整。</li>
</ul>

<h2>2. CAM4 中修改 TSI</h2>
<h3>2.1 修改方法</h3>
<p>在 CAM4 的物理包中（如使用 <code>B1850CN</code> 配置集），TSI 可以直接通过 <code>user_nl_cam</code> 文件的 <code>solar_const</code> 参数设置。</p>

<h3>2.2 实现步骤</h3>
<ol>
  <li>在案例目录中找到 <code>user_nl_cam</code> 文件。</li>
  <li>添加或修改以下参数：
    <pre><code>solar_const = 1300.0</code></pre>
    其中 <code>1300.0</code> 为目标 TSI 值（单位 W/m²）。
  </li>
  <li>运行 <code>./preview_namelist</code> 验证更改。</li>
  <li>编译和运行模型：
    <pre><code>./case.build
./case.submit</code></pre>
  </li>
</ol>

<h2>3. CAM5 中修改 TSI</h2>
<h3>3.1 问题说明</h3>
<p>
在 CAM5 物理包中，RRTMG 辐射方案使用光谱辐照度文件（<code>solar_data_file</code>）计算辐射强度，而不是直接使用 <code>solar_const</code>。
</p>
<p>
若同时设置 <code>solar_const</code> 和 <code>solar_data_file</code>，会报如下警告：
<pre><code>WARNING: It is not allowed to set both solar_const and solar_data_file. solar_const will be ignored.</code></pre>
</p>
<p>
此外，尝试切换回 CAMRT 辐射方案可能导致模型组件不兼容的错误。
</p>

<h3>3.2 解决方案</h3>
<p>
要在 CAM5 中修改 TSI，需通过修改光谱辐照度文件（<code>solar spectral irradiance file</code>）来实现。这涉及以下步骤：
</p>
<ol>
  <li>准备原始光谱辐照度文件，例如 <code>ape_solar_ave_tsi_1365.nc</code>。</li>
  <li>编写 Python 脚本调整文件（见下文）。</li>
  <li>在案例中指定新文件，并更新 <code>user_nl_cam</code> 文件。</li>
</ol>

<h3>3.3 Python 脚本</h3>
<p>以下脚本用于生成新的光谱辐照度文件：</p>
<pre><code>import xarray as xr

# 原始文件路径
input_file = "ape_solar_ave_tsi_1365.nc"

# 目标 TSI 值
target_tsi_values = [1300, 1200, 1100]

# 循环生成新文件
for target_tsi in target_tsi_values:
    # 打开原始文件
    ds = xr.open_dataset(input_file)

    # 计算缩放因子
    scale_factor = target_tsi / ds["tsi"].max().item()

    # 缩放 SSI 和更新 TSI
    ds["ssi"] = ds["ssi"] * scale_factor
    ds["tsi"][:] = target_tsi

    # 保存新文件
    output_file = f"ape_solar_ave_tsi_{target_tsi}.nc"
    ds.to_netcdf(output_file)

    print(f"生成新文件：{output_file}，目标 TSI = {target_tsi} W/m²")
</code></pre>

<h3>3.4 在案例中指定新文件</h3>
<ol>
  <li>编辑案例目录中的 <code>user_nl_cam</code> 文件，指定新的光谱辐照度文件：
    <pre><code>solar_data_file = '/path/to/ape_solar_ave_tsi_1300.nc'</code></pre>
  </li>
  <li>运行 <code>./preview_namelist</code> 检查更改。</li>
  <li>编译和运行模型：
    <pre><code>./case.build
./case.submit</code></pre>
  </li>
</ol>

