---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityTameMountComponent Class
description: Contents of the @minecraft/server.EntityTameMountComponent class.
---
# EntityTameMountComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Contains options for taming a rideable entity based on the entity that mounts it.

## Properties

### **isTamed**
`read-only isTamed: boolean;`

Returns true if the entity is tamed.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **isTamedToPlayer**
`read-only isTamedToPlayer: boolean;`

Returns true if the entity is tamed by a player.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **tamedToPlayer**
`read-only tamedToPlayer?: Player;`

Returns the player that has tamed the entity, or 'undefined' if entity is not tamed by a player.

Type: [*Player*](Player.md)

> [!WARNING]
> This property can throw errors when used.

### **tamedToPlayerId**
`read-only tamedToPlayerId?: string;`

Returns the id of player that has tamed the entity, or 'undefined' if entity is not tamed.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [tame](#tame)
- [tameToPlayer](#tametoplayer)

### **tame**
`
tame(showParticles: boolean): void
`

Sets this rideable entity as tamed.

#### **Parameters**
- **showParticles**: *boolean*
  
  Whether to show effect particles when this entity is tamed.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **tameToPlayer**
`
tameToPlayer(showParticles: boolean, player: Player): boolean
`

Sets this rideable entity as tamed by the given player.

#### **Parameters**
- **showParticles**: *boolean*
  
  Whether to show effect particles when this entity is tamed.
- **player**: [*Player*](Player.md)
  
  The player that this entity should be tamed by.

**Returns** *boolean* - Returns true if the entity was tamed.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:tamemount";`

Type: *string*
