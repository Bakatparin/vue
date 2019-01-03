<template>
  <div class="users">
    <ul>
    	<h1><li v-for="(user,index) in users">{{index+1}}:{{user}}</li></h1>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
    	users:["张三","李四","王五"]
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
	color:blue;
}
</style>
