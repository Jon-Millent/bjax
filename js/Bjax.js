(function(window){
	function createAjax(window){
		this.post=function(url,data,callback,time){
			_this=this;
			_this.times=false;
			var glo=this.createXHR();	
			glo.open('post',url,true);
			glo.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			if(typeof data=="string"){
				glo.send(data);
			}else{
				glo.send(this.stringfty(data));
			}
			glo.onreadystatechange=function(){
			  if (glo.readyState==4){
			  	_this.times=true;
			    callback(glo.responseText,glo.status);
			    }
			}
			if(time){
				this.timeout(time,glo);
			}
		};
		this.get=function(url,data,callback,time){
			var glo=this.createXHR();	
			_this=this;
			_this.times=false;
			if(data){
				if(typeof data=="string"){
				glo.open('get',url+"?"+data+'&'+new Date().getTime(),true);
				}else{
					glo.open('get',url+"?"+this.stringfty(data)+'&'+new Date().getTime(),true);
				}
			}else{
				glo.open('get',url,true);
			}
			glo.send(null);
			glo.onreadystatechange=function(){
			  if (glo.readyState==4){
			  		 _this.times=true;
			   		 callback(glo.responseText,glo.status);
			   }
			}
			if(time){
				this.timeout(time,glo);
			}
		}
	}
	createAjax.prototype.createXHR=function(){
			if(typeof XMLHttpRequest != 'undefined'){
				return new XMLHttpRequest();
			}else if(typeof ActiveXObject != 'undefined'){
				var verson=['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
				for(var i=0;i<verson.length;i++){
					try{
						return new ActiveXObject(verson[i]);
					}catch(e){}
				}
			}else{
				throw new Error('请升级您的浏览器');
			}
	}
	createAjax.prototype.stringfty=function(obj){
		if(obj instanceof Array){
			var str="";
			for(var i=0;i<obj.length;i++){
				for(var k in obj[i]){
					var huj=k+"="+obj[i][k]+"&";
					str+=huj;
				}
			}
			return str.substr(0,str.length-1);
		}else if(obj instanceof Object){
			var str="";
			for(var i in obj){
				var huj=i+"="+obj[i]+"&";
				str+=huj;
			}
			return str.substr(0,str.length-1);
		}
	}
	createAjax.prototype.timeout=function(time,glo){
		setTimeout(function(){
		if(_this.times){
			
		}else{
			console.log("超时");
			glo.abort(); 
		}
		},time);
	}
	window.bjax=new createAjax();
})(window);
