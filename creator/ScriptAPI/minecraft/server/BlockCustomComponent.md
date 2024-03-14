---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockCustomComponent Interface
description: Contents of the @minecraft/server.BlockCustomComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockCustomComponent Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a set of events that will be raised for a block. This object must be bound using the BlockRegistry.

## Properties

### **onRandomTick**
`onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;`

This function will be called when a block randomly ticks.

Type: (arg: [*BlockComponentRandomTickEvent*](BlockComponentRandomTickEvent.md)) => *void*

### **onStepOn**
`onStepOn?: (arg: BlockComponentStepOnEvent) => void;`

This function will be called when an entity steps onto the block that this custom component is bound to.

Type: (arg: [*BlockComponentStepOnEvent*](BlockComponentStepOnEvent.md)) => *void*
