# 输入URL地址到页面呈现发生了什么

::: tip 整体流程
1. 解析URL
2. 判断是否有缓存
3. DNS解析
4. 三次握手建立TCP连接
5. 发送HTTP请求
6. 服务器处理请求并返回HTTP报文
7. 四次挥手断开TCP连接
8. 浏览器解析渲染页面
:::

# 浏览器缓存策略

## 强缓存
强缓存是利用http响应头中的Expires或者Cache-Control两个字段来控制的，其中Expires是http1.0的字段，Cache-Control是http1.1的字段，当缓存命中时，浏览器直接从缓存中读取资源，不会发请求到服务器。

### Expires
Expires是一个绝对时间，由服务器返回，告诉浏览器在这个时间之前可以直接从缓存中获取数据，而不用再次请求。

### Cache-Control
Cache-Control是http1.1中新增的字段，优先级高于Expires，它的常用值有：
- public：所有内容都将被缓存（客户端和代理服务器都可缓存）
- private：所有内容只有客户端可以缓存，Cache-Control的默认取值
- no-cache：客户端缓存内容，但是是否使用缓存则需要经过协商缓存来验证决定
- no-store：所有内容都不会被缓存，即不使用强缓存，也不使用协商缓存
- max-age：单位为秒，表示资源在本地缓存多少秒，例如max-age=31536000表示资源在本地缓存一年
- s-maxage：覆盖max-age，作用一致，但是只针对代理服务器缓存生效
- must-revalidate：如果缓存过期，必须向服务器验证，如果验证失败，则直接从服务器获取资源
- proxy-revalidate：与must-revalidate类似，但是只针对代理服务器缓存生效
- max-stale：表示客户端愿意接收一个已经过期的资源，但是在指定的时间内还是可以接收的，例如max-stale=3600表示在一小时内即使过期也可以接收
- min-fresh：表示客户端希望在指定的时间内获取最新的响应，例如min-fresh=60表示客户端希望在60秒内获取最新的响应
- no-transform：规定代理服务器不能改变返回的内容，例如压缩等
- only-if-cached：只有缓存中有资源，才会返回，否则会请求服务器
- immutable：表示资源不会改变，可以直接从本地缓存中获取
- stale-while-revalidate：表示资源过期后，依然可以使用，同时发起请求到服务器更新资源，例如stale-while-revalidate=60表示资源过期后60秒内可以继续使用，同时发起请求到服务器更新资源
- stale-if-error：表示资源过期后，依然可以使用，同时发起请求到服务器更新资源，但是只有在请求失败时才会使用过期资源，例如stale-if-error=60表示资源过期后60秒内可以继续使用，但是只有在请求失败时才会使用过期资源

## 协商缓存
协商缓存是利用http请求头中的If-Modified-Since和If-None-Match字段来控制的，当缓存未命中时，浏览器会将缓存标识与服务器进行比对，决定是否使用缓存。

### Last-Modified和If-Modified-Since
Last-Modified是服务器响应请求时，返回该资源文件在服务器最后被修改的时间，而If-Modified-Since是请求头字段，表示客户端希望获取的资源最后修改时间，当资源过期时，服务器会返回新的资源，同时返回新的Last-Modified，当资源未过期时，服务器返回304状态码，表示资源未修改，客户端可以继续使用缓存。

### ETag和If-None-Match
ETag是服务器响应请求时，返回当前资源文件的一个唯一标识（由服务器生成），而If-None-Match是请求头字段，表示客户端希望获取的资源标识，当资源过期时，服务器会返回新的资源，同时返回新的ETag，当资源未过期时，服务器返回304状态码，表示资源未修改，客户端可以继续使用缓存。

