---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityColorComponent Class
description: Contents of the mojang-minecraft.EntityColorComponent class.
---
# EntityColorComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines the entity's color. Only works on certain entities that have predefined color values (sheep, llama, shulker).

## Properties

### **value**
`value: number;`

The palette color value of the entity.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:color";`

Identifier of this component. Should always be minecraft:color.

Type: *string*
