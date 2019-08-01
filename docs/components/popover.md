---
title: Popover 弹出层
---
# 弹出层
:::tip
popover 弹出层内容支持 html
:::
### 点击

#### 浏览
#
<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 代码

```html
<x-popover>
    <x-button>上方弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="bottom">
    <x-button>下方弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="left">
    <x-button>左边弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="right">
    <x-button>右边弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
```
###  hover

#### 浏览
#
<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 代码

```html
<x-popover trigger="hover">
    <x-button>上方弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="bottom" trigger="hover">
    <x-button>下方弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="left" trigger="hover">
    <x-button>左边弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
<x-popover position="right" trigger="hover">
    <x-button>右边弹出</x-button>
    <template slot="content"> 弹出内容</template>
</x-popover>
```
### 内部关闭

#### 浏览
#
<ClientOnly>
<popover-demo-3></popover-demo-3>
</ClientOnly>

#### 代码

```html
<x-popover>
    <template slot="content" slot-scope="{close}"> 弹出内容
        <x-button @click="close">关闭</x-button>
    </template>
    <x-button>内部关闭</x-button>
</x-popover>
```