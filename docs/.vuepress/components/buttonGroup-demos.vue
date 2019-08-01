
<template>
    <div>
        <x-button-group>
            <x-button icon="left" icon-position="left">上一页</x-button>
            <x-button icon="right" icon-position="right">下一页</x-button>
        </x-button-group>
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