---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntitySpawnType Class
description: Contents of the @minecraft/server.EntitySpawnType class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntitySpawnType Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Simplified Spawn Rules


A container for information relating to an entity spawn event.

## Properties

### **entityId**
`read-only entityId: string;`

The entity Id.

Type: *string*

### **height**
`read-only height: number;`

The height of the entity to spawn.

Type: *number*

### **isImmuneFire**
`read-only isImmuneFire: boolean;`

Is the entity immune to fire.

Type: *boolean*

### **isSummonable**
`read-only isSummonable: boolean;`

Is the entity summonable.

Type: *boolean*

### **spawnCategory**
`read-only spawnCategory: EntitySpawnCategory;`

The category determining the type of spawn.

Type: [*EntitySpawnCategory*](EntitySpawnCategory.md)

### **width**
`read-only width: number;`

The width of the entity to spawn.

Type: *number*

## Methods
- [getSpawnAABB](#getspawnaabb)
- [isBlockDangerous](#isblockdangerous)

### **getSpawnAABB**
`
getSpawnAABB(position: Vector3): BoundingBox
`

Helper to get the AABB for the entity at a given location

#### **Parameters**
- **position**: [*Vector3*](Vector3.md)

**Returns** [*BoundingBox*](BoundingBox.md)

### **isBlockDangerous**
`
isBlockDangerous(block: Block): boolean
`

Is the block being spawned on dangerous.

#### **Parameters**
- **block**: [*Block*](Block.md)

**Returns** *boolean*
