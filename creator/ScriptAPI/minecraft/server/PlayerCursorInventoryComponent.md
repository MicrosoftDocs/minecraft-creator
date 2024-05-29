---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerCursorInventoryComponent Class
description: Contents of the @minecraft/server.PlayerCursorInventoryComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerCursorInventoryComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

## Properties

### **item**
`read-only item?: ItemStack;`

Type: [*ItemStack*](ItemStack.md)

> [!WARNING]
> This property can throw errors when used.

## Methods
- [clear](#clear)

### **clear**
`
clear(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:cursor_inventory";`

Type: *string*
