---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.SpawnEntityOptions Interface
description: Contents of the @minecraft/server.SpawnEntityOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# SpawnEntityOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains additional options for spawning an Entity.

## Properties

### **initialPersistence**
`initialPersistence?: boolean;`

Optional boolean which determines if this entity should persist in the game world. Persistence prevents the entity from automatically despawning.

Type: *boolean*

### **initialRotation**
`initialRotation?: number;`

Optional initial rotation, in degrees, to set on the entity when it spawns.

Type: *number*

### **spawnEvent**
`spawnEvent?: string;`

Optional spawn event to send to the entity after it is spawned.

Type: *string*
