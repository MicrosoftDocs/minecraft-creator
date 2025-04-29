---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityMovementGlideComponent Class
description: Contents of the @minecraft/server.EntityMovementGlideComponent class (Version 1.x.x).
---
# EntityMovementGlideComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityMovementGlideComponent.md).

## Extends
- [*EntityBaseMovementComponent*](EntityBaseMovementComponent.md)

When added, this movement control allows the mob to glide.

## Properties

### **speedWhenTurning**
`read-only speedWhenTurning: number;`

Speed in effect when the entity is turning.

Type: *number*

Notes:
  - This property can throw errors when used.

### **startSpeed**
`read-only startSpeed: number;`

Start speed during a glide.

Type: *number*

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:movement.glide";`

Type: *string*
