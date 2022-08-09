---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-server-admin.ServerSecrets Class
description: Contents of the mojang-minecraft-server-admin.ServerSecrets class.
---
# ServerSecrets Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

A collection of server secrets defined in dedicated server configuration.

## Properties

### **names**
`read-only names: string[];`

A list of available, configured server secrets.

Type: *string*[]

## Methods
- [get](#get)

### **get**
`
get(name: string): SecretString
`
Returns a SecretString that is a placeholder for a secret configured in a JSON file. In certain objects, like an HttpHeader, this Secret is resolved at the time of execution but is not made available to the script environment.

#### **Parameters**
- **name**: *string*

#### **Returns** [*SecretString*](SecretString.md)

#### **Examples**
##### *getPlayerProfile.ts*
```javascript
  const serverUrl = mcsa.variables.get("serverEndpoint");
  const req = new mcnet.HttpRequest(serverUrl + "getPlayerProfile");
  req.body = JSON.stringify({
    playerId: "johndoe",
  });
  req.method = mcnet.HttpRequestMethod.POST;
  req.headers = [
    new mcnet.HttpHeader("Content-Type", "application/json"),
    new mcnet.HttpHeader("auth", mcsa.secrets.get("authtoken")),
  ];
  const response: any = await mcnet.http.request(req);
```
