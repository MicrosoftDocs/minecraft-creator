---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EnchantmentList Class
description: Contents of the mojang-minecraft.EnchantmentList class.
---
# EnchantmentList Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Implements
- Iterator&lt;[*Enchantment*](Enchantment.md)&gt;

This class represents a collection of enchantments that can be applied to an item.

## Properties

### **slot**
`read-only slot: number;`

The item slot/type that this collection is applied to.

Type: *number*

## Methods
- [constructor](#constructor)
- [[Symbol.iterator]](#[symbol.iterator])
- [addEnchantment](#addenchantment)
- [canAddEnchantment](#canaddenchantment)
- [getEnchantment](#getenchantment)
- [hasEnchantment](#hasenchantment)
- [next](#next)
- [removeEnchantment](#removeenchantment)

### **constructor**
`
new EnchantmentList(enchantmentSlot: number)
`

#### **Parameters**
- **enchantmentSlot**: *number*

#### **Returns** [*EnchantmentList*](EnchantmentList.md)

### **[Symbol.iterator]**
`
[Symbol.iterator](): Iterator<Enchantment>
`

#### **Returns** Iterator&lt;[*Enchantment*](Enchantment.md)&gt;

### **addEnchantment**
`
addEnchantment(enchantment: Enchantment): boolean
`
Attempts to add the enchantment to this collection. Returns true if successful.

#### **Parameters**
- **enchantment**: [*Enchantment*](Enchantment.md)

#### **Returns** *boolean*

### **canAddEnchantment**
`
canAddEnchantment(enchantment: Enchantment): boolean
`
Returns whether or not the provided EnchantmentInstance can be added to this collection.

#### **Parameters**
- **enchantment**: [*Enchantment*](Enchantment.md)

#### **Returns** *boolean*

### **getEnchantment**
`
getEnchantment(enchantmentType: EnchantmentType): Enchantment
`
Returns an enchantment associated with a type.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md)

#### **Returns** [*Enchantment*](Enchantment.md)

### **hasEnchantment**
`
hasEnchantment(enchantmentType: EnchantmentType): number
`
If this collection has an EnchantmentInstance with type, returns the level of the enchantment. Returns 0 if not present.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md)

#### **Returns** *number*

### **next**
`
next(): IteratorResult<Enchantment>
`

#### **Returns** IteratorResult&lt;[*Enchantment*](Enchantment.md)&gt;

### **removeEnchantment**
`
removeEnchantment(enchantmentType: EnchantmentType): void
`
Removes an EnchantmentInstance with type from this collection if present.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md)
