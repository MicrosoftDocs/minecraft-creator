---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityDamageSource Interface
description: Contents of the @minecraft/server.EntityDamageSource class.
ms.service: minecraft-bedrock-edition
---
# EntityDamageSource Interface

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
