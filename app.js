var one = new Vue({
	el:"#vue-app-one",
	data:{
		title:"app one的内容",
	},
	methods:{
		
	},
	computed:{
		greet:function(){
			return "Im vue-app-one";
		},
	}
});

var two = new Vue({
	el:"#vue-app-two",
	data:{
		title:"app two的内容",
	},
	methods:{
		changeTitle:function(){
			one.title="已经改名了！";
		}
	},
	computed:{
		greet:function(){
			return "Im vue-app-two";
		},
	}
});

function changeAppTwoTitle(){
	two.title="app two的title也发生改变了！"
}