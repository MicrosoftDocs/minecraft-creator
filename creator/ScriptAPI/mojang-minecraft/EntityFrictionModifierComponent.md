---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityFrictionModifierComponent Class
description: Contents of the mojang-minecraft.EntityFrictionModifierComponent class.
---
# EntityFrictionModifierComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines how much friction affects this entity.

## Properties

### **value**
`value: number;`

The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:friction_modifier";`

Identifier of this component. Should always be minecraft:friction_modifier.

Type: *string*
