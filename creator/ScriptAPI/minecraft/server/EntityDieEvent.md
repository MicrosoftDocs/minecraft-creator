---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityDieEvent Class
description: Contents of the @minecraft/server.EntityDieEvent class.
---
# EntityDieEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to the death of an entity.

## Properties

### **damageSource**
`read-only damageSource: EntityDamageSource;`

Returns the source of the death-dealing damage.

Type: [*EntityDamageSource*](EntityDamageSource.md)

### **deadEntity**
`read-only deadEntity: Entity;`

Entity that has died.

Type: [*Entity*](Entity.md)
