---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.FeedItem Class
description: Contents of the @minecraft/server.FeedItem class.
---
# FeedItem Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects.

## Properties

### **healAmount**
`read-only healAmount: number;`

The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.

Type: *number*

### **item**
`read-only item: string;`

Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.

Type: *string*

## Methods
- [getEffects](#geteffects)

### **getEffects**
`
getEffects(): FeedItemEffect[]
`

As part of the Healable component, an optional collection of side effects that can occur from being fed an item.

#### **Returns** [*FeedItemEffect*](FeedItemEffect.md)[]
