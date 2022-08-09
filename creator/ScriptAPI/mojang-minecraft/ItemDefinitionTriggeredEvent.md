---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ItemDefinitionTriggeredEvent Class
description: Contents of the mojang-minecraft.ItemDefinitionTriggeredEvent class.
---
# ItemDefinitionTriggeredEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to a custom item having a data definition change being triggered.

## Properties

### **eventName**
`read-only eventName: string;`

Name of the data-driven item event that is triggering this change.

Type: *string*

### **item**
`item: ItemStack;`

The impacted item stack that is being used.

Type: [*ItemStack*](ItemStack.md)

### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)
