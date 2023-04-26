---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EnchantmentTypes Class
description: Contents of the @minecraft/server.EnchantmentTypes class.
---
# EnchantmentTypes Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [get](#get)

### **get**
`
static "get"(enchantmentId: string): EnchantmentType
`

Retrieves an enchantment with the specified identifier.

#### **Parameters**
- **enchantmentId**: *string*
  
  Identifier of the enchantment.  For example, "minecraft:flame".

#### **Returns** [*EnchantmentType*](EnchantmentType.md) - If available, returns an EnchantmentType object that represents the specified enchantment.

> [!WARNING]
> This function can throw errors.
