---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.HttpRequest Class
description: Contents of the @minecraft/server-net.HttpRequest class.
---
# HttpRequest Class

Main object for structuring a request.

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

## Properties

### **body**
`body: string;`

Content of the body of the HTTP request.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **headers**
`headers: HttpHeader[];`

A collection of HTTP headers to add to the outbound request.

Type: [*HttpHeader*](HttpHeader.md)[]
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **method**
`method: HttpRequestMethod;`

HTTP method (e.g., GET or PUT or PATCH) to use for making the request.

Type: [*HttpRequestMethod*](HttpRequestMethod.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **timeout**
`timeout: number;`

Amount of time, in seconds, before the request times out and is abandoned.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **uri**
`uri: string;`

The HTTP resource to access.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [constructor](#constructor)
- [addHeader](#addheader)
- [setBody](#setbody)
- [setHeaders](#setheaders)
- [setMethod](#setmethod)
- [setTimeout](#settimeout)

### **constructor**
`
new HttpRequest(uri: string)
`

#### **Parameters**
- **uri**: *string*

**Returns** [*HttpRequest*](HttpRequest.md)

### **addHeader**
`
addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest
`

Adds an additional header to the overall list of headers used in the corresponding HTTP request.

#### **Parameters**
- **key**: *string*
- **value**: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*

**Returns** [*HttpRequest*](HttpRequest.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setBody**
`
setBody(body: string): HttpRequest
`

Updates the content of the body of the HTTP request.

#### **Parameters**
- **body**: *string*

**Returns** [*HttpRequest*](HttpRequest.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setHeaders**
`
setHeaders(headers: HttpHeader[]): HttpRequest
`

Replaces and applies a set of HTTP Headers for the request.

#### **Parameters**
- **headers**: [*HttpHeader*](HttpHeader.md)[]

**Returns** [*HttpRequest*](HttpRequest.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setMethod**
`
setMethod(method: HttpRequestMethod): HttpRequest
`

Sets the desired HTTP method (e.g., GET or PUT or PATCH) to use for making the request.

#### **Parameters**
- **method**: [*HttpRequestMethod*](HttpRequestMethod.md)

**Returns** [*HttpRequest*](HttpRequest.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setTimeout**
`
setTimeout(timeout: number): HttpRequest
`

#### **Parameters**
- **timeout**: *number*

**Returns** [*HttpRequest*](HttpRequest.md)

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
