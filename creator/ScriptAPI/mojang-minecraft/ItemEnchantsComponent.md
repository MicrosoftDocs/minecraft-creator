---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemEnchantsComponent Class
description: Contents of the mojang-minecraft.ItemEnchantsComponent class.
---
# ItemEnchantsComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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

### **id**
`static read-only id = "minecraft:enchantments";`

Identifier of this component.

Type: *string*
