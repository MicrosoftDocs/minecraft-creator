---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockCustomComponent Interface
description: Contents of the @minecraft/server.BlockCustomComponent class.
---
# BlockCustomComponent Interface

Contains a set of events that will be raised for a block. This object must be bound using the BlockRegistry.

## Properties

### **beforeOnPlayerPlace**
`beforeOnPlayerPlace?: (arg: BlockComponentPlayerPlaceBeforeEvent) => void;`

This function will be called before a player places the block.

Type: (arg: [*BlockComponentPlayerPlaceBeforeEvent*](BlockComponentPlayerPlaceBeforeEvent.md)) => *void*

### **onEntityFallOn**
`onEntityFallOn?: (arg: BlockComponentEntityFallOnEvent) => void;`

This function will be called when an entity falls onto the block that this custom component is bound to.

Type: (arg: [*BlockComponentEntityFallOnEvent*](BlockComponentEntityFallOnEvent.md)) => *void*

### **onPlace**
`onPlace?: (arg: BlockComponentOnPlaceEvent) => void;`

This function will be called when the block that this custom component is bound to is placed.

Type: (arg: [*BlockComponentOnPlaceEvent*](BlockComponentOnPlaceEvent.md)) => *void*

### **onPlayerDestroy**
`onPlayerDestroy?: (arg: BlockComponentPlayerDestroyEvent) => void;`

This function will be called when a player destroys a specific block.

Type: (arg: [*BlockComponentPlayerDestroyEvent*](BlockComponentPlayerDestroyEvent.md)) => *void*

### **onPlayerInteract**
`onPlayerInteract?: (arg: BlockComponentPlayerInteractEvent) => void;`

This function will be called when a player sucessfully interacts with the block that this custom component is bound to.

Type: (arg: [*BlockComponentPlayerInteractEvent*](BlockComponentPlayerInteractEvent.md)) => *void*

### **onRandomTick**
`onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;`

This function will be called when a block randomly ticks.

Type: (arg: [*BlockComponentRandomTickEvent*](BlockComponentRandomTickEvent.md)) => *void*

### **onStepOff**
`onStepOff?: (arg: BlockComponentStepOffEvent) => void;`

This function will be called when an entity steps off the block that this custom component is bound to.

Type: (arg: [*BlockComponentStepOffEvent*](BlockComponentStepOffEvent.md)) => *void*

### **onStepOn**
`onStepOn?: (arg: BlockComponentStepOnEvent) => void;`

This function will be called when an entity steps onto the block that this custom component is bound to.

Type: (arg: [*BlockComponentStepOnEvent*](BlockComponentStepOnEvent.md)) => *void*

### **onTick**
`onTick?: (arg: BlockComponentTickEvent) => void;`

This function will be called when a block ticks.

Type: (arg: [*BlockComponentTickEvent*](BlockComponentTickEvent.md)) => *void*
