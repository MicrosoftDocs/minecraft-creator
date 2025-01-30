---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.StartupEvent Class
description: Contents of the @minecraft/server.StartupEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# StartupEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Properties

### **blockComponentRegistry**
`read-only blockComponentRegistry: BlockComponentRegistry;`

Type: [*BlockComponentRegistry*](BlockComponentRegistry.md)

### **itemComponentRegistry**
`read-only itemComponentRegistry: ItemComponentRegistry;`

Type: [*ItemComponentRegistry*](ItemComponentRegistry.md)

## Methods
- [getSpawnRulesRegistry](#getspawnrulesregistry)

### **getSpawnRulesRegistry**
`
getSpawnRulesRegistry(): SpawnRulesRegistry
`

**Returns** [*SpawnRulesRegistry*](SpawnRulesRegistry.md)
 
#### Required Experiments
- Simplified Spawn Rules

  
Notes:
- This function can't be called in read-only mode.
