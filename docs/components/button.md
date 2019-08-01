---
title: Button 按钮
---

# 按钮

提供单个按钮和组合形式的按钮，按钮可以添加图标，设置图标位置等。。。

## 单个按钮 

#### 浏览
#
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

#### 代码

``` html
<x-button>默认按钮</w-button>
<x-button icon="settings">设置</x-button>
<x-button icon="thumbs-up">点赞</x-button>
<x-button icon="download" icon-position="right">下载</x-button>
<x-button :loading="true">登录中</x-button>
```
## 按钮组合

#### 浏览
#
<ClientOnly>
<buttonGroup-demos></buttonGroup-demos>
</ClientOnly>

#### 代码

``` html
<x-button-group>
    <x-button icon="left" icon-position="left">上一页</x-button>
    <x-button icon="right" icon-position="right">下一页</x-button>
</x-button-group>
```