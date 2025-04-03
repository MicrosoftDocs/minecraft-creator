---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-admin.AsyncPlayerJoinBeforeEvent Class
description: Contents of the @minecraft/server-admin.AsyncPlayerJoinBeforeEvent class.
---
# AsyncPlayerJoinBeforeEvent Class

The data available before a player joins the world.

## Properties

### **name**
`read-only name: string;`

The player's name

Type: *string*

### **persistentId**
`read-only persistentId: string;`

An identifier that can be used to identify a player across sessions.

Type: *string*

## Methods
- [disconnect](#disconnect)
- [isValid](#isvalid)

### **disconnect**
`
disconnect(reason?: string): void
`

Call this to disconnect a player. They will be allowed to try to join again.

#### **Parameters**
- **reason**?: *string* = `null`
  
Notes:
- This function can throw errors.
  - Throws [*DisconnectedError*](DisconnectedError.md)

### **isValid**
`
isValid(): boolean
`

Will return true if the player is still waiting to join the world. If they disconnect then it will return false.

**Returns** *boolean*
