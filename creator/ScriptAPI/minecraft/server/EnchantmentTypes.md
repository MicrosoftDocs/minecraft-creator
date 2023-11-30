---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EnchantmentTypes Class
description: Contents of the @minecraft/server.EnchantmentTypes class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EnchantmentTypes Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Provides a list of enchantment types.

## Methods
- [get](#get)

### **get**
`
static "get"(enchantmentId: string): EnchantmentType | undefined
`

Retrieves an enchantment with the specified identifier.

#### **Parameters**
- **enchantmentId**: *string*
  
  Identifier of the enchantment.  For example, "minecraft:flame".

#### **Returns** [*EnchantmentType*](EnchantmentType.md) | *undefined* - If available, returns an EnchantmentType object that represents the specified enchantment.
