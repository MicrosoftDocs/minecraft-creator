---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntitySkinIdComponent Class
description: Contents of the mojang-minecraft.EntitySkinIdComponent class.
---
# EntitySkinIdComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Skin Id value. Can be used to differentiate skins, such as base skins for villagers.

## Properties

### **value**
`value: number;`

The identifier of the skin. By convention, 0 is the identifier of the base skin.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:skin_id";`

Identifier of this component. Should always be minecraft:skin_id.

Type: *string*
