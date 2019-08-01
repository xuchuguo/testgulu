<template>
    <div>
        <x-button>默认按钮</x-button>
        <x-button icon="settings">设置</x-button>
        <x-button icon="thumbs-up">点赞</x-button>
        <x-button icon="download" icon-position="right">下载</x-button>
        <x-button :loading="true">登录中</x-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    export default {
        components: {
            'x-button': Button,
            'x-button-group': ButtonGroup
        }
    }
</script>