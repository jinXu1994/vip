
//三、轮播图的js(未写入渐变)
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

var myTimer = null;//定义了一个定时器，赋值为null。
var ord = 0;//当前图片的序号//3	
	
//自动播放
function boFang(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1、改变数据
		//1）、计算数据（改变图片的序号）
		var befOrd = ord;
		ord++;
		//2）、边界
		if(ord>1){
			ord = 0;
		}
		
		//2、改变外观
		change(befOrd,ord);
	},5000);
}

//停止播放
function tingFang(){
	window.clearInterval(myTimer);
	myTimer = null;
}
//跳转到对应图片上
//参数图片的下标
//函数goImg()
function tiaoZhuan(nextOrd){
	//一、改变数据
	//1、改图片的下标
	var befOrd = ord;
	ord = nextOrd;
	
	//2、边界
	if(ord>1){
		ord = 0; 
	}else if(ord<0){
		ord = 1;
	}
	//二、改变外观	
	change(befOrd,ord);
}

//改变外观的函数
function change(befOrd,ord){
	//1、改变图片
	    let imgDoms = $("#B1").children;
		imgDoms[befOrd].style.zIndex = 1;
		imgDoms[befOrd].style.opacity= 0;
		imgDoms[ord].style.zIndex = 2;
		imgDoms[ord].style.opacity= 1;
	//2、改变豆豆
//		let liDoms = $("#huaKuai").children;
//		liDoms[befOrd].style.background = "skyblue";
//		liDoms[ord].style.background = "deepskyblue";
}

//点击左箭头
function befImg(){
	tiaoZhuan(ord-1);
}

//点击右箭头
function nextImg(){
	tiaoZhuan(ord+1);
}
	
//加载页面
window.onload = function(){
	//拆分
	//1、自动播放
	boFang();
	//2、鼠标放到图片上时停止
	$("#B1").onmouseover = tingFang;
	//3、鼠标离开继续播放
	$("#B1").onmouseout= boFang;
	//4、点击豆豆变换图片
//	let liDoms = $("#huaKuai").children;
//	for(var i=0;i<liDoms.length;i++){
//		liDoms[i].onclick = function(){
//			tiaoZhuan(parseInt(this.getAttribute("index")));
//		};
//	}
	//5、点击箭头变换图片
	let leftBtn = $("#jianTou").firstElementChild;
	leftBtn.onclick = function(){
		befImg();
	}
	let rightBtn = $("#jianTou").lastElementChild;
	rightBtn.onclick = function(){
		nextImg();
	}	
}
