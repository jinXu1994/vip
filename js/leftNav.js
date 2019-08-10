
var oA=$("#zuoBian").getElementsByTagName("a");


for(var i=0;i<oA.length;i++){
	oA[i].onmouseover=function(){
		for(var j=0;j<oA.length;j++){
			oA[j].style.background="#ffffff";
			oA[j].firstElementChild.style.color="#666666";
			oA[j].lastElementChild.style.color="#666666";
		}
		this.style.background="#f10180";
		this.lastElementChild.style.color="#ffffff";
//		this.lastElementChild.style.font-weight="700";font-weight: ;

		this.firstElementChild.style.color="#ffffff";
		
	}

}
