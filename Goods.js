Window.onload=function(){
	var cover=document.getElementById("a");
	Window.onscroll=function(){
		var st=document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position="fixed";
		}else{
			cover.style.position="static";
		}
	}
}