<template>
  <footer @click="changeFooter">
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props:{
    title:{
      type:String,
      required:true,
    },
  },
  data () {
    return {
      copyright:"@Copyright 2018 Vue Demo By Bakatparin"
    }
  },
  methods:{
    changeFooter:function(){
      this.$emit("footerChanged","(子向父组件传值)");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
  background: #222;
  padding: 5px;
}
footer p{
  color: lightgreen;
  text-align: center;
}
</style>
