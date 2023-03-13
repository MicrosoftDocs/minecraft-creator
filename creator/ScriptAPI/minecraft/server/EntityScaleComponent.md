---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityScaleComponent Class
description: Contents of the @minecraft/server.EntityScaleComponent class.
---
# EntityScaleComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Sets the entity's visual size.

## Properties

### **value**
`value: number;`

The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:scale";`

Identifier of this component. Should always be minecraft:scale.

Type: *string*
