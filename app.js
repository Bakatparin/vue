//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"Bakatparin",
		age:23,
		website:"https://www.baidu.com/",
		tar:"<a href='https://www.baidu.com/'>百度两下</a>",
		x:0,
		y:0,
		name1:'',
		age1:'',
		a:0,
		b:0,
		c:0,
		d:0,
		flag:false,
		changeColor:false,
		changeLength:false

	},
	methods:{
		greet:function(time){
			return "Good "+time+" "+this.name+"!";
		},
		add:function(year){
			console.log("add+year")
			this.age+=year;
		},
		age666:function(){
			console.log("age666")
			this.age=666;
		},
		updateXY:function(event){
			console.log(this.x+"------"+this.y);
			this.x=event.offsetX;
			this.y=event.offsetY; 
		},
		stop:function(event){
			console.log("stop");
			event.stopPropagation();
		},
		alert:function(){
			console.log("alert");
			alert("hello world");
		},
		logName:function(){
			console.log("logName")
			this.name1=this.$refs.name.value;
		},
		logAge:function(){
			console.log("logAge")
			this.age1=this.$refs.age.value;
		},
		/*addToA:function(){
			console.log("addToA")
			return this.a+this.age;
		},
		addToB:function(){
			console.log("addToB")
			return this.b+this.age;
		},
		cAddd:function(){
			console.log("cAddd");
			return this.c;
		}*/
		methodsChecked:function(){
			return true;
		},

	},
	computed:{
		addToA:function(){
			console.log("addToA")
			return this.a+this.age;
		},
		addToB:function(){
			console.log("addToB")
			return this.b+this.age;
		},
		cAddd:function(){
			console.log("cAddd")
			return this.c;
		},
		cAddOne:function(){
			console.log("caddOne");
			this.c+=1;
		},
		checked:function(){
			return true;
		},
		computedCss:function(){
			return{
				changeColor:this.changeColor,
				changeLength:this.changeLength
			}
		}
	}
});