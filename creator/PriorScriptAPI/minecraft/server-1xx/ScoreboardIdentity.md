---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ScoreboardIdentity Class
description: Contents of the @minecraft/server.ScoreboardIdentity class (Version 1.x.x).
---
# ScoreboardIdentity Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ScoreboardIdentity.md).

Contains an identity of the scoreboard item.

## Properties

### **displayName**
`read-only displayName: string;`

Returns the player-visible name of this identity.

Type: *string*

### **id**
`read-only id: number;`

Identifier of the scoreboard identity.

Type: *number*

### **type**
`read-only type: ScoreboardIdentityType;`

Type of the scoreboard identity.

Type: [*ScoreboardIdentityType*](ScoreboardIdentityType.md)

## Methods
- [getEntity](#getentity)
- [isValid](#isvalid)

### **getEntity**
`
getEntity(): Entity | undefined
`

If the scoreboard identity is an entity or player, returns the entity that this scoreboard item corresponds to.

**Returns** [*Entity*](Entity.md) | *undefined*
  
Notes:
- This function can throw errors.

### **isValid**
`
isValid(): boolean
`

Returns true if the ScoreboardIdentity reference is still valid.

**Returns** *boolean*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
