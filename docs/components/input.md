---
title: Input 输入框
---
# 输入框

#### 浏览
#
<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

#### 代码

``` html

<x-input value="中文"></x-input>
<x-input value="中文" readonly></x-input>
<x-input value="中文" disabled></x-input>
<x-input value="中文" error="错误"></x-input>

```
## 支持双向绑定

#### 浏览
#
<ClientOnly>
<input-model-demos></input-model-demos>
</ClientOnly>

#### 代码
```
data:{
    value: '1'
}
```
``` html
<x-input v-model="value"></x-input>
<div>
    value: {{value}}
</div>
```