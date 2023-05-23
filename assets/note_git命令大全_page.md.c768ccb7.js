import{_ as s,c as a,o as n,V as l}from"./chunks/framework.0cefc241.js";const D=JSON.parse('{"title":"git命令大全","description":"","frontmatter":{},"headers":[],"relativePath":"note/git命令大全/page.md","lastUpdated":1684810704000}'),p={name:"note/git命令大全/page.md"},e=l(`<h1 id="git命令大全" tabindex="-1">git命令大全 <a class="header-anchor" href="#git命令大全" aria-label="Permalink to &quot;git命令大全&quot;">​</a></h1><p>来源文章<a href="https://zhuanlan.zhihu.com/p/389814854" target="_blank" rel="noreferrer">吐血整理，全网最全Git命令手册</a></p><h2 id="常用语句" tabindex="-1">常用语句 <a class="header-anchor" href="#常用语句" aria-label="Permalink to &quot;常用语句&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">git init                                                  # 初始化本地git仓库（创建新仓库）</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.name &quot;xxx&quot;                       # 配置用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email &quot;xxx@xxx.com&quot;              # 配置邮件</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.ui true                         # git status等命令自动着色</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.status auto</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.diff auto</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.branch auto</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global color.interactive auto</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global --unset http.proxy                    # remove  proxy configuration on git</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone git+ssh://git@192.168.53.168/VT.git             # clone远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git status                                                # 查看当前版本状态（是否修改）</span></span>
<span class="line"><span style="color:#A6ACCD;">git add xyz                                               # 添加xyz文件至index</span></span>
<span class="line"><span style="color:#A6ACCD;">git add .                                                 # 增加当前子目录下所有更改过的文件至index</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;xxx&#39;                                       # 提交</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend -m &#39;xxx&#39;                               # 合并上一次提交（用于反复修改）</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -am &#39;xxx&#39;                                      # 将add和commit合为一步</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm xxx                                                # 删除index中的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git rm -r *                                               # 递归删除</span></span>
<span class="line"><span style="color:#A6ACCD;">git log                                                   # 显示提交日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -1                                                # 显示1行日志 -n为n行</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -5</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --stat                                            # 显示提交日志及相关变动文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git log -p -m</span></span>
<span class="line"><span style="color:#A6ACCD;">git show dfb02e6e4f2f7b573337763e5c0013802e392818         # 显示某个提交的详细内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git show dfb02                                            # 可只用commitid的前几位</span></span>
<span class="line"><span style="color:#A6ACCD;">git show HEAD                                             # 显示HEAD提交日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git show HEAD^                                            # 显示HEAD的父（上一个版本）的提交日志 ^^为上两个版本 ^5为上5个版本</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag                                                   # 显示已存在的tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag -a v2.0 -m &#39;xxx&#39;                                  # 增加v2.0的tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git show v2.0                                             # 显示v2.0的日志及详细内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git log v2.0                                              # 显示v2.0的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff                                                  # 显示所有未添加至index的变更</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff --cached                                         # 显示所有已添加index但还未commit的变更</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD^                                            # 比较与上一个版本的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD -- ./lib                                    # 比较与HEAD版本lib目录的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff origin/master..master                            # 比较远程分支master上有本地分支master上没有的</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff origin/master..master --stat                     # 只显示差异的文件，不显示具体内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin git+ssh://git@192.168.53.168/VT.git # 增加远程定义（用于push/pull/fetch）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch                                                # 显示本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --contains 50089                               # 显示包含提交50089的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -a                                             # 显示所有分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -r                                             # 显示所有原创分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --merged                                       # 显示所有已合并到当前分支的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch --no-merged                                    # 显示所有未合并到当前分支的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -m master master_copy                          # 本地分支改名</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b master_copy                               # 从当前分支创建新分支master_copy并检出</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b master master_copy                        # 上面的完整版</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout features/performance                         # 检出已存在的features/performance分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout --track hotfixes/BJVEP933                    # 检出远程分支hotfixes/BJVEP933并创建本地跟踪分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout v2.0                                         # 检出版本v2.0</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b devel origin/develop                      # 从远程分支develop创建新本地分支devel并检出</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -- README                                    # 检出head版本的README文件（可用于修改错误回退）</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge origin/master                                   # 合并远程master分支至当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick ff44785404a8e                             # 合并提交ff44785404a8e的修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master                                    # 将当前分支push到远程master分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin :hotfixes/BJVEP933                        # 删除远程仓库的hotfixes/BJVEP933分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push --tags                                           # 把所有tag推送到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin master                                    # 获取远程分支master并merge到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git mv README README2                                     # 重命名文件README为README2</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD                                     # 将当前版本重置为HEAD（通常用于merge失败回退）</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -d hotfixes/BJVEP933                           # 删除分支hotfixes/BJVEP933（本分支修改已合并到其他分支）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -D hotfixes/BJVEP933                           # 强制删除分支hotfixes/BJVEP933</span></span>
<span class="line"><span style="color:#A6ACCD;">git ls-files                                              # 列出git index包含的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git show-branch                                           # 图示当前分支历史</span></span>
<span class="line"><span style="color:#A6ACCD;">git show-branch --all                                     # 图示所有分支历史</span></span>
<span class="line"><span style="color:#A6ACCD;">git whatchanged                                           # 显示提交历史对应的文件修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert dfb02e6e4f2f7b573337763e5c0013802e392818       # 撤销提交dfb02e6e4f2f7b573337763e5c0013802e392818</span></span>
<span class="line"><span style="color:#A6ACCD;">git ls-tree HEAD                                         # 内部命令：显示某个git对象</span></span>
<span class="line"><span style="color:#A6ACCD;">git rev-parse v2.0                                        # 内部命令：显示某个ref对于的SHA1 HASH</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog                                                # 显示所有提交，包括孤立节点</span></span>
<span class="line"><span style="color:#A6ACCD;">git show HEAD@{5}</span></span>
<span class="line"><span style="color:#A6ACCD;">git show master@{yesterday}                               # 显示master分支昨天的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git log --pretty=format:&#39;%h %s&#39; --graph                   # 图示提交日志</span></span>
<span class="line"><span style="color:#A6ACCD;">git show HEAD~3</span></span>
<span class="line"><span style="color:#A6ACCD;">git show -s --pretty=raw 2be7fcb476</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash                                                 # 暂存当前修改，将所有至为HEAD状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash list                                            # 查看所有暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash show -p stash@{0}                               # 参考第一次暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash apply stash@{0}                                 # 应用第一次暂存</span></span>
<span class="line"><span style="color:#A6ACCD;">git grep &quot;delete from&quot;                                    # 文件中搜索文本“delete from”</span></span>
<span class="line"><span style="color:#A6ACCD;">git grep -e &#39;#define&#39; --and -e SORT_DIRENT</span></span>
<span class="line"><span style="color:#A6ACCD;">git gc</span></span>
<span class="line"><span style="color:#A6ACCD;">git fsck</span></span></code></pre></div><h2 id="git-config-配置" tabindex="-1">git config（配置） <a class="header-anchor" href="#git-config-配置" aria-label="Permalink to &quot;git config（配置）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 显示当前的Git配置</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑Git配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config -e [--global]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 输出、设置基本的全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --global user.email</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git config --global user.name</span></span></code></pre></div><h2 id="git-init-新建" tabindex="-1">git init（新建） <a class="header-anchor" href="#git-init-新建" aria-label="Permalink to &quot;git init（新建）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 初始化当前项目</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个目录，将其初始化为Git代码库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init [project-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 在指定目录创建一个空的 Git 仓库。运行这个命令会创建一个名为 directory，只包含 .git 子目录的空目录。</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git init --bare &lt;directory&gt;</span></span></code></pre></div><h2 id="git-clone-克隆" tabindex="-1">git clone（克隆） <a class="header-anchor" href="#git-clone-克隆" aria-label="Permalink to &quot;git clone（克隆）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 下载一个项目和它的整个代码历史</span></span>
<span class="line"><span style="color:#A6ACCD;"># 这个命令就是将一个版本库拷贝到另一个目录中，同时也将分支都拷贝到新的版本库中。这样就可以在新的版本库中提交到远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git clone [url]</span></span></code></pre></div><h2 id="git-add-添加" tabindex="-1">git add（添加） <a class="header-anchor" href="#git-add-添加" aria-label="Permalink to &quot;git add（添加）&quot;">​</a></h2><p>添加文件到当前工作空间中。如果你不使用 git add 将文件添加进去，那么这些文件也不会添加到之后的提交之中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 添加一个文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add test.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加一个子目录中的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add /path/to/file/test.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 支持正则表达式</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add ./*.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加指定文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加指定目录到暂存区，包括子目录</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add [dir]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add .</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加每个变化前，都会要求确认</span></span>
<span class="line"><span style="color:#A6ACCD;"># 对于同一个文件的多处变化，可以实现分次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git add -p</span></span></code></pre></div><h2 id="git-rm-移除" tabindex="-1">git rm（移除） <a class="header-anchor" href="#git-rm-移除" aria-label="Permalink to &quot;git rm（移除）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 移除 HelloWorld.js</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm HelloWorld.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 移除子目录中的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm /pather/to/the/file/HelloWorld.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除工作区文件，并且将这次删除放入暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm [file1] [file2] ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止追踪指定文件，但该文件会保留在工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git rm --cached [file]</span></span></code></pre></div><h2 id="git-status-状态" tabindex="-1">git status（状态） <a class="header-anchor" href="#git-status-状态" aria-label="Permalink to &quot;git status（状态）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 显示分支，未跟踪文件，更改和其他不同</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git status</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看其他的git status的用法</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git help status</span></span></code></pre></div><h2 id="git-commit-提交" tabindex="-1">git commit（提交） <a class="header-anchor" href="#git-commit-提交" aria-label="Permalink to &quot;git commit（提交）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;"># 提交暂存区到仓库区附带提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交暂存区的指定文件到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit [file1] [file2] ... -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交工作区自上次commit之后的变化，直接到仓库区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交时显示所有diff信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用一次新的commit，替代上一次提交</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend -m [message]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重做上一次commit，并包括指定文件的新变化</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git commit --amend [file1] [file2] ...</span></span></code></pre></div><h2 id="git-stash-暂存" tabindex="-1">git stash（暂存） <a class="header-anchor" href="#git-stash-暂存" aria-label="Permalink to &quot;git stash（暂存）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 暂时将未提交的变化移除，稍后再移入</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash pop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列所有stash</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash list</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复暂存的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash apply</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除暂存区</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git stash drop</span></span></code></pre></div><h2 id="git-push-推送" tabindex="-1">git push（推送） <a class="header-anchor" href="#git-push-推送" aria-label="Permalink to &quot;git push（推送）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 上传本地指定分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;"># 把本地的分支更新到远端origin的master分支上</span></span>
<span class="line"><span style="color:#A6ACCD;"># git push &lt;远端&gt; &lt;分支&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"># git push 相当于 git push origin master</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 强行推送当前分支到远程仓库，即使有冲突</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 推送所有分支到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --all</span></span></code></pre></div><h2 id="git-checkout-检出" tabindex="-1">git checkout（检出） <a class="header-anchor" href="#git-checkout-检出" aria-label="Permalink to &quot;git checkout（检出）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 检出一个版本库，默认将更新到master分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 检出到一个特定的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，并且切换过去，相当于&quot;git branch &lt;名字&gt;; git checkout &lt;名字&gt;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b newBranch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 切换到上一个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -</span></span></code></pre></div><h2 id="git-branch-分支" tabindex="-1">git branch（分支） <a class="header-anchor" href="#git-branch-分支" aria-label="Permalink to &quot;git branch（分支）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看所有的分支和远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -a</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 创建一个新的分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重命名分支</span></span>
<span class="line"><span style="color:#A6ACCD;"># git branch -m &lt;旧名称&gt; &lt;新名称&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -m [branch-name] [new-branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编辑分支的介绍</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch-name] --edit-description</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出所有远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -r</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，但依然停留在当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch-name]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，并切换到该分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch [branch] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，与指定的远程分支建立追踪关系</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --track [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 建立追踪关系，在现有分支与指定的远程分支之间</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch --set-upstream [branch] [remote-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git branch -dr [remote/branch]</span></span></code></pre></div><h2 id="git-merge-合并" tabindex="-1">git merge（合并） <a class="header-anchor" href="#git-merge-合并" aria-label="Permalink to &quot;git merge（合并）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 将其他分支合并到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge branchName</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 在合并时创建一个新的合并后的提交</span></span>
<span class="line"><span style="color:#A6ACCD;"># 不要 Fast-Foward 合并，这样可以生成 merge 提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git merge --no-ff branchName</span></span></code></pre></div><h2 id="git-diff-差异展示" tabindex="-1">git diff（差异展示） <a class="header-anchor" href="#git-diff-差异展示" aria-label="Permalink to &quot;git diff（差异展示）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;"># 显示暂存区和工作区的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示暂存区和上一个commit的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --cached [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示工作区与当前分支最新commit之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示两次提交之间的差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff [first-branch]...[second-branch]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示今天你写了多少行代码</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --shortstat &quot;@{0 day ago}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --staged</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 比较暂存区和版本库差异</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --cached</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 仅仅比较统计信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git diff --stat</span></span></code></pre></div><h2 id="git-revert-撤销" tabindex="-1">git revert（撤销） <a class="header-anchor" href="#git-revert-撤销" aria-label="Permalink to &quot;git revert（撤销）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 新建一个commit，用来撤销指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git revert [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 恢复最后一次提交的状态</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git revert HEAD</span></span></code></pre></div><h2 id="git-reset-重置" tabindex="-1">git reset（重置） <a class="header-anchor" href="#git-reset-重置" aria-label="Permalink to &quot;git reset（重置）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置暂存区与工作区，与上一次commit保持一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --hard [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git reset --keep [commit]</span></span></code></pre></div><h2 id="git-tag-标签" tabindex="-1">git tag（标签） <a class="header-anchor" href="#git-tag-标签" aria-label="Permalink to &quot;git tag（标签）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 列出所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在当前commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个tag在指定commit</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag [tag] [commit]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除本地tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git tag -d [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 删除远程tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push origin :refs/tags/[tagName]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看tag信息</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git show [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交指定tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] [tag]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 提交所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git push [remote] --tags</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 新建一个分支，指向某个tag</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git checkout -b [branch] [tag]</span></span></code></pre></div><h2 id="git-log-日志" tabindex="-1">git log（日志） <a class="header-anchor" href="#git-log-日志" aria-label="Permalink to &quot;git log（日志）&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;"># 显示commit历史，以及每次commit发生变更的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --stat</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 搜索提交历史，根据关键词</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -S [keyword]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，每个commit占据一行</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --pretty=format:%s</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log [tag] HEAD --grep feature</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示某个文件的版本历史，包括文件改名</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log --follow [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示指定文件相关的每一次diff</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -p [file]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 显示过去5次提交</span></span>
<span class="line"><span style="color:#A6ACCD;">$ git log -5 --pretty --oneline</span></span></code></pre></div>`,39),t=[e];function o(c,i,r,C,A,g){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{D as __pageData,h as default};
