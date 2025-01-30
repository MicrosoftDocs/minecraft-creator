---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntitySpawnCallbackArgs Class
description: Contents of the @minecraft/server.EntitySpawnCallbackArgs class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntitySpawnCallbackArgs Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Simplified Spawn Rules


A container for arguments passed to SpawnRulesRegistry.registerEntitySpawnCallback

## Properties

### **dimensionLocation**
`read-only dimensionLocation: DimensionLocation;`

The dimension and location of the spawn.

Type: [*DimensionLocation*](DimensionLocation.md)

### **spawnReason**
`read-only spawnReason: EntitySpawnReason;`

The reason for the spawn.

Type: [*EntitySpawnReason*](EntitySpawnReason.md)

### **spawnType**
`read-only spawnType: EntitySpawnType;`

The entity spawn type.

Type: [*EntitySpawnType*](EntitySpawnType.md)
