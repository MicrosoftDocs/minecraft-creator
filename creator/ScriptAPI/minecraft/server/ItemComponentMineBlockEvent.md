---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemComponentMineBlockEvent Class
description: Contents of the @minecraft/server.ItemComponentMineBlockEvent class.
---
# ItemComponentMineBlockEvent Class

Contains information regarding the mining of a block using an item.

## Properties

### **block**
`read-only block: Block;`

The block impacted by this event.

Type: [*Block*](Block.md)

### **itemStack**
`read-only itemStack?: ItemStack;`

The item stack used to mine the block.

Type: [*ItemStack*](ItemStack.md)

### **minedBlockPermutation**
`read-only minedBlockPermutation: BlockPermutation;`

The block permutation that was mined.

Type: [*BlockPermutation*](BlockPermutation.md)

### **source**
`read-only source: Entity;`

The entity that mined the block.

Type: [*Entity*](Entity.md)
