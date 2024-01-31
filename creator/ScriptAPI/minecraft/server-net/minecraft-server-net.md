---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net Module
description: Contents of the @minecraft/server-net module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/server-net` Module

The `@minecraft/server-net` module contains types for executing HTTP-based requests. This module can only be used on Bedrock Dedicated Server.

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

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

## Manifest Details
```json
{
    "module_name": "@minecraft/server-net",
    "version": "1.0.0-beta"
}
```

## Available Versions
- `1.0.0-beta`

## Enumerations
- [HttpRequestMethod](HttpRequestMethod.md)

## Classes
- [HttpClient](HttpClient.md)
- [HttpHeader](HttpHeader.md)
- [HttpRequest](HttpRequest.md)
- [HttpResponse](HttpResponse.md)

## Objects
  
### **http**
`static read-only http: HttpClient;`

Type: [*HttpClient*](HttpClient.md)
