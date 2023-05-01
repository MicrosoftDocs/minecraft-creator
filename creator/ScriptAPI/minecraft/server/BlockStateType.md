---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockStateType Class
description: Contents of the @minecraft/server.BlockStateType class.
---
# BlockStateType Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Represents a configurable state value of a block instance.  For example, the facing direction of stairs is accessible as a block state. 

## Properties

### **id**
`read-only id: string;`

Identifier of the block property.

Type: *string*

### **validValues**
`read-only validValues: (boolean | number | string)[];`

A set of valid values for the block property.

Type: (*boolean* | *number* | *string*)[]
