---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.HttpHeader Class
description: Contents of the @minecraft/server-net.HttpHeader class.
---
# HttpHeader Class

Represents an HTTP header - a key/value pair of meta-information about a request.

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

### **key**
`key: string;`

Key of the HTTP header.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **value**
`value: minecraftserveradmin.SecretString | string;`

Value of the HTTP header.

Type: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [constructor](#constructor)

### **constructor**
`
new HttpHeader(key: string, value: minecraftserveradmin.SecretString | string)
`

#### **Parameters**
- **key**: *string*
- **value**: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*

**Returns** [*HttpHeader*](HttpHeader.md)

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
