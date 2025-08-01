---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockComponentTypes Enumeration
description: Contents of the @minecraft/server.BlockComponentTypes enumeration (Version 1.x.x).
---
# BlockComponentTypes Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockComponentTypes.md).

The types of block components that are accessible via function Block.getComponent.

## Constants
### **FluidContainer**
`FluidContainer = "minecraft:fluidContainer"`
### **Inventory**
`Inventory = "minecraft:inventory"`

Represents the inventory of a block in the world. Used with blocks like chests.
### **Piston**
`Piston = "minecraft:piston"`

When present, this block has piston-like behavior. Contains additional properties for discovering block piston state.
### **RecordPlayer**
`RecordPlayer = "minecraft:record_player"`

Represents a block that can play a record.
### **Sign**
`Sign = "minecraft:sign"`

Represents a block that can display text on it.
