---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-admin.ServerVariables Class
description: Contents of the @minecraft/server-admin.ServerVariables class.
---
# ServerVariables Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
A collection of server variables defined in dedicated server configuration.

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

#### **Returns** *any* | *undefined*

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
