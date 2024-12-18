---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerCursorInventoryComponent Class
description: Contents of the @minecraft/server.PlayerCursorInventoryComponent class.
---
# PlayerCursorInventoryComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Represents the players cursor inventory. Used when moving items between between containers in the inventory UI. Not used with touch controls.

## Properties

### **item**
`read-only item?: ItemStack;`

The ItemStack currently in the players cursor inventory.

Type: [*ItemStack*](ItemStack.md)

Notes:
  - This property can throw errors when used.

## Methods
- [clear](#clear)

### **clear**
`
clear(): void
`

Clears the players cursor inventory.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:cursor_inventory";`

Type: *string*
