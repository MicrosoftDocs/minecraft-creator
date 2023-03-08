---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-net.HttpHeader Class
description: Contents of the @minecraft/server-net.HttpHeader class.
---
# HttpHeader Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Represents an HTTP header - a key/value pair of meta-information about a request.

## Properties

### **key**
`key: string;`

Key of the HTTP header.

Type: *string*

### **value**
`value: minecraftserveradmin.SecretString | string;`

Value of the HTTP header.

Type: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*

## Methods
- [constructor](#constructor)

### **constructor**
`
new HttpHeader(key: string, value: minecraftserveradmin.SecretString | string)
`

#### **Parameters**
- **key**: *string*
- **value**: [*@minecraft/server-admin.SecretString*](../../minecraft/server-admin/SecretString.md) | *string*

#### **Returns** [*HttpHeader*](HttpHeader.md)

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
