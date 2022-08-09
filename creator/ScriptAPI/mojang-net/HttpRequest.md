---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-net.HttpRequest Class
description: Contents of the mojang-net.HttpRequest class.
---
# HttpRequest Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Main object for structuring a request.

## Properties

### **body**
`body: string;`

Content of the body of the HTTP request.

Type: *string*

### **headers**
`headers: HttpHeader[];`

A collection of HTTP headers to add to the outbound request.

Type: [*HttpHeader*](HttpHeader.md)[]

### **method**
`method: HttpRequestMethod;`

HTTP method (e.g., GET or PUT or PATCH) to use for making the request.

Type: [*HttpRequestMethod*](HttpRequestMethod.md)

### **timeout**
`timeout: number;`

Amount of time, in seconds, before the request times out and is abandoned.

Type: *number*

### **uri**
`uri: string;`

The HTTP resource to access.

Type: *string*

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

#### **Returns** [*HttpRequest*](HttpRequest.md)

### **addHeader**
`
addHeader(key: string, value: mojang-minecraft-server-admin.SecretString | string): HttpRequest
`
Adds an additional header to the overall list of headers used in the corresponding HTTP request.

#### **Parameters**
- **key**: *string*
- **value**: [*mojang-minecraft-server-admin.SecretString*](../mojang-minecraft-server-admin/SecretString.md) | *string*

#### **Returns** [*HttpRequest*](HttpRequest.md)

### **setBody**
`
setBody(body: string): HttpRequest
`

#### **Parameters**
- **body**: *string*

#### **Returns** [*HttpRequest*](HttpRequest.md)

### **setHeaders**
`
setHeaders(headers: HttpHeader[]): HttpRequest
`
Replaces and applies a set of HTTP Headers for the request.

#### **Parameters**
- **headers**: [*HttpHeader*](HttpHeader.md)[]

#### **Returns** [*HttpRequest*](HttpRequest.md)

### **setMethod**
`
setMethod(method: HttpRequestMethod): HttpRequest
`

#### **Parameters**
- **method**: [*HttpRequestMethod*](HttpRequestMethod.md)

#### **Returns** [*HttpRequest*](HttpRequest.md)

### **setTimeout**
`
setTimeout(timeout: number): HttpRequest
`

#### **Parameters**
- **timeout**: *number*

#### **Returns** [*HttpRequest*](HttpRequest.md)

#### **Examples**
##### *updateScore.ts*
```javascript
  const req = new mcnet.HttpRequest("http://localhost:3000/updateScore");
  req.body = JSON.stringify({
    score: 22,
  });
  req.method = mcnet.HttpRequestMethod.POST;
  req.headers = [
    new mcnet.HttpHeader("Content-Type", "application/json"),
    new mcnet.HttpHeader("auth", "my-auth-token"),
  ];
  const response: any = await mcnet.http.request(req);
```
