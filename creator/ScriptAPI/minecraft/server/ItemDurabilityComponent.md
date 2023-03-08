---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemDurabilityComponent Class
description: Contents of the @minecraft/server.ItemDurabilityComponent class.
---
# ItemDurabilityComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item can take damage in the process of being used. Note that this component only applies to data-driven items.

## Properties

### **damage**
`damage: number;`

Returns the current damage level of this particular item.

Type: *number*

### **maxDurability**
`read-only maxDurability: number;`

Represents the amount of damage that this item can take before breaking.

Type: *number*

## Methods
- [getDamageChance](#getdamagechance)
- [getDamageRange](#getdamagerange)

### **getDamageChance**
`
getDamageChance(unbreaking?: number): number
`

Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking level.

#### **Parameters**
- **unbreaking**?: *number* = `0`
  
  Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be greater than 0.

#### **Returns** *number*

> [!WARNING]
> This function can throw errors.

### **getDamageRange**
`
getDamageRange(): NumberRange
`

A range of numbers that describes the chance of the item losing durability.

#### **Returns** [*NumberRange*](NumberRange.md)

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:durability";`

Identifier of this component. Should always be 'minecraft:durability'.

Type: *string*
