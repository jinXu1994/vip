// 注册验证
	// 1、正则判断函数
function check(str,type) {
	switch(type) {
		case "phone":
			var r = /^1((3[\d])|(4[5,6,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[1-3,5-8])|(9[1,8,9]))\d{8}$/;

			break; 
	}
	return r.test(str);
}
//----------------------- 注册----------------------------------
//判断输入的手机号
var userphone = document.getElementsByClassName('userphone')[0];
var inpu_phoneNum = document.getElementsByClassName('inpu_phoneNum')[0];
var ifphone = document.getElementsByClassName('ifphone')[0];
var iconIfWrong = document.getElementsByClassName('icon-if-wrong')[0];
var iconIfSuccess = document.getElementsByClassName('icon-if-success')[0];
//判断盒子
var ifphone = document.getElementsByClassName('ifphone')[0];   

var userPhoneIs = false;
let str = userphone.placeholder;
let result = null;
userphone.onfocus = function(){   
	if(userphone.value != ""){
		ifphone.lastElementChild.innerHTML = "";
	}else{
		ifphone.lastElementChild.innerHTML = "请输入您的11位手机号码";
	}	
}

userphone.onblur = function(){
	if(userphone.value== "" ){
		ifphone.lastElementChild.innerHTML = "请输入手机号码";
		ifphone.style.color = "red";
		userphone.style.border = "1px solid #f64a4a";
		iconIfWrong.style.opacity= "1";
		iconIfWrong.style.visibility="visible";
	}else {
		result = check(userphone.value,"phone");
		if(result == false ){
			ifphone.lastElementChild.innerHTML = "请输入正确的手机号码";
			ifphone.style.color = "red";
			userphone.style.border = "1px solid #f64a4a";
			iconIfWrong.style.opacity= "1";
			iconIfWrong.style.visibility="visible";
		}else {
			ifphone.lastElementChild.innerHTML = "";
//			checkuser(userphone.value);			
			iconIfSuccess.style.opacity= "1";
			iconIfSuccess.style.visibility="visible";
			userphone.style.border = "1px solid #b2b2b2";
		}
	}	
}

//判断输入的验证码
$(".ui-code")[0].onfocus = function(){
	checkuser(userphone.value);
//	if(userphone.value != ""){
//		$(".ifYanZheng")[0].lastElementChild.innerHTML = "";
//	}else{
//		$(".ifYanZheng")[0].lastElementChild.innerHTML = "请输入6位数字手机验证码";
//	}	
}

$(".ui-code")[0].onblur = function(){
	if(userphone.value== "" ){
		$(".ifYanZheng")[0].lastElementChild.innerHTML = "请输入6位数字手机验证码";
		$(".ifYanZheng")[0].style.color = "red";
		$(".ui-code")[0].style.border = "1px solid #f64a4a";
		$('.icon-if-wrong')[1].style.opacity= "1";
		$('.icon-if-wrong')[1].style.visibility="visible";
	}else {
		result = check(userphone.value,"phone");
		if(result == false ){
			$(".ifYanZheng")[0].lastElementChild.innerHTML = "请输入6位数字手机验证码";
			$(".ifYanZheng")[0].style.color = "red";
			userphone.style.border = "1px solid #f64a4a";
			iconIfWrong.style.opacity= "1";
			iconIfWrong.style.visibility="visible";
		}else {
			$(".ifYanZheng")[0].lastElementChild.innerHTML = "";
//			checkuser(userphone.value);			
			iconIfSuccess.style.opacity= "1";
			iconIfSuccess.style.visibility="visible";
			userphone.style.border = "1px solid #b2b2b2";
		}
	}
	
	
}


var phoneIsTrue = true; //默认用户名存在
var userPassValue = document.getElementsByClassName('userpass')[0];
var zhuceBut = document.getElementsByClassName('zhuce_but')[0];
//zhuceBut.onclick = function() {
//	if(userPhoneIs) {
//		var userPhone = userphone.value;
//		var userPass = userPassValue.value;
//		console.log(userPass);
//		addUser(userPhone,userPass);
//	}else {
//		alert('用户名或密码不符合');
//	}
//}




//检验用户名是否存在
function checkuser(str) {
	var xhr=new XMLHttpRequest();
	xhr.open("get","php/checkuser.php?userphone="+str);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){			
			var num = xhr.responseText;
			console.log(xhr.responseText);
			if(num == 1) {
				ifphone.lastElementChild.innerHTML = "用户名已存在";
				iconIfWrong.style.opacity= "1";
				iconIfSuccess.style.opacity= "0";
				iconIfWrong.style.visibility="visible";
				
				phoneIsTrue = false;//用户名不存在
			}else if(num == 0) {
				ifphone.lastElementChild.innerHTML = "";
				userPhoneIs = true; //用户名存在				
			}
		}
	}
	xhr.send();
}



function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
