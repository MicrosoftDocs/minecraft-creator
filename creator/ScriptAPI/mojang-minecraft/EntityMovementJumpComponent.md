---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityMovementJumpComponent Class
description: Contents of the mojang-minecraft.EntityMovementJumpComponent class.
---
# EntityMovementJumpComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Move control that causes the mob to jump as it moves with a specified delay between jumps.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

The maximum number in degrees the mob can turn per tick.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:movement.jump";`

Identifier of this component. Should always be minecraft:movement.jump.

Type: *string*
