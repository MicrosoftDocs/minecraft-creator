---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ItemDefinitionTriggeredAfterEvent Class
description: Contents of the @minecraft/server.ItemDefinitionTriggeredAfterEvent class.
ms.service: minecraft-bedrock-edition
---
# ItemDefinitionTriggeredAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend ItemDefinitionTriggeredAfterEvent
- [*ItemDefinitionTriggeredBeforeEvent*](ItemDefinitionTriggeredBeforeEvent.md)

Contains information related to a custom item having a data definition change being triggered.

## Properties

### **eventName**
`read-only eventName: string;`

Name of the data-driven item event that is triggering this change.

Type: *string*

### **itemStack**
`itemStack: ItemStack;`

Related item stack that the definitional change has been triggered upon.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Player;`

Returns the source entity that triggered this item event.

Type: [*Player*](Player.md)
