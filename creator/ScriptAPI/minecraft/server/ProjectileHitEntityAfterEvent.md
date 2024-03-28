---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ProjectileHitEntityAfterEvent Class
description: Contents of the @minecraft/server.ProjectileHitEntityAfterEvent class.
---
# ProjectileHitEntityAfterEvent Class

Contains information related to a projectile hitting an entity.

## Properties

### **dimension**
`read-only dimension: Dimension;`

Dimension where this projectile hit took place.

Type: [*Dimension*](Dimension.md)

### **hitVector**
`read-only hitVector: Vector3;`

Direction vector of the projectile as it hit an entity.

Type: [*Vector3*](Vector3.md)

### **location**
`read-only location: Vector3;`

Location where the projectile hit occurred.

Type: [*Vector3*](Vector3.md)

### **projectile**
`read-only projectile: Entity;`

Entity for the projectile that hit an entity.

Type: [*Entity*](Entity.md)

### **source**
`read-only source?: Entity;`

Optional source entity that fired the projectile.

Type: [*Entity*](Entity.md)

## Methods
- [getEntityHit](#getentityhit)

### **getEntityHit**
`
getEntityHit(): EntityHitInformation
`

Contains additional information about an entity that was hit.

**Returns** [*EntityHitInformation*](EntityHitInformation.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.
