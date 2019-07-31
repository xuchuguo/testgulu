
const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('x-tabs', Tabs)
Vue.component('x-tabs-head', TabsHead)
Vue.component('x-tabs-body', TabsBody)
Vue.component('x-tabs-item', TabsItem)
Vue.component('x-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', () => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <x-tabs selected="finance">
        <x-tabs-head>
          <x-tabs-item name="woman"> 美女 </x-tabs-item>
          <x-tabs-item name="finance"> 财经 </x-tabs-item>
          <x-tabs-item name="sports"> 体育 </x-tabs-item>
        </x-tabs-head>
        <x-tabs-body>
          <x-tabs-pane name="woman"> 美女相关资讯 </x-tabs-pane>
          <x-tabs-pane name="finance"> 财经相关资讯 </x-tabs-pane>
          <x-tabs-pane name="sports"> 体育相关资讯 </x-tabs-pane>
        </x-tabs-body>
      </x-tabs>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })

    it('可以接受 direction prop', () => {

    })

})