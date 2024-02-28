---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerPlaceBlockBeforeEvent Class
description: Contents of the @minecraft/server.PlayerPlaceBlockBeforeEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerPlaceBlockBeforeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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

The face of the block that the new block is being placed on.

Type: [*Direction*](Direction.md)

### **faceLocation**
`read-only faceLocation: Vector3;`

Location relative to the bottom north-west corner of the block where the new block is being placed onto.

Type: [*Vector3*](Vector3.md)

### **permutationBeingPlaced**
`read-only permutationBeingPlaced: BlockPermutation;`

The block permutation that is being placed.

Type: [*BlockPermutation*](BlockPermutation.md)

### **player**
`read-only player: Player;`

Player that is placing the block for this event.

Type: [*Player*](Player.md)
