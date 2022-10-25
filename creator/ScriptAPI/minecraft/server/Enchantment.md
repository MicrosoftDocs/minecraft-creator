---
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
new Enchantment(enchantmentType: EnchantmentType, level?: number)
`

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md)
- **level**?: *number* = `1`

#### **Returns** [*Enchantment*](Enchantment.md)


