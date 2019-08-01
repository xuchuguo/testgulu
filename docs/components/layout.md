---
title: Layout 布局
---
# 布局

###  简单布局

#### 浏览
#
<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 代码
```html
<x-layout style="color: white;">
    <x-header style="height: 50px; background:lightskyblue;">
        header
    </x-header>
    <x-content style="height: 100px; background:deepskyblue;">
        content
    </x-content>
    <x-footer style="height: 50px; background:lightskyblue;">
        footer
    </x-footer>
</x-layout>
```
### 内侧边栏

侧边栏可关闭哦
#### 浏览
#
<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 代码
```html
<x-layout style="color: white; overflow:hidden;">
    <x-header style="height: 50px; background:lightskyblue;">
        header
    </x-header>
    <x-layout>
        <x-sider style="height: 100px; background: #7cb8ff; width:200px; color: black;">
            sider
        </x-sider>
        <x-content style="height: 100px; background:deepskyblue;">
            content
        </x-content>
    </x-layout>
    <x-footer style="height: 50px; background:lightskyblue;">
        footer
    </x-footer>
</x-layout>
```
###  外侧边栏

#### 浏览
#
<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 代码
```html
<x-layout style="color: white; overflow:hidden;">
    <x-sider style=" background: #7cb8ff; width:200px; color: black;">
        sider
    </x-sider>
    <x-layout>
        <x-header style="height: 50px; background:lightskyblue;">
            header
        </x-header>
        <xcontent style="height: 100px; background:deepskyblue;">
            content
        </xcontent>
        <x-footer style="height: 50px; background:lightskyblue;">
            footer
        </x-footer>
    </x-layout>
</x-layout>
```