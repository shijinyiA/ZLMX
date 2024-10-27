<template><div><h2 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器"><span>购买服务器</span></a></h2>
<LinkCard title="腾讯云" href="https://cloud.tencent.com" description="腾讯云是腾讯多年技术沉淀的云计算服务平台，提供300+款产品和全栈解决方案，覆盖大数据、计算、人工智能、容器、存储、网络、微信生态等多个领域" /><LinkCard title="阿里云" href="https://www.aliyun.com" description="阿里云—阿里巴巴集团旗下公司，是全球领先的云计算及人工智能科技公司。提供云服务器、云数据库、云安全、云存储、企业应用及行业解决方案服务" /><LinkCard title="华为云" href="https://activity.huaweicloud.com" description="华为云是华为旗下的云计算服务平台，为各行业客户提供弹性云服务器、对象存储、文字识别、内容分发网络等多种云产品和解决方案" /><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>当然你也可以选择其他的</p>
</div>
<h2 id="系统选择" tabindex="-1"><a class="header-anchor" href="#系统选择"><span>系统选择</span></a></h2>
<Card title="本人推荐系统">
  Ubuntu22，Debian 12
</Card>
<h2 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装"><span>开始安装</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>安装中遇到看不懂的回车即可</p>
</div>
<div class="vp-steps"><ol>
<li>
<p>步骤 1</p>
<CodeTabs id="32" :data='[{"id":"换源"}]'><template #title0="{ value, isActive }"><span>换源</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bash</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -sSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://linuxmirrors.cn/main.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs></li>
<li>
<p>步骤 2</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>选择清华源(6)</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/1/1.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 3</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>软件源是否使用 HTTP 协议? [Y]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/1/2.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 4</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>是否跳过更新软件包? [Y]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/1/3.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 6</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>是否清理已下载的软件包缓存? [Y]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/1/4.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 7</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>[完成] 安装完成</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/1/5.png" alt="1"></p>
</div></div></li>
</ol>
</div><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h2>
<div class="vp-steps"><ol>
<li>
<p>步骤 1</p>
<CodeTabs id="99" :data='[{"id":"脚本安装Docker"}]'><template #title0="{ value, isActive }"><span>脚本安装Docker</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bash</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -sSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://linuxmirrors.cn/docker.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs></li>
<li>
<p>步骤 2</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>是否安装最新版本的 Docker Engine? [Y]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/2/1.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 3</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>请选择并输入你想使用的 Docker CE 源 [7]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/2/2.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 4</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>请选择并输入你想使用的 Docker Registry 源 [13]</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/2/3.png" alt="1"></p>
</div></div></li>
<li>
<p>步骤 6</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>[完成] 安装完成</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/2/4.png" alt="1"></p>
</div></div></li>
</ol>
</div><h2 id="安装trss容器" tabindex="-1"><a class="header-anchor" href="#安装trss容器"><span>安装TRSS容器</span></a></h2>
<div class="vp-steps"><ol>
<li>
<p>步骤 1</p>
<CodeTabs id="156" :data='[{"id":"国内推荐"},{"id":"国外推荐"}]'><template #title0="{ value, isActive }"><span>国内推荐</span></template><template #title1="{ value, isActive }"><span>国外推荐</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">DKURL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">docker.fxxk.dedyn.io</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> bash</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -L</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">bash</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -L</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">)</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs></li>
<li>
<p>步骤 2</p>
<div class="demo-wrapper has-title">
  <div class="demo-head">
    <div class="demo-ctrl"><i></i><i></i><i></i></div>
    <h4 class="demo-title"><p>Docker 容器安装完成，启动命令：tsab</p></h4>
  </div>
  <div class="demo-container" >
<p><img src="/images/TRSS/Linux/3/1.png" alt="1"></p>
</div></div></li>
</ol>
</div></div></template>


