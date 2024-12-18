---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentBeforeDurabilityDamageEvent Class
description: Contents of the @minecraft/server.ItemComponentBeforeDurabilityDamageEvent class.
---
# ItemComponentBeforeDurabilityDamageEvent Class

Contains information regarding an item before it is damaged from hitting an entity.

## Properties

### **attackingEntity**
`read-only attackingEntity: Entity;`

The attacking entity.

Type: [*Entity*](Entity.md)

### **durabilityDamage**
`durabilityDamage: number;`

The damage applied to the item's durability when the event occurs.

Type: *number*

### **hitEntity**
`read-only hitEntity: Entity;`

The entity being hit.

Type: [*Entity*](Entity.md)

### **itemStack**
`itemStack?: ItemStack;`

The item stack used to hit the entity.

Type: [*ItemStack*](ItemStack.md)
