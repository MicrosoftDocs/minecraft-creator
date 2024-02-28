---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityVariantComponent Class
description: Contents of the @minecraft/server.EntityVariantComponent class.
---
# EntityVariantComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Used to differentiate the component group of a variant of an entity from others. (e.g. ocelot, villager).

## Properties

### **value**
`read-only value: number;`

Current value for variant for this entity, as specified via components.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:variant";`

Type: *string*
