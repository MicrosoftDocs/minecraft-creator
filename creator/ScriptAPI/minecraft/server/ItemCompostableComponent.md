---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCompostableComponent Class
description: Contents of the @minecraft/server.ItemCompostableComponent class.
---
# ItemCompostableComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present, the item can be composted in the composter block if the composting chance is in the range [1 - 100].

## Properties

### **compostingChance**
`read-only compostingChance: number;`

This is the percent chance of the item composting in the composter block and generating a compost layer. Note this api will also return the composting chance for vanilla items that are compostable but do not use the compostable item component.

Type: *number*

Notes:
  - This property can throw errors when used.
    - Throws *Error*

## Constants

### **componentId**
`static read-only componentId = "minecraft:compostable";`

Type: *string*
