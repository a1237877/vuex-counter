// vue  开发 两部分
// 组件开发(协作)   vuex数据管理(考虑整个应用程序的数据流 难)

// store 超市  new Vuex.store({
//   state
// })

// 中央 组件 地方
// 读  this.$store.state.count
// 写 actions mutations getters
// vuex 不是什么时候都要  大项目离不开vuex
// 公司的概念
// CEO 旅梦
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const state = {
  count:0
}

//相当于组件里的computed
const getters = {
  evenOrOdd:state => state.count % 2 === 0 ? 'even' : 'odd'

}

//改变  唯一可以修改状态
// 财务
const mutations = {
  increment(state){  //state 是实参
    state.count++
 },
 decrement(state){
   state.count--
 },
 incrementIfOdd(state){
   state.count++
 }
}

// 动作 部门 不能修改 state
const actions = {
  increment:({commit}) => {
    commit('increment')   
    // 'increment' 表示mutations方法
  },
  decrement:({commit}) => {
    commit('decrement')
  },
  //actions 不可以修改state   可以读
  incrementIfOdd({commit,state}){
    if((state.count+1)%2 ===0){
      commit('incrementIfOdd');
    }
  },
  incrementAsync({commit}){
    // actions axios 异步取数据...
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        commit('increment')
        resolve();
      },2000)
    }).then(({commit})=>{
      commit('decrement')
    })
  }

}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})