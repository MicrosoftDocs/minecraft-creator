---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentConsumeEvent Class
description: Contents of the @minecraft/server.ItemComponentConsumeEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemComponentConsumeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to a food item being consumed.

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

The item stack that was consumed.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

The source entity that consumed the item.

Type: [*Entity*](Entity.md)
