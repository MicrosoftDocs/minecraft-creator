---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityVariantComponent Class
description: Contents of the @minecraft/server.EntityVariantComponent class.
---
# EntityVariantComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager).

## Properties

### **value**
`read-only value: number;`

The identifier of the variant. By convention, 0 is the identifier of the base entity.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:variant";`

Identifier of this component. Should always be minecraft:variant.

Type: *string*
