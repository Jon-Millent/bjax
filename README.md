<img src="https://github.com/Jon-Millent/bjax/blob/master/images/bjax.png?raw=true" />
**post方法 : bjax.post(url,data,callback,time);**
***url:要发送的地址***
***data:要发送的数据,可以是字符串"a=b&c=1&j=h",也可以是JSON数据 {"a":1,"b":c}",也可以是[{"a":1},{"b":2}]***
***callback:状态4后执行的回调函数***
***time:可选，设置超时***
```javascript
	bjax.post("main.php",{"a":123,"b":456,"c":789},function(responseText,status){
		console.log(responseText);//responseText:返回的数据
		console.log(status);//status:状态码
	})
	```
