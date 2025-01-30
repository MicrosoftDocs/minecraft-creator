---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ObstructionCallbackArgs Class
description: Contents of the @minecraft/server.ObstructionCallbackArgs class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ObstructionCallbackArgs Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Simplified Spawn Rules


A container for arguments passed to SpawnRulesRegistry.registerObstructionCallback

## Properties

### **dimension**
`read-only dimension: Dimension;`

The dimension of the spawn.

Type: [*Dimension*](Dimension.md)

### **entity**
`read-only entity: Entity;`

The entity being checked for obstruction.

Type: [*Entity*](Entity.md)

### **spawnType**
`read-only spawnType: EntitySpawnType;`

The entity spawn type.

Type: [*EntitySpawnType*](EntitySpawnType.md)
