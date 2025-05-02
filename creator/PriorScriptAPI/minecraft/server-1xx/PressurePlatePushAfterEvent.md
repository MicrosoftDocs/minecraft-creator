---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PressurePlatePushAfterEvent Class
description: Contents of the @minecraft/server.PressurePlatePushAfterEvent class (Version 1.x.x).
---
# PressurePlatePushAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PressurePlatePushAfterEvent.md).

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a pressure plate push.

## Properties

### **previousRedstonePower**
`read-only previousRedstonePower: number;`

The redstone power of the pressure plate before it was pushed.

Type: *number*

### **redstonePower**
`read-only redstonePower: number;`

The redstone power of the pressure plate at the time of the push.

Type: *number*

### **source**
`read-only source: Entity;`

Source that triggered the pressure plate push.

Type: [*Entity*](Entity.md)
