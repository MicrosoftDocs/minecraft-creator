---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityHealableComponent Class
description: Contents of the mojang-minecraft.EntityHealableComponent class.
---
# EntityHealableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines the interactions with this entity for healing it.

## Properties

### **filters**
`read-only filters: FilterGroup;`

A set of filters for when these Healable items would apply.

Type: [*FilterGroup*](FilterGroup.md)

### **forceUse**
`read-only forceUse: boolean;`

Determines if an item can be used regardless of the entity being at full health.

Type: *boolean*

### **items**
`read-only items: FeedItem[];`

A set of items that can specifically heal this entity.

Type: [*FeedItem*](FeedItem.md)[]

## Constants

### **id**
`static read-only id = "minecraft:healable";`

Identifier of this component. Should always be minecraft:healable.

Type: *string*
