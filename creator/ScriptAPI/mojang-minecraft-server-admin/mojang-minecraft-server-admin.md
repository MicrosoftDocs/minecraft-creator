---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-server-admin Module
description: Contents of the mojang-minecraft-server-admin module
---
# mojang-minecraft-server-admin Module
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains types related to administering a Bedrock Dedicated Server. These types allow for the configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder. These types cannot be used on Minecraft clients.

## Manifest Details
```json
{
    // mojang-minecraft-server-admin
    "uuid": "53d7f2bf-bf9c-49c4-ad1f-7c803d947920",
    "version": "1.0.0-beta"
}
```

## Available Versions
- 1.0.0-beta

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
