<template>
  <div id="app">
    clicked {{$store.state.count}} times,count is {{evenOrOdd}}
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">increment Async</button>
  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: 
    // 如果有多处要用到奇偶判断怎么办？
    // evenOrOdd(){
    //   return this.$store.state.count % 2 ===0 ? 'even':'odd'
    // }
    mapGetters([
      'evenOrOdd'
    ])
  ,
  components: {
   
  },
  props:['count'],
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
