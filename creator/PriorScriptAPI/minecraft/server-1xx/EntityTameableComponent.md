---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityTameableComponent Class
description: Contents of the @minecraft/server.EntityTameableComponent class (Version 1.x.x).
---
# EntityTameableComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityTameableComponent.md).

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the rules for an entity to be tamed by the player.

## Properties

### **getTameItems**
`read-only getTameItems: ItemStack[];`

Returns a set of items that can be used to tame this entity.

Type: [*ItemStack*](ItemStack.md)[]

Notes:
  - This property can throw errors when used.

### **isTamed**
`read-only isTamed: boolean;`

Returns true if the entity is tamed by player.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **probability**
`read-only probability: number;`

The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%

Type: *number*

Notes:
  - This property can throw errors when used.

### **tamedToPlayer**
`read-only tamedToPlayer?: Player;`

Returns the player that has tamed the entity, or 'undefined' if entity is not tamed.

Type: [*Player*](Player.md)

Notes:
  - This property can throw errors when used.

### **tamedToPlayerId**
`read-only tamedToPlayerId?: string;`

Returns the id of player that has tamed the entity, or 'undefined' if entity is not tamed.

Type: *string*

Notes:
  - This property can throw errors when used.

## Methods
- [tame](#tame)

### **tame**
`
tame(player: Player): boolean
`

Set this entity as tamed by the given player.

#### **Parameters**
- **player**: [*Player*](Player.md)
  
  The player that this entity should be tamed by.

**Returns** *boolean* - Returns true if the entity was tamed.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:tameable";`

Type: *string*
