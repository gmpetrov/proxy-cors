# proxy-cors
Simple proxy to bypass CORS

This server is running on [https://gmpetrov-proxy-cors.glitch.me](https://gmpetrov-proxy-cors.glitch.me)

# Why
Because i can't bear this 💩 message anymore "Access to XMLHttpRequest at X from origin Y has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."


## Usage
```javascript
const payload = {
  method: 'POST',
  url: 'your_target_url',
  data: {
    // body
    productId: 42
  }
}

anyHttpClient.post('https://gmpetrov-proxy-cors.glitch.me', payload)
```
