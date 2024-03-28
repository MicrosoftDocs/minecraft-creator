---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-admin.ServerVariables Class
description: Contents of the @minecraft/server-admin.ServerVariables class.
---
# ServerVariables Class

A collection of server variables defined in dedicated server configuration.

#### Examples
##### ***getPlayerProfile.ts***
```typescript
import { variables, secrets } from "@minecraft/server-admin";
import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from "@minecraft/server-net";

const serverUrl = variables.get('serverEndpoint');

function getPlayerProfile(playerId: string): Promise<HttpResponse> {
    const req = new HttpRequest(serverUrl + 'getPlayerProfile');

    req.body = JSON.stringify({
        playerId,
    });

    const authTokenSec = secrets.get('authtoken');

    if (!authTokenSec) {
        throw new Error('authtoken secret not defined.');
    }

    req.method = HttpRequestMethod.Post;
    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];

    return http.request(req);
}
```

## Properties

### **names**
`read-only names: string[];`

A list of available, configured server variables.

Type: *string*[]

## Methods
- [get](#get)

### **get**
`
"get"(name: string): any | undefined
`

Returns the value of variable that has been configured in a dedicated server configuration JSON file.

#### **Parameters**
- **name**: *string*

**Returns** *any* | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

#### Examples
##### ***getPlayerProfile.ts***
```typescript
import { variables, secrets } from "@minecraft/server-admin";
import { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from "@minecraft/server-net";

const serverUrl = variables.get('serverEndpoint');

function getPlayerProfile(playerId: string): Promise<HttpResponse> {
    const req = new HttpRequest(serverUrl + 'getPlayerProfile');

    req.body = JSON.stringify({
        playerId,
    });

    const authTokenSec = secrets.get('authtoken');

    if (!authTokenSec) {
        throw new Error('authtoken secret not defined.');
    }

    req.method = HttpRequestMethod.Post;
    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];

    return http.request(req);
}
```
