class tomorrowSee{
	constructor(obj,boxDom){
			this.boxDom = boxDom;
			let defaultObj = {
				url:"img/shop/sbg-hash-52ce8a55.png",
				aText:"",
				shuText:"",
				zheText:"折起"
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
				width: 320px;
				overflow: hidden;
				margin-right: 20px;
				margin-bottom: 24px;
				float:left;
			`
			this.boxDom.innerHTML=`
			    <img src="${this.url}" style="width: 320px;height: 153px;"/>
	    		<div style="
	    			width: 320px;
	    			height:30px;
					overflow: hidden;
					margin-top:4px;
					margin-bottom: 13px;
					position: relative;
	    		">
		    		<div style="
		    		    width: 320px;
						overflow: hidden;
						position: absolute;
		    		">
		    			<a href="#" style="
					    	height:24px;
							margin:0;
						    color: #4d4d4d;
						    font-weight: 400;
						    overflow: hidden;
						    text-overflow: ellipsis;
						    white-space: nowrap;
						    width: 230px;
						    display: block;
						    font-size: 16px;
						    line-height: 1.5;
						    padding-top:6px;
						    text-indent:6px;
		    			">
		    				${this.aText}
		    			</a>
			    		<span style="
			    		    position: absolute;
							right:0;
							top:0;
			    		">
			    			<span style="
							    float:left;
								color: #f10582;
								font-size:20px;
								margin-right:5px;
								font-weight: 400;
			    			">
			    				${this.shuText}
			    			</span>
			    			
			    			<span style="
			    				margin-bottom: 0;
								margin-top: 6px;
								float: right;
								font-size: 16px;
			    			">
			    				${this.zheText}
			    			</span>
			    			
			    		</span>
			    	</div>
		    		<div style="
		    			width: 320px;
						border:1px solid #e8e8e8;
						position: absolute;
						top:-30px;
						display:none;
		    		">
		    			<input type="text" placeholder="请输入手机号码" style="
		    				width: 238px;
							height:28px;
							border:1px solid #e8e8e8;
							vertical-align: top;
							text-indent:5px;
		    			"
		    			/><input type="submit" value="开售提醒" style="
		    			  	width: 79px;
							height:30px;
							border:1px solid #e8e8e8;
							background: #FFFFFF;
							color: cornflowerblue;
							vertical-align: top;
							border-left: none;
		    			"/>
		    		</div>
		    	</div>
			
			
			`
		}
			
			
			
			
			
			
			
			
}
