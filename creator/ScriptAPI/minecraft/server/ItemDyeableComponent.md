---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ItemDyeableComponent Class
description: Contents of the @minecraft/server.ItemDyeableComponent class.
---
# ItemDyeableComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item can be dyed.

## Properties

### **color**
`color?: RGB;`

Sets and returns the current color of the item.

Type: [*RGB*](RGB.md)

Notes:
  - This property can't be edited in read-only mode.

### **defaultColor**
`read-only defaultColor?: RGB;`

Returns the default color of the item.

Type: [*RGB*](RGB.md)

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:dyeable";`

Type: *string*