# DNS解析
DNS解析是将域名解析为IP地址的过程，DNS解析的过程如下：
::: tip DNS解析过程
1. 浏览器缓存：浏览器会缓存DNS记录，如果之前解析过该域名，则直接使用缓存。
2. 系统缓存：操作系统会缓存DNS记录，如果之前解析过该域名，则直接使用缓存。
3. 路由器缓存：路由器会缓存DNS记录，如果之前解析过该域名，则直接使用缓存。
4. ISP DNS缓存：ISP会缓存DNS记录，如果之前解析过该域名，则直接使用缓存。
5. 递归查询：如果以上缓存都没有命中，则进行递归查询，递归查询是指DNS服务器从根域名服务器开始查询，依次查询顶级域名服务器、权威域名服务器，直到查询到目标域名的IP地址。
6. 解析完成：当DNS服务器查询到目标域名的IP地址后，将结果返回给客户端，客户端将结果缓存，下次再次访问时直接使用缓存。
7. 过期时间：DNS记录会有一个过期时间，当过期时，需要重新进行DNS解析。
8. DNS负载均衡：DNS解析时，可以返回多个IP地址，实现负载均衡。
9. DNS预取：浏览器会根据页面中的链接预取DNS，提高用户访问速度。
:::

# 三次握手
三次握手是TCP建立连接时使用的方法，三次握手的过程如下：
::: tip 三次握手过程
1. 客户端发送SYN包：客户端发送一个SYN包，表示请求建立连接。
2. 服务器发送SYN+ACK包：服务器接收到SYN包后，返回一个SYN+ACK包，表示确认请求。
3. 客户端发送ACK包：客户端接收到SYN+ACK包后，发送一个ACK包，表示连接建立成功。
4. 连接建立：服务器接收到ACK包后，连接建立成功，可以进行数据传输。
:::

# 四次挥手
四次挥手是TCP断开连接时使用的方法，四次挥手的过程如下：
::: tip 四次挥手过程
1. 客户端发送FIN包：客户端发送一个FIN包，表示请求断开连接。
2. 服务器发送ACK包：服务器接收到FIN包后，返回一个ACK包，表示确认请求。
3. 服务器发送FIN包：服务器发送一个FIN包，表示请求断开连接。
4. 客户端发送ACK包：客户端接收到FIN包后，返回一个ACK包，表示确认请求。
5. 连接断开：服务器接收到ACK包后，连接断开成功。
6. TIME_WAIT：客户端进入TIME_WAIT状态，等待2MSL后，连接彻底断开。
7. 释放资源：服务器释放连接资源。
:::

# HTTP状态码
HTTP状态码是由3位数字和原因短语组成，用于表示客户端HTTP请求的返回结果。

## 1xx：信息性状态码
1xx表示请求已经接收，继续处理。

## 2xx：成功状态码
2xx表示请求已经成功接收、理解、接受。

### 200 OK
200表示请求成功，服务器已成功处理请求。

### 201 Created
201表示请求已经被成功处理，并且创建了新的资源。

### 202 Accepted
202表示请求已经被接受，但是还未被处理。

### 204 No Content
204表示请求成功，但是没有返回任何内容。

## 3xx：重定向状态码
3xx表示需要客户端采取进一步的操作才能完成请求。

### 301 Moved Permanently
301表示请求的资源已经被永久移动到新的位置。

### 302 Found
302表示请求的资源已经被临时移动到新的位置。

### 304 Not Modified
304表示资源未被修改，可以直接使用缓存。

## 4xx：客户端错误状态码
4xx表示客户端请求出错。

### 400 Bad Request
400表示请求出现语法错误。

### 401 Unauthorized
401表示未授权，需要进行身份验证。

### 403 Forbidden
403表示服务器拒绝请求。

### 404 Not Found
404表示请求的资源不存在。

## 5xx：服务器错误状态码
5xx表示服务器出错。

### 500 Internal Server Error
500表示服务器内部错误。

### 502 Bad Gateway
502表示网关错误。

### 503 Service Unavailable
503表示服务器不可用。

### 504 Gateway Timeout
504表示网关超时。