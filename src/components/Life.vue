<!-- 生命周期测试vue组件 -->
<template>
  <div class="life" @click="change">
    <h1 >{{ msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Life',
  data () {
    return {
      msg: 1
    }
  },
  methods:{
  	change:function(){
  		this.msg++;
  	}

  },
  beforeCreate:function(){
  	console.log(this.$el, 'beforeCreate');
  },
  created:function(){
  	console.log(this.$el, 'created');
  },
  beforeMount:function(){
  	console.log(this.$el, 'beforeMount');
  },
  mounted:function(){
  	console.log(this.$el, 'mounted');
  },
  beforeUpdate:function(){
  	alert(this.$el, 'beforeUpdate');//此时属性值已经发生变化，但是dom没有渲染而已
  },
  updated:function(){
  	console.log(this.$el, 'updated');
  },
  beforeDestory:function(){
  	console.log(this.$el, 'beforeDestory');
  },
  destoryed:function(){
  	console.log(this.$el, 'destoryed');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
