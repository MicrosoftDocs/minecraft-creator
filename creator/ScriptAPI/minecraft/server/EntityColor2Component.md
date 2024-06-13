---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityColor2Component Class
description: Contents of the @minecraft/server.EntityColor2Component class.
---
# EntityColor2Component Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines the entity's secondary color. Only works on certain entities that have secondary predefined color values (e.g., tropical fish).

## Properties

### **value**
`read-only value: PaletteColor;`

Value of this particular color.

Type: [*PaletteColor*](PaletteColor.md)

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:color2";`

Type: *string*
