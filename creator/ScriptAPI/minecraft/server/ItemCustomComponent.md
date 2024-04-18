---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCustomComponent Interface
description: Contents of the @minecraft/server.ItemCustomComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemCustomComponent Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a set of events that will be raised for an item. This object must be bound using the ItemComponentRegistry.

## Properties

### **onBeforeDurabilityDamage**
`onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;`

Type: (arg: [*ItemComponentBeforeDurabilityDamageEvent*](ItemComponentBeforeDurabilityDamageEvent.md)) => *void*

### **onHitEntity**
`onHitEntity?: (arg: ItemComponentHitEntityEvent) => void;`

Type: (arg: [*ItemComponentHitEntityEvent*](ItemComponentHitEntityEvent.md)) => *void*

### **onMineBlock**
`onMineBlock?: (arg: ItemComponentMineBlockEvent) => void;`

This function will be called when an item containing this component is used to mine a block.

Type: (arg: [*ItemComponentMineBlockEvent*](ItemComponentMineBlockEvent.md)) => *void*

### **onUse**
`onUse?: (arg: ItemComponentUseEvent) => void;`

This function will be called when an item containing this component is used by a player.

Type: (arg: [*ItemComponentUseEvent*](ItemComponentUseEvent.md)) => *void*

### **onUseOn**
`onUseOn?: (arg: ItemComponentUseOnEvent) => void;`

Type: (arg: [*ItemComponentUseOnEvent*](ItemComponentUseOnEvent.md)) => *void*
