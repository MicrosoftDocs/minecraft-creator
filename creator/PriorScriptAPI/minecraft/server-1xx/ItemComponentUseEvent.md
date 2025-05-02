---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemComponentUseEvent Class
description: Contents of the @minecraft/server.ItemComponentUseEvent class (Version 1.x.x).
---
# ItemComponentUseEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemComponentUseEvent.md).

Contains information regarding the use of an item.

## Properties

### **itemStack**
`read-only itemStack?: ItemStack;`

The item stack when the item was used.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

The player who used the item.

Type: [*Player*](Player.md)
