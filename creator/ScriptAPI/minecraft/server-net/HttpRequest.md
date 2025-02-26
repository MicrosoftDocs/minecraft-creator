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

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleHttpRequest.ts) code sandbox.

## Properties

### **body**
`body: string;`

Content of the body of the HTTP request.

Type: *string*

Notes:
  - This property can be edited in early-execution mode.

### **headers**
`headers: HttpHeader[];`

A collection of HTTP headers to add to the outbound request.

Type: [*HttpHeader*](HttpHeader.md)[]

Notes:
  - This property can be edited in early-execution mode.

### **method**
`method: HttpRequestMethod;`

HTTP method (e.g., GET or PUT or PATCH) to use for making the request.

Type: [*HttpRequestMethod*](HttpRequestMethod.md)

Notes:
  - This property can be edited in early-execution mode.

### **timeout**
`timeout: number;`

Amount of time, in seconds, before the request times out and is abandoned.

Type: *number*

Notes:
  - This property can be edited in early-execution mode.

### **uri**
`uri: string;`

The HTTP resource to access.

Type: *string*

Notes:
  - This property can be edited in early-execution mode.

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
  
Notes:
- This function can't be called in read-only mode.

### **addHeader**
`
addHeader(key: string, value: minecraftserveradmin.SecretString | string): HttpRequest
`

Adds an additional header to the overall list of headers used in the corresponding HTTP request.

#### **Parameters**
- **key**: *string*
- **value**: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*

**Returns** [*HttpRequest*](HttpRequest.md)
  
Notes:
- This function can be called in early-execution mode.

### **setBody**
`
setBody(body: string): HttpRequest
`

Updates the content of the body of the HTTP request.

#### **Parameters**
- **body**: *string*

**Returns** [*HttpRequest*](HttpRequest.md)
  
Notes:
- This function can be called in early-execution mode.

### **setHeaders**
`
setHeaders(headers: HttpHeader[]): HttpRequest
`

Replaces and applies a set of HTTP Headers for the request.

#### **Parameters**
- **headers**: [*HttpHeader*](HttpHeader.md)[]

**Returns** [*HttpRequest*](HttpRequest.md)
  
Notes:
- This function can be called in early-execution mode.

### **setMethod**
`
setMethod(method: HttpRequestMethod): HttpRequest
`

Sets the desired HTTP method (e.g., GET or PUT or PATCH) to use for making the request.

#### **Parameters**
- **method**: [*HttpRequestMethod*](HttpRequestMethod.md)

**Returns** [*HttpRequest*](HttpRequest.md)
  
Notes:
- This function can be called in early-execution mode.

### **setTimeout**
`
setTimeout(timeout: number): HttpRequest
`

#### **Parameters**
- **timeout**: *number*

**Returns** [*HttpRequest*](HttpRequest.md)
  
Notes:
- This function can be called in early-execution mode.

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

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/simpleHttpRequest.ts) code sandbox.
