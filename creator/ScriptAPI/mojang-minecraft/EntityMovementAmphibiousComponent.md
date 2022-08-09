---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityMovementAmphibiousComponent Class
description: Contents of the mojang-minecraft.EntityMovementAmphibiousComponent class.
---
# EntityMovementAmphibiousComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this movement control allows the mob to swim in water and walk on land.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

The maximum number in degrees the mob can turn per tick.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:movement.amphibious";`

Identifier of this component. Should always be minecraft:movement.amphibious.

Type: *string*
