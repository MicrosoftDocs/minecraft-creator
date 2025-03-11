---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayerInteractWithEntityAfterEvent Class
description: Contents of the @minecraft/server.PlayerInteractWithEntityAfterEvent class.
---
# PlayerInteractWithEntityAfterEvent Class

Contains information regarding an event after a player successfully interacts with an entity.

## Properties

### **beforeItemStack**
`read-only beforeItemStack?: ItemStack;`

The ItemStack before the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

### **itemStack**
`read-only itemStack?: ItemStack;`

The ItemStack after the interaction succeeded, or undefined if hand is empty.

Type: [*ItemStack*](ItemStack.md)

### **player**
`read-only player: Player;`

Source Player for this event.

Type: [*Player*](Player.md)

### **target**
`read-only target: Entity;`

The entity that will be interacted with.

Type: [*Entity*](Entity.md)
