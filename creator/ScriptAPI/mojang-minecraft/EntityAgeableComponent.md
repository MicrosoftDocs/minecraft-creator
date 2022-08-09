---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityAgeableComponent Class
description: Contents of the mojang-minecraft.EntityAgeableComponent class.
---
# EntityAgeableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

## Properties

### **dropItems**
`read-only dropItems: string[];`

List of items that the entity drops when it grows up.

Type: *string*[]

### **duration**
`read-only duration: number;`

Amount of time before the entity grows up, -1 for always a baby.

Type: *number*

### **feedItems**
`read-only feedItems: EntityDefinitionFeedItem[];`

List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.

Type: [*EntityDefinitionFeedItem*](EntityDefinitionFeedItem.md)[]

### **growUp**
`read-only growUp: Trigger;`

Event to run when this entity grows up.

Type: [*Trigger*](Trigger.md)

## Constants

### **id**
`static read-only id = "minecraft:ageable";`

Identifier of this component. Should always be minecraft:ageable.

Type: *string*
