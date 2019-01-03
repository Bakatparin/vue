Vue.component("greeting",{
	template:'<div>'+
	'<p>{{name}}:大家好，我是一{{name}}</p>'+
	'<button @click="changeName">Change Name</button>'+
	'</div>',
	data:function(){
		return {
			name:"Bakatparin"
		}
	},
	methods:{
		changeName:function(){
			this.name='HaHa';
		}
	}
})



var one = new Vue({
	el:"#vue-app-one",
	
});

var two = new Vue({
	el:"#vue-app-two",
	
});

