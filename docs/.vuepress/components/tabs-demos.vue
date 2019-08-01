
<template>
    <div style="padding-top: 16px;">
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
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsBody from '../../../src/tabs-body'
    import TabsItem from '../../../src/tabs-item'
    import TabsPane from '../../../src/tabs-pane'
    export default {
        components: {
            'x-tabs': Tabs,
            'x-tabs-head': TabsHead,
            'x-tabs-body': TabsBody,
            'x-tabs-item': TabsItem,
            'x-tabs-pane': TabsPane
        },
        data() {
            return {
                selected: '1'
            }
        }
    }
</script>


