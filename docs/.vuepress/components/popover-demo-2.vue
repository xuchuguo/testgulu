
<template>
    <div>
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