class shangPin{
	constructor(obj,boxDom){
			this.boxDom = boxDom;
			this.title=null;       //添加新的title,将title转化为属性
			let defaultObj = {
				url:"img/a.img2/topfive_empty.jpg",
				textP:"",
				zheP:"",
				spanText:"",
				spanContent:"",
				divText:""
			}
	
			for(let key in defaultObj){
				if(obj[key]){
					this[key] = obj[key];
				}else{
					this[key] = defaultObj[key];
				}
			}
			this.render();
	}
	
	render(){
		this.boxDom.style.cssText=`
			width:490px;
			height: 333px;
			overflow: hidden;
			margin-right: 20px;
			float: left;
		`
		this.boxDom.innerHTML=`
			<div style="
				width:490px;
				height: 235px;
				position:relative;
			">
			
				<img src="${this.url}" style="width:490px;height: 235px;">
				
				<div style="
					width:490px;
					height: 235px;
					background:red;
					opacity:0;
					position:absolute; 
					left:0;
					top:0;
				">
    				<div style="
    					width: 89px;
				    	height:20px;

				    	background: #ffffff; 
				    	border-radius: 12px;

				    	overflow: hidden;
				    	position:absolute; 
				    	bottom:8px;
				    	right:10px;	
				    	font-size: 12px;
				    	color: #ffffff;   	
    				">
	    					<a href="#">
	    						<span style="
	    						    width: 16px;
							    	height:18px;
							    	float:left;
							    	line-height:18px;
							    	margin:1px auto;
							    	margin-left:12px;
	    						">表</span>
	    						<span style="
	    							width: 48px;
							    	height:18px;
							    	line-height:18px;
							    	float:left;								    	
							    	font-size: 12px;
							    	margin:1px auto;
							    	margin-left:2px;
							    	color:#333333;
	    						">收藏品牌</span>
	    					</a>
	    			</div>	
    			</div>			
			</div>	
			<p style="
				width:455px;
				height: 34px;
				line-height: 34px;
				font-size: 18px;
				color: #333333;
				font-weight: 700;
				text-indent: 11px;
				margin-top:14px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow:ellipsis;
			">
			${this.textP}
			</p>
		`;
		
		this.title=document.createElement("div");      //定义title所在的div是新创建的div元素
		this.title.style.cssText=`
				width:490px;
				height: 26px;
				float:left;
			`;
		this.boxDom.appendChild(this.title);  //将title所在的div添加到整体的div中
		this.title.innerHTML=`
				<p style="
				 	height: 26px;
			    	line-height:26px;
			    	font-size:18px;
			    	font-weight: 700;
			    	color: #f105a1;
			    	margin-left:10px;
			    	float:left;
			    	margin-top:0;
				">
				${this.zheP}
				</p>
				<span style="
						float:left;
						height: 26px;
				    	line-height:26px;
				    	font-size:16px;
				    	margin-left:2px;
				    	color:#4d4d4d;
					">
					${this.spanText}
				</span>
			`;
		
				
		if(this.divText){
//				console.log(this.title);
			var spanDom=document.createElement("span");
			spanDom.style.cssText=`
				height: 26px;
				line-height:26px;
				float: left;
				margin:0 10px;
				font-size: 16px;
				color: #333;
			`;
			spanDom.innerHTML=`|`;
			
			this.title.appendChild(spanDom);
			
			var divDom=document.createElement("div");
			divDom.innerHTML=`${this.divText}`;
			divDom.style.cssText=`
				float: left;
			    height: 26px;
				line-height:26px;
			    font-size: 16px;
			    font-family: MicrosoftYaHei;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    color: #333;
			    width: 360px;
			`;
			this.title.appendChild(divDom);
		}
	}

}


						