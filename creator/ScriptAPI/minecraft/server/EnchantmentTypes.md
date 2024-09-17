---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EnchantmentTypes Class
description: Contents of the @minecraft/server.EnchantmentTypes class.
---
# EnchantmentTypes Class

Contains a catalog of Minecraft Enchantment Types that are available in this world.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(enchantmentId: string): EnchantmentType | undefined
`

Retrieves an enchantment with the specified identifier.

#### **Parameters**
- **enchantmentId**: *string*
  
  Identifier of the enchantment.  For example, "minecraft:flame".

**Returns** [*EnchantmentType*](EnchantmentType.md) | *undefined* - If available, returns an EnchantmentType object that represents the specified enchantment.

### **getAll**
`
static getAll(): EnchantmentType[]
`

Returns a collection of all available enchantment types.

**Returns** [*EnchantmentType*](EnchantmentType.md)[]
