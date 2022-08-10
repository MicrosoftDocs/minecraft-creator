---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityDefinitionFeedItem Class
description: Contents of the mojang-minecraft.EntityDefinitionFeedItem class.
---
# EntityDefinitionFeedItem Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow.

## Properties

### **growth**
`read-only growth: number;`

The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.

Type: *number*

### **item**
`read-only item: string;`

Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.

Type: *string*
