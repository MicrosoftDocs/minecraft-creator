---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityApplyDamageByProjectileOptions Interface
description: Contents of the @minecraft/server.EntityApplyDamageByProjectileOptions class.
---
# EntityApplyDamageByProjectileOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Additional options for when damage has been applied via a projectile.

## Properties

### **damagingEntity**
`damagingEntity?: Entity;`

Optional entity that fired the projectile. 

Type: [*Entity*](Entity.md)

### **damagingProjectile**
`damagingProjectile: Entity;`

Projectile that caused damage.

Type: [*Entity*](Entity.md)
