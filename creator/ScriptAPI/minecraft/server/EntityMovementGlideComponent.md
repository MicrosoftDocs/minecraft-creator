---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityMovementGlideComponent Class
description: Contents of the @minecraft/server.EntityMovementGlideComponent class.
---
# EntityMovementGlideComponent Class

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this movement control allows the mob to glide.

## Properties

### **speedWhenTurning**
`read-only speedWhenTurning: number;`

Speed in effect when the entity is turning.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **startSpeed**
`read-only startSpeed: number;`

Start speed during a glide.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.glide";`

Type: *string*
