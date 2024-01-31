---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-admin Module
description: Contents of the @minecraft/server-admin module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/server-admin` Module

Contains types related to administering a Bedrock Dedicated Server. These types allow for the configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder. These types cannot be used on Minecraft clients.

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

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

## Manifest Details
```json
{
    "module_name": "@minecraft/server-admin",
    "version": "1.0.0-beta"
}
```

## Available Versions
- `1.0.0-beta`

## Classes
- [SecretString](SecretString.md)
- [ServerSecrets](ServerSecrets.md)
- [ServerVariables](ServerVariables.md)

## Objects
  
### **secrets**
`static read-only secrets: ServerSecrets;`

A globally available object that returns a list of dedicated-server configured secrets.

Type: [*ServerSecrets*](ServerSecrets.md)
  
### **variables**
`static read-only variables: ServerVariables;`

A globally available object that returns a list of dedicated-server configured variables.

Type: [*ServerVariables*](ServerVariables.md)
