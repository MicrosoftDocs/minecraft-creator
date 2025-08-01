---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityMovementSwayComponent Class
description: Contents of the @minecraft/server.EntityMovementSwayComponent class (Version 1.x.x).
---
# EntityMovementSwayComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityMovementSwayComponent.md).

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this move control causes the mob to sway side to side giving the impression it is swimming.

## Properties

### **swayAmplitude**
`read-only swayAmplitude: number;`

Amplitude of the sway motion.

Type: *number*

Notes:
  - This property can throw errors when used.

### **swayFrequency**
`read-only swayFrequency: number;`

Amount of sway frequency.

Type: *number*

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.sway";`

Type: *string*
