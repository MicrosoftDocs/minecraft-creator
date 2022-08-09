---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityHitEvent Class
description: Contents of the mojang-minecraft.EntityHitEvent class.
---
# EntityHitEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to an entity hitting (melee attacking) another entity.

## Properties

### **entity**
`read-only entity: Entity;`

Entity that made a hit/melee attack.

Type: [*Entity*](Entity.md)

### **hitBlock**
`read-only hitBlock: Block;`

Block that was hit by the attack, or undefined if the hit attack did not hit a block. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.

Type: [*Block*](Block.md)

### **hitEntity**
`read-only hitEntity: Entity;`

Entity that was hit by the attack, or undefined if the hit attack did not hit an entity. If both hitEntity and hitBlock are undefined, then the entity basically swiped into the air.

Type: [*Entity*](Entity.md)
