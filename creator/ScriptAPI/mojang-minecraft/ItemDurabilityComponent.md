---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemDurabilityComponent Class
description: Contents of the mojang-minecraft.ItemDurabilityComponent class.
---
# ItemDurabilityComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

When present on an item, this item can take damage in the process of being used. Note that this component only applies to data-driven items.

## Properties

### **damage**
`damage: number;`

Returns the current damage level of this particular item.

Type: *number*

### **damageRange**
`read-only damageRange: NumberRange;`

A range of numbers that describes the chance of the item losing durability.

Type: [*NumberRange*](NumberRange.md)

### **maxDurability**
`read-only maxDurability: number;`

Represents the amount of damage that this item can take before breaking.

Type: *number*

## Methods
- [getDamageChance](#getdamagechance)

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

## Constants

### **id**
`static read-only id = "minecraft:durability";`

Identifier of this component. Should always be 'minecraft:durability'.

Type: *string*
