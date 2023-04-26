---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityDamageSource Interface
description: Contents of the @minecraft/server.EntityDamageSource class.
---
# EntityDamageSource Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

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
