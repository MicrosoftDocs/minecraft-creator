---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:variant";`

Type: *string*
