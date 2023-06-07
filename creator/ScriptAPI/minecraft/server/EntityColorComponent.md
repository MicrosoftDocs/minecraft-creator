---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityColorComponent Class
description: Contents of the @minecraft/server.EntityColorComponent class.
---
# EntityColorComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the entity's color. Only works on certain entities that have predefined color values (e.g., sheep, llama, shulker).

## Properties

### **value**
`value: number;`

Value of this particular color.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Constants

### **componentId**
`static read-only componentId = "minecraft:color";`

Type: *string*
