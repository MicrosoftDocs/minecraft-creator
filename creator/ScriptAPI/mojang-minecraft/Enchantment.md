---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Enchantment Class
description: Contents of the mojang-minecraft.Enchantment class.
---
# Enchantment Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
new Enchantment(enchantmentType: EnchantmentType, level?: number)
`

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md)
- **level**?: *number* = `1`

#### **Returns** [*Enchantment*](Enchantment.md)
