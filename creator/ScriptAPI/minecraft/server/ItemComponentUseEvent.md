---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentUseEvent Class
description: Contents of the @minecraft/server.ItemComponentUseEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemComponentUseEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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
