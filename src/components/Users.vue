<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
    	<li v-for="(user,index) in users1" @click="user.show=!user.show">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.position}}</h3>
      </li>
    </ul>
    <button @click="deleteUser">删除</button>
  </div>
</template> 

<script>
export default {
  name: 'users',

  /*
  props:["users"],//props获取父组件的参数;
  当父组件向子组件传递对象或者数组的时候，是引用传递
  */
  props:{
    users:{
      type:Array,
      required:true,
      default:function(){//default和validator实在组件实例创建之前执行的
        return [{name:"张三",position:"Web开发",show:false}];
      },
      validator:function(){
        return 1==1;
      },
    },
  },
  data () {
    return {
    	users1:this.users,
    } 
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
	color:green;
}

.users{
  width:100%;
  max-width: 1200px;
  margin:40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul{
  display:flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
