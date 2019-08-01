
<template>
    <div>
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
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Footer from '../../../src/footer'
    import Content from '../../../src/content'
    export default {
        components: {
            'x-layout': Layout,
            'x-header': Header,
            'x-footer': Footer,
            'x-content': Content
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>