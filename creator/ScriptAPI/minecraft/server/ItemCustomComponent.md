---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCustomComponent Interface
description: Contents of the @minecraft/server.ItemCustomComponent class.
---
# ItemCustomComponent Interface

Contains a set of events that will be raised for an item. This object must be bound using the ItemComponentRegistry.

## Properties

### **onBeforeDurabilityDamage**
`onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;`

This function will be called when an item containing this component is hitting an entity and about to take durability damage.

Type: (arg: [*ItemComponentBeforeDurabilityDamageEvent*](ItemComponentBeforeDurabilityDamageEvent.md)) => *void*

### **onCompleteUse**
`onCompleteUse?: (arg: ItemComponentCompleteUseEvent) => void;`

This function will be called when an item containing this component's use duration was completed.

Type: (arg: [*ItemComponentCompleteUseEvent*](ItemComponentCompleteUseEvent.md)) => *void*

### **onConsume**
`onConsume?: (arg: ItemComponentConsumeEvent) => void;`

This function will be called when an item containing this component is eaten by an entity.

Type: (arg: [*ItemComponentConsumeEvent*](ItemComponentConsumeEvent.md)) => *void*

### **onHitEntity**
`onHitEntity?: (arg: ItemComponentHitEntityEvent) => void;`

This function will be called when an item containing this component is used to hit another entity.

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

This function will be called when an item containing this component is used on a block.

Type: (arg: [*ItemComponentUseOnEvent*](ItemComponentUseOnEvent.md)) => *void*
