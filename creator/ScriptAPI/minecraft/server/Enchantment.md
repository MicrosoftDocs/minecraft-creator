---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Enchantment Class
description: Contents of the @minecraft/server.Enchantment class.
---
# Enchantment Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

This class represents a specific leveled enchantment that is applied to an item.

## Properties

### **level**
`level: number;`

The level of this enchantment instance.

Type: *number*

### **type**
`read-only type: EnchantmentType;`

The enchantment type of this instance.

Type: [*EnchantmentType*](EnchantmentType.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new Enchantment(enchantmentType: EnchantmentType | string, level?: number)
`

Creates a new particular type of enchantment configuration.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md) | *string*
  
  Type of the enchantment.
- **level**?: *number* = `1`
  
  Level of the enchantment.

#### **Returns** [*Enchantment*](Enchantment.md)

> [!WARNING]
> This function can throw errors.
