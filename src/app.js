
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('x-button', Button);
Vue.component('x-icon', Icon);
Vue.component('x-button-group', ButtonGroup);
Vue.component('x-input', Input);
Vue.component('x-row', Row);
Vue.component('x-col', Col);
Vue.component('x-layout', Layout)
Vue.component('x-header', Header)
Vue.component('x-content', Content)
Vue.component('x-sider', Sider)
Vue.component('x-footer', Footer)
Vue.component('x-toast', Toast)
Vue.use(plugin)
Vue.component('x-tabs', Tabs)
Vue.component('x-tabs-head', TabsHead)
Vue.component('x-tabs-body', TabsBody)
Vue.component('x-tabs-item', TabsItem)
Vue.component('x-tabs-pane', TabsPane)
Vue.component('x-popover', Popover)
Vue.component('x-collapse', Collapse)
Vue.component('x-collapse-item', CollapseItem)

new Vue({
    el: '#app',
    data: {
        selectedTab: ['2','1'],
        value: '1',
        selected: '1',
        message: '',
        loading1: false,
        loading2: true,
        loading3: false
    },
    created() {
    },
    methods: {
        showToast1() {
            this.showToast('middle')
        },
        showToast2() {
            this.showToast('top')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`更新成功,第${parseInt(Math.random() * 100)}号按钮`, {
                enableHTML: false,
                autoClose: false
            })
        }
    }
});