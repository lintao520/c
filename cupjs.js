var c22 = document.getElementById('c22');
var c23 = document.getElementById('c23');
var c34 = document.getElementById('c34');
(function(){
	c22.style.backgroundImage = ' url(img/duigou.png)';
})();
c22.onclick = function(){
	c22.style.border = '1px #ff0853 solid';
	c22.style.backgroundImage = ' url(img/duigou.png)';
	c23.style.border = 'none';
	c23.style.backgroundImage = 'none';
	c34.innerHTML = '"150ml"';
	c23.style.backgroundRepeat='no-repeat';
	c23.style.backgroundPosition='bottom right';
}
c23.onclick = function(){
	c23.style.border = '1px #ff0853 solid';
	c23.style.backgroundImage = ' url(img/duigou.png)';
	c23.style.backgroundRepeat='no-repeat';
	c23.style.backgroundPosition='bottom right';
	c22.style.border = 'none';
	c22.style.backgroundImage = 'none';
	c34.innerHTML = '"200ml"';
}
var c261 = document.getElementById('c261');
var c262 = document.getElementById('c262');
var c263 = document.getElementById('c263');
c261.onclick = function(){
	var n=c262.innerHTML;
	if(n=='1'){
		c261.style.cursor='not-allowed';
	}
	else{
		n--;
		c262.innerHTML=n;
		c261.style.cursor='pointer';
	}
	c263.style.cursor='pointer';
}
c263.onclick = function(){
	var n=c262.innerHTML;
	if(n=='5'){
		c263.style.cursor='not-allowed';
	}
	else{
		n++;
		c262.innerHTML=n;
		c263.style.cursor='pointer';
	}
	c261.style.cursor='pointer';
}
var c38 = document.getElementById('c381');
var c39 = document.getElementById('c391');
var c40 = document.getElementById('c401');
var c41 = document.getElementById('c411');
var c11 = document.getElementById('c11');
c38.onclick = function(){
	c39.style.border = '2px #ff9003 solid';
	c40.style.border = 'none';
	c11.src = 'img/pp0.jpeg';
	Bimg.src = 'img/pp0.jpeg';
}
c39.onclick = function(){
	c39.style.border = '2px #ff9003 solid';
	c40.style.border = 'none';
	c11.src = 'img/pp0.jpeg';
	Bimg.src = 'img/pp0.jpeg';
}
c40.onclick = function(){
	c40.style.border = '2px #ff9003 solid';
	c39.style.border = 'none';
	c11.src = 'img/pp1.jpeg';
	Bimg.src = 'img/pp1.jpeg';
}
c41.onclick = function(){
	c40.style.border = '2px #ff9003 solid';
	c39.style.border = 'none';
	c11.src = 'img/pp1.jpeg';
	Bimg.src = 'img/pp1.jpeg';
}


var img1 = document.getElementById("c10");
var slider =  document.getElementById("slider");
var img2 = document.getElementById("c110");
var Bimg = document.getElementById("c111");

img1.onmouseover = function(){
	slider.style.display="block";
	img2.style.display="block";
}
img1.onmouseout = function(){
	slider.style.display="none";
	img2.style.display="none";
}
img1.onmousemove = function(ev){ //该函数的形参接收一个event对象.

	var oL=ev.clientX-img1.offsetLeft-slider.offsetWidth;
	var oT=ev.clientY-img1.offsetTop-slider.offsetHeight;

	var oMaxw=img1.offsetWidth-slider.offsetWidth;
	var oMaxh=img1.offsetHeight-slider.offsetHeight;

	oL=oL>oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT=oT>oMaxh ? oMaxh : oT < 0 ? 0 : oT;
		
	var percentX = oL/(img1.offsetWidth-slider.offsetWidth);
    var percentY = oT/(img1.offsetHeight-slider.offsetHeight);
    Bimg.style.left = percentX*(img2.offsetWidth-Bimg.offsetWidth)+"px";
    Bimg.style.top = percentY*(img2.offsetHeight-Bimg.offsetHeight)+"px";

	slider.style.left = oL+'px';
	slider.style.top = oT+'px';
}
var c35 = document.getElementById("c35");
var c36 =  document.getElementById("c36");
var c5 = document.getElementById("c5");
var c52 =  document.getElementById("c52");
var c54 = document.getElementById("c54");
var c55 = document.getElementById("c55");
c35.onclick = function(){
	c5.style.display = "block";
}
c36.onclick = function(){
	c5.style.display = "block";
}
c52.onclick = function(){
	c5.style.display = "none";
}
c54.onclick = function(){
	c5.style.display = "none";
}
c55.onclick = function(){
	c5.style.display = "none";
}