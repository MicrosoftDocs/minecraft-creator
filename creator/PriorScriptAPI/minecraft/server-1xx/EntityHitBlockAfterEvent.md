---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityHitBlockAfterEvent Class
description: Contents of the @minecraft/server.EntityHitBlockAfterEvent class (Version 1.x.x).
---
# EntityHitBlockAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityHitBlockAfterEvent.md).

Contains information related to an entity hitting a block.

## Properties

### **blockFace**
`read-only blockFace: Direction;`

Face of the block that was hit.

Type: [*Direction*](Direction.md)

### **damagingEntity**
`read-only damagingEntity: Entity;`

Entity that made the attack.

Type: [*Entity*](Entity.md)

### **hitBlock**
`read-only hitBlock: Block;`

Block that was hit by the attack.

Type: [*Block*](Block.md)

### **hitBlockPermutation**
`read-only hitBlockPermutation: BlockPermutation;`

Block permutation that was hit by the attack.

Type: [*BlockPermutation*](BlockPermutation.md)
