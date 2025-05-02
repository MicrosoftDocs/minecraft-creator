---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.TargetBlockHitAfterEvent Class
description: Contents of the @minecraft/server.TargetBlockHitAfterEvent class (Version 1.x.x).
---
# TargetBlockHitAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/TargetBlockHitAfterEvent.md).

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a target block hit.

## Properties

### **hitVector**
`read-only hitVector: Vector3;`

The position where the source hit the block.

Type: [*Vector3*](Vector3.md)

### **previousRedstonePower**
`read-only previousRedstonePower: number;`

The redstone power before the block is hit.

Type: *number*

### **redstonePower**
`read-only redstonePower: number;`

The redstone power at the time the block is hit.

Type: *number*

### **source**
`read-only source: Entity;`

Optional source that hit the target block.

Type: [*Entity*](Entity.md)
