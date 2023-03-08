---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.DirectionBlockProperty Class
description: Contents of the @minecraft/server.DirectionBlockProperty class.
---
# DirectionBlockProperty Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockProperty*](BlockProperty.md)

For block properties that take a direction, provides a structured way to specify the direction of a block property.

## Properties

### **value**
`value: Direction;`

Value of the block property.

Type: [*Direction*](Direction.md)

## Methods
- [getValidValues](#getvalidvalues)

### **getValidValues**
`
getValidValues(): Direction[]
`

Returns a set of acceptable potential values for the direction-based block property.

#### **Returns** [*Direction*](Direction.md)[]
