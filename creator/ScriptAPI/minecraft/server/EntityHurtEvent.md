---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityHurtEvent Class
description: Contents of the @minecraft/server.EntityHurtEvent class.
---
# EntityHurtEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to an entity getting hurt by another entity.

## Properties

### **cause**
`read-only cause: EntityDamageCause;`

A summary of the reason that damage was caused.

Type: [*EntityDamageCause*](EntityDamageCause.md)

### **damage**
`read-only damage: number;`

Describes the amount of damage caused.

Type: *number*

### **damagingEntity**
`read-only damagingEntity: Entity;`

Optional entity that caused the damaging attack, or undefined if the hurt reason was not because of another entity.

Type: [*Entity*](Entity.md)

### **hurtEntity**
`read-only hurtEntity: Entity;`

Entity that was hurt.

Type: [*Entity*](Entity.md)

### **projectile**
`read-only projectile: Entity;`

Optional entity for a projectile that potentially hurt an entity.

Type: [*Entity*](Entity.md)


