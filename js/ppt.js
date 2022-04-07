//window.onload=function(){
//	var obj1 = document.getElementById("1");
//	obj1.style.display = "block";
//
//	var box2 = document.getElementById("box2");
//	box2.style.animationPlayState = "pause";
//
//	window.setTimeout(function(){ display("2"); }, [1750]);
//
//	var box3 = document.getElementById("box3");
//	box3.style.animationPlayState = "pause";
//
//	window.setTimeout(function(){ display("3"); }, [3600]);
//}

window.onload=function() {

	setTimeout(function(){
		move(document.getElementById("d1"));
	}, 800);
	setTimeout(function(){
		move(document.getElementById("d2"));
	}, 800 * 2);
	setTimeout(function(){
		move(document.getElementById("d3"));
	}, 800 * 2);
	setTimeout(function(){
		move(document.getElementById("d4"));
	}, 800 * 3);
	setTimeout(function(){
		move(document.getElementById("d5"));
	}, 800 * 3);
	setTimeout(function(){
		move(document.getElementById("d6"));
	}, 800 * 3);
	setTimeout(function(){
		move(document.getElementById("d7"));
	}, 800 * 4);
	setTimeout(function(){
		move(document.getElementById("d8"));
	}, 800 * 4);
	setTimeout(function(){
		move(document.getElementById("d9"));
	}, 800 * 4);
	setTimeout(function(){
		move(document.getElementById("d10"));
	}, 800 * 5);
	setTimeout(function(){
		move(document.getElementById("d11"));
	}, 800 * 6);
	setTimeout(function(){
		move(document.getElementById("d12"));
	}, 800 * 6);
	setTimeout(function(){
		move(document.getElementById("d13"));
	}, 800 * 6);
	setTimeout(function(){
		move(document.getElementById("d14"));
	}, 800 * 7);
}

window.onscroll = function() {
	if(getScrollTop() + getWindowHeight() > 1100){
		once1();
		once1 = function(){};
	}
	if(getScrollTop() + getWindowHeight() > 3200){
		once2();
		once2 = function(){};
		once3();
		once3 = function(){};
	}
	//if(getScrollTop() + getWindowHeight() > 3700){
	//	once3();
	//	once3 = function(){};
	//}
}

function once1(){
	setTimeout(function(){
		move2(document.getElementById("d15"));
	}, 100);
	setTimeout(function(){
		move2(document.getElementById("d16"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move2(document.getElementById("d17"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move2(document.getElementById("d18"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move2(document.getElementById("d19"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move2(document.getElementById("d20"));
	}, 800 * 2 - 700);
}

function once2(){
	setTimeout(function(){
		move(document.getElementById("d21"));
	}, 100);
	setTimeout(function(){
		move(document.getElementById("d22"));
	}, 100);
	setTimeout(function(){
		move(document.getElementById("d23"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move(document.getElementById("d24"));
	}, 800 * 2 - 700);
	setTimeout(function(){
		move(document.getElementById("d25"));
	}, 800 * 3 - 700);
	setTimeout(function(){
		move(document.getElementById("d26"));
	}, 800 * 3 - 700);
}

function once3(){
	for(i = 27; i <= 43; i++){
		var obj = document.getElementById("d" + i);
		obj.style.display = "block";
	}
}

function getScrollTop() {
	var scrollTop = window.pageYOffset
		|| document.documentElement.scrollTop
		|| document.body.scrollTop
		|| 0;
	return scrollTop;
}

function getWindowHeight(){
	return document.compatMode == "CSS1Compat" ? windowHeight = document.documentElement.clientHeight : windowHeight = document.body.clientHeight;
}

function move(obj) {
	//console.log(obj);
	obj.style.zoom = "50%";
	//obj.style.left = "-120px";
	obj.style.left = obj.offsetLeft - 120 + "px";
	obj.style.display = "block";

	let start = Date.now();
	let timer = setInterval(function(){
		let timePassed = Date.now() - start;
		if(draw(timePassed) == true){
			clearInterval(timer);
			return;
		}
	}, 5);

	function draw(timePassed){
		if(Math.abs(parseInt(obj.style.left) - 0) > 3)
			obj.style.left = parseInt(obj.style.left) + timePassed / 160 + 'px';
		else 
			return true;
		if(parseInt(obj.style.zoom) < 100)
			obj.style.zoom = parseInt(obj.style.zoom) + timePassed / 160 + '%';
		else 
			return true;
		console.log(obj.style.left + " " + obj.style.zoom);
	}
}

function move2(obj) {
	obj.style.zoom = "50%";
	//obj.style.left = "-120px";
	obj.style.left = obj.offsetLeft - 120 + "px";
	obj.style.display = "block";

	let start = Date.now();
	let timer = setInterval(function(){
		let timePassed = Date.now() - start;
		if(draw(timePassed) == true){
			clearInterval(timer);
			return;
		}
	}, 5);

	function draw(timePassed){
		//if(Math.abs(parseInt(obj.style.left) - 0) > 3)
		//	obj.style.left = parseInt(obj.style.left) + timePassed / 160 + 'px';
		//else 
		//	return true;
		obj.style.left = parseInt(obj.style.left) + timePassed / 160 + 'px';
		if(parseInt(obj.style.zoom) < 100)
			obj.style.zoom = parseInt(obj.style.zoom) + timePassed / 160 + '%';
		else 
			return true;
		console.log(obj.style.left + " " + obj.style.zoom);
	}
}

function topic_anime(){

}

function play_animation(){

}