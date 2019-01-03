<template>
  <header @click="changeTitle">
    <h1>{{title1}}{{title}}—{{title2}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props:{
    title:{
      type:String,
      required:true,
    },
  },
  data () {
    return {
      title1:"Vue.js Demo8",
      title2:this.title,//父组件传递的参数值title，如果“父组件对应的值发生了变化，子组件会发生对应的变化；若没有发生变化，则不会改变子组件”，所以这里需要重新定义一个属性
    }
  },
  methods:{
    changeTitle:function(){
      this.title="(子组件改变了值)";
      this.title2="(子组件改变了值)";
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
