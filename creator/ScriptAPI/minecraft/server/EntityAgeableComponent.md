---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityAgeableComponent Class
description: Contents of the @minecraft/server.EntityAgeableComponent class.
---
# EntityAgeableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

## Properties

### **duration**
`read-only duration: number;`

Amount of time before the entity grows up, -1 for always a baby.

Type: *number*

### **growUp**
`read-only growUp: Trigger;`

Event to run when this entity grows up.

Type: [*Trigger*](Trigger.md)

## Methods
- [getDropItems](#getdropitems)
- [getFeedItems](#getfeeditems)

### **getDropItems**
`
getDropItems(): string[]
`

List of items that the entity drops when it grows up.

#### **Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **getFeedItems**
`
getFeedItems(): EntityDefinitionFeedItem[]
`

List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.

#### **Returns** [*EntityDefinitionFeedItem*](EntityDefinitionFeedItem.md)[]

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:ageable";`

Identifier of this component. Should always be minecraft:ageable.

Type: *string*
