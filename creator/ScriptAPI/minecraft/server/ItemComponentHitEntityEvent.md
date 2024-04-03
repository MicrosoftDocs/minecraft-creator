---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentHitEntityEvent Class
description: Contents of the @minecraft/server.ItemComponentHitEntityEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemComponentHitEntityEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding when an item is used to hit an entity.

## Properties

### **attackingEntity**
`read-only attackingEntity: Entity;`

The attacking entity.

Type: [*Entity*](Entity.md)

### **hadEffect**
`read-only hadEffect: boolean;`

Whether the hit landed or had any effect.

Type: *boolean*

### **hitEntity**
`read-only hitEntity: Entity;`

The entity being hit.

Type: [*Entity*](Entity.md)

### **itemStack**
`read-only itemStack?: ItemStack;`

The item stack used to hit the entity.

Type: [*ItemStack*](ItemStack.md)
