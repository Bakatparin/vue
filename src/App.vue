<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>

    <HelloWorld/>
    
    <users></users>
    <Users></Users>
    <aAA></aAA>
    <AAA></AAA>
    
    
    
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//局部注册组件：aaa为引入的组件的别名
import aaa from './components/Users'

export default {
  name: 'App',
  data (){
    return {
      title:"这是我的第7个demo"
    }
  },
  components: {
    "HelloWorld":HelloWorld,
    //Users为使用组件时的别名(不能使用html内置的标签名)，或者不用别名，直接使用引入组件时的名字,这里的别名最好首字母大写，使用的时候首字母大小写都可以，如果别名首字母小写的话，使用的时候首字母就只能小写
    "Users":aaa,
    "AAA":aaa
  }
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
h1{
  color:purple;
}
</style>
