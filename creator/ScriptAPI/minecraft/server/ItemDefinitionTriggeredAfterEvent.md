---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ItemDefinitionTriggeredAfterEvent Class
description: Contents of the @minecraft/server.ItemDefinitionTriggeredAfterEvent class.
---
# ItemDefinitionTriggeredAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)
