---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityHitAfterEvent Class
description: Contents of the @minecraft/server.EntityHitAfterEvent class.
---
# EntityHitAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to an entity hitting (melee attacking) another entity.

## Properties

### **entity**
`read-only entity: Entity;`

Entity that made a hit/melee attack.

Type: [*Entity*](Entity.md)

### **hitBlock**
`read-only hitBlock?: Block;`

Block that was hit by the attack, or undefined if the hit attack did not hit a block. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.

Type: [*Block*](Block.md)

### **hitEntity**
`read-only hitEntity?: Entity;`

Entity that was hit by the attack, or undefined if the hit attack did not hit an entity. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.

Type: [*Entity*](Entity.md)
