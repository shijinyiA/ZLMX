<template><div><h2 id="trss-yunzai" tabindex="-1"><a class="header-anchor" href="#trss-yunzai"><span>TRSS-Yunzai</span></a></h2>
<LinkCard title="TRSS-Yunzai" href="https://gitee.com/TimeRainStarSky/Yunzai">
<ul>
<li>Yunzai 应用端，支持多账号，支持协议端：OneBotv11、ComWeChat、GSUIDCore、ICQQ、QQBot、QQ频道、微信、KOOK、Telegram、Discord、OPQBot、Lagrange</li>
<li>基于 Miao-Yunzai</li>
</ul>
</LinkCard>
<LinkCard icon="twemoji:astonished-face" title="安装" href="/搭建/Liunx.md" /><h2 id="miao-yunzai-v3" tabindex="-1"><a class="header-anchor" href="#miao-yunzai-v3"><span>Miao-Yunzai v3</span></a></h2>
<LinkCard title="Miao-Yunzai v3" href="https://gitee.com/yoimiya-kokomi/Miao-Yunzai">
<ul>
<li>基于乐神版云崽v3.0 改造，需要同时安装miao-plugin</li>
<li>对数据结构进行了改造，无法直接迁回原版Yunzai，请根据自己需求情况慎重安装！</li>
</ul>
</LinkCard>
<LinkCard icon="twemoji:astonished-face" title="安装" href="/搭建/Liunx.md" /><h2 id="yunzaijs" tabindex="-1"><a class="header-anchor" href="#yunzaijs"><span>Yunzaijs</span></a></h2>
<LinkCard title="Yunzaijs" href="https://github.com/yunzai-org/yunzai-bot">
<ul>
<li>YunzaiJS 机器人开发框架，可以通过开发个性化应用和集成丰富的生态来扩展机器人的功能。遵循向下兼容，向上扩展的原则来支持更丰富的接口。它是一款追求代码可维护性、可扩展性、稳定性和高性能，提供对用户友好，对开发者友好的机器人开发框架。</li>
</ul>
</LinkCard>
<LinkCard icon="twemoji:astonished-face" title="安装" href="/搭建/Liunx.md" /><h1 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin"><span>Plugin</span></a></h1>
<h2 id="miao-plugin" tabindex="-1"><a class="header-anchor" href="#miao-plugin"><span>Miao-Plugin</span></a></h2>
<LinkCard title="Miao-Plugin" href="https://gitee.com/yoimiya-kokomi/miao-plugin">
<ul>
<li>miao-plugin是一个Yunzai-Bot的升级插件，提供包括角色面板、角色查询等角色相关功能。</li>
<li>具体功能可在安装插件后 通过 #喵喵帮助 进行查看。如需进行设置则可通过 #喵喵设置 命令进行管理。</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<CodeTabs id="73" :data='[{"id":"Gitee"},{"id":"Github"}]'><template #title0="{ value, isActive }"><span>Gitee</span></template><template #title1="{ value, isActive }"><span>Github</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://gitee.com/yoimiya-kokomi/miao-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/miao-plugin/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -P</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/yoimiya-kokomi/miao-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/miao-plugin/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -P</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h2 id="earth-k-plugin" tabindex="-1"><a class="header-anchor" href="#earth-k-plugin"><span>Earth-K-Plugin</span></a></h2>
<LinkCard title="Earth-K-Pluginn" href="https://github.com/SmallK111407/earth-k-plugin">
<ul>
<li>Earth-K-Plugin是一个Yunzai-Bot的附属插件，主要提供了原史及部分功能，具体可见#土块帮助</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>需要配置FFmpeg变量才能正常使用点歌、猜语音、角色语音等功能</p>
</div>
<CodeTabs id="99" :data='[{"id":"Gitee"},{"id":"Github"}]'><template #title0="{ value, isActive }"><span>Gitee</span></template><template #title1="{ value, isActive }"><span>Github</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://gitee.com/SmallK111407/earth-k-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/earth-k-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/SmallK111407/earth-k-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/earth-k-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs><h2 id="yenai-plugin" tabindex="-1"><a class="header-anchor" href="#yenai-plugin"><span>Yenai-Plugin</span></a></h2>
<LinkCard title="Yenai-Plugin
" href="https://github.com/yeyang52/yenai-plugin">
<ul>
<li>Yenai-Plugin是一个Yunzai-Bot的扩展插件，提供对Bot的一些便捷操作。</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<CodeTabs id="120" :data='[{"id":"Gitee"},{"id":"Github"},{"id":"依赖(可选)"}]'><template #title0="{ value, isActive }"><span>Gitee</span></template><template #title1="{ value, isActive }"><span>Github</span></template><template #title2="{ value, isActive }"><span>依赖(可选)</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> master</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://gitee.com/yeyang52/yenai-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/yenai-plugin</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> master</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/yeyang52/yenai-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/yenai-plugin</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab2="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs><h2 id="logier-plugin" tabindex="-1"><a class="header-anchor" href="#logier-plugin"><span>logier-plugin</span></a></h2>
<LinkCard title="logier-plugin
" href="https://github.com/logier/logier-plugins">
<ul>
<li>24.02.26 更新潜伏模板，群聊中收到消息后概率GPT回复并发送表情包，对俗手哥拙劣的模仿</li>
<li>24.02.23 破坏性更新，修复了更新后配置项丢失的问题，以及启动插件缺失yaml文件的问题，更新后需要重新配置，谨慎更新</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<CodeTabs id="149" :data='[{"id":"Gitee"},{"id":"Github"}]'><template #title0="{ value, isActive }"><span>Gitee</span></template><template #title1="{ value, isActive }"><span>Github</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://gitee.com/logier/logier-plugins.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/logier-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --depth=1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/logier/logier-plugins.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/logier-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs><h2 id="lin-plugin" tabindex="-1"><a class="header-anchor" href="#lin-plugin"><span>lin-plugin</span></a></h2>
<LinkCard title="lin-plugin
" href="https://github.com/go-farther-and-farther/lin-plugin">
<ul>
<li>有Bug请等待一段时间重新拉取或者更新版本，重新拉取不能解决可以反馈到Issues，谢谢</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<CodeTabs id="170" :data='[{"id":"Gitee"},{"id":"Github"}]'><template #title0="{ value, isActive }"><span>Gitee</span></template><template #title1="{ value, isActive }"><span>Github</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://gitee.com/go-farther-and-farther/lin-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/lin-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/go-farther-and-farther/lin-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/lin-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></CodeTabs><h2 id="l-plugin" tabindex="-1"><a class="header-anchor" href="#l-plugin"><span>L-Plugin</span></a></h2>
<LinkCard title="L-Plugin
" href="https://github.com/liuly0322/l-plugin">
<ul>
<li>L-Plugin 是一个 Yunzai-Bot V3 的功能插件</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<CodeTabs id="191" :data='[{"id":"在 BOT 根目录文件夹打开终端，运行"},{"id":"安装依赖"},{"id":"如果需要启用运行 python 代码的功能，继续执行:"}]'><template #title0="{ value, isActive }"><span>在 BOT 根目录文件夹打开终端，运行</span></template><template #title1="{ value, isActive }"><span>安装依赖</span></template><template #title2="{ value, isActive }"><span>如果需要启用运行 python 代码的功能，继续执行:</span></template><template #tab0="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/liuly0322/l-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/l-plugin/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template><template #tab1="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> plugins/l-plugin</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template><template #tab2="{ value, isActive }"><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-python-playground-img</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template></CodeTabs><h2 id="gpti-plugin" tabindex="-1"><a class="header-anchor" href="#gpti-plugin"><span>GPTI-PLUGIN</span></a></h2>
<LinkCard title="GPTI-PLUGIN
" href="https://github.com/CikeyQi/gpti-plugin">
<ul>
<li>一个适用于 Yunzai 系列机器人框架 的 GPT 插件，无需令牌来访问 GPT 与 AI 绘画</li>
<li>使用 gpti-js 作为依赖调用，免费使用所有模型，包括对话模型与绘画模型</li>
</ul>
</LinkCard>
<Card title="安装" icon="twemoji:astonished-face"> 
</Card>
<div class="vp-steps"><ol>
<li>
<p>克隆仓库</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/CikeyQi/gpti-plugin.git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ./plugins/gpti-plugin</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>步骤 2</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>如果你的网络环境较差，无法连接到 Github，可以使用 GitHub Proxy 提供的文件代理加速下载服务</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-python-playground-img</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>安装依赖</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pnpm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --filter=gpti-plugin</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></div></template>


