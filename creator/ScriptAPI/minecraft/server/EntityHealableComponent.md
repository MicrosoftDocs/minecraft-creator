---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHealableComponent Class
description: Contents of the @minecraft/server.EntityHealableComponent class.
---
# EntityHealableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the interactions with this entity for healing it.

## Properties

### **forceUse**
`read-only forceUse: boolean;`

Determines if an item can be used regardless of the entity being at full health.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getFeedItems](#getfeeditems)

### **getFeedItems**
`
getFeedItems(): FeedItem[]
`

A set of items that can specifically heal this entity.

**Returns** [*FeedItem*](FeedItem.md)[] - Entity that this component is associated with.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:healable";`

Type: *string*
