
window.onload = function(){
	var cover = document.getElementById('a');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 180){
				cover.style.position = 'fixed';
		}else{
				cover.style.position = 'static';
		}
	}
}

var slider = document.getElementById('slider');
var box = document.getElementById('box');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1;

var timer = setInterval(next,2000);
	
box.onmouseover = function(){
	clearInterval(timer);
	animate(left,{opacity:50});
	animate(right,{opacity:50});
}
	
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,2000);
}
	
for(var i = 0;i < oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx+1;
		animate(slider,{left:-1200*index});
		navChange();
	}
}

	
right.onclick = next;
left.onclick = prev;
function next(){
	index++;
	animate(slider,{left:-1200*index},function(){
		if(index == 7){
			slider.style.left = "-1200px";
			index = 1;
		}
	});
	navChange();
}
function prev(){
	index--;
	navChange();
	animate(slider,{left:-1200*index},function(){
		if(index == 0){
			slider.style.left = "-7200px";
			index = 6;
		}
	});
		
}

function navChange(){
	for(var i = 0;i < oNavlist.length;i++){
		oNavlist[i].className = "";
	}
	if(index == 7){
		oNavlist[0].className = "active";
	}
	else if(index == 0){
		oNavlist[5].className = "active";
	}
	else{
		oNavlist[index-1].className = "active";
	}
}
function animate(obj,json,callback){		
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){	
		var isStop = true;
		for (var attr in json){
			if(attr=='opacity'){
				var now = parseInt(getStyle(obj,attr)*100);
			}else{
				var now = parseInt(getStyle(obj,attr));
			}
			
			var speed = (json[attr]-now)/5;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if (attr=='opacity') {
				obj.style[attr]=(now+speed)/100;
			}else{
				obj.style[attr]=now+speed+'px';
			}
				
			var current = now+speed;
			if(json[attr]!==current){
				isStop = false;
			}
		}					
		if(isStop){
			clearInterval(obj.timer)
			callback&&callback();
		}
	},10)
	
}
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}		
}

var ul = document.getElementById('c45');
var lis = document.getElementById('c46');
var li = document.getElementById('c47');
massage(30);
function massage(t) {
	li.innerHTML = lis.innerHTML;
	ul.scrollTop = 0;
	var timer = setInterval(runTop, t);
	ul.onmouseover = function () {
		clearInterval( timer );
	}
	ul.onmouseout = function () {
		timer = setInterval(runTop, t);
	}
}

function runTop() {
	if (ul.scrollTop >= lis.scrollHeight) {
		ul.scrollTop = 0;
	} 
	else {
		ul.scrollTop++;
	}
}
var sel = document.getElementById('c644');
var money = document.getElementById('c65');
sel.onchange = function(){
	money.innerHTML = "¥"+this.value;
	
}


var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p32 = document.getElementById("p32");
var p4 = document.getElementById("p4");
p1.onmouseover = function(){
	this.style.right = '-10px';
}
p1.onmouseout = function(){
	this.style.right = '-85px';
}
p2.onmouseover = function(){
	this.style.right = '-10px';
}
p2.onmouseout = function(){
	this.style.right = '-85px';
}
p3.onmouseover = function(){
	this.style.right = '-10px';
	p32.src = "img/erwei.png";

}
p3.onmouseout = function(){
	this.style.right = '-85px';
	p32.src = "img/serwei.png";
}
p4.onmouseover = function(){
	this.style.right = '-10px';
}
p4.onmouseout = function(){
	this.style.right = '-85px';
}	
