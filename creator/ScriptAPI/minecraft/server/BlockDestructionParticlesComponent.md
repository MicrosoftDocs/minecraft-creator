---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockDestructionParticlesComponent Class
description: Contents of the @minecraft/server.BlockDestructionParticlesComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockDestructionParticlesComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the particles that appear when the block is destroyed.

## Properties

### **texture**
`read-only texture: string;`

Name of the texture used for the particles.

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws *Error*

### **tintMethod**
`read-only tintMethod: TintMethod;`

Type of tint applied to the particles.

Type: [*TintMethod*](TintMethod.md)

Notes:
  - This property can throw errors when used.
    - Throws *Error*

## Constants

### **componentId**
`static read-only componentId = "minecraft:destruction_particles";`

Type: *string*
