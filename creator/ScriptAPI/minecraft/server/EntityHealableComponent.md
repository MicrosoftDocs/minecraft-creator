---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityHealableComponent Class
description: Contents of the @minecraft/server.EntityHealableComponent class.
---
# EntityHealableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

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

## Methods
- [getFeedItems](#getfeeditems)

### **getFeedItems**
`
getFeedItems(): FeedItem[]
`

A set of items that can specifically heal this entity.

#### **Returns** [*FeedItem*](FeedItem.md)[] - Entity that this component is associated with.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:healable";`

Identifier of this component. Should always be minecraft:healable.

Type: *string*
