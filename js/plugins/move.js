function move(ele,props,duration,callback){
	var starts = {};
	for(var attr in props){
		starts[attr] = parseInt(getStyle(ele)[attr]);
	}

	var totals = {};
	for(var attr in props){
		totals[attr] = props[attr] - starts[attr];
	}

	var starttime = new Date();//记录起始时间
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		//计算耗时比
		var scale = (new Date()-starttime)/duration;

		if(scale>=1) scale = 1;

		for(var attr in props){
			ele.style[attr] = starts[attr]+totals[attr]*scale+"px";
		}
		if(scale==1){
			clearInterval(ele.timer);
			ele.timer = null;
			if(callback) callback();
		}
	},10);
}

function getStyle(ele){
	return window.getComputedStyle?window.getComputedStyle(ele,false):ele.currentStyle;
}
/*function move(ele,target,duration){
	var start = ele.offsetLeft;
	var total = target - start;//总距离2000
	var starttime = new Date();//记录起始时间

	var timer = setInterval(function(){
		//计算耗时比
		var scale = (new Date()-starttime)/duration;

		if(scale>=1){
			scale = 1;
			clearInterval(timer);
		}
		ele.style.left = start+total*scale+"px";
	},10);
}*/