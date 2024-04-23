---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCooldownComponent Class
description: Contents of the @minecraft/server.ItemCooldownComponent class.
---
# ItemCooldownComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item has a cooldown effect when used by entities.

## Properties

### **cooldownCategory**
`read-only cooldownCategory: string;`

Represents the cooldown category that this item is associated with.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

### **cooldownTicks**
`read-only cooldownTicks: number;`

Amount of time, in ticks, it will take this item to cooldown.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getCooldownTicksRemaining](#getcooldownticksremaining)
- [isCooldownCategory](#iscooldowncategory)
- [startCooldown](#startcooldown)

### **getCooldownTicksRemaining**
`
getCooldownTicksRemaining(player: Player): number
`

#### **Parameters**
- **player**: [*Player*](Player.md)

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **isCooldownCategory**
`
isCooldownCategory(cooldownCategory: string): boolean
`

Will return true if the item is the cooldown category passed in and false otherwise.

#### **Parameters**
- **cooldownCategory**: *string*
  
  The cooldown category that might be associated with this item.

**Returns** *boolean* - True if the item is the given cooldown category.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **startCooldown**
`
startCooldown(player: Player): void
`

Starts a new cooldown period for this item.

#### **Parameters**
- **player**: [*Player*](Player.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:cooldown";`

Type: *string*
