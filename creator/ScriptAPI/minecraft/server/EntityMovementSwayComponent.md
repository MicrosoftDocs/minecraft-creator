---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityMovementSwayComponent Class
description: Contents of the @minecraft/server.EntityMovementSwayComponent class.
---
# EntityMovementSwayComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this move control causes the mob to sway side to side giving the impression it is swimming.

## Properties

### **swayAmplitude**
`read-only swayAmplitude: number;`

Amplitude of the sway motion.

Type: *number*

### **swayFrequency**
`read-only swayFrequency: number;`

Amount of sway frequency.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.sway";`

Identifier of this component. Should always be minecraft:movement.sway.

Type: *string*
