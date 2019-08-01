---
title: Collapse 手风琴
---
# 手风琴

## 设置默认开启

#### 浏览
#
<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

#
#### 代码
``` js
data() {
    return {
        selectedTab: ['1', '2', '3']
    }
}
```
```html
<x-collapse :selected.sync="selectedTab">
    <x-collapse-item title="标题1" name="1">内容1</x-collapse-item>
    <x-collapse-item title="标题2" name="2">内容2</x-collapse-item>
    <x-collapse-item title="标题3" name="3">内容3</x-collapse-item>
</x-collapse>
```
## 设定 single

#### 浏览
#
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

#### 代码
``` js
data() {
    return {
        selectedTab: ['1']
    }
}
```
```html
<x-collapse :selected.sync="selectedTab" single>
    <x-collapse-item title="标题1" name="1">内容1</x-collapse-item>
    <x-collapse-item title="标题2" name="2">内容2</x-collapse-item>
    <x-collapse-item title="标题3" name="3">内容3</x-collapse-item>
</x-collapse>
```
::: tip
设定 single 同时建议 selectedTab 也为单个
:::