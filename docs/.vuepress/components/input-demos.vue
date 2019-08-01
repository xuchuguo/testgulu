
<template>
    <div>
        <x-input value="中文"></x-input>
        <x-input value="中文" readOnly></x-input>
        <x-input value="中文" disabled></x-input>
        <x-input value="中文" error="错误"></x-input>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        components: {
            'x-input': Input
        }
    }
</script>