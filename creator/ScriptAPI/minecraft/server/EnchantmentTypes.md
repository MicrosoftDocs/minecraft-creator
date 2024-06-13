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
::: moniker range="=minecraft-bedrock-experimental"
- [getAll](#getall)
::: moniker-end

### **get**
`
static "get"(enchantmentId: string): EnchantmentType | undefined
`

Retrieves an enchantment with the specified identifier.

#### **Parameters**
- **enchantmentId**: *string*
  
  Identifier of the enchantment.  For example, "minecraft:flame".

**Returns** [*EnchantmentType*](EnchantmentType.md) | *undefined* - If available, returns an EnchantmentType object that represents the specified enchantment.

::: moniker range="=minecraft-bedrock-experimental"
### **getAll**
`
static getAll(): EnchantmentType[]
`

Returns a collection of all available enchantment types.

**Returns** [*EnchantmentType*](EnchantmentType.md)[]

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end
