---
title: Tabs 标签页
---
# 标签页

## 使用方法

#### 浏览
#
<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 代码

``` js
data:{
  selected: '1'
}
```

``` html
<x-tabs :selected="selected">
    <x-tabs-head>
        <x-tabs-item name="1">1</x-tabs-item>
        <x-tabs-item name="2">2</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
        <x-tabs-pane name="1">content 1</x-tabs-pane>
        <x-tabs-pane name="2">content 2</x-tabs-pane>
    </x-tabs-body>
</x-tabs>
```
