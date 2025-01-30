---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.SpawnRulesRegistry Class
description: Contents of the @minecraft/server.SpawnRulesRegistry class.
monikerRange: "=minecraft-bedrock-experimental"
---
# SpawnRulesRegistry Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Simplified Spawn Rules


Container for spawn rules APIs. Allows for registering callbacks to extend the spawner system.

## Methods
- [registerEntitySpawnCallback](#registerentityspawncallback)
- [registerObstructionCallback](#registerobstructioncallback)

### **registerEntitySpawnCallback**
`
registerEntitySpawnCallback(id: string, callback: (arg0: EntitySpawnCallbackArgs) => boolean): void
`

Registers an entity spawn callback to the provided key.

#### **Parameters**
- **id**: *string*
  
  The Id to associate the callback with.
- **callback**: (arg0: [*EntitySpawnCallbackArgs*](EntitySpawnCallbackArgs.md)) => *boolean*
  
  The callback that will be invoked when a spawner tests for the associated predicate key.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*NamespaceNameError*](NamespaceNameError.md), [*SpawnRulesInvalidRegistryError*](SpawnRulesInvalidRegistryError.md)

### **registerObstructionCallback**
`
registerObstructionCallback(id: string, callback: (arg0: ObstructionCallbackArgs) => boolean): void
`

Registers an obstruction callback to the provided key.

#### **Parameters**
- **id**: *string*
  
  The Id to associate the callback with.
- **callback**: (arg0: [*ObstructionCallbackArgs*](ObstructionCallbackArgs.md)) => *boolean*
  
  The callback that will be invoked when a spawner tests for the associated predicate key.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*NamespaceNameError*](NamespaceNameError.md), [*SpawnRulesInvalidRegistryError*](SpawnRulesInvalidRegistryError.md)
