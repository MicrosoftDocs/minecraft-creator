---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-admin Module
description: Contents of the @minecraft/server-admin module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/server-admin` Module

Contains types related to administering a Bedrock Dedicated Server. These types allow for the configuration of variables and secrets in JSON files in the Bedrock Dedicated Server folder. These types cannot be used on Minecraft clients or within Minecraft Realms.

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

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

## Functions

### **transferPlayer**
`
transferPlayer(player: minecraftserver.Player, host: string, port: number): void
`

Transfer player to another server.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../../scriptapi/minecraft/server/Player.md)
  
  Player to transfer.
- **host**: *string*
  
  Host of the server to transfer to.
- **port**: *number*
  
  Port of the server to transfer to.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Objects
  
### **secrets**
`static read-only secrets: ServerSecrets;`

A globally available object that returns a list of dedicated-server configured secrets.

Type: [*ServerSecrets*](ServerSecrets.md)
  
### **variables**
`static read-only variables: ServerVariables;`

A globally available object that returns a list of dedicated-server configured variables.

Type: [*ServerVariables*](ServerVariables.md)
