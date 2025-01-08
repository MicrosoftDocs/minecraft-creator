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
`beforeOnPlayerPlace?: (arg0: BlockComponentPlayerPlaceBeforeEvent) => void;`

This function will be called before a player places the block.

Type: (arg0: [*BlockComponentPlayerPlaceBeforeEvent*](BlockComponentPlayerPlaceBeforeEvent.md)) => *void*

### **onEntityFallOn**
`onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent) => void;`

This function will be called when an entity falls onto the block that this custom component is bound to.

Type: (arg0: [*BlockComponentEntityFallOnEvent*](BlockComponentEntityFallOnEvent.md)) => *void*

### **onPlace**
`onPlace?: (arg0: BlockComponentOnPlaceEvent) => void;`

This function will be called when the block that this custom component is bound to is placed.

Type: (arg0: [*BlockComponentOnPlaceEvent*](BlockComponentOnPlaceEvent.md)) => *void*

### **onPlayerDestroy**
`onPlayerDestroy?: (arg0: BlockComponentPlayerDestroyEvent) => void;`

This function will be called when a player destroys a specific block.

Type: (arg0: [*BlockComponentPlayerDestroyEvent*](BlockComponentPlayerDestroyEvent.md)) => *void*

### **onPlayerInteract**
`onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent) => void;`

This function will be called when a player sucessfully interacts with the block that this custom component is bound to.

Type: (arg0: [*BlockComponentPlayerInteractEvent*](BlockComponentPlayerInteractEvent.md)) => *void*

### **onRandomTick**
`onRandomTick?: (arg0: BlockComponentRandomTickEvent) => void;`

This function will be called when a block randomly ticks.

Type: (arg0: [*BlockComponentRandomTickEvent*](BlockComponentRandomTickEvent.md)) => *void*

### **onStepOff**
`onStepOff?: (arg0: BlockComponentStepOffEvent) => void;`

This function will be called when an entity steps off the block that this custom component is bound to.

Type: (arg0: [*BlockComponentStepOffEvent*](BlockComponentStepOffEvent.md)) => *void*

### **onStepOn**
`onStepOn?: (arg0: BlockComponentStepOnEvent) => void;`

This function will be called when an entity steps onto the block that this custom component is bound to.

Type: (arg0: [*BlockComponentStepOnEvent*](BlockComponentStepOnEvent.md)) => *void*

### **onTick**
`onTick?: (arg0: BlockComponentTickEvent) => void;`

This function will be called when a block ticks.

Type: (arg0: [*BlockComponentTickEvent*](BlockComponentTickEvent.md)) => *void*
