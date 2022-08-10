---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityMovementSwayComponent Class
description: Contents of the mojang-minecraft.EntityMovementSwayComponent class.
---
# EntityMovementSwayComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this move control causes the mob to sway side to side giving the impression it is swimming.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

The maximum number in degrees the mob can turn per tick.

Type: *number*

### **swayAmplitude**
`read-only swayAmplitude: number;`

Amplitude of the sway motion.

Type: *number*

### **swayFrequency**
`read-only swayFrequency: number;`

Amount of sway frequency.

Type: *number*

## Constants

### **id**
`static read-only id = "minecraft:movement.sway";`

Identifier of this component. Should always be minecraft:movement.sway.

Type: *string*
