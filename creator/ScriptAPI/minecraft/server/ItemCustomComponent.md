---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ItemCustomComponent Interface
description: Contents of the @minecraft/server.ItemCustomComponent class.
---
# ItemCustomComponent Interface

Contains a set of events that will be raised for an item. This object must be bound using the ItemComponentRegistry.

## Properties

### **onBeforeDurabilityDamage**
`onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent) => void;`

This function will be called when an item containing this component is hitting an entity and about to take durability damage.

Type: (arg0: [*ItemComponentBeforeDurabilityDamageEvent*](ItemComponentBeforeDurabilityDamageEvent.md)) => *void*

### **onCompleteUse**
`onCompleteUse?: (arg0: ItemComponentCompleteUseEvent) => void;`

This function will be called when an item containing this component's use duration was completed.

Type: (arg0: [*ItemComponentCompleteUseEvent*](ItemComponentCompleteUseEvent.md)) => *void*

### **onConsume**
`onConsume?: (arg0: ItemComponentConsumeEvent) => void;`

This function will be called when an item containing this component is eaten by an entity.

Type: (arg0: [*ItemComponentConsumeEvent*](ItemComponentConsumeEvent.md)) => *void*

### **onHitEntity**
`onHitEntity?: (arg0: ItemComponentHitEntityEvent) => void;`

This function will be called when an item containing this component is used to hit another entity.

Type: (arg0: [*ItemComponentHitEntityEvent*](ItemComponentHitEntityEvent.md)) => *void*

### **onMineBlock**
`onMineBlock?: (arg0: ItemComponentMineBlockEvent) => void;`

This function will be called when an item containing this component is used to mine a block.

Type: (arg0: [*ItemComponentMineBlockEvent*](ItemComponentMineBlockEvent.md)) => *void*

### **onUse**
`onUse?: (arg0: ItemComponentUseEvent) => void;`

This function will be called when an item containing this component is used by a player.

Type: (arg0: [*ItemComponentUseEvent*](ItemComponentUseEvent.md)) => *void*

### **onUseOn**
`onUseOn?: (arg0: ItemComponentUseOnEvent) => void;`

This function will be called when an item containing this component is used on a block.

Type: (arg0: [*ItemComponentUseOnEvent*](ItemComponentUseOnEvent.md)) => *void*
