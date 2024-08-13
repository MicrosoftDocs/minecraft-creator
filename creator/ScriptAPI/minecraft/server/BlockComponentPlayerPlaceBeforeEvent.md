---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockComponentPlayerPlaceBeforeEvent Class
description: Contents of the @minecraft/server.BlockComponentPlayerPlaceBeforeEvent class.
---
# BlockComponentPlayerPlaceBeforeEvent Class

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information regarding an event before a player places a block.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the block place event.

Type: *boolean*

### **face**
`read-only face: Direction;`

The block face that was placed onto.

Type: [*Direction*](Direction.md)

### **permutationToPlace**
`permutationToPlace: BlockPermutation;`

The block permutation that will be placed if the event is not cancelled. If set to a different block permutation, that permutation will be placed instead.

Type: [*BlockPermutation*](BlockPermutation.md)

### **player**
`read-only player?: Player;`

The player that is placing this block.

Type: [*Player*](Player.md)
