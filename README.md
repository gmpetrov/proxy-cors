<div align="center">
	<img src="media/logo-3.png" title="PROXY-CORS" alt="PROXY-CORS logo" width="454">
	<h1>proxy-cors</h1>
	<p>
		<b>Simple express server that demonstrates how to bypass CORS and forward requests</b>
	</p>
	<br>
</div>

This server is running on [https://gmpetrov-proxy-cors.glitch.me](https://gmpetrov-proxy-cors.glitch.me)

# Why
Because i can't bear this 💩 message anymore "Access to XMLHttpRequest at X from origin Y has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."


## Usage
```javascript
const payload = {
    productId: 42
}

anyHttpClient.post('https://gmpetrov-proxy-cors.glitch.me/proxy-cors/https://my.api', payload)
```
