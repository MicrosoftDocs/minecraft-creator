---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemDurabilityComponent Class
description: Contents of the @minecraft/server.ItemDurabilityComponent class.
---
# ItemDurabilityComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item can take damage in the process of being used. Note that this component only applies to data-driven items.

## Properties

### **damage**
`damage: number;`

Returns the current damage level of this particular item.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **maxDurability**
`read-only maxDurability: number;`

Represents the amount of damage that this item can take before breaking.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getDamageChance](#getdamagechance)
- [getDamageChanceRange](#getdamagechancerange)

### **getDamageChance**
`
getDamageChance(unbreakingEnchantmentLevel?: number): number
`

Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking enchantment level.

#### **Parameters**
- **unbreakingEnchantmentLevel**?: *number* = `0`
  
  Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be within the range [0, 3].

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getDamageChanceRange**
`
getDamageChanceRange(): minecraftcommon.NumberRange
`

A range of numbers that is used to calculate the damage chance for an item. The damage chance will fall within this range.

**Returns** [*@minecraft/common.NumberRange*](../../minecraft/common/NumberRange.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:durability";`

Type: *string*
