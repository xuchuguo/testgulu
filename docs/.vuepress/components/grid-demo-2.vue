<template>
    <div>
        <x-row class="demoRow" gutter="10">
            <x-col span="8"><div class="demoCol">8</div></x-col>
            <x-col span="8"><div class="demoCol">8</div></x-col>
            <x-col span="8"><div class="demoCol">8</div></x-col>
        </x-row>
        <x-row class="demoRow" gutter="10">
            <x-col span="6"><div class="demoCol">6</div></x-col>
            <x-col span="6"><div class="demoCol">6</div></x-col>
            <x-col span="6"><div class="demoCol">6</div></x-col>
            <x-col span="6"><div class="demoCol">6</div></x-col>
        </x-row>
    </div>
</template>

<script>
    import Col from '../../../src/col'
    import Row from '../../../src/row'
    export default {
        components: {
            'x-col': Col,
            'x-row': Row
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #7CB8FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>