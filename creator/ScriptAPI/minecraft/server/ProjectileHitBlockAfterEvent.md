---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ProjectileHitBlockAfterEvent Class
description: Contents of the @minecraft/server.ProjectileHitBlockAfterEvent class.
---
# ProjectileHitBlockAfterEvent Class

Contains information related to a projectile hitting a block.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension where this projectile hit took place.

Type: [*Dimension*](Dimension.md)

### **hitVector**
`read-only hitVector: Vector3;`

Direction vector of the projectile as it hit a block.

Type: [*Vector3*](Vector3.md)

### **location**
`read-only location: Vector3;`

Location where the projectile hit occurred.

Type: [*Vector3*](Vector3.md)

### **projectile**
`read-only projectile: Entity;`

Entity for the projectile that hit a block.

Type: [*Entity*](Entity.md)

### **source**
`read-only source?: Entity;`

Optional source entity that fired the projectile.

Type: [*Entity*](Entity.md)

## Methods
- [getBlockHit](#getblockhit)

### **getBlockHit**
`
getBlockHit(): BlockHitInformation
`

Contains additional information about the block that was hit by the projectile.

**Returns** [*BlockHitInformation*](BlockHitInformation.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.
