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

::: moniker range="=minecraft-bedrock-experimental"
### **isTamed**
`read-only isTamed: boolean;`

Returns true if the entity is tamed.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **isTamedToPlayer**
`read-only isTamedToPlayer: boolean;`

Returns true if the entity is tamed by a player.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **tamedToPlayer**
`read-only tamedToPlayer?: Player;`

Returns the player that has tamed the entity, or 'undefined' if entity is not tamed by a player.

Type: [*Player*](Player.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **tamedToPlayerId**
`read-only tamedToPlayerId?: string;`

Returns the id of player that has tamed the entity, or 'undefined' if entity is not tamed.

Type: *string*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This property can throw errors when used.
::: moniker-end

## Methods
- [tame](#tame)
::: moniker range="=minecraft-bedrock-experimental"
- [tameToPlayer](#tametoplayer)
::: moniker-end

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

::: moniker range="=minecraft-bedrock-experimental"
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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
::: moniker-end

## Constants

### **componentId**
`static read-only componentId = "minecraft:tamemount";`

Type: *string*
