<html lang="zh">
<head>
	<meta charset="UTF-8">
</head>
<link rel="stylesheet" type="text/css" href="https://github.com/Jon-Millent/bjax/blob/master/css/db.css" />
<body>
	<h1>bjax是基于原生JS的一个简单易用的TOOL 支持IE5+</h1>
	<div class="bjax"></div>
	<h2>如果您的项目仅仅需要一个AJAX的封装工具，您可以放心的使用它，他不需要任何依赖</h2>
	<div class="show">
		<h3>post方法 : bjax.post(url,data,callback);</h3>
		<ul>
			<li>url:要发送的地址</li>
			<li>data:要发送的数据,可以是字符串"a=b&c=1&j=h",也可以是JSON数据 {"a":1,"b":c}",也可以是[{"a":1},{"b":2}]</li>
			<li>callback:状态4后执行的回调函数</li>
		</ul>
		<p class="po">bjax.post("main.php",{"a":123,"b":456,"c":789},function(responseText,status){</p>
			<p class="pi">console.log(responseText);//responseText:返回的数据</p>
			<p class="pi">console.log(status);//status:状态码</p>
		<p class="po">})</p>
	</div>
	<div class="show">
		<h3>get方法 : bjax.get(url,data,callback);</h3>
		<ul>
			<li>url:要发送的地址,url可以附加数据:"mian.php?a=1&b=5"也可以不附加数据交给data处理</li>
			<li>data:要发送的数据,可以是字符串"a=b&c=1&j=h",也可以是JSON数据 {"a":1,"b":c}",也可以是[{"a":1},{"b":2}],如果url附加数据请不要用这个，传递null即可</li>
			<li>callback:状态4后执行的回调函数</li>
		</ul>
		<p class="po">bjax.get("main.php?a=5&b=6",null,function(responseText,status){</p>
			<p class="pi">console.log(responseText);//responseText:返回的数据</p>
			<p class="pi">console.log(status);//status:状态码</p>
		<p class="po">})</p>
	</div>
	<div class="paohui"></div>
</body>
</html>
