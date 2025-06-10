---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.SpawnEntityOptions Interface
description: Contents of the @minecraft/server.SpawnEntityOptions class.
---
# SpawnEntityOptions Interface

Contains additional options for spawning an Entity.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **initialPersistence**
`initialPersistence?: boolean;`

Optional boolean which determines if this entity should persist in the game world. Persistence prevents the entity from automatically despawning.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **initialRotation**
`initialRotation?: number;`

Optional initial rotation, in degrees, to set on the entity when it spawns.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **spawnEvent**
`spawnEvent?: string;`

Optional spawn event to send to the entity after it is spawned.

Type: *string*
