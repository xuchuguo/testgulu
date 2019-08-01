
<template>
    <div>
        <x-input v-model="value"></x-input>
        <div>
            value: {{value}}
        </div>
    </div>
</template>
<script>
    import Input from '../../../src/input'
    export default {
        components: {
            'x-input': Input
        },
        data() {
            return {
                value: '1'
            }
        }
    }
</script>