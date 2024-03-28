---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.HttpClient Class
description: Contents of the @minecraft/server-net.HttpClient class.
---
# HttpClient Class

#### Examples
##### ***simpleHttpRequest.ts***
```typescript
import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';

async function updateScore() {
    const req = new HttpRequest('http://localhost:3000/updateScore');

    req.body = JSON.stringify({
        score: 22,
    });

    req.method = HttpRequestMethod.Post;
    req.headers = [
        new HttpHeader('Content-Type', 'application/json'),
        new HttpHeader('auth', 'my-auth-token'),
    ];

    await http.request(req);
}
```

## Methods
- [cancelAll](#cancelall)
- [get](#get)
- [request](#request)

### **cancelAll**
`
cancelAll(reason: string): void
`

Cancels all pending requests.

#### **Parameters**
- **reason**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **get**
`
"get"(uri: string): Promise<HttpResponse>
`

Performs a simple HTTP get request.

#### **Parameters**
- **uri**: *string*
  
  URL to make an HTTP Request to.

**Returns** Promise&lt;[*HttpResponse*](HttpResponse.md)&gt; - An awaitable promise that contains the HTTP response.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **request**
`
request(config: HttpRequest): Promise<HttpResponse>
`

Performs an HTTP request.

#### **Parameters**
- **config**: [*HttpRequest*](HttpRequest.md)
  
  Contains an HTTP Request object with configuration data on the HTTP request.

**Returns** Promise&lt;[*HttpResponse*](HttpResponse.md)&gt; - An awaitable promise that contains the HTTP response.

> [!IMPORTANT]
> This function can't be called in read-only mode.

#### Examples
##### ***simpleHttpRequest.ts***
```typescript
import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';

async function updateScore() {
    const req = new HttpRequest('http://localhost:3000/updateScore');

    req.body = JSON.stringify({
        score: 22,
    });

    req.method = HttpRequestMethod.Post;
    req.headers = [
        new HttpHeader('Content-Type', 'application/json'),
        new HttpHeader('auth', 'my-auth-token'),
    ];

    await http.request(req);
}
```

#### Examples
##### ***simpleHttpRequest.ts***
```typescript
import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';

async function updateScore() {
    const req = new HttpRequest('http://localhost:3000/updateScore');

    req.body = JSON.stringify({
        score: 22,
    });

    req.method = HttpRequestMethod.Post;
    req.headers = [
        new HttpHeader('Content-Type', 'application/json'),
        new HttpHeader('auth', 'my-auth-token'),
    ];

    await http.request(req);
}
```
