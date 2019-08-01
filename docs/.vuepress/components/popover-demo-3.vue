
<template>
    <div>
        <x-popover>
            <template slot="content" slot-scope="{close}"> 弹出内容
                <x-button @click="close">关闭</x-button>
            </template>
            <x-button>内部关闭</x-button>
        </x-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/popover'
    import Button from '../../../src/button'
    export default {
        components: {
            'x-popover': Popover,
            'x-button': Button
        }
    }
</script>