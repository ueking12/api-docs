# 开始使用

## 如何反馈沟通疑问

### 获得帮助

1. 如果您刚接触我们的产品，可以先从[官方教程](https://meta.feishu.cn/wiki/wikcnmY0MQweLdbnlywkJJiDucd)开始，先尝试做一个游戏Demo：
2. 如果您想想探索更多功能，可以直接查看我们的[产品手册](https://meta.feishu.cn/wiki/wikcnTRMsvWdaJq2SOenbuHjXmf)和[API手册](https://api-docs.ark.online/);
3、如果你在创作过程中有任何问题，都可以直接访问我们的[论坛](https://forum.ark.online/)与其他创作者沟通讨论；

### 网站结构

善用搜索+目录结构查找有用信息，后续我们也会统一官方内容（产品手册等）并不断优化搜索；

![目录结构](https://tc-cdn-forum.ark.online/forum/202302/27/112907mi8oj2o51kzr25jm.png)

### 反馈问题

如果你想报告bug或者提出疑问，可以划线直接通过GitHub提交issue，我们也非常欢迎pull request！

![划线反馈](https://tc-cdn-forum.ark.online/forum/202302/27/113109tgrcp2wvuypcik8c.gif)

## 如何参与内容贡献

### 帮助同伴

贡献代码并不是对我们的唯一贡献形式，欢迎大家通过[论坛](https://forum.ark.online/)为其他创作者回答问题&发布心得技巧，这是一种非常有价值的贡献。

### 贡献代码

当然，直接点击网页编辑按钮可以编辑当前的网页，PR我们会在一个工作日内处理！

![划线反馈](https://tc-cdn-forum.ark.online/forum/202302/27/113110nvzywxtc6rsrvz7g.gif)

#### 添加描述

Ctrl+F直接搜索Markdown文档，在对应地方可以直接填写文字描述；

``` markdown
其中超链接Markdown语法代码：
[超链接显示名](超链接地址 "超链接title")
示例：[API手册](https://api-docs.ark.online/)。
```

渲染效果为：[API手册](https://api-docs.ark.online/)

#### 添加代码

网站使用[Shiki](https://shiki.matsu.io/)规范标识代码块内容，您需要在代码块前后加```,同时为了自动识别为ts，还需要在开头加一下ts；

````
```ts
// 两倍速播放
let anim = player.character.loadAnimation(animGUID);
anim.rate = 2;
anim.play();
// 动画播放加速/减慢成n秒
this.Anim = player.character.loadAnimation(this.AnimList[0]);
this.Anim.rate = this.Anim.length/n;
this.Anim.play();
```
````

**渲染效果如下**

```ts
// 两倍速播放
let anim = player.character.loadAnimation(animGUID);
anim.rate = 2;
anim.play();
// 动画播放加速/减慢成n秒
this.Anim = player.character.loadAnimation(this.AnimList[0]);
this.Anim.rate = this.Anim.length/n;
this.Anim.play();
```

#### 添加高亮

高亮直接在文字块前后加:::，有以下5个类型，如：warning XXX，XXX为显示标题；

```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning Precautions
This is a warning.
:::

::: danger Deprecated
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**渲染效果如下**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning Precautions
This is a warning.
:::

::: danger Deprecated
This is a dangerous warning.
:::

::: details
This is a details block.
:::