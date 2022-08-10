---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityCanFlyComponent Class
description: Contents of the mojang-minecraft.EntityCanFlyComponent class.
---
# EntityCanFlyComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this component signifies that the entity can fly, and the pathfinder won't be restricted to paths where a solid block is required underneath it.

## Constants

### **id**
`static read-only id = "minecraft:can_fly";`

Identifier of this component. Should always be minecraft:can_fly.

Type: *string*
