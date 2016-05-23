<img src="https://github.com/Jon-Millent/bjax/blob/master/images/bjax.png?raw=true" /><br />
##post方法 : bjax.post(url,data,callback,time);<br />
**url:要发送的地址**<br />

**data:要发送的数据,可以是字符串"a=b&c=1&j=h",也可以是JSON数据 {"a":1,"b":c}",也可以是[{"a":1},{"b":2}]**

**callback:状态4后执行的回调函数**<br />

**time:可选，设置超时**<br />
```javascript
	bjax.post("main.php",{"a":123,"b":456,"c":789},function(responseText,status){
		console.log(responseText);//responseText:返回的数据
		console.log(status);//status:状态码
	})
```
##get方法 : bjax.get(url,data,callback,time);<br />
**url:要发送的地址,url可以附加数据:"mian.php?a=1&b=5"也可以不附加数据交给data处理**<br />

**data:要发送的数据,可以是字符串"a=b&c=1&j=h",也可以是JSON数据{"a":1,"b":c}",也可以是[{"a":1},{"b":2}],如果url附加数据请不要用这个，传递null即可**<br />

**callback:状态4后执行的回调函数**<br />

**time:可选，设置超时**<br />
```javascript
bjax.get("main.php?a=5&b=6",null,function(responseText,status){
	console.log(responseText);//responseText:返回的数据
	console.log(status);//status:状态码
})
```
##版本特性
<ul>
	<li>1.0.2:修复了bug.</li>
	<li>1.0.1:增加了超时函数.</li>
</ul>
