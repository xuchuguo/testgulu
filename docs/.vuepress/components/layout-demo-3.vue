<template>
    <div>
        <x-layout style="color: white; overflow:hidden;">
            <x-sider style=" background: #7cb8ff; width:200px; color: black;">
                sider
            </x-sider>
            <x-layout>
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
        </x-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Footer from '../../../src/footer'
    import Content from '../../../src/content'
    import Sider from '../../../src/sider'
    export default {
        components: {
            'x-layout': Layout,
            'x-header': Header,
            'x-footer': Footer,
            'x-content': Content,
            'x-sider': Sider
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>