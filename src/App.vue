<template>
  <div id="app">
    <app-header :title="title"></app-header>
    <span>父组件title值：{{title}}</span>
    <button @click="change">父组件改变Title</button>
    <life></life>
    <!-- <uSers :users="users"></uSers>
    <u-sers :users="users"></u-sers> -->
    <MyUsers :users="users"></MyUsers>
    <my-users :users="users"></my-users>
    <app-footer :title="title" @footerChanged="updateFooter"></app-footer>
    <!--父组件在实现子组件监听的事件的时候，如果有参数，这里可以不写，写的话括号里面只能是$event  -->
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//局部注册组件：aaa为引入的组件的别名
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
import Life from './components/Life'

export default {
  name: 'App',
  data (){
    return {
      title:"(这是一个固定值，而不是引用)",
      users:[
        {name:"张三",position:"Web开发",show:false},
        {name:"李四",position:"Java开发",show:false},
        {name:"王五",position:"客服",show:false},
        {name:"赵六",position:"php开发",show:false},
        {name:"二麻",position:"人事经理",show:false},
        {name:"王八",position:"测试工程师",show:false},
        {name:"小明",position:"运维工程师",show:false},
        {name:"小红",position:"产品经理",show:false},
        {name:"小王",position:"项目经理",show:true},
      ],
    }
  },
  components: {
    "HelloWorld":HelloWorld,
    //Users为使用组件时的别名(不能使用html内置的标签名)，或者不用别名，直接使用引入组件时的名字,这里的别名最好首字母大写，使用的时候首字母大小写都可以，如果别名首字母小写的话，使用的时候首字母就只能小写
    "MyUsers":Users,
    "app-header":Header,
    "app-footer":Footer,
    Life
  },
  methods:{
    change:function(){
      this.title+="1";
    },
    updateFooter:function(str){
      this.title=str;
    }
  }
}
</script>

<style scoped="">

h1{
  color:purple;
}
</style>
