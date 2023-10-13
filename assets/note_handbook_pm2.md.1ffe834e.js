import{_ as s,o as a,c as p,Q as n}from"./chunks/framework.4af989bb.js";const F=JSON.parse('{"title":"PM2 手册","description":"","frontmatter":{},"headers":[],"relativePath":"note/handbook_pm2.md","filePath":"note/handbook_pm2.md","lastUpdated":1697177848000}'),l={name:"note/handbook_pm2.md"},e=n(`<h1 id="pm2-手册" tabindex="-1">PM2 手册 <a class="header-anchor" href="#pm2-手册" aria-label="Permalink to &quot;PM2 手册&quot;">​</a></h1><p><a href="https://pm2.fenxianglu.cn/docs/start/" target="_blank" rel="noreferrer">PM2 中文手册</a></p><p><a href="https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/" target="_blank" rel="noreferrer">PM2 官方手册</a></p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="pm2-start-启动" tabindex="-1">pm2 start（启动） <a class="header-anchor" href="#pm2-start-启动" aria-label="Permalink to &quot;pm2 start（启动）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 启动应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动应用并监听文件改动</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app.js</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--watch</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 启动应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 启动应用并监听文件改动</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app.js</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--watch</span></span></code></pre></div><h3 id="pm2-restart-重启" tabindex="-1">pm2 restart（重启） <a class="header-anchor" href="#pm2-restart-重启" aria-label="Permalink to &quot;pm2 restart（重启）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 重启指定应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启所有应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启多个应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 重启指定应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启所有应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重启多个应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app3</span></span></code></pre></div><h3 id="pm2-reload-重载" tabindex="-1">pm2 reload（重载） <a class="header-anchor" href="#pm2-reload-重载" aria-label="Permalink to &quot;pm2 reload（重载）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 重载指定应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重载所有应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重载多个应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reload</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 重载指定应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重载所有应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重载多个应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reload</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app3</span></span></code></pre></div><h3 id="pm2-stop-停止" tabindex="-1">pm2 stop（停止） <a class="header-anchor" href="#pm2-stop-停止" aria-label="Permalink to &quot;pm2 stop（停止）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 停止指定应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止所有应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止多个应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 停止指定应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止所有应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 停止多个应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app3</span></span></code></pre></div><h3 id="pm2-delete-删除" tabindex="-1">pm2 delete（删除） <a class="header-anchor" href="#pm2-delete-删除" aria-label="Permalink to &quot;pm2 delete（删除）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 删除指定应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除所有应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除多个应用</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">delete</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">app3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 删除指定应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除所有应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 删除多个应用</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">delete</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">app3</span></span></code></pre></div><h3 id="pm2-startup-开启自启" tabindex="-1">pm2 startup（开启自启） <a class="header-anchor" href="#pm2-startup-开启自启" aria-label="Permalink to &quot;pm2 startup（开启自启）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 使用进程列表配置，开启开机自启动</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">startup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 使用进程列表配置，开启开机自启动</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">startup</span></span></code></pre></div><h3 id="pm2-save-保存进程列表" tabindex="-1">pm2 save（保存进程列表） <a class="header-anchor" href="#pm2-save-保存进程列表" aria-label="Permalink to &quot;pm2 save（保存进程列表）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 保存进程列表用于开机自启配置</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 保存进程列表用于开机自启配置</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span></span></code></pre></div><h3 id="pm2-unstartup-禁用进程列表配置" tabindex="-1">pm2 unstartup（禁用进程列表配置） <a class="header-anchor" href="#pm2-unstartup-禁用进程列表配置" aria-label="Permalink to &quot;pm2 unstartup（禁用进程列表配置）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 禁用进程列表</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unstartup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 禁用进程列表</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unstartup</span></span></code></pre></div><h3 id="pm2-cleardump-清空进程列表配置" tabindex="-1">pm2 cleardump（清空进程列表配置） <a class="header-anchor" href="#pm2-cleardump-清空进程列表配置" aria-label="Permalink to &quot;pm2 cleardump（清空进程列表配置）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 新建一个空的配置文件覆盖</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unstartup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 新建一个空的配置文件覆盖</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unstartup</span></span></code></pre></div><h3 id="pm2-update-更新" tabindex="-1">pm2 update（更新） <a class="header-anchor" href="#pm2-update-更新" aria-label="Permalink to &quot;pm2 update（更新）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 更新进程</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">update</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 更新进程</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">update</span></span></code></pre></div><h3 id="pm2-list-显示" tabindex="-1">pm2 list（显示） <a class="header-anchor" href="#pm2-list-显示" aria-label="Permalink to &quot;pm2 list（显示）&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 显示所有进程状态</span></span>
<span class="line"><span style="color:#B392F0;">pm2</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 显示所有进程状态</span></span>
<span class="line"><span style="color:#6F42C1;">pm2</span><span style="color:#24292E;"> </span><span style="color:#032F62;">list</span></span></code></pre></div><h3 id="pm2-link-链接官方在线监控" tabindex="-1">pm2 link（链接官方在线监控） <a class="header-anchor" href="#pm2-link-链接官方在线监控" aria-label="Permalink to &quot;pm2 link（链接官方在线监控）&quot;">​</a></h3><ol><li><p>访问 <a href="https://id.keymetrics.io/api/oauth/login" target="_blank" rel="noreferrer">pm2.io</a></p></li><li><p>执行 <code>pm2 link XXX XXX</code>，关联服务</p></li><li><p>执行 <code>pm2 plus</code>，自动打开在线监控网页</p></li></ol>`,28),o=[e];function t(c,r,i,y,d,E){return a(),p("div",null,o)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};