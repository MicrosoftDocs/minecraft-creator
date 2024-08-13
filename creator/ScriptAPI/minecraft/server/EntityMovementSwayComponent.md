---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityMovementSwayComponent Class
description: Contents of the @minecraft/server.EntityMovementSwayComponent class.
---
# EntityMovementSwayComponent Class

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this move control causes the mob to sway side to side giving the impression it is swimming.

## Properties

### **swayAmplitude**
`read-only swayAmplitude: number;`

Amplitude of the sway motion.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **swayFrequency**
`read-only swayFrequency: number;`

Amount of sway frequency.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.sway";`

Type: *string*
