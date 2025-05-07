---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityDamageSource Interface
description: Contents of the @minecraft/server.EntityDamageSource class (Version 1.x.x).
---
# EntityDamageSource Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityDamageSource.md).

Provides information about how damage has been applied to an entity.

## Properties

### **cause**
`cause: EntityDamageCause;`

Cause enumeration of damage.

Type: [*EntityDamageCause*](EntityDamageCause.md)

### **damagingEntity**
`damagingEntity?: Entity;`

Optional entity that caused the damage.

Type: [*Entity*](Entity.md)

### **damagingProjectile**
`damagingProjectile?: Entity;`

Optional projectile that may have caused damage.

Type: [*Entity*](Entity.md)
