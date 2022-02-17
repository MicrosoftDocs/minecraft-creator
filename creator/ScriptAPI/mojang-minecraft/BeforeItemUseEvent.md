---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeItemUseEvent Class
description: Contents of the mojang-minecraft.BeforeItemUseEvent class.
---
# BeforeItemUseEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to an item being used.

## Properties
### **cancel**
`cancel: boolean;`

If set to true, this will cancel the item use behavior.

Type: *boolean*


### **item**
`item: ItemStack;`

The impacted item stack that is being used.

Type: [*ItemStack*](ItemStack.md)


### **source**
`read-only source: Entity;`

Returns the source entity that triggered this item event.

Type: [*Entity*](Entity.md)


