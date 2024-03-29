//封装表单正则
//参数：
//1.正则类型（要判断的内容类型，用户名，密码，电子邮箱，邮编，身份证，用户手机号码）
//2.字符串
//返回值： 1、true：符合；2、false：不符合

function check(str,type){
	switch(type){
		//用户名：6-16位数字、字母组合，且以字母开头
		case "username": var r = /^[a-zA-Z_]\w{5,14}$/; break;
		//密码：6-16位数字、字母组合，不能是纯数字
		case "userpass": var r = /^\w{6,16}$/; break;
		//电子邮箱：以（1-9，a-z，A-Z）中任意一个开头，5到17位的（字母，数字，下划线）@ 2到10位的（字母，数字，下划线），
		//后缀为com，cn，net，com.cn中任意一个
		case "email": var r = /^[1-9a-zA-Z]\w{5,17}@\w{2,10}\.(com|cn|net|com.cn)$/; break;
		//邮编：以（1-9）中任意一个开头，5位（0-9）任意一个
		case "post": var r = /^[1-9]\d{5}$/; break;
		//身份证号码：以（1-9）中任意一个开头，5位（0-9）中任意一个，1或2，3位（0-9）中任意一个,0+（1-9）中任意一位或者1+（0-2）中任意一位，
		//5位（0-9）中任意一个,(0-9)和X中任意一个
		case "cade": var r = /^[1-9]\d{5}[12]\d{3}(0[1-9]|1[0-2])\d{5}[0-9X]$/; break;
		//手机号码：以数字1开头，（3-9）中任意一个，9位（0-9）中任意一个
		case "userphone": var r = /^1[3-9]\d{9}$/; break;
	}
}
