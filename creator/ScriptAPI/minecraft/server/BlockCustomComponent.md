---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockCustomComponent Interface
description: Contents of the @minecraft/server.BlockCustomComponent class.
---
# BlockCustomComponent Interface

Contains a set of events that will be raised for a block. This object must be bound using the BlockRegistry.

## Properties

### **beforeOnPlayerPlace**
`beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent, arg1: CustomComponentParameters) => void;`

This function will be called before a player places the block.

Type: (arg0: [*BlockComponentPlayerPlaceBeforeEvent*](BlockComponentPlayerPlaceBeforeEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onEntityFallOn**
`onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an entity falls onto the block that this custom component is bound to.

Type: (arg0: [*BlockComponentEntityFallOnEvent*](BlockComponentEntityFallOnEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onPlace**
`onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;`

This function will be called when the block that this custom component is bound to is placed.

Type: (arg0: [*BlockComponentOnPlaceEvent*](BlockComponentOnPlaceEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onPlayerBreak**
`onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;`

Type: (arg0: [*BlockComponentPlayerBreakEvent*](BlockComponentPlayerBreakEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onPlayerInteract**
`onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;`

This function will be called when a player sucessfully interacts with the block that this custom component is bound to.

Type: (arg0: [*BlockComponentPlayerInteractEvent*](BlockComponentPlayerInteractEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onRandomTick**
`onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;`

This function will be called when a block randomly ticks.

Type: (arg0: [*BlockComponentRandomTickEvent*](BlockComponentRandomTickEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onStepOff**
`onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an entity steps off the block that this custom component is bound to.

Type: (arg0: [*BlockComponentStepOffEvent*](BlockComponentStepOffEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onStepOn**
`onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an entity steps onto the block that this custom component is bound to.

Type: (arg0: [*BlockComponentStepOnEvent*](BlockComponentStepOnEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onTick**
`onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;`

This function will be called when a block ticks.

Type: (arg0: [*BlockComponentTickEvent*](BlockComponentTickEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*
