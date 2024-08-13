---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityAgeableComponent Class
description: Contents of the @minecraft/server.EntityAgeableComponent class.
---
# EntityAgeableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

## Properties

### **duration**
`read-only duration: number;`

Amount of time before the entity grows up, -1 for always a baby.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **growUp**
`read-only growUp: Trigger;`

Event that runs when this entity grows up.

Type: [*Trigger*](Trigger.md)

> [!WARNING]
> This property can throw errors when used.

### **transformToItem**
`read-only transformToItem: string;`

The feed item used will transform into this item upon successful interaction.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getDropItems](#getdropitems)
- [getFeedItems](#getfeeditems)

### **getDropItems**
`
getDropItems(): string[]
`

List of items that the entity drops when it grows up.

**Returns** *string*[]

> [!WARNING]
> This function can throw errors.

### **getFeedItems**
`
getFeedItems(): EntityDefinitionFeedItem[]
`

List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.

**Returns** [*EntityDefinitionFeedItem*](EntityDefinitionFeedItem.md)[]

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:ageable";`

Type: *string*
