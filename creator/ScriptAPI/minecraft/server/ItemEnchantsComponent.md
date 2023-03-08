---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemEnchantsComponent Class
description: Contents of the @minecraft/server.ItemEnchantsComponent class.
---
# ItemEnchantsComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item has applied enchantment effects. Note that this component only applies to data-driven items.

## Properties

### **enchantments**
`enchantments: EnchantmentList;`

Returns a collection of the enchantments applied to this item stack.

Type: [*EnchantmentList*](EnchantmentList.md)

## Methods
- [removeAllEnchantments](#removeallenchantments)

### **removeAllEnchantments**
`
removeAllEnchantments(): void
`

Removes all enchantments applied to this item stack.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:enchantments";`

Identifier of this component.

Type: *string*
